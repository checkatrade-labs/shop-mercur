import { z } from 'zod';
export type VendorGetProductTagParamsType = z.infer<typeof VendorGetProductTagParams>;
export declare const VendorGetProductTagParams: z.ZodObject<{
    fields: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    fields?: string | undefined;
}, {
    fields?: string | undefined;
}>;
export declare const VendorGetProductTagsParamsFields: z.ZodObject<{
    q: z.ZodOptional<z.ZodString>;
    id: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodArray<z.ZodString, "many">]>>;
    value: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodArray<z.ZodString, "many">]>>;
}, "strip", z.ZodTypeAny, {
    q?: string | undefined;
    id?: string | string[] | undefined;
    value?: string | string[] | undefined;
}, {
    q?: string | undefined;
    id?: string | string[] | undefined;
    value?: string | string[] | undefined;
}>;
export type VendorGetProductTagsParamsType = z.infer<typeof VendorGetProductTagsParams>;
export declare const VendorGetProductTagsParams: z.ZodObject<{
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
 * @schema VendorCreateProductTag
 * type: object
 * required:
 *   - value
 * properties:
 *   value:
 *     type: string
 *     description: The title of the product tag.
 *   metadata:
 *     type: object
 *     description: Product tag metadata.
 */
export type VendorCreateProductTagType = z.infer<typeof VendorCreateProductTag>;
export declare const VendorCreateProductTag: z.ZodObject<{
    value: z.ZodString;
    metadata: z.ZodOptional<z.ZodNullable<z.ZodRecord<z.ZodString, z.ZodUnknown>>>;
}, "strict", z.ZodTypeAny, {
    value: string;
    metadata?: Record<string, unknown> | null | undefined;
}, {
    value: string;
    metadata?: Record<string, unknown> | null | undefined;
}>;
