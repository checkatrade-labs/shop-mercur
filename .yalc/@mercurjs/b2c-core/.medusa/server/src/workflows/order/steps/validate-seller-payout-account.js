"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateSellerPayoutAccountStep = void 0;
const workflows_sdk_1 = require("@medusajs/framework/workflows-sdk");
const utils_1 = require("@medusajs/utils");
const framework_1 = require("@mercurjs/framework");
exports.validateSellerPayoutAccountStep = (0, workflows_sdk_1.createStep)("validate-seller-payout-account", async (seller) => {
    if (!seller.payout_account) {
        throw new utils_1.MedusaError(utils_1.MedusaError.Types.INVALID_DATA, "Seller has no payout account");
    }
    if (seller.payout_account.status !== framework_1.PayoutAccountStatus.ACTIVE) {
        throw new utils_1.MedusaError(utils_1.MedusaError.Types.INVALID_DATA, "Seller payout account is not active");
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsaWRhdGUtc2VsbGVyLXBheW91dC1hY2NvdW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vc3JjL3dvcmtmbG93cy9vcmRlci9zdGVwcy92YWxpZGF0ZS1zZWxsZXItcGF5b3V0LWFjY291bnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEscUVBQStEO0FBQy9ELDJDQUE4QztBQUc5QyxtREFBMEQ7QUFFN0MsUUFBQSwrQkFBK0IsR0FBRyxJQUFBLDBCQUFVLEVBQ3ZELGdDQUFnQyxFQUNoQyxLQUFLLEVBQUUsTUFBa0MsRUFBRSxFQUFFO0lBQzNDLElBQUksQ0FBQyxNQUFNLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDM0IsTUFBTSxJQUFJLG1CQUFXLENBQ25CLG1CQUFXLENBQUMsS0FBSyxDQUFDLFlBQVksRUFDOUIsOEJBQThCLENBQy9CLENBQUM7SUFDSixDQUFDO0lBRUQsSUFBSSxNQUFNLENBQUMsY0FBYyxDQUFDLE1BQU0sS0FBSywrQkFBbUIsQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUNoRSxNQUFNLElBQUksbUJBQVcsQ0FDbkIsbUJBQVcsQ0FBQyxLQUFLLENBQUMsWUFBWSxFQUM5QixxQ0FBcUMsQ0FDdEMsQ0FBQztJQUNKLENBQUM7QUFDSCxDQUFDLENBQ0YsQ0FBQyJ9