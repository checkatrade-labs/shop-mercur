import { AuthenticatedMedusaRequest, MedusaResponse } from '@medusajs/framework/http';
import { VendorLinkCustomersToGroupType } from '../../validators';
/**
 * @oas [post] /vendor/customer-groups/{id}/customers
 * operationId: "VendorUpdateCustomersInCustomerGroup"
 * summary: "Link customers to customer group"
 * description: "Adds or removes customers to a customer group"
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
 *         $ref: "#/components/schemas/VendorLinkCustomersToGroup"
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
export declare const POST: (req: AuthenticatedMedusaRequest<VendorLinkCustomersToGroupType>, res: MedusaResponse) => Promise<void>;
