/**
 * Parent/Child Product Importer
 *
 * Imports products from CSV following Parent/Child structure:
 * - One Parent SKU = One Product
 * - Child SKUs = Variants of that product
 *
 * @see Instructions in user documentation
 */
import { Modules } from '@medusajs/framework/utils'
import { createProductsWorkflow, uploadFilesWorkflow } from '@medusajs/medusa/core-flows'
import type { Logger } from '@medusajs/types'
import sharp from 'sharp'

import {
  createAttributeValueWorkflow,
  createAttributesWorkflow
} from '@mercurjs/b2c-core/workflows'
import { AttributeUIComponent } from '@mercurjs/framework'

import { getCategoryForProductType } from './category-mapping'
import type { CSVRow, ParentGroup, ProductListingActionType } from './csv-parser'
import {
  CSVColumn,
  ProductListingAction,
  ProductVariationTheme,
  extractAttributes,
  extractImages,
  extractPrice,
  extractProductMetadata,
  extractQuantity,
  extractVariantMetadata,
  isListingAction
} from './csv-parser'

/**
 * Maximum image dimensions (width or height)
 */
const MAX_IMAGE_DIMENSION = 1500

/**
 * Supported image formats (sharp format names to MIME types and extensions)
 */
const SHARP_FORMAT_TO_MIME: Record<string, { mime: string; ext: string }> = {
  'jpeg': { mime: 'image/jpeg', ext: '.jpg' },
  'jpg': { mime: 'image/jpeg', ext: '.jpg' },
  'png': { mime: 'image/png', ext: '.png' },
  'webp': { mime: 'image/webp', ext: '.webp' },
  'gif': { mime: 'image/gif', ext: '.gif' },
  'svg': { mime: 'image/svg+xml', ext: '.svg' },
  'tiff': { mime: 'image/tiff', ext: '.tiff' },
  'tif': { mime: 'image/tiff', ext: '.tiff' },
  'avif': { mime: 'image/avif', ext: '.avif' },
  'heif': { mime: 'image/heif', ext: '.heif' }
} as const

/**
 * Detect image format and metadata using sharp
 * @param buffer - Image buffer
 * @param logger - Logger instance
 * @returns Object with format, mimeType, width, height, or null if invalid
 */
async function detectImageWithSharp(
  buffer: Buffer,
  logger: Logger
): Promise<{
  format: string
  mimeType: string
  extension: string
  width: number
  height: number
  size: number
} | null> {
  try {
    const image = sharp(buffer)
    const metadata = await image.metadata()

    if (!metadata.format) {
      logger.warn('Sharp could not detect image format')
      return null
    }

    const formatInfo = SHARP_FORMAT_TO_MIME[metadata.format]
    if (!formatInfo) {
      logger.warn(`Unsupported image format detected by sharp: ${metadata.format}`)
      return null
    }

    return {
      format: metadata.format,
      mimeType: formatInfo.mime,
      extension: formatInfo.ext,
      width: metadata.width || 0,
      height: metadata.height || 0,
      size: buffer.length
    }
  } catch (error: any) {
    logger.warn(`Sharp failed to parse image: ${error.message}`)
    return null
  }
}

/**
 * Resize image if it exceeds maximum dimensions while maintaining aspect ratio
 * @param buffer - Image buffer
 * @param format - Sharp image format
 * @param width - Image width
 * @param height - Image height
 * @param logger - Logger instance
 * @returns Resized image buffer or original if no resize needed
 */
async function resizeImageIfNeeded(
  buffer: Buffer,
  format: string,
  width: number,
  height: number,
  logger: Logger
): Promise<Buffer> {
  try {
    // Skip resizing for SVG (vector format, doesn't need resizing)
    if (format === 'svg') {
      logger.debug('Skipping resize for SVG (vector format)')
      return buffer
    }

    // Skip resizing for GIF to preserve animation
    if (format === 'gif') {
      logger.debug('Skipping resize for GIF to preserve animation')
      return buffer
    }

    // Check if resize is needed
    if (width <= MAX_IMAGE_DIMENSION && height <= MAX_IMAGE_DIMENSION) {
      logger.debug(`Image dimensions ${width}x${height} are within limits, no resize needed`)
      return buffer
    }

    // Calculate new dimensions maintaining aspect ratio
    let newWidth: number
    let newHeight: number

    if (width > height) {
      // Landscape or square - constrain by width
      newWidth = MAX_IMAGE_DIMENSION
      newHeight = Math.round((height / width) * MAX_IMAGE_DIMENSION)
    } else {
      // Portrait - constrain by height
      newHeight = MAX_IMAGE_DIMENSION
      newWidth = Math.round((width / height) * MAX_IMAGE_DIMENSION)
    }

    logger.debug(
      `Resizing image from ${width}x${height} to ${newWidth}x${newHeight} (maintaining aspect ratio)`
    )

    // Resize image and preserve original format
    let resizedImage = sharp(buffer).resize(newWidth, newHeight, {
      fit: 'inside', // Ensure image fits within dimensions
      withoutEnlargement: true // Don't upscale small images
    })

    // Apply format-specific encoding
    switch (format) {
      case 'jpeg':
      case 'jpg':
        resizedImage = resizedImage.jpeg({ quality: 90, mozjpeg: true })
        break
      case 'png':
        resizedImage = resizedImage.png({ quality: 90, compressionLevel: 9 })
        break
      case 'webp':
        resizedImage = resizedImage.webp({ quality: 90 })
        break
      case 'tiff':
      case 'tif':
        resizedImage = resizedImage.tiff({ quality: 90 })
        break
      case 'avif':
        resizedImage = resizedImage.avif({ quality: 90 })
        break
      default:
        // For any other format, convert to JPEG
        logger.debug(`Converting ${format} to JPEG during resize`)
        resizedImage = resizedImage.jpeg({ quality: 90, mozjpeg: true })
    }

    const resizedBuffer = await resizedImage.toBuffer()
    const originalSizeKB = (buffer.length / 1024).toFixed(2)
    const newSizeKB = (resizedBuffer.length / 1024).toFixed(2)

    logger.debug(
      `Image resized successfully: ${originalSizeKB} KB → ${newSizeKB} KB (${((1 - resizedBuffer.length / buffer.length) * 100).toFixed(1)}% reduction)`
    )

    return resizedBuffer
  } catch (error: any) {
    logger.warn(`Failed to resize image: ${error.message}, using original`)
    return buffer
  }
}

/**
 * Download a remote image and upload it to S3 using uploadFilesWorkflow
 * Uses a cache to avoid downloading the same image multiple times across different products
 * Supports all major image formats: JPG, PNG, WEBP, GIF, SVG, BMP, TIFF, ICO
 * @param url - Remote image URL to download
 * @param scope - Medusa scope (container)
 * @param logger - Logger instance
 * @param imageCache - Cache mapping remote URLs to uploaded S3 URLs (shared across imports)
 * @returns Uploaded file URL or null if failed
 */
async function downloadAndUploadImage(
  url: string,
  scope: any,
  logger: Logger,
  imageCache: Map<string, string>
): Promise<string | null> {
  try {
    // Skip if URL is empty or not a remote URL (http/https)
    if (!url || !url.trim()) {
      return null
    }

    const trimmedUrl = url.trim()
    if (!trimmedUrl.startsWith('http://') && !trimmedUrl.startsWith('https://')) {
      // Not a remote URL, skip uploading (might be local path)
      logger.debug(`Skipping non-remote URL: ${trimmedUrl}`)
      return null
    }

    // Check cache first - if we've already uploaded this URL, reuse it
    if (imageCache.has(trimmedUrl)) {
      const cachedUrl = imageCache.get(trimmedUrl)!
      logger.debug(`Using cached image for ${trimmedUrl} -> ${cachedUrl}`)
      return cachedUrl
    }

    // Download the remote image
    logger.debug(`Downloading image from ${trimmedUrl}...`)
    const response = await fetch(trimmedUrl)
    if (!response.ok) {
      logger.warn(`Failed to download image from ${trimmedUrl}: ${response.statusText}`)
      return null
    }

    const arrayBuffer = await response.arrayBuffer()
    let buffer: Buffer = Buffer.from(arrayBuffer)

    // Validate that we actually got image data
    if (buffer.length === 0) {
      logger.warn(`Downloaded empty file from ${trimmedUrl}`)
      return null
    }

    // Detect image format and metadata using sharp
    const imageInfo = await detectImageWithSharp(buffer, logger)
    if (!imageInfo) {
      logger.warn(`Could not detect valid image format for ${trimmedUrl}`)
      return null
    }

    const { format, mimeType, extension, width, height, size } = imageInfo
    logger.debug(
      `Detected image: ${format.toUpperCase()} ${width}x${height} (${(size / 1024).toFixed(2)} KB)`
    )

    // Resize image if it exceeds maximum dimensions (1500x1500)
    buffer = await resizeImageIfNeeded(buffer, format, width, height, logger)

    // Prepare base64 content for uploadFilesWorkflow
    const base64 = buffer.toString('base64')

    // Derive filename from URL
    const urlParts = trimmedUrl.split('/')
    let filename = urlParts[urlParts.length - 1]?.split('?')[0] || '' // Remove query params

    // Ensure filename has correct extension based on detected format
    if (!filename || filename === '') {
      // No filename in URL, generate one
      filename = `image-${Date.now()}${extension}`
    } else {
      // Ensure correct extension
      const currentExt = filename.toLowerCase().match(/\.[^.]+$/)?.[0] || ''
      if (currentExt !== extension) {
        // Wrong or missing extension, fix it
        if (currentExt) {
          // Replace wrong extension
          filename = filename.replace(/\.[^.]+$/, extension)
        } else {
          // Add missing extension
          filename = `${filename}${extension}`
        }
      }
    }

    logger.debug(`Uploading image: ${filename} (${mimeType}, ${(buffer.length / 1024).toFixed(2)} KB)`)

    // Upload to Medusa using uploadFilesWorkflow
    const { result: files } = await uploadFilesWorkflow(scope).run({
      input: {
        files: [
          {
            filename,
            mimeType,
            content: base64,
            access: 'public'
          }
        ]
      }
    })

    const uploadedUrl = files[0]?.url
    if (!uploadedUrl) {
      logger.warn(`Upload workflow succeeded but no URL returned for ${trimmedUrl}`)
      return null
    }

    logger.debug(`Successfully uploaded image: ${filename} -> ${uploadedUrl}`)

    // Store in cache for future reuse
    imageCache.set(trimmedUrl, uploadedUrl)

    return uploadedUrl
  } catch (error: any) {
    logger.warn(`Error downloading/uploading image from ${url}: ${error.message}`)
    return null
  }
}

