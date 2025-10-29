"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.POST = exports.GET = void 0;
const utils_1 = require("@medusajs/framework/utils");
const utils_2 = require("../../../shared/infra/http/utils");
const workflows_1 = require("../../../workflows/seller/workflows");
const utils_3 = require("./utils");
/**
 * @oas [get] /vendor/payout-account
 * operationId: "VendorGetPayoutAccount"
 * summary: "Get Payout Account"
 * description: "Retrieves the payout account for the authenticated vendor."
 * x-authenticated: true
 * parameters:
 *   - in: query
 *     name: fields
 *     schema:
 *       type: string
 *     description: Comma-separated fields that should be included in the returned data.
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
const GET = async (req, res) => {
    let { payout_account } = await (0, utils_3.refetchPayoutAccount)(req.scope, req.queryConfig.fields.map((field) => `payout_account.${field}`), req.filterableFields);
    if (payout_account.status !== 'active') {
        await workflows_1.syncStripeAccountWorkflow.run({
            container: req.scope,
            input: payout_account.id
        });
        const refreshed = await (0, utils_3.refetchPayoutAccount)(req.scope, req.queryConfig.fields.map((field) => `payout_account.${field}`), req.filterableFields);
        payout_account = refreshed.payout_account;
    }
    res.json({
        payout_account
    });
};
exports.GET = GET;
/**
 * @oas [post] /vendor/payout-account
 * operationId: "VendorCreatePayoutAccount"
 * summary: "Create Payout Account"
 * description: "Creates a payout account for the authenticated vendor."
 * x-authenticated: true
 * requestBody:
 *   content:
 *     application/json:
 *       schema:
 *         $ref: "#/components/schemas/VendorCreatePayoutAccount"
 * responses:
 *   "201":
 *     description: Created
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
    const { result } = await (0, workflows_1.createPayoutAccountForSellerWorkflow)(req.scope).run({
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
            id: result.id
        }
    }, { throwIfKeyNotFound: true });
    res.status(201).json({
        payout_account: payoutAccount
    });
};
exports.POST = POST;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvYXBpL3ZlbmRvci9wYXlvdXQtYWNjb3VudC9yb3V0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFDQSxxREFBcUU7QUFFckUsNERBQTJFO0FBQzNFLG1FQUc0QztBQUM1QyxtQ0FBOEM7QUFHOUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQTJCRztBQUNJLE1BQU0sR0FBRyxHQUFHLEtBQUssRUFDdEIsR0FBK0IsRUFDL0IsR0FBbUIsRUFDbkIsRUFBRTtJQUNGLElBQUksRUFBRSxjQUFjLEVBQUUsR0FBRyxNQUFNLElBQUEsNEJBQW9CLEVBQ2pELEdBQUcsQ0FBQyxLQUFLLEVBQ1QsR0FBRyxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxrQkFBa0IsS0FBSyxFQUFFLENBQUMsRUFDaEUsR0FBRyxDQUFDLGdCQUFnQixDQUNyQixDQUFBO0lBRUQsSUFBSSxjQUFjLENBQUMsTUFBTSxLQUFLLFFBQVEsRUFBRSxDQUFDO1FBQ3ZDLE1BQU0scUNBQXlCLENBQUMsR0FBRyxDQUFDO1lBQ2xDLFNBQVMsRUFBRSxHQUFHLENBQUMsS0FBSztZQUNwQixLQUFLLEVBQUUsY0FBYyxDQUFDLEVBQUU7U0FDekIsQ0FBQyxDQUFBO1FBRUYsTUFBTSxTQUFTLEdBQUcsTUFBTSxJQUFBLDRCQUFvQixFQUMxQyxHQUFHLENBQUMsS0FBSyxFQUNULEdBQUcsQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsa0JBQWtCLEtBQUssRUFBRSxDQUFDLEVBQ2hFLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FDckIsQ0FBQTtRQUVELGNBQWMsR0FBRyxTQUFTLENBQUMsY0FBYyxDQUFBO0lBQzNDLENBQUM7SUFFRCxHQUFHLENBQUMsSUFBSSxDQUFDO1FBQ1AsY0FBYztLQUNmLENBQUMsQ0FBQTtBQUNKLENBQUMsQ0FBQTtBQTVCWSxRQUFBLEdBQUcsT0E0QmY7QUFFRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0EwQkc7QUFDSSxNQUFNLElBQUksR0FBRyxLQUFLLEVBQ3ZCLEdBQThELEVBQzlELEdBQW1CLEVBQ25CLEVBQUU7SUFDRixNQUFNLEtBQUssR0FBRyxHQUFHLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxpQ0FBeUIsQ0FBQyxLQUFLLENBQUMsQ0FBQTtJQUNoRSxNQUFNLE1BQU0sR0FBRyxNQUFNLElBQUEsZ0NBQXdCLEVBQzNDLEdBQUcsQ0FBQyxZQUFZLENBQUMsUUFBUSxFQUN6QixHQUFHLENBQUMsS0FBSyxDQUNWLENBQUE7SUFFRCxNQUFNLEVBQUUsTUFBTSxFQUFFLEdBQUcsTUFBTSxJQUFBLGdEQUFvQyxFQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUM7UUFDM0UsT0FBTyxFQUFFLEVBQUUsYUFBYSxFQUFFLE1BQU0sQ0FBQyxFQUFFLEVBQUU7UUFDckMsS0FBSyxFQUFFO1lBQ0wsU0FBUyxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ3BCLE9BQU8sRUFBRSxHQUFHLENBQUMsYUFBYSxDQUFDLE9BQU8sSUFBSSxFQUFFO1NBQ3pDO0tBQ0YsQ0FBQyxDQUFBO0lBRUYsTUFBTSxFQUNKLElBQUksRUFBRSxDQUFDLGFBQWEsQ0FBQyxFQUN0QixHQUFHLE1BQU0sS0FBSyxDQUFDLEtBQUssQ0FDbkI7UUFDRSxNQUFNLEVBQUUsZ0JBQWdCO1FBQ3hCLE1BQU0sRUFBRSxHQUFHLENBQUMsV0FBVyxDQUFDLE1BQU07UUFDOUIsT0FBTyxFQUFFO1lBQ1AsRUFBRSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1NBQ2Q7S0FDRixFQUNELEVBQUUsa0JBQWtCLEVBQUUsSUFBSSxFQUFFLENBQzdCLENBQUE7SUFFRCxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQztRQUNuQixjQUFjLEVBQUUsYUFBYTtLQUM5QixDQUFDLENBQUE7QUFDSixDQUFDLENBQUE7QUFsQ1ksUUFBQSxJQUFJLFFBa0NoQiJ9