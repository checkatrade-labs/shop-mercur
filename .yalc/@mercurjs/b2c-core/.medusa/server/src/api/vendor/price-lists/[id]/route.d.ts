import { AuthenticatedMedusaRequest, MedusaResponse } from '@medusajs/framework';
import { VendorUpdatePriceListType } from '../validators';
/**
 * @oas [get] /vendor/price-lists/{id}
 * operationId: "VendorGetPriceListById"
 * summary: "Get price list details"
 * description: "Retrieves the details of specified price list."
 * x-authenticated: true
 * parameters:
 * - in: path
 *   name: id
 *   required: true
 *   description: The ID of the price list.
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
 *             price_list:
 *               $ref: "#/components/schemas/VendorPriceList"
 * tags:
 *   - Vendor Price Lists
 * security:
 *   - api_token: []
 *   - cookie_auth: []
 */
export declare const GET: (req: AuthenticatedMedusaRequest, res: MedusaResponse) => Promise<void>;
/**
 * @oas [post] /vendor/price-lists/{id}
 * operationId: "VendorUpdatePriceList"
 * summary: "Update price list"
 * description: "Updates price list price"
 * x-authenticated: true
 * parameters:
 *   - in: path
 *     name: id
 *     required: true
 *     description: The ID of the price list.
 *     schema:
 *       type: string
 *   - name: fields
 *     in: query
 *     schema:
 *       type: string
 *     required: false
 *     description: Comma-separated fields to include in the response.
 * requestBody:
 *   content:
 *     application/json:
 *       schema:
 *         $ref: "#/components/schemas/VendorUpdatePriceList"
 * responses:
 *   "200":
 *     description: OK
 *     content:
 *       application/json:
 *         schema:
 *           type: object
 *           properties:
 *             price_list:
 *               $ref: "#/components/schemas/VendorPriceList"
 * tags:
 *   - Vendor Price Lists
 * security:
 *   - api_token: []
 *   - cookie_auth: []
 */
export declare const POST: (req: AuthenticatedMedusaRequest<VendorUpdatePriceListType>, res: MedusaResponse) => Promise<void>;
/**
 * @oas [delete] /vendor/price-lists/{id}
 * operationId: VendorDeletePriceListsId
 * summary: Delete a Price List
 * description: Delete a price list.
 * x-authenticated: true
 * parameters:
 *   - name: id
 *     in: path
 *     description: The price list's ID.
 *     required: true
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
 *             id:
 *               type: string
 *               description: The ID of the deleted Price list
 *             object:
 *               type: string
 *               description: The type of the object that was deleted
 *             deleted:
 *               type: boolean
 *               description: Whether or not the items were deleted
 * tags:
 *   - Vendor Price Lists
 * security:
 *   - api_token: []
 *   - cookie_auth: []
 *   - jwt_token: []
 */
export declare const DELETE: (req: AuthenticatedMedusaRequest, res: MedusaResponse) => Promise<void>;
