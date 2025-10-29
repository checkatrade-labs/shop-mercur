"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GET = void 0;
const utils_1 = require("@medusajs/framework/utils");
const category_attribute_1 = __importDefault(require("../../../../../links/category-attribute"));
/**
 * @oas [get] /vendor/products/{id}/applicable-attributes
 * operationId: "VendorGetProductApplicableAttributes"
 * summary: "Get Product Applicable Attributes"
 * description: "Retrieves the applicable attributes for a specific product, including global attributes and category-specific attributes."
 * x-authenticated: true
 * parameters:
 *   - in: path
 *     name: id
 *     required: true
 *     description: The ID of the product
 *     schema:
 *       type: string
 *   - in: query
 *     name: fields
 *     description: The comma-separated fields to include in the response
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
 *             attributes:
 *               type: array
 *               items:
 *                 $ref: "#/components/schemas/VendorAttribute"
 *               description: Array of applicable attributes for the product
 *   "401":
 *     description: Unauthorized
 *     content:
 *       application/json:
 *         schema:
 *           type: object
 *           properties:
 *             message:
 *               type: string
 *               example: "Unauthorized"
 *   "403":
 *     description: Forbidden
 *     content:
 *       application/json:
 *         schema:
 *           type: object
 *           properties:
 *             message:
 *               type: string
 *               example: "Forbidden"
 *   "404":
 *     description: Not Found
 *     content:
 *       application/json:
 *         schema:
 *           type: object
 *           properties:
 *             message:
 *               type: string
 *               example: "Product not found"
 * tags:
 *   - Vendor Products
 * security:
 *   - api_token: []
 *   - cookie_auth: []
 */
const GET = async (req, res) => {
    const query = req.scope.resolve(utils_1.ContainerRegistrationKeys.QUERY);
    const { data: [product], } = await query.graph({
        entity: "product",
        fields: ["categories.id"],
        filters: {
            id: req.params.id,
        },
    });
    const categoryIds = product.categories.map((category) => category.id);
    const { data: attributes } = await query.graph({
        entity: category_attribute_1.default.entryPoint,
        fields: ["attribute_id"],
    });
    const attributeIds = attributes.map((attribute) => attribute.attribute_id);
    const { data: globalAttributes } = await query.graph({
        entity: "attribute",
        fields: req.queryConfig.fields,
        filters: {
            id: {
                $nin: attributeIds,
            },
        },
    });
    const { data: categoryAttributes } = await query.graph({
        entity: category_attribute_1.default.entryPoint,
        fields: req.queryConfig.fields.map((field) => `attribute.${field}`),
        filters: {
            product_category_id: categoryIds,
        },
    });
    res.json({
        attributes: [
            ...globalAttributes,
            ...categoryAttributes.map((rel) => rel.attribute),
        ],
    });
};
exports.GET = GET;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvYXBpL3ZlbmRvci9wcm9kdWN0cy9baWRdL2FwcGxpY2FibGUtYXR0cmlidXRlcy9yb3V0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFJQSxxREFBc0U7QUFFdEUsaUdBQXdFO0FBRXhFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0FrRUc7QUFDSSxNQUFNLEdBQUcsR0FBRyxLQUFLLEVBQ3RCLEdBQStCLEVBQy9CLEdBQW1CLEVBQ25CLEVBQUU7SUFDRixNQUFNLEtBQUssR0FBRyxHQUFHLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxpQ0FBeUIsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUVqRSxNQUFNLEVBQ0osSUFBSSxFQUFFLENBQUMsT0FBTyxDQUFDLEdBQ2hCLEdBQUcsTUFBTSxLQUFLLENBQUMsS0FBSyxDQUFDO1FBQ3BCLE1BQU0sRUFBRSxTQUFTO1FBQ2pCLE1BQU0sRUFBRSxDQUFDLGVBQWUsQ0FBQztRQUN6QixPQUFPLEVBQUU7WUFDUCxFQUFFLEVBQUUsR0FBRyxDQUFDLE1BQU0sQ0FBQyxFQUFFO1NBQ2xCO0tBQ0YsQ0FBQyxDQUFDO0lBQ0gsTUFBTSxXQUFXLEdBQUcsT0FBTyxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxRQUFRLEVBQUUsRUFBRSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUV0RSxNQUFNLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSxHQUFHLE1BQU0sS0FBSyxDQUFDLEtBQUssQ0FBQztRQUM3QyxNQUFNLEVBQUUsNEJBQWlCLENBQUMsVUFBVTtRQUNwQyxNQUFNLEVBQUUsQ0FBQyxjQUFjLENBQUM7S0FDekIsQ0FBQyxDQUFDO0lBQ0gsTUFBTSxZQUFZLEdBQUcsVUFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFDLFNBQVMsRUFBRSxFQUFFLENBQUMsU0FBUyxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBRTNFLE1BQU0sRUFBRSxJQUFJLEVBQUUsZ0JBQWdCLEVBQUUsR0FBRyxNQUFNLEtBQUssQ0FBQyxLQUFLLENBQUM7UUFDbkQsTUFBTSxFQUFFLFdBQVc7UUFDbkIsTUFBTSxFQUFFLEdBQUcsQ0FBQyxXQUFXLENBQUMsTUFBTTtRQUM5QixPQUFPLEVBQUU7WUFDUCxFQUFFLEVBQUU7Z0JBQ0YsSUFBSSxFQUFFLFlBQVk7YUFDbkI7U0FDRjtLQUNGLENBQUMsQ0FBQztJQUVILE1BQU0sRUFBRSxJQUFJLEVBQUUsa0JBQWtCLEVBQUUsR0FBRyxNQUFNLEtBQUssQ0FBQyxLQUFLLENBQUM7UUFDckQsTUFBTSxFQUFFLDRCQUFpQixDQUFDLFVBQVU7UUFDcEMsTUFBTSxFQUFFLEdBQUcsQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsYUFBYSxLQUFLLEVBQUUsQ0FBQztRQUNuRSxPQUFPLEVBQUU7WUFDUCxtQkFBbUIsRUFBRSxXQUFXO1NBQ2pDO0tBQ0YsQ0FBQyxDQUFDO0lBRUgsR0FBRyxDQUFDLElBQUksQ0FBQztRQUNQLFVBQVUsRUFBRTtZQUNWLEdBQUcsZ0JBQWdCO1lBQ25CLEdBQUcsa0JBQWtCLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDO1NBQ2xEO0tBQ0YsQ0FBQyxDQUFDO0FBQ0wsQ0FBQyxDQUFDO0FBL0NXLFFBQUEsR0FBRyxPQStDZCJ9