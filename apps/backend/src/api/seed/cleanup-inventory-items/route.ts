import type { MedusaRequest, MedusaResponse } from '@medusajs/framework'
import { MedusaError, ContainerRegistrationKeys } from '@medusajs/framework/utils'

/**
 * POST /seed/cleanup-inventory-items
 * 
 * Public endpoint to cleanup orphaned seller inventory item links
 * No authentication required
 * 
 * @body { seller_id: string } - Required seller ID
 * 
 * @returns Summary of deleted orphaned links
 */
export async function POST(
  req: MedusaRequest<{ seller_id: string }>,
  res: MedusaResponse
): Promise<void> {
  try {
    const knex = req.scope.resolve(ContainerRegistrationKeys.PG_CONNECTION)
    const { seller_id } = req.body || {}

    // Validate seller_id is provided
    if (!seller_id || seller_id.trim() === '') {
      throw new MedusaError(
        MedusaError.Types.INVALID_DATA,
        'seller_id is required'
      )
    }

    // Build the query to find orphaned rows
    const query = knex('seller_seller_inventory_inventory_item as sii')
      .leftJoin('inventory_item as ii', 'ii.id', 'sii.inventory_item_id')
      .whereNull('ii.id') // Inventory item doesn't exist
      .whereNull('sii.deleted_at') // Not already soft-deleted
      .where('sii.seller_id', seller_id) // Filter by seller_id (required)

    // First, get the orphaned rows to show what will be deleted
    const orphanedRows = await query.clone().select('sii.*')

    if (orphanedRows.length === 0) {
      res.status(200).json({
        success: true,
        message: 'No orphaned seller inventory items found',
        deleted_count: 0,
        seller_id: seller_id,
        orphaned_items: []
      })
      return
    }

    // Delete the orphaned rows using SELECT * in NOT EXISTS (as requested)
    const deleteQuery = knex('seller_seller_inventory_inventory_item as sii')
      .whereNull('sii.deleted_at')
      .where('sii.seller_id', seller_id) // Filter by seller_id (required)
      .whereNotExists(function() {
        this.select('*')
          .from('inventory_item as ii')
          .whereRaw('ii.id = sii.inventory_item_id')
      })

    const deletedCount = await deleteQuery.delete()

    res.status(200).json({
      success: true,
      message: `Successfully deleted ${deletedCount} orphaned seller inventory item link(s)`,
      deleted_count: deletedCount,
      seller_id: seller_id,
      orphaned_items: orphanedRows.map(row => ({
        link_id: row.id,
        seller_id: row.seller_id,
        inventory_item_id: row.inventory_item_id,
        created_at: row.created_at,
        updated_at: row.updated_at
      }))
    })
  } catch (error: any) {
    console.error('[Cleanup Inventory Items] Error:', error)
    throw new MedusaError(
      MedusaError.Types.INVALID_DATA,
      error.message || 'Failed to cleanup seller inventory items'
    )
  }
}

