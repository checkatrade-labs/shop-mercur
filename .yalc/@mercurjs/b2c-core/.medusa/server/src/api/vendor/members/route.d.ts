import { MedusaRequest, MedusaResponse } from '@medusajs/framework';
import { VendorGetMemberParamsType } from './validators';
/**
 * @oas [get] /vendor/members
 * operationId: "VendorListMembers"
 * summary: "List Members"
 * description: "Retrieves a list of members."
 * x-authenticated: true
 * parameters:
 *   - in: query
 *     name: limit
 *     schema:
 *       type: number
 *     description: The number of items to return. Default 50.
 *   - in: query
 *     name: offset
 *     schema:
 *       type: number
 *     description: The number of items to skip before starting the response. Default 0.
 *   - in: query
 *     name: fields
 *     schema:
 *       type: string
 *     description: Comma-separated fields that should be included in the returned data.
 *   - in: query
 *     name: expand
 *     schema:
 *       type: string
 *     description: Comma-separated relations that should be expanded in the returned data.
 *   - in: query
 *     name: order
 *     schema:
 *       type: string
 *     description: Field used to order the results.
 * responses:
 *   "200":
 *     description: OK
 *     content:
 *       application/json:
 *         schema:
 *           type: object
 *           properties:
 *             members:
 *               type: array
 *               items:
 *                 $ref: "#/components/schemas/VendorMember"
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
 *   - Vendor Members
 * security:
 *   - api_token: []
 *   - cookie_auth: []
 */
export declare const GET: (req: MedusaRequest<VendorGetMemberParamsType>, res: MedusaResponse) => Promise<void>;
