"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.POST = exports.GET = void 0;
const utils_1 = require("@medusajs/framework/utils");
const seller_price_list_1 = __importDefault(require("../../../links/seller-price-list"));
const utils_2 = require("../../../shared/infra/http/utils");
const workflows_1 = require("../../../workflows/price-list/workflows");
/**
 * @oas [get] /vendor/price-lists
 * operationId: "VendorListPriceLists"
 * summary: "List Price lists"
 * description: "Retrieves a list of price lists."
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
 *             price_lists:
 *               type: array
 *               items:
 *                 $ref: "#/components/schemas/VendorPriceList"
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
 *   - Vendor Price Lists
 * security:
 *   - api_token: []
 *   - cookie_auth: []
 */
const GET = async (req, res) => {
    const query = req.scope.resolve(utils_1.ContainerRegistrationKeys.QUERY);
    const { data: price_lists, metadata } = await query.graph({
        entity: seller_price_list_1.default.entryPoint,
        fields: req.queryConfig.fields.map((v) => `price_list.${v}`),
        filters: {
            ...req.filterableFields,
            deleted_at: {
                $eq: null
            }
        },
        pagination: req.queryConfig.pagination
    });
    res.json({
        price_lists,
        count: metadata?.count,
        offset: metadata?.skip,
        limit: metadata?.take
    });
};
exports.GET = GET;
/**
 * @oas [post] /vendor/price-lists
 * operationId: "VendorCreatePriceList"
 * summary: "Create price list"
 * description: "Creates new price list"
 * x-authenticated: true
 * parameters:
 *   - name: fields
 *     in: query
 *     schema:
 *       type: string
 *     required: false
 *     description: Comma-separated fields to include in the response.
 * requestBody:
 *   content:
 *     application/json:
 *       schema:
 *         $ref: "#/components/schemas/VendorCreatePriceList"
 * responses:
 *   "201":
 *     description: OK
 *     content:
 *       application/json:
 *         schema:
 *           type: object
 *           properties:
 *             price_list:
 *               $ref: "#/components/schemas/VendorPriceList"
 * tags:
 *   - Vendor Price Lists
 * security:
 *   - api_token: []
 *   - cookie_auth: []
 */
const POST = async (req, res) => {
    const seller = await (0, utils_2.fetchSellerByAuthActorId)(req.auth_context.actor_id, req.scope);
    const { result: [price_list] } = await workflows_1.createVendorPriceListWorkflow.run({
        container: req.scope,
        input: { price_lists_data: req.validatedBody, seller_id: seller.id }
    });
    res.status(201).json({ price_list });
};
exports.POST = POST;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvYXBpL3ZlbmRvci9wcmljZS1saXN0cy9yb3V0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFDQSxxREFBcUU7QUFFckUseUZBQThEO0FBQzlELDREQUEyRTtBQUMzRSx1RUFBdUY7QUFHdkY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQWdERztBQUNJLE1BQU0sR0FBRyxHQUFHLEtBQUssRUFDdEIsR0FBK0IsRUFDL0IsR0FBbUIsRUFDbkIsRUFBRTtJQUNGLE1BQU0sS0FBSyxHQUFHLEdBQUcsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLGlDQUF5QixDQUFDLEtBQUssQ0FBQyxDQUFBO0lBRWhFLE1BQU0sRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFLFFBQVEsRUFBRSxHQUFHLE1BQU0sS0FBSyxDQUFDLEtBQUssQ0FBQztRQUN4RCxNQUFNLEVBQUUsMkJBQWUsQ0FBQyxVQUFVO1FBQ2xDLE1BQU0sRUFBRSxHQUFHLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLGNBQWMsQ0FBQyxFQUFFLENBQUM7UUFDNUQsT0FBTyxFQUFFO1lBQ1AsR0FBRyxHQUFHLENBQUMsZ0JBQWdCO1lBQ3ZCLFVBQVUsRUFBRTtnQkFDVixHQUFHLEVBQUUsSUFBSTthQUNWO1NBQ0Y7UUFDRCxVQUFVLEVBQUUsR0FBRyxDQUFDLFdBQVcsQ0FBQyxVQUFVO0tBQ3ZDLENBQUMsQ0FBQTtJQUVGLEdBQUcsQ0FBQyxJQUFJLENBQUM7UUFDUCxXQUFXO1FBQ1gsS0FBSyxFQUFFLFFBQVEsRUFBRSxLQUFLO1FBQ3RCLE1BQU0sRUFBRSxRQUFRLEVBQUUsSUFBSTtRQUN0QixLQUFLLEVBQUUsUUFBUSxFQUFFLElBQUk7S0FDdEIsQ0FBQyxDQUFBO0FBQ0osQ0FBQyxDQUFBO0FBeEJZLFFBQUEsR0FBRyxPQXdCZjtBQUVEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0FpQ0c7QUFDSSxNQUFNLElBQUksR0FBRyxLQUFLLEVBQ3ZCLEdBQTBELEVBQzFELEdBQW1CLEVBQ25CLEVBQUU7SUFDRixNQUFNLE1BQU0sR0FBRyxNQUFNLElBQUEsZ0NBQXdCLEVBQzNDLEdBQUcsQ0FBQyxZQUFZLENBQUMsUUFBUSxFQUN6QixHQUFHLENBQUMsS0FBSyxDQUNWLENBQUE7SUFFRCxNQUFNLEVBQ0osTUFBTSxFQUFFLENBQUMsVUFBVSxDQUFDLEVBQ3JCLEdBQUcsTUFBTSx5Q0FBNkIsQ0FBQyxHQUFHLENBQUM7UUFDMUMsU0FBUyxFQUFFLEdBQUcsQ0FBQyxLQUFLO1FBQ3BCLEtBQUssRUFBRSxFQUFFLGdCQUFnQixFQUFFLEdBQUcsQ0FBQyxhQUFhLEVBQUUsU0FBUyxFQUFFLE1BQU0sQ0FBQyxFQUFFLEVBQUU7S0FDckUsQ0FBQyxDQUFBO0lBRUYsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxVQUFVLEVBQUUsQ0FBQyxDQUFBO0FBQ3RDLENBQUMsQ0FBQTtBQWpCWSxRQUFBLElBQUksUUFpQmhCIn0=