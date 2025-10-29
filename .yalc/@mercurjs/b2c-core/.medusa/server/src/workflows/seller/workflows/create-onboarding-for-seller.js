"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createOnboardingForSellerWorkflow = void 0;
const workflows_sdk_1 = require("@medusajs/workflows-sdk");
const steps_1 = require("../steps");
exports.createOnboardingForSellerWorkflow = (0, workflows_sdk_1.createWorkflow)('create-onboarding-for-seller', function (input) {
    const { id } = (0, steps_1.validatePayoutAccountExistsForSellerStep)(input.seller_id);
    const onboarding = (0, steps_1.createPayoutOnboardingStep)({
        context: input.context,
        payout_account_id: id
    });
    return new workflows_sdk_1.WorkflowResponse(onboarding);
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JlYXRlLW9uYm9hcmRpbmctZm9yLXNlbGxlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy93b3JrZmxvd3Mvc2VsbGVyL3dvcmtmbG93cy9jcmVhdGUtb25ib2FyZGluZy1mb3Itc2VsbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLDJEQUEwRTtBQUkxRSxvQ0FHaUI7QUFPSixRQUFBLGlDQUFpQyxHQUFHLElBQUEsOEJBQWMsRUFDN0QsOEJBQThCLEVBQzlCLFVBQVUsS0FBcUM7SUFDN0MsTUFBTSxFQUFFLEVBQUUsRUFBRSxHQUFHLElBQUEsZ0RBQXdDLEVBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxDQUFBO0lBRXhFLE1BQU0sVUFBVSxHQUFHLElBQUEsa0NBQTBCLEVBQUM7UUFDNUMsT0FBTyxFQUFFLEtBQUssQ0FBQyxPQUFPO1FBQ3RCLGlCQUFpQixFQUFFLEVBQUU7S0FDdEIsQ0FBQyxDQUFBO0lBRUYsT0FBTyxJQUFJLGdDQUFnQixDQUFDLFVBQVUsQ0FBQyxDQUFBO0FBQ3pDLENBQUMsQ0FDRixDQUFBIn0=