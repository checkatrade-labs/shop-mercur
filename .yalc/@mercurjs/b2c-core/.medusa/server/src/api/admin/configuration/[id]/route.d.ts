import { MedusaRequest, MedusaResponse } from '@medusajs/framework';
import { AdminUpdateRuleType } from '../validators';
/**
 * @oas [post] /admin/configuration/{id}
 * operationId: "AdminUpdateRule"
 * summary: "Update a configuration rule"
 * description: "Updates a rule"
 * x-authenticated: true
 * parameters:
 *   - in: path
 *     name: id
 *     required: true
 *     description: The ID of the Rule.
 *     schema:
 *       type: string
 * requestBody:
 *   content:
 *     application/json:
 *       schema:
 *         $ref: "#/components/schemas/AdminUpdateRule"
 * responses:
 *   "200":
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
export declare const POST: (req: MedusaRequest<AdminUpdateRuleType>, res: MedusaResponse) => Promise<void>;
