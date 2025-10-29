import { AuthenticatedMedusaRequest, MedusaResponse } from "@medusajs/framework";
import { VendorInviteMemberType } from "./validators";
/**
 * @oas [post] /vendor/invites
 * operationId: "VendorCreateInvite"
 * summary: "Create a Member Invite"
 * description: "Creates a new member invite for the authenticated vendor."
 * x-authenticated: true
 * requestBody:
 *   content:
 *     application/json:
 *       schema:
 *         $ref: "#/components/schemas/VendorInviteMember"
 * responses:
 *   "201":
 *     description: Created
 *     content:
 *       application/json:
 *         schema:
 *           type: object
 *           properties:
 *             invite:
 *               $ref: "#/components/schemas/VendorMemberInvite"
 * tags:
 *   - Vendor Invites
 * security:
 *   - api_token: []
 *   - cookie_auth: []
 */
export declare const POST: (req: AuthenticatedMedusaRequest<VendorInviteMemberType>, res: MedusaResponse) => Promise<void>;
/**
 * @oas [get] /vendor/invites
 * operationId: "VendorListInvites"
 * summary: "List Member Invites"
 * description: "Retrieves a list of member invites for the authenticated vendor."
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
 *             invites:
 *               type: array
 *               items:
 *                 $ref: "#/components/schemas/VendorMemberInvite"
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
 *   - Vendor Invites
 * security:
 *   - api_token: []
 *   - cookie_auth: []
 */
export declare const GET: (req: AuthenticatedMedusaRequest, res: MedusaResponse) => Promise<void>;
