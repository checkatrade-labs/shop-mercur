import { z } from 'zod';
import { RuleOperator } from '@medusajs/framework/utils';
export type VendorGetShippingParamsType = z.infer<typeof VendorGetShippingFindParams>;
export declare const VendorGetShippingFindParams: z.ZodObject<{
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
 * @schema CreateShippingOptionPriceWithRegion
 * type: object
 * required:
 *   - region_id
 *   - amount
 * properties:
 *   region_id:
 *     type: string
 *     description: The region ID for the price.
 *   amount:
 *     type: number
 *     description: The amount of the price.
 */
export declare const CreateShippingOptionPriceWithRegion: z.ZodObject<{
    region_id: z.ZodString;
    amount: z.ZodNumber;
}, "strict", z.ZodTypeAny, {
    region_id: string;
    amount: number;
}, {
    region_id: string;
    amount: number;
}>;
/**
 * @schema VendorCreateShippingOption
 * type: object
 * required:
 *   - name
 *   - shipping_profile_id
 *   - provider_id
 *   - prices
 *   - type
 * properties:
 *   name:
 *     type: string
 *     description: The name of the shipping option.
 *   shipping_profile_id:
 *     type: string
 *     description: The ID of the shipping profile.
 *   provider_id:
 *     type: string
 *     description: The ID of the fulfillment provider.
 *   prices:
 *     type: array
 *     description: The prices of the shipping option.
 *     items:
 *       oneOf:
 *         - $ref: "#/components/schemas/CreateShippingOptionPriceWithCurrency"
 *         - $ref: "#/components/schemas/CreateShippingOptionPriceWithRegion"
 *   rules:
 *     type: array
 *     items:
 *       $ref: "#/components/schemas/VendorCreateShippingOptionRule"
 *   type:
 *     $ref: "#/components/schemas/CreateShippingOptionTypeObject"
 */
export type VendorCreateShippingOptionType = z.infer<typeof VendorCreateShippingOption>;
export declare const VendorCreateShippingOption: z.ZodObject<{
    name: z.ZodString;
    service_zone_id: z.ZodString;
    shipping_profile_id: z.ZodString;
    data: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
    provider_id: z.ZodString;
    prices: z.ZodArray<z.ZodUnion<[z.ZodObject<{
        currency_code: z.ZodString;
        amount: z.ZodNumber;
    }, "strict", z.ZodTypeAny, {
        currency_code: string;
        amount: number;
    }, {
        currency_code: string;
        amount: number;
    }>, z.ZodObject<{
        region_id: z.ZodString;
        amount: z.ZodNumber;
    }, "strict", z.ZodTypeAny, {
        region_id: string;
        amount: number;
    }, {
        region_id: string;
        amount: number;
    }>]>, "many">;
    type: z.ZodObject<{
        label: z.ZodString;
        description: z.ZodString;
        code: z.ZodString;
    }, "strict", z.ZodTypeAny, {
        code: string;
        description: string;
        label: string;
    }, {
        code: string;
        description: string;
        label: string;
    }>;
    rules: z.ZodOptional<z.ZodArray<z.ZodObject<{
        operator: z.ZodNativeEnum<typeof RuleOperator>;
        attribute: z.ZodString;
        value: z.ZodUnion<[z.ZodString, z.ZodArray<z.ZodString, "many">]>;
    }, "strict", z.ZodTypeAny, {
        value: (string | string[]) & (string | string[] | undefined);
        attribute: string;
        operator: RuleOperator;
    }, {
        value: (string | string[]) & (string | string[] | undefined);
        attribute: string;
        operator: RuleOperator;
    }>, "many">>;
}, "strict", z.ZodTypeAny, {
    type: {
        code: string;
        description: string;
        label: string;
    };
    name: string;
    service_zone_id: string;
    prices: ({
        currency_code: string;
        amount: number;
    } | {
        region_id: string;
        amount: number;
    })[];
    provider_id: string;
    shipping_profile_id: string;
    data?: Record<string, unknown> | undefined;
    rules?: {
        value: (string | string[]) & (string | string[] | undefined);
        attribute: string;
        operator: RuleOperator;
    }[] | undefined;
}, {
    type: {
        code: string;
        description: string;
        label: string;
    };
    name: string;
    service_zone_id: string;
    prices: ({
        currency_code: string;
        amount: number;
    } | {
        region_id: string;
        amount: number;
    })[];
    provider_id: string;
    shipping_profile_id: string;
    data?: Record<string, unknown> | undefined;
    rules?: {
        value: (string | string[]) & (string | string[] | undefined);
        attribute: string;
        operator: RuleOperator;
    }[] | undefined;
}>;
/**
 * @schema VendorUpdateShippingOption
 * type: object
 * properties:
 *   name:
 *     type: string
 *     description: The name of the shipping option.
 *   shipping_profile_id:
 *     type: string
 *     description: The ID of the shipping profile.
 *   provider_id:
 *     type: string
 *     description: The ID of the fulfillment provider.
 *   prices:
 *     type: array
 *     description: The prices of the shipping option.
 *     items:
 *       oneOf:
 *         - $ref: "#/components/schemas/CreateShippingOptionPriceWithCurrency"
 *         - $ref: "#/components/schemas/CreateShippingOptionPriceWithRegion"
 *   rules:
 *     type: array
 *     items:
 *       $ref: "#/components/schemas/VendorCreateShippingOptionRule"
 *   type:
 *     $ref: "#/components/schemas/CreateShippingOptionTypeObject"
 */
export type VendorUpdateShippingOptionType = z.infer<typeof VendorUpdateShippingOption>;
export declare const VendorUpdateShippingOption: z.ZodObject<{
    data: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
    name: z.ZodOptional<z.ZodString>;
    shipping_profile_id: z.ZodOptional<z.ZodString>;
    provider_id: z.ZodOptional<z.ZodString>;
    prices: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodObject<{
        currency_code: z.ZodString;
        amount: z.ZodNumber;
    }, "strict", z.ZodTypeAny, {
        currency_code: string;
        amount: number;
    }, {
        currency_code: string;
        amount: number;
    }>, z.ZodObject<{
        region_id: z.ZodString;
        amount: z.ZodNumber;
    }, "strict", z.ZodTypeAny, {
        region_id: string;
        amount: number;
    }, {
        region_id: string;
        amount: number;
    }>]>, "many">>;
    type: z.ZodOptional<z.ZodObject<{
        label: z.ZodString;
        description: z.ZodString;
        code: z.ZodString;
    }, "strict", z.ZodTypeAny, {
        code: string;
        description: string;
        label: string;
    }, {
        code: string;
        description: string;
        label: string;
    }>>;
    rules: z.ZodOptional<z.ZodArray<z.ZodObject<{
        operator: z.ZodNativeEnum<typeof RuleOperator>;
        attribute: z.ZodString;
        value: z.ZodUnion<[z.ZodString, z.ZodArray<z.ZodString, "many">]>;
    }, "strict", z.ZodTypeAny, {
        value: (string | string[]) & (string | string[] | undefined);
        attribute: string;
        operator: RuleOperator;
    }, {
        value: (string | string[]) & (string | string[] | undefined);
        attribute: string;
        operator: RuleOperator;
    }>, "many">>;
}, "strict", z.ZodTypeAny, {
    data?: Record<string, unknown> | undefined;
    name?: string | undefined;
    shipping_profile_id?: string | undefined;
    provider_id?: string | undefined;
    prices?: ({
        currency_code: string;
        amount: number;
    } | {
        region_id: string;
        amount: number;
    })[] | undefined;
    type?: {
        code: string;
        description: string;
        label: string;
    } | undefined;
    rules?: {
        value: (string | string[]) & (string | string[] | undefined);
        attribute: string;
        operator: RuleOperator;
    }[] | undefined;
}, {
    data?: Record<string, unknown> | undefined;
    name?: string | undefined;
    shipping_profile_id?: string | undefined;
    provider_id?: string | undefined;
    prices?: ({
        currency_code: string;
        amount: number;
    } | {
        region_id: string;
        amount: number;
    })[] | undefined;
    type?: {
        code: string;
        description: string;
        label: string;
    } | undefined;
    rules?: {
        value: (string | string[]) & (string | string[] | undefined);
        attribute: string;
        operator: RuleOperator;
    }[] | undefined;
}>;
