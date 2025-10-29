import { z } from "zod";
import { AdditionalData } from "@medusajs/framework/types";
export type VendorGetProductParamsType = z.infer<typeof VendorGetProductParams>;
export declare const VendorGetProductParams: z.ZodEffects<z.ZodObject<{
    [x: string]: any;
    [x: number]: any;
    [x: symbol]: any;
    sales_channel_id: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodArray<z.ZodString, "many">]>>;
    q: z.ZodOptional<z.ZodString>;
    id: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodArray<z.ZodString, "many">]>>;
    title: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodArray<z.ZodString, "many">]>>;
    handle: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodArray<z.ZodString, "many">]>>;
    is_giftcard: z.ZodOptional<z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodBoolean, z.ZodString]>, string | boolean, string | boolean>, boolean, string | boolean>>;
    category_id: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodArray<z.ZodString, "many">]>>;
    external_id: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodArray<z.ZodString, "many">]>>;
    collection_id: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodArray<z.ZodString, "many">]>>;
    tag_id: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodArray<z.ZodString, "many">]>>;
    type_id: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodArray<z.ZodString, "many">]>>;
    created_at: z.ZodOptional<z.ZodUnion<[any, z.ZodObject<{
        $eq: any;
        $ne: any;
        $in: any;
        $nin: any;
        $like: any;
        $ilike: any;
        $re: any;
        $contains: any;
        $gt: any;
        $gte: any;
        $lt: any;
        $lte: any;
    }, "strip", z.ZodTypeAny, {
        $eq?: any;
        $ne?: any;
        $in?: any;
        $nin?: any;
        $like?: any;
        $ilike?: any;
        $re?: any;
        $contains?: any;
        $gt?: any;
        $gte?: any;
        $lt?: any;
        $lte?: any;
    }, {
        $eq?: any;
        $ne?: any;
        $in?: any;
        $nin?: any;
        $like?: any;
        $ilike?: any;
        $re?: any;
        $contains?: any;
        $gt?: any;
        $gte?: any;
        $lt?: any;
        $lte?: any;
    }>]>>;
    updated_at: z.ZodOptional<z.ZodUnion<[any, z.ZodObject<{
        $eq: any;
        $ne: any;
        $in: any;
        $nin: any;
        $like: any;
        $ilike: any;
        $re: any;
        $contains: any;
        $gt: any;
        $gte: any;
        $lt: any;
        $lte: any;
    }, "strip", z.ZodTypeAny, {
        $eq?: any;
        $ne?: any;
        $in?: any;
        $nin?: any;
        $like?: any;
        $ilike
        /**
         * @schema CreateProduct
         * type: object
         * required:
         *   - title
         * properties:
         *   title:
         *     type: string
         *     description: The title of the product.
         *   subtitle:
         *     type: string
         *     description: The subtitle of the product.
         *   description:
         *     type: string
         *     description: The description of the product.
         *   is_giftcard:
         *     type: boolean
         *     description: Whether the product is a gift card.
         *     default: false
         *   discountable:
         *     type: boolean
         *     description: Whether the product can be discounted.
         *     default: true
         *   images:
         *     type: array
         *     description: Images of the product.
         *     items:
         *       type: object
         *       required:
         *         - url
         *       properties:
         *         url:
         *           type: string
         *   thumbnail:
         *     type: string
         *     description: The thumbnail of the product.
         *   handle:
         *     type: string
         *     description: A unique handle to identify the product.
         *   status:
         *     type: string
         *     enum: [draft, proposed]
         *     description: The status of the product.
         *     default: draft
         *   external_id:
         *     type: string
         *     description: The external ID of the product.
         *   type_id:
         *     type: string
         *     description: The ID of the product type.
         *   collection_id:
         *     type: string
         *     description: The ID of the collection the product belongs to.
         *   categories:
         *     type: array
         *     description: Categories the product belongs to.
         *     items:
         *       type: object
         *       required:
         *         - id
         *       properties:
         *         id:
         *           type: string
         *   tags:
         *     type: array
         *     description: Tags associated with the product.
         *     items:
         *       type: object
         *       required:
         *         - id
         *       properties:
         *         id:
         *           type: string
         *   options:
         *     type: array
         *     description: Product options.
         *     items:
         *       $ref: "#/components/schemas/CreateProductOption"
         *   variants:
         *     type: array
         *     description: Product variants.
         *     items:
         *       $ref: "#/components/schemas/CreateProductVariant"
         *   weight:
         *     type: number
         *     description: The weight of the product.
         *   length:
         *     type: number
         *     description: The length of the product.
         *   height:
         *     type: number
         *     description: The height of the product.
         *   width:
         *     type: number
         *     description: The width of the product.
         *   hs_code:
         *     type: string
         *     description: The HS code of the product.
         *   mid_code:
         *     type: string
         *     description: The MID code of the product.
         *   origin_country:
         *     type: string
         *     description: The country of origin of the product.
         *   material:
         *     type: string
         *     description: The material composition of the product.
         *   metadata:
         *     type: object
         *     description: Additional metadata for the product.
         *   sales_channels:
         *     type: array
         *     description: Sales channels to associate the product with.
         *     items:
         *       type: object
         *       required:
         *         - id
         *       properties:
         *         id:
         *           type: string
         */
        ?: any;
        $re?: any;
        $contains?: any;
        $gt?: any;
        $gte?: any;
        $lt?: any;
        $lte?: any;
    }, {
        $eq?: any;
        $ne?: any;
        $in?: any;
        $nin?: any;
        $like?: any;
        $ilike?: any;
        $re?: any;
        $contains?: any;
        $gt?: any;
        $gte?: any;
        $lt?: any;
        $lte?: any;
    }>]>>;
    deleted_at: z.ZodOptional<z.ZodUnion<[any, z.ZodObject<{
        $eq: any;
        $ne: any;
        $in: any;
        $nin: any;
        $like: any;
        $ilike: any;
        $re: any;
        $contains: any;
        $gt: any;
        $gte: any;
        $lt: any;
        $lte: any;
    }, "strip", z.ZodTypeAny, {
        $eq?: any;
        $ne?: any;
        $in?: any;
        $nin?: any;
        $like?: any;
        $ilike?: any;
        $re?: any;
        $contains?: any;
        $gt?: any;
        $gte?: any;
        $lt?: any;
        $lte?: any;
    }, {
        $eq?: any;
        $ne?: any;
        $in?: any;
        $nin?: any;
        $like?: any;
        $ilike?: any;
        $re?: any;
        $contains?: any;
        $gt?: any;
        $gte?: any;
        $lt?: any;
        $lte?: any;
    }>]>>;
}, "strip", z.ZodTypeAny, {
    [x: string]: any;
    [x: number]: any;
    [x: symbol]: any;
    sales_channel_id?: string | string[] | undefined;
    q?: string | undefined;
    id?: string | string[] | undefined;
    title?: string | string[] | undefined;
    handle?: string | string[] | undefined;
    is_giftcard?: boolean | undefined;
    category_id?: string | string[] | undefined;
    external_id?: string | string[] | undefined;
    collection_id?: string | string[] | undefined;
    tag_id?: string | string[] | undefined;
    type_id?: string | string[] | undefined;
    created_at?: any;
    updated_at?: any;
    deleted_at?: any;
}, {
    [x: string]: any;
    [x: number]: any;
    [x: symbol]: any;
    sales_channel_id?: string | string[] | undefined;
    q?: string | undefined;
    id?: string | string[] | undefined;
    title?: string | string[] | undefined;
    handle?: string | string[] | undefined;
    is_giftcard?: string | boolean | undefined;
    category_id?: string | string[] | undefined;
    external_id?: string | string[] | undefined;
    collection_id?: string | string[] | undefined;
    tag_id?: string | string[] | undefined;
    type_id?: string | string[] | undefined;
    created_at?: any;
    updated_at?: any;
    deleted_at?: any;
}>, import("@medusajs/framework/types").FilterableProductProps, {
    [x: string]: any;
    [x: number]: any;
    [x: symbol]: any;
    sales_channel_id?: string | string[] | undefined;
    q?: string | undefined;
    id?: string | string[] | undefined;
    title?: string | string[] | undefined;
    handle?: string | string[] | undefined;
    is_giftcard?: string | boolean | undefined;
    category_id?: string | string[] | undefined;
    external_id?: string | string[] | undefined;
    collection_id?: string | string[] | undefined;
    tag_id?: string | string[] | undefined;
    type_id?: string | string[] | undefined;
    created_at?: any;
    updated_at?: any;
    deleted_at?: any;
}>;
/**
 * @schema CreateProductOption
 * type: object
 * required:
 *   - title
 *   - values
 * properties:
 *   title:
 *     type: string
 *     description: The title of the product option (e.g. "Size", "Color").
 *   values:
 *     type: array
 *     description: The values that the product option can take (e.g. ["Small", "Medium", "Large"]).
 *     items:
 *       type: string
 */
