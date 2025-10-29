"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.refundSplitOrderPaymentWorkflow = void 0;
const workflows_sdk_1 = require("@medusajs/framework/workflows-sdk");
const steps_1 = require("../steps");
const validate_refund_split_order_payment_1 = require("../steps/validate-refund-split-order-payment");
const partial_payment_refund_1 = require("./partial-payment-refund");
exports.refundSplitOrderPaymentWorkflow = (0, workflows_sdk_1.createWorkflow)({
    name: 'refund-split-order-payment'
}, function (input) {
    const updatePayload = (0, validate_refund_split_order_payment_1.validateRefundSplitOrderPaymentStep)(input);
    const splitOrderPayment = (0, steps_1.updateSplitOrderPaymentsStep)((0, workflows_sdk_1.transform)(updatePayload, (updatePayload) => [updatePayload]));
    partial_payment_refund_1.partialPaymentRefundWorkflow.runAsStep({ input });
    return new workflows_sdk_1.WorkflowResponse(splitOrderPayment);
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVmdW5kLXNwbGl0LW9yZGVyLXBheW1lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvd29ya2Zsb3dzL3NwbGl0LW9yZGVyLXBheW1lbnQvd29ya2Zsb3dzL3JlZnVuZC1zcGxpdC1vcmRlci1wYXltZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLHFFQUkwQztBQUkxQyxvQ0FBdUQ7QUFDdkQsc0dBQWtHO0FBQ2xHLHFFQUF1RTtBQUUxRCxRQUFBLCtCQUErQixHQUFHLElBQUEsOEJBQWMsRUFDM0Q7SUFDRSxJQUFJLEVBQUUsNEJBQTRCO0NBQ25DLEVBQ0QsVUFBVSxLQUFrQztJQUMxQyxNQUFNLGFBQWEsR0FBRyxJQUFBLHlFQUFtQyxFQUFDLEtBQUssQ0FBQyxDQUFBO0lBQ2hFLE1BQU0saUJBQWlCLEdBQUcsSUFBQSxvQ0FBNEIsRUFDcEQsSUFBQSx5QkFBUyxFQUFDLGFBQWEsRUFBRSxDQUFDLGFBQWEsRUFBRSxFQUFFLENBQUMsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUM3RCxDQUFBO0lBQ0QscURBQTRCLENBQUMsU0FBUyxDQUFDLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQTtJQUNqRCxPQUFPLElBQUksZ0NBQWdCLENBQUMsaUJBQWlCLENBQUMsQ0FBQTtBQUNoRCxDQUFDLENBQ0YsQ0FBQSJ9