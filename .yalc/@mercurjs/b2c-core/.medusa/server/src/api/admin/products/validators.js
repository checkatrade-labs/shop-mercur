"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminGetAttributesParams = exports.VendorUpdateProductStatus = exports.VendorUpdateProduct = exports.UpdateProduct = exports.VendorCreateProduct = exports.CreateProduct = exports.UpdateProductVariant = exports.CreateProductVariant = exports.UpdateProductOption = exports.VendorAssignBrandName = exports.CreateProductOption = exports.VendorGetProductParams = void 0;
const zod_1 = require("zod");
const validators_1 = require("@medusajs/medusa/api/admin/products/validators");
const validators_2 = require("@medusajs/medusa/api/utils/validators");
const utils_1 = require("../../../shared/infra/http/utils");
exports.VendorGetProductParams = validators_1.AdminGetProductsParams;
exports.CreateProductOption = zod_1.z.object({
    title: zod_1.z.string(),
    values: zod_1.z.array(zod_1.z.string())
});
exports.VendorAssignBrandName = zod_1.z.object({
    brand_name: zod_1.z.string()
});
exports.UpdateProductOption = zod_1.z.object({
    id: zod_1.z.string().optional(),
    title: zod_1.z.string().optional(),
    values: zod_1.z.array(zod_1.z.string()).optional()
});
/* Variant Prices */
/**
 * @schema CreateVariantPrice
 * type: object
 * required:
 *   - currency_code
 *   - amount
 * properties:
 *   currency_code:
 *     type: string
 *     description: The currency code of the price.
 *   amount:
 *     type: number
 *     description: The amount of the price.
 *   min_quantity:
 *     type: number
 *     nullable: true
 *     description: The minimum quantity required to get this price.
 *   max_quantity:
 *     type: number
 *     nullable: true
 *     description: The maximum quantity allowed to get this price.
 *   rules:
 *     type: object
 *     description: Additional rules that apply to the price.
 *     additionalProperties:
 *       type: string
 */
const CreateVariantPrice = zod_1.z.object({
    currency_code: zod_1.z.string(),
    amount: zod_1.z.number(),
    min_quantity: zod_1.z.number().nullish(),
    max_quantity: zod_1.z.number().nullish(),
    rules: zod_1.z.record(zod_1.z.string(), zod_1.z.string()).optional()
});
/**
 * @schema UpdateVariantPrice
 * type: object
 * properties:
 *   id:
 *     type: string
 *     description: The ID of the price to update.
 *   currency_code:
 *     type: string
 *     description: The currency code of the price.
 *   amount:
 *     type: number
 *     description: The amount of the price.
 *   min_quantity:
 *     type: number
 *     nullable: true
 *     description: The minimum quantity required to get this price.
 *   max_quantity:
 *     type: number
 *     nullable: true
 *     description: The maximum quantity allowed to get this price.
 *   rules:
 *     type: object
 *     description: Additional rules that apply to the price.
 *     additionalProperties:
 *       type: string
 */
const UpdateVariantPrice = zod_1.z.object({
    id: zod_1.z.string().optional(),
    currency_code: zod_1.z.string().optional(),
    amount: zod_1.z.number().optional(),
    min_quantity: zod_1.z.number().nullish(),
    max_quantity: zod_1.z.number().nullish(),
    rules: zod_1.z.record(zod_1.z.string(), zod_1.z.string()).optional()
});
exports.CreateProductVariant = zod_1.z
    .object({
    title: zod_1.z.string(),
    sku: zod_1.z.string().optional(),
    ean: zod_1.z.string().optional(),
    upc: zod_1.z.string().optional(),
    barcode: zod_1.z.string().optional(),
    hs_code: zod_1.z.string().optional(),
    mid_code: zod_1.z.string().optional(),
    allow_backorder: zod_1.z.literal(false).optional().default(false),
    manage_inventory: zod_1.z.literal(true).optional().default(true),
    variant_rank: zod_1.z.number().optional(),
    weight: zod_1.z.number().optional(),
    length: zod_1.z.number().optional(),
    height: zod_1.z.number().optional(),
    width: zod_1.z.number().optional(),
    origin_country: zod_1.z.string().optional(),
    material: zod_1.z.string().optional(),
    metadata: zod_1.z.record(zod_1.z.unknown()).optional(),
    prices: zod_1.z.array(CreateVariantPrice),
    options: zod_1.z.record(zod_1.z.string()).optional(),
    inventory_items: zod_1.z
        .array(zod_1.z.object({
        inventory_item_id: zod_1.z.string(),
        required_quantity: zod_1.z.number()
    }))
        .optional()
})
    .strict();
