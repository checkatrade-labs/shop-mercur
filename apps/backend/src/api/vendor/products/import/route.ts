import type { AuthenticatedMedusaRequest, MedusaResponse } from '@medusajs/framework'
import { ContainerRegistrationKeys, MedusaError, Modules } from '@medusajs/framework/utils'
import { SELLER_MODULE, SellerModuleService } from '@mercurjs/b2c-core/modules/seller'
import sellerStockLocationLink from '@mercurjs/b2c-core/links/seller-stock-location'
import csvParser from 'csv-parser'
import { Readable } from 'stream'
import { groupByParentSKU, validateParentGroup, normalizeCSVRow, type CSVRow } from '../../../../lib/csv-parser'
import { importParentGroups } from '../../../../lib/parent-child-importer'

/**
 * POST /vendor/products/import
 *
 * Import products from CSV file (Parent/Child structure)
 *
 * NOTE: Column names are case-insensitive. "Product Name", "product name", and "PRODUCT NAME" will all work.
 *
 * Expected CSV columns (from CSVRow):
 *
 * Core Fields:
 * - Status: Product status
 * - Listing Action: Action to perform
 * - Product Name: Product name/title
 * - SKU: Unique variant SKU
 * - Product Type: Type for category mapping
 * - Product Description: Full description
 * - Bullet Points: Product features/highlights
 *
 * Pricing & Quantity:
 * - Original Trade Price (inc VAT): Original trade price
 * - Trade Sell Price (inc VAT): Current trade price
 * - Original Consumer Price (inc VAT): Original consumer price
 * - Consumer Sell Price (inc VAT): Current consumer price
 * - VAT %: VAT percentage
 * - Qty Available: Stock quantity
 *
 * Parent/Child Structure:
 * - Parentage Level: "Parent" | "Child" | ""
 * - Parent SKU: SKU of parent product (for child variants)
 * - Variation Theme Name: Theme for variations (e.g., "Colour/Size")
 *
 * Variant Attributes:
 * - Colour: Color variant
 * - Size: Size variant
 * - Style: Style variant
 * - Material: Material variant
 * - Edge: Edge variant
 * - Shape: Shape variant
 * - Finish: Finish variant
 *
 * Images:
 * - Main Image URL: Primary product image
 * - Image 2 through Image 9: Additional images
 *
 * Product Details:
 * - Brand Name: Product brand
 * - Manufacturer: Manufacturer name
 * - Product ID Type: ID type (EAN, UPC, etc.)
 * - Product ID: Product identifier
 * - Part Number: Manufacturer part number
 *
 * Features & Components:
 * - Included Components: Included items
 * - Special Features_1 through Special Features_5: Product features
 *
 * Units:
 * - Units per Product: Number of units
 * - Unit Measurement: Unit measurement type
 * - Units per Product: Number of packs
 *
 * Product Dimensions:
 * - Product Length Range: Length range
 * - Product Length: Length value
 * - Product Length Unit: Length unit
 * - Product Width Range: Width range
 * - Product Width: Width value
 * - Product Width Unit: Width unit
 * - Product Thickness: Thickness value
 * - Product Thickness Unit: Thickness unit
 * - Product Height: Height value
 * - Product Height Unit: Height unit
 *
 * Product Weight:
 * - Product Weight: Weight value
 * - Product Weight Unit: Weight unit
 *
 * Package Dimensions:
 * - Package Length: Package length
 * - Package Length Unit: Package length unit
 * - Package Width: Package width
 * - Package Width Unit: Package width unit
 * - Package Height: Package height
 * - Package Height Unit: Package height unit
 * - Package Weight: Package weight
 * - Package Weight Unit: Package weight unit
 *
 * Additional Info:
 * - Country of origin: Country of origin
 * - No of Boxes: Number of boxes
 * - Delivery Time: Delivery time
 * - Delivery Time Unit: Delivery time unit
 * - Item form: Item form
 * - Installation Type: Installation type
 * - Age Restricted: Age restriction flag
 */
