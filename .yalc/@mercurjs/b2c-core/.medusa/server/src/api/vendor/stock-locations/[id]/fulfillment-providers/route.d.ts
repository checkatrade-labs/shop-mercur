import { AuthenticatedMedusaRequest, MedusaResponse } from '@medusajs/framework/http';
import { LinkMethodRequest } from '@medusajs/framework/types';
/**
 * @oas [post] /vendor/stock-locations/{id}/fulfillment-providers
 * operationId: "VendorUpdateStockLocationFulfillmentProviders"
 * summary: "Update Stock Location Fulfillment Providers"
 * description: "Updates the fulfillment providers of a Stock Location."
 * x-authenticated: true
 * parameters:
 *   - in: path
 *     name: id
 *     required: true
 *     description: The ID of the Stock Location
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
 *         type: object
 *         properties:
 *           add:
 *             type: array
 *             description: Array of fulfillment provider IDs to add
 *             items:
 *               type: string
 *           remove:
 *             type: array
 *             description: Array of fulfillment provider IDs to remove
 *             items:
 *               type: string
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
export declare const POST: (req: AuthenticatedMedusaRequest<LinkMethodRequest>, res: MedusaResponse) => Promise<void>;
