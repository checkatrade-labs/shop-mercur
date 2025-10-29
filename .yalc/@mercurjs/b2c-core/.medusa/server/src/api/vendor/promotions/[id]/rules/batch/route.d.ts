import { AuthenticatedMedusaRequest, MedusaResponse } from '@medusajs/framework/http';
import { VendorBatchPromotionRulesType } from '../../../validators';
/**
 * @oas [post] /vendor/promotions/{id}/rules/batch
 * operationId: "VendorBatchRules"
 * summary: "Batch rules"
 * description: "Performs batch create/delete operation on rules"
 * x-authenticated: true
 * parameters:
 *   - in: path
 *     name: id
 *     required: true
 *     description: The ID of the promotion.
 *     schema:
 *       type: string
 * requestBody:
 *   content:
 *     application/json:
 *       schema:
 *         $ref: "#/components/schemas/VendorBatchPromotionRule"
 * responses:
 *   "201":
 *     description: Created
 *     content:
 *       application/json:
 *         schema:
 *           type: object
 *           properties:
 *             promotion:
 *               $ref: "#/components/schemas/VendorPromotion"
 * tags:
 *   - Vendor Promotions
 * security:
 *   - api_token: []
 *   - cookie_auth: []
 */
export declare const POST: (req: AuthenticatedMedusaRequest<VendorBatchPromotionRulesType>, res: MedusaResponse) => Promise<void>;
