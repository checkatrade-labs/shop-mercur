import { AuthenticatedMedusaRequest, MedusaResponse } from "@medusajs/framework";
import { VendorCreateShippingOptionType, VendorGetShippingParamsType } from "./validators";
/**
 * @oas [post] /vendor/shipping-options
 * operationId: "VendorCreateShippingOption"
 * summary: "Create a Shipping Option"
 * description: "Creates a Shipping Option for authenticated vendor."
 * x-authenticated: true
 * requestBody:
 *   content:
 *     application/json:
 *       schema:
 *         $ref: "#/components/schemas/VendorCreateShippingOption"
 * responses:
 *   "201":
 *     description: Created
 *     content:
 *       application/json:
 *         schema:
 *           type: object
 *           properties:
 *             shipping_option:
 *               $ref: "#/components/schemas/VendorShippingOption"
 * tags:
 *   - Vendor Shipping Options
 * security:
 *   - api_token: []
 *   - cookie_auth: []
 */
export declare const POST: (req: AuthenticatedMedusaRequest<VendorCreateShippingOptionType>, res: MedusaResponse) => Promise<void>;
/**
 * @oas [get] /vendor/shipping-options
 * operationId: "VendorListShippingOptions"
 * summary: "List Shipping Options"
 * description: "Retrieves a list of Shipping Options for authenticated vendor."
 * x-authenticated: true
 * responses:
 *   "200":
 *     description: OK
 *     content:
 *       application/json:
 *         schema:
 *           type: object
 *           properties:
 *             shipping_options:
 *               type: array
 *               items:
 *                 $ref: "#/components/schemas/VendorShippingOption"
 *             count:
 *               type: integer
 *               description: The total number of items available
 *             offset:
 *               type: integer
 *               description: The number of items skipped before these items
 *             limit:
 *               type: integer
 *               description: The number of items per page
 * tags:
 *   - Vendor Shipping Options
 * security:
 *   - api_token: []
 *   - cookie_auth: []
 */
export declare const GET: (req: AuthenticatedMedusaRequest<VendorGetShippingParamsType>, res: MedusaResponse) => Promise<void>;
