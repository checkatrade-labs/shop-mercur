import { AuthenticatedMedusaRequest, MedusaResponse } from '@medusajs/framework/http';
/**
 * @oas [get] /vendor/promotions/{id}/{rule_type}
 * operationId: VendorGetPromotionsIdRuleType
 * summary: List Rules of a Promotion
 * description: Retrieve a list of rules in a promotion.
 * x-authenticated: true
 * parameters:
 *   - name: id
 *     in: path
 *     description: The promotion's ID.
 *     required: true
 *     schema:
 *       type: string
 *   - name: rule_type
 *     in: path
 *     description: The type of rules to retrieve.
 *     required: true
 *     schema:
 *       type: string
 *       enum:
 *         - rules
 *         - target-rules
 *         - buy-rules
 *   - name: fields
 *     in: query
 *     description: Comma-separated fields that should be included in the returned data. if a field is prefixed with `+` it will be added to the default fields, using `-` will remove it from the default
 *       fields. without prefix it will replace the entire default fields.
 *     required: false
 *     schema:
 *       type: string
 *       title: fields
 *       description: Comma-separated fields that should be included in the returned data. if a field is prefixed with `+` it will be added to the default fields, using `-` will remove it from the default
 *         fields. without prefix it will replace the entire default fields.
 * security:
 *   - api_token: []
 *   - cookie_auth: []
 *   - jwt_token: []
 * tags:
 *   - Vendor Promotions
 * responses:
 *   "200":
 *     description: OK
 *     content:
 *       application/json:
 *         schema:
 *           type: object
 *           description: The list of promotion rules.
 *           properties:
 *             rules:
 *               type: array
 *               description: The list of promotion rules.
 *               items:
 *                 $ref: "#/components/schemas/VendorPromotionRule"
 */
export declare const GET: (req: AuthenticatedMedusaRequest, res: MedusaResponse) => Promise<void>;
