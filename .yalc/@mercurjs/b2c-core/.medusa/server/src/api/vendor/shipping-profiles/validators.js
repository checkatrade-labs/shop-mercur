"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VendorUpdateShippingProfile = exports.VendorCreateShippingProfile = exports.VendorGetShippingProfilesParams = void 0;
const zod_1 = require("zod");
const validators_1 = require("@medusajs/medusa/api/utils/validators");
exports.VendorGetShippingProfilesParams = (0, validators_1.createFindParams)({
    limit: 20,
    offset: 0
});
exports.VendorCreateShippingProfile = zod_1.z
    .object({
    name: zod_1.z.string(),
    type: zod_1.z.string(),
    metadata: zod_1.z.record(zod_1.z.unknown()).nullish()
})
    .strict();
exports.VendorUpdateShippingProfile = zod_1.z
    .object({
    name: zod_1.z.string().optional(),
    type: zod_1.z.string().optional(),
    metadata: zod_1.z.record(zod_1.z.unknown()).nullish()
})
    .strict();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsaWRhdG9ycy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hcGkvdmVuZG9yL3NoaXBwaW5nLXByb2ZpbGVzL3ZhbGlkYXRvcnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsNkJBQXVCO0FBRXZCLHNFQUF3RTtBQUszRCxRQUFBLCtCQUErQixHQUFHLElBQUEsNkJBQWdCLEVBQUM7SUFDOUQsS0FBSyxFQUFFLEVBQUU7SUFDVCxNQUFNLEVBQUUsQ0FBQztDQUNWLENBQUMsQ0FBQTtBQXVCVyxRQUFBLDJCQUEyQixHQUFHLE9BQUM7S0FDekMsTUFBTSxDQUFDO0lBQ04sSUFBSSxFQUFFLE9BQUMsQ0FBQyxNQUFNLEVBQUU7SUFDaEIsSUFBSSxFQUFFLE9BQUMsQ0FBQyxNQUFNLEVBQUU7SUFDaEIsUUFBUSxFQUFFLE9BQUMsQ0FBQyxNQUFNLENBQUMsT0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUMsT0FBTyxFQUFFO0NBQzFDLENBQUM7S0FDRCxNQUFNLEVBQUUsQ0FBQTtBQW9CRSxRQUFBLDJCQUEyQixHQUFHLE9BQUM7S0FDekMsTUFBTSxDQUFDO0lBQ04sSUFBSSxFQUFFLE9BQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxRQUFRLEVBQUU7SUFDM0IsSUFBSSxFQUFFLE9BQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxRQUFRLEVBQUU7SUFDM0IsUUFBUSxFQUFFLE9BQUMsQ0FBQyxNQUFNLENBQUMsT0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUMsT0FBTyxFQUFFO0NBQzFDLENBQUM7S0FDRCxNQUFNLEVBQUUsQ0FBQSJ9