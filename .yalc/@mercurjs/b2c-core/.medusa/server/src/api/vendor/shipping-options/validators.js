"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VendorUpdateShippingOption = exports.VendorCreateShippingOption = exports.CreateShippingOptionPriceWithRegion = exports.VendorGetShippingFindParams = void 0;
const zod_1 = require("zod");
const utils_1 = require("@medusajs/framework/utils");
const validators_1 = require("@medusajs/medusa/api/utils/validators");
exports.VendorGetShippingFindParams = (0, validators_1.createFindParams)({
    offset: 0,
    limit: 50
});
/* Shipping options */
/**
 * @schema CreateShippingOptionPriceWithCurrency
 * type: object
 * required:
 *   - currency_code
 *   - amount
 * properties:
 *   currency_code:
 *     type: string
 *     description: The currency code for the price.
 *   amount:
 *     type: number
 *     description: The amount of the price.
 */
const CreateShippingOptionPriceWithCurrency = zod_1.z
    .object({
    currency_code: zod_1.z.string(),
    amount: zod_1.z.number()
})
    .strict();
/**
 * @schema CreateShippingOptionPriceWithRegion
 * type: object
 * required:
 *   - region_id
 *   - amount
 * properties:
 *   region_id:
 *     type: string
 *     description: The region ID for the price.
 *   amount:
 *     type: number
 *     description: The amount of the price.
 */
exports.CreateShippingOptionPriceWithRegion = zod_1.z
    .object({
    region_id: zod_1.z.string(),
    amount: zod_1.z.number()
})
    .strict();
/**
 * @schema CreateShippingOptionTypeObject
 * type: object
 * required:
 *   - label
 *   - description
 *   - code
 * properties:
 *   label:
 *     type: string
 *     description: The label of the shipping option type.
 *   description:
 *     type: string
 *     description: The description of the shipping option type.
 *   code:
 *     type: string
 *     description: The code of the shipping option type.
 */
const CreateShippingOptionTypeObject = zod_1.z
    .object({
    label: zod_1.z.string(),
    description: zod_1.z.string(),
    code: zod_1.z.string()
})
    .strict();
/**
 * @schema VendorCreateShippingOptionRule
 * type: object
 * required:
 *   - operator
 *   - attribute
 *   - value
 * properties:
 *   operator:
 *     type: string
 *     description: The operator of the rule.
 *   attribute:
 *     type: string
 *     description: The attribute of the rule.
 *   value:
 *     type: string
 *     description: The value of the rule.
 */
const VendorCreateShippingOptionRule = zod_1.z
    .object({
    operator: zod_1.z.nativeEnum(utils_1.RuleOperator),
    attribute: zod_1.z.string(),
    value: zod_1.z.string().or(zod_1.z.array(zod_1.z.string()))
})
    .strict();
exports.VendorCreateShippingOption = zod_1.z
    .object({
    name: zod_1.z.string(),
    service_zone_id: zod_1.z.string(),
    shipping_profile_id: zod_1.z.string(),
    data: zod_1.z.record(zod_1.z.unknown()).optional(),
    provider_id: zod_1.z.string(),
    prices: CreateShippingOptionPriceWithCurrency.or(exports.CreateShippingOptionPriceWithRegion).array(),
    type: CreateShippingOptionTypeObject,
    rules: VendorCreateShippingOptionRule.array().optional()
})
    .strict();
