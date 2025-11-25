import type { MedusaRequest, MedusaResponse } from '@medusajs/framework'
import { ContainerRegistrationKeys, MedusaError, Modules } from '@medusajs/framework/utils'
import { SELLER_MODULE } from '@mercurjs/b2c-core/modules/seller'
import type { SellerModuleService } from '@mercurjs/b2c-core/modules/seller'
import { createLocationFulfillmentSetAndAssociateWithSellerWorkflow } from '@mercurjs/b2c-core/workflows'
import { createStockLocationsWorkflow, deleteStockLocationsWorkflow } from '@medusajs/medusa/core-flows'

// Import the link to get the entryPoint
import sellerStockLocationLink from '@mercurjs/b2c-core/links/seller-stock-location'

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

    // 3. Check if seller already has a stock location linked
    const query = container.resolve(ContainerRegistrationKeys.QUERY)
    const { data: sellerLocations } = await query.graph({
      entity: sellerStockLocationLink.entryPoint,
      fields: ['stock_location.id', 'stock_location.name'],
      filters: {
        seller_id: seller.id
      }
    })
    
    if (sellerLocations && sellerLocations.length > 0) {
      const stockLocation = sellerLocations[0].stock_location
      
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
            id: stockLocation.id,
            name: stockLocation.name
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

    // 5. Link stock location to seller, fulfillment provider, and sales channel
    const link = container.resolve(ContainerRegistrationKeys.LINK)
    await link.create([
      {
        [SELLER_MODULE]: {
          seller_id: seller.id
        },
        [Modules.STOCK_LOCATION]: {
          stock_location_id: stockLocation[0].id
        }
      },
      {
        [Modules.STOCK_LOCATION]: {
          stock_location_id: stockLocation[0].id
        },
        [Modules.FULFILLMENT]: {
          fulfillment_provider_id: 'manual_manual'
        }
      },
      {
        [Modules.SALES_CHANNEL]: {
          sales_channel_id: salesChannelId
        },
        [Modules.STOCK_LOCATION]: {
          stock_location_id: stockLocation[0].id
        }
      }
    ])

    console.log(`✅ Linked stock location to seller`)

    // 6. Create fulfillment set and associate with seller
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

/**
 * DELETE /setup/seller
 * 
 * Deletes stock location for a seller
 * 
 * Body:
 * {
 *   "email": "seller@example.com"
 * }
 * 
 * @returns Success message
 */
export async function DELETE(
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

    // 1. Find existing seller by email
    const sellerModule = container.resolve<SellerModuleService>(SELLER_MODULE)
    const existingSellers = await sellerModule.listSellers({ email })
    
    if (!existingSellers || existingSellers.length === 0) {
      throw new MedusaError(
        MedusaError.Types.NOT_FOUND,
        `Seller with email "${email}" not found.`
      )
    }

    const seller = existingSellers[0]
    console.log(`Found seller: ${seller.id} - ${seller.name}`)

    // 2. Find stock location linked to seller
    const query = container.resolve(ContainerRegistrationKeys.QUERY)
    const { data: sellerLocations } = await query.graph({
      entity: sellerStockLocationLink.entryPoint,
      fields: ['stock_location.id'],
      filters: {
        seller_id: seller.id
      }
    })
    
    if (!sellerLocations || sellerLocations.length === 0) {
      throw new MedusaError(
        MedusaError.Types.NOT_FOUND,
        'Seller does not have a stock location to delete'
      )
    }

    const stockLocationId = sellerLocations[0].stock_location.id

    // 3. Delete the stock location (this will also cascade delete links)
    await deleteStockLocationsWorkflow(container).run({
      input: {
        ids: [stockLocationId]
      }
    })

    console.log(`✅ Deleted stock location: ${stockLocationId}`)

    res.status(200).json({
      success: true,
      message: 'Stock location deleted successfully',
      data: {
        seller: {
          id: seller.id,
          name: seller.name,
          email: seller.email
        },
        deletedStockLocationId: stockLocationId
      }
    })
  } catch (error: any) {
    console.error('[Delete Stock Location] Error:', error)

    throw new MedusaError(
      MedusaError.Types.INVALID_DATA,
      error.message || 'Failed to delete stock location'
    )
  }
}

