"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.prepareLineItemData = prepareLineItemData;
exports.prepareAdjustmentsData = prepareAdjustmentsData;
exports.prepareTaxLinesData = prepareTaxLinesData;
const utils_1 = require("@medusajs/framework/utils");
function prepareLineItemData(data) {
    const { item, variant, unitPrice, isTaxInclusive, quantity, metadata, cartId, taxLines, adjustments } = data;
    if (!variant.product) {
        throw new Error('Variant does not have a product');
    }
    let compareAtUnitPrice = data.compareAtUnitPrice;
    if (!(0, utils_1.isDefined)(compareAtUnitPrice) &&
        variant.calculated_price.calculated_price.price_list_type ===
            utils_1.PriceListType.SALE &&
        !utils_1.MathBN.eq(variant.calculated_price.original_amount, variant.calculated_price.calculated_amount)) {
        compareAtUnitPrice = variant.calculated_price.original_amount;
    }
    // Note: If any of the items require shipping, we enable fulfillment
    // unless explicitly set to not require shipping by the item in the request
    const { inventory_items: inventoryItems } = variant;
    const someInventoryRequiresShipping = inventoryItems.length
        ? inventoryItems.some((inventoryItem) => !!inventoryItem.inventory.requires_shipping)
        : true;
    const requiresShipping = (0, utils_1.isDefined)(item?.requires_shipping)
        ? item.requires_shipping
        : someInventoryRequiresShipping;
    const lineItem = {
        quantity,
        title: variant.title ?? item?.title,
        subtitle: variant.product.title ?? item?.subtitle,
        thumbnail: variant.product.thumbnail ?? item?.thumbnail,
        product_id: variant.product.id ?? item?.product_id,
        product_title: variant.product.title ?? item?.product_title,
        product_description: variant.product.description ?? item?.product_description,
        product_subtitle: variant.product.subtitle ?? item?.product_subtitle,
        product_type: variant.product.type?.value ?? item?.product_type ?? null,
        product_type_id: variant.product.type?.id ?? item?.product_type_id ?? null,
        product_collection: variant.product.collection?.title ?? item?.product_collection ?? null,
        product_handle: variant.product.handle ?? item?.product_handle,
        variant_id: variant.id,
        variant_sku: variant.sku ?? item?.variant_sku,
        variant_barcode: variant.barcode ?? item?.variant_barcode,
        variant_title: variant.title ?? item?.variant_title,
        variant_option_values: item?.variant_option_values,
        is_discountable: variant.product.discountable ?? item?.is_discountable,
        requires_shipping: requiresShipping,
        unit_price: unitPrice,
        compare_at_unit_price: compareAtUnitPrice,
        is_tax_inclusive: !!isTaxInclusive,
        metadata
    };
    if (taxLines) {
        lineItem.tax_lines = prepareTaxLinesData(taxLines);
    }
    if (adjustments) {
        lineItem.adjustments = prepareAdjustmentsData(adjustments);
    }
    if (cartId) {
        lineItem.cart_id = cartId;
    }
    return lineItem;
}
function prepareAdjustmentsData(data) {
    return data.map((d) => ({
        code: d.code,
        amount: d.amount,
        description: d.description,
        promotion_id: d.promotion_id,
        provider_id: d.promotion_id
    }));
}
function prepareTaxLinesData(data) {
    return data.map((d) => ({
        description: d.description,
        tax_rate_id: d.tax_rate_id,
        code: d.code,
        rate: d.rate,
        provider_id: d.provider_id
    }));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJlcGFyZS1saW5lLWl0ZW0tZGF0YS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy93b3JrZmxvd3MvY2FydC91dGlscy9wcmVwYXJlLWxpbmUtaXRlbS1kYXRhLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBZ0NBLGtEQTBGQztBQUVELHdEQVFDO0FBRUQsa0RBUUM7QUF0SUQscURBQTRFO0FBd0I1RSxTQUFnQixtQkFBbUIsQ0FBQyxJQUFXO0lBQzdDLE1BQU0sRUFDSixJQUFJLEVBQ0osT0FBTyxFQUNQLFNBQVMsRUFDVCxjQUFjLEVBQ2QsUUFBUSxFQUNSLFFBQVEsRUFDUixNQUFNLEVBQ04sUUFBUSxFQUNSLFdBQVcsRUFDWixHQUFHLElBQUksQ0FBQTtJQUVSLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDckIsTUFBTSxJQUFJLEtBQUssQ0FBQyxpQ0FBaUMsQ0FBQyxDQUFBO0lBQ3BELENBQUM7SUFFRCxJQUFJLGtCQUFrQixHQUFHLElBQUksQ0FBQyxrQkFBa0IsQ0FBQTtJQUVoRCxJQUNFLENBQUMsSUFBQSxpQkFBUyxFQUFDLGtCQUFrQixDQUFDO1FBQzlCLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQyxnQkFBZ0IsQ0FBQyxlQUFlO1lBQ3ZELHFCQUFhLENBQUMsSUFBSTtRQUNwQixDQUFDLGNBQU0sQ0FBQyxFQUFFLENBQ1IsT0FBTyxDQUFDLGdCQUFnQixDQUFDLGVBQWUsRUFDeEMsT0FBTyxDQUFDLGdCQUFnQixDQUFDLGlCQUFpQixDQUMzQyxFQUNELENBQUM7UUFDRCxrQkFBa0IsR0FBRyxPQUFPLENBQUMsZ0JBQWdCLENBQUMsZUFBZSxDQUFBO0lBQy9ELENBQUM7SUFFRCxvRUFBb0U7SUFDcEUsMkVBQTJFO0lBQzNFLE1BQU0sRUFBRSxlQUFlLEVBQUUsY0FBYyxFQUFFLEdBQUcsT0FBTyxDQUFBO0lBQ25ELE1BQU0sNkJBQTZCLEdBQUcsY0FBYyxDQUFDLE1B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