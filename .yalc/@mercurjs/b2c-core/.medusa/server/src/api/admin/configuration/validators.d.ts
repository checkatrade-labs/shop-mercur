import { z } from 'zod';
import { ConfigurationRuleType } from '@mercurjs/framework';
export type AdminGetRulesParamsType = z.infer<typeof AdminGetRulesParams>;
export declare const AdminGetRulesParams: z.ZodObject<{
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
 * @schema AdminCreateRule
 * type: object
 * properties:
 *   rule_type:
 *     type: string
 *     description: The type of the rule
 *     enum: [global_product_catalog,require_product_approval,product_request_enabled,product_import_enabled]
 *   is_enabled:
 *     type: boolean
 */
export type AdminCreateRuleType = z.infer<typeof AdminCreateRule>;
export declare const AdminCreateRule: z.ZodObject<{
    rule_type: z.ZodNativeEnum<typeof ConfigurationRuleType>;
    is_enabled: z.ZodBoolean;
}, "strip", z.ZodTypeAny, {
    rule_type: ConfigurationRuleType;
    is_enabled: boolean;
}, {
    rule_type: ConfigurationRuleType;
    is_enabled: boolean;
}>;
/**
 * @schema AdminUpdateRule
 * type: object
 * properties:
 *   is_enabled:
 *     type: boolean
 */
export type AdminUpdateRuleType = z.infer<typeof AdminUpdateRule>;
export declare const AdminUpdateRule: z.ZodObject<{
    is_enabled: z.ZodBoolean;
}, "strip", z.ZodTypeAny, {
    is_enabled: boolean;
}, {
    is_enabled: boolean;
}>;
