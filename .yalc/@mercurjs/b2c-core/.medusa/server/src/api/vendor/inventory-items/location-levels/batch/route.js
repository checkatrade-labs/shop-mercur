"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.POST = void 0;
const core_flows_1 = require("@medusajs/core-flows");
const utils_1 = require("@medusajs/framework/utils");
const framework_1 = require("@mercurjs/framework");
const utils_2 = require("../../../../../shared/infra/http/utils");
const utils_3 = require("../../utils");
/**
 * @oas [post] /vendor/inventory-items/location-levels/batch
 * operationId: "VendorBatchInventoryItemLevels"
 * summary: "Update inventory item levels"
 * description: "Batch updates InventoryItem levels"
 * x-authenticated: true
 * requestBody:
 *   content:
 *     application/json:
 *       schema:
 *         $ref: "#/components/schemas/VendorBatchInventoryItemLevels"
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
    const eventBus = req.scope.resolve(utils_1.Modules.EVENT_BUS);
    const seller = await (0, utils_2.fetchSellerByAuthActorId)(req.auth_context.actor_id, req.scope);
    await (0, utils_3.validateOwnership)(req.scope, seller.id, req.validatedBody);
    const output = await core_flows_1.batchInventoryItemLevelsWorkflow.run({
        container: req.scope,
        input: req.validatedBody
    });
    await eventBus.emit({
        name: framework_1.IntermediateEvents.INVENTORY_ITEM_CHANGED,
        data: {
            id: output.result.created
                .map((item) => item.id)
                .concat(output.result.deleted)
        }
    });
    res.json({
        created: output.result.created,
        updated: output.result.updated,
        deleted: output.result.deleted
    });
};
exports.POST = POST;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvYXBpL3ZlbmRvci9pbnZlbnRvcnktaXRlbXMvbG9jYXRpb24tbGV2ZWxzL2JhdGNoL3JvdXRlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLHFEQUF1RTtBQUV2RSxxREFBbUQ7QUFFbkQsbURBQXdEO0FBRXhELGtFQUFpRjtBQUNqRix1Q0FBK0M7QUFHL0M7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0FtQkc7QUFDSSxNQUFNLElBQUksR0FBRyxLQUFLLEVBQ3ZCLEdBQW1FLEVBQ25FLEdBQW1CLEVBQ25CLEVBQUU7SUFDRixNQUFNLFFBQVEsR0FBRyxHQUFHLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxlQUFPLENBQUMsU0FBUyxDQUFDLENBQUE7SUFDckQsTUFBTSxNQUFNLEdBQUcsTUFBTSxJQUFBLGdDQUF3QixFQUMzQyxHQUFHLENBQUMsWUFBWSxDQUFDLFFBQVEsRUFDekIsR0FBRyxDQUFDLEtBQUssQ0FDVixDQUFBO0lBQ0QsTUFBTSxJQUFBLHlCQUFpQixFQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUUsTUFBTSxDQUFDLEVBQUUsRUFBRSxHQUFHLENBQUMsYUFBYSxDQUFDLENBQUE7SUFFaEUsTUFBTSxNQUFNLEdBQUcsTUFBTSw2Q0FBZ0MsQ0FBQyxHQUFHLENBQUM7UUFDeEQsU0FBUyxFQUFFLEdBQUcsQ0FBQyxLQUFLO1FBQ3BCLEtBQUssRUFBRSxHQUFHLENBQUMsYUFBYTtLQUN6QixDQUFDLENBQUE7SUFFRixNQUFNLFFBQVEsQ0FBQyxJQUFJLENBQUM7UUFDbEIsSUFBSSxFQUFFLDhCQUFrQixDQUFDLHNCQUFzQjtRQUMvQyxJQUFJLEVBQUU7WUFDSixFQUFFLEVBQUUsTUFBTSxDQUFDLE1BQU0sQ0FBQyxPQUFPO2lCQUN0QixHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUM7aUJBQ3RCLE1BQU0sQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQztTQUNqQztLQUNGLENBQUMsQ0FBQTtJQUVGLEdBQUcsQ0FBQyxJQUFJLENBQUM7UUFDUCxPQUFPLEVBQUUsTUFBTSxDQUFDLE1BQU0sQ0FBQyxPQUFPO1FBQzlCLE9BQU8sRUFBRSxNQUFNLENBQUMsTUFBTSxDQUFDLE9BQU87UUFDOUIsT0FBTyxFQUFFLE1BQU0sQ0FBQyxNQUFNLENBQUMsT0FBTztLQUMvQixDQUFDLENBQUE7QUFDSixDQUFDLENBQUE7QUE5QlksUUFBQSxJQUFJLFFBOEJoQiJ9