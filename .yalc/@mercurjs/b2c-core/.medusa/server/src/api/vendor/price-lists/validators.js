"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VendorUpdateProductsOnPriceList = exports.VendorUpdatePriceList = exports.VendorCreatePriceList = exports.VendorUpdatePriceListPrice = exports.VendorCreatePriceListPrice = exports.VendorGetPriceListProductsParams = exports.VendorGetPriceListPricesParams = void 0;
const zod_1 = require("zod");
const utils_1 = require("@medusajs/framework/utils");
const validators_1 = require("@medusajs/medusa/api/utils/validators");
exports.VendorGetPriceListPricesParams = (0, validators_1.createFindParams)({
    offset: 0,
    limit: 50
});
exports.VendorGetPriceListProductsParams = (0, validators_1.createFindParams)({
    offset: 0,
    limit: 50
});
exports.VendorCreatePriceListPrice = zod_1.z.object({
    currency_code: zod_1.z.string(),
    amount: zod_1.z.number(),
    variant_id: zod_1.z.string(),
    min_quantity: zod_1.z.number().nullish(),
    max_quantity: zod_1.z.number().nullish(),
    rules: zod_1.z.record(zod_1.z.string(), zod_1.z.string()).optional()
});
/**
 * @schema VendorUpdatePriceListPrice
 * type: object
 * properties:
 *   variant_id:
 *     type: string
 *     title: variant_id
 *     description: The ID of the product variant this price list is for.
 *   rules:
 *     type: object
 *     description: The price's rules.
 *   currency_code:
 *     type: string
 *     title: currency_code
 *     description: The price's currency code.
 *     example: usd
 *   amount:
 *     type: number
 *     title: amount
 *     description: The price's amount.
 *   min_quantity:
 *     type: number
 *     title: min_quantity
 *     description: The minimum quantity that must be available in the cart for the price to be applied.
 *   max_quantity:
 *     type: number
 *     title: max_quantity
 *     description: The maximum quantity allowed to be available in the cart for the price to be applied.
 */
exports.VendorUpdatePriceListPrice = zod_1.z.object({
    id: zod_1.z.string(),
    currency_code: zod_1.z.string().optional(),
    amount: zod_1.z.number().optional(),
    variant_id: zod_1.z.string(),
    min_quantity: zod_1.z.number().nullish(),
    max_quantity: zod_1.z.number().nullish(),
    rules: zod_1.z.record(zod_1.z.string(), zod_1.z.string()).optional()
});
exports.VendorCreatePriceList = zod_1.z.object({
    title: zod_1.z.string(),
    description: zod_1.z.string(),
    starts_at: zod_1.z.string().nullish(),
    ends_at: zod_1.z.string().nullish(),
    status: zod_1.z.nativeEnum(utils_1.PriceListStatus).optional(),
    type: zod_1.z.nativeEnum(utils_1.PriceListType).optional(),
    rules: zod_1.z.record(zod_1.z.string(), zod_1.z.array(zod_1.z.string())).optional(),
    prices: zod_1.z.array(exports.VendorCreatePriceListPrice).optional()
});
exports.VendorUpdatePriceList = zod_1.z.object({
    title: zod_1.z.string().optional(),
    description: zod_1.z.string().nullish(),
    starts_at: zod_1.z.string().nullish(),
    ends_at: zod_1.z.string().nullish(),
    status: zod_1.z.nativeEnum(utils_1.PriceListStatus).optional(),
    type: zod_1.z.nativeEnum(utils_1.PriceListType).optional(),
    rules: zod_1.z.record(zod_1.z.string(), zod_1.z.array(zod_1.z.string())).optional()
});
exports.VendorUpdateProductsOnPriceList = zod_1.z.object({
    remove: zod_1.z.array(zod_1.z.string()).optional(),
    create: zod_1.z.array(exports.VendorCreatePriceListPrice).optional(),
    update: zod_1.z.array(exports.VendorUpdatePriceListPrice).optional()
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsaWRhdG9ycy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hcGkvdmVuZG9yL3ByaWNlLWxpc3RzL3ZhbGlkYXRvcnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsNkJBQXVCO0FBRXZCLHFEQUEwRTtBQUMxRSxzRUFBd0U7QUFFM0QsUUFBQSw4QkFBOEIsR0FBRyxJQUFBLDZCQUFnQixFQUFDO0lBQzdELE1BQU0sRUFBRSxDQUFDO0lBQ1QsS0FBSyxFQUFFLEVBQUU7Q0FDVixDQUFDLENBQUE7QUFFVyxRQUFBLGdDQUFnQyxHQUFHLElBQUEsNkJBQWdCLEVBQUM7SUFDL0QsTUFBTSxFQUFFLENBQUM7SUFDVCxLQUFLLEVBQUUsRUFBRTtDQUNWLENBQUMsQ0FBQTtBQWtDVyxRQUFBLDBCQUEwQixHQUFHLE9BQUMsQ0FBQyxNQUFNLENBQUM7SUFDakQsYUFBYSxFQUFFLE9BQUMsQ0FBQyxNQUFNLEVBQUU7SUFDekIsTUFBTSxFQUFFLE9BQUMsQ0FBQyxNQUFNLEVBQUU7SUFDbEIsVUFBVSxFQUFFLE9BQUMsQ0FBQyxNQUFNLEVBQUU7SUFDdEIsWUFBWSxFQUFFLE9BQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxPQUFPLEVBQUU7SUFDbEMsWUFBWSxFQUFFLE9BQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxPQUFPLEVBQUU7SUFDbEMsS0FBSyxFQUFFLE9BQUMsQ0FBQyxNQUFNLENBQUMsT0FBQyxDQUFDLE1BQU0sRUFBRSxFQUFFLE9BQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDLFFBQVEsRUFBRTtDQUNuRCxDQUFDLENBQUE7QUFFRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQTRCRztBQUNVLFFBQUEsMEJBQTBCLEdBQUcsT0FBQyxDQUFDLE1BQU0sQ0FBQztJQUNqRCxFQUFFLEVBQUUsT0FBQyxDQUFDLE1BQU0sRUFBRTtJQUNkLGFBQWEsRUFBRSxPQUFDLENBQUMsTUFBTSxFQUFF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