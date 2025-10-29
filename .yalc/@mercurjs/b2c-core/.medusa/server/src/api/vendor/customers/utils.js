"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateCustomerGroupsOwnership = validateCustomerGroupsOwnership;
const utils_1 = require("@medusajs/framework/utils");
const seller_customer_group_1 = __importDefault(require("../../../links/seller-customer-group"));
async function validateCustomerGroupsOwnership(container, seller_id, group_ids) {
    if (!group_ids.length) {
        return;
    }
    const groups = [...new Set(group_ids)];
    const query = container.resolve(utils_1.ContainerRegistrationKeys.QUERY);
    const { data } = await query.graph({
        entity: seller_customer_group_1.default.entryPoint,
        fields: ['id'],
        filters: {
            seller_id,
            customer_group_id: groups
        }
    });
    if (data.length !== groups.length) {
        throw new utils_1.MedusaError(utils_1.MedusaError.Types.INVALID_DATA, 'Some of the customer groups do not belong to the current seller!');
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvYXBpL3ZlbmRvci9jdXN0b21lcnMvdXRpbHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFRQSwwRUEyQkM7QUFsQ0QscURBR2tDO0FBRWxDLGlHQUFzRTtBQUUvRCxLQUFLLFVBQVUsK0JBQStCLENBQ25ELFNBQTBCLEVBQzFCLFNBQWlCLEVBQ2pCLFNBQW1CO0lBRW5CLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDdEIsT0FBTTtJQUNSLENBQUM7SUFFRCxNQUFNLE1BQU0sR0FBRyxDQUFDLEdBQUcsSUFBSSxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQTtJQUN0QyxNQUFNLEtBQUssR0FBRyxTQUFTLENBQUMsT0FBTyxDQUFDLGlDQUF5QixDQUFDLEtBQUssQ0FBQyxDQUFBO0lBRWhFLE1BQU0sRUFBRSxJQUFJLEVBQUUsR0FBRyxNQUFNLEtBQUssQ0FBQyxLQUFLLENBQUM7UUFDakMsTUFBTSxFQUFFLCtCQUFtQixDQUFDLFVBQVU7UUFDdEMsTUFBTSxFQUFFLENBQUMsSUFBSSxDQUFDO1FBQ2QsT0FBTyxFQUFFO1lBQ1AsU0FBUztZQUNULGlCQUFpQixFQUFFLE1BQU07U0FDMUI7S0FDRixDQUFDLENBQUE7SUFFRixJQUFJLElBQUksQ0FBQyxNQUFNLEtBQUssTUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQ2xDLE1BQU0sSUFBSSxtQkFBVyxDQUNuQixtQkFBVyxDQUFDLEtBQUssQ0FBQyxZQUFZLEVBQzlCLGtFQUFrRSxDQUNuRSxDQUFBO0lBQ0gsQ0FBQztBQUNILENBQUMifQ==