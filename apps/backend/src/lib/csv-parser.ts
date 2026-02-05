/**
 * CSV Parser for Warehouse Brands Inventory
 *
 * Handles Parent/Child product structure from CSV
 *
 * Features:
 * - Case-insensitive column name matching
 * - Automatic column name normalization
 * - Parent/Child relationship handling
 */

import type { Logger } from '@medusajs/types'

/**
 * Normalize a column name for case-insensitive matching
 * - Trims whitespace
 * - Converts to lowercase
 * - Replaces all whitespace (spaces, tabs, newlines) with single space
 * - Removes multiple consecutive spaces
 */
function normalizeColumnName(name: string): string {
  return name
    .trim()
    .toLowerCase()
    .replace(/\s+/g, ' ') // Replace all whitespace (including newlines, tabs, multiple spaces) with single space
    .trim() // Trim again in case there were leading/trailing spaces after normalization
}

/**
 * Create a case-insensitive column mapping
 * Maps normalized column names to their original names in the CSV
 */
export function createColumnMapping(row: any): Map<string, string> {
  const mapping = new Map<string, string>()
  for (const key of Object.keys(row)) {
    mapping.set(normalizeColumnName(key), key)
  }
  return mapping
}

/**
 * Normalize CSV row to use standard column names (case-insensitive)
 * This ensures column names match our CSVColumn constants regardless of casing in the CSV
 */
export function normalizeCSVRow(row: any): CSVRow {
  const normalized: any = {}
  const columnMapping = createColumnMapping(row)

  // Map each expected column to its value from the CSV
  for (const expectedColumnName of Object.values(CSVColumn)) {
    const normalizedExpected = normalizeColumnName(expectedColumnName)
    const actualColumnName = columnMapping.get(normalizedExpected)

    if (actualColumnName) {
      normalized[expectedColumnName] = row[actualColumnName]
    } else {
      normalized[expectedColumnName] = ''
    }
  }

  // Also preserve any additional columns that weren't in our constants
  for (const [actualColumn, value] of Object.entries(row)) {
    const normalizedActual = normalizeColumnName(actualColumn)
    // Check if this column is already mapped
    let alreadyMapped = false
    for (const expectedColumnName of Object.values(CSVColumn)) {
      if (normalizeColumnName(expectedColumnName) === normalizedActual) {
        alreadyMapped = true
        break
      }
    }

    if (!alreadyMapped) {
      normalized[actualColumn] = value
    }
  }

  return normalized as CSVRow
}

/**
 * Parentage level constants
 */
export const ParentageLevel = {
  PARENT: 'Parent',
  CHILD: 'Child',
  NONE: ''
} as const

export type ParentageLevelType = typeof ParentageLevel[keyof typeof ParentageLevel]

/**
 * Check if a parentage level value matches a constant (case-insensitive)
 */
export function isParentageLevel(value: string, level: ParentageLevelType): boolean {
  if (!value) return level === ParentageLevel.NONE
  return normalizeColumnName(value) === normalizeColumnName(level)
}

/**
 * Product status constants
 */
export const ProductStatus = {
  ACTIVE: 'active',
  INACTIVE: 'inactive'
} as const

export type ProductStatusType = typeof ProductStatus[keyof typeof ProductStatus]

export const ProductListingAction = {
  CREATE: 'Create',
  EDIT: 'Edit',
  DELETE: 'Delete',
  IGNORE: 'Ignore'
} as const

export type ProductListingActionType = typeof ProductListingAction[keyof typeof ProductListingAction]

/**
 * Check if a listing action value matches a constant (case-insensitive)
 * Supports partial matches like "Edit (Partial Update)" matching "Edit"
 */
export function isListingAction(value: string, action: ProductListingActionType): boolean {
  if (!value || !value.trim()) return action === ProductListingAction.CREATE // Default to CREATE
  const normalizedValue = normalizeColumnName(value)
  const normalizedAction = normalizeColumnName(action)
  // Check if the value starts with the action (handles "Edit (Partial Update)" matching "Edit")
  return normalizedValue === normalizedAction || normalizedValue.startsWith(normalizedAction + ' ')
}

