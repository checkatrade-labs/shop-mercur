"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validatePayoutAccountExistsForSellerStep = void 0;
const utils_1 = require("@medusajs/framework/utils");
const workflows_sdk_1 = require("@medusajs/framework/workflows-sdk");
const seller_payout_account_1 = __importDefault(require("../../../links/seller-payout-account"));
exports.validatePayoutAccountExistsForSellerStep = (0, workflows_sdk_1.createStep)('validate-payout-account-exists-for-seller', async (sellerId, { container }) => {
    const query = container.resolve(utils_1.ContainerRegistrationKeys.QUERY);
    const { data: [sellerPayoutAccountRelations] } = await query.graph({
        entity: seller_payout_account_1.default.entryPoint,
        fields: ['id', 'payout_account_id'],
        filters: { seller_id: sellerId }
    });
    if (!sellerPayoutAccountRelations) {
        throw new utils_1.MedusaError(utils_1.MedusaError.Types.NOT_FOUND, 'No payment account exists for seller');
    }
    return new workflows_sdk_1.StepResponse({
        id: sellerPayoutAccountRelations.payout_account_id
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsaWRhdGUtcGF5b3V0LWFjY291bnQtZXhpc3RzLWZvci1zZWxsZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvd29ya2Zsb3dzL3NlbGxlci9zdGVwcy92YWxpZGF0ZS1wYXlvdXQtYWNjb3VudC1leGlzdHMtZm9yLXNlbGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxxREFHa0M7QUFDbEMscUVBQTRFO0FBRTVFLGlHQUEwRTtBQUU3RCxRQUFBLHdDQUF3QyxHQUFHLElBQUEsMEJBQVUsRUFDaEUsMkNBQTJDLEVBQzNDLEtBQUssRUFBRSxRQUFnQixFQUFFLEVBQUUsU0FBUyxFQUFFLEVBQUUsRUFBRTtJQUN4QyxNQUFNLEtBQUssR0FBRyxTQUFTLENBQUMsT0FBTyxDQUFDLGlDQUF5QixDQUFDLEtBQUssQ0FBQyxDQUFBO0lBRWhFLE1BQU0sRUFDSixJQUFJLEVBQUUsQ0FBQyw0QkFBNEIsQ0FBQyxFQUNyQyxHQUFHLE1BQU0sS0FBSyxDQUFDLEtBQUssQ0FBQztRQUNwQixNQUFNLEVBQUUsK0JBQXVCLENBQUMsVUFBVTtRQUMxQyxNQUFNLEVBQUUsQ0FBQyxJQUFJLEVBQUUsbUJBQW1CLENBQUM7UUFDbkMsT0FBTyxFQUFFLEVBQUUsU0FBUyxFQUFFLFFBQVEsRUFBRTtLQUNqQyxDQUFDLENBQUE7SUFFRixJQUFJLENBQUMsNEJBQTRCLEVBQUUsQ0FBQztRQUNsQyxNQUFNLElBQUksbUJBQVcsQ0FDbkIsbUJBQVcsQ0FBQyxLQUFLLENBQUMsU0FBUyxFQUMzQixzQ0FBc0MsQ0FDdkMsQ0FBQTtJQUNILENBQUM7SUFFRCxPQUFPLElBQUksNEJBQVksQ0FBQztRQUN0QixFQUFFLEVBQUUsNEJBQTRCLENBQUMsaUJBQWlCO0tBQ25ELENBQUMsQ0FBQTtBQUNKLENBQUMsQ0FDRixDQUFBIn0=