import { AuthenticatedMedusaRequest, MedusaResponse } from '@medusajs/framework';
import { VendorUpdateInventoryItemType } from '../validators';
/**
 * @oas [get] /vendor/inventory-items/{id}
 * operationId: "VendorGetInventoryItem"
 * summary: "Get inventory item"
 * description: "Retrieves InventoryItem of specified id"
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
 * @oas [post] /vendor/inventory-items/{id}
 * operationId: "VendorUpdateInventoryItem"
 * summary: "Update inventory item"
 * description: "Updates InventoryItem of specified id"
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
 *         $ref: "#/components/schemas/VendorUpdateInventoryItem"
 * responses:
 *   "200":
 *     description: Ok
 * tags:
 *   - Vendor Inventory Items
 * security:
 *   - api_token: []
 *   - cookie_auth: []
 */
export declare const POST: (req: AuthenticatedMedusaRequest<VendorUpdateInventoryItemType>, res: MedusaResponse) => Promise<void>;
