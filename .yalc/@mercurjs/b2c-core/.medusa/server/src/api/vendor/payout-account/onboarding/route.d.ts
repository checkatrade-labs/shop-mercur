import { AuthenticatedMedusaRequest, MedusaResponse } from '@medusajs/framework';
import { VendorCreateOnboardingType } from '../validators';
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
export declare const POST: (req: AuthenticatedMedusaRequest<VendorCreateOnboardingType>, res: MedusaResponse) => Promise<void>;
