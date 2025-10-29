"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateAttributePossibleValueWorkflow = exports.updateAttributePossibleValueWorkflowId = void 0;
const workflows_sdk_1 = require("@medusajs/framework/workflows-sdk");
const steps_1 = require("../steps");
exports.updateAttributePossibleValueWorkflowId = 'update-attribute-possible-value';
exports.updateAttributePossibleValueWorkflow = (0, workflows_sdk_1.createWorkflow)(exports.updateAttributePossibleValueWorkflowId, (input) => {
    const updated = (0, steps_1.updateAttributePossibleValueStep)(input);
    return new workflows_sdk_1.WorkflowResponse(updated);
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXBkYXRlLWF0dHJpYnV0ZS1wb3NzaWJsZS12YWx1ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy93b3JrZmxvd3MvYXR0cmlidXRlL3dvcmtmbG93cy91cGRhdGUtYXR0cmlidXRlLXBvc3NpYmxlLXZhbHVlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLHFFQUcwQztBQUkxQyxvQ0FBMkQ7QUFFOUMsUUFBQSxzQ0FBc0MsR0FDakQsaUNBQWlDLENBQUE7QUFJdEIsUUFBQSxvQ0FBb0MsR0FBRyxJQUFBLDhCQUFjLEVBQ2hFLDhDQUFzQyxFQUN0QyxDQUFDLEtBQW9CLEVBQUUsRUFBRTtJQUN2QixNQUFNLE9BQU8sR0FBRyxJQUFBLHdDQUFnQyxFQUFDLEtBQUssQ0FBQyxDQUFBO0lBQ3ZELE9BQU8sSUFBSSxnQ0FBZ0IsQ0FBQyxPQUFPLENBQUMsQ0FBQTtBQUN0QyxDQUFDLENBQ0YsQ0FBQSJ9