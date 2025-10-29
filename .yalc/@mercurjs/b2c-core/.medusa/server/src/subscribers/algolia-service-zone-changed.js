"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
exports.default = serviceZoneChangedHandler;
const utils_1 = require("@medusajs/framework/utils");
const framework_1 = require("@mercurjs/framework");
const seller_product_1 = __importDefault(require("../links/seller-product"));
const seller_service_zone_1 = __importDefault(require("../links/seller-service-zone"));
async function serviceZoneChangedHandler({ event, container }) {
    const service_zone_id = event.data.id;
    const query = container.resolve(utils_1.ContainerRegistrationKeys.QUERY);
    const eventBus = container.resolve(utils_1.Modules.EVENT_BUS);
    const { data: [seller] } = await query.graph({
        entity: seller_service_zone_1.default.entryPoint,
        fields: ['seller_id'],
        filters: {
            service_zone_id
        },
        withDeleted: true
    });
    if (!seller) {
        return;
    }
    const { data: products } = await query.graph({
        entity: seller_product_1.default.entryPoint,
        fields: ['product_id'],
        filters: {
            seller_id: seller.id
        }
    });
    await eventBus.emit({
        name: framework_1.AlgoliaEvents.PRODUCTS_CHANGED,
        data: { ids: products.map((p) => p.product_id) }
    });
}
exports.config = {
    event: framework_1.IntermediateEvents.SERVICE_ZONE_CHANGED,
    context: {
        subscriberId: 'service-zone-changed-handler'
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWxnb2xpYS1zZXJ2aWNlLXpvbmUtY2hhbmdlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9zdWJzY3JpYmVycy9hbGdvbGlhLXNlcnZpY2Utem9uZS1jaGFuZ2VkLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQVFBLDRDQW1DQztBQTFDRCxxREFBOEU7QUFFOUUsbURBQXVFO0FBRXZFLDZFQUFtRDtBQUNuRCx1RkFBNEQ7QUFFN0MsS0FBSyxVQUFVLHlCQUF5QixDQUFDLEVBQ3RELEtBQUssRUFDTCxTQUFTLEVBQ3NCO0lBQy9CLE1BQU0sZUFBZSxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFBO0lBQ3JDLE1BQU0sS0FBSyxHQUFHLFNBQVMsQ0FBQyxPQUFPLENBQUMsaUNBQXlCLENBQUMsS0FBSyxDQUFDLENBQUE7SUFDaEUsTUFBTSxRQUFRLEdBQUcsU0FBUyxDQUFDLE9BQU8sQ0FBQyxlQUFPLENBQUMsU0FBUyxDQUFDLENBQUE7SUFFckQsTUFBTSxFQUNKLElBQUksRUFBRSxDQUFDLE1BQU0sQ0FBQyxFQUNmLEdBQUcsTUFBTSxLQUFLLENBQUMsS0FBSyxDQUFDO1FBQ3BCLE1BQU0sRUFBRSw2QkFBaUIsQ0FBQyxVQUFVO1FBQ3BDLE1BQU0sRUFBRSxDQUFDLFdBQVcsQ0FBQztRQUNyQixPQUFPLEVBQUU7WUFDUCxlQUFlO1NBQ2hCO1FBQ0QsV0FBVyxFQUFFLElBQUk7S0FDbEIsQ0FBQyxDQUFBO0lBRUYsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQ1osT0FBTTtJQUNSLENBQUM7SUFFRCxNQUFNLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxHQUFHLE1BQU0sS0FBSyxDQUFDLEtBQUssQ0FBQztRQUMzQyxNQUFNLEVBQUUsd0JBQWEsQ0FBQyxVQUFVO1FBQ2hDLE1BQU0sRUFBRSxDQUFDLFlBQVksQ0FBQztRQUN0QixPQUFPLEVBQUU7WUFDUCxTQUFTLEVBQUUsTUFBTSxDQUFDLEVBQUU7U0FDckI7S0FDRixDQUFDLENBQUE7SUFFRixNQUFNLFFBQVEsQ0FBQyxJQUFJLENBQUM7UUFDbEIsSUFBSSxFQUFFLHlCQUFhLENBQUMsZ0JBQWdCO1FBQ3BDLElBQUksRUFBRSxFQUFFLEdBQUcsRUFBRSxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLEVBQUU7S0FDakQsQ0FBQyxDQUFBO0FBQ0osQ0FBQztBQUVZLFFBQUEsTUFBTSxHQUFxQjtJQUN0QyxLQUFLLEVBQUUsOEJBQWtCLENBQUMsb0JBQW9CO0lBQzlDLE9BQU8sRUFBRTtRQUNQLFlBQVksRUFBRSw4QkFBOEI7S0FDN0M7Q0FDRixDQUFBIn0=