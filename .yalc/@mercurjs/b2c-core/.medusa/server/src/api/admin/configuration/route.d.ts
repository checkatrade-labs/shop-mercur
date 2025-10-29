import { MedusaRequest, MedusaResponse } from '@medusajs/framework';
import { AdminCreateRuleType } from './validators';
/**
 * @oas [get] /admin/configuration
 * operationId: "AdminListRules"
 * summary: "List rules"
 * description: "Retrieves rules list"
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
 * responses:
 *   "200":
 *     description: OK
 *     content:
 *       application/json:
 *         schema:
 *           type: object
 *           properties:
 *             configuration_rules:
 *               type: array
 *               items:
 *                 $ref: "#/components/schemas/ConfigurationRule"
 *             count:
 *               type: integer
 *               description: The total number of requests
 *             offset:
 *               type: integer
 *               description: The number of requests skipped
 *             limit:
 *               type: integer
 *               description: The number of requests per page
 * tags:
 *   - Admin Configuration
 * security:
 *   - api_token: []
 *   - cookie_auth: []
 */
export declare const GET: (req: MedusaRequest, res: MedusaResponse) => Promise<void>;
/**
 * @oas [post] /admin/configuration
 * operationId: "AdminCreateRule"
 * summary: "Create a configuration rule"
 * description: "Creates a request to admin to accept new resource"
 * x-authenticated: true
 * requestBody:
 *   content:
 *     application/json:
 *       schema:
 *         $ref: "#/components/schemas/AdminCreateRule"
 * responses:
 *   "201":
 *     description: Created
 *     content:
 *       application/json:
 *         schema:
 *           type: object
 *           properties:
 *             configuration_rule:
 *               $ref: "#/components/schemas/ConfigurationRule"
 * tags:
 *   - Admin Configuration
 * security:
 *   - api_token: []
 *   - cookie_auth: []
 */
export declare const POST: (req: MedusaRequest<AdminCreateRuleType>, res: MedusaResponse) => Promise<void>;
