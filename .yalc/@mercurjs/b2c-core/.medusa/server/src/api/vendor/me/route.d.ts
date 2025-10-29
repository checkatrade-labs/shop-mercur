import { AuthenticatedMedusaRequest } from '@medusajs/framework';
import { MedusaResponse } from '@medusajs/framework';
/**
 * @oas [get] /vendor/me
 * operationId: "VendorGetMemberMe"
 * summary: "Get Current Member"
 * description: "Retrieves the member associated with the authenticated user."
 * x-authenticated: true
 * responses:
 *   "200":
 *     description: OK
 *     content:
 *       application/json:
 *         schema:
 *           type: object
 *           properties:
 *             member:
 *               $ref: "#/components/schemas/VendorMember"
 * tags:
 *   - Vendor Current Member
 * security:
 *   - api_token: []
 *   - cookie_auth: []
 */
export declare const GET: (req: AuthenticatedMedusaRequest, res: MedusaResponse) => Promise<void>;
