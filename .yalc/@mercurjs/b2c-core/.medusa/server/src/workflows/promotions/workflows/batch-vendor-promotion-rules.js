"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.batchVendorPromotionRulesWorkflow = void 0;
const core_flows_1 = require("@medusajs/medusa/core-flows");
const workflows_sdk_1 = require("@medusajs/workflows-sdk");
const steps_1 = require("../steps");
exports.batchVendorPromotionRulesWorkflow = (0, workflows_sdk_1.createWorkflow)('batch-vendor-promotion-rules', function (input) {
    (0, workflows_sdk_1.when)(input, (input) => input.data.rule_type === 'target_rules').then(() => {
        (0, steps_1.verifyVendorTargetPromotionRulesStep)((0, workflows_sdk_1.transform)(input, (input) => ({
            rules: input.data.create,
            seller_id: input.seller_id
        })));
    });
    core_flows_1.batchPromotionRulesWorkflow.runAsStep({
        input: input.data
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmF0Y2gtdmVuZG9yLXByb21vdGlvbi1ydWxlcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy93b3JrZmxvd3MvcHJvbW90aW9ucy93b3JrZmxvd3MvYmF0Y2gtdmVuZG9yLXByb21vdGlvbi1ydWxlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSw0REFHb0M7QUFDcEMsMkRBQXlFO0FBRXpFLG9DQUErRDtBQUVsRCxRQUFBLGlDQUFpQyxHQUFHLElBQUEsOEJBQWMsRUFDN0QsOEJBQThCLEVBQzlCLFVBQVUsS0FHVDtJQUNDLElBQUEsb0JBQUksRUFBQyxLQUFLLEVBQUUsQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsU0FBUyxLQUFLLGNBQWMsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUU7UUFDeEUsSUFBQSw0Q0FBb0MsRUFDbEMsSUFBQSx5QkFBUyxFQUFDLEtBQUssRUFBRSxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsQ0FBQztZQUMzQixLQUFLLEVBQUUsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNO1lBQ3hCLFNBQVMsRUFBRSxLQUFLLENBQUMsU0FBUztTQUMzQixDQUFDLENBQUMsQ0FDSixDQUFBO0lBQ0gsQ0FBQyxDQUFDLENBQUE7SUFFRix3Q0FBMkIsQ0FBQyxTQUFTLENBQUM7UUFDcEMsS0FBSyxFQUFFLEtBQUssQ0FBQyxJQUFJO0tBQ2xCLENBQUMsQ0FBQTtBQUNKLENBQUMsQ0FDRixDQUFBIn0=