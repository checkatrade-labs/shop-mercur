import { AuthenticatedMedusaRequest, MedusaResponse } from '@medusajs/framework';
/**
 * @oas [post] /vendor/orders/{id}/cancel
 * operationId: "VendorCancelOrder"
 * summary: "Mark order as cancelled"
 * description: "Mark order as cancelled."
 * x-authenticated: true
 * parameters:
 * - in: path
 *   name: id
 *   required: true
 *   description: The ID of the Order.
 *   schema:
 *     type: string
 * responses:
 *   "200":
 *     description: OK
 *     content:
 *       application/json:
 *         schema:
 *           type: object
 *           properties:
 *             member:
 *               $ref: "#/components/schemas/VendorOrderDetails"
 * tags:
 *   - Vendor Orders
 * security:
 *   - api_token: []
 *   - cookie_auth: []
 */
export declare const POST: (req: AuthenticatedMedusaRequest, res: MedusaResponse) => Promise<void>;
