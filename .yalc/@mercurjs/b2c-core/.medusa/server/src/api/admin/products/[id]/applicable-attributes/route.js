"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GET = void 0;
const products_1 = require("../../../../../shared/infra/http/utils/products");
/**
 * @oas [get] /admin/products/{id}/applicable-attributes
 * operationId: "AdminGetProductApplicableAttributes"
 * summary: "Get Product Applicable Attributes"
 * description: "Retrieves all attributes that can be applied to a specific product, including global attributes and category-specific attributes."
 * x-authenticated: true
 * parameters:
 *   - name: id
 *     in: path
 *     required: true
 *     schema:
 *       type: string
 *     description: The ID of the product to get applicable attributes for.
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
 *             attributes:
 *               type: array
 *               description: Array of attributes that can be applied to the product, including global attributes and category-specific attributes.
 *               items:
 *                 $ref: "#/components/schemas/Attribute"
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
 *   - Admin Products
 * security:
 *   - api_token: []
 *   - cookie_auth: []
 */
const GET = async (req, res) => {
    const attributes = await (0, products_1.getApplicableAttributes)(req.scope, req.params.id, req.queryConfig.fields);
    res.json({ attributes });
};
exports.GET = GET;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvYXBpL2FkbWluL3Byb2R1Y3RzL1tpZF0vYXBwbGljYWJsZS1hdHRyaWJ1dGVzL3JvdXRlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUVBLDhFQUF5RjtBQUV6Rjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0ErQ0c7QUFDSSxNQUFNLEdBQUcsR0FBRyxLQUFLLEVBQ3RCLEdBQStCLEVBQy9CLEdBQW1CLEVBQ25CLEVBQUU7SUFDRixNQUFNLFVBQVUsR0FBRyxNQUFNLElBQUEsa0NBQXVCLEVBQzlDLEdBQUcsQ0FBQyxLQUFLLEVBQ1QsR0FBRyxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQ2IsR0FBRyxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQ3ZCLENBQUE7SUFFRCxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUUsVUFBVSxFQUFFLENBQUMsQ0FBQTtBQUMxQixDQUFDLENBQUE7QUFYWSxRQUFBLEdBQUcsT0FXZiJ9