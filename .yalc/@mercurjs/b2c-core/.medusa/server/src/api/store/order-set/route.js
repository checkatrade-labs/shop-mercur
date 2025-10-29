"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GET = GET;
const utils_1 = require("@medusajs/framework/utils");
const workflows_1 = require("../../../workflows/order-set/workflows");
const query_config_1 = require("./query-config");
/**
 * @oas [get] /store/order-set
 * operationId: "StoreListOrderSets"
 * summary: "List Order Sets"
 * description: "Retrieves a list of order sets for the authenticated customer."
 * x-authenticated: true
 * parameters:
 *   - name: offset
 *     in: query
 *     schema:
 *       type: number
 *       default: 0
 *     required: false
 *     description: The number of items to skip before starting to collect the result set.
 *   - name: limit
 *     in: query
 *     schema:
 *       type: number
 *       default: 50
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
 *             order_sets:
 *               type: array
 *               items:
 *                 $ref: "#/components/schemas/StoreOrderSet"
 *             count:
 *               type: integer
 *               description: The total number of order sets available
 *             offset:
 *               type: integer
 *               description: The number of items skipped before these items
 *             limit:
 *               type: integer
 *               description: The number of items per page
 *   "401":
 *     description: Unauthorized
 *     content:
 *       application/json:
 *         schema:
 *           type: object
 *           properties:
 *             message:
 *               type: string
 *               example: "Unauthorized"
 *   "403":
 *     description: Forbidden
 *     content:
 *       application/json:
 *         schema:
 *           type: object
 *           properties:
 *             message:
 *               type: string
 *               example: "Forbidden"
 * tags:
 *   - Store
 * security:
 *   - api_token: []
 *   - cookie_auth: []
 */
async function GET(req, res) {
    const query = req.scope.resolve(utils_1.ContainerRegistrationKeys.QUERY);
    const { data: order_set_ids, metadata } = await query.graph({
        entity: 'order_set',
        fields: ['id'],
        filters: {
            customer_id: req.auth_context.actor_id
        },
        pagination: req.queryConfig.pagination
    });
    const { result: { data: order_sets } } = await (0, workflows_1.getFormattedOrderSetListWorkflow)(req.scope).run({
        input: {
            filters: { id: order_set_ids.map((set) => set.id) },
            fields: query_config_1.defaultStoreRetrieveOrderSetFields
        }
    });
    res.json({
        order_sets,
        count: metadata?.count,
        offset: metadata?.skip,
        limit: metadata?.take
    });
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvYXBpL3N0b3JlL29yZGVyLXNldC9yb3V0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQWdGQSxrQkE4QkM7QUE3R0QscURBQXFFO0FBRXJFLHNFQUF5RjtBQUN6RixpREFBbUU7QUFFbkU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0F5RUc7QUFDSSxLQUFLLFVBQVUsR0FBRyxDQUN2QixHQUErQixFQUMvQixHQUFtQjtJQUVuQixNQUFNLEtBQUssR0FBRyxHQUFHLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxpQ0FBeUIsQ0FBQyxLQUFLLENBQUMsQ0FBQTtJQUVoRSxNQUFNLEVBQUUsSUFBSSxFQUFFLGFBQWEsRUFBRSxRQUFRLEVBQUUsR0FBRyxNQUFNLEtBQUssQ0FBQyxLQUFLLENBQUM7UUFDMUQsTUFBTSxFQUFFLFdBQVc7UUFDbkIsTUFBTSxFQUFFLENBQUMsSUFBSSxDQUFDO1FBQ2QsT0FBTyxFQUFFO1lBQ1AsV0FBVyxFQUFFLEdBQUcsQ0FBQyxZQUFZLENBQUMsUUFBUTtTQUN2QztRQUNELFVBQVUsRUFBRSxHQUFHLENBQUMsV0FBVyxDQUFDLFVBQVU7S0FDdkMsQ0FBQyxDQUFBO0lBRUYsTUFBTSxFQUNKLE1BQU0sRUFBRSxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUsRUFDN0IsR0FBRyxNQUFNLElBQUEsNENBQWdDLEVBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQztRQUN4RCxLQUFLLEVBQUU7WUFDTCxPQUFPLEVBQUUsRUFBRSxFQUFFLEVBQUUsYUFBYSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxFQUFFO1lBQ25ELE1BQU0sRUFBRSxpREFBa0M7U0FDM0M7S0FDRixDQUFDLENBQUE7SUFFRixHQUFHLENBQUMsSUFBSSxDQUFDO1FBQ1AsVUFBVTtRQUNWLEtBQUssRUFBRSxRQUFRLEVBQUUsS0FBSztRQUN0QixNQUFNLEVBQUUsUUFBUSxFQUFFLElBQUk7UUFDdEIsS0FBSyxFQUFFLFFBQVEsRUFBRSxJQUFJO0tBQ3RCLENBQUMsQ0FBQTtBQUNKLENBQUMifQ==