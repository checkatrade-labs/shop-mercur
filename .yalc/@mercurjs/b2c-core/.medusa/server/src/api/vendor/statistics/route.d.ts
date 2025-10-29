import { AuthenticatedMedusaRequest, MedusaResponse } from "@medusajs/framework";
/**
 * @oas [get] /vendor/statistics
 * operationId: "VendorGetStoreStatistics"
 * summary: "GetStoreStatistics"
 * description: "Retrieves store statistics."
 * x-authenticated: true
 * parameters:
 *   - name: time_from
 *     in: query
 *     schema:
 *       type: string
 *   - name: time_to
 *     in: query
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
 *             orders:
 *               type: array
 *               items:
 *                 $ref: "#/components/schemas/VendorDateStatistics"
 *             customers:
 *               type: array
 *               items:
 *                 $ref: "#/components/schemas/VendorDateStatistics"
 * tags:
 *   - Vendor Statistics
 * security:
 *   - api_token: []
 *   - cookie_auth: []
 */
export declare const GET: (req: AuthenticatedMedusaRequest, res: MedusaResponse) => Promise<void>;