/**
 * Base variant attributes
 * These are used to parse the Variation Theme Name field
 * Example: "Size/Colour/Units per Product" splits to ["Size", "Colour", "Units per Product"]
 */
export const ProductVariationTheme = {
  COLOUR: 'Colour',
  SIZE: 'Size',
  STYLE: 'Style',
  MATERIAL: 'Material',
  EDGE: 'Edge',
  SHAPE: 'Shape',
  FINISH: 'Finish',
  UNITS_PER_PRODUCT: 'Units per Product',
} as const

export type ProductVariationThemeType = typeof ProductVariationTheme[keyof typeof ProductVariationTheme]

/**
 * Core CSV columns - essential product/variant data
 */
export const CSVCoreColumn = {
  // Core fields
  STATUS: 'Status',
  LISTING_ACTION: 'Listing Action',
  PRODUCT_NAME: 'Product Name',
  SKU: 'SKU',
  PRODUCT_TYPE: 'Product Type',
  PRODUCT_DESCRIPTION: 'Product Description',
  BULLET_POINTS: 'Bullet Points',

  // Pricing & Quantity
  ORIGINAL_TRADE_PRICE: 'Original Trade Price (inc VAT)',
  TRADE_SELL_PRICE: 'Trade Sell Price (inc VAT)',
  ORIGINAL_CONSUMER_PRICE: 'Original Consumer Price (inc VAT)',
  CONSUMER_SELL_PRICE: 'Consumer Sell Price (inc VAT)',
  VAT_PERCENT: 'VAT %',
  QTY_AVAILABLE: 'Qty Available',

  // Parentage
  PARENTAGE_LEVEL: 'Parentage Level',
  PARENT_SKU: 'Parent SKU',
  VARIATION_THEME_NAME: 'Variation Theme Name',

  // Images
  MAIN_IMAGE_URL: 'Main Image URL',
  IMAGE_2: 'Image 2',
  IMAGE_3: 'Image 3',
  IMAGE_4: 'Image 4',
  IMAGE_5: 'Image 5',
  IMAGE_6: 'Image 6',
  IMAGE_7: 'Image 7',
  IMAGE_8: 'Image 8',
  IMAGE_9: 'Image 9',
} as const

/**
 * Extended attribute columns - can be either OPTIONS or ATTRIBUTES depending on context
 *
 * DYNAMIC BEHAVIOR:
 * - If a column is listed in the "Variation Theme Name" field (parsed by parseVariationTheme),
 *   it becomes an OPTION (variant differentiator, e.g., Color: Red, Size: Large)
 * - If a column is NOT in the variation theme, it becomes an ATTRIBUTE
 *   (common product property shared across all variants)
 *
 * Example: If Variation Theme Name = "Size/Colour", then:
 *   - Size and Colour become OPTIONS (each variant has different values)
 *   - Material, Brand Name, etc. become ATTRIBUTES (same for all variants)
 *
 * This allows any attribute to become an option in the future without code changes -
 * just update the Variation Theme Name in the CSV.
 */
