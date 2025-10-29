import { AuthenticatedMedusaRequest, MedusaResponse } from '@medusajs/framework/http';
/**
 * @oas [get] /vendor/orders/{id}/changes
 * operationId: "VendorListOrderChanges"
 * summary: "List Order Changes"
 * description: "Retrieves a list of order changes for the authenticated vendor."
 * x-authenticated: true
 * parameters:
 *   - name: fields
 *     in: query
 *     schema:
 *       type: string
 *     required: false
 *     description: Comma-separated fields to include in the response.
 *   - in: path
 *     name: id
 *     required: true
 *     description: The ID of the Order.
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
 *             order_changes:
 *               type: array
 *               items:
 *                 $ref: "#/components/schemas/VendorOrderChange"
 * tags:
 *   - Vendor Orders
 * security:
 *   - api_token: []
 *   - cookie_auth: []
 */
export declare const GET: (req: AuthenticatedMedusaRequest, res: MedusaResponse) => Promise<void>;
