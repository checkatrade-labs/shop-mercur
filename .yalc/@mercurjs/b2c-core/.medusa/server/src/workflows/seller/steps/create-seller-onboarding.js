"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createSellerOnboardingStep = void 0;
const workflows_sdk_1 = require("@medusajs/framework/workflows-sdk");
const seller_1 = require("../../../modules/seller");
exports.createSellerOnboardingStep = (0, workflows_sdk_1.createStep)("create-seller-onboarding", async (input, { container }) => {
    const service = container.resolve(seller_1.SELLER_MODULE);
    const onboarding = await service.createSellerOnboardings({
        seller_id: input.id,
    });
    return new workflows_sdk_1.StepResponse(onboarding, onboarding.id);
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JlYXRlLXNlbGxlci1vbmJvYXJkaW5nLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vc3JjL3dvcmtmbG93cy9zZWxsZXIvc3RlcHMvY3JlYXRlLXNlbGxlci1vbmJvYXJkaW5nLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLHFFQUE2RTtBQUc3RSxvREFBNkU7QUFFaEUsUUFBQSwwQkFBMEIsR0FBRyxJQUFBLDBCQUFVLEVBQ2xELDBCQUEwQixFQUMxQixLQUFLLEVBQUUsS0FBZ0IsRUFBRSxFQUFFLFNBQVMsRUFBRSxFQUFFLEVBQUU7SUFDeEMsTUFBTSxPQUFPLEdBQUcsU0FBUyxDQUFDLE9BQU8sQ0FBc0Isc0JBQWEsQ0FBQyxDQUFDO0lBRXRFLE1BQU0sVUFBVSxHQUFHLE1BQU0sT0FBTyxDQUFDLHVCQUF1QixDQUFDO1FBQ3ZELFNBQVMsRUFBRSxLQUFLLENBQUMsRUFBRTtLQUNwQixDQUFDLENBQUM7SUFFSCxPQUFPLElBQUksNEJBQVksQ0FBQyxVQUFVLEVBQUUsVUFBVSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0FBQ3JELENBQUMsQ0FDRixDQUFDIn0=