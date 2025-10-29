"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.prepareConfirmInventoryInput = void 0;
const utils_1 = require("@medusajs/framework/utils");
const prepareConfirmInventoryInput = (data) => {
    const productVariantInventoryItems = new Map();
    const allVariants = new Map();
    let hasSalesChannelStockLocation = false;
    let hasManagedInventory = false;
    const salesChannelId = data.input.sales_channel_id;
    for (const updateItem of data.input.itemsToUpdate ?? []) {
        const item = data.input.items.find((item) => item.variant_id === updateItem.data.variant_id);
        if (item && updateItem.data.quantity) {
            item.quantity = updateItem.data.quantity;
        }
    }
    (0, utils_1.deepFlatMap)(data.input, 'variants.inventory_items.inventory.location_levels.stock_locations.sales_channels', ({ variants, inventory_items, stock_locations, sales_channels }) => {
        if (!variants) {
            return;
        }
        if (!hasSalesChannelStockLocation &&
            sales_channels?.id === salesChannelId) {
            hasSalesChannelStockLocation = true;
        }
        if (inventory_items) {
            const inventoryItemId = inventory_items.inventory_item_id;
            if (!productVariantInventoryItems.has(inventoryItemId)) {
                productVariantInventoryItems.set(inventoryItemId, {
                    variant_id: inventory_items.variant_id,
                    inventory_item_id: inventoryItemId,
                    required_quantity: inventory_items.required_quantity,
                    stock_location_ids: []
                });
            }
            if (stock_locations) {
                productVariantInventoryItems
                    .get(inventoryItemId)
                    .stock_location_ids.push(stock_locations.id);
            }
        }
        if (!allVariants.has(variants.id)) {
            if (!hasManagedInventory && variants.manage_inventory) {
                hasManagedInventory = true;
            }
            allVariants.set(variants.id, {
                id: variants.id,
                manage_inventory: variants.manage_inventory,
                allow_backorder: variants.allow_backorder
            });
        }
    });
    if (!hasManagedInventory) {
        return { items: [] };
    }
    if (salesChannelId && !hasSalesChannelStockLocation) {
        throw new utils_1.MedusaError(utils_1.MedusaError.Types.INVALID_DATA, `Sales channel ${salesChannelId} is not associated with any stock location.`);
    }
    const items = formatInventoryInput({
        product_variant_inventory_items: Array.from(productVariantInventoryItems.values()),
        items: data.input.items,
        variants: Array.from(allVariants.values())
    });
    return { items };
};
exports.prepareConfirmInventoryInput = prepareConfirmInventoryInput;
const formatInventoryInput = ({ product_variant_inventory_items, items, variants }) => {
    if (!product_variant_inventory_items.length) {
        return [];
    }
    const variantsMap = new Map(variants.map((v) => [v.id, v]));
    const itemsToConfirm = [];
    items.forEach((item) => {
        const variant = variantsMap.get(item.variant_id);
        if (!variant?.manage_inventory) {
            return;
        }
        const variantInventoryItems = product_variant_inventory_items.filter((i) => i.variant_id === item.variant_id);
        if (!variantInventoryItems.length) {
            throw new utils_1.MedusaError(utils_1.MedusaError.Types.INVALID_DATA, `Variant ${item.variant_id} does not have any inventory items associated with it.`);
        }
        variantInventoryItems.forEach((variantInventoryItem) => itemsToConfirm.push({
            id: item.id,
            inventory_item_id: variantInventoryItem.inventory_item_id,
            required_quantity: variantInventoryItem.required_quantity,
            allow_backorder: !!variant.allow_backorder,
            quantity: item.quantity,
            location_ids: variantInventoryItem.stock_location_ids
        }));
    });
    return itemsToConfirm;
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJlcGFyZS1jb25maXJtLWludmVudG9yeS1pbnB1dC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy93b3JrZmxvd3MvY2FydC91dGlscy9wcmVwYXJlLWNvbmZpcm0taW52ZW50b3J5LWlucHV0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQU1BLHFEQUFvRTtBQThCN0QsTUFBTSw0QkFBNEIsR0FBRyxDQUFDLElBRTVDLEVBQUUsRUFBRTtJQUNILE1BQU0sNEJBQTRCLEdBQUcsSUFBSSxHQUFHLEVBQWUsQ0FBQTtJQUMzRCxNQUFNLFdBQVcsR0FBRyxJQUFJLEdBQUcsRUFBZSxDQUFBO0lBQzFDLElBQUksNEJBQTRCLEdBQUcsS0FBSyxDQUFBO0lBQ3hDLElBQUksbUJBQW1CLEdBQUcsS0FBSyxDQUFBO0lBRS9CLE1BQU0sY0FBYyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsZ0JBQWdCLENBQUE7SUFFbEQsS0FBSyxNQUFNLFVBQVUsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLGFBQWEsSUFBSSxFQUFFLEVBQUUsQ0FBQztRQUN4RCxNQUFNLElBQUksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQ2hDLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBVSxLQUFLLFVBQVUsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUN6RCxDQUFBO1FBQ0QsSUFBSSxJQUFJLElBQUksVUFBVSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztZQUNyQyxJQUFJLENBQUMsUUFBUSxHQUFHLFVBQVUsQ0FBQyxJQUFJLENBQUMsUUFBUyxDQUFBO1FBQzNDLENBQUM7SUFDSCxDQUFDO0lBRUQsSUFBQSxtQkFBVyxFQUNULElBQUksQ0FBQyxLQUFLLEVBQ1YsbUZBQW1GLEVBQ25GLENBQUMsRUFBRSxRQUFRLEVBQUUsZUFBZSxFQUFFLGVBQWUsRUFBRSxjQUFjLEVBQUUs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