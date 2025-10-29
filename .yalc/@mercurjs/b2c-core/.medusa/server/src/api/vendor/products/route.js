"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.POST = exports.GET = void 0;
const utils_1 = require("@medusajs/framework/utils");
const utils_2 = require("../../../shared/infra/http/utils");
const core_flows_1 = require("@medusajs/medusa/core-flows");
const framework_1 = require("@mercurjs/framework");
const utils_3 = require("./utils");
/**
 * @oas [get] /vendor/products
 * operationId: "VendorListProducts"
 * summary: "List Products"
 * description: "Retrieves a list of products for the authenticated vendor."
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
 *   - Vendor Products
 * security:
 *   - api_token: []
 *   - cookie_auth: []
 */
const GET = async (req, res) => {
    const query = req.scope.resolve(utils_1.ContainerRegistrationKeys.QUERY);
    const { productIds, count } = await (0, utils_3.filterProductsBySeller)(req.scope, req.filterableFields.seller_id, req.queryConfig.pagination?.skip || 0, req.queryConfig.pagination?.take || 10, req.filterableFields.sales_channel_id);
    const { data: sellerProducts } = await query.graph({
        entity: "product",
        fields: req.queryConfig.fields,
        filters: {
            id: productIds,
        },
    });
    res.json({
        products: sellerProducts,
        count: count,
        offset: req.queryConfig.pagination?.skip || 0,
        limit: req.queryConfig.pagination?.take || 10,
    });
};
exports.GET = GET;
/**
 * @oas [post] /vendor/products
 * operationId: "VendorCreateProduct"
 * summary: "Create a Product"
 * description: "Creates a new product for the authenticated vendor."
 * x-authenticated: true
 * requestBody:
 *   content:
 *     application/json:
 *       schema:
 *         $ref: "#/components/schemas/VendorCreateProduct"
 * responses:
 *   "201":
 *     description: Created
 *     content:
 *       application/json:
 *         schema:
 *           type: object
 *           properties:
 *             product:
 *               $ref: "#/components/schemas/VendorProduct"
 * tags:
 *   - Vendor Products
 * security:
 *   - api_token: []
 *   - cookie_auth: []
 */
