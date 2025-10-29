"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createVendorPriceListPricesWorkflow = void 0;
const workflows_sdk_1 = require("@medusajs/framework/workflows-sdk");
const core_flows_1 = require("@medusajs/medusa/core-flows");
const steps_1 = require("../steps");
exports.createVendorPriceListPricesWorkflow = (0, workflows_sdk_1.createWorkflow)('create-vendor-prices-list', function ({ prices, price_list_id, seller_id }) {
    (0, steps_1.validateVendorPriceListPricesStep)({ create: prices, seller_id });
    const result = core_flows_1.createPriceListPricesWorkflow.runAsStep({
        input: {
            data: [
                {
                    id: price_list_id,
                    prices
                }
            ]
        }
    });
    return new workflows_sdk_1.WorkflowResponse(result);
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JlYXRlLXZlbmRvci1wcmljZS1saXN0LXByaWNlcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy93b3JrZmxvd3MvcHJpY2UtbGlzdC93b3JrZmxvd3MvY3JlYXRlLXZlbmRvci1wcmljZS1saXN0LXByaWNlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFDQSxxRUFHMEM7QUFDMUMsNERBQTJFO0FBRTNFLG9DQUE0RDtBQUUvQyxRQUFBLG1DQUFtQyxHQUFHLElBQUEsOEJBQWMsRUFDL0QsMkJBQTJCLEVBQzNCLFVBQVUsRUFDUixNQUFNLEVBQ04sYUFBYSxFQUNiLFNBQVMsRUFLVjtJQUNDLElBQUEseUNBQWlDLEVBQUMsRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxDQUFDLENBQUE7SUFDaEUsTUFBTSxNQUFNLEdBQUcsMENBQTZCLENBQUMsU0FBUyxDQUFDO1FBQ3JELEtBQUssRUFBRTtZQUNMLElBQUksRUFBRTtnQkFDSjtvQkFDRSxFQUFFLEVBQUUsYUFBYTtvQkFDakIsTUFBTTtpQkFDUDthQUNGO1NBQ0Y7S0FDRixDQUFDLENBQUE7SUFFRixPQUFPLElBQUksZ0NBQWdCLENBQUMsTUFBTSxDQUFDLENBQUE7QUFDckMsQ0FBQyxDQUNGLENBQUEifQ==