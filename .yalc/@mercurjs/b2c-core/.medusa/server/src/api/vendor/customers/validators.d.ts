import { z } from 'zod';
export type VendorGetCustomersParamsType = z.infer<typeof VendorGetCustomersParams>;
export declare const VendorGetCustomersParams: z.ZodObject<{
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
export type VendorGetCustomerOrdersParamsType = z.infer<typeof VendorGetCustomerOrdersParams>;
export declare const VendorGetCustomerOrdersParams: z.ZodObject<{
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
 * @schema VendorUpdateCustomersCustomerGroups
 * type: object
 * description: Update customers customer groups
 * properties:
 *   add:
 *     type: array
 *     description: Customer group ids to add.
 *     items:
 *       type: string
 *   remove:
 *     type: array
 *     description: Customer group ids to remove.
 *     items:
 *       type: string
 */
export type VendorUpdateCustomerGroupsType = z.infer<typeof VendorUpdateCustomerGroups>;
export declare const VendorUpdateCustomerGroups: z.ZodObject<{
    add: z.ZodArray<z.ZodString, "many">;
    remove: z.ZodArray<z.ZodString, "many">;
}, "strip", z.ZodTypeAny, {
    add: string[];
    remove: string[];
}, {
    add: string[];
    remove: string[];
}>;
