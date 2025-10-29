"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VendorGetPricePreferencesParams = exports.VendorGetPricePreferencesParamsFields = void 0;
const zod_1 = require("zod");
const common_1 = require("@medusajs/medusa/api/utils/common-validators/common");
const validators_1 = require("@medusajs/medusa/api/utils/validators");
exports.VendorGetPricePreferencesParamsFields = zod_1.z.object({
    q: zod_1.z.string().optional(),
    id: zod_1.z.union([zod_1.z.string(), zod_1.z.array(zod_1.z.string())]).optional(),
    attribute: zod_1.z.union([zod_1.z.string(), zod_1.z.array(zod_1.z.string())]).optional(),
    value: zod_1.z.union([zod_1.z.string(), zod_1.z.array(zod_1.z.string())]).optional()
});
exports.VendorGetPricePreferencesParams = (0, validators_1.createFindParams)({
    offset: 0,
    limit: 300
})
    .merge(exports.VendorGetPricePreferencesParamsFields)
    .merge((0, common_1.applyAndAndOrOperators)(exports.VendorGetPricePreferencesParamsFields));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsaWRhdG9ycy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hcGkvdmVuZG9yL3ByaWNlLXByZWZlcmVuY2VzL3ZhbGlkYXRvcnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsNkJBQXVCO0FBRXZCLGdGQUE0RjtBQUM1RixzRUFBd0U7QUFFM0QsUUFBQSxxQ0FBcUMsR0FBRyxPQUFDLENBQUMsTUFBTSxDQUFDO0lBQzVELENBQUMsRUFBRSxPQUFDLENBQUMsTUFBTSxFQUFFLENBQUMsUUFBUSxFQUFFO0lBQ3hCLEVBQUUsRUFBRSxPQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsT0FBQyxDQUFDLE1BQU0sRUFBRSxFQUFFLE9BQUMsQ0FBQyxLQUFLLENBQUMsT0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsRUFBRTtJQUN6RCxTQUFTLEVBQUUsT0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLE9BQUMsQ0FBQyxNQUFNLEVBQUUsRUFBRSxPQUFDLENBQUMsS0FBSyxDQUFDLE9BQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLEVBQUU7SUFDaEUsS0FBSyxFQUFFLE9BQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxPQUFDLENBQUMsTUFBTSxFQUFFLEVBQUUsT0FBQyxDQUFDLEtBQUssQ0FBQyxPQUFDLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxFQUFFO0NBQzdELENBQUMsQ0FBQTtBQUVXLFFBQUEsK0JBQStCLEdBQUcsSUFBQSw2QkFBZ0IsRUFBQztJQUM5RCxNQUFNLEVBQUUsQ0FBQztJQUNULEtBQUssRUFBRSxHQUFHO0NBQ1gsQ0FBQztLQUNDLEtBQUssQ0FBQyw2Q0FBcUMsQ0FBQztLQUM1QyxLQUFLLENBQUMsSUFBQSwrQkFBc0IsRUFBQyw2Q0FBcUMsQ0FBQyxDQUFDLENBQUEifQ==