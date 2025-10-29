"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
exports.default = inventoryItemChangedHandler;
const utils_1 = require("@medusajs/framework/utils");
const framework_1 = require("@mercurjs/framework");
async function inventoryItemChangedHandler({ event, container }) {
    const query = container.resolve(utils_1.ContainerRegistrationKeys.QUERY);
    const eventBus = container.resolve(utils_1.Modules.EVENT_BUS);
    const { data: items } = await query.graph({
        entity: 'inventory_item',
        fields: ['variants.product_id'],
        filters: {
            id: event.data.id
        }
    });
    const products = items
        .flatMap((items) => items.variants)
        .map((variant) => variant.product_id);
    await eventBus.emit({
        name: framework_1.AlgoliaEvents.PRODUCTS_CHANGED,
        data: { ids: [...new Set(products)] }
    });
}
exports.config = {
    event: framework_1.IntermediateEvents.INVENTORY_ITEM_CHANGED,
    context: {
        subscriberId: 'inventory-item-changed-handler'
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWxnb2xpYS1pbnZlbnRvcnktaXRlbS5jaGFuZ2VkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL3N1YnNjcmliZXJzL2FsZ29saWEtaW52ZW50b3J5LWl0ZW0uY2hhbmdlZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFLQSw4Q0F1QkM7QUEzQkQscURBQThFO0FBRTlFLG1EQUF1RTtBQUV4RCxLQUFLLFVBQVUsMkJBQTJCLENBQUMsRUFDeEQsS0FBSyxFQUNMLFNBQVMsRUFDaUM7SUFDMUMsTUFBTSxLQUFLLEdBQUcsU0FBUyxDQUFDLE9BQU8sQ0FBQyxpQ0FBeUIsQ0FBQyxLQUFLLENBQUMsQ0FBQTtJQUNoRSxNQUFNLFFBQVEsR0FBRyxTQUFTLENBQUMsT0FBTyxDQUFDLGVBQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQTtJQUVyRCxNQUFNLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxHQUFHLE1BQU0sS0FBSyxDQUFDLEtBQUssQ0FBQztRQUN4QyxNQUFNLEVBQUUsZ0JBQWdCO1FBQ3hCLE1BQU0sRUFBRSxDQUFDLHFCQUFxQixDQUFDO1FBQy9CLE9BQU8sRUFBRTtZQUNQLEVBQUUsRUFBRSxLQUFLLENBQUMsSUFBSSxDQUFDLEVBQUU7U0FDbEI7S0FDRixDQUFDLENBQUE7SUFFRixNQUFNLFFBQVEsR0FBRyxLQUFLO1NBQ25CLE9BQU8sQ0FBQyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQztTQUNsQyxHQUFHLENBQUMsQ0FBQyxPQUFPLEVBQUUsRUFBRSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQTtJQUV2QyxNQUFNLFFBQVEsQ0FBQyxJQUFJLENBQUM7UUFDbEIsSUFBSSxFQUFFLHlCQUFhLENBQUMsZ0JBQWdCO1FBQ3BDLElBQUksRUFBRSxFQUFFLEdBQUcsRUFBRSxDQUFDLEdBQUcsSUFBSSxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUMsRUFBRTtLQUN0QyxDQUFDLENBQUE7QUFDSixDQUFDO0FBRVksUUFBQSxNQUFNLEdBQXFCO0lBQ3RDLEtBQUssRUFBRSw4QkFBa0IsQ0FBQyxzQkFBc0I7SUFDaEQsT0FBTyxFQUFFO1FBQ1AsWUFBWSxFQUFFLGdDQUFnQztLQUMvQztDQUNGLENBQUEifQ==