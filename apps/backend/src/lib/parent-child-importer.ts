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
import type { CSVRow, ParentGroup } from './csv-parser'
import {
  CSVColumn,
  ProductVariationTheme,
  extractAttributes,
  extractImages,
  extractPrice,
  extractProductMetadata,
  extractQuantity,
  extractVariantMetadata
} from './csv-parser'

/**
 * Maximum image dimensions (width or height)
 */
const MAX_IMAGE_DIMENSION = 1500

/**
 * Supported image MIME types
 */
const SUPPORTED_IMAGE_MIMES = {
  'image/jpeg': '.jpg',
  'image/jpg': '.jpg',
  'image/png': '.png',
  'image/webp': '.webp',
  'image/gif': '.gif',
  'image/svg+xml': '.svg',
  'image/bmp': '.bmp',
  'image/tiff': '.tiff',
  'image/x-icon': '.ico'
} as const

/**
 * Get file extension from MIME type
 */
function getExtensionFromMimeType(mimeType: string): string {
  return SUPPORTED_IMAGE_MIMES[mimeType as keyof typeof SUPPORTED_IMAGE_MIMES] || '.jpg'
}

/**
 * Detect image MIME type from buffer (magic numbers)
 * Fallback for when Content-Type header is missing or incorrect
 */
function detectImageMimeType(buffer: Buffer): string | null {
  // Check magic numbers (file signatures)
  if (buffer[0] === 0xFF && buffer[1] === 0xD8 && buffer[2] === 0xFF) {
    return 'image/jpeg'
  }
  if (buffer[0] === 0x89 && buffer[1] === 0x50 && buffer[2] === 0x4E && buffer[3] === 0x47) {
    return 'image/png'
  }
  if (buffer[0] === 0x52 && buffer[1] === 0x49 && buffer[2] === 0x46 && buffer[3] === 0x46) {
    // RIFF format, check for WEBP
    if (buffer[8] === 0x57 && buffer[9] === 0x45 && buffer[10] === 0x42 && buffer[11] === 0x50) {
      return 'image/webp'
    }
  }
  if (buffer[0] === 0x47 && buffer[1] === 0x49 && buffer[2] === 0x46) {
    return 'image/gif'
  }
  if (buffer[0] === 0x42 && buffer[1] === 0x4D) {
    return 'image/bmp'
  }
  if ((buffer[0] === 0x49 && buffer[1] === 0x49 && buffer[2] === 0x2A && buffer[3] === 0x00) ||
      (buffer[0] === 0x4D && buffer[1] === 0x4D && buffer[2] === 0x00 && buffer[3] === 0x2A)) {
    return 'image/tiff'
  }
  if (buffer[0] === 0x3C && buffer[1] === 0x3F && buffer[2] === 0x78 && buffer[3] === 0x6D) {
    // Check for SVG (starts with <?xml)
    return 'image/svg+xml'
  }
  if (buffer[0] === 0x3C && buffer[1] === 0x73 && buffer[2] === 0x76 && buffer[3] === 0x67) {
    // Check for SVG (starts with <svg)
    return 'image/svg+xml'
  }

  return null
}

/**
 * Resize image if it exceeds maximum dimensions while maintaining aspect ratio
 * @param buffer - Image buffer
 * @param mimeType - Image MIME type
 * @param logger - Logger instance
 * @returns Resized image buffer or original if no resize needed
 */
