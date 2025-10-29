import { AuthenticatedMedusaRequest, MedusaResponse } from "@medusajs/framework";
import { VendorCreateSellerType } from "./validators";
/**
 * @oas [post] /vendor/sellers
 * operationId: "VendorCreateSeller"
 * summary: "Create a Seller"
 * description: "Creates a request to create a new seller with an initial owner member."
 * x-authenticated: true
 * requestBody:
 *   content:
 *     application/json:
 *       schema:
 *         $ref: "#/components/schemas/VendorCreateSeller"
 * responses:
 *   "201":
 *     description: Created
 *     content:
 *       application/json:
 *         schema:
 *           type: object
 *           properties:
 *             request:
 *               $ref: "#/components/schemas/VendorRequest"
 * tags:
 *   - Vendor Sellers
 * security:
 *   - api_token: []
 *   - cookie_auth: []
 */
export declare const POST: (req: AuthenticatedMedusaRequest<VendorCreateSellerType>, res: MedusaResponse) => Promise<void>;
