import { AuthenticatedMedusaRequest, MedusaResponse } from '@medusajs/framework';
import { VendorCreateInventoryLocationLevelType } from '../../validators';
/**
 * @oas [get] /vendor/inventory-items/{id}/location-levels
 * operationId: "VendorGetItemInventoryLevel"
 * summary: "Get InventoryLevels of specified InventoryItem "
 * description: "Retrieves inventory levels of the InventoryItem"
 * x-authenticated: true
 * parameters:
 *   - in: path
 *     name: id
 *     required: true
 *     description: The ID of the InventoryItem.
 *     schema:
 *       type: string
 * responses:
 *   "200":
 *     description: Ok
 * tags:
 *   - Vendor Inventory Items
 * security:
 *   - api_token: []
 *   - cookie_auth: []
 */
export declare const GET: (req: AuthenticatedMedusaRequest, res: MedusaResponse) => Promise<void>;
/**
 * @oas [post] /vendor/inventory-items/{id}/location-levels
 * operationId: "VendorCreateInventoryLevel"
 * summary: "Create inventory level"
 * description: "Creates inventory level of the InventoryItem in the specified location"
 * x-authenticated: true
 * parameters:
 *   - in: path
 *     name: id
 *     required: true
 *     description: The ID of the InventoryItem.
 *     schema:
 *       type: string
 * requestBody:
 *   content:
 *     application/json:
 *       schema:
 *         $ref: "#/components/schemas/VendorCreateInventoryLevel"
 * responses:
 *   "201":
 *     description: Ok
 * tags:
 *   - Vendor Inventory Items
 * security:
 *   - api_token: []
 *   - cookie_auth: []
 */
export declare const POST: (req: AuthenticatedMedusaRequest<VendorCreateInventoryLocationLevelType>, res: MedusaResponse) => Promise<void>;
