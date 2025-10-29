import { AuthenticatedMedusaRequest, MedusaResponse } from '@medusajs/framework';
/**
 * @oas [get] /vendor/product-tags/{id}
 * operationId: "VendorGetProductTagById"
 * summary: "Get product tag"
 * description: "Retrieves product tag by id."
 * x-authenticated: true
 * parameters:
 *   - in: path
 *     name: id
 *     required: true
 *     description: The ID of the tag
 *     schema:
 *       type: string
 *   - in: query
 *     name: fields
 *     description: The comma-separated fields to include in the response
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
 *             product_tag:
 *               $ref: "#/components/schemas/VendorProductTag"
 * tags:
 *   - Vendor Product Tags
 * security:
 *   - api_token: []
 *   - cookie_auth: []
 */
export declare const GET: (req: AuthenticatedMedusaRequest, res: MedusaResponse) => Promise<void>;
