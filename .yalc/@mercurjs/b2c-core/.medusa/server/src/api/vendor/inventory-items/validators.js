"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VendorBatchInventoryItemLocationsLevel = exports.VendorBatchInventoryItemLevels = exports.VendorUpdateInventoryItem = exports.VendorCreateInventoryLocationLevel = exports.VendorUpdateInventoryLevel = exports.VendorGetInventoryItemsParams = exports.VendorGetInventoryItemsParamsFields = void 0;
const zod_1 = require("zod");
const common_1 = require("@medusajs/medusa/api/utils/common-validators/common");
const validators_1 = require("@medusajs/medusa/api/utils/validators");
exports.VendorGetInventoryItemsParamsFields = zod_1.z.object({
    q: zod_1.z.string().optional(),
    inventory_item_id: zod_1.z.union([zod_1.z.string(), zod_1.z.array(zod_1.z.string())]).optional()
});
exports.VendorGetInventoryItemsParams = (0, validators_1.createFindParams)({
    offset: 0,
    limit: 50
})
    .merge(exports.VendorGetInventoryItemsParamsFields)
    .merge((0, common_1.applyAndAndOrOperators)(exports.VendorGetInventoryItemsParamsFields))
    .strict();
exports.VendorUpdateInventoryLevel = zod_1.z.object({
    stocked_quantity: zod_1.z.number().int().min(0),
    reserved_quantity: zod_1.z.number().int().min(0).optional()
});
exports.VendorCreateInventoryLocationLevel = zod_1.z
    .object({
    location_id: zod_1.z.string(),
    stocked_quantity: zod_1.z.number().int().min(0).optional(),
    reserved_quantity: zod_1.z.number().int().min(0).optional()
})
    .strict();
exports.VendorUpdateInventoryItem = zod_1.z
    .object({
    sku: zod_1.z.string().nullish(),
    hs_code: zod_1.z.string().nullish(),
    weight: zod_1.z.number().nullish(),
    length: zod_1.z.number().nullish(),
    height: zod_1.z.number().nullish(),
    width: zod_1.z.number().nullish(),
    origin_country: zod_1.z.string().nullish(),
    mid_code: zod_1.z.string().nullish(),
    material: zod_1.z.string().nullish(),
    title: zod_1.z.string().nullish(),
    description: zod_1.z.string().nullish(),
    requires_shipping: zod_1.z.boolean().optional(),
    thumbnail: zod_1.z.string().nullish(),
    metadata: zod_1.z.record(zod_1.z.unknown()).nullish()
})
    .strict();
/**
 * @schema VendorBatchInventoryLocationLevel
 * type: object
 * properties:
 *   inventory_item_id:
 *     type: string
 *     description: The inventory item id.
 *   stocked_quantity:
 *     type: number
 *     description: The quantity of the InventoryItem in StockLocation.
 *   location_id:
 *     type: string
 *     description: The stock location id.
 *   incoming_quantity:
 *     type: number
 *     description: The quantity incoming_quantity.
 */
const VendorBatchInventoryLocationLevel = zod_1.z
    .object({
    inventory_item_id: zod_1.z.string(),
    location_id: zod_1.z.string(),
    stocked_quantity: zod_1.z.number().min(0).optional(),
    incoming_quantity: zod_1.z.number().min(0).optional()
})
    .strict();
exports.VendorBatchInventoryItemLevels = zod_1.z
    .object({
    create: zod_1.z.array(VendorBatchInventoryLocationLevel).optional(),
    update: zod_1.z.array(VendorBatchInventoryLocationLevel).optional(),
    delete: zod_1.z.array(zod_1.z.string()).optional(),
    force: zod_1.z.boolean().optional()
})
    .strict();
exports.VendorBatchInventoryItemLocationsLevel = zod_1.z.object({
    create: zod_1.z.array(exports.VendorCreateInventoryLocationLevel).optional(),
    update: zod_1.z.array(VendorBatchInventoryLocationLevel).optional(),
    delete: zod_1.z.array(zod_1.z.string()).optional(),
    force: zod_1.z.boolean().optional()
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsaWRhdG9ycy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hcGkvdmVuZG9yL2ludmVudG9yeS1pdGVtcy92YWxpZGF0b3JzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLDZCQUF1QjtBQUV2QixnRkFBNEY7QUFDNUYsc0VBQXdFO0FBRTNELFFBQUEsbUNBQW1DLEdBQUcsT0FBQyxDQUFDLE1BQU0sQ0FBQztJQUMxRCxDQUFDLEVBQUUsT0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDLFFBQVEsRUFBRTtJQUN4QixpQkFBaUIsRUFBRSxPQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsT0FBQyxDQUFDLE1BQU0sRUFBRSxFQUFFLE9BQUMsQ0FBQyxLQUFLLENBQUMsT0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsRUFBRTtDQUN6RSxDQUFDLENBQUE7QUFLVyxRQUFBLDZCQUE2QixHQUFHLElBQUEsNkJBQWdCLEVBQUM7SUFDNUQsTUFBTSxFQUFFLENBQUM7SUFDVCxLQUFLLEVBQUUsRUFBRTtDQUNWLENBQUM7S0FDQyxLQUFLLENBQUMsMkNBQW1DLENBQUM7S0FDMUMsS0FBSyxDQUFDLElBQUEsK0JBQXNCLEVBQUMsMkNBQW1DLENBQUMsQ0FBQztLQUNsRSxNQUFNLEVBQUUsQ0FBQTtBQWlCRSxRQUFBLDBCQUEwQixHQUFHLE9BQUMsQ0FBQyxNQUFNLENBQUM7SUFDakQsZ0JBQWdCLEVBQUUsT0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDLEdBQUcsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFDekMsaUJBQWlCLEVBQUUsT0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDLEdBQUcsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLEVBQUU7Q0FDdEQsQ0FBQyxDQUFBO0FBd0JXLFFBQUEsa0NBQWtDLEdBQUcsT0FBQztLQUNoRCxNQUFNLENB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