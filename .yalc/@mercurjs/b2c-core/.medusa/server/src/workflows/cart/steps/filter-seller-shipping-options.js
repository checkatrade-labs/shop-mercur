"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.filterSellerShippingOptionsStep = void 0;
const utils_1 = require("@medusajs/framework/utils");
const workflows_sdk_1 = require("@medusajs/framework/workflows-sdk");
const seller_product_1 = __importDefault(require("../../../links/seller-product"));
const seller_shipping_option_1 = __importDefault(require("../../../links/seller-shipping-option"));
exports.filterSellerShippingOptionsStep = (0, workflows_sdk_1.createStep)('filter-seller-shipping-options', async (input, { container }) => {
    const query = container.resolve(utils_1.ContainerRegistrationKeys.QUERY);
    const { data: [cart] } = await query.graph({
        entity: 'cart',
        fields: ['items.product_id', 'shipping_methods.shipping_option_id'],
        filters: {
            id: input.cart_id
        }
    });
    const { data: sellersInCart } = await query.graph({
        entity: seller_product_1.default.entryPoint,
        fields: ['seller_id'],
        filters: {
            product_id: cart.items.map((i) => i.product_id)
        }
    });
    const existingShippingOptions = cart.shipping_methods.map((sm) => sm.shipping_option_id);
    const { data: sellersAlreadyCovered } = await query.graph({
        entity: seller_shipping_option_1.default.entryPoint,
        fields: ['seller_id'],
        filters: {
            shipping_option_id: existingShippingOptions
        }
    });
    const sellersToFindShippingOptions = (0, utils_1.arrayDifference)([...new Set(sellersInCart.map((s) => s.seller_id))], [...new Set(sellersAlreadyCovered.map((s) => s.seller_id))]);
    const { data: sellerShippingOptions } = await query.graph({
        entity: seller_shipping_option_1.default.entryPoint,
        fields: ['shipping_option_id', 'seller.name', 'seller.id'],
        filters: {
            seller_id: sellersToFindShippingOptions
        }
    });
    const applicableShippingOptions = sellerShippingOptions.map((so) => so.shipping_option_id);
    const optionsAvailable = input.shipping_options
        .filter((option) => applicableShippingOptions.includes(option.id))
        .map((option) => {
        const relation = sellerShippingOptions.find((o) => o.shipping_option_id === option.id);
        return {
            ...option,
            seller_name: relation.seller.name,
            seller_id: relation.seller.id
        };
    });
    return new workflows_sdk_1.StepResponse(optionsAvailable);
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsdGVyLXNlbGxlci1zaGlwcGluZy1vcHRpb25zLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vc3JjL3dvcmtmbG93cy9jYXJ0L3N0ZXBzL2ZpbHRlci1zZWxsZXItc2hpcHBpbmctb3B0aW9ucy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFDQSxxREFHa0M7QUFDbEMscUVBQTRFO0FBRTVFLG1GQUF5RDtBQUN6RCxtR0FBd0U7QUFFM0QsUUFBQSwrQkFBK0IsR0FBRyxJQUFBLDBCQUFVLEVBQ3ZELGdDQUFnQyxFQUNoQyxLQUFLLEVBQ0gsS0FBaUUsRUFDakUsRUFBRSxTQUFTLEVBQUUsRUFDYixFQUFFO0lBQ0YsTUFBTSxLQUFLLEdBQUcsU0FBUyxDQUFDLE9BQU8sQ0FBQyxpQ0FBeUIsQ0FBQyxLQUFLLENBQUMsQ0FBQTtJQUVoRSxNQUFNLEVBQ0osSUFBSSxFQUFFLENBQUMsSUFBSSxDQUFDLEVBQ2IsR0FBRyxNQUFNLEtBQUssQ0FBQyxLQUFLLENBQUM7UUFDcEIsTUFBTSxFQUFFLE1BQU07UUFDZCxNQUFNLEVBQUUsQ0FBQyxrQkFBa0IsRUFBRSxxQ0FBcUMsQ0FBQztRQUNuRSxPQUFPLEVBQUU7WUFDUCxFQUFFLEVBQUUsS0FBSyxDQUFDLE9BQU87U0FDbEI7S0FDRixDQUFDLENBQUE7SUFFRixNQUFNLEVBQUUsSUFBSSxFQUFFLGFBQWEsRUFBRSxHQUFHLE1BQU0sS0FBSyxDQUFDLEtBQUssQ0FBQztRQUNoRCxNQUFNLEVBQUUsd0JBQWEsQ0FBQyxVQUFVO1FBQ2hDLE1BQU0sRUFBRSxDQUFDLFdBQVcsQ0FBQztRQUNyQixPQUFPLEVBQUU7WUFDUCxVQUFVLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUM7U0FDaEQ7S0FDRixDQUFDLENBQUE7SUFFRixNQUFNLHVCQUF1QixHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxHQUFHLENBQ3ZELENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsa0JBQWtCLENBQzlCLENBQUE7SUFFRCxNQUFNLEVBQUUsSUFBSSxFQUFFLHFCQUFxQixFQUFFLEdBQUcsTUFBTSxLQUFLLENBQUMsS0FBSyxDQUFDO1FBQ3hELE1BQU0sRUFBRSxnQ0FBb0IsQ0FBQyxVQUFVO1FBQ3ZDLE1BQU0sRUFBRSxDQUFDLFdBQVcsQ0FBQztRQUNyQixPQUFPLEVBQUU7WUFDUCxrQkFBa0IsRUFBRSx1QkFBdUI7U0FDNUM7S0FDRixDQUFDLENBQUE7SUFFRixNQUFNLDRCQUE0QixHQUFHLElBQUEsdUJBQWUsRUFDbEQsQ0FBQyxHQUFHLElBQUksR0FBRyxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLEVBQ25ELENBQUMsR0FBRyxJQUFJLEdBQUcsQ0FBQyxxQkFBcUIsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQzVELENBQUE7SUFFRCxNQUFNLEVBQUUsSUFBSSxFQUFFLHFCQUFxQixFQUFFLEdBQUcsTUFBTSxLQUFLLENBQUMsS0FBSyxDQUFDO1FBQ3hELE1BQU0sRUFBRSxnQ0FBb0IsQ0FBQyxVQUFVO1FBQ3ZDLE1BQU0sRUFBRSxDQUFDLG9CQUFvQixFQUFFLGFBQWEsRUFBRSxXQUFXLENBQUM7UUFDMUQsT0FBTyxFQUFFO1lBQ1AsU0FBUyxFQUFFLDRCQUE0QjtTQUN4QztLQUNGLENBQUMsQ0FBQTtJQUVGLE1BQU0seUJBQXlCLEdBQUcscUJBQXFCLENBQUMsR0FBRyxDQUN6RCxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLGtCQUFrQixDQUM5QixDQUFBO0lBRUQsTUFBTSxnQkFBZ0IsR0FBRyxLQUFLLENBQUMsZ0JBQWdCO1NBQzVDLE1BQU0sQ0FBQyxDQUFDLE1BQU0sRUFBRSxFQUFFLENBQUMseUJBQXlCLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsQ0FBQztTQUNqRSxHQUFHLENBQUMsQ0FBQyxNQUFNLEVBQUUsRUFBRTtRQUNkLE1BQU0sUUFBUSxHQUFHLHFCQUFxQixDQUFDLElBQUksQ0FDekMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxrQkFBa0IsS0FBSyxNQUFNLENBQUMsRUFBRSxDQUMxQyxDQUFBO1FBQ0QsT0FBTztZQUNMLEdBQUcsTUFBTTtZQUNULFdBQVcsRUFBRSxRQUFRLENBQUMsTUFBTSxDQUFDLElBQUk7WUFDakMsU0FBUyxFQUFFLFFBQVEsQ0FBQyxNQUFNLENBQUMsRUFBRTtTQUM5QixDQUFBO0lBQ0gsQ0FBQyxDQUFDLENBQUE7SUFDSixPQUFPLElBQUksNEJBQVksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFBO0FBQzNDLENBQUMsQ0FDRixDQUFBIn0=