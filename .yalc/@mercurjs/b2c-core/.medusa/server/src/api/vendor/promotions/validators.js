"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VendorGetPromotionRuleTypeParams = exports.VendorGetPromotionRuleParams = exports.VendorGetPromotionsRuleValueParams = exports.VendorUpdatePromotion = exports.VendorUpdateApplicationMethod = exports.VendorBatchPromotionRules = exports.VendorCreatePromotion = exports.VendorCreateApplicationMethod = exports.VendorCreatePromotionRule = exports.VendorGetPromotionsParams = void 0;
const zod_1 = require("zod");
const utils_1 = require("@medusajs/framework/utils");
const validators_1 = require("@medusajs/medusa/api/utils/validators");
const validators_2 = require("../campaigns/validators");
exports.VendorGetPromotionsParams = (0, validators_1.createFindParams)({
    offset: 0,
    limit: 50
});
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
exports.VendorCreatePromotionRule = zod_1.z
    .object({
    operator: zod_1.z.enum(['in', 'eq']),
    description: zod_1.z.string().nullish(),
    attribute: zod_1.z.string(),
    values: zod_1.z.union([zod_1.z.string(), zod_1.z.array(zod_1.z.string())])
})
    .strict();
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
exports.VendorCreateApplicationMethod = zod_1.z
    .object({
    description: zod_1.z.string().nullish(),
    value: zod_1.z.number(),
    max_quantity: zod_1.z.number().nullish(),
    type: zod_1.z.literal(utils_1.ApplicationMethodType.PERCENTAGE),
    target_type: zod_1.z.literal(utils_1.ApplicationMethodTargetType.ITEMS),
    allocation: zod_1.z.nativeEnum(utils_1.ApplicationMethodAllocation),
    target_rules: zod_1.z.array(exports.VendorCreatePromotionRule),
    apply_to_quantity: zod_1.z.number().nullish(),
    buy_rules_min_quantity: zod_1.z.number().nullish()
})
    .strict();
exports.VendorCreatePromotion = zod_1.z
    .object({
    code: zod_1.z.string(),
    status: zod_1.z.nativeEnum(utils_1.PromotionStatus).default(utils_1.PromotionStatus.DRAFT),
    is_automatic: zod_1.z.boolean().default(false),
    type: zod_1.z.literal(utils_1.PromotionType.STANDARD),
    campaign_id: zod_1.z.string().nullish(),
    campaign: validators_2.VendorCreateCampaign.optional(),
    application_method: exports.VendorCreateApplicationMethod,
    rules: zod_1.z.array(exports.VendorCreatePromotionRule).optional()
})
    .strict();
exports.VendorBatchPromotionRules = zod_1.z.object({
    create: zod_1.z.array(exports.VendorCreatePromotionRule).default([]),
    delete: zod_1.z.array(zod_1.z.string()).default([])
});
exports.VendorUpdateApplicationMethod = zod_1.z
    .object({
    description: zod_1.z.string().nullish(),
    value: zod_1.z.number().optional(),
    max_quantity: zod_1.z.number().nullish(),
    currency_code: zod_1.z.string().nullish(),
    apply_to_quantity: zod_1.z.number().nullish(),
    buy_rules_min_quantity: zod_1.z.number().nullish()
})
    .strict();
exports.VendorUpdatePromotion = zod_1.z
    .object({
    code: zod_1.z.string().optional(),
    is_automatic: zod_1.z.boolean().optional(),
    status: zod_1.z.nativeEnum(utils_1.PromotionStatus).optional(),
    campaign_id: zod_1.z.string().nullish(),
    application_method: exports.VendorUpdateApplicationMethod.optional()
})
    .strict();
exports.VendorGetPromotionsRuleValueParams = (0, validators_1.createFindParams)({
    limit: 100,
    offset: 0
}).merge(zod_1.z.object({
    q: zod_1.z.string().optional(),
    value: zod_1.z.union([zod_1.z.string(), zod_1.z.array(zod_1.z.string())]).optional()
}));
exports.VendorGetPromotionRuleParams = zod_1.z.object({
    promotion_type: zod_1.z.string().optional(),
    application_method_type: zod_1.z.string().optional()
});
exports.VendorGetPromotionRuleTypeParams = (0, validators_1.createSelectParams)().merge(zod_1.z.object({
    promotion_type: zod_1.z.string().optional(),
    application_method_type: zod_1.z.string().optional()
}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsaWRhdG9ycy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hcGkvdmVuZG9yL3Byb21vdGlvbnMvdmFsaWRhdG9ycy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSw2QkFBdUI7QUFFdkIscURBTWtDO0FBQ2xDLHNFQUc4QztBQUU5Qyx3REFBOEQ7QUFLakQsUUFBQSx5QkFBeUIsR0FBRyxJQUFBLDZCQUFnQixFQUFDO0lBQ3hELE1BQU0sRUFBRSxDQUFDO0lBQ1QsS0FBSyxFQUFFLEVBQUU7Q0FDVixDQUFDLENBQUE7QUFFRjs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQW1CRztBQUNVLFFBQUEseUJBQXlCLEdBQUcsT0FBQztLQUN2QyxNQUFNLENBQUM7SUFDTixRQUFRLEVBQUUsT0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztJQUM5QixXQUFXLEVBQUUsT0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDLE9BQU8sRUFBRTtJQUNqQyxTQUFTLEVBQUUsT0FBQyxDQUFDLE1BQU0sRUFBRTtJQUNyQixNQUFNLEVBQUUsT0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLE9BQUMsQ0FBQyxNQUFNLEVBQUUsRUFBRSxPQUFDLENBQUMsS0FBSyxDQUFDLE9BQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDLENBQUM7Q0FDbkQsQ0FBQztLQUNELE1BQU0sRUFBRSxDQUFBO0FBRVg7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQW9DRztBQUNVLFFBQUEsNkJBQTZCLEdBQUcsT0FBQztLQUMzQyxNQUFNLENBQUM7SUFDTixXQUFXLEVBQUUsT0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDLE9BQU8sRUFBRTtJQUNqQyxLQUFLLEVBQUUsT0FBQyxDQUFDLE1BQU0sRUFBRTtJQUNqQixZQUFZLEVBQUUsT0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDLE9BQU8sRUFBRTtJ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