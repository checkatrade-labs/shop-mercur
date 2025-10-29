import { MedusaRequest, MedusaResponse } from '@medusajs/framework';
import { AdminGetSellerCustomerGroupsParamsType } from '../../validators';
/**
 * @oas [get] /admin/sellers/{id}/customer-groups
 * operationId: "AdminListSellerCustomerGroups"
 * summary: "List Seller Customer Groups"
 * description: "Retrieves a list of customer groups associated with a specific seller."
 * x-authenticated: true
 * parameters:
 *   - name: id
 *     in: path
 *     required: true
 *     schema:
 *       type: string
 *     description: The ID of the seller.
 *   - name: offset
 *     in: query
 *     schema:
 *       type: number
 *     required: false
 *     description: The number of items to skip before starting to collect the result set.
 *   - name: limit
 *     in: query
 *     schema:
 *       type: number
 *     required: false
 *     description: The number of items to return.
 *   - name: fields
 *     in: query
 *     schema:
 *       type: string
 *     required: false
 *     description: Comma-separated fields to include in the response.
 * responses:
 *   "200":
 *     description: OK
 *     content:
 *       application/json:
 *         schema:
 *           type: object
 *           properties:
 *             customer_groups:
 *               type: array
 *               description: Array of customer groups associated with the seller.
 *               items:
 *                 type: object
 *                 description: Customer group object with details.
 *             count:
 *               type: integer
 *               description: The total number of items available
 *             offset:
 *               type: integer
 *               description: The number of items skipped before these items
 *             limit:
 *               type: integer
 *               description: The number of items per page
 *   "404":
 *     description: Not Found
 *     content:
 *       application/json:
 *         schema:
 *           type: object
 *           properties:
 *             message:
 *               type: string
 *               example: "Seller not found"
 * tags:
 *   - Admin Sellers
 * security:
 *   - api_token: []
 *   - cookie_auth: []
 */
export declare const GET: (req: MedusaRequest<AdminGetSellerCustomerGroupsParamsType>, res: MedusaResponse) => Promise<void>;
