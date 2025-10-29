import { z } from 'zod';
export type VendorGetCustomerGroupsParamsType = z.infer<typeof VendorGetCustomerGroupsParams>;
export declare const VendorGetCustomerGroupsParams: z.ZodObject<{
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
 * @schema VendorCreateCustomerGroup
 * type: object
 * description: Create customer group details
 * properties:
 *   name:
 *     type: string
 *     description: Customer group name
 */
export type VendorCreateCustomerGroupType = z.infer<typeof VendorCreateCustomerGroup>;
export declare const VendorCreateCustomerGroup: z.ZodObject<{
    name: z.ZodString;
}, "strict", z.ZodTypeAny, {
    name: string;
}, {
    name: string;
}>;
/**
 * @schema VendorLinkCustomersToGroup
 * type: object
 * description: Create customer group details
 * properties:
 *   add:
 *     type: array
 *     description: Customer ids to add.
 *     items:
 *       type: string
 *   remove:
 *     type: array
 *     description: Customer ids to remove.
 *     items:
 *       type: string
 */
export type VendorLinkCustomersToGroupType = z.infer<typeof VendorLinkCustomersToGroup>;
export declare const VendorLinkCustomersToGroup: z.ZodObject<{
    add: z.ZodDefault<z.ZodArray<z.ZodString, "many">>;
    remove: z.ZodDefault<z.ZodArray<z.ZodString, "many">>;
}, "strict", z.ZodTypeAny, {
    add: string[];
    remove: string[];
}, {
    add?: string[] | undefined;
    remove?: string[] | undefined;
}>;
