"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.POST = void 0;
const core_flows_1 = require("@medusajs/medusa/core-flows");
/**
 * @oas [post] /vendor/products/{id}/fulfillments
 * operationId: "VendorCreateFulfillment"
 * summary: "Update a Product"
 * description: "Updates an existing product for the authenticated vendor."
 * x-authenticated: true
 * parameters:
 *   - in: path
 *     name: id
 *     required: true
 *     description: The ID of the Product.
 *     schema:
 *       type: string
 * requestBody:
 *   content:
 *     application/json:
 *       schema:
 *         $ref: "#/components/schemas/VendorCreateFulfillment"
 * responses:
 *   "200":
 *     description: OK
 *     content:
 *       application/json:
 *         schema:
 *           type: object
 *           properties:
 *             fulfillment:
 *               $ref: "#/components/schemas/VendorOrderFulfillment"
 * tags:
 *   - Vendor Orders
 * security:
 *   - api_token: []
 *   - cookie_auth: []
 */
const POST = async (req, res) => {
    const { id } = req.params;
    const { result: fulfillment } = await (0, core_flows_1.createOrderFulfillmentWorkflow)(req.scope).run({
        input: {
            order_id: id,
            created_by: req.auth_context.actor_id,
            ...req.validatedBody
        },
        throwOnError: true
    });
    res.json({ fulfillment });
};
exports.POST = POST;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvYXBpL3ZlbmRvci9vcmRlcnMvW2lkXS9mdWxmaWxsbWVudHMvcm91dGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQ0EsNERBQTRFO0FBSTVFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0FpQ0c7QUFDSSxNQUFNLElBQUksR0FBRyxLQUFLLEVBQ3ZCLEdBQTRELEVBQzVELEdBQW1CLEVBQ25CLEVBQUU7SUFDRixNQUFNLEVBQUUsRUFBRSxFQUFFLEdBQUcsR0FBRyxDQUFDLE1BQU0sQ0FBQTtJQUV6QixNQUFNLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRSxHQUFHLE1BQU0sSUFBQSwyQ0FBOEIsRUFDbEUsR0FBRyxDQUFDLEtBQUssQ0FDVixDQUFDLEdBQUcsQ0FBQztRQUNKLEtBQUssRUFBRTtZQUNMLFFBQVEsRUFBRSxFQUFFO1lBQ1osVUFBVSxFQUFFLEdBQUcsQ0FBQyxZQUFZLENBQUMsUUFBUTtZQUNyQyxHQUFHLEdBQUcsQ0FBQyxhQUFhO1NBQ3JCO1FBQ0QsWUFBWSxFQUFFLElBQUk7S0FDbkIsQ0FBQyxDQUFBO0lBRUYsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFLFdBQVcsRUFBRSxDQUFDLENBQUE7QUFDM0IsQ0FBQyxDQUFBO0FBbEJZLFFBQUEsSUFBSSxRQWtCaEIifQ==