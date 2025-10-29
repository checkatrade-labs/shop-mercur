import { AuthenticatedMedusaRequest, MedusaResponse } from '@medusajs/framework/http';
/**
 * @oas [post] /vendor/orders/{id}/fulfillments/{fulfillment_id}/cancel
 * operationId: "VendorCancelOrderFulfillment"
 * summary: "Cancel order fulfillment."
 * description: "Cancel order fulfillment."
 * x-authenticated: true
 * parameters:
 * - in: path
 *   name: id
 *   required: true
 *   description: The ID of the Order.
 *   schema:
 *     type: string
 * - in: path
 *   name: fulfillment_id
 *   required: true
 *   description: The ID of the fulfillment.
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