exports.UpdateProductVariant = zod_1.z
    .object({
    id: zod_1.z.string().optional(),
    title: zod_1.z.string().optional(),
    prices: zod_1.z.array(UpdateVariantPrice).optional(),
    sku: zod_1.z.string().nullish(),
    ean: zod_1.z.string().nullish(),
    upc: zod_1.z.string().nullish(),
    barcode: zod_1.z.string().nullish(),
    hs_code: zod_1.z.string().nullish(),
    mid_code: zod_1.z.string().nullish(),
    allow_backorder: zod_1.z.boolean().optional(),
    manage_inventory: zod_1.z.boolean().optional(),
    variant_rank: zod_1.z.number().optional(),
    weight: zod_1.z.number().nullish(),
    length: zod_1.z.number().nullish(),
    height: zod_1.z.number().nullish(),
    width: zod_1.z.number().nullish(),
    origin_country: zod_1.z.string().nullish(),
    material: zod_1.z.string().nullish(),
    metadata: zod_1.z.record(zod_1.z.unknown()).nullish(),
    options: zod_1.z.record(zod_1.z.string()).optional()
})
    .strict();
exports.CreateProduct = zod_1.z
    .object({
    title: zod_1.z.string(),
    subtitle: zod_1.z.string().optional(),
    description: zod_1.z.string().optional(),
    is_giftcard: zod_1.z.boolean().optional().default(false),
    discountable: zod_1.z.boolean().optional().default(true),
    images: zod_1.z.array(zod_1.z.object({ url: zod_1.z.string() })).optional(),
    thumbnail: zod_1.z.string().optional(),
    handle: zod_1.z.string().optional(),
    status: zod_1.z.enum(['draft', 'proposed']).optional().default('draft'),
    external_id: zod_1.z.string().optional(),
    type_id: zod_1.z.string().optional(),
    collection_id: zod_1.z.string().optional(),
    categories: zod_1.z.array(utils_1.IdAssociation).max(1).optional(),
    tags: zod_1.z.array(utils_1.IdAssociation).optional(),
    options: zod_1.z.array(exports.CreateProductOption).optional(),
    variants: zod_1.z.array(exports.CreateProductVariant).optional(),
    weight: zod_1.z.number().optional(),
    length: zod_1.z.number().optional(),
    height: zod_1.z.number().optional(),
    width: zod_1.z.number().optional(),
    hs_code: zod_1.z.string().optional(),
    mid_code: zod_1.z.string().optional(),
    origin_country: zod_1.z.string().optional(),
    material: zod_1.z.string().optional(),
    metadata: zod_1.z.record(zod_1.z.unknown()).optional(),
    sales_channels: zod_1.z.array(zod_1.z.object({ id: zod_1.z.string() })).optional(),
    brand_name: zod_1.z.string().optional()
})
    .strict();
/**
 * @schema VendorCreateProduct
 * type: object
 * allOf:
 *   - $ref: "#/components/schemas/CreateProduct"
 *   - type: object
 *     properties:
 *      additional_data:
 *        type: object
 *        description: Additional data to use in products hooks.
 *        additionalProperties: true
 *
 */
