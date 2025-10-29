"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.POST = void 0;
const utils_1 = require("@medusajs/framework/utils");
const utils_2 = require("../../../../shared/infra/http/utils");
const workflows_1 = require("../../../../workflows/seller/workflows");
/**
 * @oas [post] /vendor/payout-account/onboarding
 * operationId: "VendorCreateOnboarding"
 * summary: "Create Onboarding"
 * description: "Creates an onboarding for the authenticated vendor's payout account."
 * x-authenticated: true
 * requestBody:
 *   content:
 *     application/json:
 *       schema:
 *         $ref: "#/components/schemas/VendorCreateOnboarding"
 * responses:
 *   "200":
 *     description: OK
 *     content:
 *       application/json:
 *         schema:
 *           type: object
 *           properties:
 *             payout_account:
 *               $ref: "#/components/schemas/VendorPayoutAccount"
 * tags:
 *   - Vendor Payout Account
 * security:
 *   - api_token: []
 *   - cookie_auth: []
 */
const POST = async (req, res) => {
    const query = req.scope.resolve(utils_1.ContainerRegistrationKeys.QUERY);
    const seller = await (0, utils_2.fetchSellerByAuthActorId)(req.auth_context.actor_id, req.scope);
    const { result } = await (0, workflows_1.createOnboardingForSellerWorkflow)(req.scope).run({
        context: { transactionId: seller.id },
        input: {
            seller_id: seller.id,
            context: req.validatedBody.context ?? {}
        }
    });
    const { data: [payoutAccount] } = await query.graph({
        entity: 'payout_account',
        fields: req.queryConfig.fields,
        filters: {
            id: result.payout_account_id
        }
    }, { throwIfKeyNotFound: true });
    res.status(200).json({
        payout_account: payoutAccount
    });
};
exports.POST = POST;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvYXBpL3ZlbmRvci9wYXlvdXQtYWNjb3VudC9vbmJvYXJkaW5nL3JvdXRlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUNBLHFEQUFxRTtBQUVyRSwrREFBOEU7QUFDOUUsc0VBQTBGO0FBRzFGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQTBCRztBQUNJLE1BQU0sSUFBSSxHQUFHLEtBQUssRUFDdkIsR0FBMkQsRUFDM0QsR0FBbUIsRUFDbkIsRUFBRTtJQUNGLE1BQU0sS0FBSyxHQUFHLEdBQUcsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLGlDQUF5QixDQUFDLEtBQUssQ0FBQyxDQUFBO0lBQ2hFLE1BQU0sTUFBTSxHQUFHLE1BQU0sSUFBQSxnQ0FBd0IsRUFDM0MsR0FBRyxDQUFDLFlBQVksQ0FBQyxRQUFRLEVBQ3pCLEdBQUcsQ0FBQyxLQUFLLENBQ1YsQ0FBQTtJQUVELE1BQU0sRUFBRSxNQUFNLEVBQUUsR0FBRyxNQUFNLElBQUEsNkNBQWlDLEVBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQztRQUN4RSxPQUFPLEVBQUUsRUFBRSxhQUFhLEVBQUUsTUFBTSxDQUFDLEVBQUUsRUFBRTtRQUNyQyxLQUFLLEVBQUU7WUFDTCxTQUFTLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDcEIsT0FBTyxFQUFFLEdBQUcsQ0FBQyxhQUFhLENBQUMsT0FBTyxJQUFJLEVBQUU7U0FDekM7S0FDRixDQUFDLENBQUE7SUFFRixNQUFNLEVBQ0osSUFBSSxFQUFFLENBQUMsYUFBYSxDQUFDLEVBQ3RCLEdBQUcsTUFBTSxLQUFLLENBQUMsS0FBSyxDQUNuQjtRQUNFLE1BQU0sRUFBRSxnQkFBZ0I7UUFDeEIsTUFBTSxFQUFFLEdBQUcsQ0FBQyxXQUFXLENBQUMsTUFBTTtRQUM5QixPQUFPLEVBQUU7WUFDUCxFQUFFLEVBQUUsTUFBTSxDQUFDLGlCQUFpQjtTQUM3QjtLQUNGLEVBQ0QsRUFBRSxrQkFBa0IsRUFBRSxJQUFJLEVBQUUsQ0FDN0IsQ0FBQTtJQUVELEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDO1FBQ25CLGNBQWMsRUFBRSxhQUFhO0tBQzlCLENBQUMsQ0FBQTtBQUNKLENBQUMsQ0FBQTtBQWxDWSxRQUFBLElBQUksUUFrQ2hCIn0=