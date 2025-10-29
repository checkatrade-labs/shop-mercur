"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Payout = void 0;
const utils_1 = require("@medusajs/framework/utils");
const payout_account_1 = require("./payout-account");
const payout_reversal_1 = require("./payout-reversal");
exports.Payout = utils_1.model.define('payout', {
    id: utils_1.model.id({ prefix: 'pout' }).primaryKey(),
    currency_code: utils_1.model.text(),
    amount: utils_1.model.bigNumber(),
    data: utils_1.model.json().nullable(),
    payout_account: utils_1.model.belongsTo(() => payout_account_1.PayoutAccount, {
        mappedBy: 'payouts'
    }),
    reversals: utils_1.model.hasMany(() => payout_reversal_1.PayoutReversal)
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGF5b3V0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vc3JjL21vZHVsZXMvcGF5b3V0L21vZGVscy9wYXlvdXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEscURBQWlEO0FBRWpELHFEQUFnRDtBQUNoRCx1REFBa0Q7QUFFckMsUUFBQSxNQUFNLEdBQUcsYUFBSyxDQUFDLE1BQU0sQ0FBQyxRQUFRLEVBQUU7SUFDM0MsRUFBRSxFQUFFLGFBQUssQ0FBQyxFQUFFLENBQUMsRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLENBQUMsQ0FBQyxVQUFVLEVBQUU7SUFDN0MsYUFBYSxFQUFFLGFBQUssQ0FBQyxJQUFJLEVBQUU7SUFDM0IsTUFBTSxFQUFFLGFBQUssQ0FBQyxTQUFTLEVBQUU7SUFDekIsSUFBSSxFQUFFLGFBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQyxRQUFRLEVBQUU7SUFDN0IsY0FBYyxFQUFFLGFBQUssQ0FBQyxTQUFTLENBQUMsR0FBRyxFQUFFLENBQUMsOEJBQWEsRUFBRTtRQUNuRCxRQUFRLEVBQUUsU0FBUztLQUNwQixDQUFDO0lBQ0YsU0FBUyxFQUFFLGFBQUssQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUFFLENBQUMsZ0NBQWMsQ0FBQztDQUMvQyxDQUFDLENBQUEifQ==