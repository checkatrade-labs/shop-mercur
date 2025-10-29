"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.POST = void 0;
const core_flows_1 = require("@medusajs/core-flows");
const utils_1 = require("@medusajs/framework/utils");
/**
 * @oas [post] /vendor/orders/{id}/fulfillments/{fulfillment_id}/cancel
 * operationId: "VendorCancelOrderFulfillment"
 * summary: "Cancel order fulfillment."
 * description: "Cancel order fulfillment."
 * x-authenticated: true
 * parameters:
 * - in: path
 *   name: id
 *   required: true
 *   description: The ID of the Order.
 *   schema:
 *     type: string
 * - in: path
 *   name: fulfillment_id
 *   required: true
 *   description: The ID of the fulfillment.
 *   schema:
 *     type: string
 * responses:
 *   "200":
 *     description: OK
 *     content:
 *       application/json:
 *         schema:
 *           type: object
 *           properties:
 *             member:
 *               $ref: "#/components/schemas/VendorOrderDetails"
 * tags:
 *   - Vendor Orders
 * security:
 *   - api_token: []
 *   - cookie_auth: []
 */
const POST = async (req, res) => {
    const query = req.scope.resolve(utils_1.ContainerRegistrationKeys.QUERY);
    await core_flows_1.cancelOrderFulfillmentWorkflow.run({
        container: req.scope,
        input: {
            order_id: req.params.id,
            fulfillment_id: req.params.fulfillment_id,
            canceled_by: req.auth_context.actor_id
        }
    });
    const { data: [order] } = await query.graph({
        entity: 'order',
        fields: req.queryConfig.fields,
        filters: {
            id: req.params.id
        }
    });
    res.json({ order });
};
exports.POST = POST;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvYXBpL3ZlbmRvci9vcmRlcnMvW2lkXS9mdWxmaWxsbWVudHMvW2Z1bGZpbGxtZW50X2lkXS9jYW5jZWwvcm91dGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEscURBQXFFO0FBS3JFLHFEQUFxRTtBQUVyRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQWtDRztBQUNJLE1BQU0sSUFBSSxHQUFHLEtBQUssRUFDdkIsR0FBK0IsRUFDL0IsR0FBbUIsRUFDbkIsRUFBRTtJQUNGLE1BQU0sS0FBSyxHQUFHLEdBQUcsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLGlDQUF5QixDQUFDLEtBQUssQ0FBQyxDQUFBO0lBRWhFLE1BQU0sMkNBQThCLENBQUMsR0FBRyxDQUFDO1FBQ3ZDLFNBQVMsRUFBRSxHQUFHLENBQUMsS0FBSztRQUNwQixLQUFLLEVBQUU7WUFDTCxRQUFRLEVBQUUsR0FBRyxDQUFDLE1BQU0sQ0FBQyxFQUFFO1lBQ3ZCLGNBQWMsRUFBRSxHQUFHLENBQUMsTUFBTSxDQUFDLGNBQWM7WUFDekMsV0FBVyxFQUFFLEdBQUcsQ0FBQyxZQUFZLENBQUMsUUFBUTtTQUN2QztLQUNGLENBQUMsQ0FBQTtJQUVGLE1BQU0sRUFDSixJQUFJLEVBQUUsQ0FBQyxLQUFLLENBQUMsRUFDZCxHQUFHLE1BQU0sS0FBSyxDQUFDLEtBQUssQ0FBQztRQUNwQixNQUFNLEVBQUUsT0FBTztRQUNmLE1BQU0sRUFBRSxHQUFHLENBQUMsV0FBVyxDQUFDLE1BQU07UUFDOUIsT0FBTyxFQUFFO1lBQ1AsRUFBRSxFQUFFLEdBQUcsQ0FBQyxNQUFNLENBQUMsRUFBRTtTQUNsQjtLQUNGLENBQUMsQ0FBQTtJQUVGLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFBO0FBQ3JCLENBQUMsQ0FBQTtBQTFCWSxRQUFBLElBQUksUUEwQmhCIn0=