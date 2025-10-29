import { AuthenticatedMedusaRequest, MedusaResponse } from "@medusajs/framework";
import { VendorCreateStockLocationType } from "./validators";
/**
 * @oas [post] /vendor/stock-locations
 * operationId: "VendorCreateStockLocation"
 * summary: "Create a Stock Location"
 * description: "Creates a Stock Location."
 * x-authenticated: true
 * parameters:
 *   - in: query
 *     name: fields
 *     description: The comma-separated fields to include in the response
 *     schema:
 *       type: string
 * requestBody:
 *   content:
 *     application/json:
 *       schema:
 *         $ref: "#/components/schemas/VendorCreateStockLocation"
 * responses:
 *   "201":
 *     description: Created
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
export declare const POST: (req: AuthenticatedMedusaRequest<VendorCreateStockLocationType>, res: MedusaResponse) => Promise<void>;
/**
 * @oas [get] /vendor/stock-locations
 * operationId: "VendorListStockLocations"
 * summary: "List Stock Locations"
 * description: "Retrieves a list of Stock Locations."
 * x-authenticated: true
 * parameters:
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
 *             stock_locations:
 *               type: array
 *               items:
 *                 $ref: "#/components/schemas/VendorStockLocation"
 * tags:
 *   - Vendor Stock Locations
 * security:
 *   - api_token: []
 *   - cookie_auth: []
 */
export declare const GET: (req: AuthenticatedMedusaRequest, res: MedusaResponse) => Promise<void>;
