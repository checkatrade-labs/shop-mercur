import { AuthenticatedMedusaRequest, MedusaResponse } from '@medusajs/framework';
import { VendorUpdateSellerType } from '../validators';
/**
 * @oas [get] /vendor/sellers/me
 * operationId: "VendorGetSellerMe"
 * summary: "Get Current Seller"
 * description: "Retrieves the seller associated with the authenticated user."
 * x-authenticated: true
 * responses:
 *   "200":
 *     description: OK
 *     content:
 *       application/json:
 *         schema:
 *           type: object
 *           properties:
 *             seller:
 *               $ref: "#/components/schemas/VendorSeller"
 * tags:
 *   - Vendor Sellers
 * security:
 *   - api_token: []
 *   - cookie_auth: []
 */
export declare const GET: (req: AuthenticatedMedusaRequest, res: MedusaResponse) => Promise<void>;
/**
 * @oas [post] /vendor/sellers/me
 * operationId: "VendorUpdateSellerMe"
 * summary: "Update Current Seller"
 * description: "Updates the seller associated with the authenticated user."
 * x-authenticated: true
 * requestBody:
 *   content:
 *     application/json:
 *       schema:
 *         $ref: "#/components/schemas/VendorUpdateSeller"
 * responses:
 *   "200":
 *     description: OK
 *     content:
 *       application/json:
 *         schema:
 *           type: object
 *           properties:
 *             seller:
 *               $ref: "#/components/schemas/VendorSeller"
 * tags:
 *   - Vendor Sellers
 * security:
 *   - api_token: []
 *   - cookie_auth: []
 */
export declare const POST: (req: AuthenticatedMedusaRequest<VendorUpdateSellerType>, res: MedusaResponse) => Promise<void>;
