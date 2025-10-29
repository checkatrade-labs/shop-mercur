import { AuthenticatedMedusaRequest, MedusaResponse } from '@medusajs/framework';
import { VendorCreateCustomerGroupType } from '../validators';
/**
 * @oas [get] /vendor/customer-groups/{id}
 * operationId: "VendorGetCustomerGroupById"
 * summary: "Retrieve customer group by id"
 * description: "Retrieve customer group by id"
 * x-authenticated: true
 * parameters:
 *   - in: path
 *     name: id
 *     required: true
 *     description: The ID of the Customer group.
 *     schema:
 *       type: string
 *   - in: query
 *     name: fields
 *     schema:
 *       type: string
 *     description: Comma-separated fields that should be included in the returned data.
 * responses:
 *   "200":
 *     description: OK
 *     content:
 *       application/json:
 *         schema:
 *           type: object
 *           properties:
 *             member:
 *               $ref: "#/components/schemas/VendorCustomerGroup"
 * tags:
 *   - Vendor Customer Groups
 * security:
 *   - api_token: []
 *   - cookie_auth: []
 */
export declare const GET: (req: AuthenticatedMedusaRequest, res: MedusaResponse) => Promise<void>;
/**
 * @oas [post] /vendor/customer-groups/{id}
 * operationId: "VendorUpdateCustomerGroup"
 * summary: "Update customer group"
 * description: "Updates customer group"
 * x-authenticated: true
 * parameters:
 *   - in: path
 *     name: id
 *     required: true
 *     description: The ID of the Customer group.
 *     schema:
 *       type: string
 * requestBody:
 *   content:
 *     application/json:
 *       schema:
 *         $ref: "#/components/schemas/VendorCreateCustomerGroup"
 * responses:
 *   "200":
 *     description: Ok
 *     content:
 *       application/json:
 *         schema:
 *           type: object
 *           properties:
 *             customer_group:
 *               $ref: "#/components/schemas/VendorCustomerGroup"
 * tags:
 *   - Vendor Customer Groups
 * security:
 *   - api_token: []
 *   - cookie_auth: []
 */
export declare const POST: (req: AuthenticatedMedusaRequest<VendorCreateCustomerGroupType>, res: MedusaResponse) => Promise<void>;
/**
 * @oas [delete] /vendor/customer-groups/{id}
 * operationId: "VendorDeleteCustomerGroupById"
 * summary: "Delete a customer group"
 * description: "Deletes a customer group by id."
 * x-authenticated: true
 * parameters:
 *   - in: path
 *     name: id
 *     required: true
 *     description: The ID of the Customer group.
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
 *             id:
 *               type: string
 *               description: The ID of the deleted Customer group
 *             object:
 *               type: string
 *               description: The type of the object that was deleted
 *             deleted:
 *               type: boolean
 *               description: Whether or not the items were deleted
 * tags:
 *   - Vendor Customer Groups
 * security:
 *   - api_token: []
 *   - cookie_auth: []
 */
export declare const DELETE: (req: AuthenticatedMedusaRequest, res: MedusaResponse) => Promise<void>;