export type CreateProductOptionType = z.infer<typeof CreateProductOption>;
export declare const CreateProductOption: z.ZodObject<{
    title: z.ZodString;
    values: z.ZodArray<z.ZodString, "many">;
}, "strip", z.ZodTypeAny, {
    values: string[];
    title: string;
}, {
    values: string[];
    title: string;
}>;
/**
 * @schema UpdateProductOption
 * type: object
 * properties:
 *   id:
 *     type: string
 *     description: The ID of the option to update.
 *   title:
 *     type: string
 *     description: The title of the product option (e.g. "Size", "Color").
 *   values:
 *     type: array
 *     description: The values that the product option can take (e.g. ["Small", "Medium", "Large"]).
 *     items:
 *       type: string
 */
export type UpdateProductOptionType = z.infer<typeof UpdateProductOption>;
export declare const UpdateProductOption: z.ZodObject<{
    id: z.ZodOptional<z.ZodString>;
    title: z.ZodOptional<z.ZodString>;
    values: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
}, "strip", z.ZodTypeAny, {
    id?: string | undefined;
    title?: string | undefined;
    values?: string[] | undefined;
}, {
    id?: string | undefined;
    title?: string | undefined;
    values?: string[] | undefined;
}>;
/**
 * @schema CreateProductVariant
 * type: object
 * properties:
 *   title:
 *     type: string
 *     description: The title of the variant.
 *   sku:
 *     type: string
 *     description: The unique SKU for the variant.
 *   ean:
 *     type: string
 *     description: The EAN number of the variant.
 *   upc:
 *     type: string
 *     description: The UPC number of the variant.
 *   barcode:
 *     type: string
 *     description: The barcode of the variant.
 *   hs_code:
 *     type: string
 *     description: The HS code of the variant.
 *   mid_code:
 *     type: string
 *     description: The MID code of the variant.
 *   allow_backorder:
 *     type: boolean
 *     description: Whether the variant can be backordered.
 *     default: false
 *   manage_inventory:
 *     type: boolean
 *     description: Whether Medusa should keep track of inventory for this variant.
 *     default: true
 *   variant_rank:
 *     type: number
 *     description: The rank of the variant.
 *   weight:
 *     type: number
 *     description: The weight of the variant.
 *   length:
 *     type: number
 *     description: The length of the variant.
 *   height:
 *     type: number
 *     description: The height of the variant.
 *   width:
 *     type: number
 *     description: The width of the variant.
 *   origin_country:
 *     type: string
 *     description: The country of origin of the variant.
 *   material:
 *     type: string
 *     description: The material composition of the variant.
 *   metadata:
 *     type: object
 *     description: Additional metadata for the variant.
 *   prices:
 *     type: array
 *     description: The prices of the variant.
 *     items:
 *       $ref: "#/components/schemas/CreateVariantPrice"
 *   options:
 *     type: object
 *     description: The options of the variant.
 *   inventory_items:
 *     type: array
 *     description: The inventory items of the variant.
 *     items:
 *       type: object
 *       properties:
 *         inventory_item_id:
 *           type: string
 *         required_quantity:
 *           type: number
 */
