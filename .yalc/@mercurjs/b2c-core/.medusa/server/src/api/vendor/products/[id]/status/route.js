"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.POST = void 0;
const utils_1 = require("@medusajs/framework/utils");
const core_flows_1 = require("@medusajs/medusa/core-flows");
const framework_1 = require("@mercurjs/framework");
const configuration_1 = require("../../../../../modules/configuration");
/**
 * @oas [post] /vendor/products/{id}/status
 * operationId: "VendorUpdateProductStatusById"
 * summary: "Update a Product status"
 * description: "Updates an existing product status for the authenticated vendor."
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
 *         $ref: "#/components/schemas/VendorUpdateProductStatus"
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
    const configuration = req.scope.resolve(configuration_1.CONFIGURATION_MODULE);
    if (!["proposed", "draft"].includes(req.validatedBody.status) &&
        (await configuration.isRuleEnabled(framework_1.ConfigurationRuleType.REQUIRE_PRODUCT_APPROVAL))) {
        throw new utils_1.MedusaError(utils_1.MedusaError.Types.NOT_ALLOWED, "This feature is disabled!");
    }
    const { result } = await (0, core_flows_1.updateProductsWorkflow)(req.scope).run({
        input: {
            update: req.validatedBody,
            selector: { id: req.params.id },
        },
    });
    const { data: [product], } = await query.graph({
        entity: "product",
        fields: req.queryConfig.fields,
        filters: { id: result[0].id },
    }, { throwIfKeyNotFound: true });
    res.json({ product });
};
exports.POST = POST;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvYXBpL3ZlbmRvci9wcm9kdWN0cy9baWRdL3N0YXR1cy9yb3V0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFJQSxxREFHbUM7QUFDbkMsNERBQXFFO0FBRXJFLG1EQUE0RDtBQUM1RCx3RUFHOEM7QUFJOUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQXVDRztBQUNJLE1BQU0sSUFBSSxHQUFHLEtBQUssRUFDdkIsR0FBOEQsRUFDOUQsR0FBbUIsRUFDbkIsRUFBRTtJQUNGLE1BQU0sS0FBSyxHQUFHLEdBQUcsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLGlDQUF5QixDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ2pFLE1BQU0sYUFBYSxHQUNqQixHQUFHLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBNkIsb0NBQW9CLENBQUMsQ0FBQztJQUV0RSxJQUNFLENBQUMsQ0FBQyxVQUFVLEVBQUUsT0FBTyxDQUFDLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDO1FBQ3pELENBQUMsTUFBTSxhQUFhLENBQUMsYUFBYSxDQUNoQyxpQ0FBcUIsQ0FBQyx3QkFBd0IsQ0FDL0MsQ0FBQyxFQUNGLENBQUM7UUFDRCxNQUFNLElBQUksbUJBQVcsQ0FDbkIsbUJBQVcsQ0FBQyxLQUFLLENBQUMsV0FBVyxFQUM3QiwyQkFBMkIsQ0FDNUIsQ0FBQztJQUNKLENBQUM7SUFFRCxNQUFNLEVBQUUsTUFBTSxFQUFFLEdBQUcsTUFBTSxJQUFBLG1DQUFzQixFQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUM7UUFDN0QsS0FBSyxFQUFFO1lBQ0wsTUFBTSxFQUFFLEdBQUcsQ0FBQyxhQUFhO1lBQ3pCLFFBQVEsRUFBRSxFQUFFLEVBQUUsRUFBRSxHQUFHLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFBRTtTQUNoQztLQUNGLENBQUMsQ0FBQztJQUVILE1BQU0sRUFDSixJQUFJLEVBQUUsQ0FBQyxPQUFPLENBQUMsR0FDaEIsR0FBRyxNQUFNLEtBQUssQ0FBQyxLQUFLLENBQ25CO1FBQ0UsTUFBTSxFQUFFLFNBQVM7UUFDakIsTUFBTSxFQUFFLEdBQUcsQ0FBQyxXQUFXLENBQUMsTUFBTTtRQUM5QixPQUFPLEVBQUUsRUFBRSxFQUFFLEVBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRTtLQUM5QixFQUNELEVBQUUsa0JBQWtCLEVBQUUsSUFBSSxFQUFFLENBQzdCLENBQUM7SUFFRixHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUUsT0FBTyxFQUFFLENBQUMsQ0FBQztBQUN4QixDQUFDLENBQUM7QUF2Q1csUUFBQSxJQUFJLFFBdUNmIn0=