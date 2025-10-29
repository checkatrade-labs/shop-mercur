"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
exports.default = stockLocationChangedHandler;
const utils_1 = require("@medusajs/framework/utils");
const framework_1 = require("@mercurjs/framework");
const seller_product_1 = __importDefault(require("../links/seller-product"));
const seller_stock_location_1 = __importDefault(require("../links/seller-stock-location"));
async function stockLocationChangedHandler({ event, container }) {
    const stock_location_id = event.data.id;
    const query = container.resolve(utils_1.ContainerRegistrationKeys.QUERY);
    const eventBus = container.resolve(utils_1.Modules.EVENT_BUS);
    const { data: [seller] } = await query.graph({
        entity: seller_stock_location_1.default.entryPoint,
        fields: ['seller_id'],
        filters: {
            stock_location_id
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
    event: framework_1.IntermediateEvents.STOCK_LOCATION_CHANGED,
    context: {
        subscriberId: 'stock-location-changed-handler'
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWxnb2xpYS1zdG9jay1sb2NhdGlvbi1jaGFuZ2VkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL3N1YnNjcmliZXJzL2FsZ29saWEtc3RvY2stbG9jYXRpb24tY2hhbmdlZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFRQSw4Q0FtQ0M7QUExQ0QscURBQThFO0FBRTlFLG1EQUF1RTtBQUV2RSw2RUFBbUQ7QUFDbkQsMkZBQWdFO0FBRWpELEtBQUssVUFBVSwyQkFBMkIsQ0FBQyxFQUN4RCxLQUFLLEVBQ0wsU0FBUyxFQUNzQjtJQUMvQixNQUFNLGlCQUFpQixHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFBO0lBQ3ZDLE1BQU0sS0FBSyxHQUFHLFNBQVMsQ0FBQyxPQUFPLENBQUMsaUNBQXlCLENBQUMsS0FBSyxDQUFDLENBQUE7SUFDaEUsTUFBTSxRQUFRLEdBQUcsU0FBUyxDQUFDLE9BQU8sQ0FBQyxlQUFPLENBQUMsU0FBUyxDQUFDLENBQUE7SUFFckQsTUFBTSxFQUNKLElBQUksRUFBRSxDQUFDLE1BQU0sQ0FBQyxFQUNmLEdBQUcsTUFBTSxLQUFLLENBQUMsS0FBSyxDQUFDO1FBQ3BCLE1BQU0sRUFBRSwrQkFBbUIsQ0FBQyxVQUFVO1FBQ3RDLE1BQU0sRUFBRSxDQUFDLFdBQVcsQ0FBQztRQUNyQixPQUFPLEVBQUU7WUFDUCxpQkFBaUI7U0FDbEI7UUFDRCxXQUFXLEVBQUUsSUFBSTtLQUNsQixDQUFDLENBQUE7SUFFRixJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDWixPQUFNO0lBQ1IsQ0FBQztJQUVELE1BQU0sRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLEdBQUcsTUFBTSxLQUFLLENBQUMsS0FBSyxDQUFDO1FBQzNDLE1BQU0sRUFBRSx3QkFBYSxDQUFDLFVBQVU7UUFDaEMsTUFBTSxFQUFFLENBQUMsWUFBWSxDQUFDO1FBQ3RCLE9BQU8sRUFBRTtZQUNQLFNBQVMsRUFBRSxNQUFNLENBQUMsRUFBRTtTQUNyQjtLQUNGLENBQUMsQ0FBQTtJQUVGLE1BQU0sUUFBUSxDQUFDLElBQUksQ0FBQztRQUNsQixJQUFJLEVBQUUseUJBQWEsQ0FBQyxnQkFBZ0I7UUFDcEMsSUFBSSxFQUFFLEVBQUUsR0FBRyxFQUFFLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsRUFBRTtLQUNqRCxDQUFDLENBQUE7QUFDSixDQUFDO0FBRVksUUFBQSxNQUFNLEdBQXFCO0lBQ3RDLEtBQUssRUFBRSw4QkFBa0IsQ0FBQyxzQkFBc0I7SUFDaEQsT0FBTyxFQUFFO1FBQ1AsWUFBWSxFQUFFLGdDQUFnQztLQUMvQztDQUNGLENBQUEifQ==