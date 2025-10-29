"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteAttributeWorkflow = exports.deleteAttributeWorkflowId = void 0;
const workflows_sdk_1 = require("@medusajs/framework/workflows-sdk");
const steps_1 = require("../steps");
exports.deleteAttributeWorkflowId = 'delete-attribute-worklfow';
exports.deleteAttributeWorkflow = (0, workflows_sdk_1.createWorkflow)(exports.deleteAttributeWorkflowId, (input) => {
    return new workflows_sdk_1.WorkflowResponse((0, steps_1.deleteAttributeStep)(input));
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVsZXRlLWF0dHJpYnV0ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy93b3JrZmxvd3MvYXR0cmlidXRlL3dvcmtmbG93cy9kZWxldGUtYXR0cmlidXRlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLHFFQUcwQztBQUUxQyxvQ0FBOEM7QUFFakMsUUFBQSx5QkFBeUIsR0FBRywyQkFBMkIsQ0FBQTtBQU12RCxRQUFBLHVCQUF1QixHQUFHLElBQUEsOEJBQWMsRUFDbkQsaUNBQXlCLEVBQ3pCLENBQUMsS0FBbUMsRUFBRSxFQUFFO0lBQ3RDLE9BQU8sSUFBSSxnQ0FBZ0IsQ0FBQyxJQUFBLDJCQUFtQixFQUFDLEtBQUssQ0FBQyxDQUFDLENBQUE7QUFDekQsQ0FBQyxDQUNGLENBQUEifQ==