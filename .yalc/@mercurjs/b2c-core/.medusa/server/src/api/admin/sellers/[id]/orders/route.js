"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GET = void 0;
const utils_1 = require("@medusajs/framework/utils");
const seller_order_1 = __importDefault(require("../../../../../links/seller-order"));
const workflows_1 = require("../../../../../workflows/order/workflows");
/**
 * @oas [get] /admin/sellers/{id}/orders
 * operationId: "AdminListSellerOrders"
 * summary: "List Seller Orders"
 * description: "Retrieves a list of orders associated with a specific seller."
 * x-authenticated: true
 * parameters:
 *   - name: id
 *     in: path
 *     required: true
 *     schema:
 *       type: string
 *     description: The ID of the seller.
 *   - name: offset
 *     in: query
 *     schema:
 *       type: number
 *     required: false
 *     description: The number of items to skip before starting to collect the result set.
 *   - name: limit
 *     in: query
 *     schema:
 *       type: number
 *     required: false
 *     description: The number of items to return.
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
 *             orders:
 *               type: array
 *               description: Array of orders associated with the seller.
 *               items:
 *                 type: object
 *                 description: Order object with details.
 *             count:
 *               type: integer
 *               description: The total number of items available
 *             offset:
 *               type: integer
 *               description: The number of items skipped before these items
 *             limit:
 *               type: integer
 *               description: The number of items per page
 *   "404":
 *     description: Not Found
 *     content:
 *       application/json:
 *         schema:
 *           type: object
 *           properties:
 *             message:
 *               type: string
 *               example: "Seller not found"
 * tags:
 *   - Admin Sellers
 * security:
 *   - api_token: []
 *   - cookie_auth: []
 */
const GET = async (req, res) => {
    const query = req.scope.resolve(utils_1.ContainerRegistrationKeys.QUERY);
    const { data: orderRelations } = await query.graph({
        entity: seller_order_1.default.entryPoint,
        fields: ['order_id'],
        filters: {
            seller_id: req.params.id,
            deleted_at: {
                $eq: null
            }
        }
    });
    const { result } = await (0, workflows_1.getVendorOrdersListWorkflow)(req.scope).run({
        input: {
            fields: req.queryConfig.fields,
            variables: {
                filters: {
                    ...req.filterableFields,
                    id: orderRelations.map((relation) => relation.order_id)
                },
                ...req.queryConfig.pagination
            }
        }
    });
    const { rows, metadata } = result;
    res.json({
        orders: rows,
        count: metadata?.count,
        offset: metadata?.skip,
        limit: metadata?.take
    });
};
exports.GET = GET;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvYXBpL2FkbWluL3NlbGxlcnMvW2lkXS9vcmRlcnMvcm91dGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQ0EscURBQXFFO0FBRXJFLHFGQUEyRDtBQUMzRCx3RUFBc0Y7QUFHdEY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQXFFRztBQUNJLE1BQU0sR0FBRyxHQUFHLEtBQUssRUFDdEIsR0FBa0QsRUFDbEQsR0FBbUIsRUFDbkIsRUFBRTtJQUNGLE1BQU0sS0FBSyxHQUFHLEdBQUcsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLGlDQUF5QixDQUFDLEtBQUssQ0FBQyxDQUFBO0lBRWhFLE1BQU0sRUFBRSxJQUFJLEVBQUUsY0FBYyxFQUFFLEdBQUcsTUFBTSxLQUFLLENBQUMsS0FBSyxDQUFDO1FBQ2pELE1BQU0sRUFBRSxzQkFBVyxDQUFDLFVBQVU7UUFDOUIsTUFBTSxFQUFFLENBQUMsVUFBVSxDQUFDO1FBQ3BCLE9BQU8sRUFBRTtZQUNQLFNBQVMsRUFBRSxHQUFHLENBQUMsTUFBTSxDQUFDLEVBQUU7WUFDeEIsVUFBVSxFQUFFO2dCQUNWLEdBQUcsRUFBRSxJQUFJO2FBQ1Y7U0FDRjtLQUNGLENBQUMsQ0FBQTtJQUVGLE1BQU0sRUFBRSxNQUFNLEVBQUUsR0FBRyxNQUFNLElBQUEsdUNBQTJCLEVBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQztRQUNsRSxLQUFLLEVBQUU7WUFDTCxNQUFNLEVBQUUsR0FBRyxDQUFDLFdBQVcsQ0FBQyxNQUFNO1lBQzlCLFNBQVMsRUFBRTtnQkFDVCxPQUFPLEVBQUU7b0JBQ1AsR0FBRyxHQUFHLENBQUMsZ0JBQWdCO29CQUN2QixFQUFFLEVBQUUsY0FBYyxDQUFDLEdBQUcsQ0FBQyxDQUFDLFFBQVEsRUFBRSxFQUFFLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQztpQkFDeEQ7Z0JBQ0QsR0FBRyxHQUFHLENBQUMsV0FBVyxDQUFDLFVBQVU7YUFDOUI7U0FDRjtLQUNGLENBQUMsQ0FBQTtJQUVGLE1BQU0sRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLEdBQUcsTUFBYSxDQUFBO0lBRXhDLEdBQUcsQ0FBQyxJQUFJLENBQUM7UUFDUCxNQUFNLEVBQUUsSUFBSTtRQUNaLEtBQUssRUFBRSxRQUFRLEVBQUUsS0FBSztRQUN0QixNQUFNLEVBQUUsUUFBUSxFQUFFLElBQUk7UUFDdEIsS0FBSyxFQUFFLFFBQVEsRUFBRSxJQUFJO0tBQ3RCLENBQUMsQ0FBQTtBQUNKLENBQUMsQ0FBQTtBQXRDWSxRQUFBLEdBQUcsT0FzQ2YifQ==