"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateMemberWorkflow = void 0;
const workflows_sdk_1 = require("@medusajs/workflows-sdk");
const steps_1 = require("../steps");
exports.updateMemberWorkflow = (0, workflows_sdk_1.createWorkflow)('update-member', function (input) {
    return new workflows_sdk_1.WorkflowResponse((0, steps_1.updateMemberStep)(input));
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXBkYXRlLW1lbWJlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy93b3JrZmxvd3Mvc2VsbGVyL3dvcmtmbG93cy91cGRhdGUtbWVtYmVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLDJEQUEwRTtBQUkxRSxvQ0FBMkM7QUFFOUIsUUFBQSxvQkFBb0IsR0FBRyxJQUFBLDhCQUFjLEVBQ2hELGVBQWUsRUFDZixVQUFVLEtBQXNCO0lBQzlCLE9BQU8sSUFBSSxnQ0FBZ0IsQ0FBQyxJQUFBLHdCQUFnQixFQUFDLEtBQUssQ0FBQyxDQUFDLENBQUE7QUFDdEQsQ0FBQyxDQUNGLENBQUEifQ==