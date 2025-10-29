"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteSellerLineItemWorkflow = void 0;
const workflows_sdk_1 = require("@medusajs/framework/workflows-sdk");
const core_flows_1 = require("@medusajs/medusa/core-flows");
const seller_shipping_option_1 = __importDefault(require("../../../links/seller-shipping-option"));
exports.deleteSellerLineItemWorkflow = (0, workflows_sdk_1.createWorkflow)('delete-seller-line-item', function (input) {
    const { data: lineItems } = (0, core_flows_1.useQueryGraphStep)({
        entity: 'line_item',
        fields: ['product.id', 'product.seller.id'],
        filters: {
            id: input.id
        },
        options: { throwIfKeyNotFound: true }
    }).config({ name: 'line-item-query' });
    const { data: carts } = (0, core_flows_1.useQueryGraphStep)({
        entity: 'cart',
        fields: ['id', 'shipping_methods.shipping_option_id'],
        filters: { id: input.cart_id },
        options: { throwIfKeyNotFound: true }
    }).config({ name: 'cart-query' });
    const optionIds = (0, workflows_sdk_1.transform)(carts[0], ({ shipping_methods }) => {
        return shipping_methods.map((method) => method.shipping_option_id);
    });
    const { data: sellerShippingOptions } = (0, core_flows_1.useQueryGraphStep)({
        entity: seller_shipping_option_1.default.entryPoint,
        fields: ['seller_id', 'shipping_option_id'],
        filters: { shipping_option_id: optionIds }
    }).config({ name: 'seller-shipping-option-query' });
    const shippingMethodsToRemove = (0, workflows_sdk_1.transform)({ sellerShippingOptions, lineItem: lineItems[0], cart: carts[0] }, ({ sellerShippingOptions, lineItem, cart }) => {
        const optionIdToRemove = sellerShippingOptions.find((option) => option.seller_id === lineItem.product.seller.id)?.shipping_option_id;
        if (!optionIdToRemove) {
            return [];
        }
        const methodId = cart.shipping_methods.find((method) => method.shipping_option_id === optionIdToRemove).id;
        return [methodId];
    });
    (0, workflows_sdk_1.parallelize)((0, core_flows_1.removeShippingMethodFromCartStep)({
        shipping_method_ids: shippingMethodsToRemove
    }), core_flows_1.deleteLineItemsWorkflow.runAsStep({
        input: {
            cart_id: input.cart_id,
            ids: [input.id]
        }
    }));
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVsZXRlLXNlbGxlci1saW5lLWl0ZW0uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvd29ya2Zsb3dzL2NhcnQvd29ya2Zsb3dzL2RlbGV0ZS1zZWxsZXItbGluZS1pdGVtLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLHFFQUkwQztBQUMxQyw0REFJb0M7QUFFcEMsbUdBQTRFO0FBTy9ELFFBQUEsNEJBQTRCLEdBQUcsSUFBQSw4QkFBYyxFQUN4RCx5QkFBeUIsRUFDekIsVUFBVSxLQUF3QztJQUNoRCxNQUFNLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSxHQUFHLElBQUEsOEJBQWlCLEVBQUM7UUFDNUMsTUFBTSxFQUFFLFdBQVc7UUFDbkIsTUFBTSxFQUFFLENBQUMsWUFBWSxFQUFFLG1CQUFtQixDQUFDO1FBQzNDLE9BQU8sRUFBRTtZQUNQLEVBQUUsRUFBRSxLQUFLLENBQUMsRUFBRTtTQUNiO1FBQ0QsT0FBTyxFQUFFLEVBQUUsa0JBQWtCLEVBQUUsSUFBSSxFQUFFO0tBQ3RDLENBQUMsQ0FBQyxNQUFNLENBQUMsRUFBRSxJQUFJLEVBQUUsaUJBQWlCLEVBQUUsQ0FBQyxDQUFBO0lBRXRDLE1BQU0sRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLEdBQUcsSUFBQSw4QkFBaUIsRUFBQztRQUN4QyxNQUFNLEVBQUUsTUFBTTtRQUNkLE1BQU0sRUFBRSxDQUFDLElBQUksRUFBRSxxQ0FBcUMsQ0FBQztRQUNyRCxPQUFPLEVBQUUsRUFBRSxFQUFFLEVBQUUsS0FBSyxDQUFDLE9BQU8sRUFBRTtRQUM5QixPQUFPLEVBQUUsRUFBRSxrQkFBa0IsRUFBRSxJQUFJLEVBQUU7S0FDdEMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxFQUFFLElBQUksRUFBRSxZQUFZLEVBQUUsQ0FBQyxDQUFBO0lBRWpDLE1BQU0sU0FBUyxHQUFHLElBQUEseUJBQVMsRUFBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLGdCQUFnQixFQUFFLEVBQUUsRUFBRTtRQUM3RCxPQUFPLGdCQUFnQixDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sRUFBRSxFQUFFLENBQUMsTUFBTSxDQUFDLGtCQUFrQixDQUFDLENBQUE7SUFDcEUsQ0FBQyxDQUFDLENBQUE7SUFFRixNQUFNLEVBQUUsSUFBSSxFQUFFLHFCQUFxQixFQUFFLEdBQUcsSUFBQSw4QkFBaUIsRUFBQztRQUN4RCxNQUFNLEVBQUUsZ0NBQXdCLENBQUMsVUFBVTtRQUMzQyxNQUFNLEVBQUUsQ0FBQyxXQUFXLEVBQUUsb0JBQW9CLENBQUM7UUFDM0MsT0FBTyxFQUFFLEVBQUUsa0JBQWtCLEVBQUUsU0FBUyxFQUFFO0tBQzNDLENBQUMsQ0FBQyxNQUFNLENBQUMsRUFBRSxJQUFJLEVBQUUsOEJBQThCLEVBQUUsQ0FBQyxDQUFBO0lBRW5ELE1BQU0sdUJBQXVCLEdBQUcsSUFBQSx5QkFBUyxFQUN2QyxFQUFFLHFCQUFxQixFQUFFLFFBQVEsRUFBRSxTQUFTLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUNqRSxDQUFDLEVBQUUscUJBQXFCLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxFQUFFLEVBQUU7UUFDNUMsTUFBTSxnQkFBZ0IsR0FBRyxxQkFBcUIsQ0FBQyxJQUFJLENBQ2pELENBQUMsTUFBTSxFQUFFLEVBQUUsQ0FBQyxNQUFNLENBQUMsU0FBUyxLQUFLLFFBQVEsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FDNUQsRUFBRSxrQkFBa0IsQ0FBQTtRQUVyQixJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztZQUN0QixPQUFPLEVBQUUsQ0FBQTtRQUNYLENBQUM7UUFFRCxNQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUN6QyxDQUFDLE1BQU0sRUFBRSxFQUFFLENBQUMsTUFBTSxDQUFDLGtCQUFrQixLQUFLLGdCQUFnQixDQUMzRCxDQUFDLEVBQUUsQ0FBQTtRQUVKLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQTtJQUNuQixDQUFDLENBQ0YsQ0FBQTtJQUVELElBQUEsMkJBQVcsRUFDVCxJQUFBLDZDQUFnQyxFQUFDO1FBQy9CLG1CQUFtQixFQUFFLHVCQUF1QjtLQUM3QyxDQUFDLEVBQ0Ysb0NBQXVCLENBQUMsU0FBUyxDQUFDO1FBQ2hDLEtBQUssRUFBRTtZQUNMLE9BQU8sRUFBRSxLQUFLLENBQUMsT0FBTztZQUN0QixHQUFHLEVBQUUsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDO1NBQ2hCO0tBQ0YsQ0FBQyxDQUNILENBQUE7QUFDSCxDQUFDLENBQ0YsQ0FBQSJ9