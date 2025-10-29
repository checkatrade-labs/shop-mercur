"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.processPayoutWebhookActionWorkflow = void 0;
const workflows_sdk_1 = require("@medusajs/framework/workflows-sdk");
const workflows_sdk_2 = require("@medusajs/workflows-sdk");
const framework_1 = require("@mercurjs/framework");
const steps_1 = require("../steps");
exports.processPayoutWebhookActionWorkflow = (0, workflows_sdk_2.createWorkflow)('process-payout-action', function (input) {
    // here we can implement following actions:
    // - send email with confirmation of payout
    // - send email about failed payout
    // - send email about account status change
    (0, workflows_sdk_1.when)({ action: input.action }, ({ action }) => action === framework_1.PayoutWebhookAction.ACCOUNT_AUTHORIZED).then(() => {
        (0, steps_1.updatePayoutAccountStep)({
            id: input.data.account_id,
            status: framework_1.PayoutAccountStatus.ACTIVE
        });
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvY2Vzcy1wYXlvdXQtd2ViaG9vay1hY3Rpb24uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvd29ya2Zsb3dzL3BheW91dC93b3JrZmxvd3MvcHJvY2Vzcy1wYXlvdXQtd2ViaG9vay1hY3Rpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEscUVBQXdEO0FBQ3hELDJEQUF3RDtBQUV4RCxtREFJNEI7QUFFNUIsb0NBQWtEO0FBT3JDLFFBQUEsa0NBQWtDLEdBQUcsSUFBQSw4QkFBYyxFQUM5RCx1QkFBdUIsRUFDdkIsVUFBVSxLQUFzQztJQUM5QywyQ0FBMkM7SUFDM0MsMkNBQTJDO0lBQzNDLG1DQUFtQztJQUNuQywyQ0FBMkM7SUFFM0MsSUFBQSxvQkFBSSxFQUNGLEVBQUUsTUFBTSxFQUFFLEtBQUssQ0FBQyxNQUFNLEVBQUUsRUFDeEIsQ0FBQyxFQUFFLE1BQU0sRUFBRSxFQUFFLEVBQUUsQ0FBQyxNQUFNLEtBQUssK0JBQW1CLENBQUMsa0JBQWtCLENBQ2xFLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRTtRQUNWLElBQUEsK0JBQXVCLEVBQUM7WUFDdEIsRUFBRSxFQUFFLEtBQUssQ0FBQyxJQUFJLENBQUMsVUFBVTtZQUN6QixNQUFNLEVBQUUsK0JBQW1CLENBQUMsTUFBTTtTQUNuQyxDQUFDLENBQUE7SUFDSixDQUFDLENBQUMsQ0FBQTtBQUNKLENBQUMsQ0FDRixDQUFBIn0=