"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GET = exports.POST = void 0;
const framework_1 = require("@medusajs/framework");
const utils_1 = require("@medusajs/framework/utils");
const utils_2 = require("../../../modules/wishlist/utils");
const customer_wishlist_1 = __importDefault(require("../../../links/customer-wishlist"));
const workflows_1 = require("../../../workflows/wishlist/workflows");
/**
 * @oas [post] /store/wishlist
 * operationId: "StoreCreateNewWishlist"
 * summary: "Create new wishlist entry"
 * description: "Creates a new wishlist entry by specifying a reference type and reference ID."
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
 *         $ref: "#/components/schemas/StoreCreateWishlist"
 * responses:
 *   "201":
 *     description: OK
 *     content:
 *       application/json:
 *         schema:
 *           type: object
 *           properties:
 *             id:
 *               type: string
 *               description: Id of the wishlsit nad reference id.
 *             created_at:
 *               type: string
 *               format: date-time
 *               description: The date with timezone at which the resource was created.
 *             updated_at:
 *               type: string
 *               format: date-time
 *               description: The date with timezone at which the resource was last updated.
 *             deleted_at:
 *               type: string
 *               format: date-time
 *               description: The date with timezone at which the resource was deleted.
 * tags:
 *   - Store Wishlist
 * security:
 *   - api_token: []
 *   - cookie_auth: []
 */
const POST = async (req, res) => {
    const { result } = await workflows_1.createWishlistEntryWorkflow.run({
        container: req.scope,
        input: {
            ...req.validatedBody,
            customer_id: req.auth_context.actor_id,
        },
    });
    const query = req.scope.resolve(utils_1.ContainerRegistrationKeys.QUERY);
    const { data: [wishlist], } = await query.graph({
        entity: "wishlist",
        fields: req.queryConfig.fields,
        filters: {
            id: result.id,
        },
    });
    res.status(201).json({ wishlist });
};
exports.POST = POST;
/**
 * @oas [get] /store/wishlist
 * operationId: "StoreGetMyWishlist"
 * summary: "Get wishlist of the current user"
 * description: "Retrieves the wishlist created by the authenticated user."
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
 * responses:
 *   "200":
 *     description: OK
 *     content:
 *       application/json:
 *         schema:
 *           type: object
 *           properties:
 *             wishlists:
 *               type: array
 *               items:
 *                 $ref: "#/components/schemas/Wishlist"
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
 *   - Store Wishlist
 * security:
 *   - api_token: []
 *   - cookie_auth: []
 */
