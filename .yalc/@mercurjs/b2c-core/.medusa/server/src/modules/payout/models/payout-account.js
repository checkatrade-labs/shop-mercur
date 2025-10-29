"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PayoutAccount = void 0;
const utils_1 = require("@medusajs/framework/utils");
const framework_1 = require("@mercurjs/framework");
const onboarding_1 = require("./onboarding");
const payout_1 = require("./payout");
exports.PayoutAccount = utils_1.model.define("payout_account", {
    id: utils_1.model.id({ prefix: "pacc" }).primaryKey(),
    status: utils_1.model.enum(framework_1.PayoutAccountStatus).default(framework_1.PayoutAccountStatus.PENDING),
    reference_id: utils_1.model.text(),
    data: utils_1.model.json(),
    context: utils_1.model.json().nullable(),
    onboarding: utils_1.model.hasOne(() => onboarding_1.Onboarding).nullable(),
    payouts: utils_1.model.hasMany(() => payout_1.Payout),
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGF5b3V0LWFjY291bnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvbW9kdWxlcy9wYXlvdXQvbW9kZWxzL3BheW91dC1hY2NvdW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLHFEQUFrRDtBQUVsRCxtREFBMEQ7QUFDMUQsNkNBQTBDO0FBQzFDLHFDQUFrQztBQUVyQixRQUFBLGFBQWEsR0FBRyxhQUFLLENBQUMsTUFBTSxDQUFDLGdCQUFnQixFQUFFO0lBQzFELEVBQUUsRUFBRSxhQUFLLENBQUMsRUFBRSxDQUFDLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxDQUFDLENBQUMsVUFBVSxFQUFFO0lBQzdDLE1BQU0sRUFBRSxhQUFLLENBQUMsSUFBSSxDQUFDLCtCQUFtQixDQUFDLENBQUMsT0FBTyxDQUFDLCtCQUFtQixDQUFDLE9BQU8sQ0FBQztJQUM1RSxZQUFZLEVBQUUsYUFBSyxDQUFDLElBQUksRUFBRTtJQUMxQixJQUFJLEVBQUUsYUFBSyxDQUFDLElBQUksRUFBRTtJQUNsQixPQUFPLEVBQUUsYUFBSyxDQUFDLElBQUksRUFBRSxDQUFDLFFBQVEsRUFBRTtJQUNoQyxVQUFVLEVBQUUsYUFBSyxDQUFDLE1BQU0sQ0FBQyxHQUFHLEVBQUUsQ0FBQyx1QkFBVSxDQUFDLENBQUMsUUFBUSxFQUFFO0lBQ3JELE9BQU8sRUFBRSxhQUFLLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBRSxDQUFDLGVBQU0sQ0FBQztDQUNyQyxDQUFDLENBQUMifQ==