export type CreateProductVariantType = z.infer<typeof CreateProductVariant>;
export declare const CreateProductVariant: z.ZodObject<{
    title: z.ZodString;
    sku: z.ZodOptional<z.ZodString>;
    ean: z.ZodOptional<z.ZodString>;
    upc: z.ZodOptional<z.ZodString>;
    barcode: z.ZodOptional<z.ZodString>;
    hs_code: z.ZodOptional<z.ZodString>;
    mid_code: z.ZodOptional<z.ZodString>;
    allow_backorder: z.ZodDefault<z.ZodOptional<z.ZodLiteral<false>>>;
    manage_inventory: z.ZodDefault<z.ZodOptional<z.ZodLiteral<true>>>;
    variant_rank: z.ZodOptional<z.ZodNumber>;
    weight: z.ZodOptional<z.ZodNumber>;
    length: z.ZodOptional<z.ZodNumber>;
    height: z.ZodOptional<z.ZodNumber>;
    width: z.ZodOptional<z.ZodNumber>;
    origin_country: z.ZodOptional<z.ZodString>;
    material: z.ZodOptional<z.ZodString>;
    metadata: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
    prices: z.ZodArray<z.ZodObject<{
        currency_code: z.ZodString;
        amount: z.ZodNumber;
        min_quantity: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        max_quantity: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        rules: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
    }, "strip", z.ZodTypeAny, {
        currency_code: string;
        amount: number;
        min_quantity?: number | null | undefined;
        max_quantity?: number | null | undefined;
        rules?: Record<string, string> | undefined;
    }, {
        currency_code: string;
        amount: number;
        min_quantity?: number | null | undefined;
        max_quantity?: number | null | undefined;
        rules?: Record<string, string> | undefined;
    }>, "many">;
    options: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
    inventory_items: z.ZodOptional<z.ZodArray<z.ZodObject<{
        inventory_item_id: z.ZodString;
        required_quantity: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        inventory_item_id: string;
        required_quantity: number;
    }, {
        inventory_item_id: string;
        required_quantity: number;
    }>, "many">>;
}, "strict", z.ZodTypeAny, {
    title: string;
    prices: {
        currency_code: string;
        amount: number;
        min_quantity?: number | null | undefined;
        max_quantity?: number | null | undefined;
        rules?: Record<string, string> | undefined;
    }[];
    allow_backorder: false;
    manage_inventory: true;
    sku?: string | undefined;
    ean?: string | undefined;
    upc?: string | undefined;
    barcode?: string | undefined;
    hs_code?: string | undefined;
    mid_code?: string | undefined;
    variant_rank?: number | undefined;
    weight?: number | undefined;
    length?: number | undefined;
    height?: number | undefined;
    width?: number | undefined;
    origin_country?: string | undefined;
    material?: string | undefined;
    metadata?: Record<string, unknown> | undefined;
    options?: Record<string, string> | undefined;
    inventory_items?: {
        inventory_item_id: string;
        required_quantity: number;
    }[] | undefined;
}, {
    title: string;
    prices: {
        currency_code: string;
        amount: number;
        min_quantity?: number | null | undefined;
        max_quantity?: number | null | undefined;
        rules?: Record<string, string> | undefined;
    }[];
    sku?: string | undefined;
    ean?: string | undefined;
    upc?: string | undefined;
    barcode?: string | undefined;
    hs_code?: string | undefined;
    mid_code?: string | undefined;
    allow_backorder?: false | undefined;
    manage_inventory?: true | undefined;
    variant_rank?: number | undefined;
    weight?: number | undefined;
    length?: number | undefined;
    height?: number | undefined;
    width?: number | undefined;
    origin_country?: string | undefined;
    material?: string | undefined;
    metadata?: Record<string, unknown> | undefined;
    options?: Record<string, string> | undefined;
    inventory_items?: {
        inventory_item_id: string;
        required_quantity: number;
    }[] | undefined;
}>;
/**
 * @schema UpdateProductVariant
 * type: object
 * properties:
 *   id:
 *     type: string
 *     description: The ID of the variant to update.
 *   title:
 *     type: string
 *     description: The title of the variant.
 *   prices:
 *     type: array
 *     description: The prices of the variant.
 *     items:
 *       $ref: "#/components/schemas/UpdateVariantPrice"
 *   sku:
 *     type: string
 *     nullable: true
 *     description: The unique SKU for the variant.
 *   ean:
 *     type: string
 *     nullable: true
 *     description: The EAN number of the variant.
 *   upc:
 *     type: string
 *     nullable: true
 *     description: The UPC number of the variant.
 *   barcode:
 *     type: string
 *     nullable: true
 *     description: A generic GTIN field for the variant.
 *   hs_code:
 *     type: string
 *     nullable: true
 *     description: The Harmonized System code of the variant.
 *   mid_code:
 *     type: string
 *     nullable: true
 *     description: The Manufacturer Identification code of the variant.
 *   allow_backorder:
 *     type: boolean
 *     description: Whether the variant can be backordered.
 *   manage_inventory:
 *     type: boolean
 *     description: Whether Medusa should keep track of the inventory of this variant.
 *   variant_rank:
 *     type: number
 *     description: The rank of the variant when presented in a list of variants.
 *   weight:
 *     type: number
 *     nullable: true
 *     description: The weight of the variant.
 *   length:
 *     type: number
 *     nullable: true
 *     description: The length of the variant.
 *   height:
 *     type: number
 *     nullable: true
 *     description: The height of the variant.
 *   width:
 *     type: number
 *     nullable: true
 *     description: The width of the variant.
 *   origin_country:
 *     type: string
 *     nullable: true
 *     description: The country of origin of the variant.
 *   material:
 *     type: string
 *     nullable: true
 *     description: The material composition of the variant.
 *   metadata:
 *     type: object
 *     nullable: true
 *     description: An optional set of key-value pairs with additional information.
 *   options:
 *     type: object
 *     description: The options of the variant.
 *     additionalProperties:
 *       type: string
 */
