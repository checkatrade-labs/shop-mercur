"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createMemberStep = void 0;
const workflows_sdk_1 = require("@medusajs/framework/workflows-sdk");
const seller_1 = require("../../../modules/seller");
exports.createMemberStep = (0, workflows_sdk_1.createStep)("create-member", async (input, { container }) => {
    const service = container.resolve(seller_1.SELLER_MODULE);
    const member = await service.createMembers(input);
    return new workflows_sdk_1.StepResponse(member, member.id);
}, async (memberId, { container }) => {
    const service = container.resolve(seller_1.SELLER_MODULE);
    await service.deleteMembers([memberId]);
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JlYXRlLW1lbWJlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy93b3JrZmxvd3Mvc2VsbGVyL3N0ZXBzL2NyZWF0ZS1tZW1iZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEscUVBQTZFO0FBRzdFLG9EQUF3RDtBQUczQyxRQUFBLGdCQUFnQixHQUFHLElBQUEsMEJBQVUsRUFDeEMsZUFBZSxFQUNmLEtBQUssRUFBRSxLQUFzQixFQUFFLEVBQUUsU0FBUyxFQUFFLEVBQUUsRUFBRTtJQUM5QyxNQUFNLE9BQU8sR0FBRyxTQUFTLENBQUMsT0FBTyxDQUFzQixzQkFBYSxDQUFDLENBQUM7SUFFdEUsTUFBTSxNQUFNLEdBQWMsTUFBTSxPQUFPLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBRTdELE9BQU8sSUFBSSw0QkFBWSxDQUFDLE1BQU0sRUFBRSxNQUFNLENBQUMsRUFBRSxDQUFDLENBQUM7QUFDN0MsQ0FBQyxFQUNELEtBQUssRUFBRSxRQUFnQixFQUFFLEVBQUUsU0FBUyxFQUFFLEVBQUUsRUFBRTtJQUN4QyxNQUFNLE9BQU8sR0FBRyxTQUFTLENBQUMsT0FBTyxDQUFzQixzQkFBYSxDQUFDLENBQUM7SUFFdEUsTUFBTSxPQUFPLENBQUMsYUFBYSxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztBQUMxQyxDQUFDLENBQ0YsQ0FBQyJ9