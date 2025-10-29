"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VendorCreateReservation = exports.VendorUpdateReservation = exports.VendorGetReservationParams = void 0;
const zod_1 = require("zod");
const validators_1 = require("@medusajs/medusa/api/utils/validators");
exports.VendorGetReservationParams = (0, validators_1.createFindParams)({
    offset: 0,
    limit: 50
});
exports.VendorUpdateReservation = zod_1.z
    .object({
    location_id: zod_1.z.string().optional(),
    quantity: zod_1.z.number().optional(),
    description: zod_1.z.string().nullish()
})
    .strict();
exports.VendorCreateReservation = zod_1.z
    .object({
    line_item_id: zod_1.z.string().nullish(),
    location_id: zod_1.z.string(),
    inventory_item_id: zod_1.z.string(),
    quantity: zod_1.z.number(),
    description: zod_1.z.string().nullish()
})
    .strict();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsaWRhdG9ycy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hcGkvdmVuZG9yL3Jlc2VydmF0aW9ucy92YWxpZGF0b3JzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLDZCQUF1QjtBQUV2QixzRUFBd0U7QUFLM0QsUUFBQSwwQkFBMEIsR0FBRyxJQUFBLDZCQUFnQixFQUFDO0lBQ3pELE1BQU0sRUFBRSxDQUFDO0lBQ1QsS0FBSyxFQUFFLEVBQUU7Q0FDVixDQUFDLENBQUE7QUFtQlcsUUFBQSx1QkFBdUIsR0FBRyxPQUFDO0tBQ3JDLE1BQU0sQ0FBQztJQUNOLFdBQVcsRUFBRSxPQUFDLENBQUMsTUFBTSxFQUFFLENBQUMsUUFBUSxFQUFFO0lBQ2xDLFFBQVEsRUFBRSxPQUFDLENBQUMsTUFBTSxFQUFFLENBQUMsUUFBUSxFQUFFO0lBQy9CLFdBQVcsRUFBRSxPQUFDLENBQUMsTUFBTSxFQUFFLENBQUMsT0FBTyxFQUFFO0NBQ2xDLENBQUM7S0FDRCxNQUFNLEVBQUUsQ0FBQTtBQXlCRSxRQUFBLHVCQUF1QixHQUFHLE9BQUM7S0FDckMsTUFBTSxDQUFDO0lBQ04sWUFBWSxFQUFFLE9BQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxPQUFPLEVBQUU7SUFDbEMsV0FBVyxFQUFFLE9BQUMsQ0FBQyxNQUFNLEVBQUU7SUFDdkIsaUJBQWlCLEVBQUUsT0FBQyxDQUFDLE1BQU0sRUFBRTtJQUM3QixRQUFRLEVBQUUsT0FBQyxDQUFDLE1BQU0sRUFBRTtJQUNwQixXQUFXLEVBQUUsT0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDLE9BQU8sRUFBRTtDQUNsQyxDQUFDO0tBQ0QsTUFBTSxFQUFFLENBQUEifQ==