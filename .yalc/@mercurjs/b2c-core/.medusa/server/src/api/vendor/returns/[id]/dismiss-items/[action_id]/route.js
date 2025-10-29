"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DELETE = exports.POST = void 0;
const core_flows_1 = require("@medusajs/core-flows");
const utils_1 = require("@medusajs/framework/utils");
/**
 * @oas [post] /vendor/returns/{id}/dismiss-items/{action_id}
 * operationId: "VendorUpdateDismissReturnItemById"
 * summary: "Update Damaged Item of Return"
 * description: "Update a damaged item, whose quantity is to be dismissed, in the return by the ID of the  item's `RECEIVE_DAMAGED_RETURN_ITEM` action."
 * x-authenticated: true
 * parameters:
 *   - in: path
 *     name: id
 *     required: true
 *     description: The ID of the return.
 *     schema:
 *       type: string
 *   - name: action_id
 *     in: path
 *     description: The ID of the damaged item's `RECEIVE_DAMAGED_RETURN_ITEM` action.
 *     required: true
 *     schema:
 *       type: string
 *   - name: fields
 *     in: query
 *     schema:
 *       type: string
 *     description: Comma-separated fields that should be included in the returned data.
 *     required: false
 * requestBody:
 *   content:
 *     application/json:
 *       schema:
 *         $ref: "#/components/schemas/VendorReturnsDismissItemsAction"
 * responses:
 *   "200":
 *     description: OK
 *     content:
 *       application/json:
 *         schema:
 *           type: object
 *           properties:
 *             return:
 *               $ref: "#/components/schemas/VendorReturn"
 * tags:
 *   - Vendor Returns
 * security:
 *   - api_token: []
 *   - cookie_auth: []
 */
const POST = async (req, res) => {
    const { id, action_id } = req.params;
    const query = req.scope.resolve(utils_1.ContainerRegistrationKeys.QUERY);
    await core_flows_1.updateReceiveItemReturnRequestWorkflow.run({
        container: req.scope,
        input: {
            data: { ...req.validatedBody },
            return_id: id,
            action_id
        }
    });
    const { data: [result] } = await query.graph({
        entity: 'return',
        fields: req.queryConfig.fields,
        filters: {
            id: req.params.id
        }
    });
    res.json({
        return: result
    });
};
exports.POST = POST;
/**
 * @oas [delete] /vendor/returns/{id}/dismiss-items/{action_id}
 * operationId: "VendorDismissReturnItemById"
 * summary: "Remove Damaged Item from Return"
 * description: "Remove a damaged item, whose quantity is to be dismissed, in the return by the ID of the  item's `RECEIVE_DAMAGED_RETURN_ITEM` action."
 * x-authenticated: true
 * parameters:
 *   - in: path
 *     name: id
 *     required: true
 *     description: The ID of the return.
 *     schema:
 *       type: string
 *   - name: action_id
 *     in: path
 *     description: The ID of the damaged item's `RECEIVE_DAMAGED_RETURN_ITEM` action.
 *     required: true
 *     schema:
 *       type: string
 *   - name: fields
 *     in: query
 *     schema:
 *       type: string
 *     description: Comma-separated fields that should be included in the returned data.
 *     required: false
 * responses:
 *   "200":
 *     description: OK
 *     content:
 *       application/json:
 *         schema:
 *           type: object
 *           properties:
 *             return:
 *               $ref: "#/components/schemas/VendorReturn"
 * tags:
 *   - Vendor Returns
 * security:
 *   - api_token: []
 *   - cookie_auth: []
 */
