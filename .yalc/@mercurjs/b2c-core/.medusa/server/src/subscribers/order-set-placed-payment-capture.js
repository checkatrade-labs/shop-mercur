"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
exports.default = orderSetPlacedHandler;
const utils_1 = require("@medusajs/framework/utils");
const core_flows_1 = require("@medusajs/medusa/core-flows");
const framework_1 = require("@mercurjs/framework");
const workflows_1 = require("../workflows/split-order-payment/workflows");
async function orderSetPlacedHandler({ event, container }) {
    const query = container.resolve(utils_1.ContainerRegistrationKeys.QUERY);
    const { id: orderSetId } = event.data;
    const { data: [order_set] } = await query.graph({
        entity: 'order_set',
        fields: ['payment_collection_id'],
        filters: {
            id: orderSetId
        }
    });
    const { data: [payment_collection] } = await query.graph({
        entity: 'payment_collection',
        fields: ['status', 'payments.*'],
        filters: {
            id: order_set.payment_collection_id
        }
    });
    if (!payment_collection || !payment_collection.payments[0]) {
        return;
    }
    const { result } = await core_flows_1.capturePaymentWorkflow.run({
        container,
        input: {
            payment_id: payment_collection.payments[0].id
        }
    });
    if (!result.captured_at) {
        throw new utils_1.MedusaError(utils_1.MedusaError.Types.PAYMENT_AUTHORIZATION_ERROR, 'Payment failed!');
    }
    await workflows_1.markSplitOrderPaymentsAsCapturedWorkflow.run({
        container,
        input: order_set.payment_collection_id
    });
}
exports.config = {
    event: framework_1.OrderSetWorkflowEvents.PLACED,
    context: {
        subscriberId: 'order-set-placed-payment-capture'
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3JkZXItc2V0LXBsYWNlZC1wYXltZW50LWNhcHR1cmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvc3Vic2NyaWJlcnMvb3JkZXItc2V0LXBsYWNlZC1wYXltZW50LWNhcHR1cmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBWUEsd0NBaURDO0FBNURELHFEQUdrQztBQUVsQyw0REFBb0U7QUFFcEUsbURBQTREO0FBRTVELDBFQUFxRztBQUV0RixLQUFLLFVBQVUscUJBQXFCLENBQUMsRUFDbEQsS0FBSyxFQUNMLFNBQVMsRUFDc0I7SUFDL0IsTUFBTSxLQUFLLEdBQUcsU0FBUyxDQUFDLE9BQU8sQ0FBQyxpQ0FBeUIsQ0FBQyxLQUFLLENBQUMsQ0FBQTtJQUNoRSxNQUFNLEVBQUUsRUFBRSxFQUFFLFVBQVUsRUFBRSxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUE7SUFFckMsTUFBTSxFQUNKLElBQUksRUFBRSxDQUFDLFNBQVMsQ0FBQyxFQUNsQixHQUFHLE1BQU0sS0FBSyxDQUFDLEtBQUssQ0FBQztRQUNwQixNQUFNLEVBQUUsV0FBVztRQUNuQixNQUFNLEVBQUUsQ0FBQyx1QkFBdUIsQ0FBQztRQUNqQyxPQUFPLEVBQUU7WUFDUCxFQUFFLEVBQUUsVUFBVTtTQUNmO0tBQ0YsQ0FBQyxDQUFBO0lBRUYsTUFBTSxFQUNKLElBQUksRUFBRSxDQUFDLGtCQUFrQixDQUFDLEVBQzNCLEdBQUcsTUFBTSxLQUFLLENBQUMsS0FBSyxDQUFDO1FBQ3BCLE1BQU0sRUFBRSxvQkFBb0I7UUFDNUIsTUFBTSxFQUFFLENBQUMsUUFBUSxFQUFFLFlBQVksQ0FBQztRQUNoQyxPQUFPLEVBQUU7WUFDUCxFQUFFLEVBQUUsU0FBUyxDQUFDLHFCQUFxQjtTQUNwQztLQUNGLENBQUMsQ0FBQTtJQUVGLElBQUksQ0FBQyxrQkFBa0IsSUFBSSxDQUFDLGtCQUFrQixDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO1FBQzNELE9BQU07SUFDUixDQUFDO0lBRUQsTUFBTSxFQUFFLE1BQU0sRUFBRSxHQUFHLE1BQU0sbUNBQXNCLENBQUMsR0FBRyxDQUFDO1FBQ2xELFNBQVM7UUFDVCxLQUFLLEVBQUU7WUFDTCxVQUFVLEVBQUUsa0JBQWtCLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUU7U0FDOUM7S0FDRixDQUFDLENBQUE7SUFFRixJQUFJLENBQUMsTUFBTSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ3hCLE1BQU0sSUFBSSxtQkFBVyxDQUNuQixtQkFBVyxDQUFDLEtBQUssQ0FBQywyQkFBMkIsRUFDN0MsaUJBQWlCLENBQ2xCLENBQUE7SUFDSCxDQUFDO0lBRUQsTUFBTSxvREFBd0MsQ0FBQyxHQUFHLENBQUM7UUFDakQsU0FBUztRQUNULEtBQUssRUFBRSxTQUFTLENBQUMscUJBQXFCO0tBQ3ZDLENBQUMsQ0FBQTtBQUNKLENBQUM7QUFFWSxRQUFBLE1BQU0sR0FBcUI7SUFDdEMsS0FBSyxFQUFFLGtDQUFzQixDQUFDLE1BQU07SUFDcEMsT0FBTyxFQUFFO1FBQ1AsWUFBWSxFQUFFLGtDQUFrQztLQUNqRDtDQUNGLENBQUEifQ==