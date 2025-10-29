"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VendorUpdateCustomerGroups = exports.VendorGetCustomerOrdersParams = exports.VendorGetCustomersParams = void 0;
const zod_1 = require("zod");
const validators_1 = require("@medusajs/medusa/api/utils/validators");
exports.VendorGetCustomersParams = (0, validators_1.createFindParams)({
    offset: 0,
    limit: 50
});
exports.VendorGetCustomerOrdersParams = (0, validators_1.createFindParams)({
    offset: 0,
    limit: 50
});
exports.VendorUpdateCustomerGroups = zod_1.z.object({
    add: zod_1.z.array(zod_1.z.string()),
    remove: zod_1.z.array(zod_1.z.string())
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsaWRhdG9ycy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hcGkvdmVuZG9yL2N1c3RvbWVycy92YWxpZGF0b3JzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLDZCQUF1QjtBQUV2QixzRUFBd0U7QUFLM0QsUUFBQSx3QkFBd0IsR0FBRyxJQUFBLDZCQUFnQixFQUFDO0lBQ3ZELE1BQU0sRUFBRSxDQUFDO0lBQ1QsS0FBSyxFQUFFLEVBQUU7Q0FDVixDQUFDLENBQUE7QUFLVyxRQUFBLDZCQUE2QixHQUFHLElBQUEsNkJBQWdCLEVBQUM7SUFDNUQsTUFBTSxFQUFFLENBQUM7SUFDVCxLQUFLLEVBQUUsRUFBRTtDQUNWLENBQUMsQ0FBQTtBQXFCVyxRQUFBLDBCQUEwQixHQUFHLE9BQUMsQ0FBQyxNQUFNLENBQUM7SUFDakQsR0FBRyxFQUFFLE9BQUMsQ0FBQyxLQUFLLENBQUMsT0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDO0lBQ3hCLE1BQU0sRUFBRSxPQUFDLENBQUMsS0FBSyxDQUFDLE9BQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQztDQUM1QixDQUFDLENBQUEifQ==