export type UpdateProductVariantType = z.infer<typeof UpdateProductVariant>;
export declare const UpdateProductVariant: z.ZodObject<{
    id: z.ZodOptional<z.ZodString>;
    title: z.ZodOptional<z.ZodString>;
    prices: z.ZodOptional<z.ZodArray<z.ZodObject<{
        id: z.ZodOptional<z.ZodString>;
        currency_code: z.ZodOptional<z.ZodString>;
        amount: z.ZodOptional<z.ZodNumber>;
        min_quantity: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        max_quantity: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        rules: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
    }, "strip", z.ZodTypeAny, {
        id?: string | undefined;
        currency_code?: string | undefined;
        amount?: number | undefined;
        min_quantity?: number | null | undefined;
        max_quantity?: number | null | undefined;
        rules?: Record<string, string> | undefined;
    }, {
        id?: string | undefined;
        currency_code?: string | undefined;
        amount?: number | undefined;
        min_quantity?: number | null | undefined;
        max_quantity?: number | null | undefined;
        rules?: Record<string, string> | undefined;
    }>, "many">>;
    sku: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    ean: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    upc: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    barcode: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    hs_code: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    mid_code: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    allow_backorder: z.ZodOptional<z.ZodBoolean>;
    manage_inventory: z.ZodOptional<z.ZodBoolean>;
    variant_rank: z.ZodOptional<z.ZodNumber>;
    weight: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    length: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    height: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    width: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    origin_country: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    material: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    metadata: z.ZodOptional<z.ZodNullable<z.ZodRecord<z.ZodString, z.ZodUnknown>>>;
    options: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
}, "strict", z.ZodTypeAny, {
    id?: string | undefined;
    title?: string | undefined;
    prices?: {
        id?: string | undefined;
        currency_code?: string | undefined;
        amount?: number | undefined;
        min_quantity?: number | null | undefined;
        max_quantity?: number | null | undefined;
        rules?: Record<string, string> | undefined;
    }[] | undefined;
    sku?: string | null | undefined;
    ean?: string | null | undefined;
    upc?: string | null | undefined;
    barcode?: string | null | undefined;
    hs_code?: string | null | undefined;
    mid_code?: string | null | undefined;
    allow_backorder?: boolean | undefined;
    manage_inventory?: boolean | undefined;
    variant_rank?: number | undefined;
    weight?: number | null | undefined;
    length?: number | null | undefined;
    height?: number | null | undefined;
    width?: number | null | undefined;
    origin_country?: string | null | undefined;
    material?: string | null | undefined;
    metadata?: Record<string, unknown> | null | undefined;
    options?: Record<string, string> | undefined;
}, {
    id?: string | undefined;
    title?: string | undefined;
    prices?: {
        id?: string | undefined;
        currency_code?: string | undefined;
        amount?: number | undefined;
        min_quantity?: number | null | undefined;
        max_quantity?: number | null | undefined;
        rules?: Record<string, string> | undefined;
    }[] | undefined;
    sku?: string | null | undefined;
    ean?: string | null | undefined;
    upc?: string | null | undefined;
    barcode?: string | null | undefined;
    hs_code?: string | null | undefined;
    mid_code?: string | null | undefined;
    allow_backorder?: boolean | undefined;
    manage_inventory?: boolean | undefined;
    variant_rank?: number | undefined;
    weight?: number | null | undefined;
    length?: number | null | undefined;
    height?: number | null | undefined;
    width?: number | null | undefined;
    origin_country?: string | null | undefined;
    material?: string | null | undefined;
    metadata?: Record<string, unknown> | null | undefined;
    options?: Record<string, string> | undefined;
}>;
/**
 * @schema CreateProduct
 * type: object
 * required:
 *   - title
 * properties:
 *   title:
 *     type: string
 *     description: The title of the product.
 *   subtitle:
 *     type: string
 *     description: The subtitle of the product.
 *   description:
 *     type: string
 *     description: The description of the product.
 *   is_giftcard:
 *     type: boolean
 *     description: Whether the product is a gift card.
 *     default: false
 *   discountable:
 *     type: boolean
 *     description: Whether the product can be discounted.
 *     default: true
 *   images:
 *     type: array
 *     description: Images of the product.
 *     items:
 *       type: object
 *       required:
 *         - url
 *       properties:
 *         url:
 *           type: string
 *   thumbnail:
 *     type: string
 *     description: The thumbnail of the product.
 *   handle:
 *     type: string
 *     description: A unique handle to identify the product.
 *   status:
 *     type: string
 *     enum: [draft, proposed]
 *     description: The status of the product.
 *     default: draft
 *   external_id:
 *     type: string
 *     description: The external ID of the product.
 *   type_id:
 *     type: string
 *     description: The ID of the product type.
 *   collection_id:
 *     type: string
 *     description: The ID of the collection the product belongs to.
 *   categories:
 *     type: array
 *     description: Categories the product belongs to.
 *     items:
 *       type: object
 *       required:
 *         - id
 *       properties:
 *         id:
 *           type: string
 *   tags:
 *     type: array
 *     description: Tags associated with the product.
 *     items:
 *       type: object
 *       required:
 *         - id
 *       properties:
 *         id:
 *           type: string
 *   options:
 *     type: array
 *     description: Product options.
 *     items:
 *       $ref: "#/components/schemas/CreateProductOption"
 *   variants:
 *     type: array
 *     description: Product variants.
 *     items:
 *       $ref: "#/components/schemas/CreateProductVariant"
 *   weight:
 *     type: number
 *     description: The weight of the product.
 *   length:
 *     type: number
 *     description: The length of the product.
 *   height:
 *     type: number
 *     description: The height of the product.
 *   width:
 *     type: number
 *     description: The width of the product.
 *   hs_code:
 *     type: string
 *     description: The HS code of the product.
 *   mid_code:
 *     type: string
 *     description: The MID code of the product.
 *   origin_country:
 *     type: string
 *     description: The country of origin of the product.
 *   material:
 *     type: string
 *     description: The material composition of the product.
 *   metadata:
 *     type: object
 *     description: Additional metadata for the product.
 *   sales_channels:
 *     type: array
 *     description: Sales channels to associate the product with.
 *     items:
 *       type: object
 *       required:
 *         - id
 *       properties:
 *         id:
 *           type: string
 */