/**
 * Parse Variation Theme Name and extract column names
 * Example: "Size/Colour/Units per Product" -> ["Size", "Colour", "Units per Product"]
 */
function parseVariationTheme(
  variationTheme: string,
  logger: Logger,
  parentSKU: string
): string[] {
  if (!variationTheme || variationTheme.trim() === '') {
    return []
  }

  // Split by "/" and trim each part
  const parts = variationTheme
    .split('/')
    .map((part) => part.trim())
    .filter((part) => part.length > 0)

  // Match each part to ProductVariationTheme values
  const themeValues = Object.values(ProductVariationTheme)
  const matchedColumns: string[] = []

  for (const part of parts) {
    // Try exact match (case-insensitive)
    const match = themeValues.find(
      (value) => value.toLowerCase() === part.toLowerCase()
    )
    if (match) {
      matchedColumns.push(match)
    } else {
      logger.warn(
        `[${parentSKU}] ⚠️  Variation theme attribute "${part}" does not match any ProductVariationTheme value`
      )
    }
  }

  return matchedColumns
}

interface ImportContext {
  sellerId: string
  stockLocationId: string
  salesChannelId: string
  regionId: string
  imageCache?: Map<string, string> // Maps remote URL -> uploaded S3 URL (shared across all imports in a batch)
}

/**
 * Result of importing a parent group
 */
interface ImportResult {
  success: boolean
  productId?: string
  error?: string
  skipped?: boolean  // true for Ignore action
  action?: ProductListingActionType  // which action was performed
}

/**
 * Generate a URL-friendly handle from a product title
 */
function generateHandle(title: string, sku: string): string {
  let handle = title
    .toLowerCase()
    .replace(/\|/g, ' ') // Replace pipes with spaces first
    .replace(/[^a-z0-9\s-]/g, '') // Remove special characters except spaces and hyphens
    .trim()
    .replace(/\s+/g, '-') // Replace spaces with hyphens
    .replace(/-+/g, '-') // Replace multiple hyphens with single hyphen
    .substring(0, 200) // Limit length
    .replace(/^-+|-+$/g, '') // Remove leading/trailing hyphens AFTER substring

  // Ensure we don't have an empty handle
  if (!handle || handle === '') {
    handle = `product-${sku.toLowerCase()}`
  }

  return handle
}

/**
 * Handle DELETE action: Delete product and all its variants, inventory items, and links
 */
async function handleDeleteAction(
  group: ParentGroup,
  context: ImportContext,
  logger: Logger,
  scope: any,
): Promise<ImportResult> {
  const { parentRow, parentSKU } = group
  const { sellerId } = context

  logger.debug(`[${parentSKU}] 🗑️  Handling DELETE action`)

  try {
    const { ContainerRegistrationKeys } = await import('@medusajs/framework/utils')
    const query = scope.resolve(ContainerRegistrationKeys.QUERY)
    const inventoryModule = scope.resolve(Modules.INVENTORY)
    const remoteLink = scope.resolve('remoteLink')
    const knex = scope.resolve(ContainerRegistrationKeys.PG_CONNECTION)

    // Generate handle to find product
    const productTitle = parentRow[CSVColumn.PRODUCT_NAME] || `Product ${parentSKU}`
    const handle = generateHandle(productTitle, parentSKU)

    // Find product by handle
    let product: any = null
    try {
      const { data } = await query.graph({
        entity: 'product',
        fields: ['id', 'handle', 'title', 'variants.id', 'variants.sku'],
        filters: { handle }
      })
      if (data && data.length > 0) {
        product = data[0]
      }
    } catch (error: any) {
      logger.debug(`[${parentSKU}] Could not find product by handle: ${error.message}`)
    }

    // If not found by handle, try finding by variant SKU
    if (!product) {
      const variantSkus = group.childRows.map((row) => row[CSVColumn.SKU]).filter(Boolean)
      if (variantSkus.length > 0) {
        try {
          const { data: variantData } = await query.graph({
            entity: 'product_variant',
            fields: ['id', 'sku', 'product_id'],
            filters: { sku: variantSkus }
          })
          if (variantData && variantData.length > 0) {
            const productId = variantData[0].product_id
            const { data: productData } = await query.graph({
              entity: 'product',
              fields: ['id', 'handle', 'title', 'variants.id', 'variants.sku'],
              filters: { id: productId }
            })
            if (productData && productData.length > 0) {
              product = productData[0]
            }
          }
        } catch (error: any) {
          logger.debug(`[${parentSKU}] Could not find product by variant SKU: ${error.message}`)
        }
      }
    }

    if (!product) {
      logger.warn(`[${parentSKU}] ⚠️  Product not found for deletion, nothing to delete`)
      return {
        success: true,
        skipped: true,
        action: ProductListingAction.DELETE
      }
    }

    const productId = product.id
    const variants = product.variants || []

    logger.debug(`[${parentSKU}] Found product ${productId} with ${variants.length} variants to delete`)

    // Delete inventory for each variant
    for (const variant of variants) {
      try {
        // Find linked inventory item
        const existingItems = await inventoryModule.listInventoryItems({
          sku: variant.sku
        })

        if (existingItems && existingItems.length > 0) {
          const inventoryItemId = existingItems[0].id

          // 1. Delete inventory levels at all locations
          const levels = await inventoryModule.listInventoryLevels({
            inventory_item_id: inventoryItemId
          })

          if (levels && levels.length > 0) {
            const levelIds = levels.map((l: any) => l.id)
            await inventoryModule.deleteInventoryLevels(levelIds)
            logger.debug(`[${parentSKU}]   Deleted ${levelIds.length} inventory levels for variant ${variant.sku}`)
          }

          // 2. Remove variant ↔ inventory link
          try {
            await remoteLink.dismiss({
              [Modules.PRODUCT]: {
                variant_id: variant.id
              },
              [Modules.INVENTORY]: {
                inventory_item_id: inventoryItemId
              }
            })
          } catch (linkError: any) {
            logger.debug(`[${parentSKU}]   Could not remove variant-inventory link: ${linkError.message}`)
          }

          // 3. Remove seller ↔ inventory link
          try {
            await knex('seller_seller_inventory_inventory_item')
              .where({
                seller_id: sellerId,
                inventory_item_id: inventoryItemId
              })
              .del()
          } catch (linkError: any) {
            logger.debug(`[${parentSKU}]   Could not remove seller-inventory link: ${linkError.message}`)
          }

          // 4. Delete inventory item
          await inventoryModule.deleteInventoryItems([inventoryItemId])
          logger.debug(`[${parentSKU}]   Deleted inventory item for variant ${variant.sku}`)
        }
      } catch (invError: any) {
        logger.warn(`[${parentSKU}]   ⚠️  Error deleting inventory for variant ${variant.sku}: ${invError.message}`)
        // Continue with other variants
      }
    }

    // Remove product ↔ seller link
    try {
      await knex('seller_seller_product_product')
        .where({
          seller_id: sellerId,
          product_id: productId
        })
        .del()
      logger.debug(`[${parentSKU}] Removed product-seller link`)
    } catch (linkError: any) {
      logger.debug(`[${parentSKU}] Could not remove product-seller link: ${linkError.message}`)
    }

    // Delete product (this cascades to variants)
    const { deleteProductsWorkflow } = await import('@medusajs/medusa/core-flows')
    await deleteProductsWorkflow(scope).run({
      input: { ids: [productId] }
    })

    logger.info(`[${parentSKU}] ✓ Successfully deleted product ${productId} and all associated data`)

    return {
      success: true,
      productId,
      action: ProductListingAction.DELETE
    }
  } catch (error: any) {
    logger.error(`[${parentSKU}] ❌ Delete action failed: ${error.message}`)
    return {
      success: false,
      error: `Delete failed: ${error.message}`,
      action: ProductListingAction.DELETE
    }
  }
}

/**
 * Handle EDIT action: Partial update - only update fields that differ from existing values
 */
