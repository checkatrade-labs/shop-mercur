"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.partialPaymentRefundWorkflow = exports.selectAndValidatePaymentRefundStep = void 0;
const utils_1 = require("@medusajs/framework/utils");
const workflows_sdk_1 = require("@medusajs/framework/workflows-sdk");
const core_flows_1 = require("@medusajs/medusa/core-flows");
const order_split_order_payment_1 = __importDefault(require("../../../links/order-split-order-payment"));
exports.selectAndValidatePaymentRefundStep = (0, workflows_sdk_1.createStep)("select-and-validate-payment-refund-step", async function (input, { container }) {
    const query = container.resolve(utils_1.ContainerRegistrationKeys.QUERY);
    const { data: [splitPayment], } = await query.graph({
        entity: order_split_order_payment_1.default.entryPoint,
        fields: ["*", "split_order_payment.payment_collection_id"],
        filters: {
            split_order_payment_id: input.id,
        },
    });
    const { data: [payment_collection], } = await query.graph({
        entity: "payment_collection",
        fields: ["payments.id"],
        filters: {
            id: splitPayment.split_order_payment.payment_collection_id,
        },
    });
    const payment_id = payment_collection.payments[0].id;
    const { data: [payment], } = await query.graph({
        entity: "payment",
        fields: [
            "id",
            "currency_code",
            "refunds.id",
            "refunds.amount",
            "captures.id",
            "captures.amount",
        ],
        filters: {
            id: payment_id,
        },
    });
    const capturedAmount = (payment.captures || []).reduce((acc, capture) => utils_1.MathBN.sum(acc, capture.amount), utils_1.MathBN.convert(0));
    const refundedAmount = (payment.refunds || []).reduce((acc, capture) => utils_1.MathBN.sum(acc, capture.amount), utils_1.MathBN.convert(0));
    const refundableAmount = utils_1.MathBN.sub(capturedAmount, refundedAmount);
    if (utils_1.MathBN.gt(input.amount, refundableAmount)) {
        throw new utils_1.MedusaError(utils_1.MedusaError.Types.INVALID_DATA, `Payment with id ${payment.id} is trying to refund amount greater than the refundable amount`);
    }
    return new workflows_sdk_1.StepResponse({
        payment_id: payment.id,
        currency_code: payment.currency_code,
        amount: input.amount,
        order_id: splitPayment.order_id,
    });
});
exports.partialPaymentRefundWorkflow = (0, workflows_sdk_1.createWorkflow)({
    name: "partial-payment-refund",
}, function (input) {
    const paymentToRefund = (0, exports.selectAndValidatePaymentRefundStep)(input);
    const refundedPayments = (0, core_flows_1.refundPaymentsStep)((0, workflows_sdk_1.transform)({ input, paymentToRefund }, ({ input, paymentToRefund }) => {
        return [
            {
                payment_id: paymentToRefund.payment_id,
                amount: input.amount,
            },
        ];
    }));
    const orderTransaction = (0, workflows_sdk_1.transform)({ paymentToRefund }, ({ paymentToRefund }) => ({
        order_id: paymentToRefund.order_id,
        amount: utils_1.MathBN.mult(paymentToRefund.amount, -1),
        currency_code: paymentToRefund.currency_code,
        reference_id: paymentToRefund.payment_id,
        reference: "refund",
    }));
    (0, core_flows_1.addOrderTransactionStep)(orderTransaction);
    return new workflows_sdk_1.WorkflowResponse(refundedPayments);
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFydGlhbC1wYXltZW50LXJlZnVuZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy93b3JrZmxvd3Mvc3BsaXQtb3JkZXItcGF5bWVudC93b3JrZmxvd3MvcGFydGlhbC1wYXltZW50LXJlZnVuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxxREFJbUM7QUFDbkMscUVBTTJDO0FBQzNDLDREQUdxQztBQUlyQyx5R0FBOEU7QUFFakUsUUFBQSxrQ0FBa0MsR0FBRyxJQUFBLDBCQUFVLEVBQzFELHlDQUF5QyxFQUN6QyxLQUFLLFdBQVcsS0FBa0MsRUFBRSxFQUFFLFNBQVMsRUFBRTtJQUMvRCxNQUFNLEtBQUssR0FBRyxTQUFTLENBQUMsT0FBTyxDQUFDLGlDQUF5QixDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ2pFLE1BQU0sRUFDSixJQUFJLEVBQUUsQ0FBQyxZQUFZLENBQUMsR0FDckIsR0FBRyxNQUFNLEtBQUssQ0FBQyxLQUFLLENBQUM7UUFDcEIsTUFBTSxFQUFFLG1DQUFzQixDQUFDLFVBQVU7UUFDekMsTUFBTSxFQUFFLENBQUMsR0FBRyxFQUFFLDJDQUEyQyxDQUFDO1FBQzFELE9BQU8sRUFBRTtZQUNQLHNCQUFzQixFQUFFLEtBQUssQ0FBQyxFQUFFO1NBQ2pDO0tBQ0YsQ0FBQyxDQUFDO0lBRUgsTUFBTSxFQUNKLElBQUksRUFBRSxDQUFDLGtCQUFrQixDQUFDLEdBQzNCLEdBQUcsTUFBTSxLQUFLLENBQUMsS0FBSyxDQUFDO1FBQ3BCLE1BQU0sRUFBRSxvQkFBb0I7UUFDNUIsTUFBTSxFQUFFLENBQUMsYUFBYSxDQUFDO1FBQ3ZCLE9BQU8sRUFBRTtZQUNQLEVBQUUsRUFBRSxZQUFZLENBQUMsbUJBQW1CLENBQUMscUJBQXFCO1NBQzNEO0tBQ0YsQ0FBQyxDQUFDO0lBRUgsTUFBTSxVQUFVLEdBQUcsa0JBQWtCLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUs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