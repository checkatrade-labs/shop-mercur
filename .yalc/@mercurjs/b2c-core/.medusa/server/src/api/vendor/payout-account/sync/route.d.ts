import { AuthenticatedMedusaRequest, MedusaResponse } from '@medusajs/framework';
/**
 * @oas [post] /vendor/payout-account/sync
 * operationId: "VendorSyncPayoutAccount"
 * summary: "Sync Payout Account"
 * description: "Synchronizes the payout account data with the payment processor for the authenticated vendor/seller."
 * x-authenticated: true
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
 *               example: "Payout account not found"
 * tags:
 *   - Vendor Payout Account
 * security:
 *   - api_token: []
 *   - cookie_auth: []
 */
export declare const POST: (req: AuthenticatedMedusaRequest, res: MedusaResponse) => Promise<MedusaResponse>;
