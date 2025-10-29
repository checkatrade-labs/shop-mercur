import { AuthenticatedMedusaRequest, MedusaResponse } from '@medusajs/framework';
import { VendorUpdateInventoryLevelType } from '../../../validators';
/**
 * @oas [post] /vendor/inventory-items/{id}/location-levels/{location_id}
 * operationId: "VendorUpdateInventoryLevel"
 * summary: "Update inventory level"
 * description: "Updates inventory level of the InventoryItem in the specified location"
 * x-authenticated: true
 * parameters:
 *   - in: path
 *     name: id
 *     required: true
 *     description: The ID of the InventoryItem.
 *     schema:
 *       type: string
 *   - in: path
 *     name: location_id
 *     required: true
 *     description: The ID of the Stock Location.
 *     schema:
 *       type: string
 * requestBody:
 *   content:
 *     application/json:
 *       schema:
 *         $ref: "#/components/schemas/VendorUpdateInventoryLevel"
 * responses:
 *   "202":
 *     description: Accepted
 * tags:
 *   - Vendor Inventory Items
 * security:
 *   - api_token: []
 *   - cookie_auth: []
 */
export declare const POST: (req: AuthenticatedMedusaRequest<VendorUpdateInventoryLevelType>, res: MedusaResponse) => Promise<void>;
/**
 * @oas [get] /vendor/inventory-items/{id}/location-levels/{location_id}
 * operationId: "VendorGetInventoryLevel"
 * summary: "Get inventory level"
 * description: "Retrieves inventory level of the InventoryItem in the specified location"
 * x-authenticated: true
 * parameters:
 *   - in: path
 *     name: id
 *     required: true
 *     description: The ID of the InventoryItem.
 *     schema:
 *       type: string
 *   - in: path
 *     name: location_id
 *     required: true
 *     description: The ID of the Stock Location.
 *     schema:
 *       type: string
 * responses:
 *   "200":
 *     description: Inventory level
 * tags:
 *   - Vendor Inventory Items
 * security:
 *   - api_token: []
 *   - cookie_auth: []
 */
export declare const GET: (req: AuthenticatedMedusaRequest, res: MedusaResponse) => Promise<void>;
