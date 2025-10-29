"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.syncStripeAccountWorkflow = void 0;
const workflows_sdk_1 = require("@medusajs/framework/workflows-sdk");
const steps_1 = require("../steps");
exports.syncStripeAccountWorkflow = (0, workflows_sdk_1.createWorkflow)('sync-stripe-account', function (account_id) {
    return new workflows_sdk_1.WorkflowResponse((0, steps_1.syncStripeAccountStep)(account_id));
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3luYy1zdHJpcGUtYWNjb3VudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy93b3JrZmxvd3Mvc2VsbGVyL3dvcmtmbG93cy9zeW5jLXN0cmlwZS1hY2NvdW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLHFFQUcwQztBQUUxQyxvQ0FBZ0Q7QUFFbkMsUUFBQSx5QkFBeUIsR0FBRyxJQUFBLDhCQUFjLEVBQ3JELHFCQUFxQixFQUNyQixVQUFVLFVBQWtCO0lBQzFCLE9BQU8sSUFBSSxnQ0FBZ0IsQ0FBQyxJQUFBLDZCQUFxQixFQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUE7QUFDaEUsQ0FBQyxDQUNGLENBQUEifQ==