export const CSVExtendedAttributeColumn = {
  // Variant-capable attributes (commonly used as options via ProductVariationTheme)
  COLOUR: 'Colour',
  SIZE: 'Size',
  STYLE: 'Style',
  MATERIAL: 'Material',
  EDGE: 'Edge',
  SHAPE: 'Shape',
  FINISH: 'Finish',
  UNITS_PER_PRODUCT: 'Units per Product',

  // Brand
  BRAND_NAME: 'Brand Name',
  MANUFACTURER: 'Manufacturer',

  // Product Identifiers
  PRODUCT_ID: 'Product ID',
  PRODUCT_ID_TYPE: 'Product ID Type',
  PART_NUMBER: 'Part Number',

  // Features & Components
  INCLUDED_COMPONENTS: 'Included Components',
  SPECIAL_FEATURES_1: 'Special Features_1',
  SPECIAL_FEATURES_2: 'Special Features_2',
  SPECIAL_FEATURES_3: 'Special Features_3',
  SPECIAL_FEATURES_4: 'Special Features_4',
  SPECIAL_FEATURES_5: 'Special Features_5',

  // Units
  UNIT_MEASUREMENT: 'Unit Measurement',

  // Product Dimensions
  PRODUCT_LENGTH_RANGE: 'Product Length Range',
  PRODUCT_LENGTH: 'Product Length',
  PRODUCT_LENGTH_UNIT: 'Product Length Unit',
  PRODUCT_WIDTH_RANGE: 'Product Width Range',
  PRODUCT_WIDTH: 'Product Width',
  PRODUCT_WIDTH_UNIT: 'Product Width Unit',
  PRODUCT_THICKNESS: 'Product Thickness',
  PRODUCT_THICKNESS_UNIT: 'Product Thickness Unit',
  PRODUCT_HEIGHT: 'Product Height',
  PRODUCT_HEIGHT_UNIT: 'Product Height Unit',

  // Product Weight
  PRODUCT_WEIGHT: 'Product Weight',
  PRODUCT_WEIGHT_UNIT: 'Product Weight Unit',

  // Package Dimensions
  PACKAGE_LENGTH: 'Package Length',
  PACKAGE_LENGTH_UNIT: 'Package Length Unit',
  PACKAGE_WIDTH: 'Package Width',
  PACKAGE_WIDTH_UNIT: 'Package Width Unit',
  PACKAGE_HEIGHT: 'Package Height',
  PACKAGE_HEIGHT_UNIT: 'Package Height Unit',
  PACKAGE_WEIGHT: 'Package Weight',
  PACKAGE_WEIGHT_UNIT: 'Package Weight Unit',

  // Additional Info
  COUNTRY_OF_ORIGIN: 'Country of origin',
  NO_OF_BOXES: 'No of Boxes',
  DELIVERY_TIME: 'Delivery Time',
  DELIVERY_TIME_UNIT: 'Delivery Time Unit',
  ITEM_FORM: 'Item form',
  INSTALLATION_TYPE: 'Installation Type',

  // Restrictions
  AGE_RESTRICTED: 'Age Restricted'
} as const

/**
 * Combined CSV column name constants (for backward compatibility)
 */
export const CSVColumn = {
  ...CSVCoreColumn,
  ...CSVExtendedAttributeColumn,
} as const

export interface CSVRow {
  // Status & Actions
  [CSVColumn.STATUS]: ProductStatusType
  [CSVColumn.LISTING_ACTION]: ProductListingActionType

  // Product Info
  [CSVColumn.PRODUCT_NAME]: string
  [CSVColumn.SKU]: string
  [CSVColumn.PRODUCT_TYPE]: string
  [CSVColumn.PRODUCT_DESCRIPTION]: string
  [CSVColumn.BULLET_POINTS]: string

  // Brand & Manufacturer
  [CSVColumn.BRAND_NAME]: string
  [CSVColumn.MANUFACTURER]: string

  // Product Identifiers
  [CSVColumn.PRODUCT_ID_TYPE]: string
  [CSVColumn.PRODUCT_ID]: string
  [CSVColumn.PART_NUMBER]: string

  // Pricing
  [CSVColumn.ORIGINAL_TRADE_PRICE]: string
  [CSVColumn.TRADE_SELL_PRICE]: string
  [CSVColumn.ORIGINAL_CONSUMER_PRICE]: string
  [CSVColumn.CONSUMER_SELL_PRICE]: string
  [CSVColumn.VAT_PERCENT]: string

  // Quantity
  [CSVColumn.QTY_AVAILABLE]: string

