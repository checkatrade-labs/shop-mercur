"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteMemberInvitesStep = void 0;
const workflows_sdk_1 = require("@medusajs/framework/workflows-sdk");
const seller_1 = require("../../../modules/seller");
exports.deleteMemberInvitesStep = (0, workflows_sdk_1.createStep)("delete-member-invites", async (id, { container }) => {
    const service = container.resolve(seller_1.SELLER_MODULE);
    await service.softDeleteMemberInvites(id);
    return new workflows_sdk_1.StepResponse(id);
}, async (inviteId, { container }) => {
    const service = container.resolve(seller_1.SELLER_MODULE);
    await service.restoreMemberInvites(inviteId);
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVsZXRlLW1lbWJlci1pbnZpdGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvd29ya2Zsb3dzL3NlbGxlci9zdGVwcy9kZWxldGUtbWVtYmVyLWludml0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxxRUFBNkU7QUFFN0Usb0RBQTZFO0FBRWhFLFFBQUEsdUJBQXVCLEdBQUcsSUFBQSwwQkFBVSxFQUMvQyx1QkFBdUIsRUFDdkIsS0FBSyxFQUFFLEVBQVUsRUFBRSxFQUFFLFNBQVMsRUFBRSxFQUFFLEVBQUU7SUFDbEMsTUFBTSxPQUFPLEdBQUcsU0FBUyxDQUFDLE9BQU8sQ0FBc0Isc0JBQWEsQ0FBQyxDQUFDO0lBRXRFLE1BQU0sT0FBTyxDQUFDLHVCQUF1QixDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBRTFDLE9BQU8sSUFBSSw0QkFBWSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0FBQzlCLENBQUMsRUFDRCxLQUFLLEVBQUUsUUFBZ0IsRUFBRSxFQUFFLFNBQVMsRUFBRSxFQUFFLEVBQUU7SUFDeEMsTUFBTSxPQUFPLEdBQUcsU0FBUyxDQUFDLE9BQU8sQ0FBc0Isc0JBQWEsQ0FBQyxDQUFDO0lBRXRFLE1BQU0sT0FBTyxDQUFDLG9CQUFvQixDQUFDLFFBQVEsQ0FBQyxDQUFDO0FBQy9DLENBQUMsQ0FDRixDQUFDIn0=