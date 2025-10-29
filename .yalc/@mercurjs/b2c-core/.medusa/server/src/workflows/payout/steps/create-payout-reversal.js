"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createPayoutReversalStep = void 0;
const workflows_sdk_1 = require("@medusajs/framework/workflows-sdk");
const payout_1 = require("../../../modules/payout");
exports.createPayoutReversalStep = (0, workflows_sdk_1.createStep)("create-payout-reversal", async (input, { container }) => {
    const service = container.resolve(payout_1.PAYOUT_MODULE);
    if (input.payout_id === null) {
        return new workflows_sdk_1.StepResponse();
    }
    let payoutReversal = null;
    let err = false;
    try {
        //@ts-expect-error We check if payout_id is not null above
        payoutReversal = await service.createPayoutReversal(input);
    }
    catch {
        err = true;
    }
    return new workflows_sdk_1.StepResponse({
        payoutReversal,
        err,
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JlYXRlLXBheW91dC1yZXZlcnNhbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy93b3JrZmxvd3MvcGF5b3V0L3N0ZXBzL2NyZWF0ZS1wYXlvdXQtcmV2ZXJzYWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQ0EscUVBQTZFO0FBRzdFLG9EQUE2RTtBQVFoRSxRQUFBLHdCQUF3QixHQUFHLElBQUEsMEJBQVUsRUFDaEQsd0JBQXdCLEVBQ3hCLEtBQUssRUFBRSxLQUFvQyxFQUFFLEVBQUUsU0FBUyxFQUFFLEVBQUUsRUFBRTtJQUM1RCxNQUFNLE9BQU8sR0FBRyxTQUFTLENBQUMsT0FBTyxDQUFzQixzQkFBYSxDQUFDLENBQUM7SUFFdEUsSUFBSSxLQUFLLENBQUMsU0FBUyxLQUFLLElBQUksRUFBRSxDQUFDO1FBQzdCLE9BQU8sSUFBSSw0QkFBWSxFQUFFLENBQUM7SUFDNUIsQ0FBQztJQUVELElBQUksY0FBYyxHQUFxQixJQUFJLENBQUM7SUFDNUMsSUFBSSxHQUFHLEdBQUcsS0FBSyxDQUFDO0lBRWhCLElBQUksQ0FBQztRQUNILDBEQUEwRDtRQUMxRCxjQUFjLEdBQUcsTUFBTSxPQUFPLENBQUMsb0JBQW9CLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDN0QsQ0FBQztJQUFDLE1BQU0sQ0FBQztRQUNQLEdBQUcsR0FBRyxJQUFJLENBQUM7SUFDYixDQUFDO0lBRUQsT0FBTyxJQUFJLDRCQUFZLENBQUM7UUFDdEIsY0FBYztRQUNkLEdBQUc7S0FDSixDQUFDLENBQUM7QUFDTCxDQUFDLENBQ0YsQ0FBQyJ9