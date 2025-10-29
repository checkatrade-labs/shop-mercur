"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.syncStripeAccountStep = void 0;
const workflows_sdk_1 = require("@medusajs/framework/workflows-sdk");
const payout_1 = require("../../../modules/payout");
exports.syncStripeAccountStep = (0, workflows_sdk_1.createStep)("sync-stripe-account", async (account_id, { container }) => {
    const service = container.resolve(payout_1.PAYOUT_MODULE);
    const account = await service.syncStripeAccount(account_id);
    return new workflows_sdk_1.StepResponse(account);
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3luYy1zdHJpcGUtYWNjb3VudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy93b3JrZmxvd3Mvc2VsbGVyL3N0ZXBzL3N5bmMtc3RyaXBlLWFjY291bnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEscUVBQTZFO0FBRTdFLG9EQUF3RDtBQUczQyxRQUFBLHFCQUFxQixHQUFHLElBQUEsMEJBQVUsRUFDN0MscUJBQXFCLEVBQ3JCLEtBQUssRUFBRSxVQUFrQixFQUFFLEVBQUUsU0FBUyxFQUFFLEVBQUUsRUFBRTtJQUMxQyxNQUFNLE9BQU8sR0FBRyxTQUFTLENBQUMsT0FBTyxDQUFzQixzQkFBYSxDQUFDLENBQUM7SUFFdEUsTUFBTSxPQUFPLEdBQUcsTUFBTSxPQUFPLENBQUMsaUJBQWlCLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDNUQsT0FBTyxJQUFJLDRCQUFZLENBQUMsT0FBTyxDQUFDLENBQUM7QUFDbkMsQ0FBQyxDQUNGLENBQUMifQ==