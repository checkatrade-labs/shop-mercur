import { AuthenticatedMedusaRequest, MedusaResponse } from "@medusajs/framework";
import { VendorAcceptMemberInviteType } from "../validators";
/**
 * @oas [post] /vendor/invites/{id}/accept
 * operationId: "VendorAcceptInvite"
 * summary: "Accept a Member Invite"
 * description: "Accepts a member invite using the provided token and creates a new member."
 * x-authenticated: true
 * parameters:
 *   - in: path
 *     name: id
 *     required: true
 *     description: The ID of the invite to accept.
 *     schema:
 *       type: string
 * requestBody:
 *   content:
 *     application/json:
 *       schema:
 *         $ref: "#/components/schemas/VendorAcceptMemberInvite"
 * responses:
 *   "200":
 *     description: OK
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
export declare const POST: (req: AuthenticatedMedusaRequest<VendorAcceptMemberInviteType>, res: MedusaResponse) => Promise<void>;
