import type { MedusaRequest, MedusaResponse } from '@medusajs/framework'
import { MedusaError, ContainerRegistrationKeys } from '@medusajs/framework/utils'
import { createProductCategories, createProductTypes } from '../../../scripts/seed/seed-functions'

/**
 * POST /seed/categories
 * 
 * Public endpoint to seed product categories and product types
 * No authentication required
 * 
 * @returns Summary of created categories and product types
 */
export async function POST(
  req: MedusaRequest,
  res: MedusaResponse
): Promise<void> {
  try {
    const container = req.scope
    const query = container.resolve(ContainerRegistrationKeys.QUERY)

    const results = {
      categories: null as any,
      productTypes: null as any,
      success: true,
      message: 'Categories and product types seeded successfully'
    }

    // 1. Create product categories
    console.log('Creating product categories...')
    results.categories = await createProductCategories(container)
    console.log(`✅ Created/verified ${results.categories.length} categories`)

    // 2. Create product types
    console.log('Creating product types...')
    results.productTypes = await createProductTypes(container)
    console.log(`✅ Created/verified ${results.productTypes.length} product types`)

    // 3. Fetch categories with proper fields using query.graph
    const { data: categoriesWithFields } = await query.graph({
      entity: 'product_category',
      fields: ['id', 'name', 'handle', 'parent_category_id'],
      filters: {},
      pagination: { take: 9999 }
    })
    
    console.log(`Fetched ${categoriesWithFields.length} categories with query.graph`)
    if (categoriesWithFields.length > 0) {
      console.log(`Sample category:`, JSON.stringify({
        id: categoriesWithFields[0].id,
        name: categoriesWithFields[0].name,
        handle: categoriesWithFields[0].handle,
        parent: categoriesWithFields[0].parent_category_id
      }))
    }
    
    // Build hierarchy from the fetched categories
    const categoryMapById = new Map<string, any>()
    const categoryMapByName = new Map<string, any>()
    
    // First pass: create category objects with basic info
    categoriesWithFields.forEach((cat: any) => {
      if (!cat || !cat.id) {
        console.warn('Skipping invalid category:', cat)
        return
      }
      const categoryObj = {
        id: cat.id,
        name: cat.name || 'Unnamed Category',
        handle: cat.handle || '',
        parent_category_id: cat.parent_category_id || null,
        children: [] as any[]
      }
      categoryMapById.set(cat.id, categoryObj)
      if (cat.name) {
        categoryMapByName.set(cat.name, categoryObj)
      }
    })
    
    console.log(`Built category map with ${categoryMapById.size} categories`)
    
    // Second pass: build parent-child relationships and find parent names
    const categoriesWithHierarchy = Array.from(categoryMapById.values()).map((cat: any) => {
      const parent = cat.parent_category_id ? categoryMapById.get(cat.parent_category_id) : null
      const children = Array.from(categoryMapById.values()).filter((c: any) => c.parent_category_id === cat.id)
      
      return {
        id: cat.id,
        name: cat.name,
        handle: cat.handle,
        parent_category_id: cat.parent_category_id,
        parent_name: parent?.name || null,
        children: children.map((child: any) => ({
          id: child.id,
          name: child.name,
          handle: child.handle
        })),
        level: cat.parent_category_id ? (parent?.parent_category_id ? 3 : 2) : 1
      }
    })

    // Build tree structure (only root categories with nested children)
    const buildTree = (categories: any[]): any[] => {
      const tree: any[] = []
      const categoryMapById = new Map(categories.map(c => [c.id, c]))
      
      // Find all root categories (no parent)
      const rootCategories = categories.filter(cat => !cat.parent_category_id)
      
      rootCategories.forEach(rootCat => {
        // Find level 2 children
        const level2Children = categories
          .filter(c => c.parent_category_id === rootCat.id)
          .map(level2Cat => {
            // Find level 3 children
            const level3Children = categories
              .filter(c => c.parent_category_id === level2Cat.id)
              .map(level3Cat => ({
                id: level3Cat.id,
                name: level3Cat.name,
                handle: level3Cat.handle,
                parent_category_id: level3Cat.parent_category_id,
                parent_name: level2Cat.name,
                children: [],
                level: 3
              }))
            
            return {
              id: level2Cat.id,
              name: level2Cat.name,
              handle: level2Cat.handle,
              parent_category_id: level2Cat.parent_category_id,
              parent_name: rootCat.name,
              children: level3Children,
              level: 2
            }
          })
        
        tree.push({
          id: rootCat.id,
          name: rootCat.name,
          handle: rootCat.handle,
          parent_category_id: null,
          parent_name: null,
          children: level2Children,
          level: 1
        })
      })
      
      return tree
    }

    const categoryTree = buildTree(categoriesWithHierarchy)
    
    // Debug: log tree structure
    console.log(`Built tree with ${categoryTree.length} root categories`)
    if (categoryTree.length > 0) {
      console.log(`First root category:`, JSON.stringify({
        id: categoryTree[0].id,
        name: categoryTree[0].name,
        handle: categoryTree[0].handle,
        childrenCount: categoryTree[0].children?.length || 0
      }))
    }

    res.status(200).json({
      success: true,
      message: 'Seeding completed successfully',
      data: {
        categoriesCount: results.categories.length,
        productTypesCount: results.productTypes.length,
        categories: categoriesWithHierarchy,
        categoryTree: categoryTree || [],
        productTypes: results.productTypes.map((pt: any) => ({
          id: pt.id,
          value: pt.value
        }))
      }
    })
  } catch (error: any) {
    console.error('[Seed Categories] Error:', error)

    throw new MedusaError(
      MedusaError.Types.INVALID_DATA,
      error.message || 'Failed to seed categories and product types'
    )
  }
}

