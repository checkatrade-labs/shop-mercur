import { z } from 'zod';
export declare const VendorGetPricePreferencesParamsFields: z.ZodObject<{
    q: z.ZodOptional<z.ZodString>;
    id: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodArray<z.ZodString, "many">]>>;
    attribute: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodArray<z.ZodString, "many">]>>;
    value: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodArray<z.ZodString, "many">]>>;
}, "strip", z.ZodTypeAny, {
    q?: string | undefined;
    id?: string | string[] | undefined;
    attribute?: string | string[] | undefined;
    value?: string | string[] | undefined;
}, {
    q?: string | undefined;
    id?: string | string[] | undefined;
    attribute?: string | string[] | undefined;
    value?: string | string[] | undefined;
}>;
export declare const VendorGetPricePreferencesParams: z.ZodObject<{
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
