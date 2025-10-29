import { z } from 'zod';
export type AdminOrderSetParamsType = z.infer<typeof AdminOrderSetParams>;
export declare const AdminOrderSetParams: z.ZodObject<{
    offset: z.ZodEffects<z.ZodDefault<z.ZodOptional<z.ZodNumber>>, number, unknown>;
    limit: z.ZodEffects<z.ZodDefault<z.ZodOptional<z.ZodNumber>>, number, unknown>;
    fields: z.ZodOptional<z.ZodString>;
    order: z.ZodOptional<z.ZodString> | z.ZodDefault<z.ZodOptional<z.ZodString>>;
    with_deleted: z.ZodEffects<z.ZodOptional<z.ZodBoolean>, boolean | undefined, unknown>;
    order_id: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    offset: number;
    limit: number;
    fields?: string | undefined;
    order?: string | undefined;
    with_deleted?: boolean | undefined;
    order_id?: string | undefined;
}, {
    offset?: unknown;
    limit?: unknown;
    fields?: string | undefined;
    order?: string | undefined;
    with_deleted?: unknown;
    order_id?: string | undefined;
}>;
