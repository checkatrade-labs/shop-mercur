"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminInviteSeller = exports.AdminUpdateSeller = exports.AdminGetSellerCustomerGroupsParams = exports.AdminGetSellerOrdersParams = exports.AdminGetSellerProductsParams = exports.AdminSellerParams = void 0;
const zod_1 = require("zod");
const validators_1 = require("@medusajs/medusa/api/utils/validators");
const framework_1 = require("@mercurjs/framework");
exports.AdminSellerParams = (0, validators_1.createFindParams)({
    offset: 0,
    limit: 50
});
exports.AdminGetSellerProductsParams = (0, validators_1.createFindParams)({
    offset: 0,
    limit: 50
});
exports.AdminGetSellerOrdersParams = (0, validators_1.createFindParams)({
    offset: 0,
    limit: 50
});
exports.AdminGetSellerCustomerGroupsParams = (0, validators_1.createFindParams)({
    offset: 0,
    limit: 50
});
exports.AdminUpdateSeller = zod_1.z
    .object({
    name: zod_1.z
        .preprocess((val) => val.trim(), zod_1.z.string().min(4))
        .optional(),
    description: zod_1.z.string().optional(),
    photo: zod_1.z.string().optional(),
    email: zod_1.z.string().email().optional(),
    phone: zod_1.z.string().optional(),
    address_line: zod_1.z.string().optional(),
    city: zod_1.z.string().optional(),
    state: zod_1.z.string().optional(),
    postal_code: zod_1.z.string().optional(),
    country_code: zod_1.z.string().optional(),
    tax_id: zod_1.z.string().optional(),
    store_status: zod_1.z.nativeEnum(framework_1.StoreStatus).optional()
})
    .strict();
exports.AdminInviteSeller = zod_1.z.object({
    email: zod_1.z.string().email(),
    registration_url: zod_1.z.string().default('http://localhost:5173/register')
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsaWRhdG9ycy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hcGkvYWRtaW4vc2VsbGVycy92YWxpZGF0b3JzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLDZCQUF1QjtBQUV2QixzRUFBd0U7QUFFeEUsbURBQWlEO0FBR3BDLFFBQUEsaUJBQWlCLEdBQUcsSUFBQSw2QkFBZ0IsRUFBQztJQUNoRCxNQUFNLEVBQUUsQ0FBQztJQUNULEtBQUssRUFBRSxFQUFFO0NBQ1YsQ0FBQyxDQUFBO0FBS1csUUFBQSw0QkFBNEIsR0FBRyxJQUFBLDZCQUFnQixFQUFDO0lBQzNELE1BQU0sRUFBRSxDQUFDO0lBQ1QsS0FBSyxFQUFFLEVBQUU7Q0FDVixDQUFDLENBQUE7QUFLVyxRQUFBLDBCQUEwQixHQUFHLElBQUEsNkJBQWdCLEVBQUM7SUFDekQsTUFBTSxFQUFFLENBQUM7SUFDVCxLQUFLLEVBQUUsRUFBRTtDQUNWLENBQUMsQ0FBQTtBQUtXLFFBQUEsa0NBQWtDLEdBQUcsSUFBQSw2QkFBZ0IsRUFBQztJQUNqRSxNQUFNLEVBQUUsQ0FBQztJQUNULEtBQUssRUFBRSxFQUFFO0NBQ1YsQ0FBQyxDQUFBO0FBR1csUUFBQSxpQkFBaUIsR0FBRyxPQUFDO0tBQy9CLE1BQU0sQ0FBQztJQUNOLElBQUksRUFBRSxPQUFDO1NBQ0osVUFBVSxDQUFDLENBQUMsR0FBVyxFQUFFLEVBQUUsQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLEVBQUUsT0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUMxRCxRQUFRLEVBQUU7SUFDYixXQUFXLEVBQUUsT0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDLFFBQVEsRUFBRTtJQUNsQyxLQUFLLEVBQUUsT0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDLFFBQVEsRUFBRTtJQUM1QixLQUFLLEVBQUUsT0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDLEtBQUssRUFBRSxDQUFDLFFBQVEsRUFBRTtJQUNwQyxLQUFLLEVBQUUsT0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDLFFBQVEsRUFBRTtJQUM1QixZQUFZLEVBQUUsT0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDLFFBQVEsRUFBRTtJQUNuQyxJQUFJLEVBQUUsT0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDLFFBQVEsRUFBRTtJQUMzQixLQUFLLEVBQUUsT0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDLFFBQVEsRUFBRTtJQUM1QixXQUFXLEVBQUUsT0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDLFFBQVEsRUFBRTtJQUNsQyxZQUFZLEVBQUUsT0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDLFFBQVEsRUFBRTtJQUNuQyxNQUFNLEVBQUUsT0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDLFFBQVEsRUFBRTtJQUM3QixZQUFZLEVBQUUsT0FBQyxDQUFDLFVBQVUsQ0FBQyx1QkFBVyxDQUFDLENBQUMsUUFBUSxFQUFFO0NBQ25ELENBQUM7S0FDRCxNQUFNLEVBQUUsQ0FBQTtBQUdFLFFBQUEsaUJBQWlCLEdBQUcsT0FBQyxDQUFDLE1BQU0sQ0FBQztJQUN4QyxLQUFLLEVBQUUsT0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDLEtBQUssRUFBRTtJQUN6QixnQkFBZ0IsRUFBRSxPQUFDLENBQUMsTUFBTSxFQUFFLENBQUMsT0FBTyxDQUFDLGdDQUFnQyxDQUFDO0NBQ3ZFLENBQUMsQ0FBQSJ9