const POST = async (req, res) => {
    const query = req.scope.resolve(utils_1.ContainerRegistrationKeys.QUERY);
    const seller = await (0, utils_2.fetchSellerByAuthActorId)(req.auth_context?.actor_id, req.scope);
    const { additional_data, ...validatedBody } = req.validatedBody;
    const { result: [createdProduct], } = await core_flows_1.createProductsWorkflow.run({
        container: req.scope,
        input: {
            products: [
                {
                    ...validatedBody,
                    status: validatedBody.status === "draft" ? "draft" : "proposed",
                },
            ],
            additional_data: { ...additional_data, seller_id: seller.id },
        },
    });
    const eventBus = req.scope.resolve(utils_1.Modules.EVENT_BUS);
    await eventBus.emit({
        name: framework_1.ProductRequestUpdatedEvent.TO_CREATE,
        data: {
            seller_id: seller.id,
            data: {
                data: {
                    ...createdProduct,
                    product_id: createdProduct.id,
                },
                submitter_id: req.auth_context.actor_id,
                type: "product",
                status: createdProduct.status === "draft" ? "draft" : "pending",
            },
        },
    });
    const product_id = createdProduct.id;
    const { data: [product], } = await query.graph({
        entity: "product",
        fields: req.queryConfig.fields,
        filters: { id: product_id },
    }, { throwIfKeyNotFound: true });
    res.status(201).json({ product });
};
exports.POST = POST;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvYXBpL3ZlbmRvci9wcm9kdWN0cy9yb3V0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFLQSxxREFBK0U7QUFFL0UsNERBQTRFO0FBSzVFLDREQUFxRTtBQUNyRSxtREFBaUU7QUFDakUsbUNBQWlEO0FBRWpEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0F5REc7QUFDSSxNQUFNLEdBQUcsR0FBRyxLQUFLLEVBQ3RCLEdBQThDLEVBQzlDLEdBQW1CLEVBQ25CLEVBQUU7SUFDRixNQUFNLEtBQUssR0FBRyxHQUFHLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxpQ0FBeUIsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUVqRSxNQUFNLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxHQUFHLE1BQU0sSUFBQSw4QkFBc0IsRUFDeEQsR0FBRyxDQUFDLEtBQUssRUFDVCxHQUFHLENBQUMsZ0JBQWdCLENBQUMsU0FBbUIsRUFDeEMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxVQUFVLEVBQUUsSUFBSSxJQUFJLENBQUMsRUFDckMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxVQUFVLEVBQUUsSUFBSSxJQUFJLEVBQUUsRUFDdEMsR0FBRyxDQUFDLGdCQUFnQixDQUFDLGdCQUEwQixDQUNoRCxDQUFDO0lBRUYsTUFBTSxFQUFFLElBQUksRUFBRSxjQUFjLEVBQUUsR0FBRyxNQUFNLEtBQUssQ0FBQyxLQUFLLENBQUM7UUFDakQsTUFBTSxFQUFFLFNBQVM7UUFDakIsTUFBTSxFQUFFLEdBQUcsQ0FBQyxXQUFXLENBQUMsTUFBTTtRQUM5QixPQUFPLEVBQUU7WUFDUCxFQUFFLEVBQUUsVUFBVTtTQUNmO0tBQ0YsQ0FBQyxDQUFDO0lBRUgsR0FBRyxDQUFDLElBQUksQ0FBQztRQUNQLFFBQVEsRUFBRSxjQUFjO1FBQ3hCLEtBQUssRUFBRSxLQUFLO1FBQ1osTUFBTSxFQUFFLEdBQUcsQ0FBQyxXQUFXLENBQUMsVUFBVSxFQUFFLElBQUksSUFBSSxDQUFDO1FBQzdDLEtBQUssRUFBRSxHQUFHLENBQUMsV0FBVyxDQUFDLFVBQVUsRUFBRSxJQUFJLElBQUksRUFBRTtLQUM5QyxDQUFDLENBQUM7QUFDTCxDQUFDLENBQUM7QUE1QlcsUUFBQSxHQUFHLE9BNEJkO0FBRUY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBMEJHO0FBQ0ksTUFBTSxJQUFJLEdBQUcsS0FBSyxFQUN2QixHQUF3RCxFQUN4RCxHQUFtQixFQUNuQixFQUFFO0lBQ0YsTUFBTSxLQUFLLEdBQUcsR0FBRyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsaUNBQXlCLENBQUMsS0FBSyxDQUFDLENBQUM7SUFFakUsTUFBTSxNQUFNLEdBQUcsTUFBTSxJQUFBLGdDQUF3QixFQUMzQyxHQUFHLENBQUMsWUFBWSxFQUFFLFFBQVEsRUFDMUIsR0FBRyxDQUFDLEtBQUssQ0FDVixDQUFDO0lBRUYsTUFBTSxFQUFFLGVBQWUsRUFBRSxHQUFHLGFBQWEsRUFBRSxHQUFHLEdBQUcsQ0FBQyxhQUFhLENBQUM7SUFFaEUsTUFBTSxFQUNKLE1BQU0sRUFBRSxDQUFDLGNBQWMsQ0FBQyxHQUN6QixHQUFHLE1BQU0sbUNBQXNCLENBQUMsR0FBRyxDQUFDO1FBQ25DLFNBQVMsRUFBRSxHQUFHLENBQUMsS0FBSztRQUNwQixLQUFLLEVBQUU7WUFDTCxRQUFRLEVBQUU7Z0JBQ1I7b0JBQ0UsR0FBRyxhQUFhO29CQUNoQixNQUFNLEVBQUUsYUFBYSxDQUFDLE1BQU0sS0FBSyxPQUFPLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsVUFBVTtpQkFDaEU7YUFDRjtZQUNELGVBQWUsRUFBRSxFQUFFLEdBQUcsZUFBZSxFQUFFLFNBQVMsRUFBRSxNQUFNLENBQUMsRUFBRSxFQUFFO1NBQzlEO0tBQ0YsQ0FBQyxDQUFDO0lBRUgsTUFBTSxRQUFRLEdBQUcsR0FBRyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsZUFBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQ3RELE1BQU0sUUFBUSxDQUFDLElBQUksQ0FBQztRQUNsQixJQUFJLEVBQUUsc0NBQTBCLENBQUMsU0FBUztRQUMxQyxJQUFJLEVBQUU7WUFDSixTQUFTLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDcEIsSUFBSSxFQUFFO2dCQUNKLElBQUksRUFBRTtvQkFDSixHQUFHLGNBQWM7b0JBQ2pCLFVBQVUsRUFBRSxjQUFjLENBQUMsRUFBRTtpQkFDOUI7Z0JBQ0QsWUFBWSxFQUFFLEdBQUcsQ0FBQyxZQUFZLENBQUMsUUFBUTtnQkFDdkMsSUFBSSxFQUFFLFNBQVM7Z0JBQ2YsTUFBTSxFQUFFLGNBQWMsQ0FBQyxNQUFNLEtBQUssT0FBTyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLFNBQVM7YUFDaEU7U0FDRjtLQUNGLENBQUMsQ0FBQztJQUVILE1BQU0sVUFBVSxHQUFHLGNBQWMsQ0FBQyxFQUFFLENBQUM7SUFFckMsTUFBTSxFQUNKLElBQUksRUFBRSxDQUFDLE9BQU8sQ0FBQyxHQUNoQixHQUFHLE1BQU0sS0FBSyxDQUFDLEtBQUssQ0FDbkI7UUFDRSxNQUFNLEVBQUUsU0FBUztRQUNqQixNQUFNLEVBQUUsR0FBRyxDQUFDLFdBQVcsQ0FBQyxNQUFNO1FBQzlCLE9BQU8sRUFBRSxFQUFFLEVBQUUsRUFBRSxVQUFVLEVBQUU7S0FDNUIsRUFDRCxFQUFFLGtCQUFrQixFQUFFLElBQUksRUFBRSxDQUM3QixDQUFDO0lBRUYsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxPQUFPLEVBQUUsQ0FBQyxDQUFDO0FBQ3BDLENBQUMsQ0FBQztBQTNEVyxRQUFBLElBQUksUUEyRGYifQ==