"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GET = void 0;
const workflows_1 = require("../../../../workflows/order-set/workflows");
/**
 * @oas [get] /admin/order-sets/{id}
 * operationId: "AdminGetOrderSet"
 * summary: "Get Order Set"
 * description: "Retrieves a specific order set by its ID."
 * x-authenticated: true
 * parameters:
 *   - name: id
 *     in: path
 *     required: true
 *     schema:
 *       type: string
 *     description: The ID of the order set to retrieve.
 *   - name: fields
 *     in: query
 *     schema:
 *       type: string
 *     required: false
 *     description: Comma-separated fields to include in the response.
 * responses:
 *   "200":
 *     description: OK
 *     content:
 *       application/json:
 *         schema:
 *           type: object
 *           properties:
 *             order_set:
 *               $ref: "#/components/schemas/AdminOrderSet"
 *   "404":
 *     description: Not Found
 *     content:
 *       application/json:
 *         schema:
 *           type: object
 *           properties:
 *             message:
 *               type: string
 *               example: "Order set not found"
 * tags:
 *   - Admin Order Sets
 * security:
 *   - api_token: []
 *   - cookie_auth: []
 */
const GET = async (req, res) => {
    const { result: { data: [order_set] } } = await (0, workflows_1.getFormattedOrderSetListWorkflow)(req.scope).run({
        input: {
            fields: req.queryConfig.fields,
            filters: { id: req.params.id },
            pagination: req.queryConfig.pagination
        }
    });
    res.json({ order_set });
};
exports.GET = GET;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvYXBpL2FkbWluL29yZGVyLXNldHMvW2lkXS9yb3V0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFFQSx5RUFBNEY7QUFFNUY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBNENHO0FBQ0ksTUFBTSxHQUFHLEdBQUcsS0FBSyxFQUFFLEdBQWtCLEVBQUUsR0FBbUIsRUFBRSxFQUFFO0lBQ25FLE1BQU0sRUFDSixNQUFNLEVBQUUsRUFDTixJQUFJLEVBQUUsQ0FBQyxTQUFTLENBQUMsRUFDbEIsRUFDRixHQUFHLE1BQU0sSUFBQSw0Q0FBZ0MsRUFBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDO1FBQ3hELEtBQUssRUFBRTtZQUNMLE1BQU0sRUFBRSxHQUFHLENBQUMsV0FBVyxDQUFDLE1BQU07WUFDOUIsT0FBTyxFQUFFLEVBQUUsRUFBRSxFQUFFLEdBQUcsQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFO1lBQzlCLFVBQVUsRUFBRSxHQUFHLENBQUMsV0FBVyxDQUFDLFVBQVU7U0FDdkM7S0FDRixDQUFDLENBQUE7SUFFRixHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUUsU0FBUyxFQUFFLENBQUMsQ0FBQTtBQUN6QixDQUFDLENBQUE7QUFkWSxRQUFBLEdBQUcsT0FjZiJ9