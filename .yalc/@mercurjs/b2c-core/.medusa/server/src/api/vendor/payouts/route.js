"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GET = void 0;
const utils_1 = require("@medusajs/framework/utils");
const seller_payout_account_1 = __importDefault(require("../../../links/seller-payout-account"));
/**
 * @oas [get] /vendor/payouts
 * operationId: "VendorListPayouts"
 * summary: "List Payouts"
 * description: "Retrieves a list of payouts for the authenticated vendor/seller."
 * x-authenticated: true
 * parameters:
 *   - name: offset
 *     in: query
 *     schema:
 *       type: number
 *       default: 0
 *     required: false
 *     description: The number of items to skip before starting to collect the result set.
 *   - name: limit
 *     in: query
 *     schema:
 *       type: number
 *       default: 50
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
 *             payouts:
 *               type: array
 *               items:
 *                 $ref: "#/components/schemas/VendorPayout"
 *             count:
 *               type: integer
 *               description: The total number of payouts available
 *             offset:
 *               type: integer
 *               description: The number of items skipped before these items
 *             limit:
 *               type: integer
 *               description: The number of items per page
 *   "401":
 *     description: Unauthorized
 *     content:
 *       application/json:
 *         schema:
 *           type: object
 *           properties:
 *             message:
 *               type: string
 *               example: "Unauthorized"
 *   "403":
 *     description: Forbidden
 *     content:
 *       application/json:
 *         schema:
 *           type: object
 *           properties:
 *             message:
 *               type: string
 *               example: "Forbidden"
 *   "404":
 *     description: Not Found
 *     content:
 *       application/json:
 *         schema:
 *           type: object
 *           properties:
 *             message:
 *               type: string
 *               example: "Payout account is not connected to the seller"
 * tags:
 *   - Vendor Payouts
 * security:
 *   - api_token: []
 *   - cookie_auth: []
 */
const GET = async (req, res) => {
    const query = req.scope.resolve(utils_1.ContainerRegistrationKeys.QUERY);
    const { data: [sellerPayoutAccountRelation] } = await query.graph({
        entity: seller_payout_account_1.default.entryPoint,
        fields: ['payout_account_id'],
        filters: req.filterableFields
    });
    if (!sellerPayoutAccountRelation) {
        throw new utils_1.MedusaError(utils_1.MedusaError.Types.NOT_FOUND, 'Payout account is not connected to the seller');
    }
    const { data: payouts, metadata } = await query.graph({
        entity: 'payout',
        fields: req.queryConfig.fields,
        filters: {
            payout_account_id: sellerPayoutAccountRelation.payout_account_id
        },
        pagination: req.queryConfig.pagination
    });
    res.json({
        payouts,
        count: metadata.count,
        offset: metadata.skip,
        limit: metadata.take
    });
};
exports.GET = GET;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvYXBpL3ZlbmRvci9wYXlvdXRzL3JvdXRlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUNBLHFEQUdrQztBQUVsQyxpR0FBc0U7QUFFdEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBbUZHO0FBQ0ksTUFBTSxHQUFHLEdBQUcsS0FBSyxFQUN0QixHQUErQixFQUMvQixHQUFtQixFQUNuQixFQUFFO0lBQ0YsTUFBTSxLQUFLLEdBQUcsR0FBRyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsaUNBQXlCLENBQUMsS0FBSyxDQUFDLENBQUE7SUFFaEUsTUFBTSxFQUNKLElBQUksRUFBRSxDQUFDLDJCQUEyQixDQUFDLEVBQ3BDLEdBQUcsTUFBTSxLQUFLLENBQUMsS0FBSyxDQUFDO1FBQ3BCLE1BQU0sRUFBRSwrQkFBbUIsQ0FBQyxVQUFVO1FBQ3RDLE1BQU0sRUFBRSxDQUFDLG1CQUFtQixDQUFDO1FBQzdCLE9BQU8sRUFBRSxHQUFHLENBQUMsZ0JBQWdCO0tBQzlCLENBQUMsQ0FBQTtJQUVGLElBQUksQ0FBQywyQkFBMkIsRUFBRSxDQUFDO1FBQ2pDLE1BQU0sSUFBSSxtQkFBVyxDQUNuQixtQkFBVyxDQUFDLEtBQUssQ0FBQyxTQUFTLEVBQzNCLCtDQUErQyxDQUNoRCxDQUFBO0lBQ0gsQ0FBQztJQUVELE1BQU0sRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLFFBQVEsRUFBRSxHQUFHLE1BQU0sS0FBSyxDQUFDLEtBQUssQ0FBQztRQUNwRCxNQUFNLEVBQUUsUUFBUTtRQUNoQixNQUFNLEVBQUUsR0FBRyxDQUFDLFdBQVcsQ0FBQyxNQUFNO1FBQzlCLE9BQU8sRUFBRTtZQUNQLGlCQUFpQixFQUFFLDJCQUEyQixDQUFDLGlCQUFpQjtTQUNqRTtRQUNELFVBQVUsRUFBRSxHQUFHLENBQUMsV0FBVyxDQUFDLFVBQVU7S0FDdkMsQ0FBQyxDQUFBO0lBRUYsR0FBRyxDQUFDLElBQUksQ0FBQztRQUNQLE9BQU87UUFDUCxLQUFLLEVBQUUsUUFBUyxDQUFDLEtBQUs7UUFDdEIsTUFBTSxFQUFFLFFBQVMsQ0FBQyxJQUFJO1FBQ3RCLEtBQUssRUFBRSxRQUFTLENBQUMsSUFBSTtLQUN0QixDQUFDLENBQUE7QUFDSixDQUFDLENBQUE7QUFwQ1ksUUFBQSxHQUFHLE9Bb0NmIn0=