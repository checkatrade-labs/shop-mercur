import { AuthenticatedMedusaRequest, MedusaResponse } from "@medusajs/framework";
import { VendorCreatePriceListPriceType } from "../../validators";
/**
 * @oas [post] /vendor/price-lists/{id}/prices
 * operationId: "VendorCreatePriceListPrice"
 * summary: "Create price list"
 * description: "Creates new price list price"
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
 *         $ref: "#/components/schemas/VendorCreatePriceListPrice"
 * responses:
 *   "201":
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
export declare const POST: (req: AuthenticatedMedusaRequest<VendorCreatePriceListPriceType>, res: MedusaResponse) => Promise<void>;
