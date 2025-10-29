"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GET = void 0;
const framework_1 = require("@medusajs/framework");
/**
 * @oas [get] /vendor/product-tags
 * operationId: "VendorListProductTags"
 * summary: "List product tags"
 * description: "Retrieves a list of product tags."
 * x-authenticated: true
 * parameters:
 *   - in: query
 *     name: fields
 *     description: The comma-separated fields to include in the response
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
 * responses:
 *   "200":
 *     description: OK
 *     content:
 *       application/json:
 *         schema:
 *           type: object
 *           properties:
 *             product_tags:
 *               type: array
 *               items:
 *                 $ref: "#/components/schemas/VendorProductTag"
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
 *   - Vendor Product Tags
 * security:
 *   - api_token: []
 *   - cookie_auth: []
 */
const GET = async (req, res) => {
    const { rows: product_tags, metadata } = await (0, framework_1.refetchEntities)('product_tag', req.filterableFields, req.scope, req.queryConfig.fields, req.queryConfig.pagination);
    res.json({
        product_tags,
        count: metadata?.count,
        offset: metadata?.skip,
        limit: metadata?.take
    });
};
exports.GET = GET;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvYXBpL3ZlbmRvci9wcm9kdWN0LXRhZ3Mvcm91dGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsbURBSTRCO0FBRTVCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQWtERztBQUNJLE1BQU0sR0FBRyxHQUFHLEtBQUssRUFDdEIsR0FBK0IsRUFDL0IsR0FBbUIsRUFDbkIsRUFBRTtJQUNGLE1BQU0sRUFBRSxJQUFJLEVBQUUsWUFBWSxFQUFFLFFBQVEsRUFBRSxHQUFHLE1BQU0sSUFBQSwyQkFBZSxFQUM1RCxhQUFhLEVBQ2IsR0FBRyxDQUFDLGdCQUFnQixFQUNwQixHQUFHLENBQUMsS0FBSyxFQUNULEdBQUcsQ0FBQyxXQUFXLENBQUMsTUFBTSxFQUN0QixHQUFHLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FDM0IsQ0FBQTtJQUVELEdBQUcsQ0FBQyxJQUFJLENBQUM7UUFDUCxZQUFZO1FBQ1osS0FBSyxFQUFFLFFBQVEsRUFBRSxLQUFLO1FBQ3RCLE1BQU0sRUFBRSxRQUFRLEVBQUUsSUFBSTtRQUN0QixLQUFLLEVBQUUsUUFBUSxFQUFFLElBQUk7S0FDdEIsQ0FBQyxDQUFBO0FBQ0osQ0FBQyxDQUFBO0FBbEJZLFFBQUEsR0FBRyxPQWtCZiJ9