async function handleEditAction(
  group: ParentGroup,
  context: ImportContext,
  logger: Logger,
  scope: any,
  productModule: any,
  imageCache: Map<string, string>
): Promise<ImportResult> {
  const { parentRow, childRows, parentSKU } = group
  const { stockLocationId } = context

  logger.debug(`[${parentSKU}] ✏️  Handling EDIT action`)

  // Filter child rows by action
  const childRowsToDelete = childRows.filter((row) =>
    isListingAction(row[CSVColumn.LISTING_ACTION] || '', ProductListingAction.DELETE)
  )
  const childRowsToProcess = childRows.filter((row) =>
    !isListingAction(row[CSVColumn.LISTING_ACTION] || '', ProductListingAction.DELETE) &&
    !isListingAction(row[CSVColumn.LISTING_ACTION] || '', ProductListingAction.IGNORE)
  )

  try {
    const { ContainerRegistrationKeys } = await import('@medusajs/framework/utils')
    const query = scope.resolve(ContainerRegistrationKeys.QUERY)
    const inventoryModule = scope.resolve(Modules.INVENTORY)

    // Handle child deletions first
    if (childRowsToDelete.length > 0) {
      const deleteResult = await handleChildDeletions(childRowsToDelete, parentSKU, context, logger, scope)
      logger.debug(`[${parentSKU}] Child deletion result: ${deleteResult.deletedCount} deleted, ${deleteResult.errors.length} errors`)
    }

    // Generate handle to find product
    const productTitle = parentRow[CSVColumn.PRODUCT_NAME] || `Product ${parentSKU}`
    const handle = generateHandle(productTitle, parentSKU)

    // Find existing product by handle
    let product: any = null
    try {
      const { data } = await query.graph({
        entity: 'product',
        fields: [
          'id', 'handle', 'title', 'description', 'status',
          'images.id', 'images.url',
          'categories.id',
          'variants.id', 'variants.sku', 'variants.title', 'variants.metadata',
          'variants.prices.id', 'variants.prices.amount', 'variants.prices.currency_code',
          'variants.options.id', 'variants.options.value', 'variants.options.option.title'
        ],
        filters: { handle }
      })
      if (data && data.length > 0) {
        product = data[0]
      }
    } catch (error: any) {
      logger.debug(`[${parentSKU}] Could not find product by handle: ${error.message}`)
    }

    // If not found by handle, try finding by variant SKU
    if (!product) {
      const variantSkus = childRows.map((row) => row[CSVColumn.SKU]).filter(Boolean)
      if (variantSkus.length > 0) {
        try {
          const { data: variantData } = await query.graph({
            entity: 'product_variant',
            fields: ['id', 'sku', 'product_id'],
            filters: { sku: variantSkus }
          })
          if (variantData && variantData.length > 0) {
            const productId = variantData[0].product_id
            const { data: productData } = await query.graph({
              entity: 'product',
              fields: [
                'id', 'handle', 'title', 'description', 'status',
                'images.id', 'images.url',
                'categories.id',
                'variants.id', 'variants.sku', 'variants.title', 'variants.metadata',
                'variants.prices.id', 'variants.prices.amount', 'variants.prices.currency_code',
                'variants.options.id', 'variants.options.value', 'variants.options.option.title'
              ],
              filters: { id: productId }
            })
            if (productData && productData.length > 0) {
              product = productData[0]
            }
          }
        } catch (error: any) {
          logger.debug(`[${parentSKU}] Could not find product by variant SKU: ${error.message}`)
        }
      }
    }

    if (!product) {
      logger.warn(`[${parentSKU}] ⚠️  Product not found for edit, nothing to update`)
      return {
        success: false,
        error: 'Product not found for edit action',
        action: ProductListingAction.EDIT
      }
    }

    const productId = product.id

    // Build product updates - only include fields that differ
    const productUpdates: any = {}

    // Check title
    const newTitle = parentRow[CSVColumn.PRODUCT_NAME] || ''
    if (newTitle && newTitle.trim() !== '' && newTitle !== product.title) {
      productUpdates.title = newTitle
      logger.debug(`[${parentSKU}]   Title changed: "${product.title}" → "${newTitle}"`)
    }

    // Check description
    let newDescription = parentRow[CSVColumn.PRODUCT_DESCRIPTION] || ''
    if (!newDescription.trim() && childRowsToProcess.length > 0) {
      // Try to get from first child row
      newDescription = childRowsToProcess[0][CSVColumn.PRODUCT_DESCRIPTION] || ''
    }
    if (newDescription && newDescription.trim() !== '' && newDescription !== product.description) {
      productUpdates.description = newDescription
      logger.debug(`[${parentSKU}]   Description changed`)
    }

    // Check and update images
    const newImageUrls = extractImages(parentRow)
    childRowsToProcess.forEach((childRow) => {
      const childImages = extractImages(childRow)
      childImages.forEach((url) => {
        if (!newImageUrls.includes(url)) {
          newImageUrls.push(url)
        }
      })
    })

    const existingImageUrls = (product.images || []).map((img: any) => img.url)
    const imagesToAdd = newImageUrls.filter((url) => !existingImageUrls.includes(url))

    if (imagesToAdd.length > 0) {
      // Download and upload new images
      const uploadedImages: { url: string }[] = [...(product.images || []).map((img: any) => ({ url: img.url }))]

      for (const remoteUrl of imagesToAdd) {
        const uploadedUrl = await downloadAndUploadImage(remoteUrl, scope, logger, imageCache)
        if (uploadedUrl) {
          uploadedImages.push({ url: uploadedUrl })
        }
      }

      if (uploadedImages.length > existingImageUrls.length) {
        productUpdates.images = uploadedImages
        logger.debug(`[${parentSKU}]   Adding ${imagesToAdd.length} new images`)
      }
    }

    // Update product if there are changes
    if (Object.keys(productUpdates).length > 0) {
      const { updateProductsWorkflow } = await import('@medusajs/medusa/core-flows')
      await updateProductsWorkflow(scope).run({
        input: {
          selector: { id: productId },
          update: productUpdates
        }
      })
      logger.debug(`[${parentSKU}] ✓ Updated product with ${Object.keys(productUpdates).length} field(s)`)
    } else {
      logger.debug(`[${parentSKU}] No product-level changes detected`)
    }

    // Update variants
    const existingVariants = product.variants || []
    const existingVariantMap = new Map<string, any>()
    existingVariants.forEach((v: any) => {
      if (v.sku) {
        existingVariantMap.set(v.sku, v)
      }
    })

    for (const childRow of childRowsToProcess) {
      const sku = childRow[CSVColumn.SKU]
      if (!sku) continue

      const existingVariant = existingVariantMap.get(sku)
      if (!existingVariant) {
        logger.debug(`[${parentSKU}]   Variant ${sku} not found in product, skipping`)
        continue
      }

      const variantUpdates: any = {}

      // Check variant title
      const newVariantTitle = childRow[CSVColumn.PRODUCT_NAME] || ''
      if (newVariantTitle && newVariantTitle !== existingVariant.title) {
        variantUpdates.title = newVariantTitle
        logger.debug(`[${parentSKU}]   Variant ${sku} title changed: "${existingVariant.title}" → "${newVariantTitle}"`)
      }

      // Check price
      const newPrice = extractPrice(childRow)
      const existingPrice = existingVariant.prices?.[0]?.amount || 0
      if (newPrice !== existingPrice) {
        variantUpdates.prices = [{
          amount: newPrice,
          currency_code: 'gbp'
        }]
        logger.debug(`[${parentSKU}]   Variant ${sku} price changed: ${existingPrice} → ${newPrice}`)
      }

      // Note: Variant options cannot be updated after creation in Medusa.
      // To change options, delete and recreate the variant.

      // Check metadata (including variant images and bullet points)
      const newMetadata = extractVariantMetadata(childRow)

      // Extract variant-specific images
      const variantImages = extractImages(childRow)
      if (variantImages.length > 0) {
        // Download and upload new variant images
        const uploadedVariantImages: string[] = []
        for (const remoteUrl of variantImages) {
          const uploadedUrl = await downloadAndUploadImage(remoteUrl, scope, logger, imageCache)
          if (uploadedUrl) {
            uploadedVariantImages.push(uploadedUrl)
          }
        }
        if (uploadedVariantImages.length > 0) {
          newMetadata.variant_images = uploadedVariantImages.join(',')
          newMetadata.variant_main_image = uploadedVariantImages[0]
        }
      }

      // Add bullet points to metadata if present
      const bulletPoints = childRow[CSVColumn.BULLET_POINTS] || ''
      if (bulletPoints.trim()) {
        newMetadata.bullet_points = bulletPoints.trim()
      }

      const existingMetadata = existingVariant.metadata || {}
      let metadataChanged = false
      for (const [key, value] of Object.entries(newMetadata)) {
        if (existingMetadata[key] !== value) {
          metadataChanged = true
          logger.debug(`[${parentSKU}]   Variant ${sku} metadata.${key} changed`)
          break
        }
      }
      if (metadataChanged) {
        variantUpdates.metadata = { ...existingMetadata, ...newMetadata }
        logger.debug(`[${parentSKU}]   Variant ${sku} metadata will be updated`)
      }

      // Update variant if there are changes
      if (Object.keys(variantUpdates).length > 0) {
        try {
          const { updateProductVariantsWorkflow } = await import('@medusajs/medusa/core-flows')
          await updateProductVariantsWorkflow.run({
            container: scope,
            input: {
              selector: { id: existingVariant.id, product_id: productId },
              update: variantUpdates
            }
          })
          logger.debug(`[${parentSKU}]   ✓ Updated variant ${sku}`)
        } catch (variantError: any) {
          logger.warn(`[${parentSKU}]   ⚠️  Failed to update variant ${sku}: ${variantError.message}`)
        }
      }

      // Update inventory quantity
      const newQuantity = extractQuantity(childRow)
      try {
        const existingItems = await inventoryModule.listInventoryItems({ sku })
        if (existingItems && existingItems.length > 0) {
          const inventoryItemId = existingItems[0].id
          const existingLevels = await inventoryModule.listInventoryLevels({
            inventory_item_id: inventoryItemId,
            location_id: stockLocationId
          })

          if (existingLevels && existingLevels.length > 0) {
            const existingLevel = existingLevels[0]
            if (existingLevel.stocked_quantity !== newQuantity) {
              await inventoryModule.updateInventoryLevels([{
                id: existingLevel.id,
                stocked_quantity: newQuantity
              }])
              logger.debug(`[${parentSKU}]   Variant ${sku} inventory changed: ${existingLevel.stocked_quantity} → ${newQuantity}`)
            }
          }
        }
      } catch (invError: any) {
        logger.warn(`[${parentSKU}]   ⚠️  Failed to update inventory for ${sku}: ${invError.message}`)
      }
    }

    logger.info(`[${parentSKU}] ✓ Successfully completed EDIT action for product ${productId}`)

    return {
      success: true,
      productId,
      action: ProductListingAction.EDIT
    }
  } catch (error: any) {
    logger.error(`[${parentSKU}] ❌ Edit action failed: ${error.message}`)
    return {
      success: false,
      error: `Edit failed: ${error.message}`,
      action: ProductListingAction.EDIT
    }
  }
}

/**
 * Handle deletion of individual child variants that have DELETE action
 * This is called when parent has CREATE/EDIT but some children have DELETE
 */
