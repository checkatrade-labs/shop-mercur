"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateVendorPriceListPricesStep = void 0;
const utils_1 = require("@medusajs/framework/utils");
const workflows_sdk_1 = require("@medusajs/framework/workflows-sdk");
const seller_product_1 = __importDefault(require("../../../links/seller-product"));
async function validateVariantOwnership(container, seller_id, variantIds) {
    const query = container.resolve(utils_1.ContainerRegistrationKeys.QUERY);
    const { data: products } = await query.graph({
        entity: 'product_variant',
        fields: ['product_id'],
        filters: {
            id: variantIds
        }
    });
    const productIds = [...new Set(products.map((p) => p.product_id))];
    const { data: relations } = await query.graph({
        entity: seller_product_1.default.entryPoint,
        fields: ['id'],
        filters: {
            seller_id: seller_id,
            product_id: productIds
        }
    });
    if (relations.length !== productIds.length) {
        throw new utils_1.MedusaError(utils_1.MedusaError.Types.INVALID_DATA, 'Price lists can be applied only to seller own products!');
    }
}
async function validatePrices(container, priceIds, price_list_id) {
    if (!price_list_id) {
        throw new utils_1.MedusaError(utils_1.MedusaError.Types.INVALID_DATA, 'Update requires price list id!');
    }
    const query = container.resolve(utils_1.ContainerRegistrationKeys.QUERY);
    const { data: [list] } = await query.graph({
        entity: 'price_list',
        fields: ['prices.id'],
        filters: {
            id: price_list_id
        }
    });
    const prices = list.prices.map((p) => p.id);
    for (const price of priceIds) {
        if (!prices.includes(price)) {
            throw new utils_1.MedusaError(utils_1.MedusaError.Types.INVALID_DATA, 'Invalid price id!');
        }
    }
}
exports.validateVendorPriceListPricesStep = (0, workflows_sdk_1.createStep)('validate-vendor-price-list-prices', async (input, { container }) => {
    if (input.create) {
        await validateVariantOwnership(container, input.seller_id, input.create.map((price) => price.variant_id));
    }
    if (input.update) {
        await validatePrices(container, input.update.map((p) => p.id), input.price_list_id);
    }
    return new workflows_sdk_1.StepResponse();
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsaWRhdGUtdmVuZG9yLXByaWNlLWxpc3QtcHJpY2VzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vc3JjL3dvcmtmbG93cy9wcmljZS1saXN0L3N0ZXBzL3ZhbGlkYXRlLXZlbmRvci1wcmljZS1saXN0LXByaWNlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFLQSxxREFHa0M7QUFDbEMscUVBQTRFO0FBRTVFLG1GQUF5RDtBQUV6RCxLQUFLLFVBQVUsd0JBQXdCLENBQ3JDLFNBQTBCLEVBQzFCLFNBQWlCLEVBQ2pCLFVBQW9CO0lBRXBCLE1BQU0sS0FBSyxHQUFHLFNBQVMsQ0FBQyxPQUFPLENBQUMsaUNBQXlCLENBQUMsS0FBSyxDQUFDLENBQUE7SUFDaEUsTUFBTSxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsR0FBRyxNQUFNLEtBQUssQ0FBQyxLQUFLLENBQUM7UUFDM0MsTUFBTSxFQUFFLGlCQUFpQjtRQUN6QixNQUFNLEVBQUUsQ0FBQyxZQUFZLENBQUM7UUFDdEIsT0FBTyxFQUFFO1lBQ1AsRUFBRSxFQUFFLFVBQVU7U0FDZjtLQUNGLENBQUMsQ0FBQTtJQUVGLE1BQU0sVUFBVSxHQUFHLENBQUMsR0FBRyxJQUFJLEdBQUcsQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFBO0lBRWxFLE1BQU0sRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLEdBQUcsTUFBTSxLQUFLLENBQUMsS0FBSyxDQUFDO1FBQzVDLE1BQU0sRUFBRSx3QkFBYSxDQUFDLFVBQVU7UUFDaEMsTUFBTSxFQUFFLENBQUMsSUFBSSxDQUFDO1FBQ2QsT0FBTyxFQUFFO1lBQ1AsU0FBUyxFQUFFLFNBQVM7WUFDcEIsVUFBVSxFQUFFLFVBQVU7U0FDdkI7S0FDRixDQUFDLENBQUE7SUFFRixJQUFJLFNBQVMsQ0FBQyxNQUFNLEtBQUssVUFBVSxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQzNDLE1BQU0sSUFBSSxtQkFBVyxDQUNuQixtQkFBVyxDQUFDLEtBQUssQ0FBQyxZQUFZLEVBQzlCLHlEQUF5RCxDQUMxRCxDQUFBO0lBQ0gsQ0FBQztBQUNILENBQUM7QUFFRCxLQUFLLFVBQVUsY0FBYyxDQUMzQixTQUEwQixFQUMxQixRQUFrQixFQUNsQixhQUFzQjtJQUV0QixJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDbkIsTUFBTSxJQUFJLG1CQUFXLENBQ25CLG1CQUFXLENBQUMsS0FBSyxDQUFDLFlBQVksRUFDOUIsZ0NBQWdDLENBQ2pDLENBQUE7SUFDSCxDQUFDO0lBRUQsTUFBTSxLQUFLLEdBQUcsU0FBUyxDQUFDLE9BQU8sQ0FBQyxpQ0FBeUIsQ0FBQyxLQUFLLENBQUMsQ0FBQTtJQUVoRSxNQUFNLEVBQ0osSUFBSSxFQUFFLENBQUMsSUFBSSxDQUFDLEVBQ2IsR0FBRyxNQUFNLEtBQUssQ0FBQyxLQUFLLENBQUM7UUFDcEIsTUFBTSxFQUFFLFlBQVk7UUFDcEIsTUFBTSxFQUFFLENBQUMsV0FBVyxDQUFDO1FBQ3JCLE9BQU8sRUFBRTtZQUNQLEVBQUUsRUFBRSxhQUFhO1NBQ2xCO0tBQ0YsQ0FBQyxDQUFBO0lBRUYsTUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQWEsQ0FBQTtJQUV2RCxLQUFLLE1BQU0sS0FBSyxJQUFJLFFBQVEsRUFBRSxDQUFDO1FBQzdCLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUM7WUFDNUIsTUFBTSxJQUFJLG1CQUFXLENBQUMsbUJBQVcsQ0FBQyxLQUFLLENBQUMsWUFBWSxFQUFFLG1CQUFtQixDQUFDLENBQUE7UUFDNUUsQ0FBQztJQUNILENBQUM7QUFDSCxDQUFDO0FBRVksUUFBQSxpQ0FBaUMsR0FBRyxJQUFBLDBCQUFVLEVBQ3pELG1DQUFtQyxFQUNuQyxLQUFLLEVBQ0gsS0FLQyxFQUNELEVBQUUsU0FBUyxFQUFFLEVBQ2IsRUFBRTtJQUNGLElBQUksS0FBSyxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQ2pCLE1BQU0sd0JBQXdCLENBQzVCLFNBQVMsRUFDVCxLQUFLLENBQUMsU0FBUyxFQUNmLEtBQUssQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLENBQzlDLENBQUE7SUFDSCxDQUFDO0lBRUQsSUFBSSxLQUFLLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDakIsTUFBTSxjQUFjLENBQ2xCLFNBQVMsRUFDVCxLQUFLLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUM3QixLQUFLLENBQUMsYUFBYSxDQUNwQixDQUFBO0lBQ0gsQ0FBQztJQUVELE9BQU8sSUFBSSw0QkFBWSxFQUFFLENBQUE7QUFDM0IsQ0FBQyxDQUNGLENBQUEifQ==