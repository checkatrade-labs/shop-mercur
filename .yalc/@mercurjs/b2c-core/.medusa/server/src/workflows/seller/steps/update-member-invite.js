"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateMemberInviteStep = void 0;
const workflows_sdk_1 = require("@medusajs/framework/workflows-sdk");
const seller_1 = require("../../../modules/seller");
exports.updateMemberInviteStep = (0, workflows_sdk_1.createStep)("update-member-invite", async (input, { container }) => {
    const service = container.resolve(seller_1.SELLER_MODULE);
    const previousData = await service.retrieveMemberInvite(input.id);
    const updatedInvites = 
    //@ts-ignore
    await service.updateMemberInvites(input);
    return new workflows_sdk_1.StepResponse(updatedInvites, previousData);
}, async (previousData, { container }) => {
    const service = container.resolve(seller_1.SELLER_MODULE);
    //@ts-ignore
    await service.updateMemberInvites(previousData);
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXBkYXRlLW1lbWJlci1pbnZpdGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvd29ya2Zsb3dzL3NlbGxlci9zdGVwcy91cGRhdGUtbWVtYmVyLWludml0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxxRUFBNkU7QUFHN0Usb0RBQTZFO0FBRWhFLFFBQUEsc0JBQXNCLEdBQUcsSUFBQSwwQkFBVSxFQUM5QyxzQkFBc0IsRUFDdEIsS0FBSyxFQUFFLEtBQTRCLEVBQUUsRUFBRSxTQUFTLEVBQUUsRUFBRSxFQUFFO0lBQ3BELE1BQU0sT0FBTyxHQUFHLFNBQVMsQ0FBQyxPQUFPLENBQXNCLHNCQUFhLENBQUMsQ0FBQztJQUV0RSxNQUFNLFlBQVksR0FBb0IsTUFBTSxPQUFPLENBQUMsb0JBQW9CLENBQ3RFLEtBQUssQ0FBQyxFQUFFLENBQ1QsQ0FBQztJQUVGLE1BQU0sY0FBYztJQUNsQixZQUFZO0lBQ1osTUFBTSxPQUFPLENBQUMsbUJBQW1CLENBQUMsS0FBSyxDQUFDLENBQUM7SUFFM0MsT0FBTyxJQUFJLDRCQUFZLENBQUMsY0FBYyxFQUFFLFlBQVksQ0FBQyxDQUFDO0FBQ3hELENBQUMsRUFDRCxLQUFLLEVBQUUsWUFBNkIsRUFBRSxFQUFFLFNBQVMsRUFBRSxFQUFFLEVBQUU7SUFDckQsTUFBTSxPQUFPLEdBQUcsU0FBUyxDQUFDLE9BQU8sQ0FBc0Isc0JBQWEsQ0FBQyxDQUFDO0lBQ3RFLFlBQVk7SUFDWixNQUFNLE9BQU8sQ0FBQyxtQkFBbUIsQ0FBQyxZQUFZLENBQUMsQ0FBQztBQUNsRCxDQUFDLENBQ0YsQ0FBQyJ9