async function handleChildDeletions(
  childRowsToDelete: CSVRow[],
  parentSKU: string,
  context: ImportContext,
  logger: Logger,
  scope: any
): Promise<{ deletedCount: number; errors: string[] }> {
  const { sellerId } = context
  const errors: string[] = []
  let deletedCount = 0

  if (childRowsToDelete.length === 0) {
    return { deletedCount: 0, errors: [] }
  }

  logger.debug(`[${parentSKU}] 🗑️  Processing ${childRowsToDelete.length} child variants for deletion`)

  try {
    const { ContainerRegistrationKeys } = await import('@medusajs/framework/utils')
    const query = scope.resolve(ContainerRegistrationKeys.QUERY)
    const inventoryModule = scope.resolve(Modules.INVENTORY)
    const remoteLink = scope.resolve('remoteLink')
    const knex = scope.resolve(ContainerRegistrationKeys.PG_CONNECTION)

    // Collect SKUs to delete
    const skusToDelete = childRowsToDelete
      .map((row) => row[CSVColumn.SKU])
      .filter((sku) => sku && sku.trim() !== '')

    if (skusToDelete.length === 0) {
      logger.debug(`[${parentSKU}] No valid SKUs found for deletion`)
      return { deletedCount: 0, errors: [] }
    }

    // Find existing variants by SKU
    const { data: existingVariants } = await query.graph({
      entity: 'product_variant',
      fields: ['id', 'sku', 'product_id'],
      filters: { sku: skusToDelete }
    })

    if (!existingVariants || existingVariants.length === 0) {
      logger.debug(`[${parentSKU}] No existing variants found for SKUs: ${skusToDelete.join(', ')}`)
      return { deletedCount: 0, errors: [] }
    }

    const variantIdsToDelete: string[] = []

    // Delete inventory for each variant first
    for (const variant of existingVariants) {
      try {
        // Find linked inventory item
        const existingItems = await inventoryModule.listInventoryItems({
          sku: variant.sku
        })

        if (existingItems && existingItems.length > 0) {
          const inventoryItemId = existingItems[0].id

          // 1. Delete inventory levels at all locations
          const levels = await inventoryModule.listInventoryLevels({
            inventory_item_id: inventoryItemId
          })

          if (levels && levels.length > 0) {
            const levelIds = levels.map((l: any) => l.id)
            await inventoryModule.deleteInventoryLevels(levelIds)
            logger.debug(`[${parentSKU}]   Deleted ${levelIds.length} inventory levels for variant ${variant.sku}`)
          }

          // 2. Remove variant ↔ inventory link
          try {
            await remoteLink.dismiss({
              [Modules.PRODUCT]: {
                variant_id: variant.id
              },
              [Modules.INVENTORY]: {
                inventory_item_id: inventoryItemId
              }
            })
          } catch (linkError: any) {
            logger.debug(`[${parentSKU}]   Could not remove variant-inventory link: ${linkError.message}`)
          }

          // 3. Remove seller ↔ inventory link
          try {
            await knex('seller_seller_inventory_inventory_item')
              .where({
                seller_id: sellerId,
                inventory_item_id: inventoryItemId
              })
              .del()
          } catch (linkError: any) {
            logger.debug(`[${parentSKU}]   Could not remove seller-inventory link: ${linkError.message}`)
          }

          // 4. Delete inventory item
          await inventoryModule.deleteInventoryItems([inventoryItemId])
          logger.debug(`[${parentSKU}]   Deleted inventory item for variant ${variant.sku}`)
        }

        variantIdsToDelete.push(variant.id)
      } catch (invError: any) {
        const errorMsg = `Failed to delete inventory for variant ${variant.sku}: ${invError.message}`
        logger.warn(`[${parentSKU}]   ⚠️  ${errorMsg}`)
        errors.push(errorMsg)
        // Continue with variant deletion anyway
        variantIdsToDelete.push(variant.id)
      }
    }

    // Delete the variants using the workflow
    if (variantIdsToDelete.length > 0) {
      const { deleteProductVariantsWorkflow } = await import('@medusajs/medusa/core-flows')
      await deleteProductVariantsWorkflow(scope).run({
        input: { ids: variantIdsToDelete }
      })
      deletedCount = variantIdsToDelete.length
      logger.info(`[${parentSKU}] ✓ Deleted ${deletedCount} variants: ${existingVariants.map((v: any) => v.sku).join(', ')}`)
    }

  } catch (error: any) {
    const errorMsg = `Failed to delete child variants: ${error.message}`
    logger.error(`[${parentSKU}] ❌ ${errorMsg}`)
    errors.push(errorMsg)
  }

  return { deletedCount, errors }
}

/**
 * Import a single parent group (product with variants)
 */
