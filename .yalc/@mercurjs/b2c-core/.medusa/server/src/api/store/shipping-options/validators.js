"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StoreGetReturnShippingOptions = exports.StoreGetShippingOptions = exports.StoreGetShippingOptionsFields = exports.StoreGetShippingOptionsParams = void 0;
const zod_1 = require("zod");
const common_1 = require("@medusajs/medusa/api/utils/common-validators/common");
const validators_1 = require("@medusajs/medusa/api/utils/validators");
exports.StoreGetShippingOptionsParams = (0, validators_1.createSelectParams)();
exports.StoreGetShippingOptionsFields = zod_1.z
    .object({
    cart_id: zod_1.z.string(),
    is_return: zod_1.z.boolean().optional()
})
    .strict();
exports.StoreGetShippingOptions = (0, validators_1.createFindParams)({
    limit: 20,
    offset: 0
})
    .merge(exports.StoreGetShippingOptionsFields)
    .merge((0, common_1.applyAndAndOrOperators)(exports.StoreGetShippingOptionsFields));
exports.StoreGetReturnShippingOptions = (0, validators_1.createFindParams)({
    offset: 0,
    limit: 50
}).merge(zod_1.z
    .object({
    order_id: zod_1.z.string()
})
    .strict());
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsaWRhdG9ycy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hcGkvc3RvcmUvc2hpcHBpbmctb3B0aW9ucy92YWxpZGF0b3JzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLDZCQUF1QjtBQUV2QixnRkFBNEY7QUFDNUYsc0VBRzhDO0FBRWpDLFFBQUEsNkJBQTZCLEdBQUcsSUFBQSwrQkFBa0IsR0FBRSxDQUFBO0FBRXBELFFBQUEsNkJBQTZCLEdBQUcsT0FBQztLQUMzQyxNQUFNLENBQUM7SUFDTixPQUFPLEVBQUUsT0FBQyxDQUFDLE1BQU0sRUFBRTtJQUNuQixTQUFTLEVBQUUsT0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFDLFFBQVEsRUFBRTtDQUNsQyxDQUFDO0tBQ0QsTUFBTSxFQUFFLENBQUE7QUFLRSxRQUFBLHVCQUF1QixHQUFHLElBQUEsNkJBQWdCLEVBQUM7SUFDdEQsS0FBSyxFQUFFLEVBQUU7SUFDVCxNQUFNLEVBQUUsQ0FBQztDQUNWLENBQUM7S0FDQyxLQUFLLENBQUMscUNBQTZCLENBQUM7S0FDcEMsS0FBSyxDQUFDLElBQUEsK0JBQXNCLEVBQUMscUNBQTZCLENBQUMsQ0FBQyxDQUFBO0FBS2xELFFBQUEsNkJBQTZCLEdBQUcsSUFBQSw2QkFBZ0IsRUFBQztJQUM1RCxNQUFNLEVBQUUsQ0FBQztJQUNULEtBQUssRUFBRSxFQUFFO0NBQ1YsQ0FBQyxDQUFDLEtBQUssQ0FDTixPQUFDO0tBQ0UsTUFBTSxDQUFDO0lBQ04sUUFBUSxFQUFFLE9BQUMsQ0FBQyxNQUFNLEVBQUU7Q0FDckIsQ0FBQztLQUNELE1BQU0sRUFBRSxDQUNaLENBQUEifQ==