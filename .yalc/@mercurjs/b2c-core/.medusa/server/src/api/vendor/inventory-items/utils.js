"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateOwnership = validateOwnership;
exports.prepareBatchInventoryLevelDeletePayload = prepareBatchInventoryLevelDeletePayload;
const utils_1 = require("@medusajs/framework/utils");
const seller_inventory_item_1 = __importDefault(require("../../../links/seller-inventory-item"));
const seller_stock_location_1 = __importDefault(require("../../../links/seller-stock-location"));
async function validateOwnership(container, seller_id, body) {
    const query = container.resolve(utils_1.ContainerRegistrationKeys.QUERY);
    let inventory_item_ids = [];
    let location_ids = [];
    if (body.create) {
        inventory_item_ids.concat(body.create.map((v) => v.inventory_item_id));
        location_ids.concat(body.create.map((v) => v.location_id));
    }
    if (body.update) {
        inventory_item_ids.concat(body.update.map((v) => v.inventory_item_id));
        location_ids.concat(body.update.map((v) => v.location_id));
    }
    if (body.delete) {
        const { data: levels } = await query.graph({
            entity: 'inventory_level',
            fields: ['inventory_item_id', 'location_id'],
            filters: {
                id: body.delete
            }
        });
        inventory_item_ids.concat(levels.map((l) => l.inventory_item_id));
        location_ids.concat(levels.map((l) => l.location_id));
    }
    inventory_item_ids = [...new Set(inventory_item_ids)];
    location_ids = [...new Set(location_ids)];
    const { data: items } = await query.graph({
        entity: seller_inventory_item_1.default.entryPoint,
        fields: ['id'],
        filters: {
            seller_id,
            inventory_item_id: inventory_item_ids
        }
    });
    const { data: locations } = await query.graph({
        entity: seller_stock_location_1.default.entryPoint,
        fields: ['id'],
        filters: {
            seller_id,
            stock_location_id: location_ids
        }
    });
    if (locations.length !== location_ids.length ||
        items.length !== inventory_item_ids.length) {
        throw new utils_1.MedusaError(utils_1.MedusaError.Types.NOT_ALLOWED, 'Some of the entities do not belong to the current seller!');
    }
}
async function prepareBatchInventoryLevelDeletePayload(container, inventory_item_id, delete_ids) {
    const query = container.resolve(utils_1.ContainerRegistrationKeys.QUERY);
    let ilev = delete_ids?.filter((id) => id.startsWith('ilev_')) || [];
    const sloc = delete_ids?.filter((id) => id.startsWith('sloc_')) || [];
    if (sloc.length) {
        const { data: levels } = await query.graph({
            entity: 'inventory_level',
            fields: ['id'],
            filters: {
                inventory_item_id,
                location_id: sloc
            }
        });
        ilev = ilev.concat(levels.map((level) => level.id));
    }
    return ilev;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvYXBpL3ZlbmRvci9pbnZlbnRvcnktaXRlbXMvdXRpbHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFxQkEsOENBK0RDO0FBRUQsMEZBd0JDO0FBN0dELHFEQUdrQztBQUVsQyxpR0FBc0U7QUFDdEUsaUdBQXNFO0FBYy9ELEtBQUssVUFBVSxpQkFBaUIsQ0FDckMsU0FBMEIsRUFDMUIsU0FBaUIsRUFDakIsSUFBaUI7SUFFakIsTUFBTSxLQUFLLEdBQUcsU0FBUyxDQUFDLE9BQU8sQ0FBQyxpQ0FBeUIsQ0FBQyxLQUFLLENBQUMsQ0FBQTtJQUVoRSxJQUFJLGtCQUFrQixHQUFhLEVBQUUsQ0FBQTtJQUNyQyxJQUFJLFlBQVksR0FBYSxFQUFFLENBQUE7SUFFL0IsSUFBSSxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDaEIsa0JBQWtCLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxDQUFBO1FBQ3RFLFlBQVksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFBO0lBQzVELENBQUM7SUFFRCxJQUFJLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUNoQixrQkFBa0IsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLENBQUE7UUFDdEUsWUFBWSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUE7SUFDNUQsQ0FBQztJQUVELElBQUksSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQ2hCLE1BQU0sRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLEdBQUcsTUFBTSxLQUFLLENBQUMsS0FBSyxDQUFDO1lBQ3pDLE1BQU0sRUFBRSxpQkFBaUI7WUFDekIsTUFBTSxFQUFFLENBQUMsbUJBQW1CLEVBQUUsYUFBYSxDQUFDO1lBQzVDLE9BQU8sRUFBRTtnQkFDUCxFQUFFLEVBQUUsSUFBSSxDQUFDLE1BQU07YUFDaEI7U0FDRixDQUFDLENBQUE7UUFFRixrQkFBa0IsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLGlCQUFpQixDQUFDLENBQUMsQ0FBQTtRQUNqRSxZQUFZLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFBO0lBQ3ZELENBQUM7SUFFRCxrQkFBa0IsR0FBRyxDQUFDLEdBQUcsSUFBSSxHQUFHLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxDQUFBO0lBQ3JELFlBQVksR0FBRyxDQUFDLEdBQUcsSUFBSSxHQUFHLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQTtJQUV6QyxNQUFNLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxHQUFHLE1BQU0sS0FBSyxDQUFDLEtBQUssQ0FBQztRQUN4QyxNQUFNLEVBQUUsK0JBQW1CLENBQUMsVUFBVTtRQUN0QyxNQUFNLEVBQUUsQ0FBQyxJQUFJLENBQUM7UUFDZCxPQUFPLEVBQUU7WUFDUCxTQUFTO1lBQ1QsaUJBQWlCLEVBQUUsa0JBQWtCO1NBQ3RDO0tBQ0YsQ0FBQyxDQUFBO0lBRUYsTUFBTSxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUUsR0FBRyxNQUFNLEtBQUssQ0FBQyxLQUFLLENBQUM7UUFDNUMsTUFBTSxFQUFFLCtCQUFtQixDQUFDLFVBQVU7UUFDdEMsTUFBTSxFQUFFLENBQUMsSUFBSSxDQUFDO1FBQ2QsT0FBTyxFQUFFO1lBQ1AsU0FBUztZQUNULGlCQUFpQixFQUFFLFlBQVk7U0FDaEM7S0FDRixDQUFDLENBQUE7SUFFRixJQUNFLFNBQVMsQ0FBQyxNQUFNLEtBQUssWUFBWSxDQUFDLE1BQU07UUFDeEMsS0FBSyxDQUFDLE1BQU0sS0FBSyxrQkFBa0IsQ0FBQyxNQUFNLEVBQzFDLENBQUM7UUFDRCxNQUFNLElBQUksbUJBQVcsQ0FDbkIsbUJBQVcsQ0FBQyxLQUFLLENBQUMsV0FBVyxFQUM3QiwyREFBMkQsQ0FDNUQsQ0FBQTtJQUNILENBQUM7QUFDSCxDQUFDO0FBRU0sS0FBSyxVQUFVLHVDQUF1QyxDQUMzRCxTQUEwQixFQUMxQixpQkFBeUIsRUFDekIsVUFBcUI7SUFFckIsTUFBTSxLQUFLLEdBQUcsU0FBUyxDQUFDLE9BQU8sQ0FBQyxpQ0FBeUIsQ0FBQyxLQUFLLENBQUMsQ0FBQTtJQUVoRSxJQUFJLElBQUksR0FBRyxVQUFVLEVBQUUsTUFBTSxDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFBO0lBQ25FLE1BQU0sSUFBSSxHQUFHLFVBQVUsRUFBRSxNQUFNLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUE7SUFFckUsSUFBSSxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDaEIsTUFBTSxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsR0FBRyxNQUFNLEtBQUssQ0FBQyxLQUFLLENBQUM7WUFDekMsTUFBTSxFQUFFLGlCQUFpQjtZQUN6QixNQUFNLEVBQUUsQ0FBQyxJQUFJLENBQUM7WUFDZCxPQUFPLEVBQUU7Z0JBQ1AsaUJBQWlCO2dCQUNqQixXQUFXLEVBQUUsSUFBSTthQUNsQjtTQUNGLENBQUMsQ0FBQTtRQUVGLElBQUksR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFBO0lBQ3JELENBQUM7SUFFRCxPQUFPLElBQUksQ0FBQTtBQUNiLENBQUMifQ==