  // Units
  [CSVColumn.UNITS_PER_PRODUCT]: string
  [CSVColumn.UNIT_MEASUREMENT]: string
  [CSVColumn.UNITS_PER_PRODUCT]: string

  // Features & Components
  [CSVColumn.INCLUDED_COMPONENTS]: string
  [CSVColumn.SPECIAL_FEATURES_1]: string
  [CSVColumn.SPECIAL_FEATURES_2]: string
  [CSVColumn.SPECIAL_FEATURES_3]: string
  [CSVColumn.SPECIAL_FEATURES_4]: string
  [CSVColumn.SPECIAL_FEATURES_5]: string

  // Parentage
  [CSVColumn.PARENTAGE_LEVEL]: ParentageLevelType
  [CSVColumn.PARENT_SKU]: string
  [CSVColumn.VARIATION_THEME_NAME]: ProductVariationThemeType

  // Variant Info
  [CSVColumn.COLOUR]: string
  [CSVColumn.SIZE]: string
  [CSVColumn.STYLE]: string
  [CSVColumn.MATERIAL]: string
  [CSVColumn.EDGE]: string
  [CSVColumn.SHAPE]: string
  [CSVColumn.FINISH]: string

  // Images
  [CSVColumn.MAIN_IMAGE_URL]: string
  [CSVColumn.IMAGE_2]: string
  [CSVColumn.IMAGE_3]: string
  [CSVColumn.IMAGE_4]: string
  [CSVColumn.IMAGE_5]: string
  [CSVColumn.IMAGE_6]: string
  [CSVColumn.IMAGE_7]: string
  [CSVColumn.IMAGE_8]: string
  [CSVColumn.IMAGE_9]: string

  // Restrictions
  [CSVColumn.AGE_RESTRICTED]: string

  // Product Dimensions
  [CSVColumn.PRODUCT_LENGTH_RANGE]: string
  [CSVColumn.PRODUCT_LENGTH]: string
  [CSVColumn.PRODUCT_LENGTH_UNIT]: string
  [CSVColumn.PRODUCT_WIDTH_RANGE]: string
  [CSVColumn.PRODUCT_WIDTH]: string
  [CSVColumn.PRODUCT_WIDTH_UNIT]: string
  [CSVColumn.PRODUCT_THICKNESS]: string
  [CSVColumn.PRODUCT_THICKNESS_UNIT]: string
  [CSVColumn.PRODUCT_HEIGHT]: string
  [CSVColumn.PRODUCT_HEIGHT_UNIT]: string

  // Product Weight
  [CSVColumn.PRODUCT_WEIGHT]: string
  [CSVColumn.PRODUCT_WEIGHT_UNIT]: string

  // Package Dimensions
  [CSVColumn.PACKAGE_LENGTH]: string
  [CSVColumn.PACKAGE_LENGTH_UNIT]: string
  [CSVColumn.PACKAGE_WIDTH]: string
  [CSVColumn.PACKAGE_WIDTH_UNIT]: string
  [CSVColumn.PACKAGE_HEIGHT]: string
  [CSVColumn.PACKAGE_HEIGHT_UNIT]: string
  [CSVColumn.PACKAGE_WEIGHT]: string
  [CSVColumn.PACKAGE_WEIGHT_UNIT]: string

  // Additional Info
  [CSVColumn.COUNTRY_OF_ORIGIN]: string
  [CSVColumn.NO_OF_BOXES]: string
  [CSVColumn.DELIVERY_TIME]: string
  [CSVColumn.DELIVERY_TIME_UNIT]: string
  [CSVColumn.ITEM_FORM]: string
  [CSVColumn.INSTALLATION_TYPE]: string

  // Additional fields that might exist
  [key: string]: string
}

export interface ParentGroup {
  parentSKU: string
  parentRow: CSVRow
  childRows: CSVRow[]
}

/**
 * Group CSV rows by Parent SKU
 * One group = one product with variants
 * Rows without Parent SKU are treated as standalone products (single variant)
 */
