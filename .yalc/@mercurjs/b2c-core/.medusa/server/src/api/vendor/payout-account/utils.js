"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.refetchPayoutAccount = void 0;
const utils_1 = require("@medusajs/framework/utils");
const seller_payout_account_1 = __importDefault(require("../../../links/seller-payout-account"));
const refetchPayoutAccount = async (container, fields, filters) => {
    const query = container.resolve(utils_1.ContainerRegistrationKeys.QUERY);
    const { data: [sellerPayoutAccount] } = await query.graph({
        entity: seller_payout_account_1.default.entryPoint,
        fields,
        filters
    }, { throwIfKeyNotFound: true });
    return sellerPayoutAccount;
};
exports.refetchPayoutAccount = refetchPayoutAccount;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvYXBpL3ZlbmRvci9wYXlvdXQtYWNjb3VudC91dGlscy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFDQSxxREFBcUU7QUFFckUsaUdBQTBFO0FBRW5FLE1BQU0sb0JBQW9CLEdBQUcsS0FBSyxFQUN2QyxTQUEwQixFQUMxQixNQUFnQixFQUNoQixPQUFnQyxFQUNoQyxFQUFFO0lBQ0YsTUFBTSxLQUFLLEdBQUcsU0FBUyxDQUFDLE9BQU8sQ0FBQyxpQ0FBeUIsQ0FBQyxLQUFLLENBQUMsQ0FBQTtJQUVoRSxNQUFNLEVBQ0osSUFBSSxFQUFFLENBQUMsbUJBQW1CLENBQUMsRUFDNUIsR0FBRyxNQUFNLEtBQUssQ0FBQyxLQUFLLENBQ25CO1FBQ0UsTUFBTSxFQUFFLCtCQUF1QixDQUFDLFVBQVU7UUFDMUMsTUFBTTtRQUNOLE9BQU87S0FDUixFQUNELEVBQUUsa0JBQWtCLEVBQUUsSUFBSSxFQUFFLENBQzdCLENBQUE7SUFFRCxPQUFPLG1CQUFtQixDQUFBO0FBQzVCLENBQUMsQ0FBQTtBQW5CWSxRQUFBLG9CQUFvQix3QkFtQmhDIn0=