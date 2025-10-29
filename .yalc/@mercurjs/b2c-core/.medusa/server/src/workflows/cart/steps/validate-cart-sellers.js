"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateCartSellersStep = void 0;
const utils_1 = require("@medusajs/framework/utils");
const workflows_sdk_1 = require("@medusajs/framework/workflows-sdk");
const framework_1 = require("@mercurjs/framework");
const seller_product_1 = __importDefault(require("../../../links/seller-product"));
exports.validateCartSellersStep = (0, workflows_sdk_1.createStep)('validate-cart-sellers', async (input, { container }) => {
    const query = container.resolve(utils_1.ContainerRegistrationKeys.QUERY);
    if (!input.line_items?.length) {
        return;
    }
    const productIds = input.line_items.map((item) => item.product_id);
    const { data: sellerProducts } = await query.graph({
        entity: seller_product_1.default.entryPoint,
        fields: ['seller.store_status'],
        filters: {
            product_id: productIds
        }
    });
    const hasInactiveSellers = sellerProducts.some((sp) => sp.seller.store_status !== framework_1.StoreStatus.ACTIVE);
    if (hasInactiveSellers) {
        throw new utils_1.MedusaError(utils_1.MedusaError.Types.UNEXPECTED_STATE, 'Some products in the cart belong to inactive sellers');
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsaWRhdGUtY2FydC1zZWxsZXJzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vc3JjL3dvcmtmbG93cy9jYXJ0L3N0ZXBzL3ZhbGlkYXRlLWNhcnQtc2VsbGVycy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFDQSxxREFHa0M7QUFDbEMscUVBQThEO0FBRTlELG1EQUFpRDtBQUVqRCxtRkFBeUQ7QUFJNUMsUUFBQSx1QkFBdUIsR0FBRyxJQUFBLDBCQUFVLEVBQy9DLHVCQUF1QixFQUN2QixLQUFLLEVBQUUsS0FBOEMsRUFBRSxFQUFFLFNBQVMsRUFBRSxFQUFFLEVBQUU7SUFDdEUsTUFBTSxLQUFLLEdBQUcsU0FBUyxDQUFDLE9BQU8sQ0FBQyxpQ0FBeUIsQ0FBQyxLQUFLLENBQUMsQ0FBQTtJQUVoRSxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsRUFBRSxNQUFNLEVBQUUsQ0FBQztRQUM5QixPQUFNO0lBQ1IsQ0FBQztJQUVELE1BQU0sVUFBVSxHQUFHLEtBQUssQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUE7SUFFbEUsTUFBTSxFQUFFLElBQUksRUFBRSxjQUFjLEVBQUUsR0FBRyxNQUFNLEtBQUssQ0FBQyxLQUFLLENBQUM7UUFDakQsTUFBTSxFQUFFLHdCQUFhLENBQUMsVUFBVTtRQUNoQyxNQUFNLEVBQUUsQ0FBQyxxQkFBcUIsQ0FBQztRQUMvQixPQUFPLEVBQUU7WUFDUCxVQUFVLEVBQUUsVUFBVTtTQUN2QjtLQUNGLENBQUMsQ0FBQTtJQUVGLE1BQU0sa0JBQWtCLEdBQUcsY0FBYyxDQUFDLElBQUksQ0FDNUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsWUFBWSxLQUFLLHVCQUFXLENBQUMsTUFBTSxDQUN0RCxDQUFBO0lBRUQsSUFBSSxrQkFBa0IsRUFBRSxDQUFDO1FBQ3ZCLE1BQU0sSUFBSSxtQkFBVyxDQUNuQixtQkFBVyxDQUFDLEtBQUssQ0FBQyxnQkFBZ0IsRUFDbEMsc0RBQXNELENBQ3ZELENBQUE7SUFDSCxDQUFDO0FBQ0gsQ0FBQyxDQUNGLENBQUEifQ==