export function groupByParentSKU(rows: CSVRow[], logger: Logger): ParentGroup[] {
  const groups = new Map<string, ParentGroup>()
  const parentRows = new Map<string, CSVRow>() // Store parent rows separately

  
  // First pass: collect all rows and identify parent rows
  for (const row of rows) {
    logger.debug('Parentage Level: ' + JSON.stringify(row[CSVColumn.PARENTAGE_LEVEL], null, 2))
    let parentSKU = row[CSVColumn.PARENT_SKU]

    // If no Parent SKU, treat as standalone product (use own SKU as parent)
    if (!parentSKU || parentSKU.trim() === '') {
      parentSKU = row[CSVColumn.SKU]
    }

    // Store parent rows separately (case-insensitive check)
    if (isParentageLevel(row[CSVColumn.PARENTAGE_LEVEL], ParentageLevel.PARENT)) {
      parentRows.set(parentSKU, row)
    }

    if (!groups.has(parentSKU)) {
      groups.set(parentSKU, {
        parentSKU,
        parentRow: null as any, // Will be set from parentRows map
        childRows: []
      })
    }

    const group = groups.get(parentSKU)!

    if (isParentageLevel(row[CSVColumn.PARENTAGE_LEVEL], ParentageLevel.CHILD)) {
      // This is a child variant
      group.childRows.push(row)
    } else if (isParentageLevel(row[CSVColumn.PARENTAGE_LEVEL], ParentageLevel.NONE)) {
      // No parentage level specified - treat as both parent and child
      if (!parentRows.has(parentSKU)) {
        parentRows.set(parentSKU, row)
      }
      group.childRows.push(row)
    }
  }
  
  // Second pass: assign parent rows to groups (works regardless of order in CSV)
  for (const [parentSKU, group] of groups.entries()) {
    if (parentRows.has(parentSKU)) {
      // Use the actual parent row
      group.parentRow = parentRows.get(parentSKU)!
      logger.debug(`[CSV Parser] ✓ Found parent row for ${parentSKU} (Product Type: "${group.parentRow[CSVColumn.PRODUCT_TYPE]}")`)
    } else if (group.childRows.length > 0) {
      // Fallback: use first child row as parent (shouldn't happen if CSV is correct)
      logger.warn(`[CSV Parser] ⚠️  No parent row found for ${parentSKU}, using first child row as parent`)
      group.parentRow = group.childRows[0]
    } else {
      logger.error(`[CSV Parser] ❌ No parent or child rows found for ${parentSKU}`)
    }
  }
  
  return Array.from(groups.values())
}

/**
 * Extract price from row (using Consumer Sell Price)
 */
export function extractPrice(row: CSVRow): number {
  const priceStr = row[CSVColumn.CONSUMER_SELL_PRICE] || '0'
  const price = parseFloat(priceStr.replace(/[^0-9.]/g, ''))
  return isNaN(price) ? 0 : price
}

/**
 * Extract quantity from row
 */
export function extractQuantity(row: CSVRow): number {
  const qtyStr = row[CSVColumn.QTY_AVAILABLE] || '0'
  const qty = parseInt(qtyStr.replace(/[^0-9]/g, ''))
  return isNaN(qty) ? 0 : qty
}

/**
 * Normalize image URL to ensure it's valid for Next.js Image component
 * - If relative path (doesn't start with http:// or https://), add leading slash
 * - If already absolute URL, return as-is
 */
function normalizeImageUrl(url: string): string {
  if (!url || !url.trim()) return url
  
  const trimmed = url.trim()
  
  // If it's already an absolute URL, return as-is
  if (trimmed.startsWith('http://') || trimmed.startsWith('https://')) {
    return trimmed
  }
  
  // If it's a relative path, ensure it starts with /
  if (!trimmed.startsWith('/')) {
    return '/' + trimmed
  }
  
  return trimmed
}

