"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("@medusajs/framework/utils");
const core_flows_1 = require("@medusajs/medusa/core-flows");
const seller_1 = require("../../modules/seller");
const getVariantInventoryItemIds = async (variantId, container) => {
    const query = container.resolve(utils_1.ContainerRegistrationKeys.QUERY);
    const items = await query.graph({
        entity: "product_variant",
        fields: ["inventory_items.inventory_item_id"],
        filters: {
            id: variantId,
        },
    });
    return items.data
        .map((item) => item.inventory_items.map((ii) => ii.inventory_item_id))
        .flat(2);
};
core_flows_1.createProductVariantsWorkflow.hooks.productVariantsCreated(async ({ product_variants, additional_data }, { container }) => {
    if (!additional_data?.seller_id) {
        return;
    }
    const remoteLinks = [];
    for (const variant of product_variants) {
        if (variant.manage_inventory) {
            const inventoryItemIds = await getVariantInventoryItemIds(variant.id, container);
            inventoryItemIds.forEach((inventory_item_id) => {
                remoteLinks.push({
                    [seller_1.SELLER_MODULE]: {
                        seller_id: additional_data.seller_id,
                    },
                    [utils_1.Modules.INVENTORY]: {
                        inventory_item_id,
                    },
                });
            });
        }
    }
    const remoteLink = container.resolve(utils_1.ContainerRegistrationKeys.LINK);
    await remoteLink.create(remoteLinks);
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC12YXJpYW50LWNyZWF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvd29ya2Zsb3dzL2hvb2tzL3Byb2R1Y3QtdmFyaWFudC1jcmVhdGVkLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBRUEscURBQStFO0FBQy9FLDREQUE0RTtBQUU1RSxpREFBcUQ7QUFFckQsTUFBTSwwQkFBMEIsR0FBRyxLQUFLLEVBQ3RDLFNBQWlCLEVBQ2pCLFNBQTBCLEVBQzFCLEVBQUU7SUFDRixNQUFNLEtBQUssR0FBRyxTQUFTLENBQUMsT0FBTyxDQUFDLGlDQUF5QixDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ2pFLE1BQU0sS0FBSyxHQUFHLE1BQU0sS0FBSyxDQUFDLEtBQUssQ0FBQztRQUM5QixNQUFNLEVBQUUsaUJBQWlCO1FBQ3pCLE1BQU0sRUFBRSxDQUFDLG1DQUFtQyxDQUFDO1FBQzdDLE9BQU8sRUFBRTtZQUNQLEVBQUUsRUFBRSxTQUFTO1NBQ2Q7S0FDRixDQUFDLENBQUM7SUFFSCxPQUFPLEtBQUssQ0FBQyxJQUFJO1NBQ2QsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLGlCQUFpQixDQUFDLENBQUM7U0FDckUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ2IsQ0FBQyxDQUFDO0FBRUYsMENBQTZCLENBQUMsS0FBSyxDQUFDLHNCQUFzQixDQUN4RCxLQUFLLEVBQUUsRUFBRSxnQkFBZ0IsRUFBRSxlQUFlLEVBQUUsRUFBRSxFQUFFLFNBQVMsRUFBRSxFQUFFLEVBQUU7SUFDN0QsSUFBSSxDQUFDLGVBQWUsRUFBRSxTQUFTLEVBQUUsQ0FBQztRQUNoQyxPQUFPO0lBQ1QsQ0FBQztJQUVELE1BQU0sV0FBVyxHQUFxQixFQUFFLENBQUM7SUFFekMsS0FBSyxNQUFNLE9BQU8sSUFBSSxnQkFBZ0IsRUFBRSxDQUFDO1FBQ3ZDLElBQUksT0FBTyxDQUFDLGdCQUFnQixFQUFFLENBQUM7WUFDN0IsTUFBTSxnQkFBZ0IsR0FBRyxNQUFNLDBCQUEwQixDQUN2RCxPQUFPLENBQUMsRUFBRSxFQUNWLFNBQVMsQ0FDVixDQUFDO1lBRUYsZ0JBQWdCLENBQUMsT0FBTyxDQUFDLENBQUMsaUJBQWlCLEVBQUUsRUFBRTtnQkFDN0MsV0FBVyxDQUFDLElBQUksQ0FBQztvQkFDZixDQUFDLHNCQUFhLENBQUMsRUFBRTt3QkFDZixTQUFTLEVBQUUsZUFBZSxDQUFDLFNBQVM7cUJBQ3JDO29CQUNELENBQUMsZUFBTyxDQUFDLFNBQVMsQ0FBQyxFQUFFO3dCQUNuQixpQkFBaUI7cUJBQ2xCO2lCQUNGLENBQUMsQ0FBQztZQUNMLENBQUMsQ0FBQyxDQUFDO1FBQ0wsQ0FBQztJQUNILENBQUM7SUFDRCxNQUFNLFVBQVUsR0FBRyxTQUFTLENBQUMsT0FBTyxDQUFDLGlDQUF5QixDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3JFLE1BQU0sVUFBVSxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsQ0FBQztBQUN2QyxDQUFDLENBQ0YsQ0FBQyJ9