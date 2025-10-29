import { AuthenticatedMedusaRequest, MedusaResponse } from '@medusajs/framework';
/**
 * @oas [get] /vendor/customers/{id}
 * operationId: "VendorGetCustomer"
 * summary: "Get Customer details"
 * description: "Retrieves the details of specified customer."
 * x-authenticated: true
 * parameters:
 * - in: path
 *   name: id
 *   required: true
 *   description: The ID of the customer.
 *   schema:
 *     type: string
 * responses:
 *   "200":
 *     description: OK
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
export declare const GET: (req: AuthenticatedMedusaRequest, res: MedusaResponse) => Promise<void>;
