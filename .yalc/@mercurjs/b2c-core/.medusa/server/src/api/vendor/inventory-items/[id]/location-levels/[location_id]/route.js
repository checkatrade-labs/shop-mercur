"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GET = exports.POST = void 0;
const utils_1 = require("@medusajs/framework/utils");
const core_flows_1 = require("@medusajs/medusa/core-flows");
const framework_1 = require("@mercurjs/framework");
/**
 * @oas [post] /vendor/inventory-items/{id}/location-levels/{location_id}
 * operationId: "VendorUpdateInventoryLevel"
 * summary: "Update inventory level"
 * description: "Updates inventory level of the InventoryItem in the specified location"
 * x-authenticated: true
 * parameters:
 *   - in: path
 *     name: id
 *     required: true
 *     description: The ID of the InventoryItem.
 *     schema:
 *       type: string
 *   - in: path
 *     name: location_id
 *     required: true
 *     description: The ID of the Stock Location.
 *     schema:
 *       type: string
 * requestBody:
 *   content:
 *     application/json:
 *       schema:
 *         $ref: "#/components/schemas/VendorUpdateInventoryLevel"
 * responses:
 *   "202":
 *     description: Accepted
 * tags:
 *   - Vendor Inventory Items
 * security:
 *   - api_token: []
 *   - cookie_auth: []
 */
const POST = async (req, res) => {
    const query = req.scope.resolve(utils_1.ContainerRegistrationKeys.QUERY);
    await core_flows_1.updateInventoryLevelsWorkflow.run({
        input: {
            updates: [
                {
                    location_id: req.params.location_id,
                    inventory_item_id: req.params.id,
                    ...req.validatedBody
                }
            ]
        },
        container: req.scope
    });
    const eventBus = req.scope.resolve(utils_1.Modules.EVENT_BUS);
    await eventBus.emit({
        name: framework_1.IntermediateEvents.INVENTORY_ITEM_CHANGED,
        data: { id: req.params.id }
    });
    const { data: [location_level] } = await query.graph({
        entity: 'inventory_level',
        fields: req.queryConfig.fields,
        filters: {
            inventory_item_id: req.params.id,
            location_id: req.params.location_id
        }
    });
    res.json({
        location_level
    });
};
exports.POST = POST;
/**
 * @oas [get] /vendor/inventory-items/{id}/location-levels/{location_id}
 * operationId: "VendorGetInventoryLevel"
 * summary: "Get inventory level"
 * description: "Retrieves inventory level of the InventoryItem in the specified location"
 * x-authenticated: true
 * parameters:
 *   - in: path
 *     name: id
 *     required: true
 *     description: The ID of the InventoryItem.
 *     schema:
 *       type: string
 *   - in: path
 *     name: location_id
 *     required: true
 *     description: The ID of the Stock Location.
 *     schema:
 *       type: string
 * responses:
 *   "200":
 *     description: Inventory level
 * tags:
 *   - Vendor Inventory Items
 * security:
 *   - api_token: []
 *   - cookie_auth: []
 */
