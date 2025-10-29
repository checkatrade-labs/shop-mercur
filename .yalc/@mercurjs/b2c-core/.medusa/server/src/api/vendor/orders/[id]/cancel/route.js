"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.POST = void 0;
const workflows_1 = require("../../../../../workflows/order/workflows");
const cancel_order_1 = require("../../../../../workflows/order/workflows/cancel-order");
/**
 * @oas [post] /vendor/orders/{id}/cancel
 * operationId: "VendorCancelOrder"
 * summary: "Mark order as cancelled"
 * description: "Mark order as cancelled."
 * x-authenticated: true
 * parameters:
 * - in: path
 *   name: id
 *   required: true
 *   description: The ID of the Order.
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
    const { id } = req.params;
    await (0, cancel_order_1.cancelOrderWorkflow)(req.scope).run({
        input: {
            order_id: id,
            canceled_by: req.auth_context.actor_id
        }
    });
    const { result: [order] } = await (0, workflows_1.getVendorOrdersListWorkflow)(req.scope).run({
        input: {
            fields: req.queryConfig.fields,
            variables: {
                filters: {
                    id
                }
            }
        }
    });
    res.json({ order });
};
exports.POST = POST;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvYXBpL3ZlbmRvci9vcmRlcnMvW2lkXS9jYW5jZWwvcm91dGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBRUEsd0VBQXNGO0FBQ3RGLHdGQUEyRjtBQUUzRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQTRCRztBQUNJLE1BQU0sSUFBSSxHQUFHLEtBQUssRUFDdkIsR0FBK0IsRUFDL0IsR0FBbUIsRUFDbkIsRUFBRTtJQUNGLE1BQU0sRUFBRSxFQUFFLEVBQUUsR0FBRyxHQUFHLENBQUMsTUFBTSxDQUFBO0lBRXpCLE1BQU0sSUFBQSxrQ0FBbUIsRUFBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDO1FBQ3ZDLEtBQUssRUFBRTtZQUNMLFFBQVEsRUFBRSxFQUFFO1lBQ1osV0FBVyxFQUFFLEdBQUcsQ0FBQyxZQUFZLENBQUMsUUFBUTtTQUN2QztLQUNGLENBQUMsQ0FBQTtJQUVGLE1BQU0sRUFDSixNQUFNLEVBQUUsQ0FBQyxLQUFLLENBQUMsRUFDaEIsR0FBRyxNQUFNLElBQUEsdUNBQTJCLEVBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQztRQUNuRCxLQUFLLEVBQUU7WUFDTCxNQUFNLEVBQUUsR0FBRyxDQUFDLFdBQVcsQ0FBQyxNQUFNO1lBQzlCLFNBQVMsRUFBRTtnQkFDVCxPQUFPLEVBQUU7b0JBQ1AsRUFBRTtpQkFDSDthQUNGO1NBQ0Y7S0FDRixDQUFDLENBQUE7SUFFRixHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQTtBQUNyQixDQUFDLENBQUE7QUEzQlksUUFBQSxJQUFJLFFBMkJoQiJ9