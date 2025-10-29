"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
exports.default = sellerStatusChangedHandler;
const utils_1 = require("@medusajs/framework/utils");
const framework_1 = require("@mercurjs/framework");
const framework_2 = require("@mercurjs/framework");
const seller_product_1 = __importDefault(require("../links/seller-product"));
async function sellerStatusChangedHandler({ event, container }) {
    const query = container.resolve(utils_1.ContainerRegistrationKeys.QUERY);
    const eventBus = container.resolve(utils_1.Modules.EVENT_BUS);
    const { data: products } = await query.graph({
        entity: seller_product_1.default.entryPoint,
        fields: ['product_id'],
        filters: {
            seller_id: event.data.id
        }
    });
    if (!products.length) {
        return;
    }
    await eventBus.emit({
        name: framework_2.AlgoliaEvents.PRODUCTS_CHANGED,
        data: {
            ids: products.map((p) => p.product_id)
        }
    });
}
exports.config = {
    event: framework_1.SellerEvents.STORE_STATUS_CHANGED,
    context: {
        subscriberId: 'seller-store-status-changed-handler'
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsbGVyLXN0YXR1cy1jaGFuZ2VkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL3N1YnNjcmliZXJzL3NlbGxlci1zdGF0dXMtY2hhbmdlZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFRQSw2Q0F5QkM7QUFoQ0QscURBQThFO0FBRTlFLG1EQUErRDtBQUMvRCxtREFBbUQ7QUFFbkQsNkVBQW1EO0FBRXBDLEtBQUssVUFBVSwwQkFBMEIsQ0FBQyxFQUN2RCxLQUFLLEVBQ0wsU0FBUyxFQUNpRDtJQUMxRCxNQUFNLEtBQUssR0FBRyxTQUFTLENBQUMsT0FBTyxDQUFDLGlDQUF5QixDQUFDLEtBQUssQ0FBQyxDQUFBO0lBQ2hFLE1BQU0sUUFBUSxHQUFHLFNBQVMsQ0FBQyxPQUFPLENBQUMsZUFBTyxDQUFDLFNBQVMsQ0FBQyxDQUFBO0lBRXJELE1BQU0sRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLEdBQUcsTUFBTSxLQUFLLENBQUMsS0FBSyxDQUFDO1FBQzNDLE1BQU0sRUFBRSx3QkFBYSxDQUFDLFVBQVU7UUFDaEMsTUFBTSxFQUFFLENBQUMsWUFBWSxDQUFDO1FBQ3RCLE9BQU8sRUFBRTtZQUNQLFNBQVMsRUFBRSxLQUFLLENBQUMsSUFBSSxDQUFDLEVBQUU7U0FDekI7S0FDRixDQUFDLENBQUE7SUFFRixJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQ3JCLE9BQU07SUFDUixDQUFDO0lBRUQsTUFBTSxRQUFRLENBQUMsSUFBSSxDQUFDO1FBQ2xCLElBQUksRUFBRSx5QkFBYSxDQUFDLGdCQUFnQjtRQUNwQyxJQUFJLEVBQUU7WUFDSixHQUFHLEVBQUUsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQztTQUN2QztLQUNGLENBQUMsQ0FBQTtBQUNKLENBQUM7QUFFWSxRQUFBLE1BQU0sR0FBcUI7SUFDdEMsS0FBSyxFQUFFLHdCQUFZLENBQUMsb0JBQW9CO0lBQ3hDLE9BQU8sRUFBRTtRQUNQLFlBQVksRUFBRSxxQ0FBcUM7S0FDcEQ7Q0FDRixDQUFBIn0=