export type VendorCreateProductType = z.infer<typeof CreateProduct> & AdditionalData;
export declare const CreateProduct: z.ZodObject<{
    title: z.ZodString;
    subtitle: z.ZodOptional<z.ZodString>;
    description: z.ZodOptional<z.ZodString>;
    is_giftcard: z.ZodDefault<z.ZodOptional<z.ZodBoolean>>;
    discountable: z.ZodDefault<z.ZodOptional<z.ZodBoolean>>;
    images: z.ZodOptional<z.ZodArray<z.ZodObject<{
        url: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        url: string;
    }, {
        url: string;
    }>, "many">>;
    thumbnail: z.ZodOptional<z.ZodString>;
    handle: z.ZodOptional<z.ZodString>;
    status: z.ZodDefault<z.ZodOptional<z.ZodEnum<["draft", "proposed"]>>>;
    external_id: z.ZodOptional<z.ZodString>;
    type_id: z.ZodOptional<z.ZodString>;
    collection_id: z.ZodOptional<z.ZodString>;
    categories: z.ZodOptional<z.ZodArray<z.ZodObject<{
        id: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        id: string;
    }, {
        id: string;
    }>, "many">>;
    tags: z.ZodOptional<z.ZodArray<z.ZodObject<{
        id: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        id: string;
    }, {
        id: string;
    }>, "many">>;
    options: z.ZodOptional<z.ZodArray<z.ZodObject<{
        title: z.ZodString;
        values: z.ZodArray<z.ZodString, "many">;
    }, "strip", z.ZodTypeAny, {
        values: string[];
        title: string;
    }, {
        values: string[];
        title: string;
    }>, "many">>;
    variants: z.ZodOptional<z.ZodArray<z.ZodObject<{
        title: z.ZodString;
        sku: z.ZodOptional<z.ZodString>;
        ean: z.ZodOptional<z.ZodString>;
        upc: z.ZodOptional<z.ZodString>;
        barcode: z.ZodOptional<z.ZodString>;
        hs_code: z.ZodOptional<z.ZodString>;
        mid_code: z.ZodOptional<z.ZodString>;
        allow_backorder: z.ZodDefault<z.ZodOptional<z.ZodLiteral<false>>>;
        manage_inventory: z.ZodDefault<z.ZodOptional<z.ZodLiteral<true>>>;
        variant_rank: z.ZodOptional<z.ZodNumber>;
        weight: z.ZodOptional<z.ZodNumber>;
        length: z.ZodOptional<z.ZodNumber>;
        height: z.ZodOptional<z.ZodNumber>;
        width: z.ZodOptional<z.ZodNumber>;
        origin_country: z.ZodOptional<z.ZodString>;
        material: z.ZodOptional<z.ZodString>;
        metadata: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
        prices: z.ZodArray<z.ZodObject<{
            currency_code: z.ZodString;
            amount: z.ZodNumber;
            min_quantity: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
            max_quantity: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
            rules: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
        }, "strip", z.ZodTypeAny, {
            currency_code: string;
            amount: number;
            min_quantity?: number | null | undefined;
            max_quantity?: number | null | undefined;
            rules?: Record<string, string> | undefined;
        }, {
            currency_code: string;
            amount: number;
            min_quantity?: number | null | undefined;
            max_quantity?: number | null | undefined;
            rules?: Record<string, string> | undefined;
        }>, "many">;
        options: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
        inventory_items: z.ZodOptional<z.ZodArray<z.ZodObject<{
            inventory_item_id: z.ZodString;
            required_quantity: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
            inventory_item_id: string;
            required_quantity: number;
        }, {
            inventory_item_id: string;
            required_quantity: number;
        }>, "many">>;
    }, "strict", z.ZodTypeAny, {
        title: string;
        prices: {
            currency_code: string;
            amount: number;
            min_quantity?: number | null | undefined;
            max_quantity?: number | null | undefined;
            rules?: Record<string, string> | undefined;
        }[];
        allow_backorder: false;
        manage_inventory: true;
        sku?: string | undefined;
        ean?: string | undefined;
        upc?: string | undefined;
        barcode?: string | undefined;
        hs_code?: string | undefined;
        mid_code?: string | undefined;
        variant_rank?: number | undefined;
        weight?: number | undefined;
        length?: number | undefined;
        height?: number | undefined;
        width?: number | undefined;
        origin_country?: string | undefined;
        material?: string | undefined;
        metadata?: Record<string, unknown> | undefined;
        options?: Record<string, string> | undefined;
        inventory_items?: {
            inventory_item_id: string;
            required_quantity: number;
        }[] | undefined;
    }, {
        title: string;
        prices: {
            currency_code: string;
            amount: number;
            min_quantity?: number | null | undefined;
            max_quantity?: number | null | undefined;
            rules?: Record<string, string> | undefined;
        }[];
        sku?: string | undefined;
        ean?: string | undefined;
        upc?: string | undefined;
        barcode?: string | undefined;
        hs_code?: string | undefined;
        mid_code?: string | undefined;
        allow_backorder?: false | undefined;
        manage_inventory?: true | undefined;
        variant_rank?: number | undefined;
        weight?: number | undefined;
        length?: number | undefined;
        height?: number | undefined;
        width?: number | undefined;
        origin_country?: string | undefined;
        material?: string | undefined;
        metadata?: Record<string, unknown> | undefined;
        options?: Record<string, string> | undefined;
        inventory_items?: {
            inventory_item_id: string;
            required_quantity: number;
        }[] | undefined;
    }>, "many">>;
    weight: z.ZodOptional<z.ZodNumber>;
    length: z.ZodOptional<z.ZodNumber>;
    height: z.ZodOptional<z.ZodNumber>;
    width: z.ZodOptional<z.ZodNumber>;
    hs_code: z.ZodOptional<z.ZodString>;
    mid_code: z.ZodOptional<z.ZodString>;
    origin_country: z.ZodOptional<z.ZodString>;
    material: z.ZodOptional<z.ZodString>;
    metadata: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
    sales_channels: z.ZodOptional<z.ZodArray<z.ZodObject<{
        id: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        id: string;
    }, {
        id: string;
    }>, "many">>;
}, "strict", z.ZodTypeAny, {
    status: "draft" | "proposed";
    title: string;
    is_giftcard: boolean;
    discountable: boolean;
    subtitle?: string | undefined;
    description?: string | undefined;
    images?: {
        url: string;
    }[] | undefined;
    thumbnail?: string | undefined;
    handle?: string | undefined;
    external_id?: string | undefined;
    type_id?: string | undefined;
    collection_id?: string | undefined;
    categories?: {
        id: string;
    }[] | undefined;
    tags?: {
        id: string;
    }[] | undefined;
    options?: {
        values: string[];
        title: string;
    }[] | undefined;
    variants?: {
        title: string;
        prices: {
            currency_code: string;
            amount: number;
            min_quantity?: number | null | undefined;
            max_quantity?: number | null | undefined;
            rules?: Record<string, string> | undefined;
        }[];
        allow_backorder: false;
        manage_inventory: true;
        sku?: string | undefined;
        ean?: string | undefined;
        upc?: string | undefined;
        barcode?: string | undefined;
        hs_code?: string | undefined;
        mid_code?: string | undefined;
        variant_rank?: number | undefined;
        weight?: number | undefined;
        length?: number | undefined;
        height?: number | undefined;
        width?: number | undefined;
        origin_country?: string | undefined;
        material?: string | undefined;
        metadata?: Record<string, unknown> | undefined;
        options?: Record<string, string> | undefined;
        inventory_items?: {
            inventory_item_id: string;
            required_quantity: number;
        }[] | undefined;
    }[] | undefined;
    weight?: number | undefined;
    length?: number | undefined;
    height?: number | undefined;
    width?: number | undefined;
    hs_code?: string | undefined;
    mid_code?: string | undefined;
    origin_country?: string | undefined;
    material?: string | undefined;
    metadata?: Record<string, unknown> | undefined;
    sales_channels?: {
        id: string;
    }[] | undefined;
}, {
    title: string;
    subtitle?: string | undefined;
    description?: string | undefined;
    is_giftcard?: boolean | undefined;
    discountable?: boolean | undefined;
    images?: {
        url: string;
    }[] | undefined;
    thumbnail?: string | undefined;
    handle?: string | undefined;
    status?: "draft" | "proposed" | undefined;
    external_id?: string | undefined;
    type_id?: string | undefined;
    collection_id?: string | undefined;
    categories?: {
        id: string;
    }[] | undefined;
    tags?: {
        id: string;
    }[] | undefined;
    options?: {
        values: string[];
        title: string;
    }[] | undefined;
    variants?: {
        title: string;
        prices: {
            currency_code: string;
            amount: number;
            min_quantity?: number | null | undefined;
            max_quantity?: number | null | undefined;
            rules?: Record<string, string> | undefined;
        }[];
        sku?: string | undefined;
        ean?: string | undefined;
        upc?: string | undefined;
        barcode?: string | undefined;
        hs_code?: string | undefined;
        mid_code?: string | undefined;
        allow_backorder?: false | undefined;
        manage_inventory?: true | undefined;
        variant_rank?: number | undefined;
        weight?: number | undefined;
        length?: number | undefined;
        height?: number | undefined;
        width?: number | undefined;
        origin_country?: string | undefined;
        material?: string | undefined;
        metadata?: Record<string, unknown> | undefined;
        options?: Record<string, string> | undefined;
        inventory_items?: {
            inventory_item_id: string;
            required_quantity: number;
        }[] | undefined;
    }[] | undefined;
    weight?: number | undefined;
    length?: number | undefined;
    height?: number | undefined;
    width?: number | undefined;
    hs_code?: string | undefined;
    mid_code?: string | undefined;
    origin_country?: string | undefined;
    material?: string | undefined;
    metadata?: Record<string, unknown> | undefined;
    sales_channels?: {
        id: string;
    }[] | undefined;
}>;
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
export declare const VendorCreateProduct: (additionalDataValidator?: z.ZodOptional<z.ZodNullable<z.ZodObject<any, any>>>) => z.ZodObject<any, any, z.ZodTypeAny, {
    [x: string]: any;
}, {
    [x: string]: any;
}> | z.ZodEffects<any, any, any>;
/**
 * @schema UpdateProduct
 * type: object
 * properties:
 *   title:
 *     type: string
 *     description: The title of the product.
 *   discountable:
 *     type: boolean
 *     description: Whether the product can be discounted.
 *   is_giftcard:
 *     type: boolean
 *     description: Whether the product is a gift card.
 *   options:
 *     type: array
 *     description: The product options to update.
 *     items:
 *       $ref: "#/components/schemas/UpdateProductOption"
 *   variants:
 *     type: array
 *     description: The product variants to update.
 *     items:
 *       $ref: "#/components/schemas/UpdateProductVariant"
 *   subtitle:
 *     type: string
 *     nullable: true
 *     description: The subtitle of the product.
 *   description:
 *     type: string
 *     nullable: true
 *     description: The description of the product.
 *   images:
 *     type: array
 *     description: Images of the product.
 *     items:
 *       type: object
 *       properties:
 *         url:
 *           type: string
 *   thumbnail:
 *     type: string
 *     nullable: true
 *     description: The thumbnail of the product.
 *   handle:
 *     type: string
 *     nullable: true
 *     description: The handle of the product.
 *   type_id:
 *     type: string
 *     nullable: true
 *     description: The ID of the product type.
 *   external_id:
 *     type: string
 *     nullable: true
 *     description: The external ID of the product.
 *   collection_id:
 *     type: string
 *     nullable: true
 *     description: The ID of the collection the product belongs to.
 *   categories:
 *     type: array
 *     description: Product category IDs to associate with the product.
 *     items:
 *       type: object
 *       required:
 *         - id
 *       properties:
 *         id:
 *           type: string
 *   tags:
 *     type: array
 *     description: Product tag IDs to associate with the product.
 *     items:
 *       type: object
 *       required:
 *         - id
 *       properties:
 *         id:
 *           type: string
 *   weight:
 *     type: number
 *     nullable: true
 *     description: The weight of the product.
 *   length:
 *     type: number
 *     nullable: true
 *     description: The length of the product.
 *   height:
 *     type: number
 *     nullable: true
 *     description: The height of the product.
 *   width:
 *     type: number
 *     nullable: true
 *     description: The width of the product.
 *   hs_code:
 *     type: string
 *     nullable: true
 *     description: The HS code of the product.
 *   mid_code:
 *     type: string
 *     nullable: true
 *     description: The MID code of the product.
 *   origin_country:
 *     type: string
 *     nullable: true
 *     description: The country of origin of the product.
 *   material:
 *     type: string
 *     nullable: true
 *     description: The material composition of the product.
 *   metadata:
 *     type: object
 *     nullable: true
 *     description: Additional metadata for the product.
 *   sales_channels:
 *     type: array
 *     description: Sales channels to associate the product with.
 *     items:
 *       type: object
 *       required:
 *         - id
 *       properties:
 *         id:
 *           type: string
 */
