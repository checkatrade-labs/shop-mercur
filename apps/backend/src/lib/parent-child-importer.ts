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
import { createProductsWorkflow } from '@medusajs/medusa/core-flows'
import type { ParentGroup, CSVRow } from './csv-parser'
import { 
  CSVColumn,
  extractPrice, 
  extractQuantity, 
  extractImages,
  extractVariantMetadata,
  extractProductMetadata
} from './csv-parser'
import { getCategoryForProductType } from './category-mapping'

interface ImportContext {
  sellerId: string
  stockLocationId: string
  salesChannelId: string
  regionId: string
}

/**
 * Import a single parent group (product with variants)
 */
export async function importParentGroup(
  group: ParentGroup,
  context: ImportContext,
  scope: any
): Promise<{
  success: boolean
  productId?: string
  error?: string
}> {
  const { parentRow, childRows, parentSKU } = group
  const { sellerId, stockLocationId, salesChannelId, regionId } = context

  console.log(`\n🔍 [DEBUG] Starting import for product: ${parentSKU}`)
  
  try {
    // 1. Get Product Module
    const productModule = scope.resolve(Modules.PRODUCT)
    console.log(`   [DEBUG ${parentSKU}] ✓ Product module resolved`)

    // 2. Determine product name and description
    // Product title comes from parent row (this is a parent product with multiple variants)
    // Each variant will have its own title from its child row
    const productTitle = parentRow[CSVColumn.TITLE] || 
                        parentRow[CSVColumn.ITEM_NAME] || 
                        `Product ${parentSKU}`
    const productDescription = parentRow[CSVColumn.PRODUCT_DESCRIPTION] || ''
    console.log(`   [DEBUG ${parentSKU}] Product title: "${productTitle}" (from parent row)`)

    // 3. Get category mapping for this product type
    const productType = parentRow['Product Type']
    console.log(`   [DEBUG ${parentSKU}] Product type from CSV: "${productType}" (type: ${typeof productType}, length: ${productType?.length})`)
    console.log(`   [DEBUG ${parentSKU}] Product type normalized: "${productType?.toUpperCase().trim().replace(/[^A-Z0-9_&]/g, '_').replace(/_+/g, '_')}"`)
    const categoryMapping = getCategoryForProductType(productType)

    if (!categoryMapping) {
      console.error(`   [DEBUG ${parentSKU}] ❌ No category mapping found for product type: "${productType}"`)
      return {
        success: false,
        error: `No category mapping for product type: ${productType}`
      }
    }
    console.log(`   [DEBUG ${parentSKU}] ✓ Category mapping found: ${categoryMapping.level1} > ${categoryMapping.level2} > ${categoryMapping.level3}`)

    // 4. Find the leaf category (level 3)
    // IMPORTANT: Products should be linked to level 2 (subcategory) if level 3 doesn't exist
    // First try to find level 3 category
    let categories = await productModule.listProductCategories({
      name: categoryMapping.level3
    })

    // If not found, try case-insensitive search
    if (!categories || categories.length === 0) {
      const allCategories = await productModule.listProductCategories({}, { take: 9999 })
      categories = allCategories.filter((cat: any) => 
        cat.name.toLowerCase().trim() === categoryMapping.level3.toLowerCase().trim()
      )
    }

    // If level 3 not found, try to find level 2 (subcategory) instead
    if (!categories || categories.length === 0) {
      console.log(`   [DEBUG ${parentSKU}] ⚠️  Level 3 category "${categoryMapping.level3}" not found, trying level 2: "${categoryMapping.level2}"`)
      categories = await productModule.listProductCategories({
        name: categoryMapping.level2
      })
      
      if (!categories || categories.length === 0) {
        const allCategories = await productModule.listProductCategories({}, { take: 9999 })
        categories = allCategories.filter((cat: any) => 
          cat.name.toLowerCase().trim() === categoryMapping.level2.toLowerCase().trim()
        )
      }
    }

    // If still not found, try searching by handle
    if (!categories || categories.length === 0) {
      const handle = (categories.length === 0 ? categoryMapping.level3 : categoryMapping.level2)
        .toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')
      const allCategories = await productModule.listProductCategories({}, { take: 9999 })
      categories = allCategories.filter((cat: any) => 
        cat.handle === handle || cat.handle?.includes(handle) || handle.includes(cat.handle)
      )
    }

    if (!categories || categories.length === 0) {
      console.error(`   [DEBUG ${parentSKU}] ❌ Category not found: "${categoryMapping.level3}" or "${categoryMapping.level2}"`)
      console.error(`   [DEBUG ${parentSKU}]    Hierarchy: ${categoryMapping.level1} > ${categoryMapping.level2} > ${categoryMapping.level3}`)
      console.error(`   [DEBUG ${parentSKU}]    Please run the seed script at /seed-ui to create missing categories`)
      return {
        success: false,
        error: `Category not found: ${categoryMapping.level3} or ${categoryMapping.level2}. Please run the seed script at /seed-ui to create missing categories.`
      }
    }

    const leafCategory = categories[0]
    console.log(`   [DEBUG ${parentSKU}] ✓ Found category: "${leafCategory.name}" (ID: ${leafCategory.id})`)
    console.log(`   [DEBUG ${parentSKU}] ✓ Category found: "${leafCategory.name}" (ID: ${leafCategory.id})`)

    // 4b. Find product type ID
    let productTypeId: string | undefined
    if (productType) {
      const productTypes = await productModule.listProductTypes({
        value: productType
      })
      if (productTypes && productTypes.length > 0) {
        productTypeId = productTypes[0].id
        console.log(`   [DEBUG ${parentSKU}] ✓ Product type ID found: ${productTypeId}`)
      } else {
        console.log(`   [DEBUG ${parentSKU}] ⚠️  Product type "${productType}" not found in database, continuing without type ID`)
      }
    }

    // 5. Prepare product images (Main + Image 2-9)
    // Collect images from parent row AND all child rows (variants may have their own images)
    const parentImageUrls = extractImages(parentRow)
    const allImageUrls = new Set<string>(parentImageUrls)
    
    // Also collect images from each child row (variant-specific images)
    childRows.forEach((childRow, idx) => {
      const childImages = extractImages(childRow)
      childImages.forEach(url => allImageUrls.add(url))
    })
    
    const images: { url: string }[] = Array.from(allImageUrls).map(url => ({ url }))
    console.log(`   [DEBUG ${parentSKU}] Collected ${images.length} unique images from parent and ${childRows.length} child rows`)
    if (images.length > 0) {
      console.log(`   [DEBUG ${parentSKU}] Image URLs: ${images.slice(0, 5).map(img => img.url).join(', ')}${images.length > 5 ? '...' : ''}`)
    }

    // 6. Read Variation Theme Name to determine how to create options
    const variationTheme = (parentRow['Variation Theme Name'] || '').toUpperCase()
    
    // Determine what attributes to use based on variation theme
    const useColor = variationTheme.includes('COLOR')
    const useSize = variationTheme.includes('SIZE')
    const useStyle = variationTheme.includes('STYLE')
    const useQuantity = variationTheme.includes('ITEM_PACKAGE_QUANTITY')
    
    // 7. Extract unique values based on variation theme
    const colors = new Set<string>()
    const sizes = new Set<string>()
    const styles = new Set<string>()
    const quantities = new Set<string>()
    
    childRows.forEach(row => {
      if (useColor && row['Colour']) colors.add(row['Colour'])
      if (useSize && row['Size']) sizes.add(row['Size'])
      if (useStyle && row['Size']) styles.add(row['Size']) // STYLE/SIZE uses Size field
      if (useQuantity && row['Unit Count']) quantities.add(row['Unit Count'])
    })

    // Extract unit count type from parent row or first child row
    const unitCountType = parentRow['Unit Count Type'] || childRows[0]?.['Unit Count Type'] || ''
    
    console.log(`   [DEBUG ${parentSKU}] Variation theme: "${variationTheme}"`)
    console.log(`   [DEBUG ${parentSKU}] Variation flags: Color=${useColor}, Size=${useSize}, Style=${useStyle}, Quantity=${useQuantity}`)
    console.log(`   [DEBUG ${parentSKU}] Found ${childRows.length} child rows (variants)`)
    console.log(`   [DEBUG ${parentSKU}] Unique values: Colors=${colors.size}, Sizes=${sizes.size}, Styles=${styles.size}, Quantities=${quantities.size}`)

    // 8. Create variants from child rows
    let variants = childRows.map((childRow, index) => {
      const sku = childRow[CSVColumn.SKU]
      
      // Debug: Log available columns for first child row to help diagnose CSV parsing issues
      if (index === 0) {
        console.log(`   [DEBUG ${parentSKU}] First child row columns: ${Object.keys(childRow).join(', ')}`)
        console.log(`   [DEBUG ${parentSKU}] First child row Title value: "${childRow[CSVColumn.TITLE] || childRow['Title'] || 'NOT FOUND'}"`)
        console.log(`   [DEBUG ${parentSKU}] First child row Item Name value: "${childRow[CSVColumn.ITEM_NAME] || childRow['Item Name'] || 'NOT FOUND'}"`)
      }
      const price = extractPrice(childRow)
      const quantity = extractQuantity(childRow)
      
      // Extract attributes based on variation theme
      const color = useColor ? (childRow[CSVColumn.COLOUR] || '') : ''
      const size = useSize ? (childRow[CSVColumn.SIZE] || '') : ''
      const style = useStyle ? (childRow[CSVColumn.SIZE] || '') : '' // STYLE/SIZE → Size field
      const quantityValue = useQuantity ? (childRow['Unit Count'] || '') : ''
      
      const unitCount = childRow['Unit Count'] || ''
      const unitCountType = childRow['Unit Count Type'] || ''

      // PRIORITY: Use Title field from CSV directly - this is the full product title from CSV
      // The Title column in child rows contains the complete product title for that variant
      let variantTitle: string | null = null
      
      // Get Title column directly - only use "Title"
      const titleValue = childRow['Title']
      if (titleValue && typeof titleValue === 'string' && titleValue.trim() !== '') {
        variantTitle = titleValue.trim()
        console.log(`   [DEBUG ${parentSKU}] Variant ${sku}: Found title from "Title" column: "${variantTitle}"`)
      }
      
      // Fallback to Item Name if Title is not found
      if (!variantTitle) {
        const itemNameValue = childRow['Item Name']
        if (itemNameValue && typeof itemNameValue === 'string' && itemNameValue.trim() !== '') {
          variantTitle = itemNameValue.trim()
          console.log(`   [DEBUG ${parentSKU}] Variant ${sku}: Found title from "Item Name" column: "${variantTitle}"`)
        }
      }
      
      // LAST RESORT: Only construct from parts if no CSV title found
      if (!variantTitle || variantTitle.trim() === '') {
        console.warn(`   [DEBUG ${parentSKU}] ⚠️  Variant ${sku}: No Title or Item Name found in CSV. Available columns: ${Object.keys(childRow).join(', ')}`)
        console.warn(`   [DEBUG ${parentSKU}] ⚠️  Falling back to constructing title from parts`)
        
        variantTitle = productTitle
        const titleParts = [sku]
        
        if (color) titleParts.push(color)
        if (size) titleParts.push(size)
        if (style && !size) titleParts.push(style)
        if (quantityValue) titleParts.push(quantityValue)
        
        if (titleParts.length > 1) {
          variantTitle = titleParts.join(' - ')
        } else {
          variantTitle = `${productTitle} - ${sku}`
        }
        console.log(`   [DEBUG ${parentSKU}] Variant ${sku}: Constructed title: "${variantTitle}"`)
      } else {
        // Use the CSV title directly - this is what the user wants
        variantTitle = variantTitle.trim()
        console.log(`   [DEBUG ${parentSKU}] ✓ Variant ${sku}: Using CSV title: "${variantTitle}"`)
      }

      // Build options object based on variation theme
      const options: Record<string, string> = {}
      if (color) options['Color'] = color
      if (size) options['Size'] = size
      if (style && !size) options['Style'] = style
      if (quantityValue) options['Quantity'] = quantityValue
      
      // Fallback: if no options, use SKU as option
      if (Object.keys(options).length === 0) {
        options['Variant'] = sku
      }

      // Extract all variant metadata using helper function
      const metadata = extractVariantMetadata(childRow)
      
      // Extract variant-specific images and save to metadata
      const variantImages = extractImages(childRow)
      if (variantImages.length > 0) {
        metadata.variant_images = variantImages.join(',') // Store as comma-separated string
        metadata.variant_main_image = variantImages[0] // Store main image separately for easy access
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
            max_quantity: null,
          }
        ],
        options,
        metadata
      }
    })

    if (variants.length === 0) {
      console.error(`   [DEBUG ${parentSKU}] ❌ No variants created from ${childRows.length} child rows`)
      return {
        success: false,
        error: 'No variants to create'
      }
    }
    
    console.log(`   [DEBUG ${parentSKU}] ✓ Created ${variants.length} variants`)
    console.log(`   [DEBUG ${parentSKU}] Sample variant: SKU=${variants[0].sku}, Price=${variants[0].prices[0]?.amount}, Options=${JSON.stringify(variants[0].options)}`)

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

    // 9. Build product options based on variation theme
    const productOptions: Array<{ title: string; values: string[] }> = []
    
    if (useColor && colors.size > 0) {
      productOptions.push({
        title: 'Color',
        values: Array.from(colors)
      })
    }
    
    if (useSize && sizes.size > 0) {
      productOptions.push({
        title: 'Size',
        values: Array.from(sizes)
      })
    }
    
    if (useStyle && styles.size > 0) {
      productOptions.push({
        title: 'Style',
        values: Array.from(styles)
      })
    }
    
    if (useQuantity && quantities.size > 0) {
      productOptions.push({
        title: 'Quantity',
        values: Array.from(quantities)
      })
    }
    
    // Fallback: if no options based on variation theme, use SKU as option
    if (productOptions.length === 0) {
      productOptions.push({
        title: 'Variant',
        values: childRows.map(row => row['SKU'])
      })
    }

    // 9. Check if product already exists by handle or variants by SKU
    console.log(`   [DEBUG ${parentSKU}] Checking if product with handle "${handle}" already exists...`)
    
    const { ContainerRegistrationKeys } = await import('@medusajs/framework/utils')
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
    } catch (err) {
      // Product doesn't exist, continue
    }
    
    // Check for existing variants by SKU
    const variantSkus = variants.map(v => v.sku)
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
      } catch (err) {
        // No existing variants found
      }
    }

    let product: any
    let productId: string | undefined

    if (existingProduct) {
      // Product already exists, use it
      product = existingProduct
      productId = product.id
      console.log(`   [DEBUG ${parentSKU}] ⚠️  Product with handle "${handle}" already exists (ID: ${productId}), skipping creation`)
      
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
          const existingImageUrls = new Set(existingImages.map((img: any) => img.url))
          
          // Merge: add new images that don't already exist
          const imagesToAdd = images.filter(img => !existingImageUrls.has(img.url))
          const mergedImages = [...existingImages.map((img: any) => ({ url: img.url })), ...imagesToAdd]
          
          
          if (mergedImages.length > 0) {
            const { updateProductsWorkflow } = await import('@medusajs/medusa/core-flows')
            await updateProductsWorkflow(scope).run({
              input: {
                selector: { id: productId },
                update: {
                  images: mergedImages,
                }
              }
            })
            console.log(`   [DEBUG ${parentSKU}] ✓ Updated product images (${mergedImages.length} total images)`)
          }
        } catch (imageUpdateError: any) {
          console.log(`   [DEBUG ${parentSKU}] ⚠️  Failed to update images: ${imageUpdateError.message}`)
          // Non-fatal error, continue
        }
      }
      
      // Filter out existing variants
      if (existingSkus.size > 0) {
        console.log(`   [DEBUG ${parentSKU}] ⚠️  Found ${existingSkus.size} existing variants with SKUs: ${Array.from(existingSkus).join(', ')}`)
        variants = variants.filter(v => !existingSkus.has(v.sku))
        
        if (variants.length === 0) {
          console.log(`   [DEBUG ${parentSKU}] ⚠️  All variants already exist, product is already complete`)
          // Product and all variants exist, just link to seller if needed
          product = existingProduct
          productId = product.id
        } else {
          console.log(`   [DEBUG ${parentSKU}] ℹ️  ${variants.length} new variants to add (${existingSkus.size} already exist)`)
          // We can't add variants to existing product via this workflow, so skip
          console.log(`   [DEBUG ${parentSKU}] ⚠️  Cannot add variants to existing product via import, skipping`)
          return {
            success: false,
            error: `Product already exists with handle "${handle}", cannot add new variants via import`
          }
        }
      }
    } else if (existingSkus.size > 0) {
      // Product doesn't exist but some variants do
      console.log(`   [DEBUG ${parentSKU}] ⚠️  Found ${existingSkus.size} existing variants with SKUs: ${Array.from(existingSkus).join(', ')}`)
      
      // Try to find the product that owns these variants
      try {
        const { data: variantProducts } = await query.graph({
          entity: 'product_variant',
          fields: ['product_id', 'sku'],
          filters: { sku: Array.from(existingSkus) }
        })
        
        if (variantProducts && variantProducts.length > 0) {
          // Get unique product IDs from the variants
          const productIds = [...new Set(variantProducts.map((v: any) => v.product_id))]
          
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
              console.log(`   [DEBUG ${parentSKU}] ✓ Found product that owns existing variants: ${productId}`)
              
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
                  const existingImageUrls = new Set(existingImages.map((img: any) => img.url))
                  
                  // Merge: add new images that don't already exist
                  const imagesToAdd = images.filter(img => !existingImageUrls.has(img.url))
                  const mergedImages = [...existingImages.map((img: any) => ({ url: img.url })), ...imagesToAdd]
                  
                  
                  if (mergedImages.length > 0) {
                    const { updateProductsWorkflow } = await import('@medusajs/medusa/core-flows')
                    await updateProductsWorkflow(scope).run({
                      input: {
                        selector: { id: productId },
                        update: {
                          images: mergedImages,
                        }
                      }
                    })
                    console.log(`   [DEBUG ${parentSKU}] ✓ Updated product images (${mergedImages.length} total images)`)
                  }
                } catch (imageUpdateError: any) {
                  console.log(`   [DEBUG ${parentSKU}] ⚠️  Failed to update images: ${imageUpdateError.message}`)
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
            console.log(`   [DEBUG ${parentSKU}] ⚠️  Variants belong to ${productIds.length} different products, this is inconsistent`)
          }
        }
      } catch (err) {
        console.log(`   [DEBUG ${parentSKU}] ⚠️  Could not find product for existing variants: ${err}`)
      }
      
      // If we still don't have a product, filter out existing variants and try to create with remaining ones
      if (!product) {
        variants = variants.filter(v => !existingSkus.has(v.sku))
        
        if (variants.length === 0) {
          console.log(`   [DEBUG ${parentSKU}] ❌ All variants already exist but couldn't find the product`)
          return {
            success: false,
            error: `All variants already exist for product ${parentSKU} but product couldn't be found`
          }
        }
        console.log(`   [DEBUG ${parentSKU}] ℹ️  Will create product with ${variants.length} new variants (skipping ${existingSkus.size} existing ones)`)
      }
    }

    // 10. Create product with variants using workflow (only if product doesn't exist)
    if (!product) {
      console.log(`   [DEBUG ${parentSKU}] Creating product with ${variants.length} variants, ${productOptions.length} options`)
      console.log(`   [DEBUG ${parentSKU}] Handle: "${handle}", Category ID: ${leafCategory.id}, Type ID: ${productTypeId || 'none'}`)
      
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
                metadata: extractProductMetadata(parentRow, parentSKU, sellerId),
                sales_channels: [{ id: salesChannelId }]
              }
            ]
          }
        })

        if (!result || !result[0]) {
          console.error(`   [DEBUG ${parentSKU}] ❌ Product creation returned empty result`)
          throw new Error('Product creation returned empty result')
        }

        product = result[0]
        productId = product.id
        console.log(`   [DEBUG ${parentSKU}] ✓ Product created successfully: ${productId}`)
      } catch (workflowError: any) {
        // Check if error is due to existing product/variant
        if (workflowError.message?.includes('already exists') || 
            workflowError.message?.includes('duplicate') ||
            workflowError.message?.includes('unique constraint')) {
          console.log(`   [DEBUG ${parentSKU}] ⚠️  Product/variant already exists, attempting to find existing product...`)
          
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
              console.log(`   [DEBUG ${parentSKU}] ✓ Found existing product: ${productId}`)
            } else {
              // Product handle doesn't exist, might be a variant SKU conflict
              console.log(`   [DEBUG ${parentSKU}] ⚠️  Product handle not found, error likely due to existing variant SKU`)
              return {
                success: false,
                error: `Product or variant already exists: ${workflowError.message}`
              }
            }
          } catch (queryError: any) {
            console.error(`   [DEBUG ${parentSKU}] ❌ Failed to query for existing product:`)
            console.error(`   [DEBUG ${parentSKU}]    Query Error: ${queryError.message}`)
            return {
              success: false,
              error: `Product or variant already exists: ${workflowError.message}`
            }
          }
        } else {
          console.error(`   [DEBUG ${parentSKU}] ❌ Product creation workflow failed:`)
          console.error(`   [DEBUG ${parentSKU}]    Error: ${workflowError.message}`)
          console.error(`   [DEBUG ${parentSKU}]    Stack: ${workflowError.stack}`)
          throw workflowError
        }
      }
    }

    // 8. Link product to seller (using direct DB insert into join table)
    try {
      const { ContainerRegistrationKeys, generateEntityId } = await import('@medusajs/framework/utils')
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
        console.log(`   [DEBUG ${parentSKU}] ✓ Linked product to seller`)
      } else {
        console.log(`   [DEBUG ${parentSKU}] ℹ️  Product already linked to seller`)
      }
    } catch (linkError: any) {
      // Link error - non-fatal, but log it
      console.log(`   [DEBUG ${parentSKU}] ⚠️  Could not link product to seller: ${linkError.message}`)
    }

    // 9. Create inventory items for each variant
    const inventoryModule = scope.resolve(Modules.INVENTORY)

    // Create a map of SKU to childRow for efficient lookup
    const childRowMap = new Map<string, CSVRow>()
    childRows.forEach(row => {
      const sku = row['SKU']
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
          const { ContainerRegistrationKeys, generateEntityId } = await import('@medusajs/framework/utils')
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
        } catch (linkError: any) {
          // Link error - non-fatal
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
      }
    }

    console.log(`   [DEBUG ${parentSKU}] ✓ Product import completed successfully`)
    return {
      success: true,
      productId
    }
  } catch (error: any) {
    console.error(`   [DEBUG ${parentSKU}] ❌ Import failed with error:`)
    console.error(`   [DEBUG ${parentSKU}]    Message: ${error.message || 'Unknown error'}`)
    console.error(`   [DEBUG ${parentSKU}]    Stack: ${error.stack || 'No stack trace'}`)
    if (error.cause) {
      console.error(`   [DEBUG ${parentSKU}]    Cause: ${error.cause}`)
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

  for (let i = 0; i < groups.length; i++) {
    const group = groups[i]
    console.log(`\n📦 [Import Progress] Processing product ${i + 1}/${groups.length}: ${group.parentSKU}`)
    
    const result = await importParentGroup(group, context, scope)

    if (result.success) {
      results.success++
      console.log(`   ✅ [Import Progress] Successfully imported ${group.parentSKU} → ${result.productId}`)
    } else {
      results.failed++
      const errorMsg = result.error || 'Unknown error'
      results.errors.push({
        parentSKU: group.parentSKU,
        error: errorMsg
      })
      console.error(`   ❌ [Import Progress] Failed to import ${group.parentSKU}: ${errorMsg}`)
    }
  }

  return results
}