export async function importParentGroup(
  group: ParentGroup,
  context: ImportContext,
  logger: Logger,
  scope: any
): Promise<ImportResult> {
  const { parentRow, childRows, parentSKU } = group
  const { sellerId, stockLocationId, salesChannelId } = context

  logger.debug(`\n🔍 [DEBUG] Starting import of parent product: ${parentSKU}`)

  // Detect action from parent row
  const actionRaw = parentRow[CSVColumn.LISTING_ACTION] || ''
  let action: ProductListingActionType = ProductListingAction.CREATE // default

  if (isListingAction(actionRaw, ProductListingAction.IGNORE)) {
    logger.debug(`[${parentSKU}] Action: IGNORE - skipping`)
    return { success: true, productId: undefined, skipped: true, action: ProductListingAction.IGNORE }
  }
  if (isListingAction(actionRaw, ProductListingAction.DELETE)) {
    action = ProductListingAction.DELETE
  } else if (isListingAction(actionRaw, ProductListingAction.EDIT)) {
    action = ProductListingAction.EDIT
  }
  // CREATE is default

  logger.debug(`[${parentSKU}] Action detected: ${action}`)

  try {
    // 1. Get Product Module
    const productModule = scope.resolve(Modules.PRODUCT)
    logger.debug(`[${parentSKU}] ✓ Product module resolved`)

    // Handle DELETE action (for entire product)
    if (action === ProductListingAction.DELETE) {
      return await handleDeleteAction(group, context, logger, scope)
    }

    // Handle EDIT action
    if (action === ProductListingAction.EDIT) {
      const imageCache = context.imageCache || new Map<string, string>()
      return await handleEditAction(group, context, logger, scope, productModule, imageCache)
    }

    // From here on, we're handling CREATE action
    // CREATE: Create product if it doesn't exist, skip if it already exists

    // 2a. Check for child rows that have DELETE action (delete individual variants)
    logger.debug(`[${parentSKU}] 📊 CHILD ROW ANALYSIS:`)
    logger.debug(`[${parentSKU}]   Total childRows from group: ${childRows.length}`)
    childRows.forEach((row, idx) => {
      const sku = row[CSVColumn.SKU] || 'NO_SKU'
      const action = row[CSVColumn.LISTING_ACTION] || 'NO_ACTION'
      logger.debug(`[${parentSKU}]   Child ${idx}: SKU="${sku}", Action="${action}"`)
    })

    const childRowsToDelete = childRows.filter((row) =>
      isListingAction(row[CSVColumn.LISTING_ACTION] || '', ProductListingAction.DELETE)
    )
    const childRowsToProcess = childRows.filter((row) =>
      !isListingAction(row[CSVColumn.LISTING_ACTION] || '', ProductListingAction.DELETE) &&
      !isListingAction(row[CSVColumn.LISTING_ACTION] || '', ProductListingAction.IGNORE)
    )

    logger.debug(`[${parentSKU}]   childRowsToDelete: ${childRowsToDelete.length}`)
    logger.debug(`[${parentSKU}]   childRowsToProcess: ${childRowsToProcess.length}`)
    childRowsToProcess.forEach((row, idx) => {
      logger.debug(`[${parentSKU}]   ToProcess ${idx}: SKU="${row[CSVColumn.SKU]}"`)
    })

    // Handle child deletions if any
    if (childRowsToDelete.length > 0) {
      const deleteResult = await handleChildDeletions(childRowsToDelete, parentSKU, context, logger, scope)
      logger.debug(`[${parentSKU}] Child deletion result: ${deleteResult.deletedCount} deleted, ${deleteResult.errors.length} errors`)
    }

    // If no children left to process, we're done (all were deleted or ignored)
    if (childRowsToProcess.length === 0 && childRowsToDelete.length > 0) {
      logger.debug(`[${parentSKU}] All children were deleted or ignored, no new variants to create`)
      return {
        success: true,
        skipped: true,
        action: ProductListingAction.CREATE
      }
    }

    // Use filtered child rows for the rest of the processing
    const activeChildRows = childRowsToProcess

    // 2. Determine product name and description
    // Product title comes from parent row (this is a parent product with multiple variants)
    // Each variant will have its own title from its child row
    const productTitle =
      parentRow[CSVColumn.PRODUCT_NAME] || `Product ${parentSKU}`

    let productDescription = parentRow[CSVColumn.PRODUCT_DESCRIPTION] || ''

    if (!productDescription || productDescription.trim().length === 0) {
      if (childRows.length > 0) {
        // Try first child row
        const firstChildDesc = childRows[0][CSVColumn.PRODUCT_DESCRIPTION] || ''
        if (firstChildDesc && firstChildDesc.trim().length > 0) {
          productDescription = firstChildDesc
        } else {
          // Try all child rows
          for (let i = 0; i < childRows.length; i++) {
            const childDesc = childRows[i][CSVColumn.PRODUCT_DESCRIPTION] || ''
            if (childDesc && childDesc.trim().length > 0) {
              productDescription = childDesc
              break
            }
          }
        }
      }
    }

    logger.debug(
      `[${parentSKU}] Product title: "${productTitle}" (from parent row)`
    )

    // 3. Get category mapping for this product type
    const productType = parentRow['Product Type']
    logger.debug(
      `[${parentSKU}] Product type from CSV: "${productType}" (type: ${typeof productType}, length: ${productType?.length})`
    )
    logger.debug(
      `[${parentSKU}] Product type normalized: "${productType
        ?.toUpperCase()
        .trim()
        .replace(/[^A-Z0-9_&]/g, '_')
        .replace(/_+/g, '_')}"`
    )
    const categoryMapping = getCategoryForProductType(productType)

    if (!categoryMapping) {
      logger.error(
        `[${parentSKU}] ❌ No category mapping found for product type: "${productType}"`
      )
      return {
        success: false,
        error: `No category mapping for product type: ${productType}`,
        action: ProductListingAction.CREATE
      }
    }
    logger.debug(
      `[${parentSKU}] ✓ Category mapping found: ${categoryMapping.level1} > ${categoryMapping.level2} > ${categoryMapping.level3}`
    )

    // 4. Find the leaf category (level 3)
    // IMPORTANT: Products should be linked to level 2 (subcategory) if level 3 doesn't exist
    // First try to find level 3 category
    let categories = await productModule.listProductCategories({
      name: categoryMapping.level3
    })

    // If not found, try case-insensitive search
    if (!categories || categories.length === 0) {
      const allCategories = await productModule.listProductCategories(
        {},
        { take: 9999 }
      )
      categories = allCategories.filter(
        (cat: any) =>
          cat.name.toLowerCase().trim() ===
          categoryMapping.level3.toLowerCase().trim()
      )
    }

    // If level 3 not found, try to find level 2 (subcategory) instead
    if (!categories || categories.length === 0) {
      logger.debug(
        `[${parentSKU}] ⚠️  Level 3 category "${categoryMapping.level3}" not found, trying level 2: "${categoryMapping.level2}"`
      )
      categories = await productModule.listProductCategories({
        name: categoryMapping.level2
      })

      if (!categories || categories.length === 0) {
        const allCategories = await productModule.listProductCategories(
          {},
          { take: 9999 }
        )
        categories = allCategories.filter(
          (cat: any) =>
            cat.name.toLowerCase().trim() ===
            categoryMapping.level2.toLowerCase().trim()
        )
      }
    }

    // If still not found, try searching by handle
    if (!categories || categories.length === 0) {
      const handle = (
        categories.length === 0
          ? categoryMapping.level3
          : categoryMapping.level2
      )
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/^-|-$/g, '')
      const allCategories = await productModule.listProductCategories(
        {},
        { take: 9999 }
      )
      categories = allCategories.filter(
        (cat: any) =>
          cat.handle === handle ||
          cat.handle?.includes(handle) ||
          handle.includes(cat.handle)
      )
    }

    if (!categories || categories.length === 0) {
      logger.error(
        `[${parentSKU}] ❌ Category not found: "${categoryMapping.level3}" or "${categoryMapping.level2}"`
      )
      logger.error(
        `[${parentSKU}]    Hierarchy: ${categoryMapping.level1} > ${categoryMapping.level2} > ${categoryMapping.level3}`
      )
      logger.error(
        `[${parentSKU}]    Please run the seed script at /seed-ui to create missing categories`
      )
      return {
        success: false,
        error: `Category not found: ${categoryMapping.level3} or ${categoryMapping.level2}. Please run the seed script at /seed-ui to create missing categories.`,
        action: ProductListingAction.CREATE
      }
    }

    const leafCategory = categories[0]
    logger.debug(
      `[${parentSKU}] ✓ Category: "${leafCategory.name}" (ID: ${leafCategory.id})`
    )

    // 4b. Find product type ID
    let productTypeId: string | undefined
    if (productType) {
      const productTypes = await productModule.listProductTypes({
        value: productType
      })
      if (productTypes && productTypes.length > 0) {
        productTypeId = productTypes[0].id
        logger.debug(`[${parentSKU}] ✓ Product type ID found: ${productTypeId}`)
      } else {
        logger.debug(
          `[${parentSKU}] ⚠️  Product type "${productType}" not found in database, continuing without type ID`
        )
      }
    }

    // 5. Prepare product images (Main + Image 2-9)
    // Collect images from parent row AND all child rows (variants may have their own images)
    const parentImageUrls = extractImages(parentRow)
    const allImageUrls = new Set<string>(parentImageUrls)

    // Also collect images from each child row (variant-specific images)
    activeChildRows.forEach((childRow) => {
      const childImages = extractImages(childRow)
      childImages.forEach((url) => allImageUrls.add(url))
    })

    logger.debug(
      `[${parentSKU}] Collected ${allImageUrls.size} unique remote image URLs from parent and ${activeChildRows.length} child rows`
    )
    if (allImageUrls.size > 0) {
      logger.debug(
        `[${parentSKU}] Remote URLs: ${Array.from(allImageUrls)
          .slice(0, 5)
          .join(', ')}${allImageUrls.size > 5 ? '...' : ''}`
      )
    }

    // Download and upload images to S3
    // Use shared image cache to avoid downloading the same image multiple times across products
    // Cache is initialized in importParentGroups and shared across all products in the batch
    const imageCache = context.imageCache || new Map<string, string>()

    // Create a local mapping of remote URL -> uploaded URL for variant metadata
    const remoteToUploadedUrlMap = new Map<string, string>()
    const allImageUrlsArray = Array.from(allImageUrls)

    const images: { url: string }[] = []
    for (let i = 0; i < allImageUrlsArray.length; i++) {
      const remoteUrl = allImageUrlsArray[i]
      logger.debug(`[${parentSKU}] Processing image ${i + 1}/${allImageUrlsArray.length}: ${remoteUrl}`)

      const uploadedUrl = await downloadAndUploadImage(
        remoteUrl,
        scope, // Pass scope for uploadFilesWorkflow
        logger,
        imageCache // Pass shared cache
      )

      if (uploadedUrl) {
        images.push({ url: uploadedUrl })
        remoteToUploadedUrlMap.set(remoteUrl, uploadedUrl)
      } else {
        logger.warn(
          `[${parentSKU}] Failed to upload image ${i + 1}/${allImageUrlsArray.length}, skipping`
        )
      }
    }

    logger.debug(
      `[${parentSKU}] Successfully processed ${images.length}/${allImageUrlsArray.length} images`
    )
    if (images.length > 0) {
      logger.debug(
        `[${parentSKU}] Uploaded image URLs: ${images
          .slice(0, 5)
          .map((img) => img.url)
          .join(', ')}${images.length > 5 ? '...' : ''}`
      )
    }

    // 6. Read and parse Variation Theme Name
    const variationThemeRaw = parentRow[CSVColumn.VARIATION_THEME_NAME] || ''
    let variantColumns = parseVariationTheme(
      variationThemeRaw,
      logger,
      parentSKU
    )

    // If no variation theme or couldn't parse, check all ProductVariationTheme columns
    if (variantColumns.length === 0) {
      logger.debug(
        `[${parentSKU}] No variation theme specified, checking all variant columns`
      )
      variantColumns = Object.values(ProductVariationTheme)
    }

    logger.debug(`[${parentSKU}] Variation theme: "${variationThemeRaw}"`)
    logger.debug(
      `[${parentSKU}] Variant columns to check: ${variantColumns.join(', ')}`
    )
    logger.debug(
      `[${parentSKU}] Found ${activeChildRows.length} child rows (variants)`
    )

    // 7. Detect which variant attribute columns have values in child rows
    // This determines which product options to create
    const attributeValues = new Map<string, Set<string>>()

    // Initialize sets for each variant column
    for (const column of variantColumns) {
      attributeValues.set(column, new Set<string>())
    }

    // Collect unique values from child rows for each variant column
    activeChildRows.forEach((row) => {
      for (const column of variantColumns) {
        const value = (row[column] || '').trim()
        if (value) {
          attributeValues.get(column)!.add(value)
        }
      }
    })

    // Determine which attributes are actually used (have values)
    const activeAttributes = Array.from(attributeValues.entries())
      .filter(([, values]) => values.size > 0)
      .map(([column]) => column)

    logger.debug(`[${parentSKU}] Active variant attributes detected:`)
    for (const column of activeAttributes) {
      const values = attributeValues.get(column)!
      logger.debug(`[${parentSKU}]   - ${column}: ${values.size} unique values`)
    }

    // 7b. Collect product attributes from parent row
    // These are extended attributes that can be either:
    // - OPTIONS: if listed in Variation Theme Name (variant-differentiating, e.g., Color: Red)
    // - ATTRIBUTES: if NOT in variation theme (common properties shared across all variants)
    // The activeAttributes array above contains the ones being used as OPTIONS for this product.
    // We need to exclude those from the attributes.
    const allExtendedAttributes = extractAttributes(parentRow)

    // Filter out attributes that are being used as options for this product
    const productAttributes: Record<string, string> = {}
    for (const [columnName, value] of Object.entries(allExtendedAttributes)) {
      // Skip if this column is being used as an option (variant differentiator)
      if (!activeAttributes.includes(columnName)) {
        productAttributes[columnName] = value
      }
    }

    logger.debug(`[${parentSKU}] 📊 Attribute breakdown:`)
    logger.debug(
      `[${parentSKU}]   - Total extended attributes: ${Object.keys(allExtendedAttributes).length}`
    )
    logger.debug(
      `[${parentSKU}]   - Active OPTIONS (excluded from attributes): ${activeAttributes.length} → [${activeAttributes.join(', ')}]`
    )
    logger.debug(
      `[${parentSKU}]   - Pure ATTRIBUTES (not options): ${Object.keys(productAttributes).length}`
    )

    // Log attributes with values
    const attributesWithValues = Object.entries(productAttributes).filter(
      ([, v]) => v && v.trim() !== ''
    )
    if (attributesWithValues.length > 0) {
      logger.debug(
        `[${parentSKU}]   - Attributes with values: ${attributesWithValues.length}`
      )
      attributesWithValues.forEach(([key, value]) => {
        logger.debug(
          `[${parentSKU}]     • ${key}: "${value.substring(0, 50)}${value.length > 50 ? '...' : ''}"`
        )
      })
    } else {
      logger.debug(`[${parentSKU}]   - No attributes have values`)
    }

    // 8. Create variants from child rows
    // Only include child rows that have values for ALL active attributes
    const validChildRows = activeChildRows.filter((childRow) => {
      // Check if this row has values for all active attributes
      for (const column of activeAttributes) {
        const value = (childRow[column] || '').trim()
        if (!value) {
          logger.warn(
            `[${parentSKU}] ⚠️  Skipping variant ${childRow[CSVColumn.SKU]}: missing value for "${column}"`
          )
          return false
        }
      }
      return true
    })

    if (validChildRows.length < activeChildRows.length) {
      logger.warn(
        `[${parentSKU}] ⚠️  Filtered out ${activeChildRows.length - validChildRows.length} variants with missing attribute values`
      )
    }

    let variants = validChildRows.map((childRow, index) => {
      const sku = childRow[CSVColumn.SKU]

      // Debug: Log available columns for first child row to help diagnose CSV parsing issues
      if (index === 0) {
        logger.debug(
          `[${parentSKU}] First child row columns: ${Object.keys(childRow).join(', ')}`
        )
        logger.debug(
          `[${parentSKU}] First child row Product Name value: "${childRow[CSVColumn.PRODUCT_NAME] || 'NOT FOUND'}"`
        )
      }
      const price = extractPrice(childRow)

      // PRIORITY: Use Product Name field from CSV directly - this is the full product title from CSV
      // The Product Name column in child rows contains the complete product title for that variant
      let variantTitle: string | null = null

      // Get Product Name column directly
      const productNameValue = childRow[CSVColumn.PRODUCT_NAME]
      if (
        productNameValue &&
        typeof productNameValue === 'string' &&
        productNameValue.trim() !== ''
      ) {
        variantTitle = productNameValue.trim()
        logger.debug(
          `[${parentSKU}] Variant ${sku}: Found title from "Product Name" column: "${variantTitle}"`
        )
      }

      // LAST RESORT: Only construct from parts if no CSV title found
      if (!variantTitle || variantTitle.trim() === '') {
        logger.warn(
          `[${parentSKU}] ⚠️  Variant ${sku}: No Product Name found in CSV. Available columns: ${Object.keys(childRow).join(', ')}`
        )
        logger.warn(
          `[${parentSKU}] ⚠️  Falling back to constructing title from parent title + SKU`
        )

        variantTitle = `${productTitle} - ${sku}`
        logger.debug(
          `[${parentSKU}] Variant ${sku}: Constructed title: "${variantTitle}"`
        )
      } else {
        // Use the CSV title directly - this is what the user wants
        variantTitle = variantTitle.trim()
        logger.debug(
          `[${parentSKU}] ✓ Variant ${sku}: Using CSV title: "${variantTitle}"`
        )
      }

      // Build options object based on active attributes
      const options: Record<string, string> = {}

      for (const column of activeAttributes) {
        const value = (childRow[column] || '').trim()
        if (value) {
          options[column] = value
        }
      }

      // Fallback: if no options detected, use SKU as option
      if (Object.keys(options).length === 0) {
        options['Variant'] = sku
      }

      // Debug: Log options to help diagnose issues
      logger.debug(
        `[${parentSKU}] Variant ${sku} options: ${JSON.stringify(options)}`
      )

      // Extract all variant metadata using helper function
      const metadata = extractVariantMetadata(childRow)

      // Only save variant description to metadata if it exists AND differs from parent description
      const variantDescription = childRow[CSVColumn.PRODUCT_DESCRIPTION] || ''
      const parentDescription = productDescription || ''

      if (variantDescription && variantDescription.trim().length > 0) {
        const variantDescTrimmed = variantDescription.trim()
        const parentDescTrimmed = parentDescription.trim()

        // Only save if variant description is different from parent description
        if (variantDescTrimmed !== parentDescTrimmed) {
          metadata.product_description = variantDescTrimmed
        }
        // If they're the same, don't set metadata.product_description (keep it empty)
      }

      // Extract variant-specific images and save to metadata
      // Map remote URLs to uploaded URLs
      const variantRemoteImages = extractImages(childRow)
      if (variantRemoteImages.length > 0) {
        const variantUploadedImages = variantRemoteImages
          .map((remoteUrl) => remoteToUploadedUrlMap.get(remoteUrl))
          .filter((url): url is string => url !== undefined)

        if (variantUploadedImages.length > 0) {
          metadata.variant_images = variantUploadedImages.join(',') // Store as comma-separated string
          metadata.variant_main_image = variantUploadedImages[0] // Store main image separately for easy access
        }
      }

      return {
        title: variantTitle,
        sku,
        // Explicitly set these fields to avoid Algolia validation errors
        manage_inventory: true,
        allow_backorder: false,
        prices: [
          {
            amount: price,
            currency_code: 'gbp',
            rules_count: 0, // Required for Algolia validation
            min_quantity: null,
            max_quantity: null
          }
        ],
        options,
        metadata
      }
    })

    if (variants.length === 0) {
      logger.error(
        `[${parentSKU}] ❌ No variants created from ${activeChildRows.length} child rows`
      )
      return {
        success: false,
        error: 'No variants to create',
        action: ProductListingAction.CREATE
      }
    }

    logger.debug(`[${parentSKU}] 📊 VARIANT PREPARATION:`)
    logger.debug(`[${parentSKU}]   activeChildRows count: ${activeChildRows.length}`)
    logger.debug(`[${parentSKU}]   validChildRows count: ${validChildRows.length}`)
    logger.debug(`[${parentSKU}]   variants array count: ${variants.length}`)
    variants.forEach((v, idx) => {
      logger.debug(`[${parentSKU}]   Variant ${idx}: SKU="${v.sku}", Title="${v.title?.substring(0, 50)}"`)
    })

    // 7. Generate readable handle from product title
    const generateHandle = (title: string, sku: string): string => {
      let handle = title
        .toLowerCase()
        .replace(/\|/g, ' ') // Replace pipes with spaces first
        .replace(/[^a-z0-9\s-]/g, '') // Remove special characters except spaces and hyphens
        .trim()
        .replace(/\s+/g, '-') // Replace spaces with hyphens
        .replace(/-+/g, '-') // Replace multiple hyphens with single hyphen
        .substring(0, 200) // Limit length
        .replace(/^-+|-+$/g, '') // Remove leading/trailing hyphens AFTER substring

      // Ensure we don't have an empty handle
      if (!handle || handle === '') {
        handle = `product-${sku.toLowerCase()}`
      }

      return handle
    }

    const handle = generateHandle(productTitle, parentSKU)

    // 9. Build product options based on detected active attributes
    const productOptions: Array<{ title: string; values: string[] }> = []

    // Create product options for each active attribute
    for (const column of activeAttributes) {
      const values = attributeValues.get(column)!

      productOptions.push({
        title: column,
        values: Array.from(values)
      })
    }

    // Fallback: if no attributes detected, use SKU as option
    if (productOptions.length === 0) {
      productOptions.push({
        title: 'Variant',
        values: validChildRows.map((row) => row[CSVColumn.SKU])
      })
    }

    logger.debug(
      `[${parentSKU}] Product options created: ${productOptions.map((o) => `${o.title} (${o.values.length} values)`).join(', ')}`
    )

    // 9. Check if product already exists by handle or variants by SKU
    logger.debug(
      `[${parentSKU}] Checking if product with handle "${handle}" already exists...`
    )

    const { ContainerRegistrationKeys } =
      await import('@medusajs/framework/utils')
    const query = scope.resolve(ContainerRegistrationKeys.QUERY)

    // Check for existing product by handle
    let existingProduct: any = null
    try {
      const { data } = await query.graph({
        entity: 'product',
        fields: ['id', 'handle', 'title', 'variants.id', 'variants.sku'],
        filters: { handle }
      })
      if (data && data.length > 0) {
        existingProduct = data[0]
      }
    } catch (error: any) {
      logger.warn(
        `[${parentSKU}] ⚠️  Could not find existing product: ${error.message}`
      )
    }

    // Check for existing variants by SKU
    const variantSkus = variants.map((v) => v.sku)
    const existingSkus = new Set<string>()

    if (variantSkus.length > 0) {
      try {
        const { data: variantData } = await query.graph({
          entity: 'product_variant',
          fields: ['id', 'sku', 'product_id'],
          filters: { sku: variantSkus }
        })
        if (variantData && variantData.length > 0) {
          variantData.forEach((v: any) => {
            if (variantSkus.includes(v.sku)) {
              existingSkus.add(v.sku)
            }
          })
        }
      } catch (error: any) {
        logger.warn(
          `[${parentSKU}] ⚠️  Could not find existing variants: ${error.message}`
        )
      }
    }

    let product: any
    let productId: string | undefined

    logger.debug(`[${parentSKU}] 📊 EXISTING CHECK:`)
    logger.debug(`[${parentSKU}]   existingProduct: ${existingProduct ? existingProduct.id : 'null'}`)
    logger.debug(`[${parentSKU}]   existingSkus: ${existingSkus.size} → [${Array.from(existingSkus).join(', ')}]`)
    logger.debug(`[${parentSKU}]   variants to potentially create: ${variants.length}`)

    if (existingProduct) {
      // Product already exists, use it
      product = existingProduct
      productId = product.id
      logger.debug(
        `[${parentSKU}] ⚠️  Product with handle "${handle}" already exists (ID: ${productId}), skipping creation`
      )

      // Update description for existing product if we have a new description
      if (productDescription && productDescription.trim().length > 0) {
        try {
          const { updateProductsWorkflow } =
            await import('@medusajs/medusa/core-flows')
          await updateProductsWorkflow(scope).run({
            input: {
              selector: { id: productId },
              update: {
                description: productDescription
              }
            }
          })
          logger.debug(
            `[${parentSKU}] ✓ Updated product description (length: ${productDescription.length})`
          )
        } catch (descUpdateError: any) {
          logger.debug(
            `[${parentSKU}] ⚠️  Failed to update description: ${descUpdateError.message}`
          )
          // Non-fatal error, continue
        }
      }

      // Update images for existing product if we have new images
      if (images.length > 0) {
        try {
          // First, get existing images to merge with new ones
          const { data: existingProductData } = await query.graph({
            entity: 'product',
            fields: ['id', 'images.url', 'images.id'],
            filters: { id: productId }
          })

          const existingImages = existingProductData?.[0]?.images || []
          const existingImageUrls = new Set(
            existingImages.map((img: any) => img.url)
          )

          // Merge: add new images that don't already exist
          // Note: images are already uploaded to S3 at this point
          const imagesToAdd = images.filter(
            (img) => !existingImageUrls.has(img.url)
          )
          const mergedImages = [
            ...existingImages.map((img: any) => ({ url: img.url })),
            ...imagesToAdd
          ]

          if (imagesToAdd.length > 0) {
            const { updateProductsWorkflow } =
              await import('@medusajs/medusa/core-flows')
            await updateProductsWorkflow(scope).run({
              input: {
                selector: { id: productId },
                update: {
                  images: mergedImages
                }
              }
            })
            logger.debug(
              `[${parentSKU}] ✓ Updated product images (${mergedImages.length} total images, ${imagesToAdd.length} new)`
            )
          } else {
            logger.debug(
              `[${parentSKU}] ℹ️  All images already exist, skipping update`
            )
          }
        } catch (imageUpdateError: any) {
          logger.debug(
            `[${parentSKU}] ⚠️  Failed to update images: ${imageUpdateError.message}`
          )
          // Non-fatal error, continue
        }
      }

      // Filter out existing variants
      logger.debug(`[${parentSKU}] 📊 VARIANT FILTERING (product exists):`)
      logger.debug(`[${parentSKU}]   variants before filter: ${variants.length}`)
      logger.debug(`[${parentSKU}]   existingSkus to filter out: ${existingSkus.size}`)

      if (existingSkus.size === 0 && variants.length > 0) {
        // Product exists but no variant SKUs match - all variants are new
        logger.debug(`[${parentSKU}] ℹ️  Product exists but all ${variants.length} variants are new`)

        try {
          const { batchProductVariantsWorkflow } = await import('@medusajs/medusa/core-flows')

          const variantsToCreate = variants.map((v) => ({
            ...v,
            product_id: productId
          }))

          logger.debug(`[${parentSKU}] 🚀 Calling batchProductVariantsWorkflow with ${variantsToCreate.length} new variants`)
          variantsToCreate.forEach((v, idx) => {
            logger.debug(`[${parentSKU}]   ToCreate ${idx}: SKU="${v.sku}", product_id="${v.product_id}"`)
          })

          await batchProductVariantsWorkflow(scope).run({
            input: {
              create: variantsToCreate,
              update: [],
              delete: []
            }
          })

          logger.debug(`[${parentSKU}] ✓ Created ${variants.length} new variants for existing product`)

          // Reload product with new variants
          const { data: reloadedProduct } = await query.graph({
            entity: 'product',
            fields: ['id', 'handle', 'title', 'variants.id', 'variants.sku'],
            filters: { id: productId }
          })
          if (reloadedProduct && reloadedProduct.length > 0) {
            product = reloadedProduct[0]
          }
        } catch (batchError: any) {
          logger.error(`[${parentSKU}] ❌ Failed to create new variants: ${batchError.message}`)
          return {
            success: false,
            error: `Failed to add new variants to existing product: ${batchError.message}`,
            action: ProductListingAction.CREATE
          }
        }
      } else if (existingSkus.size > 0) {
        logger.debug(
          `[${parentSKU}] ⚠️  Found ${existingSkus.size} existing variants with SKUs: ${Array.from(existingSkus).join(', ')}`
        )
        const beforeFilterCount = variants.length
        variants = variants.filter((v) => !existingSkus.has(v.sku))
        logger.debug(`[${parentSKU}]   variants after filter: ${variants.length} (removed ${beforeFilterCount - variants.length})`)

        if (variants.length === 0) {
          logger.debug(
            `[${parentSKU}] ⚠️  All variants already exist, product is already complete`
          )
          // Product and all variants exist, just link to seller if needed
          product = existingProduct
          productId = product.id
        } else {
          logger.debug(
            `[${parentSKU}] ℹ️  ${variants.length} new variants to add (${existingSkus.size} already exist)`
          )
          variants.forEach((v, idx) => {
            logger.debug(`[${parentSKU}]   New variant ${idx}: SKU="${v.sku}"`)
          })

          // Add new variants to existing product using batchProductVariantsWorkflow
          product = existingProduct
          productId = product.id

          try {
            const { batchProductVariantsWorkflow } = await import('@medusajs/medusa/core-flows')

            // Prepare variants for batch creation - need to include product_id
            const variantsToCreate = variants.map((v) => ({
              ...v,
              product_id: productId
            }))

            logger.debug(`[${parentSKU}] 🚀 Calling batchProductVariantsWorkflow with ${variantsToCreate.length} variants`)
            variantsToCreate.forEach((v, idx) => {
              logger.debug(`[${parentSKU}]   ToCreate ${idx}: SKU="${v.sku}", product_id="${v.product_id}"`)
            })

            await batchProductVariantsWorkflow(scope).run({
              input: {
                create: variantsToCreate,
                update: [],
                delete: []
              }
            })

            logger.debug(
              `[${parentSKU}] ✓ Created ${variants.length} new variants for existing product`
            )

            // Reload product with new variants
            const { data: reloadedProduct } = await query.graph({
              entity: 'product',
              fields: ['id', 'handle', 'title', 'variants.id', 'variants.sku'],
              filters: { id: productId }
            })
            if (reloadedProduct && reloadedProduct.length > 0) {
              product = reloadedProduct[0]
            }
          } catch (batchError: any) {
            logger.error(
              `[${parentSKU}] ❌ Failed to create new variants: ${batchError.message}`
            )
            return {
              success: false,
              error: `Failed to add new variants to existing product: ${batchError.message}`,
              action: ProductListingAction.CREATE
            }
          }
        }
      }
    } else if (existingSkus.size > 0) {
      // Product doesn't exist but some variants do
      logger.debug(
        `[${parentSKU}] ⚠️  Found ${existingSkus.size} existing variants with SKUs: ${Array.from(existingSkus).join(', ')}`
      )

      // Try to find the product that owns these variants
      try {
        const { data: variantProducts } = await query.graph({
          entity: 'product_variant',
          fields: ['product_id', 'sku'],
          filters: { sku: Array.from(existingSkus) }
        })

        if (variantProducts && variantProducts.length > 0) {
          // Get unique product IDs from the variants
          const productIds = [
            ...new Set(variantProducts.map((v: any) => v.product_id))
          ]

          if (productIds.length === 1) {
            // All variants belong to the same product, use it
            const { data: foundProducts } = await query.graph({
              entity: 'product',
              fields: ['id', 'handle', 'title'],
              filters: { id: productIds[0] }
            })

            if (foundProducts && foundProducts.length > 0) {
              product = foundProducts[0]
              productId = product.id
              logger.debug(
                `[${parentSKU}] ✓ Found product that owns existing variants: ${productId}`
              )

              // Update images for existing product if we have new images
              if (images.length > 0) {
                try {
                  // First, get existing images to merge with new ones
                  const { data: existingProductData } = await query.graph({
                    entity: 'product',
                    fields: ['id', 'images.url', 'images.id'],
                    filters: { id: productId }
                  })

                  const existingImages = existingProductData?.[0]?.images || []
                  const existingImageUrls = new Set(
                    existingImages.map((img: any) => img.url)
                  )

                  // Merge: add new images that don't already exist
                  // Note: images are already uploaded to S3 at this point
                  const imagesToAdd = images.filter(
                    (img) => !existingImageUrls.has(img.url)
                  )
                  const mergedImages = [
                    ...existingImages.map((img: any) => ({ url: img.url })),
                    ...imagesToAdd
                  ]

                  if (imagesToAdd.length > 0) {
                    const { updateProductsWorkflow } =
                      await import('@medusajs/medusa/core-flows')
                    await updateProductsWorkflow(scope).run({
                      input: {
                        selector: { id: productId },
                        update: {
                          images: mergedImages
                        }
                      }
                    })
                    logger.debug(
                      `[${parentSKU}] ✓ Updated product images (${mergedImages.length} total images, ${imagesToAdd.length} new)`
                    )
                  } else {
                    logger.debug(
                      `[${parentSKU}] ℹ️  All images already exist, skipping update`
                    )
                  }
                } catch (imageUpdateError: any) {
                  logger.debug(
                    `[${parentSKU}] ⚠️  Failed to update images: ${imageUpdateError.message}`
                  )
                  // Non-fatal error, continue
                }
              }

              // Filter out existing variants and create new ones if any
              variants = variants.filter((v) => !existingSkus.has(v.sku))

              if (variants.length > 0) {
                // Add new variants to existing product
                logger.debug(
                  `[${parentSKU}] ℹ️  ${variants.length} new variants to add to existing product`
                )
                try {
                  const { batchProductVariantsWorkflow } = await import('@medusajs/medusa/core-flows')

                  const variantsToCreate = variants.map((v) => ({
                    ...v,
                    product_id: productId
                  }))

                  await batchProductVariantsWorkflow(scope).run({
                    input: {
                      create: variantsToCreate,
                      update: [],
                      delete: []
                    }
                  })

                  logger.debug(
                    `[${parentSKU}] ✓ Created ${variants.length} new variants for existing product`
                  )
                } catch (batchError: any) {
                  logger.error(
                    `[${parentSKU}] ❌ Failed to create new variants: ${batchError.message}`
                  )
                  // Continue - we'll still try to handle inventory for existing variants
                }
              }

              // Load product with all variants (including newly created) for inventory processing
              const { data: fullProduct } = await query.graph({
                entity: 'product',
                fields: ['id', 'variants.id', 'variants.sku'],
                filters: { id: productId }
              })
              if (fullProduct && fullProduct.length > 0) {
                product = fullProduct[0]
              }
            }
          } else if (productIds.length > 1) {
            logger.debug(
              `[${parentSKU}] ⚠️  Variants belong to ${productIds.length} different products, this is inconsistent`
            )
          }
        }
      } catch (err) {
        logger.debug(
          `[${parentSKU}] ⚠️  Could not find product for existing variants: ${err}`
        )
      }

      // If we still don't have a product, filter out existing variants and try to create with remaining ones
      if (!product) {
        variants = variants.filter((v) => !existingSkus.has(v.sku))

        if (variants.length === 0) {
          logger.debug(
            `[${parentSKU}] ❌ All variants already exist but couldn't find the product`
          )
          return {
            success: false,
            error: `All variants already exist for product ${parentSKU} but product couldn't be found`
          }
        }
        logger.debug(
          `[${parentSKU}] ℹ️  Will create product with ${variants.length} new variants (skipping ${existingSkus.size} existing ones)`
        )
      }
    }

    // 10. Create product with variants using workflow (only if product doesn't exist)
    if (!product) {
      logger.debug(
        `[${parentSKU}] Would create product with ${variants.length} variants, ${productOptions.length} options`
      )
      logger.debug(
        `[${parentSKU}] Handle: "${handle}", Category ID: ${leafCategory.id}, Type ID: ${productTypeId || 'none'}`
      )
      logger.debug(
        `[${parentSKU}] Product description length: ${productDescription.length}${productDescription.length > 0 ? `, value="${productDescription.substring(0, 150)}${productDescription.length > 150 ? '...' : ''}"` : ' (EMPTY)'}`
      )

      try {
        const { result } = await createProductsWorkflow(scope).run({
          input: {
            products: [
              {
                title: productTitle,
                description: productDescription,
                status: 'published',
                is_giftcard: false,
                discountable: true,
                handle,
                images,
                category_ids: [leafCategory.id],
                type_id: productTypeId, // Add product type ID
                options: productOptions,
                variants,
                metadata: {
                  ...extractProductMetadata(parentRow, parentSKU, sellerId),
                  // Store collected attributes for later attribute creation
                  attributes: productAttributes
                },
                sales_channels: [{ id: salesChannelId }]
              }
            ]
          }
        })

        if (!result || !result[0]) {
          logger.error(
            `[${parentSKU}] ❌ Product creation returned empty result`
          )
          throw new Error('Product creation returned empty result')
        }

        product = result[0]
        productId = product.id
        logger.debug(
          `[${parentSKU}] ✓ Product created successfully: ${productId}`
        )

        // Verify description was saved
        if (productDescription && productDescription.trim().length > 0) {
          const savedDescription = product.description || ''
          logger.debug(
            `[${parentSKU}] Description verification: input length=${productDescription.length}, saved length=${savedDescription.length}`
          )
          if (savedDescription.length === 0) {
            logger.error(
              `[${parentSKU}] ❌ WARNING: Description was NOT saved! Input had ${productDescription.length} characters but saved description is empty.`
            )
            // Try to update it manually
            try {
              const { updateProductsWorkflow } =
                await import('@medusajs/medusa/core-flows')
              await updateProductsWorkflow(scope).run({
                input: {
                  selector: { id: productId },
                  update: {
                    description: productDescription
                  }
                }
              })
              logger.debug(
                `[${parentSKU}] ✓ Manually updated product description after creation`
              )
            } catch (updateError: any) {
              logger.error(
                `[${parentSKU}] ❌ Failed to manually update description: ${updateError.message}`
              )
            }
          } else {
            logger.debug(`[${parentSKU}] ✓ Description saved successfully`)
          }
        }
      } catch (workflowError: any) {
        // Check if error is due to existing product/variant
        if (
          workflowError.message?.includes('already exists') ||
          workflowError.message?.includes('duplicate') ||
          workflowError.message?.includes('unique constraint')
        ) {
          logger.debug(
            `[${parentSKU}] ⚠️  Product/variant already exists, attempting to find existing product...`
          )

          // Try to find the existing product using query API
          try {
            const { data: foundProducts } = await query.graph({
              entity: 'product',
              fields: ['id', 'handle', 'title'],
              filters: { handle }
            })

            if (foundProducts && foundProducts.length > 0) {
              product = foundProducts[0]
              productId = product.id
              logger.debug(
                `[${parentSKU}] ✓ Found existing product: ${productId}`
              )
            } else {
              // Product handle doesn't exist, might be a variant SKU conflict
              logger.debug(
                `[${parentSKU}] ⚠️  Product handle not found, error likely due to existing variant SKU`
              )
              return {
                success: false,
                error: `Product or variant already exists: ${workflowError.message}`
              }
            }
          } catch (queryError: any) {
            logger.error(
              `[${parentSKU}] ❌ Failed to query for existing product:`
            )
            logger.error(`[${parentSKU}]    Query Error: ${queryError.message}`)
            return {
              success: false,
              error: `Product or variant already exists: ${workflowError.message}`
            }
          }
        } else {
          logger.error(`[${parentSKU}] ❌ Product creation workflow failed:`)
          logger.error(`[${parentSKU}]    Error: ${workflowError.message}`)
          logger.error(`[${parentSKU}]    Stack: ${workflowError.stack}`)
          throw workflowError
        }
      }
    }

    // 8. Link product to seller (using direct DB insert into join table)
    try {
      const { ContainerRegistrationKeys, generateEntityId } =
        await import('@medusajs/framework/utils')
      const knex = scope.resolve(ContainerRegistrationKeys.PG_CONNECTION)

      // Check if link already exists
      const existingLink = await knex('seller_seller_product_product')
        .where({
          seller_id: sellerId,
          product_id: productId
        })
        .first()

      if (!existingLink) {
        const linkId = generateEntityId('', 'seller_product')
        await knex('seller_seller_product_product').insert({
          id: linkId,
          seller_id: sellerId,
          product_id: productId,
          created_at: new Date(),
          updated_at: new Date()
        })
        logger.debug(`[${parentSKU}] ✓ Linked product to seller`)
      } else {
        logger.debug(`[${parentSKU}] ℹ️  Product already linked to seller`)
      }
    } catch (linkError: any) {
      // Link error - non-fatal, but log it
      logger.debug(
        `[${parentSKU}] ⚠️  Could not link product to seller: ${linkError.message}`
      )
    }
    logger.info(
      `[${parentSKU}] ✓ [DEBUG MODE] Would have linked product to seller`
    )

    // 9. Create inventory items for each variant
    const inventoryModule = scope.resolve(Modules.INVENTORY)

    // Create a map of SKU to childRow for efficient lookup
    const childRowMap = new Map<string, CSVRow>()
    activeChildRows.forEach((row) => {
      const sku = row[CSVColumn.SKU]
      if (sku) {
        childRowMap.set(sku, row)
      }
    })

    // Process all variants of the product (whether newly created or existing)
    const variantsToProcess = product.variants || []

    for (const variant of variantsToProcess) {
      // Find matching child row by SKU, or use empty row if not found (for existing variants)
      const childRow = childRowMap.get(variant.sku) || ({} as CSVRow)
      const quantity = extractQuantity(childRow)

      try {
        // Check if inventory item already exists for this variant
        const existingItems = await inventoryModule.listInventoryItems({
          sku: variant.sku
        })

        let inventoryItemId: string

        if (existingItems && existingItems.length > 0) {
          inventoryItemId = existingItems[0].id
        } else {
          // Create inventory item
          const inventoryItems = await inventoryModule.createInventoryItems([
            {
              sku: variant.sku,
              title: variant.title
            }
          ])
          inventoryItemId = inventoryItems[0].id
        }

        // Link inventory item to seller
        try {
          const { ContainerRegistrationKeys, generateEntityId } =
            await import('@medusajs/framework/utils')
          const knex = scope.resolve(ContainerRegistrationKeys.PG_CONNECTION)

          // Check if link already exists
          const existing = await knex('seller_seller_inventory_inventory_item')
            .where({
              seller_id: sellerId,
              inventory_item_id: inventoryItemId
            })
            .whereNull('deleted_at')
            .first()

          if (!existing) {
            const linkId = generateEntityId('', 'seller_inventory')
            await knex('seller_seller_inventory_inventory_item').insert({
              id: linkId,
              seller_id: sellerId,
              inventory_item_id: inventoryItemId,
              created_at: new Date(),
              updated_at: new Date()
            })
          }
        } catch (err: any) {
          logger.warn(
            `[${parentSKU}] ⚠️  Could not link inventory item to seller: ${err.message}`
          )
        }

        // Link inventory item to variant
        const remoteLink = scope.resolve('remoteLink')
        await remoteLink.create({
          [Modules.PRODUCT]: {
            variant_id: variant.id
          },
          [Modules.INVENTORY]: {
            inventory_item_id: inventoryItemId
          }
        })

        // Create inventory level at stock location
        const existingLevels = await inventoryModule.listInventoryLevels({
          inventory_item_id: inventoryItemId,
          location_id: stockLocationId
        })

        if (!existingLevels || existingLevels.length === 0) {
          await inventoryModule.createInventoryLevels([
            {
              inventory_item_id: inventoryItemId,
              location_id: stockLocationId,
              stocked_quantity: quantity
            }
          ])
        }
      } catch (invError: any) {
        // Inventory error - non-fatal
        logger.warn(
          `[${parentSKU}] ⚠️  Could not create inventory level: ${invError.message}`
        )
      }
    }
    logger.info(
      `[${parentSKU}] ✓ [DEBUG MODE] Would have created inventory for ${variants.length} variants`
    )

    // 10. Create attributes for the product
    try {
      const query = scope.resolve(ContainerRegistrationKeys.QUERY)

      logger.debug(`[${parentSKU}] 🏷️  Starting attribute creation...`)

      // Ensure productId is defined before proceeding
      if (!productId) {
        logger.warn(
          `[${parentSKU}] ⚠️  Product ID is undefined, skipping attribute creation`
        )
        throw new Error('Product ID is undefined')
      }

      // Filter attributes that have values
      const attributesToCreate = Object.entries(productAttributes).filter(
        ([, value]) => value && value.trim() !== ''
      )

      if (attributesToCreate.length === 0) {
        logger.debug(`[${parentSKU}] No attributes with values to create`)
      } else {
        logger.debug(
          `[${parentSKU}] Creating ${attributesToCreate.length} attributes for product`
        )

        for (const [attributeName, attributeValue] of attributesToCreate) {
          try {
            // Generate handle from attribute name
            const handle = attributeName
              .toLowerCase()
              .replace(/[^a-z0-9\s-]/g, '')
              .trim()
              .replace(/\s+/g, '-')
              .replace(/-+/g, '-')

            logger.debug(
              `[${parentSKU}]   Processing attribute: "${attributeName}" = "${attributeValue.substring(0, 50)}${attributeValue.length > 50 ? '...' : ''}"`
            )

            // Check if attribute already exists using query
            const { data: existingAttributes } = await query.graph({
              entity: 'attribute',
              filters: { handle },
              fields: ['id', 'name', 'handle']
            })

            let attribute
            if (existingAttributes && existingAttributes.length > 0) {
              attribute = existingAttributes[0]
              logger.debug(
                `[${parentSKU}]     ✓ Found existing attribute: "${attributeName}" (ID: ${attribute.id})`
              )
            } else {
              // Create new attribute using workflow
              const { result } = await createAttributesWorkflow(scope).run({
                input: {
                  attributes: [
                    {
                      name: attributeName,
                      handle,
                      ui_component: AttributeUIComponent.TEXTAREA, // Default to text_area for CSV imports
                      is_filterable: true,
                      is_required: false
                    }
                  ]
                }
              })

              // Fetch the created attribute with query
              const { data } = await query.graph({
                entity: 'attribute',
                filters: { id: result[0].id },
                fields: ['id', 'name', 'handle']
              })

              attribute = data[0]
              logger.debug(
                `[${parentSKU}]     ✓ Created new attribute: "${attributeName}" (ID: ${attribute.id})`
              )
            }

            // Create attribute value for this product using workflow
            const { result: attributeValueResult } =
              await createAttributeValueWorkflow(scope).run({
                input: {
                  attribute_id: attribute.id,
                  product_id: productId,
                  value: attributeValue
                }
              })

            logger.debug(
              `[${parentSKU}]     ✓ Created and linked attribute value (ID: ${attributeValueResult.id})`
            )
          } catch (attrError: any) {
            logger.warn(
              `[${parentSKU}]   ⚠️  Failed to create attribute "${attributeName}": ${attrError.message}`
            )
            // Non-fatal, continue with other attributes
          }
        }

        logger.debug(
          `[${parentSKU}] ✓ Finished processing ${attributesToCreate.length} attributes`
        )
      }
    } catch (error: any) {
      logger.warn(
        `[${parentSKU}] ⚠️  Attribute creation failed: ${error.message}`
      )
      // Non-fatal error, continue
    }

    logger.info(
      `[${parentSKU}] ✓ [DEBUG MODE] Product import validation completed successfully (not saved to database)`
    )
    return {
      success: true,
      productId
    }
  } catch (error: any) {
    logger.error(`[${parentSKU}] ❌ Import failed with error:`)
    logger.error(
      `[${parentSKU}]    Message: ${error.message || 'Unknown error'}`
    )
    logger.error(`[${parentSKU}]    Stack: ${error.stack || 'No stack trace'}`)
    if (error.cause) {
      logger.error(`[${parentSKU}]    Cause: ${error.cause}`)
    }
    return {
      success: false,
      error: error.message || 'Unknown error'
    }
  }
}

