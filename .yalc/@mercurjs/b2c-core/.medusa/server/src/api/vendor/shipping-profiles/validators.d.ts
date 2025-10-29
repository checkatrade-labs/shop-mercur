import { z } from 'zod';
export type VendorGetShippingProfilesParamsType = z.infer<typeof VendorGetShippingProfilesParams>;
export declare const VendorGetShippingProfilesParams: z.ZodObject<{
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
 * @schema VendorCreateShippingProfile
 * type: object
 * required:
 *   - name
 *   - type
 * properties:
 *   name:
 *     type: string
 *     description: Name of the shipping profile
 *   type:
 *     type: string
 *     description: Type of the shipping profile
 *   metadata:
 *     type: object
 *     nullable: true
 *     description: Additional metadata
 */
export type VendorCreateShippingProfileType = z.infer<typeof VendorCreateShippingProfile>;
export declare const VendorCreateShippingProfile: z.ZodObject<{
    name: z.ZodString;
    type: z.ZodString;
    metadata: z.ZodOptional<z.ZodNullable<z.ZodRecord<z.ZodString, z.ZodUnknown>>>;
}, "strict", z.ZodTypeAny, {
    type: string;
    name: string;
    metadata?: Record<string, unknown> | null | undefined;
}, {
    type: string;
    name: string;
    metadata?: Record<string, unknown> | null | undefined;
}>;
/**
 * @schema VendorUpdateShippingProfile
 * type: object
 * properties:
 *   name:
 *     type: string
 *     description: Name of the shipping profile
 *   type:
 *     type: string
 *     description: Type of the shipping profile
 *   metadata:
 *     type: object
 *     nullable: true
 *     description: Additional metadata
 */
export type VendorUpdateShippingProfileType = z.infer<typeof VendorUpdateShippingProfile>;
export declare const VendorUpdateShippingProfile: z.ZodObject<{
    name: z.ZodOptional<z.ZodString>;
    type: z.ZodOptional<z.ZodString>;
    metadata: z.ZodOptional<z.ZodNullable<z.ZodRecord<z.ZodString, z.ZodUnknown>>>;
}, "strict", z.ZodTypeAny, {
    name?: string | undefined;
    type?: string | undefined;
    metadata?: Record<string, unknown> | null | undefined;
}, {
    name?: string | undefined;
    type?: string | undefined;
    metadata?: Record<string, unknown> | null | undefined;
}>;
