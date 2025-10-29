"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.POST = void 0;
const utils_1 = require("@medusajs/framework/utils");
const utils_2 = require("../../../../../../shared/infra/http/utils");
const workflows_1 = require("../../../../../../workflows/promotions/workflows");
/**
 * @oas [post] /vendor/promotions/{id}/rules/batch
 * operationId: "VendorBatchRules"
 * summary: "Batch rules"
 * description: "Performs batch create/delete operation on rules"
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
                rule_type: utils_1.RuleType.RULES,
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvYXBpL3ZlbmRvci9wcm9tb3Rpb25zL1tpZF0vcnVsZXMvYmF0Y2gvcm91dGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBSUEscURBQStFO0FBRS9FLHFFQUFvRjtBQUNwRixnRkFBb0c7QUFHcEc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQWlDRztBQUNJLE1BQU0sSUFBSSxHQUFHLEtBQUssRUFDdkIsR0FBOEQsRUFDOUQsR0FBbUIsRUFDbkIsRUFBRTtJQUNGLE1BQU0sS0FBSyxHQUFHLEdBQUcsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLGlDQUF5QixDQUFDLEtBQUssQ0FBQyxDQUFBO0lBQ2hFLE1BQU0sRUFBRSxHQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFBO0lBRXhCLE1BQU0sTUFBTSxHQUFHLE1BQU0sSUFBQSxnQ0FBd0IsRUFDM0MsR0FBRyxDQUFDLFlBQVksQ0FBQyxRQUFRLEVBQ3pCLEdBQUcsQ0FBQyxLQUFLLENBQ1YsQ0FBQTtJQUVELE1BQU0sSUFBQSw2Q0FBaUMsRUFBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDO1FBQ3JELEtBQUssRUFBRTtZQUNMLElBQUksRUFBRTtnQkFDSixFQUFFO2dCQUNGLFNBQVMsRUFBRSxnQkFBUSxDQUFDLEtBQUs7Z0JBQ3pCLE1BQU0sRUFBRSxHQUFHLENBQUMsYUFBYSxDQUFDLE1BQU07Z0JBQ2hDLE1BQU0sRUFBRSxHQUFHLENBQUMsYUFBYSxDQUFDLE1BQU07YUFDakM7WUFDRCxTQUFTLEVBQUUsTUFBTSxDQUFDLEVBQUU7U0FDckI7S0FDRixDQUFDLENBQUE7SUFFRixNQUFNLEVBQ0osSUFBSSxFQUFFLENBQUMsU0FBUyxDQUFDLEVBQ2xCLEdBQUcsTUFBTSxLQUFLLENBQUMsS0FBSyxDQUFDO1FBQ3BCLE1BQU0sRUFBRSxXQUFXO1FBQ25CLE1BQU0sRUFBRSxHQUFHLENBQUMsV0FBVyxDQUFDLE1BQU07UUFDOUIsT0FBTyxFQUFFO1lBQ1AsRUFBRSxFQUFFLEdBQUcsQ0FBQyxNQUFNLENBQUMsRUFBRTtTQUNsQjtLQUNGLENBQUMsQ0FBQTtJQUVGLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRSxTQUFTLEVBQUUsQ0FBQyxDQUFBO0FBQ3pCLENBQUMsQ0FBQTtBQW5DWSxRQUFBLElBQUksUUFtQ2hCIn0=