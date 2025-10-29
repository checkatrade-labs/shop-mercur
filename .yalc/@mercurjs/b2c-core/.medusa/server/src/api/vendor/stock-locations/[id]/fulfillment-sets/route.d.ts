import { AuthenticatedMedusaRequest, MedusaResponse } from "@medusajs/framework/http";
import { VendorCreateStockLocationFulfillmentSetType } from "../../validators";
/**
 * @oas [post] /vendor/stock-locations/{id}/fulfillment-sets
 * operationId: "VendorCreateStockLocationFulfillmentSet"
 * summary: "Create a Fulfillment Set"
 * description: "Creates a Fulfillment Set for a Stock Location."
 * x-authenticated: true
 * parameters:
 *   - in: path
 *     name: id
 *     required: true
 *     description: The ID of the Stock Location.
 *     schema:
 *       type: string
 *   - in: query
 *     name: fields
 *     description: The comma-separated fields to include in the response
 *     schema:
 *       type: string
 * requestBody:
 *   content:
 *     application/json:
 *       schema:
 *         $ref: "#/components/schemas/VendorCreateStockLocationFulfillmentSet"
 * responses:
 *   "200":
 *     description: OK
 *     content:
 *       application/json:
 *         schema:
 *           type: object
 *           properties:
 *             stock_location:
 *               $ref: "#/components/schemas/VendorStockLocation"
 * tags:
 *   - Vendor Stock Locations
 * security:
 *   - api_token: []
 *   - cookie_auth: []
 */
export declare const POST: (req: AuthenticatedMedusaRequest<VendorCreateStockLocationFulfillmentSetType>, res: MedusaResponse) => Promise<void>;
