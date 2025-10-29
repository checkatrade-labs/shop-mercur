"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getFormattedOrderSetListWorkflow = void 0;
const utils_1 = require("@medusajs/framework/utils");
const workflows_sdk_1 = require("@medusajs/framework/workflows-sdk");
const core_flows_1 = require("@medusajs/medusa/core-flows");
const utils_2 = require("../utils");
exports.getFormattedOrderSetListWorkflow = (0, workflows_sdk_1.createWorkflow)('get-formatted-order-set-list', function (input) {
    const fields = (0, workflows_sdk_1.transform)(input, ({ fields }) => {
        return (0, utils_1.deduplicate)([
            ...(fields ?? []),
            'id',
            'updated_at',
            'created_at',
            'display_id',
            'customer_id',
            'customer.*',
            'cart_id',
            'cart.*',
            'payment_collection_id',
            'payment_collection.*',
            'orders.id',
            'orders.currency_code',
            'orders.email',
            'orders.created_at',
            'orders.updated_at',
            'orders.completed_at',
            'orders.status',
            'orders.payment_status',
            'orders.fulfillment_status',
            'orders.total',
            'orders.subtotal',
            'orders.tax_total',
            'orders.discount_total',
            'orders.discount_tax_total',
            'orders.original_total',
            'orders.original_tax_total',
            'orders.item_total',
            'orders.item_subtotal',
            'orders.item_tax_total',
            'orders.sales_channel_id',
            'orders.original_item_total',
            'orders.original_item_subtotal',
            'orders.original_item_tax_total',
            'orders.shipping_total',
            'orders.shipping_subtotal',
            'orders.shipping_tax_total',
            'orders.items.*',
            'orders.customer.*',
            'orders.fulfillments.*'
        ]);
    });
    const { data, metadata } = (0, core_flows_1.useQueryGraphStep)({
        entity: 'order_set',
        fields,
        filters: input.filters,
        pagination: input.pagination
    });
    const formattedOrderSets = (0, workflows_sdk_1.transform)(data, utils_2.formatOrderSets);
    return new workflows_sdk_1.WorkflowResponse({ data: formattedOrderSets, metadata });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2V0LWZvcm1hdHRlZC1vcmRlci1zZXQtbGlzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy93b3JrZmxvd3Mvb3JkZXItc2V0L3dvcmtmbG93cy9nZXQtZm9ybWF0dGVkLW9yZGVyLXNldC1saXN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLHFEQUF1RDtBQUN2RCxxRUFJMEM7QUFDMUMsNERBQStEO0FBRS9ELG9DQUEwQztBQUU3QixRQUFBLGdDQUFnQyxHQUFHLElBQUEsOEJBQWMsRUFDNUQsOEJBQThCLEVBQzlCLFVBQVUsS0FRVDtJQUNDLE1BQU0sTUFBTSxHQUFHLElBQUEseUJBQVMsRUFBQyxLQUFLLEVBQUUsQ0FBQyxFQUFFLE1BQU0sRUFBRSxFQUFFLEVBQUU7UUFDN0MsT0FBTyxJQUFBLG1CQUFXLEVBQUM7WUFDakIsR0FBRyxDQUFDLE1BQU0sSUFBSSxFQUFFLENBQUM7WUFDakIsSUFBSTtZQUNKLFlBQVk7WUFDWixZQUFZO1lBQ1osWUFBWTtZQUNaLGFBQWE7WUFDYixZQUFZO1lBQ1osU0FBUztZQUNULFFBQVE7WUFDUix1QkFBdUI7WUFDdkIsc0JBQXNCO1lBQ3RCLFdBQVc7WUFDWCxzQkFBc0I7WUFDdEIsY0FBYztZQUNkLG1CQUFtQjtZQUNuQixtQkFBbUI7WUFDbkIscUJBQXFCO1lBQ3JCLGVBQWU7WUFDZix1QkFBdUI7WUFDdkIsMkJBQTJCO1lBQzNCLGNBQWM7WUFDZCxpQkFBaUI7WUFDakIsa0JBQWtCO1lBQ2xCLHVCQUF1QjtZQUN2QiwyQkFBMkI7WUFDM0IsdUJBQXVCO1lBQ3ZCLDJCQUEyQjtZQUMzQixtQkFBbUI7WUFDbkIsc0JBQXNCO1lBQ3RCLHVCQUF1QjtZQUN2Qix5QkFBeUI7WUFDekIsNEJBQTRCO1lBQzVCLCtCQUErQjtZQUMvQixnQ0FBZ0M7WUFDaEMsdUJBQXVCO1lBQ3ZCLDBCQUEwQjtZQUMxQiwyQkFBMkI7WUFDM0IsZ0JBQWdCO1lBQ2hCLG1CQUFtQjtZQUNuQix1QkFBdUI7U0FDeEIsQ0FBQyxDQUFBO0lBQ0osQ0FBQyxDQUFDLENBQUE7SUFFRixNQUFNLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxHQUFHLElBQUEsOEJBQWlCLEVBQUM7UUFDM0MsTUFBTSxFQUFFLFdBQVc7UUFDbkIsTUFBTTtRQUNOLE9BQU8sRUFBRSxLQUFLLENBQUMsT0FBTztRQUN0QixVQUFVLEVBQUUsS0FBSyxDQUFDLFVBQVU7S0FDN0IsQ0FBQyxDQUFBO0lBRUYsTUFBTSxrQkFBa0IsR0FBRyxJQUFBLHlCQUFTLEVBQUMsSUFBSSxFQUFFLHVCQUFlLENBQUMsQ0FBQTtJQUUzRCxPQUFPLElBQUksZ0NBQWdCLENBQUMsRUFBRSxJQUFJLEVBQUUsa0JBQWtCLEVBQUUsUUFBUSxFQUFFLENBQUMsQ0FBQTtBQUNyRSxDQUFDLENBQ0YsQ0FBQSJ9