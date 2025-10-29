import { MedusaRequest, MedusaResponse } from '@medusajs/framework';
/**
 * @oas [get] /admin/order-sets
 * operationId: "AdminListOrderSets"
 * summary: "List Order Sets"
 * description: "Retrieves a list of order sets with optional filtering."
 * x-authenticated: true
 * parameters:
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
 *   - name: order_id
 *     in: query
 *     schema:
 *       type: string
 *     required: false
 *     description: Filter order sets by a specific order ID.
 * responses:
 *   "200":
 *     description: OK
 *     content:
 *       application/json:
 *         schema:
 *           type: object
 *           properties:
 *             order_sets:
 *               type: array
 *               items:
 *                 $ref: "#/components/schemas/AdminOrderSet"
 *             count:
 *               type: integer
 *               description: The total number of items available
 *             offset:
 *               type: integer
 *               description: The number of items skipped before these items
 *             limit:
 *               type: integer
 *               description: The number of items per page
 * tags:
 *   - Admin Order Sets
 * security:
 *   - api_token: []
 *   - cookie_auth: []
 */
export declare const GET: (req: MedusaRequest, res: MedusaResponse) => Promise<void>;
