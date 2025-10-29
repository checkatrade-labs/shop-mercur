import { z } from 'zod';
export declare const StoreGetShippingOptionsParams: z.ZodObject<{
    fields: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    fields?: string | undefined;
}, {
    fields?: string | undefined;
}>;
export declare const StoreGetShippingOptionsFields: z.ZodObject<{
    cart_id: z.ZodString;
    is_return: z.ZodOptional<z.ZodBoolean>;
}, "strict", z.ZodTypeAny, {
    cart_id: string;
    is_return?: boolean | undefined;
}, {
    cart_id: string;
    is_return?: boolean | undefined;
}>;
export type StoreGetShippingOptionsType = z.infer<typeof StoreGetShippingOptions>;
export declare const StoreGetShippingOptions: z.ZodObject<{
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
export type StoreGetReturnShippingOptionsParamsType = z.infer<typeof StoreGetReturnShippingOptions>;
export declare const StoreGetReturnShippingOptions: z.ZodObject<{
    offset: z.ZodEffects<z.ZodDefault<z.ZodOptional<z.ZodNumber>>, number, unknown>;
    limit: z.ZodEffects<z.ZodDefault<z.ZodOptional<z.ZodNumber>>, number, unknown>;
    fields: z.ZodOptional<z.ZodString>;
    order: z.ZodOptional<z.ZodString> | z.ZodDefault<z.ZodOptional<z.ZodString>>;
    with_deleted: z.ZodEffects<z.ZodOptional<z.ZodBoolean>, boolean | undefined, unknown>;
    order_id: z.ZodString;
}, "strict", z.ZodTypeAny, {
    offset: number;
    limit: number;
    order_id: string;
    fields?: string | undefined;
    order?: string | undefined;
    with_deleted?: boolean | undefined;
}, {
    order_id: string;
    offset?: unknown;
    limit?: unknown;
    fields?: string | undefined;
    order?: string | undefined;
    with_deleted?: unknown;
}>;
