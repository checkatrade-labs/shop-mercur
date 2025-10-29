"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.POST = exports.GET = void 0;
const utils_1 = require("@medusajs/framework/utils");
const utils_2 = require("../../../../../shared/infra/http/utils");
const workflows_1 = require("../../../../../workflows/seller/workflows");
/**
 * @oas [get] /vendor/sellers/me/onboarding
 * operationId: "VendorGetOnboardingStatus"
 * summary: "Get onboarding status of the current seller"
 * description: "Retrieves the onboarding details of the current authenticated seller."
 * x-authenticated: true
 * responses:
 *   "200":
 *     description: OK
 *     content:
 *       application/json:
 *         schema:
 *           type: object
 *           properties:
 *             onboarding:
 *               $ref: "#/components/schemas/VendorSellerOnboarding"
 * tags:
 *   - Vendor Onboarding
 * security:
 *   - api_token: []
 *   - cookie_auth: []
 */
const GET = async (req, res) => {
    const query = req.scope.resolve(utils_1.ContainerRegistrationKeys.QUERY);
    const seller = await (0, utils_2.fetchSellerByAuthActorId)(req.auth_context.actor_id, req.scope);
    const { data: [onboarding] } = await query.graph({
        entity: 'seller_onboarding',
        fields: req.queryConfig.fields,
        filters: {
            seller_id: seller.id
        }
    });
    res.json({ onboarding });
};
exports.GET = GET;
/**
 * @oas [post] /vendor/sellers/me/onboarding
 * operationId: "VendorRecalculateOnboarding status"
 * summary: "Recalculates onboarding status"
 * description: "Triggers onboarding status recalculation and retrieves the onboarding details of the current authenticated seller."
 * x-authenticated: true
 * responses:
 *   "200":
 *     description: OK
 *     content:
 *       application/json:
 *         schema:
 *           type: object
 *           properties:
 *             onboarding:
 *               $ref: "#/components/schemas/VendorSellerOnboarding"
 * tags:
 *   - Vendor Onboarding
 * security:
 *   - api_token: []
 *   - cookie_auth: []
 */
const POST = async (req, res) => {
    const query = req.scope.resolve(utils_1.ContainerRegistrationKeys.QUERY);
    const seller = await (0, utils_2.fetchSellerByAuthActorId)(req.auth_context.actor_id, req.scope);
    await workflows_1.recalculateOnboardingWorkflow.run({
        container: req.scope,
        input: seller.id
    });
    const { data: [onboarding] } = await query.graph({
        entity: 'seller_onboarding',
        fields: req.queryConfig.fields,
        filters: {
            seller_id: seller.id
        }
    });
    res.json({ onboarding });
};
exports.POST = POST;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvYXBpL3ZlbmRvci9zZWxsZXJzL21lL29uYm9hcmRpbmcvcm91dGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQ0EscURBQXFFO0FBRXJFLGtFQUFpRjtBQUNqRix5RUFBeUY7QUFFekY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQXFCRztBQUNJLE1BQU0sR0FBRyxHQUFHLEtBQUssRUFDdEIsR0FBK0IsRUFDL0IsR0FBbUIsRUFDbkIsRUFBRTtJQUNGLE1BQU0sS0FBSyxHQUFHLEdBQUcsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLGlDQUF5QixDQUFDLEtBQUssQ0FBQyxDQUFBO0lBQ2hFLE1BQU0sTUFBTSxHQUFHLE1BQU0sSUFBQSxnQ0FBd0IsRUFDM0MsR0FBRyxDQUFDLFlBQVksQ0FBQyxRQUFRLEVBQ3pCLEdBQUcsQ0FBQyxLQUFLLENBQ1YsQ0FBQTtJQUVELE1BQU0sRUFDSixJQUFJLEVBQUUsQ0FBQyxVQUFVLENBQUMsRUFDbkIsR0FBRyxNQUFNLEtBQUssQ0FBQyxLQUFLLENBQUM7UUFDcEIsTUFBTSxFQUFFLG1CQUFtQjtRQUMzQixNQUFNLEVBQUUsR0FBRyxDQUFDLFdBQVcsQ0FBQyxNQUFNO1FBQzlCLE9BQU8sRUFBRTtZQUNQLFNBQVMsRUFBRSxNQUFNLENBQUMsRUFBRTtTQUNyQjtLQUNGLENBQUMsQ0FBQTtJQUVGLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRSxVQUFVLEVBQUUsQ0FBQyxDQUFBO0FBQzFCLENBQUMsQ0FBQTtBQXJCWSxRQUFBLEdBQUcsT0FxQmY7QUFFRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBcUJHO0FBQ0ksTUFBTSxJQUFJLEdBQUcsS0FBSyxFQUN2QixHQUErQixFQUMvQixHQUFtQixFQUNuQixFQUFFO0lBQ0YsTUFBTSxLQUFLLEdBQUcsR0FBRyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsaUNBQXlCLENBQUMsS0FBSyxDQUFDLENBQUE7SUFDaEUsTUFBTSxNQUFNLEdBQUcsTUFBTSxJQUFBLGdDQUF3QixFQUMzQyxHQUFHLENBQUMsWUFBWSxDQUFDLFFBQVEsRUFDekIsR0FBRyxDQUFDLEtBQUssQ0FDVixDQUFBO0lBRUQsTUFBTSx5Q0FBNkIsQ0FBQyxHQUFHLENBQUM7UUFDdEMsU0FBUyxFQUFFLEdBQUcsQ0FBQyxLQUFLO1FBQ3BCLEtBQUssRUFBRSxNQUFNLENBQUMsRUFBRTtLQUNqQixDQUFDLENBQUE7SUFFRixNQUFNLEVBQ0osSUFBSSxFQUFFLENBQUMsVUFBVSxDQUFDLEVBQ25CLEdBQUcsTUFBTSxLQUFLLENBQUMsS0FBSyxDQUFDO1FBQ3BCLE1BQU0sRUFBRSxtQkFBbUI7UUFDM0IsTUFBTSxFQUFFLEdBQUcsQ0FBQyxXQUFXLENBQUMsTUFBTTtRQUM5QixPQUFPLEVBQUU7WUFDUCxTQUFTLEVBQUUsTUFBTSxDQUFDLEVBQUU7U0FDckI7S0FDRixDQUFDLENBQUE7SUFFRixHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUUsVUFBVSxFQUFFLENBQUMsQ0FBQTtBQUMxQixDQUFDLENBQUE7QUExQlksUUFBQSxJQUFJLFFBMEJoQiJ9