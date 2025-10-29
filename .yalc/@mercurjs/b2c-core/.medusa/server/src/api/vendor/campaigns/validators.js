"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VendorUpdateCampaign = exports.VendorCreateCampaign = exports.VendorCreateCampaignBudget = exports.VendorGetCampaignsParams = void 0;
const zod_1 = require("zod");
const utils_1 = require("@medusajs/framework/utils");
const validators_1 = require("@medusajs/medusa/api/utils/validators");
exports.VendorGetCampaignsParams = (0, validators_1.createFindParams)({
    offset: 0,
    limit: 50
});
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
exports.VendorCreateCampaignBudget = zod_1.z
    .object({
    type: zod_1.z.nativeEnum(utils_1.CampaignBudgetType),
    limit: zod_1.z.number().nullish(),
    currency_code: zod_1.z.string().nullish()
})
    .strict()
    .refine((data) => data.type !== utils_1.CampaignBudgetType.SPEND || (0, utils_1.isPresent)(data.currency_code), {
    path: ['currency_code'],
    message: `currency_code is required when budget type is ${utils_1.CampaignBudgetType.SPEND}`
})
    .refine((data) => data.type !== utils_1.CampaignBudgetType.USAGE || !(0, utils_1.isPresent)(data.currency_code), {
    path: ['currency_code'],
    message: `currency_code should not be present when budget type is ${utils_1.CampaignBudgetType.USAGE}`
});
exports.VendorCreateCampaign = zod_1.z
    .object({
    name: zod_1.z.string(),
    campaign_identifier: zod_1.z.string(),
    description: zod_1.z.string().nullish(),
    budget: exports.VendorCreateCampaignBudget.nullish(),
    starts_at: zod_1.z.coerce.date().nullish(),
    ends_at: zod_1.z.coerce.date().nullish()
})
    .strict();
exports.VendorUpdateCampaign = zod_1.z.object({
    name: zod_1.z.string().optional(),
    campaign_identifier: zod_1.z.string().optional(),
    description: zod_1.z.string().nullish(),
    budget: zod_1.z
        .object({
        limit: zod_1.z.number().nullish()
    })
        .optional(),
    starts_at: zod_1.z.coerce.date().nullish(),
    ends_at: zod_1.z.coerce.date().nullish()
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsaWRhdG9ycy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hcGkvdmVuZG9yL2NhbXBhaWducy92YWxpZGF0b3JzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLDZCQUF1QjtBQUV2QixxREFBeUU7QUFDekUsc0VBQXdFO0FBSzNELFFBQUEsd0JBQXdCLEdBQUcsSUFBQSw2QkFBZ0IsRUFBQztJQUN2RCxNQUFNLEVBQUUsQ0FBQztJQUNULEtBQUssRUFBRSxFQUFFO0NBQ1YsQ0FBQyxDQUFBO0FBRUY7Ozs7Ozs7Ozs7Ozs7O0dBY0c7QUFDVSxRQUFBLDBCQUEwQixHQUFHLE9BQUM7S0FDeEMsTUFBTSxDQUFDO0lBQ04sSUFBSSxFQUFFLE9BQUMsQ0FBQyxVQUFVLENBQUMsMEJBQWtCLENBQUM7SUFDdEMsS0FBSyxFQUFFLE9BQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxPQUFPLEVBQUU7SUFDM0IsYUFBYSxFQUFFLE9BQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxPQUFPLEVBQUU7Q0FDcEMsQ0FBQztLQUNELE1BQU0sRUFBRTtLQUNSLE1BQU0sQ0FDTCxDQUFDLElBQUksRUFBRSxFQUFFLENBQ1AsSUFBSSxDQUFDLElBQUksS0FBSywwQkFBa0IsQ0FBQyxLQUFLLElBQUksSUFBQSxpQkFBUyxFQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsRUFDekU7SUFDRSxJQUFJLEVBQUUsQ0FBQyxlQUFlLENBQUM7SUFDdkIsT0FBTyxFQUFFLGlEQUFpRCwwQkFBa0IsQ0FBQyxLQUFLLEVBQUU7Q0FDckYsQ0FDRjtLQUNBLE1BQU0sQ0FDTCxDQUFDLElBQUksRUFBRSxFQUFFLENBQ1AsSUFBSSxDQUFDLElBQUksS0FBSywwQkFBa0IsQ0FBQyxLQUFLLElBQUksQ0FBQyxJQUFBLGlCQUFTLEVBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxFQUMxRTtJQUNFLElBQUksRUFBRSxDQUFDLGVBQWUsQ0FBQztJQUN2QixPQUFPLEVBQUUsMkRBQTJELDBCQUFrQixDQUFDLEtBQUssRUFBRTtDQUMvRixDQUNGLENBQUE7QUF5QlUsUUFBQSxvQkFBb0IsR0FBRyxPQUFDO0tBQ2xDLE1BQU0sQ0FBQztJQUNOLElBQUksRUFBRSxPQUFDLENBQUMsTUFBTSxFQUFFO0lBQ2hCLG1CQUFtQixFQUFFLE9BQUMsQ0FBQyxNQUFNLEVBQUU7SUFDL0IsV0FBVyxFQUFFLE9BQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxPQUFPLEVBQUU7SUFDakMsTUFBTSxFQUFFLGtDQUEwQixDQUFDLE9BQU8sRUFBRTtJQUM1QyxTQUFTLEVBQUUsT0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsQ0FBQyxPQUFPLEVBQUU7SUFDcEMsT0FBTyxFQUFFLE9BQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLENBQUMsT0FBTyxFQUFFO0NBQ25DLENBQUM7S0FDRCxNQUFNLEVBQUUsQ0FBQTtBQTZCRSxRQUFBLG9CQUFvQixHQUFHLE9BQUMsQ0FBQyxNQUFNLENBQUM7SUFDM0MsSUFBSSxFQUFFLE9BQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxRQUFRLEVBQUU7SUFDM0IsbUJBQW1CLEVBQUUsT0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDLFFBQVEsRUFBRTtJQUMxQyxXQUFXLEVBQUUsT0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDLE9BQU8sRUFBRTtJQUNqQyxNQUFNLEVBQUUsT0FBQztTQUNOLE1BQU0sQ0FBQztRQUNOLEtBQUssRUFBRSxPQUFDLENBQUMsTUFBTSxFQUFFLENBQUMsT0FBTyxFQUFFO0tBQzVCLENBQUM7U0FDRCxRQUFRLEVBQUU7SUFDYixTQUFTLEVBQUUsT0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsQ0FBQyxPQUFPLEVBQUU7SUFDcEMsT0FBTyxFQUFFLE9BQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLENBQUMsT0FBTyxFQUFFO0NBQ25DLENBQUMsQ0FBQSJ9