const DELETE = async (req, res) => {
    const query = req.scope.resolve(utils_1.ContainerRegistrationKeys.QUERY);
    const { id, action_id } = req.params;
    await core_flows_1.removeItemReturnActionWorkflow.run({
        container: req.scope,
        input: {
            return_id: id,
            action_id
        }
    });
    const { data: [result] } = await query.graph({
        entity: 'return',
        fields: req.queryConfig.fields,
        filters: {
            id: req.params.id
        }
    });
    res.json({
        return: result
    });
};
exports.DELETE = DELETE;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvYXBpL3ZlbmRvci9yZXR1cm5zL1tpZF0vZGlzbWlzcy1pdGVtcy9bYWN0aW9uX2lkXS9yb3V0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxxREFHNkI7QUFLN0IscURBQXFFO0FBSXJFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0E2Q0c7QUFDSSxNQUFNLElBQUksR0FBRyxLQUFLLEVBQ3ZCLEdBQTBFLEVBQzFFLEdBQW1CLEVBQ25CLEVBQUU7SUFDRixNQUFNLEVBQUUsRUFBRSxFQUFFLFNBQVMsRUFBRSxHQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUE7SUFFcEMsTUFBTSxLQUFLLEdBQUcsR0FBRyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsaUNBQXlCLENBQUMsS0FBSyxDQUFDLENBQUE7SUFFaEUsTUFBTSxtREFBc0MsQ0FBQyxHQUFHLENBQUM7UUFDL0MsU0FBUyxFQUFFLEdBQUcsQ0FBQyxLQUFLO1FBQ3BCLEtBQUssRUFBRTtZQUNMLElBQUksRUFBRSxFQUFFLEdBQUcsR0FBRyxDQUFDLGFBQWEsRUFBRTtZQUM5QixTQUFTLEVBQUUsRUFBRTtZQUNiLFNBQVM7U0FDVjtLQUNGLENBQUMsQ0FBQTtJQUVGLE1BQU0sRUFDSixJQUFJLEVBQUUsQ0FBQyxNQUFNLENBQUMsRUFDZixHQUFHLE1BQU0sS0FBSyxDQUFDLEtBQUssQ0FBQztRQUNwQixNQUFNLEVBQUUsUUFBUTtRQUNoQixNQUFNLEVBQUUsR0FBRyxDQUFDLFdBQVcsQ0FBQyxNQUFNO1FBQzlCLE9BQU8sRUFBRTtZQUNQLEVBQUUsRUFBRSxHQUFHLENBQUMsTUFBTSxDQUFDLEVBQUU7U0FDbEI7S0FDRixDQUFDLENBQUE7SUFFRixHQUFHLENBQUMsSUFBSSxDQUFDO1FBQ1AsTUFBTSxFQUFFLE1BQU07S0FDZixDQUFDLENBQUE7QUFDSixDQUFDLENBQUE7QUE5QlksUUFBQSxJQUFJLFFBOEJoQjtBQUVEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBd0NHO0FBQ0ksTUFBTSxNQUFNLEdBQUcsS0FBSyxFQUN6QixHQUErQixFQUMvQixHQUFtQixFQUNuQixFQUFFO0lBQ0YsTUFBTSxLQUFLLEdBQUcsR0FBRyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsaUNBQXlCLENBQUMsS0FBSyxDQUFDLENBQUE7SUFDaEUsTUFBTSxFQUFFLEVBQUUsRUFBRSxTQUFTLEVBQUUsR0FBRyxHQUFHLENBQUMsTUFBTSxDQUFBO0lBRXBDLE1BQU0sMkNBQThCLENBQUMsR0FBRyxDQUFDO1FBQ3ZDLFNBQVMsRUFBRSxHQUFHLENBQUMsS0FBSztRQUNwQixLQUFLLEVBQUU7WUFDTCxTQUFTLEVBQUUsRUFBRTtZQUNiLFNBQVM7U0FDVjtLQUNGLENBQUMsQ0FBQTtJQUVGLE1BQU0sRUFDSixJQUFJLEVBQUUsQ0FBQyxNQUFNLENBQUMsRUFDZixHQUFHLE1BQU0sS0FBSyxDQUFDLEtBQUssQ0FBQztRQUNwQixNQUFNLEVBQUUsUUFBUTtRQUNoQixNQUFNLEVBQUUsR0FBRyxDQUFDLFdBQVcsQ0FBQyxNQUFNO1FBQzlCLE9BQU8sRUFBRTtZQUNQLEVBQUUsRUFBRSxHQUFHLENBQUMsTUFBTSxDQUFDLEVBQUU7U0FDbEI7S0FDRixDQUFDLENBQUE7SUFFRixHQUFHLENBQUMsSUFBSSxDQUFDO1FBQ1AsTUFBTSxFQUFFLE1BQU07S0FDZixDQUFDLENBQUE7QUFDSixDQUFDLENBQUE7QUE1QlksUUFBQSxNQUFNLFVBNEJsQiJ9