exports.VendorUpdateShippingOption = zod_1.z
    .object({
    data: zod_1.z.record(zod_1.z.unknown()).optional(),
    name: zod_1.z.string().optional(),
    shipping_profile_id: zod_1.z.string().optional(),
    provider_id: zod_1.z.string().optional(),
    prices: CreateShippingOptionPriceWithCurrency.or(exports.CreateShippingOptionPriceWithRegion)
        .array()
        .optional(),
    type: CreateShippingOptionTypeObject.optional(),
    rules: VendorCreateShippingOptionRule.array().optional()
})
    .strict();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsaWRhdG9ycy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hcGkvdmVuZG9yL3NoaXBwaW5nLW9wdGlvbnMvdmFsaWRhdG9ycy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSw2QkFBdUI7QUFFdkIscURBQXdEO0FBQ3hELHNFQUF3RTtBQU0zRCxRQUFBLDJCQUEyQixHQUFHLElBQUEsNkJBQWdCLEVBQUM7SUFDMUQsTUFBTSxFQUFFLENBQUM7SUFDVCxLQUFLLEVBQUUsRUFBRTtDQUNWLENBQUMsQ0FBQTtBQUVGLHNCQUFzQjtBQUV0Qjs7Ozs7Ozs7Ozs7OztHQWFHO0FBQ0gsTUFBTSxxQ0FBcUMsR0FBRyxPQUFDO0tBQzVDLE1BQU0sQ0FBQztJQUNOLGFBQWEsRUFBRSxPQUFDLENBQUMsTUFBTSxFQUFFO0lBQ3pCLE1BQU0sRUFBRSxPQUFDLENBQUMsTUFBTSxFQUFFO0NBQ25CLENBQUM7S0FDRCxNQUFNLEVBQUUsQ0FBQTtBQUVYOzs7Ozs7Ozs7Ozs7O0dBYUc7QUFDVSxRQUFBLG1DQUFtQyxHQUFHLE9BQUM7S0FDakQsTUFBTSxDQUFDO0lBQ04sU0FBUyxFQUFFLE9BQUMsQ0FBQyxNQUFNLEVBQUU7SUFDckIsTUFBTSxFQUFFLE9BQUMsQ0FBQyxNQUFNLEVBQUU7Q0FDbkIsQ0FBQztLQUNELE1BQU0sRUFBRSxDQUFBO0FBRVg7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBaUJHO0FBQ0gsTUFBTSw4QkFBOEIsR0FBRyxPQUFDO0tBQ3JDLE1BQU0sQ0FBQztJQUNOLEtBQUssRUFBRSxPQUFDLENBQUMsTUFBTSxFQUFFO0lBQ2pCLFdBQVcsRUFBRSxPQUFDLENBQUMsTUFBTSxFQUFFO0lBQ3ZCLElBQUksRUFBRSxPQUFDLENBQUMsTUFBTSxFQUFFO0NBQ2pCLENBQUM7S0FDRCxNQUFNLEVBQUUsQ0FBQTtBQUVYOzs7Ozs7Ozs7Ozs7Ozs7OztHQWlCRztBQUNILE1BQU0sOEJBQThCLEdBQUcsT0FBQztLQUNyQyxNQUFNLENBQUM7SUFDTixRQUFRLEVBQUUsT0FBQyxDQUFDLFVBQVUsQ0FBQyxvQkFBWSxDQUFDO0lBQ3BDLFNBQVMsRUFBRSxPQUFDLENBQUMsTUFBTSxFQUFFO0lBQ3JCLEtBQUssRUFBRSxPQUFDLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxDQUFDLE9BQUMsQ0FBQyxLQUFLLENBQUMsT0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUM7Q0FDMUMsQ0FBQztLQUNELE1BQU0sRUFBRSxDQUFBO0FBc0NFLFFBQUEsMEJBQTBCLEdBQUcsT0FBQztLQUN4QyxNQUFNLENBQUM7SUFDTixJQUFJLEVBQUUsT0FBQyxDQUFDLE1BQU0sRUFBRTtJQUNoQixlQUFlLEVBQUUsT0FBQyxDQUFDLE1BQU0sRUFBRTtJQUMzQixtQkFBbUIsRUFBRSxPQUFDLENBQUMsTUFBTSxFQUFFO0lBQy9CLElBQUksRUFBRSxPQUFDLENBQUMsTUFBTSxDQUFDLE9BQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDLFFBQVEsRUFBRTtJQUN0QyxXQUFXLEVBQUUsT0FBQyxDQUFDLE1BQU0sRUFBRTtJQUN2QixNQUFNLEVBQUUscUNBQXFDLENBQUMsRUFBRSxDQUM5QywyQ0FBbUMsQ0FDcEMsQ0FBQyxLQUFLLEVBQUU7SUFDVCxJQUFJLEVBQUUsOEJBQThCO0lBQ3BDLEtBQUssRUFBRSw4QkFBOEIsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxRQUFRLEVBQUU7Q0FDekQsQ0FBQztLQUNELE1BQU0sRUFBRSxDQUFBO0FBZ0NFLFFBQUEsMEJBQTBCLEdBQUcsT0FBQztLQUN4QyxNQUFNLENBQUM7SUFDTixJQUFJLEVBQUUsT0FBQyxDQUFDLE1BQU0sQ0FBQyxPQUFDLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQyxRQUFRLEVBQUU7SUFDdEMsSUFBSSxFQUFFLE9BQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxRQUFRLEVBQUU7SUFDM0IsbUJBQW1CLEVBQUUsT0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDLFFBQVEsRUFBRTtJQUMxQyxXQUFXLEVBQUUsT0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDLFFBQVEsRUFBRTtJQUNsQyxNQUFNLEVBQUUscUNBQXFDLENBQUMsRUFBRSxDQUM5QywyQ0FBbUMsQ0FDcEM7U0FDRSxLQUFLLEVBQUU7U0FDUCxRQUFRLEVBQUU7SUFDYixJQUFJLEVBQUUsOEJBQThCLENBQUMsUUFBUSxFQUFFO0lBQy9DLEtBQUssRUFBRSw4QkFBOEIsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxRQUFRLEVBQUU7Q0FDekQsQ0FBQztLQUNELE1BQU0sRUFBRSxDQUFBIn0=