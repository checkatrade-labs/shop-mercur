"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.POST = void 0;
const utils_1 = require("@medusajs/framework/utils");
const core_flows_1 = require("@medusajs/medusa/core-flows");
/**
 * @oas [post] /vendor/returns/{id}/receive/confirm
 * operationId: VendorConfirmReturnReceiveById
 * summary: Confirm Return Receival
 * description: Confirm a return receival process.
 * x-authenticated: true
 * parameters:
 *   - name: id
 *     in: path
 *     description: The return's ID.
 *     required: true
 *     schema:
 *       type: string
 *   - name: fields
 *     in: query
 *     schema:
 *       type: string
 *     description: Comma-separated fields that should be included in the returned data. if a field is prefixed with `+` it will be added to the default fields, using `-` will remove it from the default
 *       fields. without prefix it will replace the entire default fields.
 *     required: false
 * security:
 *   - api_token: []
 *   - cookie_auth: []
 *   - jwt_token: []
 * tags:
 *   - Vendor Returns
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
 */
const POST = async (req, res) => {
    const { id } = req.params;
    const query = req.scope.resolve(utils_1.ContainerRegistrationKeys.QUERY);
    await core_flows_1.confirmReturnReceiveWorkflow.run({
        container: req.scope,
        input: {
            return_id: id,
            confirmed_by: req.auth_context.actor_id
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvYXBpL3ZlbmRvci9yZXR1cm5zL1tpZF0vcmVjZWl2ZS9jb25maXJtL3JvdXRlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUNBLHFEQUFxRTtBQUNyRSw0REFBMEU7QUFFMUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQW9DRztBQUNJLE1BQU0sSUFBSSxHQUFHLEtBQUssRUFDdkIsR0FBK0IsRUFDL0IsR0FBbUIsRUFDbkIsRUFBRTtJQUNGLE1BQU0sRUFBRSxFQUFFLEVBQUUsR0FBRyxHQUFHLENBQUMsTUFBTSxDQUFBO0lBQ3pCLE1BQU0sS0FBSyxHQUFHLEdBQUcsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLGlDQUF5QixDQUFDLEtBQUssQ0FBQyxDQUFBO0lBRWhFLE1BQU0seUNBQTRCLENBQUMsR0FBRyxDQUFDO1FBQ3JDLFNBQVMsRUFBRSxHQUFHLENBQUMsS0FBSztRQUNwQixLQUFLLEVBQUU7WUFDTCxTQUFTLEVBQUUsRUFBRTtZQUNiLFlBQVksRUFBRSxHQUFHLENBQUMsWUFBWSxDQUFDLFFBQVE7U0FDeEM7S0FDRixDQUFDLENBQUE7SUFFRixNQUFNLEVBQ0osSUFBSSxFQUFFLENBQUMsTUFBTSxDQUFDLEVBQ2YsR0FBRyxNQUFNLEtBQUssQ0FBQyxLQUFLLENBQUM7UUFDcEIsTUFBTSxFQUFFLFFBQVE7UUFDaEIsTUFBTSxFQUFFLEdBQUcsQ0FBQyxXQUFXLENBQUMsTUFBTTtRQUM5QixPQUFPLEVBQUU7WUFDUCxFQUFFLEVBQUUsR0FBRyxDQUFDLE1BQU0sQ0FBQyxFQUFFO1NBQ2xCO0tBQ0YsQ0FBQyxDQUFBO0lBRUYsR0FBRyxDQUFDLElBQUksQ0FBQztRQUNQLE1BQU0sRUFBRSxNQUFNO0tBQ2YsQ0FBQyxDQUFBO0FBQ0osQ0FBQyxDQUFBO0FBNUJZLFFBQUEsSUFBSSxRQTRCaEIifQ==