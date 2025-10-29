"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.POST = exports.GET = void 0;
const utils_1 = require("@medusajs/framework/utils");
const core_flows_1 = require("@medusajs/medusa/core-flows");
const framework_1 = require("@mercurjs/framework");
/**
 * @oas [get] /vendor/inventory-items/{id}
 * operationId: "VendorGetInventoryItem"
 * summary: "Get inventory item"
 * description: "Retrieves InventoryItem of specified id"
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
    const { data: [inventory_item] } = await query.graph({
        entity: 'inventory_item',
        fields: req.queryConfig.fields,
        filters: {
            id: req.params.id
        }
    });
    res.json({
        inventory_item
    });
};
exports.GET = GET;
/**
 * @oas [post] /vendor/inventory-items/{id}
 * operationId: "VendorUpdateInventoryItem"
 * summary: "Update inventory item"
 * description: "Updates InventoryItem of specified id"
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
 *         $ref: "#/components/schemas/VendorUpdateInventoryItem"
 * responses:
 *   "200":
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
    await (0, core_flows_1.updateInventoryItemsWorkflow)(req.scope).run({
        input: {
            updates: [{ id, ...req.validatedBody }]
        }
    });
    const eventBus = req.scope.resolve(utils_1.Modules.EVENT_BUS);
    await eventBus.emit({
        name: framework_1.IntermediateEvents.INVENTORY_ITEM_CHANGED,
        data: { id }
    });
    const { data: [inventory_item] } = await query.graph({
        entity: 'inventory_item',
        fields: req.queryConfig.fields,
        filters: {
            id
        }
    });
    res.json({
        inventory_item
    });
};
exports.POST = POST;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvYXBpL3ZlbmRvci9pbnZlbnRvcnktaXRlbXMvW2lkXS9yb3V0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFDQSxxREFBOEU7QUFDOUUsNERBQTBFO0FBRTFFLG1EQUF3RDtBQUl4RDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBcUJHO0FBQ0ksTUFBTSxHQUFHLEdBQUcsS0FBSyxFQUN0QixHQUErQixFQUMvQixHQUFtQixFQUNuQixFQUFFO0lBQ0YsTUFBTSxLQUFLLEdBQUcsR0FBRyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsaUNBQXlCLENBQUMsS0FBSyxDQUFDLENBQUE7SUFFaEUsTUFBTSxFQUNKLElBQUksRUFBRSxDQUFDLGNBQWMsQ0FBQyxFQUN2QixHQUFHLE1BQU0sS0FBSyxDQUFDLEtBQUssQ0FBQztRQUNwQixNQUFNLEVBQUUsZ0JBQWdCO1FBQ3hCLE1BQU0sRUFBRSxHQUFHLENBQUMsV0FBVyxDQUFDLE1BQU07UUFDOUIsT0FBTyxFQUFFO1lBQ1AsRUFBRSxFQUFFLEdBQUcsQ0FBQyxNQUFNLENBQUMsRUFBRTtTQUNsQjtLQUNGLENBQUMsQ0FBQTtJQUVGLEdBQUcsQ0FBQyxJQUFJLENBQUM7UUFDUCxjQUFjO0tBQ2YsQ0FBQyxDQUFBO0FBQ0osQ0FBQyxDQUFBO0FBbkJZLFFBQUEsR0FBRyxPQW1CZjtBQUVEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQTBCRztBQUNJLE1BQU0sSUFBSSxHQUFHLEtBQUssRUFDdkIsR0FBOEQsRUFDOUQsR0FBbUIsRUFDbkIsRUFBRTtJQUNGLE1BQU0sS0FBSyxHQUFHLEdBQUcsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLGlDQUF5QixDQUFDLEtBQUssQ0FBQyxDQUFBO0lBQ2hFLE1BQU0sRUFBRSxFQUFFLEVBQUUsR0FBRyxHQUFHLENBQUMsTUFBTSxDQUFBO0lBRXpCLE1BQU0sSUFBQSx5Q0FBNEIsRUFBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDO1FBQ2hELEtBQUssRUFBRTtZQUNMLE9BQU8sRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLEdBQUcsR0FBRyxDQUFDLGFBQWEsRUFBRSxDQUFDO1NBQ3hDO0tBQ0YsQ0FBQyxDQUFBO0lBRUYsTUFBTSxRQUFRLEdBQUcsR0FBRyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsZUFBTyxDQUFDLFNBQVMsQ0FBQyxDQUFBO0lBQ3JELE1BQU0sUUFBUSxDQUFDLElBQUksQ0FBQztRQUNsQixJQUFJLEVBQUUsOEJBQWtCLENBQUMsc0JBQXNCO1FBQy9DLElBQUksRUFBRSxFQUFFLEVBQUUsRUFBRTtLQUNiLENBQUMsQ0FBQTtJQUVGLE1BQU0sRUFDSixJQUFJLEVBQUUsQ0FBQyxjQUFjLENBQUMsRUFDdkIsR0FBRyxNQUFNLEtBQUssQ0FBQyxLQUFLLENBQUM7UUFDcEIsTUFBTSxFQUFFLGdCQUFnQjtRQUN4QixNQUFNLEVBQUUsR0FBRyxDQUFDLFdBQVcsQ0FBQyxNQUFNO1FBQzlCLE9BQU8sRUFBRTtZQUNQLEVBQUU7U0FDSDtLQUNGLENBQUMsQ0FBQTtJQUVGLEdBQUcsQ0FBQyxJQUFJLENBQUM7UUFDUCxjQUFjO0tBQ2YsQ0FBQyxDQUFBO0FBQ0osQ0FBQyxDQUFBO0FBaENZLFFBQUEsSUFBSSxRQWdDaEIifQ==