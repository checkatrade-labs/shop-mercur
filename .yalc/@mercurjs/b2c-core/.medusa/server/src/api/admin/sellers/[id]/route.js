"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.POST = void 0;
exports.GET = GET;
const utils_1 = require("@medusajs/framework/utils");
const workflows_1 = require("../../../../workflows/seller/workflows");
/**
 * @oas [get] /admin/sellers/{id}
 * operationId: "AdminGetSeller"
 * summary: "Get Seller"
 * description: "Retrieves a specific seller by its ID."
 * x-authenticated: true
 * parameters:
 *   - name: id
 *     in: path
 *     required: true
 *     schema:
 *       type: string
 *     description: The ID of the seller to retrieve.
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
 *             seller:
 *               $ref: "#/components/schemas/AdminSeller"
 *   "404":
 *     description: Not Found
 *     content:
 *       application/json:
 *         schema:
 *           type: object
 *           properties:
 *             message:
 *               type: string
 *               example: "Seller not found"
 * tags:
 *   - Admin Sellers
 * security:
 *   - api_token: []
 *   - cookie_auth: []
 */
async function GET(req, res) {
    const query = req.scope.resolve(utils_1.ContainerRegistrationKeys.QUERY);
    const { data: [seller] } = await query.graph({
        entity: 'seller',
        fields: req.queryConfig.fields,
        filters: {
            id: req.params.id
        }
    }, { throwIfKeyNotFound: true });
    res.json({
        seller
    });
}
/**
 * @oas [post] /admin/sellers/{id}
 * operationId: "AdminUpdateSeller"
 * summary: "Update Seller"
 * description: "Updates an existing seller with the specified properties."
 * x-authenticated: true
 * parameters:
 *   - name: id
 *     in: path
 *     required: true
 *     schema:
 *       type: string
 *     description: The ID of the seller to update.
 * requestBody:
 *   required: true
 *   content:
 *     application/json:
 *       schema:
 *         type: object
 *         properties:
 *           name:
 *             type: string
 *             minLength: 4
 *             description: The name of the seller.
 *           description:
 *             type: string
 *             description: A description of the seller.
 *           photo:
 *             type: string
 *             description: URL to the seller's photo.
 *           email:
 *             type: string
 *             format: email
 *             description: Store contact email.
 *           phone:
 *             type: string
 *             description: Store contact phone.
 *           address_line:
 *             type: string
 *             description: Seller address line.
 *           city:
 *             type: string
 *             description: Seller city.
 *           state:
 *             type: string
 *             description: Seller state.
 *           postal_code:
 *             type: string
 *             description: Seller postal code.
 *           country_code:
 *             type: string
 *             description: Seller country code.
 *           tax_id:
 *             type: string
 *             description: Seller tax ID.
 *           store_status:
 *             type: string
 *             enum: [active, inactive, suspended]
 *             description: The status of the seller's store.
 * responses:
 *   "200":
 *     description: OK
 *     content:
 *       application/json:
 *         schema:
 *           type: object
 *           properties:
 *             seller:
 *               $ref: "#/components/schemas/AdminSeller"
 *   "404":
 *     description: Not Found
 *     content:
 *       application/json:
 *         schema:
 *           type: object
 *           properties:
 *             message:
 *               type: string
 *               example: "Seller not found"
 * tags:
 *   - Admin Sellers
 * security:
 *   - api_token: []
 *   - cookie_auth: []
 */
const POST = async (req, res) => {
    const query = req.scope.resolve(utils_1.ContainerRegistrationKeys.QUERY);
    const { id } = req.params;
    await (0, workflows_1.updateSellerWorkflow)(req.scope).run({
        input: {
            id,
            ...req.validatedBody
        }
    });
    const { data: [seller] } = await query.graph({
        entity: 'seller',
        fields: req.queryConfig.fields,
        filters: { id }
    });
    res.json({ seller });
};
exports.POST = POST;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvYXBpL2FkbWluL3NlbGxlcnMvW2lkXS9yb3V0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFtREEsa0JBc0JDO0FBeEVELHFEQUFxRTtBQUVyRSxzRUFBNkU7QUFHN0U7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBNENHO0FBQ0ksS0FBSyxVQUFVLEdBQUcsQ0FDdkIsR0FBK0IsRUFDL0IsR0FBbUI7SUFFbkIsTUFBTSxLQUFLLEdBQUcsR0FBRyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsaUNBQXlCLENBQUMsS0FBSyxDQUFDLENBQUE7SUFFaEUsTUFBTSxFQUNKLElBQUksRUFBRSxDQUFDLE1BQU0sQ0FBQyxFQUNmLEdBQUcsTUFBTSxLQUFLLENBQUMsS0FBSyxDQUNuQjtRQUNFLE1BQU0sRUFBRSxRQUFRO1FBQ2hCLE1BQU0sRUFBRSxHQUFHLENBQUMsV0FBVyxDQUFDLE1BQU07UUFDOUIsT0FBTyxFQUFFO1lBQ1AsRUFBRSxFQUFFLEdBQUcsQ0FBQyxNQUFNLENBQUMsRUFBRTtTQUNsQjtLQUNGLEVBQ0QsRUFBRSxrQkFBa0IsRUFBRSxJQUFJLEVBQUUsQ0FDN0IsQ0FBQTtJQUVELEdBQUcsQ0FBQyxJQUFJLENBQUM7UUFDUCxNQUFNO0tBQ1AsQ0FBQyxDQUFBO0FBQ0osQ0FBQztBQUVEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0FvRkc7QUFDSSxNQUFNLElBQUksR0FBRyxLQUFLLEVBQ3ZCLEdBQXNELEVBQ3RELEdBQW1CLEVBQ25CLEVBQUU7SUFDRixNQUFNLEtBQUssR0FBRyxHQUFHLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxpQ0FBeUIsQ0FBQyxLQUFLLENBQUMsQ0FBQTtJQUNoRSxNQUFNLEVBQUUsRUFBRSxFQUFFLEdBQUcsR0FBRyxDQUFDLE1BQU0sQ0FBQTtJQUV6QixNQUFNLElBQUEsZ0NBQW9CLEVBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQztRQUN4QyxLQUFLLEVBQUU7WUFDTCxFQUFFO1lBQ0YsR0FBRyxHQUFHLENBQUMsYUFBYTtTQUNyQjtLQUNGLENBQUMsQ0FBQTtJQUVGLE1BQU0sRUFDSixJQUFJLEVBQUUsQ0FBQyxNQUFNLENBQUMsRUFDZixHQUFHLE1BQU0sS0FBSyxDQUFDLEtBQUssQ0FBQztRQUNwQixNQUFNLEVBQUUsUUFBUTtRQUNoQixNQUFNLEVBQUUsR0FBRyxDQUFDLFdBQVcsQ0FBQyxNQUFNO1FBQzlCLE9BQU8sRUFBRSxFQUFFLEVBQUUsRUFBRTtLQUNoQixDQUFDLENBQUE7SUFFRixHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUUsTUFBTSxFQUFFLENBQUMsQ0FBQTtBQUN0QixDQUFDLENBQUE7QUF2QlksUUFBQSxJQUFJLFFBdUJoQiJ9