/**
 * Extract all images from row (Main + Image 2-9)
 */
export function extractImages(row: CSVRow): string[] {
  const images: string[] = []
  
  // Main image
  if (row[CSVColumn.MAIN_IMAGE_URL]) {
    const normalizedUrl = normalizeImageUrl(row[CSVColumn.MAIN_IMAGE_URL])
    if (normalizedUrl) {
      images.push(normalizedUrl)
    }
  }
  
  // Additional images (Image 2-9)
  const additionalImageColumns = [
    CSVColumn.IMAGE_2,
    CSVColumn.IMAGE_3,
    CSVColumn.IMAGE_4,
    CSVColumn.IMAGE_5,
    CSVColumn.IMAGE_6,
    CSVColumn.IMAGE_7,
    CSVColumn.IMAGE_8,
    CSVColumn.IMAGE_9
  ] as const
  for (const imgKey of additionalImageColumns) {
    if (row[imgKey]) {
      const normalizedUrl = normalizeImageUrl(row[imgKey])
      if (normalizedUrl) {
        images.push(normalizedUrl)
      }
    }
  }
  
  return images.filter(url => url && url.trim() !== '')
}

/**
 * Extract variant metadata from row
 */
export function extractVariantMetadata(row: CSVRow): Record<string, any> {
  const metadata: Record<string, any> = {
    child_sku: row[CSVColumn.SKU],
    qty_available: extractQuantity(row),
  }

  // Variant info
  if (row[CSVColumn.COLOUR]) metadata.colour = row[CSVColumn.COLOUR]
  if (row[CSVColumn.SIZE]) metadata.size = row[CSVColumn.SIZE]
  if (row[CSVColumn.STYLE]) metadata.style = row[CSVColumn.STYLE]
  if (row[CSVColumn.MATERIAL]) metadata.material = row[CSVColumn.MATERIAL]
  if (row[CSVColumn.EDGE]) metadata.edge = row[CSVColumn.EDGE]
  if (row[CSVColumn.SHAPE]) metadata.shape = row[CSVColumn.SHAPE]
  if (row[CSVColumn.FINISH]) metadata.finish = row[CSVColumn.FINISH]

  // Unit info
  if (row[CSVColumn.UNITS_PER_PRODUCT]) metadata.units_per_product = row[CSVColumn.UNITS_PER_PRODUCT]
  if (row[CSVColumn.UNIT_MEASUREMENT]) metadata.unit_measurement = row[CSVColumn.UNIT_MEASUREMENT]
  if (row[CSVColumn.UNITS_PER_PRODUCT]) metadata.packs_per_product = row[CSVColumn.UNITS_PER_PRODUCT]

  // Product Dimensions
  if (row[CSVColumn.PRODUCT_LENGTH_RANGE]) metadata.product_length_range = row[CSVColumn.PRODUCT_LENGTH_RANGE]
  if (row[CSVColumn.PRODUCT_LENGTH]) metadata.product_length = row[CSVColumn.PRODUCT_LENGTH]
  if (row[CSVColumn.PRODUCT_LENGTH_UNIT]) metadata.product_length_unit = row[CSVColumn.PRODUCT_LENGTH_UNIT]
  if (row[CSVColumn.PRODUCT_WIDTH_RANGE]) metadata.product_width_range = row[CSVColumn.PRODUCT_WIDTH_RANGE]
  if (row[CSVColumn.PRODUCT_WIDTH]) metadata.product_width = row[CSVColumn.PRODUCT_WIDTH]
  if (row[CSVColumn.PRODUCT_WIDTH_UNIT]) metadata.product_width_unit = row[CSVColumn.PRODUCT_WIDTH_UNIT]
  if (row[CSVColumn.PRODUCT_THICKNESS]) metadata.product_thickness = row[CSVColumn.PRODUCT_THICKNESS]
  if (row[CSVColumn.PRODUCT_THICKNESS_UNIT]) metadata.product_thickness_unit = row[CSVColumn.PRODUCT_THICKNESS_UNIT]
  if (row[CSVColumn.PRODUCT_HEIGHT]) metadata.product_height = row[CSVColumn.PRODUCT_HEIGHT]
  if (row[CSVColumn.PRODUCT_HEIGHT_UNIT]) metadata.product_height_unit = row[CSVColumn.PRODUCT_HEIGHT_UNIT]

  // Product Weight
  if (row[CSVColumn.PRODUCT_WEIGHT]) metadata.product_weight = row[CSVColumn.PRODUCT_WEIGHT]
  if (row[CSVColumn.PRODUCT_WEIGHT_UNIT]) metadata.product_weight_unit = row[CSVColumn.PRODUCT_WEIGHT_UNIT]

  // Package dimensions
  if (row[CSVColumn.PACKAGE_LENGTH]) metadata.package_length = row[CSVColumn.PACKAGE_LENGTH]
  if (row[CSVColumn.PACKAGE_LENGTH_UNIT]) metadata.package_length_unit = row[CSVColumn.PACKAGE_LENGTH_UNIT]
  if (row[CSVColumn.PACKAGE_WIDTH]) metadata.package_width = row[CSVColumn.PACKAGE_WIDTH]
  if (row[CSVColumn.PACKAGE_WIDTH_UNIT]) metadata.package_width_unit = row[CSVColumn.PACKAGE_WIDTH_UNIT]
  if (row[CSVColumn.PACKAGE_HEIGHT]) metadata.package_height = row[CSVColumn.PACKAGE_HEIGHT]
  if (row[CSVColumn.PACKAGE_HEIGHT_UNIT]) metadata.package_height_unit = row[CSVColumn.PACKAGE_HEIGHT_UNIT]
  if (row[CSVColumn.PACKAGE_WEIGHT]) metadata.package_weight = row[CSVColumn.PACKAGE_WEIGHT]
  if (row[CSVColumn.PACKAGE_WEIGHT_UNIT]) metadata.package_weight_unit = row[CSVColumn.PACKAGE_WEIGHT_UNIT]

  // Product identifiers
  if (row[CSVColumn.PART_NUMBER]) metadata.part_number = row[CSVColumn.PART_NUMBER]
  if (row[CSVColumn.PRODUCT_ID]) metadata.product_id = row[CSVColumn.PRODUCT_ID]
  if (row[CSVColumn.PRODUCT_ID_TYPE]) metadata.product_id_type = row[CSVColumn.PRODUCT_ID_TYPE]

  return metadata
}