exports.VendorCreateProduct = (0, validators_2.WithAdditionalData)(exports.CreateProduct);
exports.UpdateProduct = zod_1.z
    .object({
    title: zod_1.z.string().optional(),
    discountable: zod_1.z.boolean().optional(),
    is_giftcard: zod_1.z.boolean().optional(),
    options: zod_1.z.array(exports.UpdateProductOption).optional(),
    variants: zod_1.z.array(exports.UpdateProductVariant).optional(),
    subtitle: zod_1.z.string().nullish(),
    description: zod_1.z.string().nullish(),
    images: zod_1.z.array(zod_1.z.object({ url: zod_1.z.string() })).optional(),
    thumbnail: zod_1.z.string().nullish(),
    handle: zod_1.z.string().nullish(),
    type_id: zod_1.z.string().nullish(),
    external_id: zod_1.z.string().nullish(),
    collection_id: zod_1.z.string().nullish(),
    categories: zod_1.z.array(utils_1.IdAssociation).max(1).optional(),
    tags: zod_1.z.array(utils_1.IdAssociation).optional(),
    weight: zod_1.z.number().nullish(),
    length: zod_1.z.number().nullish(),
    height: zod_1.z.number().nullish(),
    width: zod_1.z.number().nullish(),
    hs_code: zod_1.z.string().nullish(),
    mid_code: zod_1.z.string().nullish(),
    origin_country: zod_1.z.string().nullish(),
    material: zod_1.z.string().nullish(),
    metadata: zod_1.z.record(zod_1.z.unknown()).nullish(),
    sales_channels: zod_1.z.array(zod_1.z.object({ id: zod_1.z.string() })).optional()
})
    .strict();
/**
 * @schema VendorUpdateProduct
 * type: object
 * allOf:
 *   - $ref: "#/components/schemas/UpdateProduct"
 *   - type: object
 *     properties:
 *      additional_data:
 *        type: object
 *        description: Additional data to use in products hooks.
 *        additionalProperties: true
 *
 */
exports.VendorUpdateProduct = (0, validators_2.WithAdditionalData)(exports.UpdateProduct);
exports.VendorUpdateProductStatus = zod_1.z.object({
    status: zod_1.z.enum(['draft', 'proposed', 'published'])
});
exports.AdminGetAttributesParams = (0, validators_2.createFindParams)({});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsaWRhdG9ycy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hcGkvYWRtaW4vcHJvZHVjdHMvdmFsaWRhdG9ycy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSw2QkFBdUI7QUFHdkIsK0VBQXVGO0FBQ3ZGLHNFQUc4QztBQUU5Qyw0REFBZ0U7QUFHbkQsUUFBQSxzQkFBc0IsR0FBRyxtQ0FBc0IsQ0FBQTtBQXFCL0MsUUFBQSxtQkFBbUIsR0FBRyxPQUFDLENBQUMsTUFBTSxDQUFDO0lBQzFDLEtBQUssRUFBRSxPQUFDLENBQUMsTUFBTSxFQUFFO0lBQ2pCLE1BQU0sRUFBRSxPQUFDLENBQUMsS0FBSyxDQUFDLE9BQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQztDQUM1QixDQUFDLENBQUE7QUFhVyxRQUFBLHFCQUFxQixHQUFHLE9BQUMsQ0FBQyxNQUFNLENBQUM7SUFDNUMsVUFBVSxFQUFFLE9BQUMsQ0FBQyxNQUFNLEVBQUU7Q0FDdkIsQ0FBQyxDQUFBO0FBbUJXLFFBQUEsbUJBQW1CLEdBQUcsT0FBQyxDQUFDLE1BQU0sQ0FBQztJQUMxQyxFQUFFLEVBQUUsT0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDLFFBQVEsRUFBRTtJQUN6QixLQUFLLEVBQUUsT0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDLFFBQVEsRUFBRTtJQUM1QixNQUFNLEVBQUUsT0FBQyxDQUFDLEtBQUssQ0FBQyxPQUFDLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQyxRQUFRLEVBQUU7Q0FDdkMsQ0FBQyxDQUFBO0FBRUYsb0JBQW9CO0FBRXBCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQTBCRztBQUNILE1BQU0sa0JBQWtCLEdBQUcsT0FBQyxDQUFDLE1BQU0sQ0FBQztJQUNsQyxhQUFhLEVBQUUsT0FBQyxDQUFDLE1BQU0sRUFBRTtJQUN6QixNQUFNLEVBQUUsT0FBQyxDQUFDLE1BQU0sRUFBRTtJQUNsQixZQUFZLEVBQUUs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