import { AuthenticatedMedusaRequest, MedusaResponse } from '@medusajs/framework';
import { VendorGetProductParamsType } from '../products/validators';
/**
 * @oas [get] /vendor/inventory-items
 * operationId: "VendorListInventoryItem"
 * summary: "List InventoryItems"
 * description: "Retrieves list of InventoryItems"
 * x-authenticated: true
 * responses:
 *   "200":
 *     description: Ok
 * tags:
 *   - Vendor Inventory Items
 * security:
 *   - api_token: []
 *   - cookie_auth: []
 */
export declare const GET: (req: AuthenticatedMedusaRequest<VendorGetProductParamsType>, res: MedusaResponse) => Promise<void>;
