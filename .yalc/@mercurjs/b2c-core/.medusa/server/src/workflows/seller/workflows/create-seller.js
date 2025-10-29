"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createSellerWorkflow = void 0;
const workflows_sdk_1 = require("@medusajs/framework/workflows-sdk");
const core_flows_1 = require("@medusajs/medusa/core-flows");
const workflows_sdk_2 = require("@medusajs/workflows-sdk");
const steps_1 = require("../steps");
exports.createSellerWorkflow = (0, workflows_sdk_2.createWorkflow)("create-seller", function (input) {
    const seller = (0, steps_1.createSellerStep)(input.seller);
    const memberInput = (0, workflows_sdk_1.transform)({ seller, member: input.member }, ({ member, seller }) => ({
        ...member,
        seller_id: seller.id,
    }));
    const member = (0, steps_1.createMemberStep)(memberInput);
    (0, steps_1.createSellerOnboardingStep)(seller);
    (0, core_flows_1.setAuthAppMetadataStep)({
        authIdentityId: input.auth_identity_id,
        actorType: "seller",
        value: member.id,
    });
    (0, steps_1.createSellerShippingProfileStep)(seller);
    const sellerCreatedHook = (0, workflows_sdk_2.createHook)("sellerCreated", {
        sellerId: seller.id,
    });
    return new workflows_sdk_2.WorkflowResponse(seller, { hooks: [sellerCreatedHook] });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JlYXRlLXNlbGxlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy93b3JrZmxvd3Mvc2VsbGVyL3dvcmtmbG93cy9jcmVhdGUtc2VsbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLHFFQUE4RDtBQUM5RCw0REFBcUU7QUFDckUsMkRBSWlDO0FBSWpDLG9DQUtrQjtBQVFMLFFBQUEsb0JBQW9CLEdBQUcsSUFBQSw4QkFBYyxFQUNoRCxlQUFlLEVBQ2YsVUFBVSxLQUFnQztJQUN4QyxNQUFNLE1BQU0sR0FBRyxJQUFBLHdCQUFnQixFQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUU5QyxNQUFNLFdBQVcsR0FBRyxJQUFBLHlCQUFTLEVBQzNCLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxLQUFLLENBQUMsTUFBTSxFQUFFLEVBQ2hDLENBQUMsRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDdkIsR0FBRyxNQUFNO1FBQ1QsU0FBUyxFQUFFLE1BQU0sQ0FBQyxFQUFFO0tBQ3JCLENBQUMsQ0FDSCxDQUFDO0lBRUYsTUFBTSxNQUFNLEdBQUcsSUFBQSx3QkFBZ0IsRUFBQyxXQUFXLENBQUMsQ0FBQztJQUM3QyxJQUFBLGtDQUEwQixFQUFDLE1BQU0sQ0FBQyxDQUFDO0lBRW5DLElBQUEsbUNBQXNCLEVBQUM7UUFDckIsY0FBYyxFQUFFLEtBQUssQ0FBQyxnQkFBZ0I7UUFDdEMsU0FBUyxFQUFFLFFBQVE7UUFDbkIsS0FBSyxFQUFFLE1BQU0sQ0FBQyxFQUFFO0tBQ2pCLENBQUMsQ0FBQztJQUVILElBQUEsdUNBQStCLEVBQUMsTUFBTSxDQUFDLENBQUM7SUFDeEMsTUFBTSxpQkFBaUIsR0FBRyxJQUFBLDBCQUFVLEVBQUMsZUFBZSxFQUFFO1FBQ3BELFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtLQUNwQixDQUFDLENBQUM7SUFDSCxPQUFPLElBQUksZ0NBQWdCLENBQUMsTUFBTSxFQUFFLEVBQUUsS0FBSyxFQUFFLENBQUMsaUJBQWlCLENBQUMsRUFBRSxDQUFDLENBQUM7QUFDdEUsQ0FBQyxDQUNGLENBQUMifQ==