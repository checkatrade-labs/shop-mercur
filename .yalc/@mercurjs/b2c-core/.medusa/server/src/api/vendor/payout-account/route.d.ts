import { AuthenticatedMedusaRequest, MedusaResponse } from '@medusajs/framework';
import { VendorCreatePayoutAccountType } from './validators';
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
export declare const GET: (req: AuthenticatedMedusaRequest, res: MedusaResponse) => Promise<void>;
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
export declare const POST: (req: AuthenticatedMedusaRequest<VendorCreatePayoutAccountType>, res: MedusaResponse) => Promise<void>;
