import { AuthenticatedMedusaRequest, MedusaResponse } from '@medusajs/framework';
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
export declare const GET: (req: AuthenticatedMedusaRequest, res: MedusaResponse) => Promise<void>;
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
export declare const POST: (req: AuthenticatedMedusaRequest, res: MedusaResponse) => Promise<void>;
