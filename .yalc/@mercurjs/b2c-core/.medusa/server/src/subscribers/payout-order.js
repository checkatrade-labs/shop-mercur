"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
exports.default = payoutOrderHandler;
const framework_1 = require("@mercurjs/framework");
const workflows_1 = require("../workflows/order/workflows");
async function payoutOrderHandler({ event, container }) {
    await (0, workflows_1.processPayoutForOrderWorkflow)(container).run({
        input: {
            order_id: event.data.order_id
        },
        context: {
            transactionId: event.data.order_id
        }
    });
}
exports.config = {
    event: framework_1.PayoutWorkflowEvents.RECEIVED,
    context: {
        subscriberId: 'payout-order-handler'
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGF5b3V0LW9yZGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL3N1YnNjcmliZXJzL3BheW91dC1vcmRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFNQSxxQ0FZQztBQWhCRCxtREFBMEQ7QUFFMUQsNERBQTRFO0FBRTdELEtBQUssVUFBVSxrQkFBa0IsQ0FBQyxFQUMvQyxLQUFLLEVBQ0wsU0FBUyxFQUM0QjtJQUNyQyxNQUFNLElBQUEseUNBQTZCLEVBQUMsU0FBUyxDQUFDLENBQUMsR0FBRyxDQUFDO1FBQ2pELEtBQUssRUFBRTtZQUNMLFFBQVEsRUFBRSxLQUFLLENBQUMsSUFBSSxDQUFDLFFBQVE7U0FDOUI7UUFDRCxPQUFPLEVBQUU7WUFDUCxhQUFhLEVBQUUsS0FBSyxDQUFDLElBQUksQ0FBQyxRQUFRO1NBQ25DO0tBQ0YsQ0FBQyxDQUFBO0FBQ0osQ0FBQztBQUVZLFFBQUEsTUFBTSxHQUFxQjtJQUN0QyxLQUFLLEVBQUUsZ0NBQW9CLENBQUMsUUFBUTtJQUNwQyxPQUFPLEVBQUU7UUFDUCxZQUFZLEVBQUUsc0JBQXNCO0tBQ3JDO0NBQ0YsQ0FBQSJ9