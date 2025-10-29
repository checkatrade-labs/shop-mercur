import { z } from 'zod';
import { PriceListStatus, PriceListType } from '@medusajs/framework/utils';
export declare const VendorGetPriceListPricesParams: z.ZodObject<{
    fields: z.ZodOptional<z.ZodString>;
    offset: z.ZodEffects<z.ZodDefault<z.ZodOptional<z.ZodNumber>>, number, unknown>;
    limit: z.ZodEffects<z.ZodDefault<z.ZodOptional<z.ZodNumber>>, number, unknown>;
    order: z.ZodOptional<z.ZodString> | z.ZodDefault<z.ZodOptional<z.ZodString>>;
    with_deleted: z.ZodEffects<z.ZodOptional<z.ZodBoolean>, boolean | undefined, unknown>;
}, "strip", z.ZodTypeAny, {
    offset: number;
    limit: number;
    fields?: string | undefined;
    order?: string | undefined;
    with_deleted?: boolean | undefined;
}, {
    fields?: string | undefined;
    offset?: unknown;
    limit?: unknown;
    order?: string | undefined;
    with_deleted?: unknown;
}>;
export declare const VendorGetPriceListProductsParams: z.ZodObject<{
    fields: z.ZodOptional<z.ZodString>;
    offset: z.ZodEffects<z.ZodDefault<z.ZodOptional<z.ZodNumber>>, number, unknown>;
    limit: z.ZodEffects<z.ZodDefault<z.ZodOptional<z.ZodNumber>>, number, unknown>;
    order: z.ZodOptional<z.ZodString> | z.ZodDefault<z.ZodOptional<z.ZodString>>;
    with_deleted: z.ZodEffects<z.ZodOptional<z.ZodBoolean>, boolean | undefined, unknown>;
}, "strip", z.ZodTypeAny, {
    offset: number;
    limit: number;
    fields?: string | undefined;
    order?: string | undefined;
    with_deleted?: boolean | undefined;
}, {
    fields?: string | undefined;
    offset?: unknown;
    limit?: unknown;
    order?: string | undefined;
    with_deleted?: unknown;
}>;
/**
 * @schema VendorCreatePriceListPrice
 * type: object
 * properties:
 *   variant_id:
 *     type: string
 *     title: variant_id
 *     description: The ID of the product variant this price list is for.
 *   rules:
 *     type: object
 *     description: The price's rules.
 *   currency_code:
 *     type: string
 *     title: currency_code
 *     description: The price's currency code.
 *     example: usd
 *   amount:
 *     type: number
 *     title: amount
 *     description: The price's amount.
 *   min_quantity:
 *     type: number
 *     title: min_quantity
 *     description: The minimum quantity that must be available in the cart for the price to be applied.
 *   max_quantity:
 *     type: number
 *     title: max_quantity
 *     description: The maximum quantity allowed to be available in the cart for the price to be applied.
 */
export type VendorCreatePriceListPriceType = z.infer<typeof VendorCreatePriceListPrice>;
export declare const VendorCreatePriceListPrice: z.ZodObject<{
    currency_code: z.ZodString;
    amount: z.ZodNumber;
    variant_id: z.ZodString;
    min_quantity: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    max_quantity: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    rules: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
}, "strip", z.ZodTypeAny, {
    currency_code: string;
    variant_id: string;
    amount: number;
    min_quantity?: number | null | undefined;
    max_quantity?: number | null | undefined;
    rules?: Record<string, string> | undefined;
}, {
    currency_code: string;
    variant_id: string;
    amount: number;
    min_quantity?: number | null | undefined;
    max_quantity?: number | null | undefined;
    rules?: Record<string, string> | undefined;
}>;
/**
 * @schema VendorUpdatePriceListPrice
 * type: object
 * properties:
 *   variant_id:
 *     type: string
 *     title: variant_id
 *     description: The ID of the product variant this price list is for.
 *   rules:
 *     type: object
 *     description: The price's rules.
 *   currency_code:
 *     type: string
 *     title: currency_code
 *     description: The price's currency code.
 *     example: usd
 *   amount:
 *     type: number
 *     title: amount
 *     description: The price's amount.
 *   min_quantity:
 *     type: number
 *     title: min_quantity
 *     description: The minimum quantity that must be available in the cart for the price to be applied.
 *   max_quantity:
 *     type: number
 *     title: max_quantity
 *     description: The maximum quantity allowed to be available in the cart for the price to be applied.
 */
