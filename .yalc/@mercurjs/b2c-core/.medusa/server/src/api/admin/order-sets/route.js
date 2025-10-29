"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GET = void 0;
const utils_1 = require("@medusajs/framework/utils");
const order_set_order_1 = __importDefault(require("../../../links/order-set-order"));
const workflows_1 = require("../../../workflows/order-set/workflows");
/**
 * @oas [get] /admin/order-sets
 * operationId: "AdminListOrderSets"
 * summary: "List Order Sets"
 * description: "Retrieves a list of order sets with optional filtering."
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
 *   - name: order_id
 *     in: query
 *     schema:
 *       type: string
 *     required: false
 *     description: Filter order sets by a specific order ID.
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
 *                 $ref: "#/components/schemas/AdminOrderSet"
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
 *   - Admin Order Sets
 * security:
 *   - api_token: []
 *   - cookie_auth: []
 */
const GET = async (req, res) => {
    const { filterableFields, queryConfig } = req;
    if (filterableFields['order_id']) {
        const query = req.scope.resolve(utils_1.ContainerRegistrationKeys.QUERY);
        const { data: [order_set] } = await query.graph({
            entity: order_set_order_1.default.entryPoint,
            fields: ['order_set_id'],
            filters: {
                order_id: req.filterableFields['order_id']
            }
        });
        delete filterableFields['order_id'];
        filterableFields['id'] = order_set.order_set_id;
    }
    const { result: { data, metadata } } = await (0, workflows_1.getFormattedOrderSetListWorkflow)(req.scope).run({
        input: {
            fields: queryConfig.fields,
            filters: filterableFields,
            pagination: queryConfig.pagination
        }
    });
    res.json({
        order_sets: data,
        count: metadata.count,
        offset: metadata.skip,
        limit: metadata.take
    });
};
exports.GET = GET;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvYXBpL2FkbWluL29yZGVyLXNldHMvcm91dGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQ0EscURBQXFFO0FBRXJFLHFGQUEwRDtBQUMxRCxzRUFBeUY7QUFFekY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQXlERztBQUNJLE1BQU0sR0FBRyxHQUFHLEtBQUssRUFBRSxHQUFrQixFQUFFLEdBQW1CLEVBQUUsRUFBRTtJQUNuRSxNQUFNLEVBQUUsZ0JBQWdCLEVBQUUsV0FBVyxFQUFFLEdBQUcsR0FBRyxDQUFBO0lBRTdDLElBQUksZ0JBQWdCLENBQUMsVUFBVSxDQUFDLEVBQUUsQ0FBQztRQUNqQyxNQUFNLEtBQUssR0FBRyxHQUFHLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxpQ0FBeUIsQ0FBQyxLQUFLLENBQUMsQ0FBQTtRQUVoRSxNQUFNLEVBQ0osSUFBSSxFQUFFLENBQUMsU0FBUyxDQUFDLEVBQ2xCLEdBQUcsTUFBTSxLQUFLLENBQUMsS0FBSyxDQUFDO1lBQ3BCLE1BQU0sRUFBRSx5QkFBYSxDQUFDLFVBQVU7WUFDaEMsTUFBTSxFQUFFLENBQUMsY0FBYyxDQUFDO1lBQ3hCLE9BQU8sRUFBRTtnQkFDUCxRQUFRLEVBQUUsR0FBRyxDQUFDLGdCQUFnQixDQUFDLFVBQVUsQ0FBQzthQUMzQztTQUNGLENBQUMsQ0FBQTtRQUVGLE9BQU8sZ0JBQWdCLENBQUMsVUFBVSxDQUFDLENBQUE7UUFDbkMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLEdBQUcsU0FBUyxDQUFDLFlBQVksQ0FBQTtJQUNqRCxDQUFDO0lBRUQsTUFBTSxFQUNKLE1BQU0sRUFBRSxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsRUFDM0IsR0FBRyxNQUFNLElBQUEsNENBQWdDLEVBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQztRQUN4RCxLQUFLLEVBQUU7WUFDTCxNQUFNLEVBQUUsV0FBVyxDQUFDLE1BQU07WUFDMUIsT0FBTyxFQUFFLGdCQUFnQjtZQUN6QixVQUFVLEVBQUUsV0FBVyxDQUFDLFVBQVU7U0FDbkM7S0FDRixDQUFDLENBQUE7SUFFRixHQUFHLENBQUMsSUFBSSxDQUFDO1FBQ1AsVUFBVSxFQUFFLElBQUk7UUFDaEIsS0FBSyxFQUFFLFFBQVMsQ0FBQyxLQUFLO1FBQ3RCLE1BQU0sRUFBRSxRQUFTLENBQUMsSUFBSTtRQUN0QixLQUFLLEVBQUUsUUFBUyxDQUFDLElBQUk7S0FDdEIsQ0FBQyxDQUFBO0FBQ0osQ0FBQyxDQUFBO0FBcENZLFFBQUEsR0FBRyxPQW9DZiJ9