"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
exports.default = paymentCapturedHandler;
const utils_1 = require("@medusajs/framework/utils");
const workflows_1 = require("../workflows/split-order-payment/workflows");
async function paymentCapturedHandler({ event, container }) {
    const payment_id = event.data.id;
    const paymentService = container.resolve(utils_1.Modules.PAYMENT);
    const payment = await paymentService.retrievePayment(payment_id, {
        relations: ['payment_collection']
    });
    await workflows_1.markSplitOrderPaymentsAsCapturedWorkflow.run({
        container,
        input: payment.payment_collection_id
    });
}
exports.config = {
    event: utils_1.PaymentEvents.CAPTURED,
    context: {
        subscriberId: 'split-payment-payment-captured-handler'
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3BsaXQtcGF5bWVudC1wYXltZW50LWNhcHR1cmVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL3N1YnNjcmliZXJzL3NwbGl0LXBheW1lbnQtcGF5bWVudC1jYXB0dXJlZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFLQSx5Q0FlQztBQW5CRCxxREFBa0U7QUFFbEUsMEVBQXFHO0FBRXRGLEtBQUssVUFBVSxzQkFBc0IsQ0FBQyxFQUNuRCxLQUFLLEVBQ0wsU0FBUyxFQUNzQjtJQUMvQixNQUFNLFVBQVUsR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQTtJQUNoQyxNQUFNLGNBQWMsR0FBRyxTQUFTLENBQUMsT0FBTyxDQUFDLGVBQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQTtJQUV6RCxNQUFNLE9BQU8sR0FBRyxNQUFNLGNBQWMsQ0FBQyxlQUFlLENBQUMsVUFBVSxFQUFFO1FBQy9ELFNBQVMsRUFBRSxDQUFDLG9CQUFvQixDQUFDO0tBQ2xDLENBQUMsQ0FBQTtJQUVGLE1BQU0sb0RBQXdDLENBQUMsR0FBRyxDQUFDO1FBQ2pELFNBQVM7UUFDVCxLQUFLLEVBQUUsT0FBTyxDQUFDLHFCQUFxQjtLQUNyQyxDQUFDLENBQUE7QUFDSixDQUFDO0FBRVksUUFBQSxNQUFNLEdBQXFCO0lBQ3RDLEtBQUssRUFBRSxxQkFBYSxDQUFDLFFBQVE7SUFDN0IsT0FBTyxFQUFFO1FBQ1AsWUFBWSxFQUFFLHdDQUF3QztLQUN2RDtDQUNGLENBQUEifQ==