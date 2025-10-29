import { AuthenticatedMedusaRequest, MedusaResponse } from '@medusajs/framework';
import { VendorBatchInventoryItemLevelsType } from '../../validators';
/**
 * @oas [post] /vendor/inventory-items/location-levels/batch
 * operationId: "VendorBatchInventoryItemLevels"
 * summary: "Update inventory item levels"
 * description: "Batch updates InventoryItem levels"
 * x-authenticated: true
 * requestBody:
 *   content:
 *     application/json:
 *       schema:
 *         $ref: "#/components/schemas/VendorBatchInventoryItemLevels"
 * responses:
 *   "200":
 *     description: Ok
 * tags:
 *   - Vendor Inventory Items
 * security:
 *   - api_token: []
 *   - cookie_auth: []
 */
export declare const POST: (req: AuthenticatedMedusaRequest<VendorBatchInventoryItemLevelsType>, res: MedusaResponse) => Promise<void>;
