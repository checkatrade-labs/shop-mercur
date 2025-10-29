import { z } from 'zod';
import { MemberRole } from '@mercurjs/framework';
export type VendorGetMemberInviteParamsType = z.infer<typeof VendorGetMemberInviteParams>;
export declare const VendorGetMemberInviteParams: z.ZodObject<{
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
 * @schema VendorInviteMember
 * type: object
 * required:
 *   - email
 *   - role
 * properties:
 *   email:
 *     type: string
 *     format: email
 *     description: The email address of the member to invite.
 *   role:
 *     type: string
 *     enum: [owner, admin, member]
 *     description: The role to assign to the invited member.
 */
export type VendorInviteMemberType = z.infer<typeof VendorInviteMember>;
export declare const VendorInviteMember: z.ZodObject<{
    email: z.ZodString;
    role: z.ZodNativeEnum<typeof MemberRole>;
}, "strict", z.ZodTypeAny, {
    email: string;
    role: MemberRole;
}, {
    email: string;
    role: MemberRole;
}>;
/**
 * @schema VendorAcceptMemberInvite
 * type: object
 * required:
 *   - name
 *   - token
 * properties:
 *   token:
 *     type: string
 *     description: The invitation token to accept.
 *   name:
 *     type: string
 *     description: The name of the member accepting the invite.
 */
export type VendorAcceptMemberInviteType = z.infer<typeof VendorAcceptMemberInvite>;
export declare const VendorAcceptMemberInvite: z.ZodObject<{
    token: z.ZodString;
    name: z.ZodString;
}, "strict", z.ZodTypeAny, {
    name: string;
    token: string;
}, {
    name: string;
    token: string;
}>;
