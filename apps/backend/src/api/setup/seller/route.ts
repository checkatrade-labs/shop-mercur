import type { MedusaRequest, MedusaResponse } from '@medusajs/framework'
import { MedusaError, Modules } from '@medusajs/framework/utils'
import { SELLER_MODULE } from '@mercurjs/b2c-core/modules/seller'
import type { SellerModuleService } from '@mercurjs/b2c-core/modules/seller'
import { createLocationFulfillmentSetAndAssociateWithSellerWorkflow } from '@mercurjs/b2c-core/workflows'
import { createStockLocationsWorkflow } from '@medusajs/medusa/core-flows'

/**
 * POST /setup/seller
 * 
 * Creates stock location for an EXISTING seller
 * 
 * Body:
 * {
 *   "email": "seller@example.com"
 * }
 * 
 * @returns Seller and stock location info
 */
export async function POST(
  req: MedusaRequest,
  res: MedusaResponse
) {
  try {
    const container = req.scope
    const { email } = req.body as {
      email?: string
    }

    // Validate inputs
    if (!email) {
      throw new MedusaError(
        MedusaError.Types.INVALID_DATA,
        'Seller email is required'
      )
    }

    // 1. Get default sales channel
    const salesChannelModule = container.resolve(Modules.SALES_CHANNEL)
    const salesChannels = await salesChannelModule.listSalesChannels({ is_disabled: false })
    
    if (!salesChannels || salesChannels.length === 0) {
      throw new MedusaError(
        MedusaError.Types.INVALID_DATA,
        'No active sales channel found'
      )
    }
    
    const salesChannelId = salesChannels[0].id

    // 2. Find existing seller by email
    const sellerModule = container.resolve<SellerModuleService>(SELLER_MODULE)
    const existingSellers = await sellerModule.listSellers({ email })
    
    if (!existingSellers || existingSellers.length === 0) {
      throw new MedusaError(
        MedusaError.Types.NOT_FOUND,
        `Seller with email "${email}" not found. Please create the seller first through the admin panel.`
      )
    }

    const seller = existingSellers[0]
    console.log(`Found seller: ${seller.id} - ${seller.name}`)

    // 3. Check if stock location already exists
    const stockLocationModule = container.resolve(Modules.STOCK_LOCATION)
    const stockLocations = await stockLocationModule.listStockLocations({
      name: { $ilike: `%${seller.id}%` }
    })
    
    if (stockLocations && stockLocations.length > 0) {
      return res.status(200).json({
        success: true,
        message: 'Seller already has a stock location',
        data: {
          seller: {
            id: seller.id,
            name: seller.name,
            email: seller.email
          },
          stockLocation: {
            id: stockLocations[0].id,
            name: stockLocations[0].name
          },
          alreadyExists: true
        }
      })
    }

    // 4. Create stock location for existing seller
    console.log('Creating stock location...')
    const { result: stockLocation } = await createStockLocationsWorkflow(container).run({
      input: {
        locations: [
          {
            name: `${seller.name} Warehouse`,
            address: {
              address_1: seller.address_line || 'Default Warehouse Address',
              city: seller.city || 'London',
              country_code: seller.country_code || 'gb',
              postal_code: seller.postal_code || 'SW1A 1AA',
              province: seller.state || undefined
            }
          }
        ]
      }
    })

    console.log(`✅ Created stock location: ${stockLocation[0].id}`)

    // 5. Create fulfillment set and associate with seller
    await createLocationFulfillmentSetAndAssociateWithSellerWorkflow(container).run({
      input: {
        location_id: stockLocation[0].id,
        fulfillment_set_data: {
          name: stockLocation[0].name,
          type: 'pick-up'
        },
        seller_id: seller.id
      }
    })

    console.log(`✅ Created fulfillment set and linked to seller`)

    res.status(200).json({
      success: true,
      message: 'Stock location created successfully for existing seller',
      data: {
        seller: {
          id: seller.id,
          name: seller.name,
          email: seller.email
        },
        stockLocation: {
          id: stockLocation[0].id,
          name: stockLocation[0].name
        }
      }
    })
  } catch (error: any) {
    console.error('[Setup Seller] Error:', error)

    throw new MedusaError(
      MedusaError.Types.INVALID_DATA,
      error.message || 'Failed to create stock location'
    )
  }
}

