import { MedusaRequest, MedusaResponse } from "@medusajs/framework";
/**
 * @oas [get] /vendor/configuration
 * operationId: "VendorListRules"
 * summary: "List rules"
 * description: "Retrieves marketplace rules list"
 * x-authenticated: true
 * responses:
 *   "200":
 *     description: OK
 *     content:
 *       application/json:
 *         schema:
 *           type: object
 *           properties:
 *             configuration_rules:
 *               type: array
 *               items:
 *                 $ref: "#/components/schemas/ConfigurationRule"
 * tags:
 *   - Vendor Configuration
 * security:
 *   - api_token: []
 *   - cookie_auth: []
 */
export declare const GET: (req: MedusaRequest, res: MedusaResponse) => Promise<void>;
