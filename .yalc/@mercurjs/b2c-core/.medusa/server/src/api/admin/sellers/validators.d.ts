import { z } from 'zod';
import { StoreStatus } from '@mercurjs/framework';
export type AdminSellerParamsType = z.infer<typeof AdminSellerParams>;
export declare const AdminSellerParams: z.ZodObject<{
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
export type AdminGetSellerProductsParamsType = z.infer<typeof AdminGetSellerProductsParams>;
export declare const AdminGetSellerProductsParams: z.ZodObject<{
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
export type AdminGetSellerOrdersParamsType = z.infer<typeof AdminGetSellerOrdersParams>;
export declare const AdminGetSellerOrdersParams: z.ZodObject<{
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
export type AdminGetSellerCustomerGroupsParamsType = z.infer<typeof AdminGetSellerCustomerGroupsParams>;
export declare const AdminGetSellerCustomerGroupsParams: z.ZodObject<{
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
export type AdminUpdateSellerType = z.infer<typeof AdminUpdateSeller>;
export declare const AdminUpdateSeller: z.ZodObject<{
    name: z.ZodOptional<z.ZodEffects<z.ZodString, string, unknown>>;
    description: z.ZodOptional<z.ZodString>;
    photo: z.ZodOptional<z.ZodString>;
    email: z.ZodOptional<z.ZodString>;
    phone: z.ZodOptional<z.ZodString>;
    address_line: z.ZodOptional<z.ZodString>;
    city: z.ZodOptional<z.ZodString>;
    state: z.ZodOptional<z.ZodString>;
    postal_code: z.ZodOptional<z.ZodString>;
    country_code: z.ZodOptional<z.ZodString>;
    tax_id: z.ZodOptional<z.ZodString>;
    store_status: z.ZodOptional<z.ZodNativeEnum<typeof StoreStatus>>;
}, "strict", z.ZodTypeAny, {
    name?: string | undefined;
    description?: string | undefined;
    photo?: string | undefined;
    email?: string | undefined;
    phone?: string | undefined;
    address_line?: string | undefined;
    city?: string | undefined;
    state?: string | undefined;
    postal_code?: string | undefined;
    country_code?: string | undefined;
    tax_id?: string | undefined;
    store_status?: StoreStatus | undefined;
}, {
    name?: unknown;
    description?: string | undefined;
    photo?: string | undefined;
    email?: string | undefined;
    phone?: string | undefined;
    address_line?: string | undefined;
    city?: string | undefined;
    state?: string | undefined;
    postal_code?: string | undefined;
    country_code?: string | undefined;
    tax_id?: string | undefined;
    store_status?: StoreStatus | undefined;
}>;
export type AdminInviteSellerType = z.infer<typeof AdminInviteSeller>;
export declare const AdminInviteSeller: z.ZodObject<{
    email: z.ZodString;
    registration_url: z.ZodDefault<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    email: string;
    registration_url: string;
}, {
    email: string;
    registration_url?: string | undefined;
}>;
