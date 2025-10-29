import { z } from 'zod';
export declare const VendorGetInventoryItemsParamsFields: z.ZodObject<{
    q: z.ZodOptional<z.ZodString>;
    inventory_item_id: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodArray<z.ZodString, "many">]>>;
}, "strip", z.ZodTypeAny, {
    q?: string | undefined;
    inventory_item_id?: string | string[] | undefined;
}, {
    q?: string | undefined;
    inventory_item_id?: string | string[] | undefined;
}>;
export type VendorGetInventoryItemsParamsType = z.infer<typeof VendorGetInventoryItemsParams>;
export declare const VendorGetInventoryItemsParams: z.ZodObject<{
    [x: string]: any;
    [x: number]: any;
    [x: symbol]: any;
    $and: z.ZodOptional<z.ZodLazy<z.ZodArray<z.ZodObject<any, z.UnknownKeysParam, z.ZodTypeAny, {
        [x: string]: any;
    }, {
        [x: string]: any;
    }>, "many">>>;
    $or: z.ZodOptional<z.ZodLazy<z.ZodArray<z.ZodObject<any, z.UnknownKeysParam, z.ZodTypeAny, {
        [x: string]: any;
    }, {
        [x: string]: any;
    }>, "many">>>;
}, "strict", z.ZodTypeAny, {
    [x: string]: any;
    [x: number]: any;
    [x: symbol]: any;
    $and?: {
        [x: string]: any;
    }[] | undefined;
    $or?: {
        [x: string]: any;
    }[] | undefined;
}, {
    [x: string]: any;
    [x: number]: any;
    [x: symbol]: any;
    $and?: {
        [x: string]: any;
    }[] | undefined;
    $or?: {
        [x: string]: any;
    }[] | undefined;
}>;
/**
 * @schema VendorUpdateInventoryLevel
 * type: object
 * properties:
 *   stocked_quantity:
 *     type: number
 *     description: The quantity of the InventoryItem in StockLocation.
 *   reserved_quantity:
 *     type: number
 *     title: reserved_quantity
 *     description: The quantity reserved from the available stocked_quantity.
 */
export type VendorUpdateInventoryLevelType = z.infer<typeof VendorUpdateInventoryLevel>;
export declare const VendorUpdateInventoryLevel: z.ZodObject<{
    stocked_quantity: z.ZodNumber;
    reserved_quantity: z.ZodOptional<z.ZodNumber>;
}, "strip", z.ZodTypeAny, {
    stocked_quantity: number;
    reserved_quantity?: number | undefined;
}, {
    stocked_quantity: number;
    reserved_quantity?: number | undefined;
}>;
/**
 * @schema VendorCreateInventoryLevel
 * title: "VendorCreateInventoryLevel"
 * type: object
 * description: The inventory level details.
 * properties:
 *   location_id:
 *     type: string
 *     title: location_id
 *     description: The inventory level locationId.
 *   stocked_quantity:
 *     type: number
 *     title: stocked_quantity
 *     description: The inventory level in stock.
 *   reserved_quantity:
 *     type: number
 *     title: reserved_quantity
 *     description: The quantity reserved from the available stocked_quantity.
 */
export type VendorCreateInventoryLocationLevelType = z.infer<typeof VendorCreateInventoryLocationLevel>;
export declare const VendorCreateInventoryLocationLevel: z.ZodObject<{
    location_id: z.ZodString;
    stocked_quantity: z.ZodOptional<z.ZodNumber>;
    reserved_quantity: z.ZodOptional<z.ZodNumber>;
}, "strict", z.ZodTypeAny, {
    location_id: string;
    stocked_quantity?: number | undefined;
    reserved_quantity?: number | undefined;
}, {
    location_id: string;
    stocked_quantity?: number | undefined;
    reserved_quantity?: number | undefined;
}>;
/**
 * @schema VendorUpdateInventoryItem
 * title: "VendorUpdateInventoryItem"
 * type: object
 * description: The inventory item's details.
 * properties:
 *   sku:
 *     type: string
 *     title: sku
 *     description: The inventory item's SKU.
 *   hs_code:
 *     type: string
 *     title: hs_code
 *     description: The inventory item's HS code.
 *   weight:
 *     type: number
 *     title: weight
 *     description: The inventory item's weight.
 *   length:
 *     type: number
 *     title: length
 *     description: The inventory item's length.
 *   height:
 *     type: number
 *     title: height
 *     description: The inventory item's height.
 *   width:
 *     type: number
 *     title: width
 *     description: The inventory item's width.
 *   origin_country:
 *     type: string
 *     title: origin_country
 *     description: The inventory item's origin country.
 *   mid_code:
 *     type: string
 *     title: mid_code
 *     description: The inventory item's mid code.
 *   material:
 *     type: string
 *     title: material
 *     description: The inventory item's material.
 *   title:
 *     type: string
 *     title: title
 *     description: The inventory item's title.
 *   description:
 *     type: string
 *     title: description
 *     description: The description of the variant associated with the inventory item.
 *   requires_shipping:
 *     type: boolean
 *     title: requires_shipping
 *     description: Whether the item requires shipping.
 *   thumbnail:
 *     type: string
 *     title: thumbnail
 *     description: The inventory item's thumbnail.
 *   metadata:
 *     type: object
 *     description: The inventory item's metadata, used to store custom key-value pairs.
 */
