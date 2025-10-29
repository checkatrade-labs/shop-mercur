"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SellerOnboarding = void 0;
const utils_1 = require("@medusajs/framework/utils");
const seller_1 = require("./seller");
exports.SellerOnboarding = utils_1.model.define('seller_onboarding', {
    id: utils_1.model.id({ prefix: 'sel_onb' }).primaryKey(),
    store_information: utils_1.model.boolean().default(false),
    stripe_connection: utils_1.model.boolean().default(false),
    locations_shipping: utils_1.model.boolean().default(false),
    products: utils_1.model.boolean().default(false),
    seller: utils_1.model.belongsTo(() => seller_1.Seller, { mappedBy: 'onboarding' })
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib25ib2FyZGluZy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9tb2R1bGVzL3NlbGxlci9tb2RlbHMvb25ib2FyZGluZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxxREFBaUQ7QUFFakQscUNBQWlDO0FBRXBCLFFBQUEsZ0JBQWdCLEdBQUcsYUFBSyxDQUFDLE1BQU0sQ0FBQyxtQkFBbUIsRUFBRTtJQUNoRSxFQUFFLEVBQUUsYUFBSyxDQUFDLEVBQUUsQ0FBQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsQ0FBQyxDQUFDLFVBQVUsRUFBRTtJQUNoRCxpQkFBaUIsRUFBRSxhQUFLLENBQUMsT0FBTyxFQUFFLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQztJQUNqRCxpQkFBaUIsRUFBRSxhQUFLLENBQUMsT0FBTyxFQUFFLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQztJQUNqRCxrQkFBa0IsRUFBRSxhQUFLLENBQUMsT0FBTyxFQUFFLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQztJQUNsRCxRQUFRLEVBQUUsYUFBSyxDQUFDLE9BQU8sRUFBRSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUM7SUFDeEMsTUFBTSxFQUFFLGFBQUssQ0FBQyxTQUFTLENBQUMsR0FBRyxFQUFFLENBQUMsZUFBTSxFQUFFLEVBQUUsUUFBUSxFQUFFLFlBQVksRUFBRSxDQUFDO0NBQ2xFLENBQUMsQ0FBQSJ9