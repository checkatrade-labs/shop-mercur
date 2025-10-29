"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateMemberStep = void 0;
const workflows_sdk_1 = require("@medusajs/framework/workflows-sdk");
const seller_1 = require("../../../modules/seller");
exports.updateMemberStep = (0, workflows_sdk_1.createStep)("update-member", async (input, { container }) => {
    const service = container.resolve(seller_1.SELLER_MODULE);
    const previousData = await service.retrieveMember(input.id);
    const updatedMember = await service.updateMembers(input);
    return new workflows_sdk_1.StepResponse(updatedMember, previousData);
}, async (previousData, { container }) => {
    const service = container.resolve(seller_1.SELLER_MODULE);
    await service.updateMembers(previousData);
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXBkYXRlLW1lbWJlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy93b3JrZmxvd3Mvc2VsbGVyL3N0ZXBzL3VwZGF0ZS1tZW1iZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEscUVBQTZFO0FBRzdFLG9EQUE2RTtBQUVoRSxRQUFBLGdCQUFnQixHQUFHLElBQUEsMEJBQVUsRUFDeEMsZUFBZSxFQUNmLEtBQUssRUFBRSxLQUFzQixFQUFFLEVBQUUsU0FBUyxFQUFFLEVBQUUsRUFBRTtJQUM5QyxNQUFNLE9BQU8sR0FBRyxTQUFTLENBQUMsT0FBTyxDQUFzQixzQkFBYSxDQUFDLENBQUM7SUFFdEUsTUFBTSxZQUFZLEdBQUcsTUFBTSxPQUFPLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUU1RCxNQUFNLGFBQWEsR0FBYyxNQUFNLE9BQU8sQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUM7SUFFcEUsT0FBTyxJQUFJLDRCQUFZLENBQUMsYUFBYSxFQUFFLFlBQStCLENBQUMsQ0FBQztBQUMxRSxDQUFDLEVBQ0QsS0FBSyxFQUFFLFlBQTZCLEVBQUUsRUFBRSxTQUFTLEVBQUUsRUFBRSxFQUFFO0lBQ3JELE1BQU0sT0FBTyxHQUFHLFNBQVMsQ0FBQyxPQUFPLENBQXNCLHNCQUFhLENBQUMsQ0FBQztJQUV0RSxNQUFNLE9BQU8sQ0FBQyxhQUFhLENBQUMsWUFBWSxDQUFDLENBQUM7QUFDNUMsQ0FBQyxDQUNGLENBQUMifQ==