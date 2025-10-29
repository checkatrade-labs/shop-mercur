"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminOrderSetParams = void 0;
const zod_1 = require("zod");
const validators_1 = require("@medusajs/medusa/api/utils/validators");
exports.AdminOrderSetParams = (0, validators_1.createFindParams)({
    offset: 0,
    limit: 50
}).merge(zod_1.z.object({
    order_id: zod_1.z.string().optional()
}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsaWRhdG9ycy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hcGkvYWRtaW4vb3JkZXItc2V0cy92YWxpZGF0b3JzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLDZCQUF1QjtBQUV2QixzRUFBd0U7QUFHM0QsUUFBQSxtQkFBbUIsR0FBRyxJQUFBLDZCQUFnQixFQUFDO0lBQ2xELE1BQU0sRUFBRSxDQUFDO0lBQ1QsS0FBSyxFQUFFLEVBQUU7Q0FDVixDQUFDLENBQUMsS0FBSyxDQUNOLE9BQUMsQ0FBQyxNQUFNLENBQUM7SUFDUCxRQUFRLEVBQUUsT0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDLFFBQVEsRUFBRTtDQUNoQyxDQUFDLENBQ0gsQ0FBQSJ9