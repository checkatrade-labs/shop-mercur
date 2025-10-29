"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateVendorPromotionWorkflow = void 0;
const core_flows_1 = require("@medusajs/medusa/core-flows");
const workflows_sdk_1 = require("@medusajs/workflows-sdk");
const steps_1 = require("../steps");
exports.updateVendorPromotionWorkflow = (0, workflows_sdk_1.createWorkflow)('update-vendor-promotion', function (input) {
    (0, steps_1.verifyVendorCampaignStep)(input);
    const promotions = core_flows_1.updatePromotionsWorkflow.runAsStep({
        input: {
            promotionsData: [input.promotion]
        }
    });
    return new workflows_sdk_1.WorkflowResponse(promotions);
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXBkYXRlLXZlbmRvci1wcm9tb3Rpb24uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvd29ya2Zsb3dzL3Byb21vdGlvbnMvd29ya2Zsb3dzL3VwZGF0ZS12ZW5kb3ItcHJvbW90aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUNBLDREQUFzRTtBQUN0RSwyREFBMEU7QUFFMUUsb0NBQW1EO0FBRXRDLFFBQUEsNkJBQTZCLEdBQUcsSUFBQSw4QkFBYyxFQUN6RCx5QkFBeUIsRUFDekIsVUFBVSxLQUEyRDtJQUNuRSxJQUFBLGdDQUF3QixFQUFDLEtBQUssQ0FBQyxDQUFBO0lBRS9CLE1BQU0sVUFBVSxHQUFHLHFDQUF3QixDQUFDLFNBQVMsQ0FBQztRQUNwRCxLQUFLLEVBQUU7WUFDTCxjQUFjLEVBQUUsQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDO1NBQ2xDO0tBQ0YsQ0FBQyxDQUFBO0lBRUYsT0FBTyxJQUFJLGdDQUFnQixDQUFDLFVBQVUsQ0FBQyxDQUFBO0FBQ3pDLENBQUMsQ0FDRixDQUFBIn0=