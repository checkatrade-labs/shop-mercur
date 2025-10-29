"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getVendorOrdersListWorkflow = void 0;
const utils_1 = require("@medusajs/framework/utils");
const workflows_sdk_1 = require("@medusajs/framework/workflows-sdk");
const core_flows_1 = require("@medusajs/medusa/core-flows");
const aggregate_status_1 = require("../utils/aggregate-status");
exports.getVendorOrdersListWorkflow = (0, workflows_sdk_1.createWorkflow)('get-vendor-orders-list', (input) => {
    const fields = (0, workflows_sdk_1.transform)(input, ({ fields }) => {
        return (0, utils_1.deduplicate)([
            ...fields,
            'id',
            'status',
            'version',
            'items.*',
            'fulfillments.packed_at',
            'fulfillments.shipped_at',
            'fulfillments.delivered_at',
            'fulfillments.canceled_at',
            'split_order_payment.*'
        ]);
    });
    const orders = (0, core_flows_1.useRemoteQueryStep)({
        entry_point: 'orders',
        fields,
        variables: input.variables,
        list: true
    });
    const aggregatedOrders = (0, workflows_sdk_1.transform)({ orders }, ({ orders }) => {
        const orders_ = orders;
        const data = orders_.rows ? orders_.rows : orders_;
        for (const order of data) {
            delete order.summary;
            order.payment_status = order.split_order_payment?.status;
            order.fulfillment_status = (0, aggregate_status_1.getLastFulfillmentStatus)(order);
        }
        return orders;
    });
    return new workflows_sdk_1.WorkflowResponse(aggregatedOrders);
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2V0LXZlbmRvci1vcmRlci1saXN0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vc3JjL3dvcmtmbG93cy9vcmRlci93b3JrZmxvd3MvZ2V0LXZlbmRvci1vcmRlci1saXN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUNBLHFEQUF1RDtBQUN2RCxxRUFLMEM7QUFDMUMsNERBR29DO0FBRXBDLGdFQUFvRTtBQUV2RCxRQUFBLDJCQUEyQixHQUFHLElBQUEsOEJBQWMsRUFDdkQsd0JBQXdCLEVBQ3hCLENBQUMsS0FBK0MsRUFBRSxFQUFFO0lBQ2xELE1BQU0sTUFBTSxHQUFHLElBQUEseUJBQVMsRUFBQyxLQUFLLEVBQUUsQ0FBQyxFQUFFLE1BQU0sRUFBRSxFQUFFLEVBQUU7UUFDN0MsT0FBTyxJQUFBLG1CQUFXLEVBQUM7WUFDakIsR0FBRyxNQUFNO1lBQ1QsSUFBSTtZQUNKLFFBQVE7WUFDUixTQUFTO1lBQ1QsU0FBUztZQUNULHdCQUF3QjtZQUN4Qix5QkFBeUI7WUFDekIsMkJBQTJCO1lBQzNCLDBCQUEwQjtZQUMxQix1QkFBdUI7U0FDeEIsQ0FBQyxDQUFBO0lBQ0osQ0FBQyxDQUFDLENBQUE7SUFFRixNQUFNLE1BQU0sR0FBZSxJQUFBLCtCQUFrQixFQUFDO1FBQzVDLFdBQVcsRUFBRSxRQUFRO1FBQ3JCLE1BQU07UUFDTixTQUFTLEVBQUUsS0FBSyxDQUFDLFNBQVM7UUFDMUIsSUFBSSxFQUFFLElBQUk7S0FDWCxDQUFDLENBQUE7SUFFRixNQUFNLGdCQUFnQixHQUFHLElBQUEseUJBQVMsRUFBQyxFQUFFLE1BQU0sRUFBRSxFQUFFLENBQUMsRUFBRSxNQUFNLEVBQUUsRUFBRSxFQUFFO1FBQzVELE1BQU0sT0FBTyxHQUFHLE1BQWEsQ0FBQTtRQUM3QixNQUFNLElBQUksR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUE7UUFFbEQsS0FBSyxNQUFNLEtBQUssSUFBSSxJQUFJLEVBQUUsQ0FBQztZQUN6QixPQUFPLEtBQUssQ0FBQyxPQUFPLENBQUE7WUFFcEIsS0FBSyxDQUFDLGNBQWMsR0FBRyxLQUFLLENBQUMsbUJBQW1CLEVBQUUsTUFBTSxDQUFBO1lBQ3hELEtBQUssQ0FBQyxrQkFBa0IsR0FBRyxJQUFBLDJDQUF3QixFQUNqRCxLQUFLLENBQ2tDLENBQUE7UUFDM0MsQ0FBQztRQUVELE9BQU8sTUFBTSxDQUFBO0lBQ2YsQ0FBQyxDQUFDLENBQUE7SUFFRixPQUFPLElBQUksZ0NBQWdCLENBQUMsZ0JBQWdCLENBQUMsQ0FBQTtBQUMvQyxDQUFDLENBQ0YsQ0FBQSJ9