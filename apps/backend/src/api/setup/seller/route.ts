import type { MedusaRequest, MedusaResponse } from '@medusajs/framework'
import { ContainerRegistrationKeys, MedusaError, Modules } from '@medusajs/framework/utils'
import { SELLER_MODULE } from '@mercurjs/b2c-core/modules/seller'
import type { SellerModuleService } from '@mercurjs/b2c-core/modules/seller'
import { createLocationFulfillmentSetAndAssociateWithSellerWorkflow } from '@mercurjs/b2c-core/workflows'
import { createStockLocationsWorkflow, deleteStockLocationsWorkflow } from '@medusajs/medusa/core-flows'

// Import the links to get the entryPoints
import sellerStockLocationLink from '@mercurjs/b2c-core/links/seller-stock-location'
import sellerFulfillmentSetLink from '@mercurjs/b2c-core/links/seller-fulfillment-set'

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
    const fulfillmentSetName = stockLocation[0].name
    
    // Check if fulfillment set with this name already exists
    const { data: existingFulfillmentSets } = await query.graph({
      entity: 'fulfillment_set',
      fields: ['id', 'name'],
      filters: {
        name: fulfillmentSetName
      }
    })
    
    if (existingFulfillmentSets && existingFulfillmentSets.length > 0) {
      // Fulfillment set already exists, link it to seller and stock location
      const fulfillmentSetId = existingFulfillmentSets[0].id
      console.log(`ℹ️  Fulfillment set "${fulfillmentSetName}" already exists, linking to seller and stock location`)
      
      const link = container.resolve(ContainerRegistrationKeys.LINK)
      
      // Check if links already exist
      const { data: existingSellerLinks } = await query.graph({
        entity: sellerFulfillmentSetLink.entryPoint,
        fields: ['fulfillment_set_id'],
        filters: {
          seller_id: seller.id,
          fulfillment_set_id: fulfillmentSetId
        }
      })
      
      // Check stock location fulfillment set link (using query on stock_location with fulfillment_sets)
      const { data: stockLocationData } = await query.graph({
        entity: 'stock_location',
        fields: ['fulfillment_sets.id'],
        filters: {
          id: stockLocation[0].id
        }
      })
      
      const hasLocationLink = stockLocationData && stockLocationData.length > 0 && 
        stockLocationData[0].fulfillment_sets?.some((fs: any) => fs.id === fulfillmentSetId)
      
      // Create links if they don't exist
      const linksToCreate: any[] = []
      
      if (!existingSellerLinks || existingSellerLinks.length === 0) {
        linksToCreate.push({
          [SELLER_MODULE]: {
            seller_id: seller.id
          },
          [Modules.FULFILLMENT]: {
            fulfillment_set_id: fulfillmentSetId
          }
        })
      }
      
      if (!hasLocationLink) {
        linksToCreate.push({
          [Modules.STOCK_LOCATION]: {
            stock_location_id: stockLocation[0].id
          },
          [Modules.FULFILLMENT]: {
            fulfillment_set_id: fulfillmentSetId
          }
        })
      }
      
      if (linksToCreate.length > 0) {
        await link.create(linksToCreate)
        console.log(`✅ Linked existing fulfillment set to seller and stock location`)
      } else {
        console.log(`ℹ️  Fulfillment set already linked to seller and stock location`)
      }
    } else {
      // Create new fulfillment set
      try {
        await createLocationFulfillmentSetAndAssociateWithSellerWorkflow(container).run({
          input: {
            location_id: stockLocation[0].id,
            fulfillment_set_data: {
              name: fulfillmentSetName,
              type: 'pick-up'
            },
            seller_id: seller.id
          }
        })
        console.log(`✅ Created fulfillment set and linked to seller`)
      } catch (workflowError: any) {
        // If workflow fails due to duplicate name (race condition), try to link existing one
        if (workflowError.message?.includes('already exists')) {
          console.log(`⚠️  Fulfillment set creation failed (may have been created concurrently), attempting to link existing one...`)
          
          // Re-query for fulfillment set
          const { data: retryFulfillmentSets } = await query.graph({
            entity: 'fulfillment_set',
            fields: ['id'],
            filters: {
              name: fulfillmentSetName
            }
          })
          
          if (retryFulfillmentSets && retryFulfillmentSets.length > 0) {
            const fulfillmentSetId = retryFulfillmentSets[0].id
            const link = container.resolve(ContainerRegistrationKeys.LINK)
            
            await link.create([
              {
                [SELLER_MODULE]: {
                  seller_id: seller.id
                },
                [Modules.FULFILLMENT]: {
                  fulfillment_set_id: fulfillmentSetId
                }
              },
              {
                [Modules.STOCK_LOCATION]: {
                  stock_location_id: stockLocation[0].id
                },
                [Modules.FULFILLMENT]: {
                  fulfillment_set_id: fulfillmentSetId
                }
              }
            ])
            console.log(`✅ Linked existing fulfillment set after race condition`)
          } else {
            throw workflowError
          }
        } else {
          throw workflowError
        }
      }
    }

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

