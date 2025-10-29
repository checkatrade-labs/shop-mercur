"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
exports.default = shippingOptionChangedHandler;
const utils_1 = require("@medusajs/framework/utils");
const framework_1 = require("@mercurjs/framework");
const seller_product_1 = __importDefault(require("../links/seller-product"));
const seller_shipping_option_1 = __importDefault(require("../links/seller-shipping-option"));
async function shippingOptionChangedHandler({ event, container }) {
    const shipping_option_id = event.data.id;
    const query = container.resolve(utils_1.ContainerRegistrationKeys.QUERY);
    const eventBus = container.resolve(utils_1.Modules.EVENT_BUS);
    const { data: [seller] } = await query.graph({
        entity: seller_shipping_option_1.default.entryPoint,
        fields: ['seller_id'],
        filters: {
            shipping_option_id
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
    event: framework_1.IntermediateEvents.SHIPPING_OPTION_CHANGED,
    context: {
        subscriberId: 'shipping-option-changed-handler'
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWxnb2xpYS1zaGlwcGluZy1vcHRpb24tY2hhbmdlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9zdWJzY3JpYmVycy9hbGdvbGlhLXNoaXBwaW5nLW9wdGlvbi1jaGFuZ2VkLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQVFBLCtDQW1DQztBQTFDRCxxREFBOEU7QUFFOUUsbURBQXVFO0FBRXZFLDZFQUFtRDtBQUNuRCw2RkFBa0U7QUFFbkQsS0FBSyxVQUFVLDRCQUE0QixDQUFDLEVBQ3pELEtBQUssRUFDTCxTQUFTLEVBQ3NCO0lBQy9CLE1BQU0sa0JBQWtCLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUE7SUFDeEMsTUFBTSxLQUFLLEdBQUcsU0FBUyxDQUFDLE9BQU8sQ0FBQyxpQ0FBeUIsQ0FBQyxLQUFLLENBQUMsQ0FBQTtJQUNoRSxNQUFNLFFBQVEsR0FBRyxTQUFTLENBQUMsT0FBTyxDQUFDLGVBQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQTtJQUVyRCxNQUFNLEVBQ0osSUFBSSxFQUFFLENBQUMsTUFBTSxDQUFDLEVBQ2YsR0FBRyxNQUFNLEtBQUssQ0FBQyxLQUFLLENBQUM7UUFDcEIsTUFBTSxFQUFFLGdDQUFvQixDQUFDLFVBQVU7UUFDdkMsTUFBTSxFQUFFLENBQUMsV0FBVyxDQUFDO1FBQ3JCLE9BQU8sRUFBRTtZQUNQLGtCQUFrQjtTQUNuQjtRQUNELFdBQVcsRUFBRSxJQUFJO0tBQ2xCLENBQUMsQ0FBQTtJQUVGLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUNaLE9BQU07SUFDUixDQUFDO0lBRUQsTUFBTSxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsR0FBRyxNQUFNLEtBQUssQ0FBQyxLQUFLLENBQUM7UUFDM0MsTUFBTSxFQUFFLHdCQUFhLENBQUMsVUFBVTtRQUNoQyxNQUFNLEVBQUUsQ0FBQyxZQUFZLENBQUM7UUFDdEIsT0FBTyxFQUFFO1lBQ1AsU0FBUyxFQUFFLE1BQU0sQ0FBQyxFQUFFO1NBQ3JCO0tBQ0YsQ0FBQyxDQUFBO0lBRUYsTUFBTSxRQUFRLENBQUMsSUFBSSxDQUFDO1FBQ2xCLElBQUksRUFBRSx5QkFBYSxDQUFDLGdCQUFnQjtRQUNwQyxJQUFJLEVBQUUsRUFBRSxHQUFHLEVBQUUsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxFQUFFO0tBQ2pELENBQUMsQ0FBQTtBQUNKLENBQUM7QUFFWSxRQUFBLE1BQU0sR0FBcUI7SUFDdEMsS0FBSyxFQUFFLDhCQUFrQixDQUFDLHVCQUF1QjtJQUNqRCxPQUFPLEVBQUU7UUFDUCxZQUFZLEVBQUUsaUNBQWlDO0tBQ2hEO0NBQ0YsQ0FBQSJ9