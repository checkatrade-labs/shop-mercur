"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateProductStatusWorkflow = void 0;
const workflows_sdk_1 = require("@medusajs/workflows-sdk");
const steps_1 = require("../steps");
exports.updateProductStatusWorkflow = (0, workflows_sdk_1.createWorkflow)('update-product-status', function (input) {
    return new workflows_sdk_1.WorkflowResponse((0, steps_1.updateProductStatusStep)(input));
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXBkYXRlLXByb2R1Y3Qtc3RhdHVzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vc3JjL3dvcmtmbG93cy9wcm9kdWN0L3dvcmtmbG93cy91cGRhdGUtcHJvZHVjdC1zdGF0dXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQ0EsMkRBQTBFO0FBRTFFLG9DQUFrRDtBQUVyQyxRQUFBLDJCQUEyQixHQUFHLElBQUEsOEJBQWMsRUFDdkQsdUJBQXVCLEVBQ3ZCLFVBQVUsS0FBNEM7SUFDcEQsT0FBTyxJQUFJLGdDQUFnQixDQUFDLElBQUEsK0JBQXVCLEVBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQTtBQUM3RCxDQUFDLENBQ0YsQ0FBQSJ9