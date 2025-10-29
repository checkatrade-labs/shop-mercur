import { z } from 'zod';
export type VendorGetStockLocationParamsType = z.infer<typeof VendorGetStockLocationParams>;
export declare const VendorGetStockLocationsParamsDirectFields: z.ZodObject<{
    stock_location_id: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodArray<z.ZodString, "many">]>>;
}, "strip", z.ZodTypeAny, {
    stock_location_id?: string | string[] | undefined;
}, {
    stock_location_id?: string | string[] | undefined;
}>;
export declare const VendorGetStockLocationParams: z.ZodObject<{
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
}, "strip", z.ZodTypeAny, {
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
 * @schema UpsertStockLocationAddress
 * type: object
 * required:
 *   - address_1
 *   - country_code
 * properties:
 *   address_1:
 *     type: string
 *     description: Address line 1
 *   address_2:
 *     type: string
 *     nullable: true
 *     description: Address line 2
 *   company:
 *     type: string
 *     nullable: true
 *     description: Company name
 *   city:
 *     type: string
 *     nullable: true
 *     description: City
 *   country_code:
 *     type: string
 *     description: Country code
 *   phone:
 *     type: string
 *     nullable: true
 *     description: Phone number
 *   postal_code:
 *     type: string
 *     nullable: true
 *     description: Postal code
 *   province:
 *     type: string
 *     nullable: true
 *     description: Province
 */
export declare const UpsertStockLocationAddress: z.ZodObject<{
    address_1: z.ZodString;
    address_2: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    company: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    city: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    country_code: z.ZodString;
    phone: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    postal_code: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    province: z.ZodOptional<z.ZodNullable<z.ZodString>>;
}, "strip", z.ZodTypeAny, {
    country_code: string;
    address_1: string;
    address_2?: string | null | undefined;
    company?: string | null | undefined;
    city?: string | null | undefined;
    phone?: string | null | undefined;
    postal_code?: string | null | undefined;
    province?: string | null | undefined;
}, {
    country_code: string;
    address_1: string;
    address_2?: string | null | undefined;
    company?: string | null | undefined;
    city?: string | null | undefined;
    phone?: string | null | undefined;
    postal_code?: string | null | undefined;
    province?: string | null | undefined;
}>;
export type VendorCreateStockLocationType = z.infer<typeof VendorCreateStockLocation>;
/**
 * @schema VendorCreateStockLocation
 * type: object
 * required:
 *   - name
 * properties:
 *   name:
 *     type: string
 *     description: Name of the stock location
 *   address:
 *     $ref: "#/components/schemas/UpsertStockLocationAddress"
 *   address_id:
 *     type: string
 *     nullable: true
 *     description: ID of an existing address to use
 *   metadata:
 *     type: object
 *     nullable: true
 *     description: Additional metadata
 */
export declare const VendorCreateStockLocation: z.ZodObject<{
    name: z.ZodEffects<z.ZodString, string, unknown>;
    address: z.ZodOptional<z.ZodObject<{
        address_1: z.ZodString;
        address_2: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        company: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        city: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        country_code: z.ZodString;
        phone: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        postal_code: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        province: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    }, "strip", z.ZodTypeAny, {
        country_code: string;
        address_1: string;
        address_2?: string | null | undefined;
        company?: string | null | undefined;
        city?: string | null | undefined;
        phone?: string | null | undefined;
        postal_code?: string | null | undefined;
        province?: string | null | undefined;
    }, {
        country_code: string;
        address_1: string;
        address_2?: string | null | undefined;
        company?: string | null | undefined;
        city?: string | null | undefined;
        phone?: string | null | undefined;
        postal_code?: string | null | undefined;
        province?: string | null | undefined;
    }>>;
    address_id: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    metadata: z.ZodOptional<z.ZodNullable<z.ZodRecord<z.ZodString, z.ZodUnknown>>>;
}, "strip", z.ZodTypeAny, {
    name: string;
    address?: {
        country_code: string;
        address_1: string;
        address_2?: string | null | undefined;
        company?: string | null | undefined;
        city?: string | null | undefined;
        phone?: string | null | undefined;
        postal_code?: string | null | undefined;
        province?: string | null | undefined;
    } | undefined;
    address_id?: string | null | undefined;
    metadata?: Record<string, unknown> | null | undefined;
}, {
    name?: unknown;
    address?: {
        country_code: string;
        address_1: string;
        address_2?: string | null | undefined;
        company?: string | null | undefined;
        city?: string | null | undefined;
        phone?: string | null | undefined;
        postal_code?: string | null | undefined;
        province?: string | null | undefined;
    } | undefined;
    address_id?: string | null | undefined;
    metadata?: Record<string, unknown> | null | undefined;
}>;
export type VendorUpdateStockLocationType = z.infer<typeof VendorUpdateStockLocation>;
/**
 * @schema VendorUpdateStockLocation
 * type: object
 * properties:
 *   name:
 *     type: string
 *     description: Name of the stock location
 *   address:
 *     $ref: "#/components/schemas/UpsertStockLocationAddress"
 *   address_id:
 *     type: string
 *     nullable: true
 *     description: ID of an existing address to use
 *   metadata:
 *     type: object
 *     nullable: true
 *     description: Additional metadata
 */
export declare const VendorUpdateStockLocation: z.ZodObject<{
    name: z.ZodOptional<z.ZodEffects<z.ZodOptional<z.ZodString>, string | undefined, unknown>>;
    address: z.ZodOptional<z.ZodObject<{
        address_1: z.ZodString;
        address_2: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        company: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        city: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        country_code: z.ZodString;
        phone: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        postal_code: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        province: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    }, "strip", z.ZodTypeAny, {
        country_code: string;
        address_1: string;
        address_2?: string | null | undefined;
        company?: string | null | undefined;
        city?: string | null | undefined;
        phone?: string | null | undefined;
        postal_code?: string | null | undefined;
        province?: string | null | undefined;
    }, {
        country_code: string;
        address_1: string;
        address_2?: string | null | undefined;
        company?: string | null | undefined;
        city?: string | null | undefined;
        phone?: string | null | undefined;
        postal_code?: string | null | undefined;
        province?: string | null | undefined;
    }>>;
    address_id: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    metadata: z.ZodOptional<z.ZodNullable<z.ZodRecord<z.ZodString, z.ZodUnknown>>>;
}, "strip", z.ZodTypeAny, {
    name?: string | undefined;
    address?: {
        country_code: string;
        address_1: string;
        address_2?: string | null | undefined;
        company?: string | null | undefined;
        city?: string | null | undefined;
        phone?: string | null | undefined;
        postal_code?: string | null | undefined;
        province?: string | null | undefined;
    } | undefined;
    address_id?: string | null | undefined;
    metadata?: Record<string, unknown> | null | undefined;
}, {
    name?: unknown;
    address?: {
        country_code: string;
        address_1: string;
        address_2?: string | null | undefined;
        company?: string | null | undefined;
        city?: string | null | undefined;
        phone?: string | null | undefined;
        postal_code?: string | null | undefined;
        province?: string | null | undefined;
    } | undefined;
    address_id?: string | null | undefined;
    metadata?: Record<string, unknown> | null | undefined;
}>;
export type VendorCreateStockLocationFulfillmentSetType = z.infer<typeof VendorCreateStockLocationFulfillmentSet>;
/**
 * @schema VendorCreateStockLocationFulfillmentSet
 * type: object
 * required:
 *   - name
 *   - type
 * properties:
 *   name:
 *     type: string
 *     description: Name of the fulfillment set
 *   type:
 *     type: string
 *     description: Type of the fulfillment set
 */
export declare const VendorCreateStockLocationFulfillmentSet: z.ZodObject<{
    name: z.ZodString;
    type: z.ZodString;
}, "strict", z.ZodTypeAny, {
    type: string;
    name: string;
}, {
    type: string;
    name: string;
}>;
