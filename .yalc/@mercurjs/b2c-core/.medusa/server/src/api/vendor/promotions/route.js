"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.POST = exports.GET = void 0;
const utils_1 = require("@medusajs/framework/utils");
const seller_promotion_1 = __importDefault(require("../../../links/seller-promotion"));
const utils_2 = require("../../../shared/infra/http/utils");
const workflows_1 = require("../../../workflows/promotions/workflows");
/**
 * @oas [get] /vendor/promotions
 * operationId: "VendorListPromotions"
 * summary: "List Promotions"
 * description: "Retrieves a list of promotions for the authenticated vendor."
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
 * responses:
 *   "200":
 *     description: OK
 *     content:
 *       application/json:
 *         schema:
 *           type: object
 *           properties:
 *             promotions:
 *               type: array
 *               items:
 *                 $ref: "#/components/schemas/VendorPromotion"
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
 *   - Vendor Promotions
 * security:
 *   - api_token: []
 *   - cookie_auth: []
 */
const GET = async (req, res) => {
    const query = req.scope.resolve(utils_1.ContainerRegistrationKeys.QUERY);
    const { data: promotions, metadata } = await query.graph({
        entity: seller_promotion_1.default.entryPoint,
        fields: req.queryConfig.fields.map((field) => `promotion.${field}`),
        filters: {
            ...req.filterableFields,
            deleted_at: {
                $eq: null
            }
        },
        pagination: req.queryConfig.pagination
    });
    res.json({
        promotions: promotions.map((relation) => relation.promotion),
        count: metadata?.count,
        offset: metadata?.skip,
        limit: metadata?.take
    });
};
exports.GET = GET;
/**
 * @oas [post] /vendor/promotions
 * operationId: "VendorCreatePromotion"
 * summary: "Create promotion"
 * description: "Creates a new promotion for the authenticated vendor."
 * x-authenticated: true
 * requestBody:
 *   content:
 *     application/json:
 *       schema:
 *         $ref: "#/components/schemas/VendorCreatePromotion"
 * responses:
 *   "201":
 *     description: Created
 *     content:
 *       application/json:
 *         schema:
 *           type: object
 *           properties:
 *             promotion:
 *               $ref: "#/components/schemas/VendorPromotion"
 * tags:
 *   - Vendor Promotions
 * security:
 *   - api_token: []
 *   - cookie_auth: []
 */
const POST = async (req, res) => {
    const query = req.scope.resolve(utils_1.ContainerRegistrationKeys.QUERY);
    const seller = await (0, utils_2.fetchSellerByAuthActorId)(req.auth_context?.actor_id, req.scope);
    const { result } = await workflows_1.createVendorPromotionWorkflow.run({
        container: req.scope,
        input: { promotion: req.validatedBody, seller_id: seller.id }
    });
    const { data: [promotion] } = await query.graph({
        entity: 'promotion',
        fields: req.queryConfig.fields,
        filters: {
            id: result[0].id
        }
    });
    res.status(201).json({ promotion });
};
exports.POST = POST;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvYXBpL3ZlbmRvci9wcm9tb3Rpb25zL3JvdXRlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUNBLHFEQUFxRTtBQUVyRSx1RkFBNkQ7QUFDN0QsNERBQTJFO0FBQzNFLHVFQUF1RjtBQUd2Rjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBbURHO0FBQ0ksTUFBTSxHQUFHLEdBQUcsS0FBSyxFQUN0QixHQUErQixFQUMvQixHQUFtQixFQUNuQixFQUFFO0lBQ0YsTUFBTSxLQUFLLEdBQUcsR0FBRyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsaUNBQXlCLENBQUMsS0FBSyxDQUFDLENBQUE7SUFFaEUsTUFBTSxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFFLEdBQUcsTUFBTSxLQUFLLENBQUMsS0FBSyxDQUFDO1FBQ3ZELE1BQU0sRUFBRSwwQkFBZSxDQUFDLFVBQVU7UUFDbEMsTUFBTSxFQUFFLEdBQUcsQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsYUFBYSxLQUFLLEVBQUUsQ0FBQztRQUNuRSxPQUFPLEVBQUU7WUFDUCxHQUFHLEdBQUcsQ0FBQyxnQkFBZ0I7WUFDdkIsVUFBVSxFQUFFO2dCQUNWLEdBQUcsRUFBRSxJQUFJO2FBQ1Y7U0FDRjtRQUNELFVBQVUsRUFBRSxHQUFHLENBQUMsV0FBVyxDQUFDLFVBQVU7S0FDdkMsQ0FBQyxDQUFBO0lBRUYsR0FBRyxDQUFDLElBQUksQ0FBQztRQUNQLFVBQVUsRUFBRSxVQUFVLENBQUMsR0FBRyxDQUFDLENBQUMsUUFBUSxFQUFFLEVBQUUsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDO1FBQzVELEtBQUssRUFBRSxRQUFRLEVBQUUsS0FBSztRQUN0QixNQUFNLEVBQUUsUUFBUSxFQUFFLElBQUk7UUFDdEIsS0FBSyxFQUFFLFFBQVEsRUFBRSxJQUFJO0tBQ3RCLENBQUMsQ0FBQTtBQUNKLENBQUMsQ0FBQTtBQXhCWSxRQUFBLEdBQUcsT0F3QmY7QUFFRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0EwQkc7QUFDSSxNQUFNLElBQUksR0FBRyxLQUFLLEVBQ3ZCLEdBQTBELEVBQzFELEdBQW1CLEVBQ25CLEVBQUU7SUFDRixNQUFNLEtBQUssR0FBRyxHQUFHLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxpQ0FBeUIsQ0FBQyxLQUFLLENBQUMsQ0FBQTtJQUNoRSxNQUFNLE1BQU0sR0FBRyxNQUFNLElBQUEsZ0NBQXdCLEVBQzNDLEdBQUcsQ0FBQyxZQUFZLEVBQUUsUUFBUSxFQUMxQixHQUFHLENBQUMsS0FBSyxDQUNWLENBQUE7SUFFRCxNQUFNLEVBQUUsTUFBTSxFQUFFLEdBQUcsTUFBTSx5Q0FBNkIsQ0FBQyxHQUFHLENBQUM7UUFDekQsU0FBUyxFQUFFLEdBQUcsQ0FBQyxLQUFLO1FBQ3BCLEtBQUssRUFBRSxFQUFFLFNBQVMsRUFBRSxHQUFHLENBQUMsYUFBYSxFQUFFLFNBQVMsRUFBRSxNQUFNLENBQUMsRUFBRSxFQUFFO0tBQzlELENBQUMsQ0FBQTtJQUVGLE1BQU0sRUFDSixJQUFJLEVBQUUsQ0FBQyxTQUFTLENBQUMsRUFDbEIsR0FBRyxNQUFNLEtBQUssQ0FBQyxLQUFLLENBQUM7UUFDcEIsTUFBTSxFQUFFLFdBQVc7UUFDbkIsTUFBTSxFQUFFLEdBQUcsQ0FBQyxXQUFXLENBQUMsTUFBTTtRQUM5QixPQUFPLEVBQUU7WUFDUCxFQUFFLEVBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUU7U0FDakI7S0FDRixDQUFDLENBQUE7SUFFRixHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLFNBQVMsRUFBRSxDQUFDLENBQUE7QUFDckMsQ0FBQyxDQUFBO0FBMUJZLFFBQUEsSUFBSSxRQTBCaEIifQ==