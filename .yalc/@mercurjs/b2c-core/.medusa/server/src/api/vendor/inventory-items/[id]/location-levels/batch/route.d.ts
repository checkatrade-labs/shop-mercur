import { AuthenticatedMedusaRequest, MedusaResponse } from '@medusajs/framework/http';
import { VendorBatchInventoryItemLocationsLevelType } from '../../../validators';
/**
 * @oas [post] /vendor/inventory-items/{id}/location-levels/batch
 * operationId: "VendorBatchInventoryItemLocationsLevels"
 * summary: "Update inventory item levels"
 * description: "Batch updates InventoryItem levels"
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
 *         $ref: "#/components/schemas/VendorBatchInventoryItemLocationsLevel"
 * responses:
 *   "200":
 *     description: Ok
 * tags:
 *   - Vendor Inventory Items
 * security:
 *   - api_token: []
 *   - cookie_auth: []
 */
export declare const POST: (req: AuthenticatedMedusaRequest<VendorBatchInventoryItemLocationsLevelType>, res: MedusaResponse) => Promise<void>;
