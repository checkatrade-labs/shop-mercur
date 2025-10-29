"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.POST = void 0;
const utils_1 = require("@medusajs/framework/utils");
const core_flows_1 = require("@medusajs/medusa/core-flows");
const utils_2 = require("../../../../../shared/infra/http/utils");
const products_1 = require("../../../../../shared/infra/http/utils/products");
const framework_1 = require("@mercurjs/framework");
/**
 * @oas [post] /vendor/products/{id}/options
 * operationId: "VendorCreateOptionForProductById"
 * summary: "Create option for product"
 * description: "Creates option for product."
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
 *         $ref: "#/components/schemas/CreateProductOption"
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
    await (0, core_flows_1.createProductOptionsWorkflow)(req.scope).run({
        input: {
            product_options: [
                {
                    ...req.validatedBody,
                    product_id: productId,
                },
            ],
        },
    });
    const productDetails = await (0, products_1.fetchProductDetails)(req.params.id, req.scope);
    if (!["draft", "proposed"].includes(productDetails.status)) {
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
    const { data: [product], } = await query.graph({
        entity: "product",
        fields: req.queryConfig.fields,
        filters: { id: req.params.id },
    }, { throwIfKeyNotFound: true });
    res.json({ product });
};
exports.POST = POST;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvYXBpL3ZlbmRvci9wcm9kdWN0cy9baWRdL29wdGlvbnMvcm91dGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBSUEscURBQStFO0FBQy9FLDREQUEyRTtBQUUzRSxrRUFBa0Y7QUFDbEYsOEVBQXNGO0FBRXRGLG1EQUF1RTtBQUV2RTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBdUNHO0FBQ0ksTUFBTSxJQUFJLEdBQUcsS0FBSyxFQUN2QixHQUF3RCxFQUN4RCxHQUFtQixFQUNuQixFQUFFO0lBQ0YsTUFBTSxLQUFLLEdBQUcsR0FBRyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsaUNBQXlCLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDakUsTUFBTSxTQUFTLEdBQUcsR0FBRyxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUM7SUFFaEMsTUFBTSxJQUFBLHlDQUE0QixFQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUM7UUFDaEQsS0FBSyxFQUFFO1lBQ0wsZUFBZSxFQUFFO2dCQUNmO29CQUNFLEdBQUcsR0FBRyxDQUFDLGFBQWE7b0JBQ3BCLFVBQVUsRUFBRSxTQUFTO2lCQUN0QjthQUNGO1NBQ0Y7S0FDRixDQUFDLENBQUM7SUFFSCxNQUFNLGNBQWMsR0FBRyxNQUFNLElBQUEsOEJBQW1CLEVBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUUsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzNFLElBQUksQ0FBQyxDQUFDLE9BQU8sRUFBRSxVQUFVLENBQUMsQ0FBQyxRQUFRLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUM7UUFDM0QsTUFBTSxNQUFNLEdBQUcsTUFBTSxJQUFBLGdDQUF3QixFQUMzQyxHQUFHLENBQUMsWUFBWSxDQUFDLFFBQVEsRUFDekIsR0FBRyxDQUFDLEtBQUssQ0FDVixDQUFDO1FBQ0YsTUFBTSxRQUFRLEdBQUcsR0FBRyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsZUFBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ3RELE1BQU0sUUFBUSxDQUFDLElBQUksQ0FBQztZQUNsQixJQUFJLEVBQUUsNENBQWdDLENBQUMsU0FBUztZQUNoRCxJQUFJLEVBQUU7Z0JBQ0osSUFBSSxFQUFFO29CQUNKLElBQUksRUFBRSxFQUFFLFVBQVUsRUFBRSxHQUFHLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFBRSxLQUFLLEVBQUUsY0FBYyxDQUFDLEtBQUssRUFBRTtvQkFDaEUsWUFBWSxFQUFFLEdBQUcsQ0FBQyxZQUFZLENBQUMsUUFBUTtvQkFDdkMsSUFBSSxFQUFFLGdCQUFnQjtpQkFDdkI7Z0JBQ0QsU0FBUyxFQUFFLE1BQU0sQ0FBQyxFQUFFO2FBQ3JCO1NBQ0YsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELE1BQU0sRUFDSixJQUFJLEVBQUUsQ0FBQyxPQUFPLENBQUMsR0FDaEIsR0FBRyxNQUFNLEtBQUssQ0FBQyxLQUFLLENBQ25CO1FBQ0UsTUFBTSxFQUFFLFNBQVM7UUFDakIsTUFBTSxFQUFFLEdBQUcsQ0FBQyxXQUFXLENBQUMsTUFBTTtRQUM5QixPQUFPLEVBQUUsRUFBRSxFQUFFLEVBQUUsR0FBRyxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUU7S0FDL0IsRUFDRCxFQUFFLGtCQUFrQixFQUFFLElBQUksRUFBRSxDQUM3QixDQUFDO0lBRUYsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFLE9BQU8sRUFBRSxDQUFDLENBQUM7QUFDeEIsQ0FBQyxDQUFDO0FBbERXLFFBQUEsSUFBSSxRQWtEZiJ9