/**
 * Extract product-level metadata from parent row
 */
export function extractProductMetadata(row: CSVRow, parentSKU: string, sellerId: string): Record<string, any> {
  const metadata: Record<string, any> = {
    parent_sku: parentSKU,
    product_type: row[CSVColumn.PRODUCT_TYPE],
    seller_id: sellerId,
    imported_at: new Date().toISOString(),
  }

  // Brand & Manufacturer
  if (row[CSVColumn.BRAND_NAME]) metadata.brand_name = row[CSVColumn.BRAND_NAME]
  if (row[CSVColumn.MANUFACTURER]) metadata.manufacturer = row[CSVColumn.MANUFACTURER]

  // Variation Theme (determines how to display variants)
  if (row[CSVColumn.VARIATION_THEME_NAME]) metadata.variation_theme = row[CSVColumn.VARIATION_THEME_NAME]

  // Unit info
  if (row[CSVColumn.UNITS_PER_PRODUCT]) metadata.units_per_product = row[CSVColumn.UNITS_PER_PRODUCT]
  if (row[CSVColumn.UNIT_MEASUREMENT]) metadata.unit_measurement = row[CSVColumn.UNIT_MEASUREMENT]
  if (row[CSVColumn.UNITS_PER_PRODUCT]) metadata.packs_per_product = row[CSVColumn.UNITS_PER_PRODUCT]

  // Bullet Points
  if (row[CSVColumn.BULLET_POINTS]) metadata.bullet_points = row[CSVColumn.BULLET_POINTS]

  // Features & Components
  if (row[CSVColumn.INCLUDED_COMPONENTS]) metadata.included_components = row[CSVColumn.INCLUDED_COMPONENTS]
  if (row[CSVColumn.SPECIAL_FEATURES_1]) metadata.special_features_1 = row[CSVColumn.SPECIAL_FEATURES_1]
  if (row[CSVColumn.SPECIAL_FEATURES_2]) metadata.special_features_2 = row[CSVColumn.SPECIAL_FEATURES_2]
  if (row[CSVColumn.SPECIAL_FEATURES_3]) metadata.special_features_3 = row[CSVColumn.SPECIAL_FEATURES_3]
  if (row[CSVColumn.SPECIAL_FEATURES_4]) metadata.special_features_4 = row[CSVColumn.SPECIAL_FEATURES_4]
  if (row[CSVColumn.SPECIAL_FEATURES_5]) metadata.special_features_5 = row[CSVColumn.SPECIAL_FEATURES_5]

  // Additional Info
  if (row[CSVColumn.COUNTRY_OF_ORIGIN]) metadata.country_of_origin = row[CSVColumn.COUNTRY_OF_ORIGIN]
  if (row[CSVColumn.NO_OF_BOXES]) metadata.no_of_boxes = row[CSVColumn.NO_OF_BOXES]
  if (row[CSVColumn.DELIVERY_TIME]) metadata.delivery_time = row[CSVColumn.DELIVERY_TIME]
  if (row[CSVColumn.DELIVERY_TIME_UNIT]) metadata.delivery_time_unit = row[CSVColumn.DELIVERY_TIME_UNIT]
  if (row[CSVColumn.ITEM_FORM]) metadata.item_form = row[CSVColumn.ITEM_FORM]
  if (row[CSVColumn.INSTALLATION_TYPE]) metadata.installation_type = row[CSVColumn.INSTALLATION_TYPE]

  // Restrictions
  if (row[CSVColumn.AGE_RESTRICTED]) metadata.age_restricted = row[CSVColumn.AGE_RESTRICTED]

  return metadata
}