export type VendorUpdateProductType = z.infer<typeof UpdateProduct> & AdditionalData;
export declare const UpdateProduct: z.ZodObject<{
    title: z.ZodOptional<z.ZodString>;
    discountable: z.ZodOptional<z.ZodBoolean>;
    is_giftcard: z.ZodOptional<z.ZodBoolean>;
    options: z.ZodOptional<z.ZodArray<z.ZodObject<{
        id: z.ZodOptional<z.ZodString>;
        title: z.ZodOptional<z.ZodString>;
        values: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    }, "strip", z.ZodTypeAny, {
        id?: string | undefined;
        title?: string | undefined;
        values?: string[] | undefined;
    }, {
        id?: string | undefined;
        title?: string | undefined;
        values?: string[] | undefined;
    }>, "many">>;
    variants: z.ZodOptional<z.ZodArray<z.ZodObject<{
        id: z.ZodOptional<z.ZodString>;
        title: z.ZodOptional<z.ZodString>;
        prices: z.ZodOptional<z.ZodArray<z.ZodObject<{
            id: z.ZodOptional<z.ZodString>;
            currency_code: z.ZodOptional<z.ZodString>;
            amount: z.ZodOptional<z.ZodNumber>;
            min_quantity: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
            max_quantity: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
            rules: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
        }, "strip", z.ZodTypeAny, {
            id?: string | undefined;
            currency_code?: string | undefined;
            amount?: number | undefined;
            min_quantity?: number | null | undefined;
            max_quantity?: number | null | undefined;
            rules?: Record<string, string> | undefined;
        }, {
            id?: string | undefined;
            currency_code?: string | undefined;
            amount?: number | undefined;
            min_quantity?: number | null | undefined;
            max_quantity?: number | null | undefined;
            rules?: Record<string, string> | undefined;
        }>, "many">>;
        sku: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        ean: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        upc: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        barcode: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        hs_code: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        mid_code: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        allow_backorder: z.ZodOptional<z.ZodBoolean>;
        manage_inventory: z.ZodOptional<z.ZodBoolean>;
        variant_rank: z.ZodOptional<z.ZodNumber>;
        weight: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        length: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        height: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        width: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        origin_country: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        material: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        metadata: z.ZodOptional<z.ZodNullable<z.ZodRecord<z.ZodString, z.ZodUnknown>>>;
        options: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
    }, "strict", z.ZodTypeAny, {
        id?: string | undefined;
        title?: string | undefined;
        prices?: {
            id?: string | undefined;
            currency_code?: string | undefined;
            amount?: number | undefined;
            min_quantity?: number | null | undefined;
            max_quantity?: number | null | undefined;
            rules?: Record<string, string> | undefined;
        }[] | undefined;
        sku?: string | null | undefined;
        ean?: string | null | undefined;
        upc?: string | null | undefined;
        barcode?: string | null | undefined;
        hs_code?: string | null | undefined;
        mid_code?: string | null | undefined;
        allow_backorder?: boolean | undefined;
        manage_inventory?: boolean | undefined;
        variant_rank?: number | undefined;
        weight?: number | null | undefined;
        length?: number | null | undefined;
        height?: number | null | undefined;
        width?: number | null | undefined;
        origin_country?: string | null | undefined;
        material?: string | null | undefined;
        metadata?: Record<string, unknown> | null | undefined;
        options?: Record<string, string> | undefined;
    }, {
        id?: string | undefined;
        title?: string | undefined;
        prices?: {
            id?: string | undefined;
            currency_code?: string | undefined;
            amount?: number | undefined;
            min_quantity?: number | null | undefined;
            max_quantity?: number | null | undefined;
            rules?: Record<string, string> | undefined;
        }[] | undefined;
        sku?: string | null | undefined;
        ean?: string | null | undefined;
        upc?: string | null | undefined;
        barcode?: string | null | undefined;
        hs_code?: string | null | undefined;
        mid_code?: string | null | undefined;
        allow_backorder?: boolean | undefined;
        manage_inventory?: boolean | undefined;
        variant_rank?: number | undefined;
        weight?: number | null | undefined;
        length?: number | null | undefined;
        height?: number | null | undefined;
        width?: number | null | undefined;
        origin_country?: string | null | undefined;
        material?: string | null | undefined;
        metadata?: Record<string, unknown> | null | undefined;
        options?: Record<string, string> | undefined;
    }>, "many">>;
    subtitle: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    description: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    images: z.ZodOptional<z.ZodArray<z.ZodObject<{
        url: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        url: string;
    }, {
        url: string;
    }>, "many">>;
    thumbnail: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    handle: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    type_id: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    external_id: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    collection_id: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    categories: z.ZodOptional<z.ZodArray<z.ZodObject<{
        id: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        id: string;
    }, {
        id: string;
    }>, "many">>;
    tags: z.ZodOptional<z.ZodArray<z.ZodObject<{
        id: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        id: string;
    }, {
        id: string;
    }>, "many">>;
    weight: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    length: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    height: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    width: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    hs_code: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    mid_code: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    origin_country: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    material: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    metadata: z.ZodOptional<z.ZodNullable<z.ZodRecord<z.ZodString, z.ZodUnknown>>>;
    sales_channels: z.ZodOptional<z.ZodArray<z.ZodObject<{
        id: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        id: string;
    }, {
        id: string;
    }>, "many">>;
}, "strict", z.ZodTypeAny, {
    title?: string | undefined;
    discountable?: boolean | undefined;
    is_giftcard?: boolean | undefined;
    options?: {
        id?: string | undefined;
        title?: string | undefined;
        values?: string[] | undefined;
    }[] | undefined;
    variants?: {
        id?: string | undefined;
        title?: string | undefined;
        prices?: {
            id?: string | undefined;
            currency_code?: string | undefined;
            amount?: number | undefined;
            min_quantity?: number | null | undefined;
            max_quantity?: number | null | undefined;
            rules?: Record<string, string> | undefined;
        }[] | undefined;
        sku?: string | null | undefined;
        ean?: string | null | undefined;
        upc?: string | null | undefined;
        barcode?: string | null | undefined;
        hs_code?: string | null | undefined;
        mid_code?: string | null | undefined;
        allow_backorder?: boolean | undefined;
        manage_inventory?: boolean | undefined;
        variant_rank?: number | undefined;
        weight?: number | null | undefined;
        length?: number | null | undefined;
        height?: number | null | undefined;
        width?: number | null | undefined;
        origin_country?: string | null | undefined;
        material?: string | null | undefined;
        metadata?: Record<string, unknown> | null | undefined;
        options?: Record<string, string> | undefined;
    }[] | undefined;
    subtitle?: string | null | undefined;
    description?: string | null | undefined;
    images?: {
        url: string;
    }[] | undefined;
    thumbnail?: string | null | undefined;
    handle?: string | null | undefined;
    type_id?: string | null | undefined;
    external_id?: string | null | undefined;
    collection_id?: string | null | undefined;
    categories?: {
        id: string;
    }[] | undefined;
    tags?: {
        id: string;
    }[] | undefined;
    weight?: number | null | undefined;
    length?: number | null | undefined;
    height?: number | null | undefined;
    width?: number | null | undefined;
    hs_code?: string | null | undefined;
    mid_code?: string | null | undefined;
    origin_country?: string | null | undefined;
    material?: string | null | undefined;
    metadata?: Record<string, unknown> | null | undefined;
    sales_channels?: {
        id: string;
    }[] | undefined;
}, {
    title?: string | undefined;
    discountable?: boolean | undefined;
    is_giftcard?: boolean | undefined;
    options?: {
        id?: string | undefined;
        title?: string | undefined;
        values?: string[] | undefined;
    }[] | undefined;
    variants?: {
        id?: string | undefined;
        title?: string | undefined;
        prices?: {
            id?: string | undefined;
            currency_code?: string | undefined;
            amount?: number | undefined;
            min_quantity?: number | null | undefined;
            max_quantity?: number | null | undefined;
            rules?: Record<string, string> | undefined;
        }[] | undefined;
        sku?: string | null | undefined;
        ean?: string | null | undefined;
        upc?: string | null | undefined;
        barcode?: string | null | undefined;
        hs_code?: string | null | undefined;
        mid_code?: string | null | undefined;
        allow_backorder?: boolean | undefined;
        manage_inventory?: boolean | undefined;
        variant_rank?: number | undefined;
        weight?: number | null | undefined;
        length?: number | null | undefined;
        height?: number | null | undefined;
        width?: number | null | undefined;
        origin_country?: string | null | undefined;
        material?: string | null | undefined;
        metadata?: Record<string, unknown> | null | undefined;
        options?: Record<string, string> | undefined;
    }[] | undefined;
    subtitle?: string | null | undefined;
    description?: string | null | undefined;
    images?: {
        url: string;
    }[] | undefined;
    thumbnail?: string | null | undefined;
    handle?: string | null | undefined;
    type_id?: string | null | undefined;
    external_id?: string | null | undefined;
    collection_id?: string | null | undefined;
    categories?: {
        id: string;
    }[] | undefined;
    tags?: {
        id: string;
    }[] | undefined;
    weight?: number | null | undefined;
    length?: number | null | undefined;
    height?: number | null | undefined;
    width?: number | null | undefined;
    hs_code?: string | null | undefined;
    mid_code?: string | null | undefined;
    origin_country?: string | null | undefined;
    material?: string | null | undefined;
    metadata?: Record<string, unknown> | null | undefined;
    sales_channels?: {
        id: string;
    }[] | undefined;
}>;
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
export declare const VendorUpdateProduct: (additionalDataValidator?: z.ZodOptional<z.ZodNullable<z.ZodObject<any, any>>>) => z.ZodObject<any, any, z.ZodTypeAny, {
    [x: string]: any;
}, {
    [x: string]: any;
}> | z.ZodEffects<any, any, any>;
/**
 * @schema VendorUpdateProductStatus
 * type: object
 * required:
 *   - title
 * properties:
 *   status:
 *     type: string
 *     enum: [draft, proposed, published]
 *     description: The status of the product.
 */
export type VendorUpdateProductStatusType = z.infer<typeof VendorUpdateProductStatus>;
export declare const VendorUpdateProductStatus: z.ZodObject<{
    status: z.ZodEnum<["draft", "proposed", "published"]>;
}, "strip", z.ZodTypeAny, {
    status: "draft" | "proposed" | "published";
}, {
    status: "draft" | "proposed" | "published";
}>;