export async function POST(
  req: AuthenticatedMedusaRequest,
  res: MedusaResponse
): Promise<void> {
  const actorId = req.auth_context?.actor_id

  const logger = req.scope.resolve(ContainerRegistrationKeys.LOGGER)

  if (!actorId) {
    throw new MedusaError(
      MedusaError.Types.UNAUTHORIZED,
      'Authentication required'
    )
  }

  try {
    // 1. Get seller from actor_id (member)
    const sellerModule = req.scope.resolve<SellerModuleService>(SELLER_MODULE)
    const query = req.scope.resolve(ContainerRegistrationKeys.QUERY)
    
    // Fetch seller by actor_id - in b2c-core, actor_id is the member ID
    const { data: sellers } = await query.graph({
      entity: 'seller',
      fields: ['id', 'name'],
      filters: {
        members: {
          id: actorId
        }
      }
    })

    if (!sellers || sellers.length === 0) {
      throw new MedusaError(
        MedusaError.Types.NOT_FOUND,
        `No seller found for member: ${actorId}`
      )
    }

    const sellerId = sellers[0].id

    // 2. Get file from request (uploaded by multer middleware)
    const file = (req as any).file

    if (!file) {
      throw new MedusaError(
        MedusaError.Types.INVALID_DATA,
        'No CSV file provided. Please upload a file.'
      )
    }

    // 3. Get seller's default stock location via link query
    const { data: sellerLocations } = await query.graph({
      entity: sellerStockLocationLink.entryPoint,
      fields: ['stock_location.id'],
      filters: {
        seller_id: sellerId
      }
    })

    if (!sellerLocations || sellerLocations.length === 0) {
      throw new MedusaError(
        MedusaError.Types.INVALID_DATA,
        'Seller has no stock location. Please create one first.'
      )
    }

    const stockLocationId = sellerLocations[0].stock_location.id

    // 3. Get default sales channel
    const salesChannelModule = req.scope.resolve(Modules.SALES_CHANNEL)
    const salesChannels = await salesChannelModule.listSalesChannels({ is_disabled: false })
    
    if (!salesChannels || salesChannels.length === 0) {
      throw new MedusaError(
        MedusaError.Types.INVALID_DATA,
        'No active sales channel found'
      )
    }

    const salesChannelId = salesChannels[0].id

    // 4. Get default region (GB)
    const regionModule = req.scope.resolve(Modules.REGION)
    const regions = await regionModule.listRegions({ currency_code: 'gbp' })

    if (!regions || regions.length === 0) {
      throw new MedusaError(
        MedusaError.Types.INVALID_DATA,
        'No GBP region found'
      )
    }

    const regionId = regions[0].id

    // 5. Parse CSV file
    const rows: CSVRow[] = []
    const fileBuffer = file.buffer
    const stream = Readable.from(fileBuffer.toString('utf-8'))

    await new Promise<void>((resolve, reject) => {
      stream
        .pipe(csvParser())
        .on('data', (row: any) => {
          // Normalize column names to be case-insensitive
          const normalizedRow = normalizeCSVRow(row)

          rows.push(normalizedRow)
        })
        .on('end', () => {
          resolve()
        })
        .on('error', (error) => {
          logger.error('CSV parsing error:', error)
          reject(error)
        })
    })

    // 6. Group by Parent SKU
    logger.debug(`\n📦 [Product Import] Parsed ${rows.length} rows from CSV`)

    // Debug: Log first row to verify column mapping
    if (rows.length > 0) {
      const firstRow = rows[0]
      logger.debug(`[Product Import] First row sample:`)
      logger.debug(`  - Available columns: ${Object.keys(firstRow).slice(0, 10).join(', ')}...`)
      logger.debug(`  - SKU: "${firstRow['SKU']}"`)
      logger.debug(`  - Product Name: "${firstRow['Product Name']}"`)
      logger.debug(`  - Product Type: "${firstRow['Product Type']}"`)
      logger.debug(`  - Parentage Level: "${firstRow['Parentage Level']}"`)
      logger.debug(`  - Parent SKU: "${firstRow['Parent SKU']}"`)
    }

    const groups = groupByParentSKU(rows, logger)
    logger.debug(`\n📦 [Product Import] Found ${groups.length} unique products (parent SKUs) in CSV`)

    // 7. Validate groups
    const validationFailures: Array<{ parentSKU: string; reasons: string[] }> = []
    const validGroups = groups.filter((group, index) => {
      const validation = validateParentGroup(group, index + 1)
      if (!validation.valid) {
        const parentSKU = group.parentSKU || '(empty)'
        logger.debug(`[Product Import] Validation failed for parent SKU "${parentSKU}":`)
        logger.debug(`  - Has parent row: ${!!group.parentRow}`)
        logger.debug(`  - Child rows count: ${group.childRows.length}`)
        if (group.parentRow) {
          logger.debug(`  - Product Name: "${group.parentRow['Product Name']}"`)
          logger.debug(`  - Product Type: "${group.parentRow['Product Type']}"`)
        }
        validationFailures.push({
          parentSKU: parentSKU,
          reasons: validation.errors
        })
        return false
      }
      return true
    })

    // Log validation failures
    if (validationFailures.length > 0) {
      logger.error(`\n❌ [Product Import] ${validationFailures.length} products failed validation:`)
      validationFailures.forEach(({ parentSKU, reasons }) => {
        logger.error(`   - ${parentSKU}: ${reasons.join('; ')}`)
      })
    }

    if (validGroups.length === 0) {
      throw new MedusaError(
        MedusaError.Types.INVALID_DATA,
        'No valid products found in CSV'
      )
    }

    logger.info(`\n✅ [Product Import] ${validGroups.length} products passed validation, starting import...`)

    // 8. Import products
    // COMMENTED OUT FOR DEBUGGING - NOT STORING TO DATABASE YET
    const importResults = await importParentGroups(
      validGroups,
      {
        sellerId,
        stockLocationId,
        salesChannelId,
        regionId
      },
      logger,
      req.scope
    )

    logger.info(`\n✅ [Product Import] Import completed`)

    // 8b. Log import summary
    logger.info(`\n${'='.repeat(60)}`)
    logger.info(`📊 [Product Import] FINAL SUMMARY`)
    logger.info(`${'='.repeat(60)}`)
    logger.info(`   Total rows in CSV: ${rows.length}`)
    logger.info(`   Total unique products in CSV: ${groups.length}`)
    logger.info(`   ✅ Successfully imported: ${importResults.success}`)
    logger.info(`   ❌ Failed during import: ${importResults.failed}`)
    logger.info(`   ⚠️  Skipped (validation errors): ${validationFailures.length}`)

    if (validationFailures.length > 0) {
      logger.warn(`\n⚠️  Products Skipped (Validation Errors):`)
      validationFailures.forEach(({ parentSKU, reasons }) => {
        logger.warn(`   ✗ ${parentSKU}: ${reasons.join('; ')}`)
      })
    }

    if (importResults.errors && importResults.errors.length > 0) {
      logger.error(`\n❌ Products Failed During Import:`)
      importResults.errors.forEach(({ parentSKU, error }) => {
        logger.error(`   ✗ ${parentSKU}: ${error}`)
      })
    }

    logger.info(`${'='.repeat(60)}\n`)

    // 9. Trigger Algolia reindex for imported products
    // COMMENTED OUT FOR DEBUGGING - NOT SYNCING TO ALGOLIA YET
    // try {
    //   const { syncAlgoliaWorkflow } = await import('@mercurjs/algolia/workflows')
    //   await syncAlgoliaWorkflow.run({ container: req.scope })
    // } catch (algoliaError: any) {
    //   logger.warn(`Algolia reindex failed (non-critical): ${algoliaError.message}`)
    // }

    // 10. Return results
    res.status(200).json({
      message: 'Import completed (DEBUG MODE - not saved to database)',
      summary: {
        total: groups.length,
        imported: importResults.success,
        failed: importResults.failed,
        skipped: validationFailures.length
      },
      // results: importResults,
      validationFailures: validationFailures.map(f => ({
        parentSKU: f.parentSKU,
        reasons: f.reasons
      }))
    })
  } catch (error: any) {
    logger.error('[Vendor Product Import] Error:', error)

    if (error.type) {
      throw error
    }

    throw new MedusaError(
      MedusaError.Types.INVALID_DATA,
      error.message || 'Failed to import products'
    )
  }
}

