"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.VendorOrderCreateShipment = exports.VendorCreateFulfillment = exports.VendorGetOrderChangesParams = exports.VendorGetOrderParams = void 0;
const z = __importStar(require("zod"));
const validators_1 = require("@medusajs/medusa/api/utils/validators");
exports.VendorGetOrderParams = (0, validators_1.createFindParams)({
    offset: 0,
    limit: 50
}).merge(z.object({
    created_at: (0, validators_1.createOperatorMap)().optional(),
    status: z
        .union([z.string(), z.array(z.string()), (0, validators_1.createOperatorMap)()])
        .optional(),
    fulfillment_status: z.string().optional(),
    payment_status: z.string().optional(),
    region_id: z.string().optional(),
    sales_channel_id: z.string().optional(),
    q: z.string().optional()
}));
exports.VendorGetOrderChangesParams = (0, validators_1.createSelectParams)();
exports.VendorCreateFulfillment = z.object({
    items: z.array(z.object({
        id: z.string(),
        quantity: z.number().int().min(0)
    })),
    requires_shipping: z.boolean(),
    location_id: z.string()
});
exports.VendorOrderCreateShipment = z.object({
    items: z.array(z.object({
        id: z.string(),
        quantity: z.number()
    })),
    labels: z
        .array(z.object({
        tracking_number: z.string(),
        tracking_url: z.string(),
        label_url: z.string()
    }))
        .optional()
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsaWRhdG9ycy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hcGkvdmVuZG9yL29yZGVycy92YWxpZGF0b3JzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHVDQUF3QjtBQUV4QixzRUFJOEM7QUFHakMsUUFBQSxvQkFBb0IsR0FBRyxJQUFBLDZCQUFnQixFQUFDO0lBQ25ELE1BQU0sRUFBRSxDQUFDO0lBQ1QsS0FBSyxFQUFFLEVBQUU7Q0FDVixDQUFDLENBQUMsS0FBSyxDQUNOLENBQUMsQ0FBQyxNQUFNLENBQUM7SUFDUCxVQUFVLEVBQUUsSUFBQSw4QkFBaUIsR0FBRSxDQUFDLFFBQVEsRUFBRTtJQUMxQyxNQUFNLEVBQUUsQ0FBQztTQUNOLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLEVBQUUsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLElBQUEsOEJBQWlCLEdBQUUsQ0FBQyxDQUFDO1NBQzdELFFBQVEsRUFBRTtJQUNiLGtCQUFrQixFQUFFLENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxRQUFRLEVBQUU7SUFDekMsY0FBYyxFQUFFLENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxRQUFRLEVBQUU7SUFDckMsU0FBUyxFQUFFLENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxRQUFRLEVBQUU7SUFDaEMsZ0JBQWdCLEVBQUUsQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDLFFBQVEsRUFBRTtJQUN2QyxDQUFDLEVBQUUsQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDLFFBQVEsRUFBRTtDQUN6QixDQUFDLENBQ0gsQ0FBQTtBQUtZLFFBQUEsMkJBQTJCLEdBQUcsSUFBQSwrQkFBa0IsR0FBRSxDQUFBO0FBeUJsRCxRQUFBLHVCQUF1QixHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUM7SUFDOUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQ1osQ0FBQyxDQUFDLE1BQU0sQ0FBQztRQUNQLEVBQUUsRUFBRSxDQUFDLENBQUMsTUFBTSxFQUFFO1FBQ2QsUUFBUSxFQUFFLENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO0tBQ2xDLENBQUMsQ0FDSDtJQUNELGlCQUFpQixFQUFFLENBQUMsQ0FBQyxPQUFPLEVBQUU7SUFDOUIsV0FBVyxFQUFFLENBQUMsQ0FBQyxNQUFNLEVBQUU7Q0FDeEIsQ0FBQyxDQUFBO0FBZ0NXLFFBQUEseUJBQXlCLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQztJQUNoRCxLQUFLLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FDWixDQUFDLENBQUMsTUFBTSxDQUFDO1FBQ1AsRUFBRSxFQUFFLENBQUMsQ0FBQyxNQUFNLEVBQUU7UUFDZCxRQUFRLEVBQUUsQ0FBQyxDQUFDLE1BQU0sRUFBRTtLQUNyQixDQUFDLENBQ0g7SUFDRCxNQUFNLEVBQUUsQ0FBQztTQUNOLEtBQUssQ0FDSixDQUFDLENBQUMsTUFBTSxDQUFDO1FBQ1AsZUFBZSxFQUFFLENBQUMsQ0FBQyxNQUFNLEVBQUU7UUFDM0IsWUFBWSxFQUFFLENBQUMsQ0FBQyxNQUFNLEVBQUU7UUFDeEIsU0FBUyxFQUFFLENBQUMsQ0FBQyxNQUFNLEVBQUU7S0FDdEIsQ0FBQyxDQUNIO1NBQ0EsUUFBUSxFQUFFO0NBQ2QsQ0FBQyxDQUFBIn0=