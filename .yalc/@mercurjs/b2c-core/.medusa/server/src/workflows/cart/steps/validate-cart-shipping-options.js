"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateCartShippingOptionsStep = void 0;
const utils_1 = require("@medusajs/framework/utils");
const workflows_sdk_1 = require("@medusajs/framework/workflows-sdk");
const seller_product_1 = __importDefault(require("../../../links/seller-product"));
const seller_shipping_option_1 = __importDefault(require("../../../links/seller-shipping-option"));
exports.validateCartShippingOptionsStep = (0, workflows_sdk_1.createStep)('validate-cart-shipping-options', async (input, { container }) => {
    const query = container.resolve(utils_1.ContainerRegistrationKeys.QUERY);
    if (input.option_ids.length !== new Set(input.option_ids).size) {
        throw new utils_1.MedusaError(utils_1.MedusaError.Types.INVALID_DATA, 'Some of the shipping methods are doubled!');
    }
    const { data: [cart] } = await query.graph({
        entity: 'cart',
        fields: ['id', 'items.product_id'],
        filters: { id: input.cart_id }
    });
    const [{ data: sellerProducts }, { data: sellerShippingOptions }] = await (0, utils_1.promiseAll)([
        query.graph({
            entity: seller_product_1.default.entryPoint,
            fields: ['seller_id', 'product_id'],
            filters: {
                product_id: cart.items.map((item) => item.product_id)
            }
        }),
        query.graph({
            entity: seller_shipping_option_1.default.entryPoint,
            fields: ['seller_id', 'shipping_option_id'],
            filters: {
                shipping_option_id: input.option_ids
            }
        })
    ]);
    const sellers = new Set(sellerProducts.map((sp) => sp.seller_id));
    for (const sellerShippingOption of sellerShippingOptions) {
        if (!sellers.has(sellerShippingOption.seller_id)) {
            throw new utils_1.MedusaError(utils_1.MedusaError.Types.INVALID_DATA, `Shipping option with id: ${sellerShippingOption.shipping_option_id} is not available for any of the cart items`);
        }
    }
    return new workflows_sdk_1.StepResponse({
        sellerProducts,
        sellerShippingOptions
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsaWRhdGUtY2FydC1zaGlwcGluZy1vcHRpb25zLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vc3JjL3dvcmtmbG93cy9jYXJ0L3N0ZXBzL3ZhbGlkYXRlLWNhcnQtc2hpcHBpbmctb3B0aW9ucy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxxREFJa0M7QUFDbEMscUVBQTRFO0FBRTVFLG1GQUE2RDtBQUM3RCxtR0FBNEU7QUFPL0QsUUFBQSwrQkFBK0IsR0FBRyxJQUFBLDBCQUFVLEVBQ3ZELGdDQUFnQyxFQUNoQyxLQUFLLEVBQUUsS0FBdUMsRUFBRSxFQUFFLFNBQVMsRUFBRSxFQUFFLEVBQUU7SUFDL0QsTUFBTSxLQUFLLEdBQUcsU0FBUyxDQUFDLE9BQU8sQ0FBQyxpQ0FBeUIsQ0FBQyxLQUFLLENBQUMsQ0FBQTtJQUVoRSxJQUFJLEtBQUssQ0FBQyxVQUFVLENBQUMsTUFBTSxLQUFLLElBQUksR0FBRyxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUMvRCxNQUFNLElBQUksbUJBQVcsQ0FDbkIsbUJBQVcsQ0FBQyxLQUFLLENBQUMsWUFBWSxFQUM5QiwyQ0FBMkMsQ0FDNUMsQ0FBQTtJQUNILENBQUM7SUFFRCxNQUFNLEVBQ0osSUFBSSxFQUFFLENBQUMsSUFBSSxDQUFDLEVBQ2IsR0FBRyxNQUFNLEtBQUssQ0FBQyxLQUFLLENBQUM7UUFDcEIsTUFBTSxFQUFFLE1BQU07UUFDZCxNQUFNLEVBQUUsQ0FBQyxJQUFJLEVBQUUsa0JBQWtCLENBQUM7UUFDbEMsT0FBTyxFQUFFLEVBQUUsRUFBRSxFQUFFLEtBQUssQ0FBQyxPQUFPLEVBQUU7S0FDL0IsQ0FBQyxDQUFBO0lBRUYsTUFBTSxDQUFDLEVBQUUsSUFBSSxFQUFFLGNBQWMsRUFBRSxFQUFFLEVBQUUsSUFBSSxFQUFFLHFCQUFxQixFQUFFLENBQUMsR0FDL0QsTUFBTSxJQUFBLGtCQUFVLEVBQUM7UUFDZixLQUFLLENBQUMsS0FBSyxDQUFDO1lBQ1YsTUFBTSxFQUFFLHdCQUFpQixDQUFDLFVBQVU7WUFDcEMsTUFBTSxFQUFFLENBQUMsV0FBVyxFQUFFLFlBQVksQ0FBQztZQUNuQyxPQUFPLEVBQUU7Z0JBQ1AsVUFBVSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDO2FBQ3REO1NBQ0YsQ0FBQztRQUNGLEtBQUssQ0FBQyxLQUFLLENBQUM7WUFDVixNQUFNLEVBQUUsZ0NBQXdCLENBQUMsVUFBVTtZQUMzQyxNQUFNLEVBQUUsQ0FBQyxXQUFXLEVBQUUsb0JBQW9CLENBQUM7WUFDM0MsT0FBTyxFQUFFO2dCQUNQLGtCQUFrQixFQUFFLEtBQUssQ0FBQyxVQUFVO2FBQ3JDO1NBQ0YsQ0FBQztLQUNILENBQUMsQ0FBQTtJQUVKLE1BQU0sT0FBTyxHQUFHLElBQUksR0FBRyxDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFBO0lBRWpFLEtBQUssTUFBTSxvQkFBb0IsSUFBSSxxQkFBcUIsRUFBRSxDQUFDO1FBQ3pELElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLG9CQUFvQixDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUM7WUFDakQsTUFBTSxJQUFJLG1CQUFXLENBQ25CLG1CQUFXLENBQUMsS0FBSyxDQUFDLFlBQVksRUFDOUIsNEJBQTRCLG9CQUFvQixDQUFDLGtCQUFrQiw2Q0FBNkMsQ0FDakgsQ0FBQTtRQUNILENBQUM7SUFDSCxDQUFDO0lBRUQsT0FBTyxJQUFJLDRCQUFZLENBQUM7UUFDdEIsY0FBYztRQUNkLHFCQUFxQjtLQUN0QixDQUFDLENBQUE7QUFDSixDQUFDLENBQ0YsQ0FBQSJ9