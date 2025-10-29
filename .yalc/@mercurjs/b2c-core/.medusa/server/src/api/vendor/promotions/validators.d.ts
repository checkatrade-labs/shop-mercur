import { z } from 'zod';
import { ApplicationMethodAllocation, ApplicationMethodTargetType, ApplicationMethodType, PromotionStatus, PromotionType } from '@medusajs/framework/utils';
export type VendorGetPromotionsParamsType = z.infer<typeof VendorGetPromotionsParams>;
export declare const VendorGetPromotionsParams: z.ZodObject<{
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
 * @schema VendorCreatePromotionRule
 * type: object
 * properties:
 *   description:
 *     type: string
 *     description: The description of the rule.
 *   attribute:
 *     type: string
 *     description: The attribute of the rule.
 *   operator:
 *     type: string
 *     enum: [in,eq]
 *     description: The operator of the rule.
 *   values:
 *     type: array
 *     description: Rule values.
 *     items:
 *        type: string
 */
export declare const VendorCreatePromotionRule: z.ZodObject<{
    operator: z.ZodEnum<["in", "eq"]>;
    description: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    attribute: z.ZodString;
    values: z.ZodUnion<[z.ZodString, z.ZodArray<z.ZodString, "many">]>;
}, "strict", z.ZodTypeAny, {
    values: (string | string[]) & (string | string[] | undefined);
    attribute: string;
    operator: "in" | "eq";
    description?: string | null | undefined;
}, {
    values: (string | string[]) & (string | string[] | undefined);
    attribute: string;
    operator: "in" | "eq";
    description?: string | null | undefined;
}>;
/**
 * @schema VendorCreateApplicationMethod
 * type: object
 * properties:
 *   description:
 *     type: string
 *     description: Description of the promotion.
 *   value:
 *     type: number
 *     description: The percentage value of the promotion.
 *   max_quantity:
 *     type: string
 *     description: The max quantity of the items.
 *   apply_to_quantity:
 *     type: string
 *     description: Apply to quantity of the items.
 *   buy_rules_min_quantity:
 *     type: string
 *     description: Buy ruyles min quantity of the items.
 *   type:
 *     type: string
 *     enum: [percentage]
 *     description: The type of the application method.
 *   target_type:
 *     type: string
 *     enum: [items]
 *     description: The target type of the application method.
 *   allocation:
 *     type: string
 *     enum: [each,across]
 *     description: The allocation of the application method.
 *   target_rules:
 *     type: array
 *     description: Promotion target rules.
 *     items:
 *       $ref: "#/components/schemas/VendorCreatePromotionRule"
 */
export declare const VendorCreateApplicationMethod: z.ZodObject<{
    description: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    value: z.ZodNumber;
    max_quantity: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    type: z.ZodLiteral<ApplicationMethodType.PERCENTAGE>;
    target_type: z.ZodLiteral<ApplicationMethodTargetType.ITEMS>;
    allocation: z.ZodNativeEnum<typeof ApplicationMethodAllocation>;
    target_rules: z.ZodArray<z.ZodObject<{
        operator: z.ZodEnum<["in", "eq"]>;
        description: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        attribute: z.ZodString;
        values: z.ZodUnion<[z.ZodString, z.ZodArray<z.ZodString, "many">]>;
    }, "strict", z.ZodTypeAny, {
        values: (string | string[]) & (string | string[] | undefined);
        attribute: string;
        operator: "in" | "eq";
        description?: string | null | undefined;
    }, {
        values: (string | string[]) & (string | string[] | undefined);
        attribute: string;
        operator: "in" | "eq";
        description?: string | null | undefined;
    }>, "many">;
    apply_to_quantity: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    buy_rules_min_quantity: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
}, "strict", z.ZodTypeAny, {
    value: number;
    type: ApplicationMethodType.PERCENTAGE;
    target_type: ApplicationMethodTargetType.ITEMS;
    allocation: ApplicationMethodAllocation;
    target_rules: {
        values: (string | string[]) & (string | string[] | undefined);
        attribute: string;
        operator: "in" | "eq";
        description?: string | null | undefined;
    }[];
    description?: string | null | undefined;
    max_quantity?: number | null | undefined;
    apply_to_quantity?: number | null | undefined;
    buy_rules_min_quantity?: number | null | undefined;
}, {
    value: number;
    type: ApplicationMethodType.PERCENTAGE;
    target_type: ApplicationMethodTargetType.ITEMS;
    allocation: ApplicationMethodAllocation;
    target_rules: {
        values: (string | string[]) & (string | string[] | undefined);
        attribute: string;
        operator: "in" | "eq";
        description?: string | null | undefined;
    }[];
    description?: string | null | undefined;
    max_quantity?: number | null | undefined;
    apply_to_quantity?: number | null | undefined;
    buy_rules_min_quantity?: number | null | undefined;
}>;
/**
 * @schema VendorCreatePromotion
 * type: object
 * properties:
 *   code:
 *     type: string
 *     description: The code of the promotion.
 *   is_automatic:
 *     type: boolean
 *     description: Whether the promotion is applied automatically.
 *     default: false
 *   status:
 *     type: string
 *     enum: [draft,active,inactive]
 *     description: The status of the promotion.
 *   campaign_id:
 *     type: string
 *     description: The campaign id.
 *   campaign:
 *     $ref: "#/components/schemas/VendorCreateCampaign"
 *   type:
 *     type: string
 *     enum: [standard]
 *     description: The type of the promotion.
 *   application_method:
 *     $ref: "#/components/schemas/VendorCreateApplicationMethod"
 *   rules:
 *     type: array
 *     description: Promotion rules.
 *     items:
 *       $ref: "#/components/schemas/VendorCreatePromotionRule"
 */
export type VendorCreatePromotionType = z.infer<typeof VendorCreatePromotion>;
export declare const VendorCreatePromotion: z.ZodObject<{
    code: z.ZodString;
    status: z.ZodDefault<z.ZodNativeEnum<typeof PromotionStatus>>;
    is_automatic: z.ZodDefault<z.ZodBoolean>;
    type: z.ZodLiteral<PromotionType.STANDARD>;
    campaign_id: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    campaign: z.ZodOptional<z.ZodObject<{
        name: z.ZodString;
        campaign_identifier: z.ZodString;
        description: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        budget: z.ZodOptional<z.ZodNullable<z.ZodEffects<z.ZodEffects<z.ZodObject<{
            type: z.ZodNativeEnum<typeof import("@medusajs/framework/utils").CampaignBudgetType>;
            limit: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
            currency_code: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        }, "strict", z.ZodTypeAny, {
            type: import("@medusajs/framework/utils").CampaignBudgetType;
            limit?: number | null | undefined;
            currency_code?: string | null | undefined;
        }, {
            type: import("@medusajs/framework/utils").CampaignBudgetType;
            limit?: number | null | undefined;
            currency_code?: string | null | undefined;
        }>, {
            type: import("@medusajs/framework/utils").CampaignBudgetType;
            limit?: number | null | undefined;
            currency_code?: string | null | undefined;
        }, {
            type: import("@medusajs/framework/utils").CampaignBudgetType;
            limit?: number | null | undefined;
            currency_code?: string | null | undefined;
        }>, {
            type: import("@medusajs/framework/utils").CampaignBudgetType;
            limit?: number | null | undefined;
            currency_code?: string | null | undefined;
        }, {
            type: import("@medusajs/framework/utils").CampaignBudgetType;
            limit?: number | null | undefined;
            currency_code?: string | null | undefined;
        }>>>;
        starts_at: z.ZodOptional<z.ZodNullable<z.ZodDate>>;
        ends_at: z.ZodOptional<z.ZodNullable<z.ZodDate>>;
    }, "strict", z.ZodTypeAny, {
        name: string;
        campaign_identifier: string;
        description?: string | null | undefined;
        budget?: {
            type: import("@medusajs/framework/utils").CampaignBudgetType;
            limit?: number | null | undefined;
            currency_code?: string | null | undefined;
        } | null | undefined;
        starts_at?: Date | null | undefined;
        ends_at?: Date | null | undefined;
    }, {
        name: string;
        campaign_identifier: string;
        description?: string | null | undefined;
        budget?: {
            type: import("@medusajs/framework/utils").CampaignBudgetType;
            limit?: number | null | undefined;
            currency_code?: string | null | undefined;
        } | null | undefined;
        starts_at?: Date | null | undefined;
        ends_at?: Date | null | undefined;
    }>>;
    application_method: z.ZodObject<{
        description: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        value: z.ZodNumber;
        max_quantity: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        type: z.ZodLiteral<ApplicationMethodType.PERCENTAGE>;
        target_type: z.ZodLiteral<ApplicationMethodTargetType.ITEMS>;
        allocation: z.ZodNativeEnum<typeof ApplicationMethodAllocation>;
        target_rules: z.ZodArray<z.ZodObject<{
            operator: z.ZodEnum<["in", "eq"]>;
            description: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            attribute: z.ZodString;
            values: z.ZodUnion<[z.ZodString, z.ZodArray<z.ZodString, "many">]>;
        }, "strict", z.ZodTypeAny, {
            values: (string | string[]) & (string | string[] | undefined);
            attribute: string;
            operator: "in" | "eq";
            description?: string | null | undefined;
        }, {
            values: (string | string[]) & (string | string[] | undefined);
            attribute: string;
            operator: "in" | "eq";
            description?: string | null | undefined;
        }>, "many">;
        apply_to_quantity: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        buy_rules_min_quantity: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    }, "strict", z.ZodTypeAny, {
        value: number;
        type: ApplicationMethodType.PERCENTAGE;
        target_type: ApplicationMethodTargetType.ITEMS;
        allocation: ApplicationMethodAllocation;
        target_rules: {
            values: (string | string[]) & (string | string[] | undefined);
            attribute: string;
            operator: "in" | "eq";
            description?: string | null | undefined;
        }[];
        description?: string | null | undefined;
        max_quantity?: number | null | undefined;
        apply_to_quantity?: number | null | undefined;
        buy_rules_min_quantity?: number | null | undefined;
    }, {
        value: number;
        type: ApplicationMethodType.PERCENTAGE;
        target_type: ApplicationMethodTargetType.ITEMS;
        allocation: ApplicationMethodAllocation;
        target_rules: {
            values: (string | string[]) & (string | string[] | undefined);
            attribute: string;
            operator: "in" | "eq";
            description?: string | null | undefined;
        }[];
        description?: string | null | undefined;
        max_quantity?: number | null | undefined;
        apply_to_quantity?: number | null | undefined;
        buy_rules_min_quantity?: number | null | undefined;
    }>;
    rules: z.ZodOptional<z.ZodArray<z.ZodObject<{
        operator: z.ZodEnum<["in", "eq"]>;
        description: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        attribute: z.ZodString;
        values: z.ZodUnion<[z.ZodString, z.ZodArray<z.ZodString, "many">]>;
    }, "strict", z.ZodTypeAny, {
        values: (string | string[]) & (string | string[] | undefined);
        attribute: string;
        operator: "in" | "eq";
        description?: string | null | undefined;
    }, {
        values: (string | string[]) & (string | string[] | undefined);
        attribute: string;
        operator: "in" | "eq";
        description?: string | null | undefined;
    }>, "many">>;
}, "strict", z.ZodTypeAny, {
    status: PromotionStatus;
    code: string;
    type: PromotionType.STANDARD;
    is_automatic: boolean;
    application_method: {
        value: number;
        type: ApplicationMethodType.PERCENTAGE;
        target_type: ApplicationMethodTargetType.ITEMS;
        allocation: ApplicationMethodAllocation;
        target_rules: {
            values: (string | string[]) & (string | string[] | undefined);
            attribute: string;
            operator: "in" | "eq";
            description?: string | null | undefined;
        }[];
        description?: string | null | undefined;
        max_quantity?: number | null | undefined;
        apply_to_quantity?: number | null | undefined;
        buy_rules_min_quantity?: number | null | undefined;
    };
    campaign_id?: string | null | undefined;
    campaign?: {
        name: string;
        campaign_identifier: string;
        description?: string | null | undefined;
        budget?: {
            type: import("@medusajs/framework/utils").CampaignBudgetType;
            limit?: number | null | undefined;
            currency_code?: string | null | undefined;
        } | null | undefined;
        starts_at?: Date | null | undefined;
        ends_at?: Date | null | undefined;
    } | undefined;
    rules?: {
        values: (string | string[]) & (string | string[] | undefined);
        attribute: string;
        operator: "in" | "eq";
        description?: string | null | undefined;
    }[] | undefined;
}, {
    code: string;
    type: PromotionType.STANDARD;
    application_method: {
        value: number;
        type: ApplicationMethodType.PERCENTAGE;
        target_type: ApplicationMethodTargetType.ITEMS;
        allocation: ApplicationMethodAllocation;
        target_rules: {
            values: (string | string[]) & (string | string[] | undefined);
            attribute: string;
            operator: "in" | "eq";
            description?: string | null | undefined;
        }[];
        description?: string | null | undefined;
        max_quantity?: number | null | undefined;
        apply_to_quantity?: number | null | undefined;
        buy_rules_min_quantity?: number | null | undefined;
    };
    status?: PromotionStatus | undefined;
    is_automatic?: boolean | undefined;
    campaign_id?: string | null | undefined;
    campaign?: {
        name: string;
        campaign_identifier: string;
        description?: string | null | undefined;
        budget?: {
            type: import("@medusajs/framework/utils").CampaignBudgetType;
            limit?: number | null | undefined;
            currency_code?: string | null | undefined;
        } | null | undefined;
        starts_at?: Date | null | undefined;
        ends_at?: Date | null | undefined;
    } | undefined;
    rules?: {
        values: (string | string[]) & (string | string[] | undefined);
        attribute: string;
        operator: "in" | "eq";
        description?: string | null | undefined;
    }[] | undefined;
}>;
/**
 * @schema VendorBatchPromotionRule
 * type: object
 * properties:
 *   create:
 *     type: array
 *     description: Rules to create.
 *     items:
 *       $ref: "#/components/schemas/VendorCreatePromotionRule"
 *   delete:
 *     type: array
 *     description: Rules to delete.
 *     items:
 *       type: string
 */
export type VendorBatchPromotionRulesType = z.infer<typeof VendorBatchPromotionRules>;
export declare const VendorBatchPromotionRules: z.ZodObject<{
    create: z.ZodDefault<z.ZodArray<z.ZodObject<{
        operator: z.ZodEnum<["in", "eq"]>;
        description: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        attribute: z.ZodString;
        values: z.ZodUnion<[z.ZodString, z.ZodArray<z.ZodString, "many">]>;
    }, "strict", z.ZodTypeAny, {
        values: (string | string[]) & (string | string[] | undefined);
        attribute: string;
        operator: "in" | "eq";
        description?: string | null | undefined;
    }, {
        values: (string | string[]) & (string | string[] | undefined);
        attribute: string;
        operator: "in" | "eq";
        description?: string | null | undefined;
    }>, "many">>;
    delete: z.ZodDefault<z.ZodArray<z.ZodString, "many">>;
}, "strip", z.ZodTypeAny, {
    delete: string[];
    create: {
        values: (string | string[]) & (string | string[] | undefined);
        attribute: string;
        operator: "in" | "eq";
        description?: string | null | undefined;
    }[];
}, {
    create?: {
        values: (string | string[]) & (string | string[] | undefined);
        attribute: string;
        operator: "in" | "eq";
        description?: string | null | undefined;
    }[] | undefined;
    delete?: string[] | undefined;
}>;
/**
 * @schema VendorUpdateApplicationMethod
 * type: object
 * properties:
 *   description:
 *     type: string
 *     description: Description of the promotion.
 *   value:
 *     type: number
 *     description: The percentage value of the promotion.
 *   max_quantity:
 *     type: string
 *     description: The max quantity of the items.
 *   currency_code:
 *     type: string
 *     description: The currency code.
 *   apply_to_quantity:
 *     type: string
 *     description: Apply to quantity of the items.
 *   buy_rules_min_quantity:
 *     type: string
 *     description: Buy ruyles min quantity of the items.
 */
export type VendorUpdateApplicationMethodType = z.infer<typeof VendorUpdateApplicationMethod>;
export declare const VendorUpdateApplicationMethod: z.ZodObject<{
    description: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    value: z.ZodOptional<z.ZodNumber>;
    max_quantity: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    currency_code: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    apply_to_quantity: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    buy_rules_min_quantity: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
}, "strict", z.ZodTypeAny, {
    description?: string | null | undefined;
    value?: number | undefined;
    max_quantity?: number | null | undefined;
    currency_code?: string | null | undefined;
    apply_to_quantity?: number | null | undefined;
    buy_rules_min_quantity?: number | null | undefined;
}, {
    description?: string | null | undefined;
    value?: number | undefined;
    max_quantity?: number | null | undefined;
    currency_code?: string | null | undefined;
    apply_to_quantity?: number | null | undefined;
    buy_rules_min_quantity?: number | null | undefined;
}>;
/**
 * @schema VendorUpdatePromotion
 * type: object
 * properties:
 *   code:
 *     type: string
 *     description: The code of the promotion.
 *   is_automatic:
 *     type: boolean
 *     description: Whether the promotion is applied automatically.
 *     default: false
 *   campaign_id:
 *     type: string
 *     description: The campaign id.
 *   status:
 *     type: string
 *     enum: [draft,active,inactive]
 *     description: The status of the promotion.
 *   application_method:
 *     $ref: "#/components/schemas/VendorUpdateApplicationMethod"
 */
export type VendorUpdatePromotionType = z.infer<typeof VendorUpdatePromotion>;
export declare const VendorUpdatePromotion: z.ZodObject<{
    code: z.ZodOptional<z.ZodString>;
    is_automatic: z.ZodOptional<z.ZodBoolean>;
    status: z.ZodOptional<z.ZodNativeEnum<typeof PromotionStatus>>;
    campaign_id: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    application_method: z.ZodOptional<z.ZodObject<{
        description: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        value: z.ZodOptional<z.ZodNumber>;
        max_quantity: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        currency_code: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        apply_to_quantity: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        buy_rules_min_quantity: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    }, "strict", z.ZodTypeAny, {
        description?: string | null | undefined;
        value?: number | undefined;
        max_quantity?: number | null | undefined;
        currency_code?: string | null | undefined;
        apply_to_quantity?: number | null | undefined;
        buy_rules_min_quantity?: number | null | undefined;
    }, {
        description?: string | null | undefined;
        value?: number | undefined;
        max_quantity?: number | null | undefined;
        currency_code?: string | null | undefined;
        apply_to_quantity?: number | null | undefined;
        buy_rules_min_quantity?: number | null | undefined;
    }>>;
}, "strict", z.ZodTypeAny, {
    code?: string | undefined;
    is_automatic?: boolean | undefined;
    status?: PromotionStatus | undefined;
    campaign_id?: string | null | undefined;
    application_method?: {
        description?: string | null | undefined;
        value?: number | undefined;
        max_quantity?: number | null | undefined;
        currency_code?: string | null | undefined;
        apply_to_quantity?: number | null | undefined;
        buy_rules_min_quantity?: number | null | undefined;
    } | undefined;
}, {
    code?: string | undefined;
    is_automatic?: boolean | undefined;
    status?: PromotionStatus | undefined;
    campaign_id?: string | null | undefined;
    application_method?: {
        description?: string | null | undefined;
        value?: number | undefined;
        max_quantity?: number | null | undefined;
        currency_code?: string | null | undefined;
        apply_to_quantity?: number | null | undefined;
        buy_rules_min_quantity?: number | null | undefined;
    } | undefined;
}>;
export type VendorGetPromotionsRuleValueParamsType = z.infer<typeof VendorGetPromotionsRuleValueParams>;
export declare const VendorGetPromotionsRuleValueParams: z.ZodObject<{
    offset: z.ZodEffects<z.ZodDefault<z.ZodOptional<z.ZodNumber>>, number, unknown>;
    limit: z.ZodEffects<z.ZodDefault<z.ZodOptional<z.ZodNumber>>, number, unknown>;
    fields: z.ZodOptional<z.ZodString>;
    order: z.ZodOptional<z.ZodString> | z.ZodDefault<z.ZodOptional<z.ZodString>>;
    with_deleted: z.ZodEffects<z.ZodOptional<z.ZodBoolean>, boolean | undefined, unknown>;
    q: z.ZodOptional<z.ZodString>;
    value: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodArray<z.ZodString, "many">]>>;
}, "strip", z.ZodTypeAny, {
    offset: number;
    limit: number;
    fields?: string | undefined;
    order?: string | undefined;
    with_deleted?: boolean | undefined;
    q?: string | undefined;
    value?: string | string[] | undefined;
}, {
    offset?: unknown;
    limit?: unknown;
    fields?: string | undefined;
    order?: string | undefined;
    with_deleted?: unknown;
    q?: string | undefined;
    value?: string | string[] | undefined;
}>;
export type VendorGetPromotionRuleParamsType = z.infer<typeof VendorGetPromotionRuleParams>;
export declare const VendorGetPromotionRuleParams: z.ZodObject<{
    promotion_type: z.ZodOptional<z.ZodString>;
    application_method_type: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    promotion_type?: string | undefined;
    application_method_type?: string | undefined;
}, {
    promotion_type?: string | undefined;
    application_method_type?: string | undefined;
}>;
export type VendorGetPromotionRuleTypeParamsType = z.infer<typeof VendorGetPromotionRuleTypeParams>;
export declare const VendorGetPromotionRuleTypeParams: z.ZodObject<{
    fields: z.ZodOptional<z.ZodString>;
    promotion_type: z.ZodOptional<z.ZodString>;
    application_method_type: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    fields?: string | undefined;
    promotion_type?: string | undefined;
    application_method_type?: string | undefined;
}, {
    fields?: string | undefined;
    promotion_type?: string | undefined;
    application_method_type?: string | undefined;
}>;