const GET = async (req, res) => {
    const query = req.scope.resolve(utils_1.ContainerRegistrationKeys.QUERY);
    const { data: wishlists, metadata } = await query.graph({
        entity: customer_wishlist_1.default.entryPoint,
        fields: [
            ...req.queryConfig.fields.map((field) => `wishlist.products.${field}`),
            "wishlist.products.variants.prices.*",
        ],
        filters: {
            customer_id: req.auth_context.actor_id,
        },
        pagination: req.queryConfig.pagination,
    });
    const formattedWithPrices = await (0, utils_2.calculateWishlistProductsPrice)(framework_1.container, wishlists);
    res.json({
        wishlists: formattedWithPrices,
        count: metadata?.count,
        offset: metadata?.skip,
        limit: metadata?.take,
    });
};
exports.GET = GET;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvYXBpL3N0b3JlL3dpc2hsaXN0L3JvdXRlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLG1EQUk2QjtBQUM3QixxREFBc0U7QUFFdEUsMkRBQWlGO0FBRWpGLHlGQUFnRTtBQUNoRSxxRUFBb0Y7QUFHcEY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0E4Q0c7QUFFSSxNQUFNLElBQUksR0FBRyxLQUFLLEVBQ3ZCLEdBQXdELEVBQ3hELEdBQW1CLEVBQ25CLEVBQUU7SUFDRixNQUFNLEVBQUUsTUFBTSxFQUFFLEdBQUcsTUFBTSx1Q0FBMkIsQ0FBQyxHQUFHLENBQUM7UUFDdkQsU0FBUyxFQUFFLEdBQUcsQ0FBQyxLQUFLO1FBQ3BCLEtBQUssRUFBRTtZQUNMLEdBQUcsR0FBRyxDQUFDLGFBQWE7WUFDcEIsV0FBVyxFQUFFLEdBQUcsQ0FBQyxZQUFZLENBQUMsUUFBUTtTQUN2QztLQUNGLENBQUMsQ0FBQztJQUVILE1BQU0sS0FBSyxHQUFHLEdBQUcsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLGlDQUF5QixDQUFDLEtBQUssQ0FBQyxDQUFDO0lBRWpFLE1BQU0sRUFDSixJQUFJLEVBQUUsQ0FBQyxRQUFRLENBQUMsR0FDakIsR0FBRyxNQUFNLEtBQUssQ0FBQyxLQUFLLENBQUM7UUFDcEIsTUFBTSxFQUFFLFVBQVU7UUFDbEIsTUFBTSxFQUFFLEdBQUcsQ0FBQyxXQUFXLENBQUMsTUFBTTtRQUM5QixPQUFPLEVBQUU7WUFDUCxFQUFFLEVBQUUsTUFBTSxDQUFDLEVBQUU7U0FDZDtLQUNGLENBQUMsQ0FBQztJQUVILEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsUUFBUSxFQUFFLENBQUMsQ0FBQztBQUNyQyxDQUFDLENBQUM7QUF6QlcsUUFBQSxJQUFJLFFBeUJmO0FBRUY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQW1ERztBQUVJLE1BQU0sR0FBRyxHQUFHLEtBQUssRUFDdEIsR0FBK0IsRUFDL0IsR0FBbUIsRUFDbkIsRUFBRTtJQUNGLE1BQU0sS0FBSyxHQUFHLEdBQUcsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLGlDQUF5QixDQUFDLEtBQUssQ0FBQyxDQUFDO0lBRWpFLE1BQU0sRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLFFBQVEsRUFBRSxHQUFHLE1BQU0sS0FBSyxDQUFDLEtBQUssQ0FBQztRQUN0RCxNQUFNLEVBQUUsMkJBQWdCLENBQUMsVUFBVTtRQUNuQyxNQUFNLEVBQUU7WUFDTixHQUFHLEdBQUcsQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMscUJBQXFCLEtBQUssRUFBRSxDQUFDO1lBQ3RFLHFDQUFxQztTQUN0QztRQUNELE9BQU8sRUFBRTtZQUNQLFdBQVcsRUFBRSxHQUFHLENBQUMsWUFBWSxDQUFDLFFBQVE7U0FDdkM7UUFDRCxVQUFVLEVBQUUsR0FBRyxDQUFDLFdBQVcsQ0FBQyxVQUFVO0tBQ3ZDLENBQUMsQ0FBQztJQUVILE1BQU0sbUJBQW1CLEdBQUcsTUFBTSxJQUFBLHNDQUE4QixFQUM5RCxxQkFBUyxFQUNULFNBQVMsQ0FDVixDQUFDO0lBRUYsR0FBRyxDQUFDLElBQUksQ0FBQztRQUNQLFNBQVMsRUFBRSxtQkFBbUI7UUFDOUIsS0FBSyxFQUFFLFFBQVEsRUFBRSxLQUFLO1FBQ3RCLE1BQU0sRUFBRSxRQUFRLEVBQUUsSUFBSTtRQUN0QixLQUFLLEVBQUUsUUFBUSxFQUFFLElBQUk7S0FDdEIsQ0FBQyxDQUFDO0FBQ0wsQ0FBQyxDQUFDO0FBN0JXLFFBQUEsR0FBRyxPQTZCZCJ9