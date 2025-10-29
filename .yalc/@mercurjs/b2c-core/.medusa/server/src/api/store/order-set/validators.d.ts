export declare const StoreGetOrderSetParams: import("zod").ZodObject<{
    fields: import("zod").ZodOptional<import("zod").ZodString>;
    offset: import("zod").ZodEffects<import("zod").ZodDefault<import("zod").ZodOptional<import("zod").ZodNumber>>, number, unknown>;
    limit: import("zod").ZodEffects<import("zod").ZodDefault<import("zod").ZodOptional<import("zod").ZodNumber>>, number, unknown>;
    order: import("zod").ZodOptional<import("zod").ZodString> | import("zod").ZodDefault<import("zod").ZodOptional<import("zod").ZodString>>;
    with_deleted: import("zod").ZodEffects<import("zod").ZodOptional<import("zod").ZodBoolean>, boolean | undefined, unknown>;
}, "strip", import("zod").ZodTypeAny, {
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
