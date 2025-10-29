import { AuthenticatedMedusaRequest, MedusaResponse } from '@medusajs/framework';
/**
 * @oas [get] /vendor/attributes/{id}
 * operationId: "VendorGetAttribute"
 * summary: "Get Attribute"
 * description: "Retrieves a specific attribute by its ID."
 * x-authenticated: true
 * parameters:
 *   - name: id
 *     in: path
 *     required: true
 *     schema:
 *       type: string
 *     description: The ID of the attribute to retrieve.
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
 *             attribute:
 *               $ref: "#/components/schemas/VendorAttribute"
 *   "404":
 *     description: Not Found
 *     content:
 *       application/json:
 *         schema:
 *           type: object
 *           properties:
 *             message:
 *               type: string
 *               example: "Attribute not found"
 * tags:
 *   - Vendor Attributes
 * security:
 *   - api_token: []
 *   - cookie_auth: []
 *   - jwt_token: []
 */
export declare const GET: (req: AuthenticatedMedusaRequest, res: MedusaResponse) => Promise<void>;
