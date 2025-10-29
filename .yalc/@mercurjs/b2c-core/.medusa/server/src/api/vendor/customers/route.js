"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GET = void 0;
const seller_1 = require("../../../modules/seller");
const utils_1 = require("../../../shared/infra/http/utils");
/**
 * @oas [get] /vendor/customers
 * operationId: "VendorListSellerCustomers"
 * summary: "List Customers"
 * description: "Retrieves a list of customers who placed an order in sellers store."
 * x-authenticated: true
 * parameters:
 *   - in: query
 *     name: limit
 *     schema:
 *       type: number
 *     description: The number of items to return. Default 50.
 *   - in: query
 *     name: offset
 *     schema:
 *       type: number
 *     description: The number of items to skip before starting the response. Default 0.
 *   - in: query
 *     name: fields
 *     schema:
 *       type: string
 *     description: Comma-separated fields that should be included in the returned data.
 * responses:
 *   "200":
 *     description: OK
 *     content:
 *       application/json:
 *         schema:
 *           type: object
 *           properties:
 *             customers:
 *               type: array
 *               items:
 *                 $ref: "#/components/schemas/VendorCustomer"
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
    const { customers, count } = await (0, seller_1.selectSellerCustomers)(req.scope, seller.id, {
        skip: req.queryConfig.pagination.skip,
        take: req.queryConfig.pagination.take || 50,
    }, req.queryConfig.fields);
    res.json({
        customers,
        count: count,
        offset: req.queryConfig.pagination.skip,
        limit: req.queryConfig.pagination.take,
    });
};
exports.GET = GET;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvYXBpL3ZlbmRvci9jdXN0b21lcnMvcm91dGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBS0Esb0RBQWdFO0FBRWhFLDREQUE0RTtBQUU1RTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBZ0RHO0FBQ0ksTUFBTSxHQUFHLEdBQUcsS0FBSyxFQUN0QixHQUErQixFQUMvQixHQUFtQixFQUNuQixFQUFFO0lBQ0YsTUFBTSxNQUFNLEdBQUcsTUFBTSxJQUFBLGdDQUF3QixFQUMzQyxHQUFHLENBQUMsWUFBWSxDQUFDLFFBQVEsRUFDekIsR0FBRyxDQUFDLEtBQUssQ0FDVixDQUFDO0lBRUYsTUFBTSxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsR0FBRyxNQUFNLElBQUEsOEJBQXFCLEVBQ3RELEdBQUcsQ0FBQyxLQUFLLEVBQ1QsTUFBTSxDQUFDLEVBQUUsRUFDVDtRQUNFLElBQUksRUFBRSxHQUFHLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQyxJQUFJO1FBQ3JDLElBQUksRUFBRSxHQUFHLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQyxJQUFJLElBQUksRUFBRTtLQUM1QyxFQUNELEdBQUcsQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUN2QixDQUFDO0lBRUYsR0FBRyxDQUFDLElBQUksQ0FBQztRQUNQLFNBQVM7UUFDVCxLQUFLLEVBQUUsS0FBSztRQUNaLE1BQU0sRUFBRSxHQUFHLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQyxJQUFJO1FBQ3ZDLEtBQUssRUFBRSxHQUFHLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQyxJQUFJO0tBQ3ZDLENBQUMsQ0FBQztBQUNMLENBQUMsQ0FBQztBQXpCVyxRQUFBLEdBQUcsT0F5QmQifQ==