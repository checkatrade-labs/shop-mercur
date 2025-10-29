"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.listSellerReturnShippingOptionsForOrderWorkflow = void 0;
const core_flows_1 = require("@medusajs/medusa/core-flows");
const workflows_sdk_1 = require("@medusajs/workflows-sdk");
exports.listSellerReturnShippingOptionsForOrderWorkflow = (0, workflows_sdk_1.createWorkflow)('list-seller-return-shipping-options-for-order', function ({ order_id }) {
    const orderQuery = (0, core_flows_1.useQueryGraphStep)({
        entity: 'order',
        fields: ['order_set.cart_id', 'seller.shipping_options.id'],
        filters: {
            id: order_id
        },
        options: { throwIfKeyNotFound: true }
    });
    const stepInput = (0, workflows_sdk_1.transform)({ orderQuery }, ({ orderQuery }) => {
        const transformed = orderQuery.data[0];
        return {
            cart_id: transformed.order_set.cart_id,
            is_return: true,
            option_ids: transformed.seller.shipping_options.map((option) => option.id)
        };
    });
    return new workflows_sdk_1.WorkflowResponse(core_flows_1.listShippingOptionsForCartWorkflow.runAsStep({
        input: stepInput
    }));
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC1zZWxsZXItcmV0dXJuLXNoaXBwaW5nLW9wdGlvbnMtZm9yLW9yZGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vc3JjL3dvcmtmbG93cy9jYXJ0L3dvcmtmbG93cy9saXN0LXNlbGxlci1yZXR1cm4tc2hpcHBpbmctb3B0aW9ucy1mb3Itb3JkZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsNERBR29DO0FBQ3BDLDJEQUlnQztBQUVuQixRQUFBLCtDQUErQyxHQUFHLElBQUEsOEJBQWMsRUFDM0UsK0NBQStDLEVBQy9DLFVBQVUsRUFBRSxRQUFRLEVBQXdCO0lBQzFDLE1BQU0sVUFBVSxHQUFHLElBQUEsOEJBQWlCLEVBQUM7UUFDbkMsTUFBTSxFQUFFLE9BQU87UUFDZixNQUFNLEVBQUUsQ0FBQyxtQkFBbUIsRUFBRSw0QkFBNEIsQ0FBQztRQUMzRCxPQUFPLEVBQUU7WUFDUCxFQUFFLEVBQUUsUUFBUTtTQUNiO1FBQ0QsT0FBTyxFQUFFLEVBQUUsa0JBQWtCLEVBQUUsSUFBSSxFQUFFO0tBQ3RDLENBQUMsQ0FBQTtJQUVGLE1BQU0sU0FBUyxHQUFHLElBQUEseUJBQVMsRUFBQyxFQUFFLFVBQVUsRUFBRSxFQUFFLENBQUMsRUFBRSxVQUFVLEVBQUUsRUFBRSxFQUFFO1FBQzdELE1BQU0sV0FBVyxHQUFHLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUE7UUFFdEMsT0FBTztZQUNMLE9BQU8sRUFBRSxXQUFXLENBQUMsU0FBUyxDQUFDLE9BQU87WUFDdEMsU0FBUyxFQUFFLElBQUk7WUFDZixVQUFVLEVBQUUsV0FBVyxDQUFDLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxHQUFHLENBQ2pELENBQUMsTUFBTSxFQUFFLEVBQUUsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUN0QjtTQUNGLENBQUE7SUFDSCxDQUFDLENBQUMsQ0FBQTtJQUVGLE9BQU8sSUFBSSxnQ0FBZ0IsQ0FDekIsK0NBQWtDLENBQUMsU0FBUyxDQUFDO1FBQzNDLEtBQUssRUFBRSxTQUFTO0tBQ2pCLENBQUMsQ0FDSCxDQUFBO0FBQ0gsQ0FBQyxDQUNGLENBQUEifQ==