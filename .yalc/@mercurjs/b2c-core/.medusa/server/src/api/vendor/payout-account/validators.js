"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VendorCreateOnboarding = exports.VendorCreatePayoutAccount = exports.VendorGetPayoutAccountParams = void 0;
const zod_1 = require("zod");
const validators_1 = require("@medusajs/medusa/api/utils/validators");
exports.VendorGetPayoutAccountParams = (0, validators_1.createSelectParams)();
/**
 * @schema VendorCreatePayoutAccount
 * type: object
 * properties:
 *   context:
 *     type: object
 *     description: Additional data needed by the payment provider to create a payment account.
 *     nullable: true
 */
exports.VendorCreatePayoutAccount = zod_1.z
    .object({
    context: zod_1.z.record(zod_1.z.unknown()).optional()
})
    .strict();
/**
 * @schema VendorCreateOnboarding
 * type: object
 * properties:
 *   context:
 *     type: object
 *     description: Additional data needed by the payment provider to create onboarding.
 *     nullable: true
 */
exports.VendorCreateOnboarding = zod_1.z
    .object({
    context: zod_1.z.record(zod_1.z.unknown()).optional()
})
    .strict();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsaWRhdG9ycy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hcGkvdmVuZG9yL3BheW91dC1hY2NvdW50L3ZhbGlkYXRvcnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsNkJBQXVCO0FBRXZCLHNFQUEwRTtBQUs3RCxRQUFBLDRCQUE0QixHQUFHLElBQUEsK0JBQWtCLEdBQUUsQ0FBQTtBQUtoRTs7Ozs7Ozs7R0FRRztBQUNVLFFBQUEseUJBQXlCLEdBQUcsT0FBQztLQUN2QyxNQUFNLENBQUM7SUFDTixPQUFPLEVBQUUsT0FBQyxDQUFDLE1BQU0sQ0FBQyxPQUFDLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQyxRQUFRLEVBQUU7Q0FDMUMsQ0FBQztLQUNELE1BQU0sRUFBRSxDQUFBO0FBR1g7Ozs7Ozs7O0dBUUc7QUFDVSxRQUFBLHNCQUFzQixHQUFHLE9BQUM7S0FDcEMsTUFBTSxDQUFDO0lBQ04sT0FBTyxFQUFFLE9BQUMsQ0FBQyxNQUFNLENBQUMsT0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUMsUUFBUSxFQUFFO0NBQzFDLENBQUM7S0FDRCxNQUFNLEVBQUUsQ0FBQSJ9