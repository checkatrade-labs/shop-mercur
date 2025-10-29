"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyVendorTargetPromotionRulesStep = void 0;
const utils_1 = require("@medusajs/framework/utils");
const workflows_sdk_1 = require("@medusajs/framework/workflows-sdk");
const seller_product_1 = __importDefault(require("../../../links/seller-product"));
exports.verifyVendorTargetPromotionRulesStep = (0, workflows_sdk_1.createStep)('verify-vendor-target-promotion-rules', async (input, { container }) => {
    const query = container.resolve(utils_1.ContainerRegistrationKeys.QUERY);
    const nonProductAttributes = input.rules
        ?.map((p) => p.attribute)
        .filter((attr) => attr !== 'items.product.id') || [];
    if (nonProductAttributes.length) {
        throw new utils_1.MedusaError(utils_1.MedusaError.Types.INVALID_DATA, 'Invalid attribute!');
    }
    const products = input.rules?.map((p) => p.values).flat() || [];
    const { data: relations } = await query.graph({
        entity: seller_product_1.default.entryPoint,
        fields: ['id'],
        filters: {
            seller_id: input.seller_id,
            product_id: products
        }
    });
    if (relations.length !== products.length) {
        throw new utils_1.MedusaError(utils_1.MedusaError.Types.INVALID_DATA, 'Vendor Promotion can be applied only to seller own products!');
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmVyaWZ5LXZlbmRvci10YXJnZXQtcHJvbW90aW9uLXJ1bGVzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vc3JjL3dvcmtmbG93cy9wcm9tb3Rpb25zL3N0ZXBzL3ZlcmlmeS12ZW5kb3ItdGFyZ2V0LXByb21vdGlvbi1ydWxlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFDQSxxREFHa0M7QUFDbEMscUVBQThEO0FBRTlELG1GQUF5RDtBQUU1QyxRQUFBLG9DQUFvQyxHQUFHLElBQUEsMEJBQVUsRUFDNUQsc0NBQXNDLEVBQ3RDLEtBQUssRUFDSCxLQUE4RCxFQUM5RCxFQUFFLFNBQVMsRUFBRSxFQUNiLEVBQUU7SUFDRixNQUFNLEtBQUssR0FBRyxTQUFTLENBQUMsT0FBTyxDQUFDLGlDQUF5QixDQUFDLEtBQUssQ0FBQyxDQUFBO0lBRWhFLE1BQU0sb0JBQW9CLEdBQ3hCLEtBQUssQ0FBQyxLQUFLO1FBQ1QsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7U0FDeEIsTUFBTSxDQUFDLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxJQUFJLEtBQUssa0JBQWtCLENBQUMsSUFBSSxFQUFFLENBQUE7SUFFeEQsSUFBSSxvQkFBb0IsQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUNoQyxNQUFNLElBQUksbUJBQVcsQ0FDbkIsbUJBQVcsQ0FBQyxLQUFLLENBQUMsWUFBWSxFQUM5QixvQkFBb0IsQ0FDckIsQ0FBQTtJQUNILENBQUM7SUFFRCxNQUFNLFFBQVEsR0FBRyxLQUFLLENBQUMsS0FBSyxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsQ0FBQTtJQUUvRCxNQUFNLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSxHQUFHLE1BQU0sS0FBSyxDQUFDLEtBQUssQ0FBQztRQUM1QyxNQUFNLEVBQUUsd0JBQWEsQ0FBQyxVQUFVO1FBQ2hDLE1BQU0sRUFBRSxDQUFDLElBQUksQ0FBQztRQUNkLE9BQU8sRUFBRTtZQUNQLFNBQVMsRUFBRSxLQUFLLENBQUMsU0FBUztZQUMxQixVQUFVLEVBQUUsUUFBUTtTQUNyQjtLQUNGLENBQUMsQ0FBQTtJQUVGLElBQUksU0FBUyxDQUFDLE1BQU0sS0FBSyxRQUFRLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDekMsTUFBTSxJQUFJLG1CQUFXLENBQ25CLG1CQUFXLENBQUMsS0FBSyxDQUFDLFlBQVksRUFDOUIsOERBQThELENBQy9ELENBQUE7SUFDSCxDQUFDO0FBQ0gsQ0FBQyxDQUNGLENBQUEifQ==