/**
 * Import multiple parent groups
 */
export async function importParentGroups(
  groups: ParentGroup[],
  context: ImportContext,
  logger: Logger,
  scope: any
): Promise<{
  total: number
  success: number
  failed: number
  errors: Array<{ parentSKU: string; error: string }>
}> {
  const results = {
    total: groups.length,
    success: 0,
    failed: 0,
    errors: [] as Array<{ parentSKU: string; error: string }>
  }

  // Initialize shared image cache for this batch import
  // This prevents downloading the same image multiple times across different products
  if (!context.imageCache) {
    context.imageCache = new Map<string, string>()
    logger.debug('Initialized shared image cache for batch import')
  }

  for (let i = 0; i < groups.length; i++) {
    const group = groups[i]
    logger.debug(
      `\n📦 [Import Progress] Processing product ${i + 1}/${groups.length}: ${group.parentSKU}`
    )

    const result = await importParentGroup(group, context, logger, scope)

    if (result.success) {
      results.success++
      logger.debug(
        `   ✅ [Import Progress] Successfully imported ${group.parentSKU} → ${result.productId}`
      )
    } else {
      results.failed++
      const errorMsg = result.error || 'Unknown error'
      results.errors.push({
        parentSKU: group.parentSKU,
        error: errorMsg
      })
      logger.error(
        `   ❌ [Import Progress] Failed to import ${group.parentSKU}: ${errorMsg}`
      )
    }
  }

  // Log cache statistics
  if (context.imageCache) {
    logger.info(
      `\n📊 Image cache statistics: ${context.imageCache.size} unique images uploaded and cached`
    )
  }

  return results
}
