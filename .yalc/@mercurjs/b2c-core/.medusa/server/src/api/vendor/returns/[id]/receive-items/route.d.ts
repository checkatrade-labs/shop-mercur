import { AuthenticatedMedusaRequest, MedusaResponse } from '@medusajs/framework';
import { VendorReceiveReturnItemsSchemaType } from '../../validators';
/**
 * @oas [post] /vendor/returns/{id}/receive-items
 * operationId: "VendorAddReceiveReturnItemById"
 * summary: "Add received Item to Return"
 * description: "Add received items to return."
 * x-authenticated: true
 * parameters:
 *   - in: path
 *     name: id
 *     required: true
 *     description: The ID of the return.
 *     schema:
 *       type: string
 *   - name: fields
 *     in: query
 *     schema:
 *       type: string
 *     description: Comma-separated fields that should be included in the returned data.
 *     required: false
 * requestBody:
 *   content:
 *     application/json:
 *       schema:
 *         $ref: "#/components/schemas/VendorReceiveReturnItems"
 * responses:
 *   "200":
 *     description: OK
 *     content:
 *       application/json:
 *         schema:
 *           type: object
 *           properties:
 *             return:
 *               $ref: "#/components/schemas/VendorReturn"
 * tags:
 *   - Vendor Returns
 * security:
 *   - api_token: []
 *   - cookie_auth: []
 */
export declare const POST: (req: AuthenticatedMedusaRequest<VendorReceiveReturnItemsSchemaType>, res: MedusaResponse) => Promise<void>;
