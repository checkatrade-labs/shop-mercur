"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createMemberInviteStep = void 0;
const workflows_sdk_1 = require("@medusajs/framework/workflows-sdk");
const seller_1 = require("../../../modules/seller");
exports.createMemberInviteStep = (0, workflows_sdk_1.createStep)("create-member-invite", async (input, { container }) => {
    const service = container.resolve(seller_1.SELLER_MODULE);
    const [memberInvite] = await service.createMemberInvites(input);
    return new workflows_sdk_1.StepResponse(memberInvite, memberInvite.id);
}, async (memberInviteId, { container }) => {
    const service = container.resolve(seller_1.SELLER_MODULE);
    await service.deleteMemberInvites([memberInviteId]);
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JlYXRlLW1lbWJlci1pbnZpdGVzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vc3JjL3dvcmtmbG93cy9zZWxsZXIvc3RlcHMvY3JlYXRlLW1lbWJlci1pbnZpdGVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLHFFQUE2RTtBQUc3RSxvREFBNkU7QUFFaEUsUUFBQSxzQkFBc0IsR0FBRyxJQUFBLDBCQUFVLEVBQzlDLHNCQUFzQixFQUN0QixLQUFLLEVBQUUsS0FBNEIsRUFBRSxFQUFFLFNBQVMsRUFBRSxFQUFFLEVBQUU7SUFDcEQsTUFBTSxPQUFPLEdBQUcsU0FBUyxDQUFDLE9BQU8sQ0FBc0Isc0JBQWEsQ0FBQyxDQUFDO0lBRXRFLE1BQU0sQ0FBQyxZQUFZLENBQUMsR0FBRyxNQUFNLE9BQU8sQ0FBQyxtQkFBbUIsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUVoRSxPQUFPLElBQUksNEJBQVksQ0FBQyxZQUFZLEVBQUUsWUFBWSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0FBQ3pELENBQUMsRUFDRCxLQUFLLEVBQUUsY0FBc0IsRUFBRSxFQUFFLFNBQVMsRUFBRSxFQUFFLEVBQUU7SUFDOUMsTUFBTSxPQUFPLEdBQUcsU0FBUyxDQUFDLE9BQU8sQ0FBc0Isc0JBQWEsQ0FBQyxDQUFDO0lBRXRFLE1BQU0sT0FBTyxDQUFDLG1CQUFtQixDQUFDLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQztBQUN0RCxDQUFDLENBQ0YsQ0FBQyJ9