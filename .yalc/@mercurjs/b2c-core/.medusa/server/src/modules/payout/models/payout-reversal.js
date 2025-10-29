"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PayoutReversal = void 0;
const utils_1 = require("@medusajs/framework/utils");
const payout_1 = require("./payout");
exports.PayoutReversal = utils_1.model.define('payout_reversal', {
    id: utils_1.model.id({ prefix: 'prev' }).primaryKey(),
    currency_code: utils_1.model.text(),
    amount: utils_1.model.bigNumber(),
    data: utils_1.model.json().nullable(),
    payout: utils_1.model.belongsTo(() => payout_1.Payout, {
        mappedBy: 'reversals'
    })
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGF5b3V0LXJldmVyc2FsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vc3JjL21vZHVsZXMvcGF5b3V0L21vZGVscy9wYXlvdXQtcmV2ZXJzYWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEscURBQWlEO0FBRWpELHFDQUFpQztBQUVwQixRQUFBLGNBQWMsR0FBRyxhQUFLLENBQUMsTUFBTSxDQUFDLGlCQUFpQixFQUFFO0lBQzVELEVBQUUsRUFBRSxhQUFLLENBQUMsRUFBRSxDQUFDLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxDQUFDLENBQUMsVUFBVSxFQUFFO0lBQzdDLGFBQWEsRUFBRSxhQUFLLENBQUMsSUFBSSxFQUFFO0lBQzNCLE1BQU0sRUFBRSxhQUFLLENBQUMsU0FBUyxFQUFFO0lBQ3pCLElBQUksRUFBRSxhQUFLLENBQUMsSUFBSSxFQUFFLENBQUMsUUFBUSxFQUFFO0lBQzdCLE1BQU0sRUFBRSxhQUFLLENBQUMsU0FBUyxDQUFDLEdBQUcsRUFBRSxDQUFDLGVBQU0sRUFBRTtRQUNwQyxRQUFRLEVBQUUsV0FBVztLQUN0QixDQUFDO0NBQ0gsQ0FBQyxDQUFBIn0=