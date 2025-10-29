import { AuthenticatedMedusaRequest, MedusaResponse } from '@medusajs/framework';
import { VendorCreateFulfillmentType } from '../../validators';
/**
 * @oas [post] /vendor/products/{id}/fulfillments
 * operationId: "VendorCreateFulfillment"
 * summary: "Update a Product"
 * description: "Updates an existing product for the authenticated vendor."
 * x-authenticated: true
 * parameters:
 *   - in: path
 *     name: id
 *     required: true
 *     description: The ID of the Product.
 *     schema:
 *       type: string
 * requestBody:
 *   content:
 *     application/json:
 *       schema:
 *         $ref: "#/components/schemas/VendorCreateFulfillment"
 * responses:
 *   "200":
 *     description: OK
 *     content:
 *       application/json:
 *         schema:
 *           type: object
 *           properties:
 *             fulfillment:
 *               $ref: "#/components/schemas/VendorOrderFulfillment"
 * tags:
 *   - Vendor Orders
 * security:
 *   - api_token: []
 *   - cookie_auth: []
 */
export declare const POST: (req: AuthenticatedMedusaRequest<VendorCreateFulfillmentType>, res: MedusaResponse) => Promise<void>;
