"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.POST = void 0;
const utils_1 = require("@medusajs/framework/utils");
const utils_2 = require("../../../../../../shared/infra/http/utils");
const workflows_1 = require("../../../../../../workflows/promotions/workflows");
/**
 * @oas [post] /vendor/promotions/{id}/buy-rules/batch
 * operationId: "VendorBatchBuyRules"
 * summary: "Batch buy rules"
 * description: "Performs batch create/delete operation on buy-rules"
 * x-authenticated: true
 * parameters:
 *   - in: path
 *     name: id
 *     required: true
 *     description: The ID of the promotion.
 *     schema:
 *       type: string
 * requestBody:
 *   content:
 *     application/json:
 *       schema:
 *         $ref: "#/components/schemas/VendorBatchPromotionRule"
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
    const id = req.params.id;
    const seller = await (0, utils_2.fetchSellerByAuthActorId)(req.auth_context.actor_id, req.scope);
    await (0, workflows_1.batchVendorPromotionRulesWorkflow)(req.scope).run({
        input: {
            data: {
                id,
                rule_type: utils_1.RuleType.BUY_RULES,
                create: req.validatedBody.create,
                delete: req.validatedBody.delete
            },
            seller_id: seller.id
        }
    });
    const { data: [promotion] } = await query.graph({
        entity: 'promotion',
        fields: req.queryConfig.fields,
        filters: {
            id: req.params.id
        }
    });
    res.json({ promotion });
};
exports.POST = POST;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvYXBpL3ZlbmRvci9wcm9tb3Rpb25zL1tpZF0vYnV5LXJ1bGVzL2JhdGNoL3JvdXRlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUlBLHFEQUErRTtBQUUvRSxxRUFBb0Y7QUFDcEYsZ0ZBQW9HO0FBR3BHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0FpQ0c7QUFDSSxNQUFNLElBQUksR0FBRyxLQUFLLEVBQ3ZCLEdBQThELEVBQzlELEdBQW1CLEVBQ25CLEVBQUU7SUFDRixNQUFNLEtBQUssR0FBRyxHQUFHLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxpQ0FBeUIsQ0FBQyxLQUFLLENBQUMsQ0FBQTtJQUNoRSxNQUFNLEVBQUUsR0FBRyxHQUFHLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQTtJQUV4QixNQUFNLE1BQU0sR0FBRyxNQUFNLElBQUEsZ0NBQXdCLEVBQzNDLEdBQUcsQ0FBQyxZQUFZLENBQUMsUUFBUSxFQUN6QixHQUFHLENBQUMsS0FBSyxDQUNWLENBQUE7SUFFRCxNQUFNLElBQUEsNkNBQWlDLEVBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQztRQUNyRCxLQUFLLEVBQUU7WUFDTCxJQUFJLEVBQUU7Z0JBQ0osRUFBRTtnQkFDRixTQUFTLEVBQUUsZ0JBQVEsQ0FBQyxTQUFTO2dCQUM3QixNQUFNLEVBQUUsR0FBRyxDQUFDLGFBQWEsQ0FBQyxNQUFNO2dCQUNoQyxNQUFNLEVBQUUsR0FBRyxDQUFDLGFBQWEsQ0FBQyxNQUFNO2FBQ2pDO1lBQ0QsU0FBUyxFQUFFLE1BQU0sQ0FBQyxFQUFFO1NBQ3JCO0tBQ0YsQ0FBQyxDQUFBO0lBRUYsTUFBTSxFQUNKLElBQUksRUFBRSxDQUFDLFNBQVMsQ0FBQyxFQUNsQixHQUFHLE1BQU0sS0FBSyxDQUFDLEtBQUssQ0FBQztRQUNwQixNQUFNLEVBQUUsV0FBVztRQUNuQixNQUFNLEVBQUUsR0FBRyxDQUFDLFdBQVcsQ0FBQyxNQUFNO1FBQzlCLE9BQU8sRUFBRTtZQUNQLEVBQUUsRUFBRSxHQUFHLENBQUMsTUFBTSxDQUFDLEVBQUU7U0FDbEI7S0FDRixDQUFDLENBQUE7SUFFRixHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUUsU0FBUyxFQUFFLENBQUMsQ0FBQTtBQUN6QixDQUFDLENBQUE7QUFuQ1ksUUFBQSxJQUFJLFFBbUNoQiJ9