"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.POST = void 0;
const core_flows_1 = require("@medusajs/core-flows");
const utils_1 = require("@medusajs/framework/utils");
const framework_1 = require("@mercurjs/framework");
const utils_2 = require("../../../../../../shared/infra/http/utils");
const utils_3 = require("../../../utils");
/**
 * @oas [post] /vendor/inventory-items/{id}/location-levels/batch
 * operationId: "VendorBatchInventoryItemLocationsLevels"
 * summary: "Update inventory item levels"
 * description: "Batch updates InventoryItem levels"
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
 *         $ref: "#/components/schemas/VendorBatchInventoryItemLocationsLevel"
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
    const { id } = req.params;
    const batchInput = {
        input: {
            delete: await (0, utils_3.prepareBatchInventoryLevelDeletePayload)(req.scope, id, req.validatedBody.delete),
            create: req.validatedBody.create?.map((c) => ({
                ...c,
                inventory_item_id: id
            })) ?? [],
            update: req.validatedBody.update?.map((u) => ({
                ...u,
                inventory_item_id: id
            })) ?? [],
            force: req.validatedBody.force ?? false
        }
    };
    const seller = await (0, utils_2.fetchSellerByAuthActorId)(req.auth_context.actor_id, req.scope);
    await (0, utils_3.validateOwnership)(req.scope, seller.id, batchInput.input);
    const output = await core_flows_1.batchInventoryItemLevelsWorkflow.run({
        container: req.scope,
        ...batchInput
    });
    const eventBus = req.scope.resolve(utils_1.Modules.EVENT_BUS);
    await eventBus.emit({
        name: framework_1.IntermediateEvents.INVENTORY_ITEM_CHANGED,
        data: { id }
    });
    res.status(200).json({
        created: output.result.created,
        updated: output.result.updated,
        deleted: output.result.deleted
    });
};
exports.POST = POST;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvYXBpL3ZlbmRvci9pbnZlbnRvcnktaXRlbXMvW2lkXS9sb2NhdGlvbi1sZXZlbHMvYmF0Y2gvcm91dGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEscURBQXVFO0FBS3ZFLHFEQUFtRDtBQUVuRCxtREFBd0Q7QUFFeEQscUVBQW9GO0FBQ3BGLDBDQUd1QjtBQUd2Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0EwQkc7QUFDSSxNQUFNLElBQUksR0FBRyxLQUFLLEVBQ3ZCLEdBQTJFLEVBQzNFLEdBQW1CLEVBQ25CLEVBQUU7SUFDRixNQUFNLEVBQUUsRUFBRSxFQUFFLEdBQUcsR0FBRyxDQUFDLE1BQU0sQ0FBQTtJQUV6QixNQUFNLFVBQVUsR0FBRztRQUNqQixLQUFLLEVBQUU7WUFDTCxNQUFNLEVBQUUsTUFBTSxJQUFBLCtDQUF1QyxFQUNuRCxHQUFHLENBQUMsS0FBSyxFQUNULEVBQUUsRUFDRixHQUFHLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FDekI7WUFDRCxNQUFNLEVBQ0osR0FBRyxDQUFDLGFBQWEsQ0FBQyxNQUFNLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO2dCQUNwQyxHQUFHLENBQUM7Z0JBQ0osaUJBQWlCLEVBQUUsRUFBRTthQUN0QixDQUFDLENBQUMsSUFBSSxFQUFFO1lBQ1gsTUFBTSxFQUNKLEdBQUcsQ0FBQyxhQUFhLENBQUMsTUFBTSxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQztnQkFDcEMsR0FBRyxDQUFDO2dCQUNKLGlCQUFpQixFQUFFLEVBQUU7YUFDdEIsQ0FBQyxDQUFDLElBQUksRUFBRTtZQUNYLEtBQUssRUFBRSxHQUFHLENBQUMsYUFBYSxDQUFDLEtBQUssSUFBSSxLQUFLO1NBQ3hDO0tBQ0YsQ0FBQTtJQUVELE1BQU0sTUFBTSxHQUFHLE1BQU0sSUFBQSxnQ0FBd0IsRUFDM0MsR0FBRyxDQUFDLFlBQVksQ0FBQyxRQUFRLEVBQ3pCLEdBQUcsQ0FBQyxLQUFLLENBQ1YsQ0FBQTtJQUNELE1BQU0sSUFBQSx5QkFBaUIsRUFBQyxHQUFHLENBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxFQUFFLEVBQUUsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFBO0lBRS9ELE1BQU0sTUFBTSxHQUFHLE1BQU0sNkNBQWdDLENBQUMsR0FBRyxDQUFDO1FBQ3hELFNBQVMsRUFBRSxHQUFHLENBQUMsS0FBSztRQUNwQixHQUFHLFVBQVU7S0FDZCxDQUFDLENBQUE7SUFFRixNQUFNLFFBQVEsR0FBRyxHQUFHLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxlQUFPLENBQUMsU0FBUyxDQUFDLENBQUE7SUFDckQsTUFBTSxRQUFRLENBQUMsSUFBSSxDQUFDO1FBQ2xCLElBQUksRUFBRSw4QkFBa0IsQ0FBQyxzQkFBc0I7UUFDL0MsSUFBSSxFQUFFLEVBQUUsRUFBRSxFQUFFO0tBQ2IsQ0FBQyxDQUFBO0lBRUYsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUM7UUFDbkIsT0FBTyxFQUFFLE1BQU0sQ0FBQyxNQUFNLENBQUMsT0FBTztRQUM5QixPQUFPLEVBQUUsTUFBTSxDQUFDLE1BQU0sQ0FBQyxPQUFPO1FBQzlCLE9BQU8sRUFBRSxNQUFNLENBQUMsTUFBTSxDQUFDLE9BQU87S0FDL0IsQ0FBQyxDQUFBO0FBQ0osQ0FBQyxDQUFBO0FBakRZLFFBQUEsSUFBSSxRQWlEaEIifQ==