"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.POST = exports.GET = void 0;
const utils_1 = require("@medusajs/framework/utils");
const core_flows_1 = require("@medusajs/medusa/core-flows");
const framework_1 = require("@mercurjs/framework");
/**
 * @oas [get] /vendor/inventory-items/{id}/location-levels
 * operationId: "VendorGetItemInventoryLevel"
 * summary: "Get InventoryLevels of specified InventoryItem "
 * description: "Retrieves inventory levels of the InventoryItem"
 * x-authenticated: true
 * parameters:
 *   - in: path
 *     name: id
 *     required: true
 *     description: The ID of the InventoryItem.
 *     schema:
 *       type: string
 * responses:
 *   "200":
 *     description: Ok
 * tags:
 *   - Vendor Inventory Items
 * security:
 *   - api_token: []
 *   - cookie_auth: []
 */
const GET = async (req, res) => {
    const query = req.scope.resolve(utils_1.ContainerRegistrationKeys.QUERY);
    const { data: location_levels } = await query.graph({
        entity: 'inventory_level',
        fields: req.queryConfig.fields,
        filters: {
            inventory_item_id: req.params.id
        }
    });
    res.json({
        location_levels
    });
};
exports.GET = GET;
/**
 * @oas [post] /vendor/inventory-items/{id}/location-levels
 * operationId: "VendorCreateInventoryLevel"
 * summary: "Create inventory level"
 * description: "Creates inventory level of the InventoryItem in the specified location"
 * x-authenticated: true
 * parameters:
 *   - in: path
 *     name: id
 *     required: true
 *     description: The ID of the InventoryItem.
 *     schema:
 *       type: string
 * requestBody:
 *   content:
 *     application/json:
 *       schema:
 *         $ref: "#/components/schemas/VendorCreateInventoryLevel"
 * responses:
 *   "201":
 *     description: Ok
 * tags:
 *   - Vendor Inventory Items
 * security:
 *   - api_token: []
 *   - cookie_auth: []
 */
const POST = async (req, res) => {
    const query = req.scope.resolve(utils_1.ContainerRegistrationKeys.QUERY);
    const { id } = req.params;
    const { result } = await (0, core_flows_1.createInventoryLevelsWorkflow)(req.scope).run({
        input: {
            inventory_levels: [
                {
                    ...req.validatedBody,
                    inventory_item_id: id
                }
            ]
        }
    });
    const eventBus = req.scope.resolve(utils_1.Modules.EVENT_BUS);
    await eventBus.emit({
        name: framework_1.IntermediateEvents.INVENTORY_ITEM_CHANGED,
        data: { id }
    });
    const { data: [location_level] } = await query.graph({
        entity: 'inventory_level',
        fields: req.queryConfig.fields,
        filters: {
            inventory_item_id: result[0].id
        }
    });
    res.status(201).json({ location_level });
};
exports.POST = POST;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvYXBpL3ZlbmRvci9pbnZlbnRvcnktaXRlbXMvW2lkXS9sb2NhdGlvbi1sZXZlbHMvcm91dGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQ0EscURBQThFO0FBQzlFLDREQUEyRTtBQUUzRSxtREFBd0Q7QUFJeEQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQXFCRztBQUNJLE1BQU0sR0FBRyxHQUFHLEtBQUssRUFDdEIsR0FBK0IsRUFDL0IsR0FBbUIsRUFDbkIsRUFBRTtJQUNGLE1BQU0sS0FBSyxHQUFHLEdBQUcsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLGlDQUF5QixDQUFDLEtBQUssQ0FBQyxDQUFBO0lBRWhFLE1BQU0sRUFBRSxJQUFJLEVBQUUsZUFBZSxFQUFFLEdBQUcsTUFBTSxLQUFLLENBQUMsS0FBSyxDQUFDO1FBQ2xELE1BQU0sRUFBRSxpQkFBaUI7UUFDekIsTUFBTSxFQUFFLEdBQUcsQ0FBQyxXQUFXLENBQUMsTUFBTTtRQUM5QixPQUFPLEVBQUU7WUFDUCxpQkFBaUIsRUFBRSxHQUFHLENBQUMsTUFBTSxDQUFDLEVBQUU7U0FDakM7S0FDRixDQUFDLENBQUE7SUFFRixHQUFHLENBQUMsSUFBSSxDQUFDO1FBQ1AsZUFBZTtLQUNoQixDQUFDLENBQUE7QUFDSixDQUFDLENBQUE7QUFqQlksUUFBQSxHQUFHLE9BaUJmO0FBRUQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBMEJHO0FBQ0ksTUFBTSxJQUFJLEdBQUcsS0FBSyxFQUN2QixHQUF1RSxFQUN2RSxHQUFtQixFQUNuQixFQUFFO0lBQ0YsTUFBTSxLQUFLLEdBQUcsR0FBRyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsaUNBQXlCLENBQUMsS0FBSyxDQUFDLENBQUE7SUFDaEUsTUFBTSxFQUFFLEVBQUUsRUFBRSxHQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUE7SUFFekIsTUFBTSxFQUFFLE1BQU0sRUFBRSxHQUFHLE1BQU0sSUFBQSwwQ0FBNkIsRUFBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDO1FBQ3BFLEtBQUssRUFBRTtZQUNMLGdCQUFnQixFQUFFO2dCQUNoQjtvQkFDRSxHQUFHLEdBQUcsQ0FBQyxhQUFhO29CQUNwQixpQkFBaUIsRUFBRSxFQUFFO2lCQUN0QjthQUNGO1NBQ0Y7S0FDRixDQUFDLENBQUE7SUFFRixNQUFNLFFBQVEsR0FBRyxHQUFHLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxlQUFPLENBQUMsU0FBUyxDQUFDLENBQUE7SUFDckQsTUFBTSxRQUFRLENBQUMsSUFBSSxDQUFDO1FBQ2xCLElBQUksRUFBRSw4QkFBa0IsQ0FBQyxzQkFBc0I7UUFDL0MsSUFBSSxFQUFFLEVBQUUsRUFBRSxFQUFFO0tBQ2IsQ0FBQyxDQUFBO0lBRUYsTUFBTSxFQUNKLElBQUksRUFBRSxDQUFDLGNBQWMsQ0FBQyxFQUN2QixHQUFHLE1BQU0sS0FBSyxDQUFDLEtBQUssQ0FBQztRQUNwQixNQUFNLEVBQUUsaUJBQWlCO1FBQ3pCLE1BQU0sRUFBRSxHQUFHLENBQUMsV0FBVyxDQUFDLE1BQU07UUFDOUIsT0FBTyxFQUFFO1lBQ1AsaUJBQWlCLEVBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUU7U0FDaEM7S0FDRixDQUFDLENBQUE7SUFDRixHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLGNBQWMsRUFBRSxDQUFDLENBQUE7QUFDMUMsQ0FBQyxDQUFBO0FBbENZLFFBQUEsSUFBSSxRQWtDaEIifQ==