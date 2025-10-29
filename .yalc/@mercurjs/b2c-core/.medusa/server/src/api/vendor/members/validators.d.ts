import { z } from 'zod';
export type VendorGetMemberParamsType = z.infer<typeof VendorGetMemberParams>;
export declare const VendorGetMemberParams: z.ZodObject<{
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
 * @schema VendorUpdateMember
 * type: object
 * properties:
 *   name:
 *     type: string
 *     description: The name of the member.
 *   bio:
 *     type: string
 *     nullable: true
 *     description: The member's biography.
 *   phone:
 *     type: string
 *     nullable: true
 *     description: The member's phone number.
 *   photo:
 *     type: string
 *     nullable: true
 *     description: URL to the member's photo.
 */
export type VendorUpdateMemberType = z.infer<typeof VendorUpdateMember>;
export declare const VendorUpdateMember: z.ZodObject<{
    name: z.ZodOptional<z.ZodString>;
    bio: z.ZodOptional<z.ZodString>;
    phone: z.ZodOptional<z.ZodString>;
    photo: z.ZodOptional<z.ZodString>;
}, "strict", z.ZodTypeAny, {
    name?: string | undefined;
    bio?: string | undefined;
    phone?: string | undefined;
    photo?: string | undefined;
}, {
    name?: string | undefined;
    bio?: string | undefined;
    phone?: string | undefined;
    photo?: string | undefined;
}>;
