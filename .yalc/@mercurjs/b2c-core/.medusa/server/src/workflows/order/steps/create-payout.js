"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createPayoutStep = void 0;
const workflows_sdk_1 = require("@medusajs/framework/workflows-sdk");
const payout_1 = require("../../../modules/payout");
exports.createPayoutStep = (0, workflows_sdk_1.createStep)("create-payout", async (input, { container }) => {
    const service = container.resolve(payout_1.PAYOUT_MODULE);
    let payout = null;
    let err = false;
    try {
        payout = await service.createPayout(input);
    }
    catch {
        err = true;
    }
    return new workflows_sdk_1.StepResponse({
        payout,
        err,
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JlYXRlLXBheW91dC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy93b3JrZmxvd3Mvb3JkZXIvc3RlcHMvY3JlYXRlLXBheW91dC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxxRUFBNkU7QUFHN0Usb0RBQXdEO0FBRzNDLFFBQUEsZ0JBQWdCLEdBQUcsSUFBQSwwQkFBVSxFQUN4QyxlQUFlLEVBQ2YsS0FBSyxFQUFFLEtBQXNCLEVBQUUsRUFBRSxTQUFTLEVBQUUsRUFBRSxFQUFFO0lBQzlDLE1BQU0sT0FBTyxHQUFHLFNBQVMsQ0FBQyxPQUFPLENBQXNCLHNCQUFhLENBQUMsQ0FBQztJQUV0RSxJQUFJLE1BQU0sR0FBcUIsSUFBSSxDQUFDO0lBQ3BDLElBQUksR0FBRyxHQUFHLEtBQUssQ0FBQztJQUVoQixJQUFJLENBQUM7UUFDSCxNQUFNLEdBQUcsTUFBTSxPQUFPLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzdDLENBQUM7SUFBQyxNQUFNLENBQUM7UUFDUCxHQUFHLEdBQUcsSUFBSSxDQUFDO0lBQ2IsQ0FBQztJQUVELE9BQU8sSUFBSSw0QkFBWSxDQUFDO1FBQ3RCLE1BQU07UUFDTixHQUFHO0tBQ0osQ0FBQyxDQUFDO0FBQ0wsQ0FBQyxDQUNGLENBQUMifQ==