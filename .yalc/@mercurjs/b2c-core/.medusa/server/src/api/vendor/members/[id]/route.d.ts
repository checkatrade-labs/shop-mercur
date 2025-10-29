import { AuthenticatedMedusaRequest, MedusaResponse } from "@medusajs/framework";
import { VendorUpdateMemberType } from "../validators";
/**
 * @oas [post] /vendor/members/{id}
 * operationId: "VendorUpdateMemberById"
 * summary: "Update a Member"
 * description: "Updates a member by id for the authenticated vendor."
 * x-authenticated: true
 * parameters:
 *   - in: path
 *     name: id
 *     required: true
 *     description: The ID of the Member.
 *     schema:
 *       type: string
 * requestBody:
 *   content:
 *     application/json:
 *       schema:
 *         $ref: "#/components/schemas/VendorUpdateMember"
 * responses:
 *   "200":
 *     description: OK
 *     content:
 *       application/json:
 *         schema:
 *           type: object
 *           properties:
 *             member:
 *               $ref: "#/components/schemas/VendorMember"
 * tags:
 *   - Vendor Members
 * security:
 *   - api_token: []
 *   - cookie_auth: []
 */
export declare const POST: (req: AuthenticatedMedusaRequest<VendorUpdateMemberType>, res: MedusaResponse) => Promise<void>;
/**
 * @oas [get] /vendor/members/{id}
 * operationId: "VendorGetMemberById"
 * summary: "Get a Member"
 * description: "Retrieves a member by id."
 * x-authenticated: true
 * parameters:
 *   - in: path
 *     name: id
 *     required: true
 *     description: The ID of the Member.
 *     schema:
 *       type: string
 * responses:
 *   "200":
 *     description: OK
 *     content:
 *       application/json:
 *         schema:
 *           type: object
 *           properties:
 *             member:
 *               $ref: "#/components/schemas/VendorMember"
 * tags:
 *   - Vendor Members
 * security:
 *   - api_token: []
 *   - cookie_auth: []
 */
export declare const GET: (req: AuthenticatedMedusaRequest, res: MedusaResponse) => Promise<void>;
/**
 * @oas [delete] /vendor/members/{id}
 * operationId: "VendorDeleteMemberById"
 * summary: "Delete a Member"
 * description: "Deletes a member by id."
 * x-authenticated: true
 * parameters:
 *   - in: path
 *     name: id
 *     required: true
 *     description: The ID of the Member.
 *     schema:
 *       type: string
 * responses:
 *   "200":
 *     description: OK
 *     content:
 *       application/json:
 *         schema:
 *           type: object
 *           properties:
 *             id:
 *               type: string
 *               description: The ID of the deleted Member
 *             object:
 *               type: string
 *               description: The type of the object that was deleted
 *             deleted:
 *               type: boolean
 *               description: Whether or not the items were deleted
 * tags:
 *   - Vendor Members
 * security:
 *   - api_token: []
 *   - cookie_auth: []
 */
export declare const DELETE: (req: AuthenticatedMedusaRequest, res: MedusaResponse) => Promise<void>;
