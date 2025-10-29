import { z } from 'zod';
import { CampaignBudgetType } from '@medusajs/framework/utils';
export type VendorGetCampaignsParamsType = z.infer<typeof VendorGetCampaignsParams>;
export declare const VendorGetCampaignsParams: z.ZodObject<{
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
 * @schema VendorCreateCampaignBudget
 * type: object
 * properties:
 *   type:
 *     type: string
 *     enum: [spend,usage]
 *     description: The budget's type.
 *   limit:
 *     type: number
 *     description: The buget's limit.
 *   currency_code:
 *     type: string
 *     description: The budget's currency_code.
 */
export declare const VendorCreateCampaignBudget: z.ZodEffects<z.ZodEffects<z.ZodObject<{
    type: z.ZodNativeEnum<typeof CampaignBudgetType>;
    limit: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    currency_code: z.ZodOptional<z.ZodNullable<z.ZodString>>;
}, "strict", z.ZodTypeAny, {
    type: CampaignBudgetType;
    limit?: number | null | undefined;
    currency_code?: string | null | undefined;
}, {
    type: CampaignBudgetType;
    limit?: number | null | undefined;
    currency_code?: string | null | undefined;
}>, {
    type: CampaignBudgetType;
    limit?: number | null | undefined;
    currency_code?: string | null | undefined;
}, {
    type: CampaignBudgetType;
    limit?: number | null | undefined;
    currency_code?: string | null | undefined;
}>, {
    type: CampaignBudgetType;
    limit?: number | null | undefined;
    currency_code?: string | null | undefined;
}, {
    type: CampaignBudgetType;
    limit?: number | null | undefined;
    currency_code?: string | null | undefined;
}>;
/**
 * @schema VendorCreateCampaign
 * type: object
 * properties:
 *   name:
 *     type: string
 *     description: The campaign's name.
 *   campaign_identifier:
 *     type: string
 *     description: The campaign's identifier.
 *   description:
 *     type: string
 *     description: The campaign's description.
 *   starts_at:
 *     type: string
 *     description: The date and time that the campaign starts.
 *   ends_at:
 *     type: string
 *     description: The date and time that the campaign ends.
 *   budget:
 *     $ref: "#/components/schemas/VendorCreateCampaignBudget"
 */
export type VendorCreateCampaignType = z.infer<typeof VendorCreateCampaign>;
export declare const VendorCreateCampaign: z.ZodObject<{
    name: z.ZodString;
    campaign_identifier: z.ZodString;
    description: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    budget: z.ZodOptional<z.ZodNullable<z.ZodEffects<z.ZodEffects<z.ZodObject<{
        type: z.ZodNativeEnum<typeof CampaignBudgetType>;
        limit: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        currency_code: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    }, "strict", z.ZodTypeAny, {
        type: CampaignBudgetType;
        limit?: number | null | undefined;
        currency_code?: string | null | undefined;
    }, {
        type: CampaignBudgetType;
        limit?: number | null | undefined;
        currency_code?: string | null | undefined;
    }>, {
        type: CampaignBudgetType;
        limit?: number | null | undefined;
        currency_code?: string | null | undefined;
    }, {
        type: CampaignBudgetType;
        limit?: number | null | undefined;
        currency_code?: string | null | undefined;
    }>, {
        type: CampaignBudgetType;
        limit?: number | null | undefined;
        currency_code?: string | null | undefined;
    }, {
        type: CampaignBudgetType;
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
        type: CampaignBudgetType;
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
        type: CampaignBudgetType;
        limit?: number | null | undefined;
        currency_code?: string | null | undefined;
    } | null | undefined;
    starts_at?: Date | null | undefined;
    ends_at?: Date | null | undefined;
}>;
/**
 * @schema VendorUpdateCampaign
 * type: object
 * properties:
 *   name:
 *     type: string
 *     description: The campaign's name.
 *   campaign_identifier:
 *     type: string
 *     description: The campaign's identifier.
 *   description:
 *     type: string
 *     description: The campaign's description.
 *   starts_at:
 *     type: string
 *     description: The date and time that the campaign starts.
 *   ends_at:
 *     type: string
 *     description: The date and time that the campaign ends.
 *   budget:
 *     type: object
 *     properties:
 *       limit:
 *         type: number
 *         description: The buget's limit.
 */
export type VendorUpdateCampaignType = z.infer<typeof VendorUpdateCampaign>;
export declare const VendorUpdateCampaign: z.ZodObject<{
    name: z.ZodOptional<z.ZodString>;
    campaign_identifier: z.ZodOptional<z.ZodString>;
    description: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    budget: z.ZodOptional<z.ZodObject<{
        limit: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    }, "strip", z.ZodTypeAny, {
        limit?: number | null | undefined;
    }, {
        limit?: number | null | undefined;
    }>>;
    starts_at: z.ZodOptional<z.ZodNullable<z.ZodDate>>;
    ends_at: z.ZodOptional<z.ZodNullable<z.ZodDate>>;
}, "strip", z.ZodTypeAny, {
    name?: string | undefined;
    campaign_identifier?: string | undefined;
    description?: string | null | undefined;
    budget?: {
        limit?: number | null | undefined;
    } | undefined;
    starts_at?: Date | null | undefined;
    ends_at?: Date | null | undefined;
}, {
    name?: string | undefined;
    campaign_identifier?: string | undefined;
    description?: string | null | undefined;
    budget?: {
        limit?: number | null | undefined;
    } | undefined;
    starts_at?: Date | null | undefined;
    ends_at?: Date | null | undefined;
}>;
