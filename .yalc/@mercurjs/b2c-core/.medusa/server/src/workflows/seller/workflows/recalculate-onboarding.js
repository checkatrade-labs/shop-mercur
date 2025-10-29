"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.recalculateOnboardingWorkflow = void 0;
const workflows_sdk_1 = require("@medusajs/workflows-sdk");
const steps_1 = require("../steps");
exports.recalculateOnboardingWorkflow = (0, workflows_sdk_1.createWorkflow)('recalculate-onboarding', function (seller_id) {
    return new workflows_sdk_1.WorkflowResponse((0, steps_1.recalculateOnboardingStep)(seller_id));
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVjYWxjdWxhdGUtb25ib2FyZGluZy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy93b3JrZmxvd3Mvc2VsbGVyL3dvcmtmbG93cy9yZWNhbGN1bGF0ZS1vbmJvYXJkaW5nLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLDJEQUEwRTtBQUUxRSxvQ0FBb0Q7QUFFdkMsUUFBQSw2QkFBNkIsR0FBRyxJQUFBLDhCQUFjLEVBQ3pELHdCQUF3QixFQUN4QixVQUFVLFNBQWlCO0lBQ3pCLE9BQU8sSUFBSSxnQ0FBZ0IsQ0FBQyxJQUFBLGlDQUF5QixFQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUE7QUFDbkUsQ0FBQyxDQUNGLENBQUEifQ==