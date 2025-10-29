"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.listSellerShippingOptionsForCartWorkflow = void 0;
const core_flows_1 = require("@medusajs/medusa/core-flows");
const workflows_sdk_1 = require("@medusajs/workflows-sdk");
const steps_1 = require("../steps");
exports.listSellerShippingOptionsForCartWorkflow = (0, workflows_sdk_1.createWorkflow)('list-seller-shipping-options-for-cart', function (input) {
    const shipping_options = core_flows_1.listShippingOptionsForCartWorkflow.runAsStep({
        input
    });
    const filterPayload = (0, workflows_sdk_1.transform)({ shipping_options, input }, ({ shipping_options, input }) => ({
        shipping_options,
        cart_id: input.cart_id
    }));
    return new workflows_sdk_1.WorkflowResponse((0, steps_1.filterSellerShippingOptionsStep)(filterPayload));
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC1zZWxsZXItc2hpcHBpbmctb3B0aW9ucy1mb3ItY2FydC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy93b3JrZmxvd3MvY2FydC93b3JrZmxvd3MvbGlzdC1zZWxsZXItc2hpcHBpbmctb3B0aW9ucy1mb3ItY2FydC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSw0REFBZ0Y7QUFDaEYsMkRBSWdDO0FBRWhDLG9DQUEwRDtBQUU3QyxRQUFBLHdDQUF3QyxHQUFHLElBQUEsOEJBQWMsRUFDcEUsdUNBQXVDLEVBQ3ZDLFVBQVUsS0FBOEM7SUFDdEQsTUFBTSxnQkFBZ0IsR0FBRywrQ0FBa0MsQ0FBQyxTQUFTLENBQUM7UUFDcEUsS0FBSztLQUNOLENBQUMsQ0FBQTtJQUVGLE1BQU0sYUFBYSxHQUFHLElBQUEseUJBQVMsRUFDN0IsRUFBRSxnQkFBZ0IsRUFBRSxLQUFLLEVBQUUsRUFDM0IsQ0FBQyxFQUFFLGdCQUFnQixFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQ2hDLGdCQUFnQjtRQUNoQixPQUFPLEVBQUUsS0FBSyxDQUFDLE9BQU87S0FDdkIsQ0FBQyxDQUNILENBQUE7SUFDRCxPQUFPLElBQUksZ0NBQWdCLENBQUMsSUFBQSx1Q0FBK0IsRUFBQyxhQUFhLENBQUMsQ0FBQyxDQUFBO0FBQzdFLENBQUMsQ0FDRixDQUFBIn0=