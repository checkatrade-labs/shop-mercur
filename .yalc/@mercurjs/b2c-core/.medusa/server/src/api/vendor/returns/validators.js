"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VendorReturnsDismissItemsActionSchema = exports.VendorReturnsReceiveItemsActionSchema = exports.VendorReceiveReturnItemsSchema = exports.VendorReceiveReturnSchema = exports.VendorGetReturnsParams = void 0;
const zod_1 = require("zod");
const validators_1 = require("@medusajs/medusa/api/utils/validators");
exports.VendorGetReturnsParams = (0, validators_1.createFindParams)({
    offset: 0,
    limit: 50
});
exports.VendorReceiveReturnSchema = zod_1.z.object({
    internal_note: zod_1.z.string().optional(),
    description: zod_1.z.string().optional(),
    metadata: zod_1.z.record(zod_1.z.unknown()).nullish()
});
exports.VendorReceiveReturnItemsSchema = zod_1.z.object({
    items: zod_1.z.array(zod_1.z.object({
        id: zod_1.z.string(),
        quantity: zod_1.z.number().min(1),
        internal_note: zod_1.z.string().optional()
    }))
});
exports.VendorReturnsReceiveItemsActionSchema = zod_1.z.object({
    quantity: zod_1.z.number().optional(),
    internal_note: zod_1.z.string().nullish().optional()
});
exports.VendorReturnsDismissItemsActionSchema = zod_1.z.object({
    quantity: zod_1.z.number().optional(),
    internal_note: zod_1.z.string().nullish().optional()
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsaWRhdG9ycy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hcGkvdmVuZG9yL3JldHVybnMvdmFsaWRhdG9ycy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSw2QkFBdUI7QUFFdkIsc0VBQXdFO0FBRzNELFFBQUEsc0JBQXNCLEdBQUcsSUFBQSw2QkFBZ0IsRUFBQztJQUNyRCxNQUFNLEVBQUUsQ0FBQztJQUNULEtBQUssRUFBRSxFQUFFO0NBQ1YsQ0FBQyxDQUFBO0FBc0JXLFFBQUEseUJBQXlCLEdBQUcsT0FBQyxDQUFDLE1BQU0sQ0FBQztJQUNoRCxhQUFhLEVBQUUsT0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDLFFBQVEsRUFBRTtJQUNwQyxXQUFXLEVBQUUsT0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDLFFBQVEsRUFBRTtJQUNsQyxRQUFRLEVBQUUsT0FBQyxDQUFDLE1BQU0sQ0FBQyxPQUFDLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQyxPQUFPLEVBQUU7Q0FDMUMsQ0FBQyxDQUFBO0FBK0JXLFFBQUEsOEJBQThCLEdBQUcsT0FBQyxDQUFDLE1BQU0sQ0FBQztJQUNyRCxLQUFLLEVBQUUsT0FBQyxDQUFDLEtBQUssQ0FDWixPQUFDLENBQUMsTUFBTSxDQUFDO1FBQ1AsRUFBRSxFQUFFLE9BQUMsQ0FBQyxNQUFNLEVBQUU7UUFDZCxRQUFRLEVBQUUsT0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDM0IsYUFBYSxFQUFFLE9BQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxRQUFRLEVBQUU7S0FDckMsQ0FBQyxDQUNIO0NBQ0YsQ0FBQyxDQUFBO0FBaUJXLFFBQUEscUNBQXFDLEdBQUcsT0FBQyxDQUFDLE1BQU0sQ0FBQztJQUM1RCxRQUFRLEVBQUUsT0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDLFFBQVEsRUFBRTtJQUMvQixhQUFhLEVBQUUsT0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDLE9BQU8sRUFBRSxDQUFDLFFBQVEsRUFBRTtDQUMvQyxDQUFDLENBQUE7QUFpQlcsUUFBQSxxQ0FBcUMsR0FBRyxPQUFDLENBQUMsTUFBTSxDQUFDO0lBQzVELFFBQVEsRUFBRSxPQUFDLENBQUMsTUFBTSxFQUFFLENBQUMsUUFBUSxFQUFFO0lBQy9CLGFBQWEsRUFBRSxPQUFDLENBQUMsTUFBTSxFQUFFLENBQUMsT0FBTyxFQUFFLENBQUMsUUFBUSxFQUFFO0NBQy9DLENBQUMsQ0FBQSJ9