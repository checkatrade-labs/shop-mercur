"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.markSplitOrderPaymentsAsCapturedWorkflow = void 0;
const workflows_sdk_1 = require("@medusajs/framework/workflows-sdk");
const core_flows_1 = require("@medusajs/medusa/core-flows");
const steps_1 = require("../steps");
exports.markSplitOrderPaymentsAsCapturedWorkflow = (0, workflows_sdk_1.createWorkflow)({
    name: 'mark-split-order-payments-as-captured'
}, function (payment_collection_id) {
    const payments = (0, core_flows_1.useQueryGraphStep)({
        entity: 'split_order_payment',
        fields: ['*'],
        filters: {
            payment_collection_id
        }
    });
    const updatePayload = (0, workflows_sdk_1.transform)(payments, (payments) => {
        const entities = payments.data;
        return entities.map((p) => ({
            id: p.id,
            status: 'captured',
            captured_amount: p.authorized_amount
        }));
    });
    const splitOrderPayments = (0, steps_1.updateSplitOrderPaymentsStep)(updatePayload);
    return new workflows_sdk_1.WorkflowResponse(splitOrderPayments);
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFyay1zcGxpdC1vcmRlci1wYXltZW50cy1hcy1jYXB0dXJlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy93b3JrZmxvd3Mvc3BsaXQtb3JkZXItcGF5bWVudC93b3JrZmxvd3MvbWFyay1zcGxpdC1vcmRlci1wYXltZW50cy1hcy1jYXB0dXJlZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxxRUFJMEM7QUFDMUMsNERBQStEO0FBRS9ELG9DQUF1RDtBQUUxQyxRQUFBLHdDQUF3QyxHQUFHLElBQUEsOEJBQWMsRUFDcEU7SUFDRSxJQUFJLEVBQUUsdUNBQXVDO0NBQzlDLEVBQ0QsVUFBVSxxQkFBNkI7SUFDckMsTUFBTSxRQUFRLEdBQUcsSUFBQSw4QkFBaUIsRUFBQztRQUNqQyxNQUFNLEVBQUUscUJBQXFCO1FBQzdCLE1BQU0sRUFBRSxDQUFDLEdBQUcsQ0FBQztRQUNiLE9BQU8sRUFBRTtZQUNQLHFCQUFxQjtTQUN0QjtLQUNGLENBQUMsQ0FBQTtJQUVGLE1BQU0sYUFBYSxHQUFHLElBQUEseUJBQVMsRUFBQyxRQUFRLEVBQUUsQ0FBQyxRQUFRLEVBQUUsRUFBRTtRQUNyRCxNQUFNLFFBQVEsR0FBRyxRQUFRLENBQUMsSUFBSSxDQUFBO1FBQzlCLE9BQU8sUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQztZQUMxQixFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUU7WUFDUixNQUFNLEVBQUUsVUFBVTtZQUNsQixlQUFlLEVBQUUsQ0FBQyxDQUFDLGlCQUFpQjtTQUNyQyxDQUFDLENBQUMsQ0FBQTtJQUNMLENBQUMsQ0FBQyxDQUFBO0lBRUYsTUFBTSxrQkFBa0IsR0FBRyxJQUFBLG9DQUE0QixFQUFDLGFBQWEsQ0FBQyxDQUFBO0lBQ3RFLE9BQU8sSUFBSSxnQ0FBZ0IsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFBO0FBQ2pELENBQUMsQ0FDRixDQUFBIn0=