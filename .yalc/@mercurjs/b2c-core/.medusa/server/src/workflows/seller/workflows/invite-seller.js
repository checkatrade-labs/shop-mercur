"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.inviteSellerWorkflow = void 0;
const workflows_sdk_1 = require("@medusajs/workflows-sdk");
const steps_1 = require("../steps");
exports.inviteSellerWorkflow = (0, workflows_sdk_1.createWorkflow)("invite-seller", function (input) {
    return new workflows_sdk_1.WorkflowResponse((0, steps_1.sendSellerInvitationEmailStep)(input));
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW52aXRlLXNlbGxlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy93b3JrZmxvd3Mvc2VsbGVyL3dvcmtmbG93cy9pbnZpdGUtc2VsbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLDJEQUEyRTtBQUkzRSxvQ0FBeUQ7QUFFNUMsUUFBQSxvQkFBb0IsR0FBRyxJQUFBLDhCQUFjLEVBQ2hELGVBQWUsRUFDZixVQUFVLEtBQWdDO0lBQ3hDLE9BQU8sSUFBSSxnQ0FBZ0IsQ0FBQyxJQUFBLHFDQUE2QixFQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7QUFDcEUsQ0FBQyxDQUNGLENBQUMifQ==