export type VendorUpdateInventoryItemType = z.infer<typeof VendorUpdateInventoryItem>;
export declare const VendorUpdateInventoryItem: z.ZodObject<{
    sku: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    hs_code: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    weight: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    length: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    height: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    width: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    origin_country: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    mid_code: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    material: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    title: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    description: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    requires_shipping: z.ZodOptional<z.ZodBoolean>;
    thumbnail: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    metadata: z.ZodOptional<z.ZodNullable<z.ZodRecord<z.ZodString, z.ZodUnknown>>>;
}, "strict", z.ZodTypeAny, {
    sku?: string | null | undefined;
    hs_code?: string | null | undefined;
    weight?: number | null | undefined;
    length?: number | null | undefined;
    height?: number | null | undefined;
    width?: number | null | undefined;
    origin_country?: string | null | undefined;
    mid_code?: string | null | undefined;
    material?: string | null | undefined;
    title?: string | null | undefined;
    description?: string | null | undefined;
    requires_shipping?: boolean | undefined;
    thumbnail?: string | null | undefined;
    metadata?: Record<string, unknown> | null | undefined;
}, {
    sku?: string | null | undefined;
    hs_code?: string | null | undefined;
    weight?: number | null | undefined;
    length?: number | null | undefined;
    height?: number | null | undefined;
    width?: number | null | undefined;
    origin_country?: string | null | undefined;
    mid_code?: string | null | undefined;
    material?: string | null | undefined;
    title?: string | null | undefined;
    description?: string | null | undefined;
    requires_shipping?: boolean | undefined;
    thumbnail?: string | null | undefined;
    metadata?: Record<string, unknown> | null | undefined;
}>;
/**
 * @schema VendorBatchInventoryItemLevels
 * type: object
 * properties:
 *   create:
 *     type: array
 *     description: Levels to create
 *     items:
 *       $ref: "#/components/schemas/VendorBatchInventoryLocationLevel"
 *   update:
 *     type: array
 *     description: Levels to update
 *     items:
 *       $ref: "#/components/schemas/VendorBatchInventoryLocationLevel"
 *   delete:
 *     type: array
 *     description: Levels to delete
 *     items:
 *       type: string
 */
