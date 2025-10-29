"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.POST = void 0;
const core_flows_1 = require("@medusajs/medusa/core-flows");
const workflows_1 = require("../../../../../workflows/order/workflows");
/**
 * @oas [post] /vendor/orders/{id}/complete
 * operationId: "VendorCompleteOrder"
 * summary: "Mark order as complete"
 * description: "Mark order as complete."
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
    await (0, core_flows_1.completeOrderWorkflow)(req.scope).run({
        input: {
            orderIds: [id]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvYXBpL3ZlbmRvci9vcmRlcnMvW2lkXS9jb21wbGV0ZS9yb3V0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFDQSw0REFBbUU7QUFFbkUsd0VBQXNGO0FBRXRGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBNEJHO0FBQ0ksTUFBTSxJQUFJLEdBQUcsS0FBSyxFQUN2QixHQUErQixFQUMvQixHQUFtQixFQUNuQixFQUFFO0lBQ0YsTUFBTSxFQUFFLEVBQUUsRUFBRSxHQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUE7SUFFekIsTUFBTSxJQUFBLGtDQUFxQixFQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUM7UUFDekMsS0FBSyxFQUFFO1lBQ0wsUUFBUSxFQUFFLENBQUMsRUFBRSxDQUFDO1NBQ2Y7S0FDRixDQUFDLENBQUE7SUFFRixNQUFNLEVBQ0osTUFBTSxFQUFFLENBQUMsS0FBSyxDQUFDLEVBQ2hCLEdBQUcsTUFBTSxJQUFBLHVDQUEyQixFQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUM7UUFDbkQsS0FBSyxFQUFFO1lBQ0wsTUFBTSxFQUFFLEdBQUcsQ0FBQyxXQUFXLENBQUMsTUFBTTtZQUM5QixTQUFTLEVBQUU7Z0JBQ1QsT0FBTyxFQUFFO29CQUNQLEVBQUU7aUJBQ0g7YUFDRjtTQUNGO0tBQ0YsQ0FBQyxDQUFBO0lBRUYsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUE7QUFDckIsQ0FBQyxDQUFBO0FBMUJZLFFBQUEsSUFBSSxRQTBCaEIifQ==