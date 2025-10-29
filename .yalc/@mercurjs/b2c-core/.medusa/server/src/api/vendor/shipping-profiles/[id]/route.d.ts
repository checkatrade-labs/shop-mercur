import { AuthenticatedMedusaRequest, MedusaResponse } from '@medusajs/framework';
import { VendorUpdateShippingProfileType } from '../validators';
/**
 * @oas [get] /vendor/shipping-profiles/{id}
 * operationId: "VendorGetShippingProfile"
 * summary: "Get shipping profile"
 * description: "Retrieves a shipping profile by id."
 * x-authenticated: true
 * parameters:
 *   - in: path
 *     name: id
 *     required: true
 *     description: The ID of the shipping profile
 *     schema:
 *       type: string
 *   - in: query
 *     name: fields
 *     description: The comma-separated fields to include in the response
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
 *             shipping_profile:
 *               $ref: "#/components/schemas/VendorShippingProfile"
 * tags:
 *   - Vendor Shipping Profiles
 * security:
 *   - api_token: []
 *   - cookie_auth: []
 */
export declare const GET: (req: AuthenticatedMedusaRequest, res: MedusaResponse) => Promise<void>;
/**
 * @oas [post] /vendor/shipping-profiles/{id}
 * operationId: "VendorUpdateShippingProfile"
 * summary: "Update a Shipping profile"
 * description: "Updates a Shipping profile."
 * x-authenticated: true
 * parameters:
 *   - in: path
 *     name: id
 *     required: true
 *     description: The ID of the shipping profile
 *     schema:
 *       type: string
 *   - in: query
 *     name: fields
 *     description: The comma-separated fields to include in the response
 *     schema:
 *       type: string
 * requestBody:
 *   content:
 *     application/json:
 *       schema:
 *         $ref: "#/components/schemas/VendorUpdateShippingProfile"
 * responses:
 *   "200":
 *     description: OK
 *     content:
 *       application/json:
 *         schema:
 *           type: object
 *           properties:
 *             shipping_profile:
 *               $ref: "#/components/schemas/VendorShippingProfile"
 * tags:
 *   - Vendor Shipping Profiles
 * security:
 *   - api_token: []
 *   - cookie_auth: []
 */
export declare const POST: (req: AuthenticatedMedusaRequest<VendorUpdateShippingProfileType>, res: MedusaResponse) => Promise<void>;
/**
 * @oas [delete] /vendor/shipping-profiles/{id}
 * operationId: "VendorDeleteShippingProfileById"
 * summary: "Delete shipping profile"
 * description: "Deletes shipping profile by id for the authenticated vendor."
 * x-authenticated: true
 * parameters:
 *   - in: path
 *     name: id
 *     required: true
 *     description: The ID of the shipping profile.
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
 *               description: The ID of the deleted resource
 *             object:
 *               type: string
 *               description: The type of the object that was deleted
 *             deleted:
 *               type: boolean
 *               description: Whether or not the items were deleted
 * tags:
 *   - Vendor Shipping Profiles
 * security:
 *   - api_token: []
 *   - cookie_auth: []
 */
export declare const DELETE: (req: AuthenticatedMedusaRequest, res: MedusaResponse) => Promise<void>;
