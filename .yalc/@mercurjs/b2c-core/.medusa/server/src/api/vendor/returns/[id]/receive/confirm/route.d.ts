import { AuthenticatedMedusaRequest, MedusaResponse } from '@medusajs/framework';
/**
 * @oas [post] /vendor/returns/{id}/receive/confirm
 * operationId: VendorConfirmReturnReceiveById
 * summary: Confirm Return Receival
 * description: Confirm a return receival process.
 * x-authenticated: true
 * parameters:
 *   - name: id
 *     in: path
 *     description: The return's ID.
 *     required: true
 *     schema:
 *       type: string
 *   - name: fields
 *     in: query
 *     schema:
 *       type: string
 *     description: Comma-separated fields that should be included in the returned data. if a field is prefixed with `+` it will be added to the default fields, using `-` will remove it from the default
 *       fields. without prefix it will replace the entire default fields.
 *     required: false
 * security:
 *   - api_token: []
 *   - cookie_auth: []
 *   - jwt_token: []
 * tags:
 *   - Vendor Returns
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
 */
export declare const POST: (req: AuthenticatedMedusaRequest, res: MedusaResponse) => Promise<void>;