export declare const VendorUpdatePriceListPrice: z.ZodObject<{
    id: z.ZodString;
    currency_code: z.ZodOptional<z.ZodString>;
    amount: z.ZodOptional<z.ZodNumber>;
    variant_id: z.ZodString;
    min_quantity: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    max_quantity: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    rules: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
}, "strip", z.ZodTypeAny, {
    id: string;
    variant_id: string;
    currency_code?: string | undefined;
    amount?: number | undefined;
    min_quantity?: number | null | undefined;
    max_quantity?: number | null | undefined;
    rules?: Record<string, string> | undefined;
}, {
    id: string;
    variant_id: string;
    currency_code?: string | undefined;
    amount?: number | undefined;
    min_quantity?: number | null | undefined;
    max_quantity?: number | null | undefined;
    rules?: Record<string, string> | undefined;
}>;
/**
 * @schema VendorCreatePriceList
 * type: object
 * properties:
 *   title:
 *     type: string
 *     title: title
 *     description: The price list's title.
 *   description:
 *     type: string
 *     title: description
 *     description: The price list's description.
 *   rules:
 *     type: object
 *     description: The price list's rules.
 *   starts_at:
 *     type: string
 *     title: starts_at
 *     description: The date the price list starts.
 *   ends_at:
 *     type: string
 *     title: ends_at
 *     description: The date the price list ends.
 *   status:
 *     type: string
 *     description: The price list's status.
 *     enum:
 *       - draft
 *       - active
 *   type:
 *     type: string
 *     description: The price list's type.
 *     enum:
 *       - sale
 *       - override
 *   prices:
 *     type: array
 *     description: The price list's prices.
 *     items:
 *       $ref: "#/components/schemas/VendorCreatePriceListPrice"
 */
export type VendorCreatePriceListType = z.infer<typeof VendorCreatePriceList>;
export declare const VendorCreatePriceList: z.ZodObject<{
    title: z.ZodString;
    description: z.ZodString;
    starts_at: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    ends_at: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    status: z.ZodOptional<z.ZodNativeEnum<typeof PriceListStatus>>;
    type: z.ZodOptional<z.ZodNativeEnum<typeof PriceListType>>;
    rules: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodArray<z.ZodString, "many">>>;
    prices: z.ZodOptional<z.ZodArray<z.ZodObject<{
        currency_code: z.ZodString;
        amount: z.ZodNumber;
        variant_id: z.ZodString;
        min_quantity: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        max_quantity: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        rules: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
    }, "strip", z.ZodTypeAny, {
        currency_code: string;
        variant_id: string;
        amount: number;
        min_quantity?: number | null | undefined;
        max_quantity?: number | null | undefined;
        rules?: Record<string, string> | undefined;
    }, {
        currency_code: string;
        variant_id: string;
        amount: number;
        min_quantity?: number | null | undefined;
        max_quantity?: number | null | undefined;
        rules?: Record<string, string> | undefined;
    }>, "many">>;
}, "strip", z.ZodTypeAny, {
    description: string;
    title: string;
    starts_at?: string | null | undefined;
    ends_at?: string | null | undefined;
    status?: PriceListStatus | undefined;
    type?: PriceListType | undefined;
    rules?: Record<string, string[]> | undefined;
    prices?: {
        currency_code: string;
        variant_id: string;
        amount: number;
        min_quantity?: number | null | undefined;
        max_quantity?: number | null | undefined;
        rules?: Record<string, string> | undefined;
    }[] | undefined;
}, {
    description: string;
    title: string;
    starts_at?: string | null | undefined;
    ends_at?: string | null | undefined;
    status?: PriceListStatus | undefined;
    type?: PriceListType | undefined;
    rules?: Record<string, string[]> | undefined;
    prices?: {
        currency_code: string;
        variant_id: string;
        amount: number;
        min_quantity?: number | null | undefined;
        max_quantity?: number | null | undefined;
        rules?: Record<string, string> | undefined;
    }[] | undefined;
}>;
/**
 * @schema VendorUpdatePriceList
 * type: object
 * properties:
 *   title:
 *     type: string
 *     title: title
 *     description: The price list's title.
 *   description:
 *     type: string
 *     title: description
 *     description: The price list's description.
 *   rules:
 *     type: object
 *     description: The price list's rules.
 *   starts_at:
 *     type: string
 *     title: starts_at
 *     description: The date the price list starts.
 *   ends_at:
 *     type: string
 *     title: ends_at
 *     description: The date the price list ends.
 *   status:
 *     type: string
 *     description: The price list's status.
 *     enum:
 *       - draft
 *       - active
 *   type:
 *     type: string
 *     description: The price list's type.
 *     enum:
 *       - sale
 *       - override
 */
