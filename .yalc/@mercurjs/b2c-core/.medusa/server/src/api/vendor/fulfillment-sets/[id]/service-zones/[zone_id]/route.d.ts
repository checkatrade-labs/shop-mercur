import { AuthenticatedMedusaRequest, MedusaResponse } from "@medusajs/framework";
import { VendorUpdateServiceZoneType } from "../../../validators";
/**
 * @oas [post] /vendor/fulfillment-sets/{id}/service-zones/{zone_id}
 * operationId: "VendorUpdateServiceZoneById"
 * summary: "Update a Service Zone"
 * description: "Updates a Service Zone."
 * x-authenticated: true
 * parameters:
 *   - in: path
 *     name: id
 *     required: true
 *     description: The ID of the Fulfillment Set.
 *     schema:
 *       type: string
 *   - in: path
 *     name: zone_id
 *     required: true
 *     description: The ID of the Service Zone.
 *     schema:
 *       type: string
 * requestBody:
 *   content:
 *     application/json:
 *       schema:
 *         $ref: "#/components/schemas/VendorUpdateServiceZone"
 * responses:
 *   "200":
 *     description: OK
 *     content:
 *       application/json:
 *         schema:
 *           type: object
 *           properties:
 *             fulfillment_set:
 *               $ref: "#/components/schemas/VendorFulfillmentSet"
 * tags:
 *   - Vendor Fulfillment Sets
 * security:
 *   - api_token: []
 *   - cookie_auth: []
 */
export declare const POST: (req: AuthenticatedMedusaRequest<VendorUpdateServiceZoneType>, res: MedusaResponse) => Promise<void>;
/**
 * @oas [delete] /vendor/fulfillment-sets/{id}/service-zones/{zone_id}
 * operationId: "VendorDeleteServiceZoneById"
 * summary: "Delete a Service Zone"
 * description: "Deletes a Service Zone."
 * x-authenticated: true
 * parameters:
 *   - in: path
 *     name: id
 *     required: true
 *     description: The ID of the Fulfillment Set.
 *     schema:
 *       type: string
 *   - in: path
 *     name: zone_id
 *     required: true
 *     description: The ID of the Service Zone.
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
 *               description: The ID of the deleted Service Zone.
 *             object:
 *               type: string
 *               description: The type of the object that was deleted.
 *               default: service_zone
 *             deleted:
 *               type: boolean
 *               description: Whether or not the items were deleted.
 *               default: true
 * tags:
 *   - Vendor Fulfillment Sets
 * security:
 *   - api_token: []
 *   - cookie_auth: []
 */
export declare const DELETE: (req: AuthenticatedMedusaRequest, res: MedusaResponse) => Promise<void>;
