import { MedusaRequest, MedusaResponse } from '@medusajs/framework';
/**
 * @oas [get] /store/seller/{handle}
 * operationId: "StoreGetSellerByHandle"
 * summary: "Get seller"
 * description: "Retrieves seller of specified handle"
 * parameters:
 *   - in: path
 *     name: handle
 *     required: true
 *     description: The handle of the seller
 *     schema:
 *       type: string
 *   - name: fields
 *     in: query
 *     schema:
 *       type: string
 *     required: false
 *     description: Comma-separated fields to include in the response.
 * responses:
 *   "200":
 *     description: OK
 *     content:
 *       application/json:
 *         schema:
 *           type: object
 *           properties:
 *             product:
 *               $ref: "#/components/schemas/StoreSeller"
 * tags:
 *   - Store Sellers
 * security:
 *   - api_token: []
 *   - cookie_auth: []
 */
export declare const GET: (req: MedusaRequest, res: MedusaResponse) => Promise<void>;
