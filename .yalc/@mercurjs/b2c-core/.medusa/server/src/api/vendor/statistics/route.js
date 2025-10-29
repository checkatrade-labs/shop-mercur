"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GET = void 0;
const seller_1 = require("../../../modules/seller");
const utils_1 = require("../../../shared/infra/http/utils");
/**
 * @oas [get] /vendor/statistics
 * operationId: "VendorGetStoreStatistics"
 * summary: "GetStoreStatistics"
 * description: "Retrieves store statistics."
 * x-authenticated: true
 * parameters:
 *   - name: time_from
 *     in: query
 *     schema:
 *       type: string
 *   - name: time_to
 *     in: query
 *     schema:
 *       type: string
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
 *                 $ref: "#/components/schemas/VendorDateStatistics"
 *             customers:
 *               type: array
 *               items:
 *                 $ref: "#/components/schemas/VendorDateStatistics"
 * tags:
 *   - Vendor Statistics
 * security:
 *   - api_token: []
 *   - cookie_auth: []
 */
const GET = async (req, res) => {
    const seller = await (0, utils_1.fetchSellerByAuthActorId)(req.auth_context.actor_id, req.scope);
    const orders = await (0, seller_1.selectOrdersChartData)(req.scope, seller.id, [
        req.validatedQuery.time_from.toISOString(),
        req.validatedQuery.time_to.toISOString(),
    ]);
    const customers = await (0, seller_1.selectCustomersChartData)(req.scope, seller.id, [
        req.validatedQuery.time_from.toISOString(),
        req.validatedQuery.time_to.toISOString(),
    ]);
    res.json({ orders, customers });
};
exports.GET = GET;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvYXBpL3ZlbmRvci9zdGF0aXN0aWNzL3JvdXRlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUtBLG9EQUdpQztBQUVqQyw0REFBNEU7QUFFNUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQW9DRztBQUNJLE1BQU0sR0FBRyxHQUFHLEtBQUssRUFDdEIsR0FBK0IsRUFDL0IsR0FBbUIsRUFDbkIsRUFBRTtJQUNGLE1BQU0sTUFBTSxHQUFHLE1BQU0sSUFBQSxnQ0FBd0IsRUFDM0MsR0FBRyxDQUFDLFlBQVksQ0FBQyxRQUFRLEVBQ3pCLEdBQUcsQ0FBQyxLQUFLLENBQ1YsQ0FBQztJQUVGLE1BQU0sTUFBTSxHQUFHLE1BQU0sSUFBQSw4QkFBcUIsRUFBQyxHQUFHLENBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxFQUFFLEVBQUU7UUFDOUQsR0FBRyxDQUFDLGNBQWMsQ0FBQyxTQUFrQixDQUFDLFdBQVcsRUFBRTtRQUNuRCxHQUFHLENBQUMsY0FBYyxDQUFDLE9BQWdCLENBQUMsV0FBVyxFQUFFO0tBQ25ELENBQUMsQ0FBQztJQUNILE1BQU0sU0FBUyxHQUFHLE1BQU0sSUFBQSxpQ0FBd0IsRUFBQyxHQUFHLENBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxFQUFFLEVBQUU7UUFDcEUsR0FBRyxDQUFDLGNBQWMsQ0FBQyxTQUFrQixDQUFDLFdBQVcsRUFBRTtRQUNuRCxHQUFHLENBQUMsY0FBYyxDQUFDLE9BQWdCLENBQUMsV0FBVyxFQUFFO0tBQ25ELENBQUMsQ0FBQztJQUVILEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLENBQUMsQ0FBQztBQUNsQyxDQUFDLENBQUM7QUFuQlcsUUFBQSxHQUFHLE9BbUJkIn0=