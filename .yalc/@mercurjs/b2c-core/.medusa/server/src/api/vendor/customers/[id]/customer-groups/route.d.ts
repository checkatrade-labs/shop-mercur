import { AuthenticatedMedusaRequest, MedusaResponse } from '@medusajs/framework';
import { VendorUpdateCustomerGroupsType } from '../../validators';
/**
 * @oas [post] /vendor/customers/{id}/customer-groups
 * operationId: "VendorLinkCustomerToCustomerGroups"
 * summary: "Link customers to customer group"
 * description: "Adds or removes customer groups to a customer"
 * x-authenticated: true
 * parameters:
 *   - in: path
 *     name: id
 *     required: true
 *     description: The ID of the Customer.
 *     schema:
 *       type: string
 * requestBody:
 *   content:
 *     application/json:
 *       schema:
 *         $ref: "#/components/schemas/VendorUpdateCustomersCustomerGroups"
 * responses:
 *   "200":
 *     description: Ok
 *     content:
 *       application/json:
 *         schema:
 *           type: object
 *           properties:
 *             customer:
 *               $ref: "#/components/schemas/VendorCustomer"
 * tags:
 *   - Vendor Customers
 * security:
 *   - api_token: []
 *   - cookie_auth: []
 */
export declare const POST: (req: AuthenticatedMedusaRequest<VendorUpdateCustomerGroupsType>, res: MedusaResponse) => Promise<void>;
