"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSellerProductsStep = exports.exportProductFields = void 0;
const utils_1 = require("@medusajs/framework/utils");
const workflows_sdk_1 = require("@medusajs/framework/workflows-sdk");
const seller_product_1 = __importDefault(require("../../../links/seller-product"));
exports.exportProductFields = [
    "id",
    "title",
    "subtitle",
    "status",
    "external_id",
    "description",
    "handle",
    "is_giftcard",
    "discountable",
    "thumbnail",
    "collection_id",
    "type_id",
    "weight",
    "length",
    "height",
    "width",
    "hs_code",
    "origin_country",
    "mid_code",
    "material",
    "metadata",
    "type",
    "collection",
    "options.*",
    "options.values",
    "tags.*",
    "images.*",
    "variants.*",
    "variants.prices",
    "variants.prices.price_rules.value",
    "variants.prices.price_rules.attribute",
    "variants.options.*",
];
exports.getSellerProductsStep = (0, workflows_sdk_1.createStep)("get-seller-products", async (seller_id, { container }) => {
    const query = container.resolve(utils_1.ContainerRegistrationKeys.QUERY);
    const { data: products } = await query.graph({
        entity: seller_product_1.default.entryPoint,
        fields: exports.exportProductFields.map((field) => `product.${field}`),
        filters: {
            seller_id,
        },
    });
    return new workflows_sdk_1.StepResponse(products.map((rel) => rel.product));
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2V0LXNlbGxlci1wcm9kdWN0cy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy93b3JrZmxvd3Mvc2VsbGVyL3N0ZXBzL2dldC1zZWxsZXItcHJvZHVjdHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEscURBQXNFO0FBQ3RFLHFFQUE2RTtBQUU3RSxtRkFBMEQ7QUFFN0MsUUFBQSxtQkFBbUIsR0FBRztJQUNqQyxJQUFJO0lBQ0osT0FBTztJQUNQLFVBQVU7SUFDVixRQUFRO0lBQ1IsYUFBYTtJQUNiLGFBQWE7SUFDYixRQUFRO0lBQ1IsYUFBYTtJQUNiLGNBQWM7SUFDZCxXQUFXO0lBQ1gsZUFBZTtJQUNmLFNBQVM7SUFDVCxRQUFRO0lBQ1IsUUFBUTtJQUNSLFFBQVE7SUFDUixPQUFPO0lBQ1AsU0FBUztJQUNULGdCQUFnQjtJQUNoQixVQUFVO0lBQ1YsVUFBVTtJQUNWLFVBQVU7SUFDVixNQUFNO0lBQ04sWUFBWTtJQUNaLFdBQVc7SUFDWCxnQkFBZ0I7SUFDaEIsUUFBUTtJQUNSLFVBQVU7SUFDVixZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLG1DQUFtQztJQUNuQyx1Q0FBdUM7SUFDdkMsb0JBQW9CO0NBQ3JCLENBQUM7QUFFVyxRQUFBLHFCQUFxQixHQUFHLElBQUEsMEJBQVUsRUFDN0MscUJBQXFCLEVBQ3JCLEtBQUssRUFBRSxTQUFpQixFQUFFLEVBQUUsU0FBUyxFQUFFLEVBQUUsRUFBRTtJQUN6QyxNQUFNLEtBQUssR0FBRyxTQUFTLENBQUMsT0FBTyxDQUFDLGlDQUF5QixDQUFDLEtBQUssQ0FBQyxDQUFDO0lBRWpFLE1BQU0sRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLEdBQUcsTUFBTSxLQUFLLENBQUMsS0FBSyxDQUFDO1FBQzNDLE1BQU0sRUFBRSx3QkFBYSxDQUFDLFVBQVU7UUFDaEMsTUFBTSxFQUFFLDJCQUFtQixDQUFDLEdBQUcsQ0FBQyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsV0FBVyxLQUFLLEVBQUUsQ0FBQztRQUM5RCxPQUFPLEVBQUU7WUFDUCxTQUFTO1NBQ1Y7S0FDRixDQUFDLENBQUM7SUFFSCxPQUFPLElBQUksNEJBQVksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztBQUM5RCxDQUFDLENBQ0YsQ0FBQyJ9