const GET = async (req, res) => {
    const query = req.scope.resolve(utils_1.ContainerRegistrationKeys.QUERY);
    const { data: [location_level] } = await query.graph({
        entity: 'inventory_level',
        fields: req.queryConfig.fields,
        filters: {
            inventory_item_id: req.params.id,
            location_id: req.params.location_id
        }
    });
    res.json({
        location_level
    });
};
exports.GET = GET;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvYXBpL3ZlbmRvci9pbnZlbnRvcnktaXRlbXMvW2lkXS9sb2NhdGlvbi1sZXZlbHMvW2xvY2F0aW9uX2lkXS9yb3V0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFDQSxxREFBOEU7QUFDOUUsNERBQTJFO0FBRTNFLG1EQUF3RDtBQUl4RDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0FnQ0c7QUFDSSxNQUFNLElBQUksR0FBRyxLQUFLLEVBQ3ZCLEdBQStELEVBQy9ELEdBQW1CLEVBQ25CLEVBQUU7SUFDRixNQUFNLEtBQUssR0FBRyxHQUFHLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxpQ0FBeUIsQ0FBQyxLQUFLLENBQUMsQ0FBQTtJQUNoRSxNQUFNLDBDQUE2QixDQUFDLEdBQUcsQ0FBQztRQUN0QyxLQUFLLEVBQUU7WUFDTCxPQUFPLEVBQUU7Z0JBQ1A7b0JBQ0UsV0FBVyxFQUFFLEdBQUcsQ0FBQyxNQUFNLENBQUMsV0FBVztvQkFDbkMsaUJBQWlCLEVBQUUsR0FBRyxDQUFDLE1BQU0sQ0FBQyxFQUFFO29CQUNoQyxHQUFHLEdBQUcsQ0FBQyxhQUFhO2lCQUNyQjthQUNGO1NBQ0Y7UUFDRCxTQUFTLEVBQUUsR0FBRyxDQUFDLEtBQUs7S0FDckIsQ0FBQyxDQUFBO0lBRUYsTUFBTSxRQUFRLEdBQUcsR0FBRyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsZUFBTyxDQUFDLFNBQVMsQ0FBQyxDQUFBO0lBQ3JELE1BQU0sUUFBUSxDQUFDLElBQUksQ0FBQztRQUNsQixJQUFJLEVBQUUsOEJBQWtCLENBQUMsc0JBQXNCO1FBQy9DLElBQUksRUFBRSxFQUFFLEVBQUUsRUFBRSxHQUFHLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFBRTtLQUM1QixDQUFDLENBQUE7SUFFRixNQUFNLEVBQ0osSUFBSSxFQUFFLENBQUMsY0FBYyxDQUFDLEVBQ3ZCLEdBQUcsTUFBTSxLQUFLLENBQUMsS0FBSyxDQUFDO1FBQ3BCLE1BQU0sRUFBRSxpQkFBaUI7UUFDekIsTUFBTSxFQUFFLEdBQUcsQ0FBQyxXQUFXLENBQUMsTUFBTTtRQUM5QixPQUFPLEVBQUU7WUFDUCxpQkFBaUIsRUFBRSxHQUFHLENBQUMsTUFBTSxDQUFDLEVBQUU7WUFDaEMsV0FBVyxFQUFFLEdBQUcsQ0FBQyxNQUFNLENBQUMsV0FBVztTQUNwQztLQUNGLENBQUMsQ0FBQTtJQUVGLEdBQUcsQ0FBQyxJQUFJLENBQUM7UUFDUCxjQUFjO0tBQ2YsQ0FBQyxDQUFBO0FBQ0osQ0FBQyxDQUFBO0FBdENZLFFBQUEsSUFBSSxRQXNDaEI7QUFFRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBMkJHO0FBQ0ksTUFBTSxHQUFHLEdBQUcsS0FBSyxFQUN0QixHQUErQixFQUMvQixHQUFtQixFQUNuQixFQUFFO0lBQ0YsTUFBTSxLQUFLLEdBQUcsR0FBRyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsaUNBQXlCLENBQUMsS0FBSyxDQUFDLENBQUE7SUFFaEUsTUFBTSxFQUNKLElBQUksRUFBRSxDQUFDLGNBQWMsQ0FBQyxFQUN2QixHQUFHLE1BQU0sS0FBSyxDQUFDLEtBQUssQ0FBQztRQUNwQixNQUFNLEVBQUUsaUJBQWlCO1FBQ3pCLE1BQU0sRUFBRSxHQUFHLENBQUMsV0FBVyxDQUFDLE1BQU07UUFDOUIsT0FBTyxFQUFFO1lBQ1AsaUJBQWlCLEVBQUUsR0FBRyxDQUFDLE1BQU0sQ0FBQyxFQUFFO1lBQ2hDLFdBQVcsRUFBRSxHQUFHLENBQUMsTUFBTSxDQUFDLFdBQVc7U0FDcEM7S0FDRixDQUFDLENBQUE7SUFFRixHQUFHLENBQUMsSUFBSSxDQUFDO1FBQ1AsY0FBYztLQUNmLENBQUMsQ0FBQTtBQUNKLENBQUMsQ0FBQTtBQXBCWSxRQUFBLEdBQUcsT0FvQmYifQ==