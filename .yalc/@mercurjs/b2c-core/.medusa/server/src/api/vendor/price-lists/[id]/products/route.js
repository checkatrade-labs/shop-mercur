"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.POST = exports.GET = void 0;
const utils_1 = require("@medusajs/framework/utils");
const helpers_1 = require("@medusajs/medusa/api/admin/price-lists/helpers");
const workflows_1 = require("../../../../../workflows/price-list/workflows");
/**
 * @oas [get] /vendor/price-lists/{id}/products
 * operationId: "VendorListProductsInPriceList"
 * summary: "List Products in a given price list"
 * description: "Retrieves a list of products in the given price list."
 * x-authenticated: true
 * parameters:
 *   - in: path
 *     name: id
 *     required: true
 *     description: The ID of the price list.
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
 *             products:
 *               type: array
 *               items:
 *                 $ref: "#/components/schemas/VendorProduct"
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
    const { id } = req.params;
    const { data: [priceList] } = await query.graph({
        entity: 'price_list',
        fields: ['prices.price_set.variant.id'],
        filters: {
            id
        }
    });
    const variantIds = [];
    priceList.prices?.forEach((price) => {
        const variantId = price.price_set?.variant?.id;
        if (variantId) {
            variantIds.push(variantId);
        }
    });
    const { data: products, metadata } = await query.graph({
        entity: 'product',
        fields: req.queryConfig.fields,
        filters: {
            variants: {
                id: variantIds
            }
        },
        pagination: req.queryConfig.pagination
    });
    res.json({
        products,
        count: metadata?.count,
        offset: metadata?.skip,
        limit: metadata?.take
    });
};
exports.GET = GET;
/**
 * @oas [post] /vendor/price-lists/{id}/products
 * operationId: "VendorRemoveProductsFromPriceList"
 * summary: "Update price list"
 * description: "Updates price list price"
 * x-authenticated: true
 * parameters:
 *   - in: path
 *     name: id
 *     required: true
 *     description: The ID of the price list.
 *     schema:
 *       type: string
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
 *         $ref: "#/components/schemas/VendorRemoveProductsFromPriceList"
 * responses:
 *   "200":
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
    const query = req.scope.resolve(utils_1.ContainerRegistrationKeys.QUERY);
    const { id } = req.params;
    const { remove = [], create = [], update = [] } = req.validatedBody;
    const productPriceIds = await (0, helpers_1.fetchPriceListPriceIdsForProduct)(id, remove, req.scope);
    await workflows_1.batchVendorPriceListPricesWorkflow.run({
        container: req.scope,
        input: {
            id,
            create,
            update,
            delete: productPriceIds
        }
    });
    const { data: [price_list] } = await query.graph({
        entity: 'price_list',
        fields: req.queryConfig.fields,
        filters: {
            id: req.params.id
        }
    });
    res.json({ price_list });
};
exports.POST = POST;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvYXBpL3ZlbmRvci9wcmljZS1saXN0cy9baWRdL3Byb2R1Y3RzL3JvdXRlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUNBLHFEQUFxRTtBQUNyRSw0RUFBaUc7QUFFakcsNkVBQWtHO0FBR2xHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0F5REc7QUFDSSxNQUFNLEdBQUcsR0FBRyxLQUFLLEVBQ3RCLEdBQStCLEVBQy9CLEdBQW1CLEVBQ25CLEVBQUU7SUFDRixNQUFNLEtBQUssR0FBRyxHQUFHLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxpQ0FBeUIsQ0FBQyxLQUFLLENBQUMsQ0FBQTtJQUVoRSxNQUFNLEVBQUUsRUFBRSxFQUFFLEdBQUcsR0FBRyxDQUFDLE1BQU0sQ0FBQTtJQUN6QixNQUFNLEVBQ0osSUFBSSxFQUFFLENBQUMsU0FBUyxDQUFDLEVBQ2xCLEdBQUcsTUFBTSxLQUFLLENBQUMsS0FBSyxDQUFDO1FBQ3BCLE1BQU0sRUFBRSxZQUFZO1FBQ3BCLE1BQU0sRUFBRSxDQUFDLDZCQUE2QixDQUFDO1FBQ3ZDLE9BQU8sRUFBRTtZQUNQLEVBQUU7U0FDSDtLQUNGLENBQUMsQ0FBQTtJQUVGLE1BQU0sVUFBVSxHQUFhLEVBQUUsQ0FBQTtJQUUvQixTQUFTLENBQUMsTUFBTSxFQUFFLE9BQU8sQ0FBQyxDQUFDLEtBQUssRUFBRSxFQUFFO1FBQ2xDLE1BQU0sU0FBUyxHQUFHLEtBQUssQ0FBQyxTQUFTLEVBQUUsT0FBTyxFQUFFLEVBQUUsQ0FBQTtRQUU5QyxJQUFJLFNBQVMsRUFBRSxDQUFDO1lBQ2QsVUFBVSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQTtRQUM1QixDQUFDO0lBQ0gsQ0FBQyxDQUFDLENBQUE7SUFFRixNQUFNLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsR0FBRyxNQUFNLEtBQUssQ0FBQyxLQUFLLENBQUM7UUFDckQsTUFBTSxFQUFFLFNBQVM7UUFDakIsTUFBTSxFQUFFLEdBQUcsQ0FBQyxXQUFXLENBQUMsTUFBTTtRQUM5QixPQUFPLEVBQUU7WUFDUCxRQUFRLEVBQUU7Z0JBQ1IsRUFBRSxFQUFFLFVBQVU7YUFDZjtTQUNGO1FBQ0QsVUFBVSxFQUFFLEdBQUcsQ0FBQyxXQUFXLENBQUMsVUFBVTtLQUN2QyxDQUFDLENBQUE7SUFFRixHQUFHLENBQUMsSUFBSSxDQUFDO1FBQ1AsUUFBUTtRQUNSLEtBQUssRUFBRSxRQUFRLEVBQUUsS0FBSztRQUN0QixNQUFNLEVBQUUsUUFBUSxFQUFFLElBQUk7UUFDdEIsS0FBSyxFQUFFLFFBQVEsRUFBRSxJQUFJO0tBQ3RCLENBQUMsQ0FBQTtBQUNKLENBQUMsQ0FBQTtBQTVDWSxRQUFBLEdBQUcsT0E0Q2Y7QUFFRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBdUNHO0FBQ0ksTUFBTSxJQUFJLEdBQUcsS0FBSyxFQUN2QixHQUFvRSxFQUNwRSxHQUFtQixFQUNuQixFQUFFO0lBQ0YsTUFBTSxLQUFLLEdBQUcsR0FBRyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsaUNBQXlCLENBQUMsS0FBSyxDQUFDLENBQUE7SUFDaEUsTUFBTSxFQUFFLEVBQUUsRUFBRSxHQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUE7SUFDekIsTUFBTSxFQUFFLE1BQU0sR0FBRyxFQUFFLEVBQUUsTUFBTSxHQUFHLEVBQUUsRUFBRSxNQUFNLEdBQUcsRUFBRSxFQUFFLEdBQUcsR0FBRyxDQUFDLGFBQWEsQ0FBQTtJQUVuRSxNQUFNLGVBQWUsR0FBRyxNQUFNLElBQUEsMENBQWdDLEVBQzVELEVBQUUsRUFDRixNQUFNLEVBQ04sR0FBRyxDQUFDLEtBQUssQ0FDVixDQUFBO0lBRUQsTUFBTSw4Q0FBa0MsQ0FBQyxHQUFHLENBQUM7UUFDM0MsU0FBUyxFQUFFLEdBQUcsQ0FBQyxLQUFLO1FBQ3BCLEtBQUssRUFBRTtZQUNMLEVBQUU7WUFDRixNQUFNO1lBQ04sTUFBTTtZQUNOLE1BQU0sRUFBRSxlQUFlO1NBQ3hCO0tBQ0YsQ0FBQyxDQUFBO0lBRUYsTUFBTSxFQUNKLElBQUksRUFBRSxDQUFDLFVBQVUsQ0FBQyxFQUNuQixHQUFHLE1BQU0sS0FBSyxDQUFDLEtBQUssQ0FBQztRQUNwQixNQUFNLEVBQUUsWUFBWTtRQUNwQixNQUFNLEVBQUUsR0FBRyxDQUFDLFdBQVcsQ0FBQyxNQUFNO1FBQzlCLE9BQU8sRUFBRTtZQUNQLEVBQUUsRUFBRSxHQUFHLENBQUMsTUFBTSxDQUFDLEVBQUU7U0FDbEI7S0FDRixDQUFDLENBQUE7SUFFRixHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUUsVUFBVSxFQUFFLENBQUMsQ0FBQTtBQUMxQixDQUFDLENBQUE7QUFuQ1ksUUFBQSxJQUFJLFFBbUNoQiJ9