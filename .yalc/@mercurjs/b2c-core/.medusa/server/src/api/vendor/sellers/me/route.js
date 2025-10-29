"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.POST = exports.GET = void 0;
const utils_1 = require("@medusajs/framework/utils");
const seller_1 = require("../../../../shared/infra/http/utils/seller");
const workflows_1 = require("../../../../workflows/seller/workflows");
/**
 * @oas [get] /vendor/sellers/me
 * operationId: "VendorGetSellerMe"
 * summary: "Get Current Seller"
 * description: "Retrieves the seller associated with the authenticated user."
 * x-authenticated: true
 * responses:
 *   "200":
 *     description: OK
 *     content:
 *       application/json:
 *         schema:
 *           type: object
 *           properties:
 *             seller:
 *               $ref: "#/components/schemas/VendorSeller"
 * tags:
 *   - Vendor Sellers
 * security:
 *   - api_token: []
 *   - cookie_auth: []
 */
const GET = async (req, res) => {
    const seller = await (0, seller_1.fetchSellerByAuthActorId)(req.auth_context.actor_id, req.scope, req.queryConfig.fields);
    res.json({ seller });
};
exports.GET = GET;
/**
 * @oas [post] /vendor/sellers/me
 * operationId: "VendorUpdateSellerMe"
 * summary: "Update Current Seller"
 * description: "Updates the seller associated with the authenticated user."
 * x-authenticated: true
 * requestBody:
 *   content:
 *     application/json:
 *       schema:
 *         $ref: "#/components/schemas/VendorUpdateSeller"
 * responses:
 *   "200":
 *     description: OK
 *     content:
 *       application/json:
 *         schema:
 *           type: object
 *           properties:
 *             seller:
 *               $ref: "#/components/schemas/VendorSeller"
 * tags:
 *   - Vendor Sellers
 * security:
 *   - api_token: []
 *   - cookie_auth: []
 */
const POST = async (req, res) => {
    const query = req.scope.resolve(utils_1.ContainerRegistrationKeys.QUERY);
    const { id } = await (0, seller_1.fetchSellerByAuthActorId)(req.auth_context.actor_id, req.scope);
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
    }, { throwIfKeyNotFound: true });
    res.json({ seller });
};
exports.POST = POST;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvYXBpL3ZlbmRvci9zZWxsZXJzL21lL3JvdXRlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUNBLHFEQUFxRTtBQUVyRSx1RUFBcUY7QUFDckYsc0VBQTZFO0FBRzdFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0FxQkc7QUFDSSxNQUFNLEdBQUcsR0FBRyxLQUFLLEVBQ3RCLEdBQStCLEVBQy9CLEdBQW1CLEVBQ25CLEVBQUU7SUFDRixNQUFNLE1BQU0sR0FBRyxNQUFNLElBQUEsaUNBQXdCLEVBQzNDLEdBQUcsQ0FBQyxZQUFZLENBQUMsUUFBUSxFQUN6QixHQUFHLENBQUMsS0FBSyxFQUNULEdBQUcsQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUN2QixDQUFBO0lBRUQsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFLE1BQU0sRUFBRSxDQUFDLENBQUE7QUFDdEIsQ0FBQyxDQUFBO0FBWFksUUFBQSxHQUFHLE9BV2Y7QUFFRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0EwQkc7QUFDSSxNQUFNLElBQUksR0FBRyxLQUFLLEVBQ3ZCLEdBQXVELEVBQ3ZELEdBQW1CLEVBQ25CLEVBQUU7SUFDRixNQUFNLEtBQUssR0FBRyxHQUFHLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxpQ0FBeUIsQ0FBQyxLQUFLLENBQUMsQ0FBQTtJQUNoRSxNQUFNLEVBQUUsRUFBRSxFQUFFLEdBQUcsTUFBTSxJQUFBLGlDQUF3QixFQUMzQyxHQUFHLENBQUMsWUFBWSxDQUFDLFFBQVEsRUFDekIsR0FBRyxDQUFDLEtBQUssQ0FDVixDQUFBO0lBRUQsTUFBTSxJQUFBLGdDQUFvQixFQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUM7UUFDeEMsS0FBSyxFQUFFO1lBQ0wsRUFBRTtZQUNGLEdBQUcsR0FBRyxDQUFDLGFBQWE7U0FDckI7S0FDRixDQUFDLENBQUE7SUFFRixNQUFNLEVBQ0osSUFBSSxFQUFFLENBQUMsTUFBTSxDQUFDLEVBQ2YsR0FBRyxNQUFNLEtBQUssQ0FBQyxLQUFLLENBQ25CO1FBQ0UsTUFBTSxFQUFFLFFBQVE7UUFDaEIsTUFBTSxFQUFFLEdBQUcsQ0FBQyxXQUFXLENBQUMsTUFBTTtRQUM5QixPQUFPLEVBQUUsRUFBRSxFQUFFLEVBQUU7S0FDaEIsRUFDRCxFQUFFLGtCQUFrQixFQUFFLElBQUksRUFBRSxDQUM3QixDQUFBO0lBRUQsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFLE1BQU0sRUFBRSxDQUFDLENBQUE7QUFDdEIsQ0FBQyxDQUFBO0FBN0JZLFFBQUEsSUFBSSxRQTZCaEIifQ==