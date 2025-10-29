"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.inviteMemberWorkflow = void 0;
const workflows_sdk_1 = require("@medusajs/workflows-sdk");
const steps_1 = require("../steps");
exports.inviteMemberWorkflow = (0, workflows_sdk_1.createWorkflow)('invite-member', function (input) {
    return new workflows_sdk_1.WorkflowResponse((0, steps_1.createMemberInviteStep)(input));
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW52aXRlLW1lbWJlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy93b3JrZmxvd3Mvc2VsbGVyL3dvcmtmbG93cy9pbnZpdGUtbWVtYmVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLDJEQUEwRTtBQUkxRSxvQ0FBaUQ7QUFFcEMsUUFBQSxvQkFBb0IsR0FBRyxJQUFBLDhCQUFjLEVBQ2hELGVBQWUsRUFDZixVQUFVLEtBQTRCO0lBQ3BDLE9BQU8sSUFBSSxnQ0FBZ0IsQ0FBQyxJQUFBLDhCQUFzQixFQUFDLEtBQUssQ0FBQyxDQUFDLENBQUE7QUFDNUQsQ0FBQyxDQUNGLENBQUEifQ==