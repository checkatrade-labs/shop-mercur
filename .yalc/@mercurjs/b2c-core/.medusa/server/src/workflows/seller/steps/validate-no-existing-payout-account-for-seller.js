"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateNoExistingPayoutAccountForSellerStep = void 0;
const utils_1 = require("@medusajs/framework/utils");
const workflows_sdk_1 = require("@medusajs/framework/workflows-sdk");
const seller_payout_account_1 = __importDefault(require("../../../links/seller-payout-account"));
exports.validateNoExistingPayoutAccountForSellerStep = (0, workflows_sdk_1.createStep)('validate-no-existing-payout-account-for-seller', async (sellerId, { container }) => {
    const query = container.resolve(utils_1.ContainerRegistrationKeys.QUERY);
    const { data: sellerPayoutAccountRelations } = await query.graph({
        entity: seller_payout_account_1.default.entryPoint,
        fields: ['id'],
        filters: { seller_id: sellerId }
    });
    if (sellerPayoutAccountRelations.length > 0) {
        throw new utils_1.MedusaError(utils_1.MedusaError.Types.DUPLICATE_ERROR, 'Payment account already exists for seller');
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsaWRhdGUtbm8tZXhpc3RpbmctcGF5b3V0LWFjY291bnQtZm9yLXNlbGxlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy93b3JrZmxvd3Mvc2VsbGVyL3N0ZXBzL3ZhbGlkYXRlLW5vLWV4aXN0aW5nLXBheW91dC1hY2NvdW50LWZvci1zZWxsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEscURBR2tDO0FBQ2xDLHFFQUE4RDtBQUU5RCxpR0FBMEU7QUFFN0QsUUFBQSw0Q0FBNEMsR0FBRyxJQUFBLDBCQUFVLEVBQ3BFLGdEQUFnRCxFQUNoRCxLQUFLLEVBQUUsUUFBZ0IsRUFBRSxFQUFFLFNBQVMsRUFBRSxFQUFFLEVBQUU7SUFDeEMsTUFBTSxLQUFLLEdBQUcsU0FBUyxDQUFDLE9BQU8sQ0FBQyxpQ0FBeUIsQ0FBQyxLQUFLLENBQUMsQ0FBQTtJQUVoRSxNQUFNLEVBQUUsSUFBSSxFQUFFLDRCQUE0QixFQUFFLEdBQUcsTUFBTSxLQUFLLENBQUMsS0FBSyxDQUFDO1FBQy9ELE1BQU0sRUFBRSwrQkFBdUIsQ0FBQyxVQUFVO1FBQzFDLE1BQU0sRUFBRSxDQUFDLElBQUksQ0FBQztRQUNkLE9BQU8sRUFBRSxFQUFFLFNBQVMsRUFBRSxRQUFRLEVBQUU7S0FDakMsQ0FBQyxDQUFBO0lBRUYsSUFBSSw0QkFBNEIsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFLENBQUM7UUFDNUMsTUFBTSxJQUFJLG1CQUFXLENBQ25CLG1CQUFXLENBQUMsS0FBSyxDQUFDLGVBQWUsRUFDakMsMkNBQTJDLENBQzVDLENBQUE7SUFDSCxDQUFDO0FBQ0gsQ0FBQyxDQUNGLENBQUEifQ==