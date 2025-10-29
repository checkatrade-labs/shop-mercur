import { AuthenticatedMedusaRequest, MedusaResponse } from '@medusajs/framework';
import { VendorUpdateShippingOptionType } from '../validators';
/**
 * @oas [get] /vendor/shipping-options/{id}
 * operationId: "VendorGetShippingOptionById"
 * summary: "Get a Shipping Option"
 * description: "Retrieves a Shipping Option by its ID."
 * x-authenticated: true
 * parameters:
 *   - in: path
 *     name: id
 *     required: true
 *     description: The ID of the Shipping Option.
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
 *             shipping_option:
 *               $ref: "#/components/schemas/VendorShippingOption"
 * tags:
 *   - Vendor Shipping Options
 * security:
 *   - api_token: []
 *   - cookie_auth: []
 */
export declare const GET: (req: AuthenticatedMedusaRequest, res: MedusaResponse) => Promise<void>;
/**
 * @oas [post] /vendor/shipping-options/{id}
 * operationId: "VendorUpdateShippingOptionById"
 * summary: "Update a Shipping Option"
 * description: "Updates a Shipping Option."
 * x-authenticated: true
 * parameters:
 *   - in: path
 *     name: id
 *     required: true
 *     description: The ID of the Shipping Option.
 *     schema:
 *       type: string
 * requestBody:
 *   content:
 *     application/json:
 *       schema:
 *         $ref: "#/components/schemas/VendorUpdateShippingOption"
 * responses:
 *   "200":
 *     description: OK
 *     content:
 *       application/json:
 *         schema:
 *           type: object
 *           properties:
 *             shipping_option:
 *               $ref: "#/components/schemas/VendorShippingOption"
 * tags:
 *   - Vendor Shipping Options
 * security:
 *   - api_token: []
 *   - cookie_auth: []
 */
export declare const POST: (req: AuthenticatedMedusaRequest<VendorUpdateShippingOptionType>, res: MedusaResponse) => Promise<void>;
/**
 * @oas [delete] /vendor/shipping-options/{id}
 * operationId: "VendorDeleteShippingOptionById"
 * summary: "Delete a Shipping Option"
 * description: "Deletes a Shipping Option."
 * x-authenticated: true
 * parameters:
 *   - in: path
 *     name: id
 *     required: true
 *     description: The ID of the Shipping Option.
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
 *               description: The ID of the deleted Shipping Option.
 *             object:
 *               type: string
 *               description: The type of the object that was deleted.
 *               default: shipping_option
 *             deleted:
 *               type: boolean
 *               description: Whether or not the items were deleted.
 *               default: true
 * tags:
 *   - Vendor Shipping Options
 * security:
 *   - api_token: []
 *   - cookie_auth: []
 */
export declare const DELETE: (req: AuthenticatedMedusaRequest, res: MedusaResponse) => Promise<void>;