export type VendorUpdatePriceListType = z.infer<typeof VendorUpdatePriceList>;
export declare const VendorUpdatePriceList: z.ZodObject<{
    title: z.ZodOptional<z.ZodString>;
    description: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    starts_at: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    ends_at: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    status: z.ZodOptional<z.ZodNativeEnum<typeof PriceListStatus>>;
    type: z.ZodOptional<z.ZodNativeEnum<typeof PriceListType>>;
    rules: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodArray<z.ZodString, "many">>>;
}, "strip", z.ZodTypeAny, {
    title?: string | undefined;
    description?: string | null | undefined;
    starts_at?: string | null | undefined;
    ends_at?: string | null | undefined;
    status?: PriceListStatus | undefined;
    type?: PriceListType | undefined;
    rules?: Record<string, string[]> | undefined;
}, {
    title?: string | undefined;
    description?: string | null | undefined;
    starts_at?: string | null | undefined;
    ends_at?: string | null | undefined;
    status?: PriceListStatus | undefined;
    type?: PriceListType | undefined;
    rules?: Record<string, string[]> | undefined;
}>;
/**
 * @schema VendorRemoveProductsFromPriceList
 * type: object
 * properties:
 *   remove:
 *     type: array
 *     description: Products ids to remove from the price list
 *     items:
 *       type: string
 */
export type VendorUpdateProductsOnPriceListType = z.infer<typeof VendorUpdateProductsOnPriceList>;
export declare const VendorUpdateProductsOnPriceList: z.ZodObject<{
    remove: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    create: z.ZodOptional<z.ZodArray<z.ZodObject<{
        currency_code: z.ZodString;
        amount: z.ZodNumber;
        variant_id: z.ZodString;
        min_quantity: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        max_quantity: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        rules: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
    }, "strip", z.ZodTypeAny, {
        currency_code: string;
        variant_id: string;
        amount: number;
        min_quantity?: number | null | undefined;
        max_quantity?: number | null | undefined;
        rules?: Record<string, string> | undefined;
    }, {
        currency_code: string;
        variant_id: string;
        amount: number;
        min_quantity?: number | null | undefined;
        max_quantity?: number | null | undefined;
        rules?: Record<string, string> | undefined;
    }>, "many">>;
    update: z.ZodOptional<z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        currency_code: z.ZodOptional<z.ZodString>;
        amount: z.ZodOptional<z.ZodNumber>;
        variant_id: z.ZodString;
        min_quantity: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        max_quantity: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        rules: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
    }, "strip", z.ZodTypeAny, {
        id: string;
        variant_id: string;
        currency_code?: string | undefined;
        amount?: number | undefined;
        min_quantity?: number | null | undefined;
        max_quantity?: number | null | undefined;
        rules?: Record<string, string> | undefined;
    }, {
        id: string;
        variant_id: string;
        currency_code?: string | undefined;
        amount?: number | undefined;
        min_quantity?: number | null | undefined;
        max_quantity?: number | null | undefined;
        rules?: Record<string, string> | undefined;
    }>, "many">>;
}, "strip", z.ZodTypeAny, {
    remove?: string[] | undefined;
    create?: {
        currency_code: string;
        variant_id: string;
        amount: number;
        min_quantity?: number | null | undefined;
        max_quantity?: number | null | undefined;
        rules?: Record<string, string> | undefined;
    }[] | undefined;
    update?: {
        id: string;
        variant_id: string;
        currency_code?: string | undefined;
        amount?: number | undefined;
        min_quantity?: number | null | undefined;
        max_quantity?: number | null | undefined;
        rules?: Record<string, string> | undefined;
    }[] | undefined;
}, {
    remove?: string[] | undefined;
    create?: {
        currency_code: string;
        variant_id: string;
        amount: number;
        min_quantity?: number | null | undefined;
        max_quantity?: number | null | undefined;
        rules?: Record<string, string> | undefined;
    }[] | undefined;
    update?: {
        id: string;
        variant_id: string;
        currency_code?: string | undefined;
        amount?: number | undefined;
        min_quantity?: number | null | undefined;
        max_quantity?: number | null | undefined;
        rules?: Record<string, string> | undefined;
    }[] | undefined;
}>;
