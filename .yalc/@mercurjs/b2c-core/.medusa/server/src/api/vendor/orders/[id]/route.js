"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GET = void 0;
const workflows_1 = require("../../../../workflows/order/workflows");
/**
 * @oas [get] /vendor/orders/{id}
 * operationId: "VendorGetOrder"
 * summary: "Get Order details"
 * description: "Retrieves the details of specified order."
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
 *             order:
 *               $ref: "#/components/schemas/VendorOrderDetails"
 * tags:
 *   - Vendor Orders
 * security:
 *   - api_token: []
 *   - cookie_auth: []
 */
const GET = async (req, res) => {
    const { id } = req.params;
    const { result } = await (0, workflows_1.getVendorOrdersListWorkflow)(req.scope).run({
        input: {
            fields: req.queryConfig.fields,
            variables: {
                filters: {
                    id,
                },
            },
        },
    });
    const [order] = result;
    res.json({ order });
};
exports.GET = GET;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvYXBpL3ZlbmRvci9vcmRlcnMvW2lkXS9yb3V0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFNQSxxRUFBb0Y7QUFFcEY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0E0Qkc7QUFDSSxNQUFNLEdBQUcsR0FBRyxLQUFLLEVBQ3RCLEdBQStCLEVBQy9CLEdBQW1CLEVBQ25CLEVBQUU7SUFDRixNQUFNLEVBQUUsRUFBRSxFQUFFLEdBQUcsR0FBRyxDQUFDLE1BQU0sQ0FBQztJQUUxQixNQUFNLEVBQUUsTUFBTSxFQUFFLEdBQUcsTUFBTSxJQUFBLHVDQUEyQixFQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUM7UUFDbEUsS0FBSyxFQUFFO1lBQ0wsTUFBTSxFQUFFLEdBQUcsQ0FBQyxXQUFXLENBQUMsTUFBTTtZQUM5QixTQUFTLEVBQUU7Z0JBQ1QsT0FBTyxFQUFFO29CQUNQLEVBQUU7aUJBQ0g7YUFDRjtTQUNGO0tBQ0YsQ0FBQyxDQUFDO0lBRUgsTUFBTSxDQUFDLEtBQUssQ0FBQyxHQUFHLE1BQW9CLENBQUM7SUFFckMsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUM7QUFDdEIsQ0FBQyxDQUFDO0FBcEJXLFFBQUEsR0FBRyxPQW9CZCJ9