export type VendorBatchInventoryItemLevelsType = z.infer<typeof VendorBatchInventoryItemLevels>;
export declare const VendorBatchInventoryItemLevels: z.ZodObject<{
    create: z.ZodOptional<z.ZodArray<z.ZodObject<{
        inventory_item_id: z.ZodString;
        location_id: z.ZodString;
        stocked_quantity: z.ZodOptional<z.ZodNumber>;
        incoming_quantity: z.ZodOptional<z.ZodNumber>;
    }, "strict", z.ZodTypeAny, {
        location_id: string;
        inventory_item_id: string;
        stocked_quantity?: number | undefined;
        incoming_quantity?: number | undefined;
    }, {
        location_id: string;
        inventory_item_id: string;
        stocked_quantity?: number | undefined;
        incoming_quantity?: number | undefined;
    }>, "many">>;
    update: z.ZodOptional<z.ZodArray<z.ZodObject<{
        inventory_item_id: z.ZodString;
        location_id: z.ZodString;
        stocked_quantity: z.ZodOptional<z.ZodNumber>;
        incoming_quantity: z.ZodOptional<z.ZodNumber>;
    }, "strict", z.ZodTypeAny, {
        location_id: string;
        inventory_item_id: string;
        stocked_quantity?: number | undefined;
        incoming_quantity?: number | undefined;
    }, {
        location_id: string;
        inventory_item_id: string;
        stocked_quantity?: number | undefined;
        incoming_quantity?: number | undefined;
    }>, "many">>;
    delete: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    force: z.ZodOptional<z.ZodBoolean>;
}, "strict", z.ZodTypeAny, {
    create?: {
        location_id: string;
        inventory_item_id: string;
        stocked_quantity?: number | undefined;
        incoming_quantity?: number | undefined;
    }[] | undefined;
    update?: {
        location_id: string;
        inventory_item_id: string;
        stocked_quantity?: number | undefined;
        incoming_quantity?: number | undefined;
    }[] | undefined;
    delete?: string[] | undefined;
    force?: boolean | undefined;
}, {
    create?: {
        location_id: string;
        inventory_item_id: string;
        stocked_quantity?: number | undefined;
        incoming_quantity?: number | undefined;
    }[] | undefined;
    update?: {
        location_id: string;
        inventory_item_id: string;
        stocked_quantity?: number | undefined;
        incoming_quantity?: number | undefined;
    }[] | undefined;
    delete?: string[] | undefined;
    force?: boolean | undefined;
}>;
/**
 * @schema VendorBatchInventoryItemLocationsLevel
 * type: object
 * properties:
 *   create:
 *     type: array
 *     description: Levels to create
 *     items:
 *       $ref: "#/components/schemas/VendorCreateInventoryLevel"
 *   update:
 *     type: array
 *     description: Levels to update
 *     items:
 *       $ref: "#/components/schemas/VendorBatchInventoryLocationLevel"
 *   delete:
 *     type: array
 *     description: Levels to delete
 *     items:
 *       type: string
 */
export type VendorBatchInventoryItemLocationsLevelType = z.infer<typeof VendorBatchInventoryItemLocationsLevel>;
export declare const VendorBatchInventoryItemLocationsLevel: z.ZodObject<{
    create: z.ZodOptional<z.ZodArray<z.ZodObject<{
        location_id: z.ZodString;
        stocked_quantity: z.ZodOptional<z.ZodNumber>;
        reserved_quantity: z.ZodOptional<z.ZodNumber>;
    }, "strict", z.ZodTypeAny, {
        location_id: string;
        stocked_quantity?: number | undefined;
        reserved_quantity?: number | undefined;
    }, {
        location_id: string;
        stocked_quantity?: number | undefined;
        reserved_quantity?: number | undefined;
    }>, "many">>;
    update: z.ZodOptional<z.ZodArray<z.ZodObject<{
        inventory_item_id: z.ZodString;
        location_id: z.ZodString;
        stocked_quantity: z.ZodOptional<z.ZodNumber>;
        incoming_quantity: z.ZodOptional<z.ZodNumber>;
    }, "strict", z.ZodTypeAny, {
        location_id: string;
        inventory_item_id: string;
        stocked_quantity?: number | undefined;
        incoming_quantity?: number | undefined;
    }, {
        location_id: string;
        inventory_item_id: string;
        stocked_quantity?: number | undefined;
        incoming_quantity?: number | undefined;
    }>, "many">>;
    delete: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    force: z.ZodOptional<z.ZodBoolean>;
}, "strip", z.ZodTypeAny, {
    create?: {
        location_id: string;
        stocked_quantity?: number | undefined;
        reserved_quantity?: number | undefined;
    }[] | undefined;
    update?: {
        location_id: string;
        inventory_item_id: string;
        stocked_quantity?: number | undefined;
        incoming_quantity?: number | undefined;
    }[] | undefined;
    delete?: string[] | undefined;
    force?: boolean | undefined;
}, {
    create?: {
        location_id: string;
        stocked_quantity?: number | undefined;
        reserved_quantity?: number | undefined;
    }[] | undefined;
    update?: {
        location_id: string;
        inventory_item_id: string;
        stocked_quantity?: number | undefined;
        incoming_quantity?: number | undefined;
    }[] | undefined;
    delete?: string[] | undefined;
    force?: boolean | undefined;
}>;
