"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VendorLinkCustomersToGroup = exports.VendorCreateCustomerGroup = exports.VendorGetCustomerGroupsParams = void 0;
const zod_1 = require("zod");
const validators_1 = require("@medusajs/medusa/api/utils/validators");
exports.VendorGetCustomerGroupsParams = (0, validators_1.createFindParams)({
    offset: 0,
    limit: 50
});
exports.VendorCreateCustomerGroup = zod_1.z
    .object({
    name: zod_1.z.string()
})
    .strict();
exports.VendorLinkCustomersToGroup = zod_1.z
    .object({
    add: zod_1.z.array(zod_1.z.string()).default([]),
    remove: zod_1.z.array(zod_1.z.string()).default([])
})
    .strict();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsaWRhdG9ycy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hcGkvdmVuZG9yL2N1c3RvbWVyLWdyb3Vwcy92YWxpZGF0b3JzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLDZCQUF1QjtBQUV2QixzRUFBd0U7QUFLM0QsUUFBQSw2QkFBNkIsR0FBRyxJQUFBLDZCQUFnQixFQUFDO0lBQzVELE1BQU0sRUFBRSxDQUFDO0lBQ1QsS0FBSyxFQUFFLEVBQUU7Q0FDVixDQUFDLENBQUE7QUFjVyxRQUFBLHlCQUF5QixHQUFHLE9BQUM7S0FDdkMsTUFBTSxDQUFDO0lBQ04sSUFBSSxFQUFFLE9BQUMsQ0FBQyxNQUFNLEVBQUU7Q0FDakIsQ0FBQztLQUNELE1BQU0sRUFBRSxDQUFBO0FBcUJFLFFBQUEsMEJBQTBCLEdBQUcsT0FBQztLQUN4QyxNQUFNLENBQUM7SUFDTixHQUFHLEVBQUUsT0FBQyxDQUFDLEtBQUssQ0FBQyxPQUFDLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDO0lBQ3BDLE1BQU0sRUFBRSxPQUFDLENBQUMsS0FBSyxDQUFDLE9BQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUM7Q0FDeEMsQ0FBQztLQUNELE1BQU0sRUFBRSxDQUFBIn0=