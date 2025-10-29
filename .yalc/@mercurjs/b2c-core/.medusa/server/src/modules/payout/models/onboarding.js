"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Onboarding = void 0;
const utils_1 = require("@medusajs/framework/utils");
const payout_account_1 = require("./payout-account");
exports.Onboarding = utils_1.model.define('onboarding', {
    id: utils_1.model.id({ prefix: 'onb' }).primaryKey(),
    data: utils_1.model.json().nullable(),
    context: utils_1.model.json().nullable(),
    payout_account: utils_1.model.belongsTo(() => payout_account_1.PayoutAccount, {
        mappedBy: 'onboarding'
    })
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib25ib2FyZGluZy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9tb2R1bGVzL3BheW91dC9tb2RlbHMvb25ib2FyZGluZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxxREFBaUQ7QUFFakQscURBQWdEO0FBRW5DLFFBQUEsVUFBVSxHQUFHLGFBQUssQ0FBQyxNQUFNLENBQUMsWUFBWSxFQUFFO0lBQ25ELEVBQUUsRUFBRSxhQUFLLENBQUMsRUFBRSxDQUFDLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUMsVUFBVSxFQUFFO0lBQzVDLElBQUksRUFBRSxhQUFLLENBQUMsSUFBSSxFQUFFLENBQUMsUUFBUSxFQUFFO0lBQzdCLE9BQU8sRUFBRSxhQUFLLENBQUMsSUFBSSxFQUFFLENBQUMsUUFBUSxFQUFFO0lBQ2hDLGNBQWMsRUFBRSxhQUFLLENBQUMsU0FBUyxDQUFDLEdBQUcsRUFBRSxDQUFDLDhCQUFhLEVBQUU7UUFDbkQsUUFBUSxFQUFFLFlBQVk7S0FDdkIsQ0FBQztDQUNILENBQUMsQ0FBQSJ9