/**
 * Extract all extended attribute columns from a row as key-value pairs
 * Collects all values regardless of whether they're empty (filtering happens later during attribute creation)
 *
 * Note: This extracts ALL extended attributes. The caller should filter out
 * columns that are being used as OPTIONS (via parseVariationTheme) if needed.
 */
export function extractAttributes(row: CSVRow): Record<string, string> {
  const attributes: Record<string, string> = {}

  // Iterate over all extended attribute columns and collect their values
  for (const columnName of Object.values(CSVExtendedAttributeColumn)) {
    attributes[columnName] = row[columnName] ?? ''
  }

  return attributes
}

/**
 * Validate that a parent group has required data
 */
export function validateParentGroup(group: ParentGroup, rowNumber: number): {
  valid: boolean
  errors: string[]
} {
  const errors: string[] = []

  if (!group.parentRow) {
    errors.push('No parent row found')
    // If no parent row, other checks will fail, so return early
    return {
      valid: false,
      errors
    }
  }

  const productSKU = group.parentRow[CSVColumn.SKU].trim()
  const productName = group.parentRow[CSVColumn.PRODUCT_NAME].trim()
  const productType = group.parentRow[CSVColumn.PRODUCT_TYPE].trim()

  if (productSKU === '' || productName === '' || productType === '') {
    errors.push(`Parent Row: ${rowNumber} - No product SKU, name, or type found`, `Product SKU: ${productSKU}`, `Product Name: ${productName}`, `Product Type: ${productType}`)
  }

  if (group.childRows.length === 0) {
    errors.push('No child variants found')
  }

  return {
    valid: errors.length === 0,
    errors
  }
}

