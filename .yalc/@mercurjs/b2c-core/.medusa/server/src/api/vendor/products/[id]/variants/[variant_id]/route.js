"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.POST = exports.DELETE = void 0;
const utils_1 = require("@medusajs/framework/utils");
const core_flows_1 = require("@medusajs/medusa/core-flows");
const utils_2 = require("../../../../../../shared/infra/http/utils");
const products_1 = require("../../../../../../shared/infra/http/utils/products");
const framework_1 = require("@mercurjs/framework");
/**
 * @oas [delete] /vendor/products/{id}/variants/{variant_id}
 * operationId: "VendorDeleteProductVariantById"
 * summary: "Delete a Product variant"
 * description: "Deletes a product variant by id for the authenticated vendor."
 * x-authenticated: true
 * parameters:
 *   - in: path
 *     name: id
 *     required: true
 *     description: The ID of the Product.
 *     schema:
 *       type: string
 *   - in: path
 *     name: variant_id
 *     required: true
 *     description: The ID of the Variant.
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
 *             id:
 *               type: string
 *               description: The ID of the deleted Product variant
 *             object:
 *               type: string
 *               description: The type of the object that was deleted
 *             deleted:
 *               type: boolean
 *               description: Whether or not the items were deleted
 * tags:
 *   - Vendor Products
 * security:
 *   - api_token: []
 *   - cookie_auth: []
 */
const DELETE = async (req, res) => {
    const productId = req.params.id;
    const variantId = req.params.variant_id;
    const query = req.scope.resolve(utils_1.ContainerRegistrationKeys.QUERY);
    const { data: [variant], } = await query.graph({
        entity: "product_variant",
        fields: ["product_id"],
        filters: {
            id: variantId,
        },
    });
    if (productId !== variant.product_id) {
        throw new utils_1.MedusaError(utils_1.MedusaError.Types.INVALID_DATA, "Invalid product variant id!");
    }
    await (0, core_flows_1.deleteProductVariantsWorkflow)(req.scope).run({
        input: { ids: [variantId] },
    });
    res.json({
        id: variantId,
        object: "variant",
        deleted: true,
    });
};
exports.DELETE = DELETE;
/**
 * @oas [post] /vendor/products/{id}/variants/{variant_id}
 * operationId: "VendorUpdateProductVariantById"
 * summary: "Update a Product variant"
 * description: "Updates an existing product variant for the authenticated vendor."
 * x-authenticated: true
 * parameters:
 *   - in: path
 *     name: id
 *     required: true
 *     description: The ID of the Product.
 *     schema:
 *       type: string
 *   - in: path
 *     name: variant_id
 *     required: true
 *     description: The ID of the Variant.
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
 *         $ref: "#/components/schemas/UpdateProductVariant"
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
    const productId = req.params.id;
    const variantId = req.params.variant_id;
    const productDetails = await (0, products_1.fetchProductDetails)(productId, req.scope);
    await core_flows_1.updateProductVariantsWorkflow.run({
        container: req.scope,
        input: {
            update: req.validatedBody,
            selector: { id: variantId, product_id: productId },
        },
    });
    if (!["draft", "proposed"].includes(productDetails.status)) {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const { prices, ...rest } = req.validatedBody;
        // Check if there are other changes than prices
        if (rest) {
            const seller = await (0, utils_2.fetchSellerByAuthActorId)(req.auth_context.actor_id, req.scope);
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
    }
    const { data: [product], } = await query.graph({
        entity: "product",
        fields: req.queryConfig.fields,
        filters: { id: productId },
    }, { throwIfKeyNotFound: true });
    res.json({ product });
};
exports.POST = POST;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvYXBpL3ZlbmRvci9wcm9kdWN0cy9baWRdL3ZhcmlhbnRzL1t2YXJpYW50X2lkXS9yb3V0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFJQSxxREFJbUM7QUFDbkMsNERBR3FDO0FBRXJDLHFFQUFxRjtBQUNyRixpRkFBeUY7QUFFekYsbURBQXVFO0FBRXZFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQXlDRztBQUNJLE1BQU0sTUFBTSxHQUFHLEtBQUssRUFDekIsR0FBK0IsRUFDL0IsR0FBbUIsRUFDbkIsRUFBRTtJQUNGLE1BQU0sU0FBUyxHQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDO0lBQ2hDLE1BQU0sU0FBUyxHQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDO0lBRXhDLE1BQU0sS0FBSyxHQUFHLEdBQUcsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLGlDQUF5QixDQUFDLEtBQUssQ0FBQyxDQUFDO0lBRWpFLE1BQU0sRUFDSixJQUFJLEVBQUUsQ0FBQyxPQUFPLENBQUMsR0FDaEIsR0FBRyxNQUFNLEtBQUssQ0FBQyxLQUFLLENBQUM7UUFDcEIsTUFBTSxFQUFFLGlCQUFpQjtRQUN6QixNQUFNLEVBQUUsQ0FBQyxZQUFZLENBQUM7UUFDdEIsT0FBTyxFQUFFO1lBQ1AsRUFBRSxFQUFFLFNBQVM7U0FDZDtLQUNGLENBQUMsQ0FBQztJQUVILElBQUksU0FBUyxLQUFLLE9BQU8sQ0FBQyxVQUFVLEVBQUUsQ0FBQztRQUNyQyxNQUFNLElBQUksbUJBQVcsQ0FDbkIsbUJBQVcsQ0FBQyxLQUFLLENBQUMsWUFBWSxFQUM5Qiw2QkFBNkIsQ0FDOUIsQ0FBQztJQUNKLENBQUM7SUFFRCxNQUFNLElBQUEsMENBQTZCLEVBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFD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