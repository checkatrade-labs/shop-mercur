import { AuthenticatedMedusaRequest, MedusaResponse } from "@medusajs/framework";
import { VendorCreateShippingProfileType } from "./validators";
/**
 * @oas [post] /vendor/shipping-profiles
 * operationId: "VendorCreateShippingProfile"
 * summary: "Create a Shipping profile"
 * description: "Creates a Shipping profile."
 * x-authenticated: true
 * parameters:
 *   - in: query
 *     name: fields
 *     description: The comma-separated fields to include in the response
 *     schema:
 *       type: string
 * requestBody:
 *   content:
 *     application/json:
 *       schema:
 *         $ref: "#/components/schemas/VendorCreateShippingProfile"
 * responses:
 *   "201":
 *     description: Created
 *     content:
 *       application/json:
 *         schema:
 *           type: object
 *           properties:
 *             shipping_profile:
 *               $ref: "#/components/schemas/VendorShippingProfile"
 * tags:
 *   - Vendor Shipping Profiles
 * security:
 *   - api_token: []
 *   - cookie_auth: []
 */
export declare const POST: (req: AuthenticatedMedusaRequest<VendorCreateShippingProfileType>, res: MedusaResponse) => Promise<void>;
/**
 * @oas [get] /vendor/shipping-profiles
 * operationId: "VendorListShippingProfiles"
 * summary: "List shipping profiles"
 * description: "Retrieves a list of shipping profiles."
 * x-authenticated: true
 * parameters:
 *   - in: query
 *     name: fields
 *     description: The comma-separated fields to include in the response
 *     schema:
 *       type: string
 * responses:
 *   "200":
 *     description: OK
 *     content:
 *       application/json:
 *         schema:
 *           type: object
 *           properties:
 *             shipping_profiles:
 *               type: array
 *               items:
 *                 $ref: "#/components/schemas/VendorShippingProfile"
 * tags:
 *   - Vendor Shipping Profiles
 * security:
 *   - api_token: []
 *   - cookie_auth: []
 */
export declare const GET: (req: AuthenticatedMedusaRequest, res: MedusaResponse) => Promise<void>;
