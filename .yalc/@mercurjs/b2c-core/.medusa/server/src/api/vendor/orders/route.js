"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GET = void 0;
const utils_1 = require("@medusajs/framework/utils");
const seller_order_1 = __importDefault(require("../../../links/seller-order"));
const utils_2 = require("../../../shared/infra/http/utils");
const workflows_1 = require("../../../workflows/order/workflows");
/**
 * @oas [get] /vendor/orders
 * operationId: "VendorListOrders"
 * summary: "List Orders"
 * description: "Retrieves a list of orders for the authenticated vendor."
 * x-authenticated: true
 * parameters:
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
 *   - name: order
 *     in: query
 *     schema:
 *       type: string
 *     required: false
 *     description: The order of the returned items.
 *   - name: created_at
 *     in: query
 *     schema:
 *       type: object
 *     required: false
 *     description: Filter by created at date range
 *   - name: status
 *     in: query
 *     schema:
 *       oneOf:
 *         - type: string
 *         - type: array
 *           items:
 *             type: string
 *         - type: object
 *     required: false
 *     description: Filter by order status
 *   - name: fulfillment_status
 *     in: query
 *     schema:
 *       type: string
 *     required: false
 *     description: Filter by fulfillment status
 *   - name: payment_status
 *     in: query
 *     schema:
 *       type: string
 *     required: false
 *     description: Filter by payment status
 *   - name: q
 *     in: query
 *     schema:
 *       type: string
 *     required: false
 *     description: Search query for filtering orders
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
 *               items:
 *                 $ref: "#/components/schemas/VendorOrderDetails"
 *             count:
 *               type: integer
 *               description: The total number of items available
 *             offset:
 *               type: integer
 *               description: The number of items skipped before these items
 *             limit:
 *               type: integer
 *               description: The number of items per page
 * tags:
 *   - Vendor Orders
 * security:
 *   - api_token: []
 *   - cookie_auth: []
 */
const GET = async (req, res) => {
    const query = req.scope.resolve(utils_1.ContainerRegistrationKeys.QUERY);
    const seller = await (0, utils_2.fetchSellerByAuthActorId)(req.auth_context.actor_id, req.scope);
    const { data: orderRelations } = await query.graph({
        entity: seller_order_1.default.entryPoint,
        fields: ['order_id'],
        filters: {
            seller_id: seller.id,
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvYXBpL3ZlbmRvci9vcmRlcnMvcm91dGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQ0EscURBQXFFO0FBRXJFLCtFQUF5RDtBQUN6RCw0REFBMkU7QUFDM0Usa0VBQWdGO0FBR2hGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQTRGRztBQUNJLE1BQU0sR0FBRyxHQUFHLEtBQUssRUFDdEIsR0FBeUQsRUFDekQsR0FBbUIsRUFDbkIsRUFBRTtJQUNGLE1BQU0sS0FBSyxHQUFHLEdBQUcsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLGlDQUF5QixDQUFDLEtBQUssQ0FBQyxDQUFBO0lBRWhFLE1BQU0sTUFBTSxHQUFHLE1BQU0sSUFBQSxnQ0FBd0IsRUFDM0MsR0FBRyxDQUFDLFlBQVksQ0FBQyxRQUFRLEVBQ3pCLEdBQUcsQ0FBQyxLQUFLLENBQ1YsQ0FBQTtJQUVELE1BQU0sRUFBRSxJQUFJLEVBQUUsY0FBYyxFQUFFLEdBQUcsTUFBTSxLQUFLLENBQUMsS0FBSyxDQUFDO1FBQ2pELE1BQU0sRUFBRSxzQkFBZSxDQUFDLFVBQVU7UUFDbEMsTUFBTSxFQUFFLENBQUMsVUFBVSxDQUFDO1FBQ3BCLE9BQU8sRUFBRTtZQUNQLFNBQVMsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNwQixVQUFVLEVBQUU7Z0JBQ1YsR0FBRyxFQUFFLElBQUk7YUFDVjtTQUNGO0tBQ0YsQ0FBQyxDQUFBO0lBRUYsTUFBTSxFQUFFLE1BQU0sRUFBRSxHQUFHLE1BQU0sSUFBQSx1Q0FBMkIsRUFBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDO1FBQ2xFLEtBQUssRUFBRTtZQUNMLE1BQU0sRUFBRSxHQUFHLENBQUMsV0FBVyxDQUFDLE1BQU07WUFDOUIsU0FBUyxFQUFFO2dCQUNULE9BQU8sRUFBRTtvQkFDUCxHQUFHLEdBQUcsQ0FBQyxnQkFBZ0I7b0JBQ3ZCLEVBQUUsRUFBRSxjQUFjLENBQUMsR0FBRyxDQUFDLENBQUMsUUFBUSxFQUFFLEVBQUUsQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDO2lCQUN4RDtnQkFDRCxHQUFHLEdBQUcsQ0FBQyxXQUFXLENBQUMsVUFBVTthQUM5QjtTQUNGO0tBQ0YsQ0FBQyxDQUFBO0lBRUYsTUFBTSxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsR0FBRyxNQUFhLENBQUE7SUFFeEMsR0FBRyxDQUFDLElBQUksQ0FBQztRQUNQLE1BQU0sRUFBRSxJQUFJO1FBQ1osS0FBSyxFQUFFLFFBQVEsRUFBRSxLQUFLO1FBQ3RCLE1BQU0sRUFBRSxRQUFRLEVBQUUsSUFBSTtRQUN0QixLQUFLLEVBQUUsUUFBUSxFQUFFLElBQUk7S0FDdEIsQ0FBQyxDQUFBO0FBQ0osQ0FBQyxDQUFBO0FBM0NZLFFBQUEsR0FBRyxPQTJDZiJ9