"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VendorUpdateMember = exports.VendorGetMemberParams = void 0;
const zod_1 = require("zod");
const validators_1 = require("@medusajs/medusa/api/utils/validators");
exports.VendorGetMemberParams = (0, validators_1.createFindParams)({
    offset: 0,
    limit: 50
});
exports.VendorUpdateMember = zod_1.z
    .object({
    name: zod_1.z.string().optional(),
    bio: zod_1.z.string().optional(),
    phone: zod_1.z.string().optional(),
    photo: zod_1.z.string().optional()
})
    .strict();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsaWRhdG9ycy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hcGkvdmVuZG9yL21lbWJlcnMvdmFsaWRhdG9ycy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSw2QkFBdUI7QUFFdkIsc0VBQXdFO0FBRzNELFFBQUEscUJBQXFCLEdBQUcsSUFBQSw2QkFBZ0IsRUFBQztJQUNwRCxNQUFNLEVBQUUsQ0FBQztJQUNULEtBQUssRUFBRSxFQUFFO0NBQ1YsQ0FBQyxDQUFBO0FBdUJXLFFBQUEsa0JBQWtCLEdBQUcsT0FBQztLQUNoQyxNQUFNLENBQUM7SUFDTixJQUFJLEVBQUUsT0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDLFFBQVEsRUFBRTtJQUMzQixHQUFHLEVBQUUsT0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDLFFBQVEsRUFBRTtJQUMxQixLQUFLLEVBQUUsT0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDLFFBQVEsRUFBRTtJQUM1QixLQUFLLEVBQUUsT0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDLFFBQVEsRUFBRTtDQUM3QixDQUFDO0tBQ0QsTUFBTSxFQUFFLENBQUEifQ==