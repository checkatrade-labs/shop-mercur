"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VendorCreateProductTag = exports.VendorGetProductTagsParams = exports.VendorGetProductTagsParamsFields = exports.VendorGetProductTagParams = void 0;
const zod_1 = require("zod");
const common_1 = require("@medusajs/medusa/api/utils/common-validators/common");
const validators_1 = require("@medusajs/medusa/api/utils/validators");
exports.VendorGetProductTagParams = (0, validators_1.createSelectParams)();
exports.VendorGetProductTagsParamsFields = zod_1.z.object({
    q: zod_1.z.string().optional(),
    id: zod_1.z.union([zod_1.z.string(), zod_1.z.array(zod_1.z.string())]).optional(),
    value: zod_1.z.union([zod_1.z.string(), zod_1.z.array(zod_1.z.string())]).optional()
});
exports.VendorGetProductTagsParams = (0, validators_1.createFindParams)({
    limit: 20,
    offset: 0
})
    .merge(exports.VendorGetProductTagsParamsFields)
    .merge((0, common_1.applyAndAndOrOperators)(exports.VendorGetProductTagsParamsFields));
exports.VendorCreateProductTag = zod_1.z
    .object({
    value: zod_1.z.string(),
    metadata: zod_1.z.record(zod_1.z.unknown()).nullish()
})
    .strict();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsaWRhdG9ycy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hcGkvdmVuZG9yL3Byb2R1Y3QtdGFncy92YWxpZGF0b3JzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLDZCQUF1QjtBQUV2QixnRkFBNEY7QUFDNUYsc0VBRzhDO0FBS2pDLFFBQUEseUJBQXlCLEdBQUcsSUFBQSwrQkFBa0IsR0FBRSxDQUFBO0FBRWhELFFBQUEsZ0NBQWdDLEdBQUcsT0FBQyxDQUFDLE1BQU0sQ0FBQztJQUN2RCxDQUFDLEVBQUUsT0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDLFFBQVEsRUFBRTtJQUN4QixFQUFFLEVBQUUsT0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLE9BQUMsQ0FBQyxNQUFNLEVBQUUsRUFBRSxPQUFDLENBQUMsS0FBSyxDQUFDLE9BQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLEVBQUU7SUFDekQsS0FBSyxFQUFFLE9BQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxPQUFDLENBQUMsTUFBTSxFQUFFLEVBQUUsT0FBQyxDQUFDLEtBQUssQ0FBQyxPQUFDLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxFQUFFO0NBQzdELENBQUMsQ0FBQTtBQUtXLFFBQUEsMEJBQTBCLEdBQUcsSUFBQSw2QkFBZ0IsRUFBQztJQUN6RCxLQUFLLEVBQUUsRUFBRTtJQUNULE1BQU0sRUFBRSxDQUFDO0NBQ1YsQ0FBQztLQUNDLEtBQUssQ0FBQyx3Q0FBZ0MsQ0FBQztLQUN2QyxLQUFLLENBQUMsSUFBQSwrQkFBc0IsRUFBQyx3Q0FBZ0MsQ0FBQyxDQUFDLENBQUE7QUFnQnJELFFBQUEsc0JBQXNCLEdBQUcsT0FBQztLQUNwQyxNQUFNLENBQUM7SUFDTixLQUFLLEVBQUUsT0FBQyxDQUFDLE1BQU0sRUFBRTtJQUNqQixRQUFRLEVBQUUsT0FBQyxDQUFDLE1BQU0sQ0FBQyxPQUFDLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQyxPQUFPLEVBQUU7Q0FDMUMsQ0FBQztLQUNELE1BQU0sRUFBRSxDQUFBIn0=