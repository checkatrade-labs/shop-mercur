import type { AuthenticatedMedusaRequest, MedusaResponse } from '@medusajs/framework'
import { MedusaError } from '@medusajs/framework/utils'
import { refetchEntity } from '@medusajs/framework/http'

/**
 * GET /vendor/products/:id
 * 
 * Retrieve a single product for vendor panel
 * Filters out secondary_category relationships that don't exist in the database
 */
export async function GET(
  req: AuthenticatedMedusaRequest,
  res: MedusaResponse
): Promise<void> {
  const { id } = req.params
  const sellerId = req.auth_context?.actor_id
  
  if (!sellerId) {
    throw new MedusaError(
      MedusaError.Types.UNAUTHORIZED,
      'Seller authentication required'
    )
  }

  // Get requested fields and filter out secondary_category to avoid querying non-existent table
  // The *categories expansion might include secondary_category relationships
  const requestedFields = (req.queryConfig?.fields as string[]) || []
  const filteredFields = requestedFields.filter(
    (field: string) => 
      !field.includes('secondary_category') && 
      !field.includes('secondaryCategory') &&
      !field.match(/secondary[-_]?category/i)
  )

  // Use refetchEntity with filtered fields (empty array if no fields requested)
  const selectFields = filteredFields

  try {
    const product = await refetchEntity(
      'product',
      id,
      req.scope,
      selectFields
    )

    if (!product) {
      throw new MedusaError(
        MedusaError.Types.NOT_FOUND,
        `Product with id "${id}" not found`
      )
    }

    res.status(200).json({ product })
  } catch (error: any) {
    // If error is about secondary_category table, retry without any category fields
    if (error.message?.includes('secondary_category') || error.code === '42P01') {
      const fieldsWithoutCategories = requestedFields.filter(
        (field: string) => !field.includes('categor')
      )
      const product = await refetchEntity(
        'product',
        id,
        req.scope,
        fieldsWithoutCategories
      )
      
      if (!product) {
        throw new MedusaError(
          MedusaError.Types.NOT_FOUND,
          `Product with id "${id}" not found`
        )
      }
      
      res.status(200).json({ product })
    } else {
      throw error
    }
  }
}

