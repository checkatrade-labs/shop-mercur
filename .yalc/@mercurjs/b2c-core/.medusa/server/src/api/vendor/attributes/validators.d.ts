import { z } from 'zod';
import { AttributeUIComponent } from '@mercurjs/framework';
export type VendorGetAttributesParamsType = z.infer<typeof VendorGetAttributesParams>;
export declare const VendorGetAttributesParams: z.ZodObject<{
    offset: z.ZodEffects<z.ZodDefault<z.ZodOptional<z.ZodNumber>>, number, unknown>;
    limit: z.ZodEffects<z.ZodDefault<z.ZodOptional<z.ZodNumber>>, number, unknown>;
    fields: z.ZodOptional<z.ZodString>;
    order: z.ZodOptional<z.ZodString> | z.ZodDefault<z.ZodOptional<z.ZodString>>;
    with_deleted: z.ZodEffects<z.ZodOptional<z.ZodBoolean>, boolean | undefined, unknown>;
    id: z.ZodOptional<z.ZodString>;
    name: z.ZodOptional<z.ZodString>;
    handle: z.ZodOptional<z.ZodString>;
    ui_component: z.ZodOptional<z.ZodNativeEnum<typeof AttributeUIComponent>>;
}, "strip", z.ZodTypeAny, {
    offset: number;
    limit: number;
    fields?: string | undefined;
    order?: string | undefined;
    with_deleted?: boolean | undefined;
    id?: string | undefined;
    name?: string | undefined;
    handle?: string | undefined;
    ui_component?: AttributeUIComponent | undefined;
}, {
    offset?: unknown;
    limit?: unknown;
    fields?: string | undefined;
    order?: string | undefined;
    with_deleted?: unknown;
    id?: string | undefined;
    name?: string | undefined;
    handle?: string | undefined;
    ui_component?: AttributeUIComponent | undefined;
}>;
