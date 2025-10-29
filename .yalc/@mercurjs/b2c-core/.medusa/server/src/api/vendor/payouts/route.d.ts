import { AuthenticatedMedusaRequest, MedusaResponse } from '@medusajs/framework';
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
export declare const GET: (req: AuthenticatedMedusaRequest, res: MedusaResponse) => Promise<void>;
