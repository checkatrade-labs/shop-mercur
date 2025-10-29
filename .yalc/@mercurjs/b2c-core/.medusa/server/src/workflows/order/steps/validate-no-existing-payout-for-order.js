"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateNoExistingPayoutForOrderStep = void 0;
const utils_1 = require("@medusajs/framework/utils");
const workflows_sdk_1 = require("@medusajs/framework/workflows-sdk");
const order_payout_1 = __importDefault(require("../../../links/order-payout"));
exports.validateNoExistingPayoutForOrderStep = (0, workflows_sdk_1.createStep)('validate-no-existing-payout-for-order', async (id, { container }) => {
    const query = container.resolve(utils_1.ContainerRegistrationKeys.QUERY);
    const { data: [orderRelation] } = await query.graph({
        entity: order_payout_1.default.entryPoint,
        fields: ['order_id'],
        filters: {
            order_id: id
        }
    });
    if (orderRelation) {
        throw new utils_1.MedusaError(utils_1.MedusaError.Types.DUPLICATE_ERROR, `Payout already exists for order: ${id}`);
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsaWRhdGUtbm8tZXhpc3RpbmctcGF5b3V0LWZvci1vcmRlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy93b3JrZmxvd3Mvb3JkZXIvc3RlcHMvdmFsaWRhdGUtbm8tZXhpc3RpbmctcGF5b3V0LWZvci1vcmRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxxREFHa0M7QUFDbEMscUVBQThEO0FBRTlELCtFQUF5RDtBQUU1QyxRQUFBLG9DQUFvQyxHQUFHLElBQUEsMEJBQVUsRUFDNUQsdUNBQXVDLEVBQ3ZDLEtBQUssRUFBRSxFQUFVLEVBQUUsRUFBRSxTQUFTLEVBQUUsRUFBRSxFQUFFO0lBQ2xDLE1BQU0sS0FBSyxHQUFHLFNBQVMsQ0FBQyxPQUFPLENBQUMsaUNBQXlCLENBQUMsS0FBSyxDQUFDLENBQUE7SUFFaEUsTUFBTSxFQUNKLElBQUksRUFBRSxDQUFDLGFBQWEsQ0FBQyxFQUN0QixHQUFHLE1BQU0sS0FBSyxDQUFDLEtBQUssQ0FBQztRQUNwQixNQUFNLEVBQUUsc0JBQWUsQ0FBQyxVQUFVO1FBQ2xDLE1BQU0sRUFBRSxDQUFDLFVBQVUsQ0FBQztRQUNwQixPQUFPLEVBQUU7WUFDUCxRQUFRLEVBQUUsRUFBRTtTQUNiO0tBQ0YsQ0FBQyxDQUFBO0lBRUYsSUFBSSxhQUFhLEVBQUUsQ0FBQztRQUNsQixNQUFNLElBQUksbUJBQVcsQ0FDbkIsbUJBQVcsQ0FBQyxLQUFLLENBQUMsZUFBZSxFQUNqQyxvQ0FBb0MsRUFBRSxFQUFFLENBQ3pDLENBQUE7SUFDSCxDQUFDO0FBQ0gsQ0FBQyxDQUNGLENBQUEifQ==