async function resizeImageIfNeeded(
  buffer: Buffer,
  mimeType: string,
  logger: Logger
): Promise<Buffer> {
  try {
    // Skip resizing for SVG (vector format, doesn't need resizing)
    if (mimeType === 'image/svg+xml') {
      logger.debug('Skipping resize for SVG (vector format)')
      return buffer
    }

    // Get image metadata
    const image = sharp(buffer)
    const metadata = await image.metadata()

    if (!metadata.width || !metadata.height) {
      logger.warn('Could not read image dimensions, skipping resize')
      return buffer
    }

    const { width, height } = metadata

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

    // Resize image based on format
    let resizedImage = image.resize(newWidth, newHeight, {
      fit: 'inside', // Ensure image fits within dimensions
      withoutEnlargement: true // Don't upscale small images
    })

    // Convert to appropriate format
    switch (mimeType) {
      case 'image/jpeg':
      case 'image/jpg':
        resizedImage = resizedImage.jpeg({ quality: 90 })
        break
      case 'image/png':
        resizedImage = resizedImage.png({ quality: 90 })
        break
      case 'image/webp':
        resizedImage = resizedImage.webp({ quality: 90 })
        break
      case 'image/gif':
        // Sharp doesn't handle animated GIFs well, keep original
        logger.debug('GIF detected, skipping resize to preserve animation')
        return buffer
      case 'image/tiff':
        resizedImage = resizedImage.tiff({ quality: 90 })
        break
      default:
        // For other formats, convert to JPEG
        resizedImage = resizedImage.jpeg({ quality: 90 })
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

    // Detect MIME type from Content-Type header or buffer magic numbers
    let mimeType = response.headers.get('content-type')?.split(';')[0].trim() || null

    // Validate MIME type is a supported image format
    if (!mimeType || !SUPPORTED_IMAGE_MIMES[mimeType as keyof typeof SUPPORTED_IMAGE_MIMES]) {
      // Try to detect from buffer
      const detectedMime = detectImageMimeType(buffer)
      if (detectedMime) {
        logger.debug(`Detected image format from file content: ${detectedMime}`)
        mimeType = detectedMime
      } else {
        logger.warn(`Unsupported or undetected image format for ${trimmedUrl} (Content-Type: ${mimeType})`)
        return null
      }
    }

    // Resize image if it exceeds maximum dimensions (1500x1500)
    buffer = await resizeImageIfNeeded(buffer, mimeType, logger)

    // Prepare base64 content for uploadFilesWorkflow
    const base64 = buffer.toString('base64')

    // Derive filename from URL
    const urlParts = trimmedUrl.split('/')
    let filename = urlParts[urlParts.length - 1]?.split('?')[0] || '' // Remove query params

    // Ensure filename has correct extension based on MIME type
    const correctExtension = getExtensionFromMimeType(mimeType)
    if (!filename || filename === '') {
      // No filename in URL, generate one
      filename = `image-${Date.now()}${correctExtension}`
    } else if (!filename.toLowerCase().endsWith(correctExtension)) {
      // Filename exists but wrong/missing extension, fix it
      const filenameParts = filename.split('.')
      if (filenameParts.length > 1) {
        filenameParts[filenameParts.length - 1] = correctExtension.slice(1) // Remove leading dot
        filename = filenameParts.join('.')
      } else {
        filename = `${filename}${correctExtension}`
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
 * Import a single parent group (product with variants)
 */
export async function importParentGroup(
  group: ParentGroup,
  context: ImportContext,
  logger: Logger,
  scope: any
): Promise<{
  success: boolean
  productId?: string
  error?: string
}> {
  const { parentRow, childRows, parentSKU } = group
  const { sellerId, stockLocationId, salesChannelId } = context

  logger.debug(`\n🔍 [DEBUG] Starting import of parent product: ${parentSKU}`)

  try {
    // 1. Get Product Module
    const productModule = scope.resolve(Modules.PRODUCT)
    logger.debug(`[${parentSKU}] ✓ Product module resolved`)

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
        error: `No category mapping for product type: ${productType}`
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
        error: `Category not found: ${categoryMapping.level3} or ${categoryMapping.level2}. Please run the seed script at /seed-ui to create missing categories.`
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
    childRows.forEach((childRow) => {
      const childImages = extractImages(childRow)
      childImages.forEach((url) => allImageUrls.add(url))
    })

    logger.debug(
      `[${parentSKU}] Collected ${allImageUrls.size} unique remote image URLs from parent and ${childRows.length} child rows`
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
      `[${parentSKU}] Found ${childRows.length} child rows (variants)`
    )

    // 7. Detect which variant attribute columns have values in child rows
    // This determines which product options to create
    const attributeValues = new Map<string, Set<string>>()

    // Initialize sets for each variant column
    for (const column of variantColumns) {
      attributeValues.set(column, new Set<string>())
    }

    // Collect unique values from child rows for each variant column
    childRows.forEach((row) => {
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
    const validChildRows = childRows.filter((childRow) => {
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

    if (validChildRows.length < childRows.length) {
      logger.warn(
        `[${parentSKU}] ⚠️  Filtered out ${childRows.length - validChildRows.length} variants with missing attribute values`
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
        `[${parentSKU}] ❌ No variants created from ${childRows.length} child rows`
      )
      return {
        success: false,
        error: 'No variants to create'
      }
    }

    logger.debug(`[${parentSKU}] ✓ Created ${variants.length} variants`)
    logger.debug(
      `[${parentSKU}] Sample variant: SKU=${variants[0].sku}, Price=${variants[0].prices[0]?.amount}, Options=${JSON.stringify(variants[0].options)}`
    )

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
      if (existingSkus.size > 0) {
        logger.debug(
          `[${parentSKU}] ⚠️  Found ${existingSkus.size} existing variants with SKUs: ${Array.from(existingSkus).join(', ')}`
        )
        variants = variants.filter((v) => !existingSkus.has(v.sku))

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
          // We can't add variants to existing product via this workflow, so skip
          logger.debug(
            `[${parentSKU}] ⚠️  Cannot add variants to existing product via import, skipping`
          )
          return {
            success: false,
            error: `Product already exists with handle "${handle}", cannot add new variants via import`
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

              // All variants exist, product is complete
              variants = []
              // Load product with variants for inventory processing
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
    childRows.forEach((row) => {
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
