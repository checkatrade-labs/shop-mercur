"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GET = void 0;
const core_flows_1 = require("@medusajs/medusa/core-flows");
const seller_1 = require("../../../../../modules/seller");
const utils_1 = require("../../../../../shared/infra/http/utils");
/**
 * @oas [get] /vendor/customers/{id}/orders
 * operationId: "VendorListOrdersByCustomerId"
 * summary: "List Orders by customer id"
 * description: "Retrieves a list of orders for the specified customer."
 * x-authenticated: true
 * parameters:
 *   - in: path
 *     name: id
 *     required: true
 *     description: The ID of the customer.
 *     schema:
 *       type: string
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
 *               items:
 *                 $ref: "#/components/schemas/VendorCustomerOrderOverview"
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
 *   - Vendor Customers
 * security:
 *   - api_token: []
 *   - cookie_auth: []
 */
const GET = async (req, res) => {
    const seller = await (0, utils_1.fetchSellerByAuthActorId)(req.auth_context.actor_id, req.scope);
    const { orders: orderIds, count } = await (0, seller_1.selectCustomerOrders)(req.scope, seller.id, req.params.id, {
        skip: req.queryConfig.pagination.skip,
        take: req.queryConfig.pagination.take || 50,
    }, ["id"]);
    const { result: orders } = await core_flows_1.getOrdersListWorkflow.run({
        container: req.scope,
        input: {
            fields: req.queryConfig.fields,
            variables: {
                filters: {
                    id: orderIds.map((o) => o.id),
                },
            },
        },
    });
    res.json({
        orders,
        count,
        offset: req.queryConfig.pagination.skip,
        limit: req.queryConfig.pagination.take,
    });
};
exports.GET = GET;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvYXBpL3ZlbmRvci9jdXN0b21lcnMvW2lkXS9vcmRlcnMvcm91dGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBSUEsNERBQW9FO0FBRXBFLDBEQUFxRTtBQUVyRSxrRUFBa0Y7QUFFbEY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQXlERztBQUNJLE1BQU0sR0FBRyxHQUFHLEtBQUssRUFDdEIsR0FBK0IsRUFDL0IsR0FBbUIsRUFDbkIsRUFBRTtJQUNGLE1BQU0sTUFBTSxHQUFHLE1BQU0sSUFBQSxnQ0FBd0IsRUFDM0MsR0FBRyxDQUFDLFlBQVksQ0FBQyxRQUFRLEVBQ3pCLEdBQUcsQ0FBQyxLQUFLLENBQ1YsQ0FBQztJQUVGLE1BQU0sRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxHQUFHLE1BQU0sSUFBQSw2QkFBb0IsRUFDNUQsR0FBRyxDQUFDLEtBQUssRUFDVCxNQUFNLENBQUMsRUFBRSxFQUNULEdBQUcsQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUNiO1FBQ0UsSUFBSSxFQUFFLEdBQUcsQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFDLElBQUk7UUFDckMsSUFBSSxFQUFFLEdBQUcsQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFDLElBQUksSUFBSSxFQUFFO0tBQzVDLEVBQ0QsQ0FBQyxJQUFJLENBQUMsQ0FDUCxDQUFDO0lBRUYsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsR0FBRyxNQUFNLGtDQUFxQixDQUFDLEdBQUcsQ0FBQztRQUN6RCxTQUFTLEVBQUUsR0FBRyxDQUFDLEtBQUs7UUFDcEIsS0FBSyxFQUFFO1lBQ0wsTUFBTSxFQUFFLEdBQUcsQ0FBQyxXQUFXLENBQUMsTUFBTTtZQUM5QixTQUFTLEVBQUU7Z0JBQ1QsT0FBTyxFQUFFO29CQUNQLEVBQUUsRUFBRSxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO2lCQUM5QjthQUNGO1NBQ0Y7S0FDRixDQUFDLENBQUM7SUFFSCxHQUFHLENBQUMsSUFBSSxDQUFDO1FBQ1AsTUFBTTtRQUNOLEtBQUs7UUFDTCxNQUFNLEVBQUUsR0FBRyxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsSUFBSTtRQUN2QyxLQUFLLEVBQUUsR0FBRyxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsSUFBSTtLQUN2QyxDQUFDLENBQUM7QUFDTCxDQUFDLENBQUM7QUF0Q1csUUFBQSxHQUFHLE9Bc0NkIn0=