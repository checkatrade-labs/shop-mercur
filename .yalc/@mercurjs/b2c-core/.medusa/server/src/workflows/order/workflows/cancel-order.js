"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cancelOrderWorkflow = exports.cancelValidateOrder = void 0;
const utils_1 = require("@medusajs/framework/utils");
const workflows_sdk_1 = require("@medusajs/framework/workflows-sdk");
const core_flows_1 = require("@medusajs/medusa/core-flows");
const steps_1 = require("../../payout/steps");
const workflows_1 = require("../../split-order-payment/workflows");
exports.cancelValidateOrder = (0, workflows_sdk_1.createStep)('cancel-validate-order', async ({ order }) => {
    const order_ = order;
    if (order_.status === utils_1.OrderStatus.CANCELED) {
        throw new utils_1.MedusaError(utils_1.MedusaError.Types.INVALID_DATA, `Order with id ${order.id} has been canceled.`);
    }
    if (order_.fulfillments.some((o) => !o.canceled_at)) {
        throw new utils_1.MedusaError(utils_1.MedusaError.Types.NOT_ALLOWED, `All fulfillments must be canceled before canceling an order`);
    }
});
exports.cancelOrderWorkflow = (0, workflows_sdk_1.createWorkflow)('cancel-single-order', (input) => {
    const orderQuery = (0, core_flows_1.useQueryGraphStep)({
        entity: 'orders',
        fields: [
            'id',
            'status',
            'currency_code',
            'items.id',
            'fulfillments.canceled_at',
            'split_order_payment.*',
            'payouts.*'
        ],
        filters: { id: input.order_id },
        options: { throwIfKeyNotFound: true }
    }).config({ name: 'get-cart' });
    const order = (0, workflows_sdk_1.transform)({ orderQuery }, ({ orderQuery }) => orderQuery.data[0]);
    (0, exports.cancelValidateOrder)({ order, input });
    const lineItemIds = (0, workflows_sdk_1.transform)({ order }, ({ order }) => {
        return order.items?.map((i) => i.id);
    });
    const payoutId = (0, workflows_sdk_1.transform)({ order }, ({ order }) => {
        return order.payouts && order.payouts[0] ? order.payouts[0].id : null;
    });
    (0, workflows_sdk_1.parallelize)((0, core_flows_1.deleteReservationsByLineItemsStep)(lineItemIds), (0, core_flows_1.cancelOrdersStep)({ orderIds: [order.id] }), workflows_1.refundSplitOrderPaymentWorkflow.runAsStep({
        input: {
            id: order.split_order_payment.id,
            amount: order.split_order_payment.captured_amount
        }
    }), (0, steps_1.createPayoutReversalStep)({
        payout_id: payoutId,
        amount: order.split_order_payment.captured_amount,
        currency_code: order.currency_code
    }), (0, core_flows_1.emitEventStep)({
        eventName: utils_1.OrderWorkflowEvents.CANCELED,
        data: { id: order.id }
    }));
    return new workflows_sdk_1.WorkflowResponse(order.id);
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FuY2VsLW9yZGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vc3JjL3dvcmtmbG93cy9vcmRlci93b3JrZmxvd3MvY2FuY2VsLW9yZGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQU1BLHFEQUlrQztBQUNsQyxxRUFPMEM7QUFDMUMsNERBTW9DO0FBRXBDLDhDQUE2RDtBQUM3RCxtRUFBcUY7QUFFeEUsUUFBQSxtQkFBbUIsR0FBRyxJQUFBLDBCQUFVLEVBQzNDLHVCQUF1QixFQUN2QixLQUFLLEVBQUUsRUFBRSxLQUFLLEVBQWdDLEVBQUUsRUFBRTtJQUNoRCxNQUFNLE1BQU0sR0FBRyxLQUdkLENBQUE7SUFFRCxJQUFJLE1BQU0sQ0FBQyxNQUFNLEtBQUssbUJBQVcsQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUMzQyxNQUFNLElBQUksbUJBQVcsQ0FDbkIsbUJBQVcsQ0FBQyxLQUFLLENBQUMsWUFBWSxFQUM5QixpQkFBaUIsS0FBSyxDQUFDLEVBQUUscUJBQXFCLENBQy9DLENBQUE7SUFDSCxDQUFDO0lBRUQsSUFBSSxNQUFNLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLEVBQUUsQ0FBQztRQUNwRCxNQUFNLElBQUksbUJBQVcsQ0FDbkIsbUJBQVcsQ0FBQyxLQUFLLENBQUMsV0FBVyxFQUM3Qiw2REFBNkQsQ0FDOUQsQ0FBQTtJQUNILENBQUM7QUFDSCxDQUFDLENBQ0YsQ0FBQTtBQUVZLFFBQUEsbUJBQW1CLEdBQUcsSUFBQSw4QkFBYyxFQUMvQyxxQkFBcUIsRUFDckIsQ0FBQyxLQUEyRCxFQUFFLEVBQUU7SUFDOUQsTUFBTSxVQUFVLEdBQUcsSUFBQSw4QkFBaUIsRUFBQztRQUNuQyxNQUFNLEVBQUUsUUFBUTtRQUNoQixNQUFNLEVBQUU7WUFDTixJQUFJO1lBQ0osUUFBUTtZQUNSLGVBQWU7WUFDZixVQUFVO1lBQ1YsMEJBQTBCO1lBQzFCLHVCQUF1QjtZQUN2QixXQUFXO1NBQ1o7UUFDRCxPQUFPLEVBQUUsRUFBRSxFQUFFLEVBQUUsS0FBSyxDQUFDLFFBQVEsRUFBRTtRQUMvQixPQUFPLEVBQUUsRUFBRSxrQkFBa0IsRUFBRSxJQUFJLEVBQUU7S0FDdEMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUsQ0FBQyxDQUFBO0lBRS9CLE1BQU0sS0FBSyxHQUFHLElBQUEseUJBQVMsRUFDckIsRUFBRSxVQUFVLEVBQUUsRUFDZCxDQUFDLEVBQUUsVUFBVSxFQUFFLEVBQUUsRUFBRSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQ3ZDLENBQUE7SUFFRCxJQUFBLDJCQUFtQixFQUFDLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUE7SUFFckMsTUFBTSxXQUFXLEdBQUcsSUFBQSx5QkFBUyxFQUFDLEVBQUUsS0FBSyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUU7UUFDckQsT0FBTyxLQUFLLENBQUMsS0FBSyxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFBO0lBQ3RDLENBQUMsQ0FBQyxDQUFBO0lBRUYsTUFBTSxRQUFRLEdBQUcsSUFBQSx5QkFBUyxFQUFDLEVBQUUsS0FBSyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUU7UUFDbEQsT0FBTyxLQUFLLENBQUMsT0FBTyxJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUE7SUFDdkUsQ0FBQyxDQUFDLENBQUE7SUFFRixJQUFBLDJCQUFXLEVBQ1QsSUFBQSw4Q0FBaUMsRUFBQyxXQUFXLENBQUMsRUFDOUMsSUFBQSw2QkFBZ0IsRUFBQyxFQUFFLFFBQVEsRUFBRSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQzFDLDJDQUErQixDQUFDLFNBQVMsQ0FBQztRQUN4QyxLQUFLLEVBQUU7WUFDTCxFQUFFLEVBQUUsS0FBSyxDQUFDLG1CQUFtQixDQUFDLEVBQUU7WUFDaEMsTUFBTSxFQUFFLEtBQUssQ0FBQyxtQkFBbUIsQ0FBQyxlQUFlO1NBQ2xEO0tBQ0YsQ0FBQyxFQUNGLElBQUEsZ0NBQXdCLEVBQUM7UUFDdkIsU0FBUyxFQUFFLFFBQVE7UUFDbkIsTUFBTSxFQUFFLEtBQUssQ0FBQyxtQkFBbUIsQ0FBQyxlQUFlO1FBQ2pELGFBQWEsRUFBRSxLQUFLLENBQUMsYUFBYTtLQUNuQyxDQUFDLEVBQ0YsSUFBQSwwQkFBYSxFQUFDO1FBQ1osU0FBUyxFQUFFLDJCQUFtQixDQUFDLFFBQVE7UUFDdkMsSUFBSSxFQUFFLEVBQUUsRUFBRSxFQUFFLEtBQUssQ0FBQyxFQUFFLEVBQUU7S0FDdkIsQ0FBQyxDQUNILENBQUE7SUFFRCxPQUFPLElBQUksZ0NBQWdCLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFBO0FBQ3ZDLENBQUMsQ0FDRixDQUFBIn0=