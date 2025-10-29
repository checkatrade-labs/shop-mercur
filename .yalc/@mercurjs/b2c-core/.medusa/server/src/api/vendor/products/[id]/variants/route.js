"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.POST = void 0;
const utils_1 = require("@medusajs/framework/utils");
const core_flows_1 = require("@medusajs/medusa/core-flows");
const utils_2 = require("../../../../../shared/infra/http/utils");
const products_1 = require("../../../../../shared/infra/http/utils/products");
const framework_1 = require("@mercurjs/framework");
/**
 * @oas [post] /vendor/products/{id}/variants
 * operationId: "VendorCreateVariantForProductById"
 * summary: "Create variant for product"
 * description: "Creates variant for product."
 * x-authenticated: true
 * parameters:
 *   - in: path
 *     name: id
 *     required: true
 *     description: The ID of the Product.
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
 *         $ref: "#/components/schemas/CreateProductVariant"
 * responses:
 *   "200":
 *     description: OK
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
    const seller = await (0, utils_2.fetchSellerByAuthActorId)(req.auth_context.actor_id, req.scope);
    await core_flows_1.createProductVariantsWorkflow.run({
        container: req.scope,
        input: {
            product_variants: [
                {
                    ...req.validatedBody,
                    product_id: req.params.id,
                },
            ],
            additional_data: {
                seller_id: seller.id,
            },
        },
    });
    const productDetails = await (0, products_1.fetchProductDetails)(req.params.id, req.scope);
    if (!["draft", "proposed"].includes(productDetails.status)) {
        const eventBus = req.scope.resolve(utils_1.Modules.EVENT_BUS);
        await eventBus.emit({
            name: framework_1.ProductUpdateRequestUpdatedEvent.TO_CREATE,
            data: {
                data: {
                    data: { product_id: req.params.id, title: productDetails.title },
                    submitter_id: req.auth_context.actor_id,
                    type: "product_update",
                },
                seller_id: seller.id,
            },
        });
    }
    const { data: [product], } = await query.graph({
        entity: "product",
        fields: req.queryConfig.fields,
        filters: { id: req.params.id },
    }, { throwIfKeyNotFound: true });
    res.json({ product });
};
exports.POST = POST;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvYXBpL3ZlbmRvci9wcm9kdWN0cy9baWRdL3ZhcmlhbnRzL3JvdXRlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUlBLHFEQUErRTtBQUMvRSw0REFBNEU7QUFFNUUsa0VBQWtGO0FBQ2xGLDhFQUFzRjtBQUV0RixtREFBdUU7QUFFdkU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQXVDRztBQUNJLE1BQU0sSUFBSSxHQUFHLEtBQUssRUFDdkIsR0FBeUQsRUFDekQsR0FBbUIsRUFDbkIsRUFBRTtJQUNGLE1BQU0sS0FBSyxHQUFHLEdBQUcsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLGlDQUF5QixDQUFDLEtBQUssQ0FBQyxDQUFDO0lBRWpFLE1BQU0sTUFBTSxHQUFHLE1BQU0sSUFBQSxnQ0FBd0IsRUFDM0MsR0FBRyxDQUFDLFlBQVksQ0FBQyxRQUFRLEVBQ3pCLEdBQUcsQ0FBQyxLQUFLLENBQ1YsQ0FBQztJQUVGLE1BQU0sMENBQTZCLENBQUMsR0FBRyxDQUFDO1FBQ3RDLFNBQVMsRUFBRSxHQUFHLENBQUMsS0FBSztRQUNwQixLQUFLLEVBQUU7WUFDTCxnQkFBZ0IsRUFBRTtnQkFDaEI7b0JBQ0UsR0FBRyxHQUFHLENBQUMsYUFBYTtvQkFDcEIsVUFBVSxFQUFFLEdBQUcsQ0FBQyxNQUFNLENBQUMsRUFBRTtpQkFDMUI7YUFDRjtZQUNELGVBQWUsRUFBRTtnQkFDZixTQUFTLEVBQUUsTUFBTSxDQUFDLEVBQUU7YUFDckI7U0FDRjtLQUNGLENBQUMsQ0FBQztJQUVILE1BQU0sY0FBYyxHQUFHLE1BQU0sSUFBQSw4QkFBbUIsRUFBQyxHQUFHLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFBRSxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDM0UsSUFBSSxDQUFDLENBQUMsT0FBTyxFQUFFLFVBQVUsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQztRQUMzRCxNQUFNLFFBQVEsR0FBRyxHQUFHLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxlQUFPLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDdEQsTUFBTSxRQUFRLENBQUMsSUFBSSxDQUFDO1lBQ2xCLElBQUksRUFBRSw0Q0FBZ0MsQ0FBQyxTQUFTO1lBQ2hELElBQUksRUFBRTtnQkFDSixJQUFJLEVBQUU7b0JBQ0osSUFBSSxFQUFFLEVBQUUsVUFBVSxFQUFFLEdBQUcsQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFLEtBQUssRUFBRSxjQUFjLENBQUMsS0FBSyxFQUFFO29CQUNoRSxZQUFZLEVBQUUsR0FBRyxDQUFDLFlBQVksQ0FBQyxRQUFRO29CQUN2QyxJQUFJLEVBQUUsZ0JBQWdCO2lCQUN2QjtnQkFDRCxTQUFTLEVBQUUsTUFBTSxDQUFDLEVBQUU7YUFDckI7U0FDRixDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsTUFBTSxFQUNKLElBQUksRUFBRSxDQUFDLE9BQU8sQ0FBQyxHQUNoQixHQUFHLE1BQU0sS0FBSyxDQUFDLEtBQUssQ0FDbkI7UUFDRSxNQUFNLEVBQUUsU0FBUztRQUNqQixNQUFNLEVBQUUsR0FBRyxDQUFDLFdBQVcsQ0FBQyxNQUFNO1FBQzlCLE9BQU8sRUFBRSxFQUFFLEVBQUUsRUFBRSxHQUFHLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFBRTtLQUMvQixFQUNELEVBQUUsa0JBQWtCLEVBQUUsSUFBSSxFQUFFLENBQzdCLENBQUM7SUFFRixHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUUsT0FBTyxFQUFFLENBQUMsQ0FBQztBQUN4QixDQUFDLENBQUM7QUF0RFcsUUFBQSxJQUFJLFFBc0RmIn0=