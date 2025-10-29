"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.acceptMemberInvitesWorkflow = void 0;
const workflows_sdk_1 = require("@medusajs/framework/workflows-sdk");
const core_flows_1 = require("@medusajs/medusa/core-flows");
const workflows_sdk_2 = require("@medusajs/workflows-sdk");
const steps_1 = require("../steps");
const validate_member_invites_1 = require("../steps/validate-member-invites");
exports.acceptMemberInvitesWorkflow = (0, workflows_sdk_2.createWorkflow)("accept-member-invite", function (input) {
    const invite = (0, validate_member_invites_1.validateMemberInviteStep)(input.invite);
    const [member] = (0, workflows_sdk_1.parallelize)((0, steps_1.createMemberStep)({
        seller_id: invite.seller.id,
        name: input.invite.name,
        role: invite.role,
        email: invite.email,
    }), (0, steps_1.updateMemberInviteStep)({
        id: invite.id,
        accepted: true,
    }));
    (0, core_flows_1.setAuthAppMetadataStep)({
        authIdentityId: input.authIdentityId,
        actorType: "seller",
        value: member.id,
    });
    return new workflows_sdk_2.WorkflowResponse(invite);
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWNjZXB0LW1lbWJlci1pbnZpdGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvd29ya2Zsb3dzL3NlbGxlci93b3JrZmxvd3MvYWNjZXB0LW1lbWJlci1pbnZpdGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEscUVBQWdFO0FBQ2hFLDREQUFxRTtBQUNyRSwyREFBMkU7QUFJM0Usb0NBQW9FO0FBQ3BFLDhFQUE0RTtBQU8vRCxRQUFBLDJCQUEyQixHQUFHLElBQUEsOEJBQWMsRUFDdkQsc0JBQXNCLEVBQ3RCLFVBQVUsS0FBc0M7SUFDOUMsTUFBTSxNQUFNLEdBQUcsSUFBQSxrREFBd0IsRUFBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUM7SUFFdEQsTUFBTSxDQUFDLE1BQU0sQ0FBQyxHQUFHLElBQUEsMkJBQVcsRUFDMUIsSUFBQSx3QkFBZ0IsRUFBQztRQUNmLFNBQVMsRUFBRSxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUU7UUFDM0IsSUFBSSxFQUFFLEtBQUssQ0FBQyxNQUFNLENBQUMsSUFBSTtRQUN2QixJQUFJLEVBQUUsTUFBTSxDQUFDLElBQUk7UUFDakIsS0FBSyxFQUFFLE1BQU0sQ0FBQyxLQUFLO0tBQ3BCLENBQUMsRUFDRixJQUFBLDhCQUFzQixFQUFDO1FBQ3JCLEVBQUUsRUFBRSxNQUFNLENBQUMsRUFBRTtRQUNiLFFBQVEsRUFBRSxJQUFJO0tBQ2YsQ0FBQyxDQUNILENBQUM7SUFFRixJQUFBLG1DQUFzQixFQUFDO1FBQ3JCLGNBQWMsRUFBRSxLQUFLLENBQUMsY0FBYztRQUNwQyxTQUFTLEVBQUUsUUFBUTtRQUNuQixLQUFLLEVBQUUsTUFBTSxDQUFDLEVBQUU7S0FDakIsQ0FBQyxDQUFDO0lBRUgsT0FBTyxJQUFJLGdDQUFnQixDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBQ3RDLENBQUMsQ0FDRixDQUFDIn0=