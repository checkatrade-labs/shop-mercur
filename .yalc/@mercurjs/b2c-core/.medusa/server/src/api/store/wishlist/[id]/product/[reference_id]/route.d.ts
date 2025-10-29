import { AuthenticatedMedusaRequest, MedusaResponse } from '@medusajs/framework';
/**
 * @oas [delete] /store/wishlist/{id}/product/{reference_id}
 * operationId: "StoreDeleteWishlist"
 * summary: "Delete a wishlist entry"
 * description: "Deletes a wishlist entry by its ID for the authenticated user."
 * x-authenticated: true
 * parameters:
 *   - name: id
 *     in: path
 *     required: true
 *     description: The ID of the wishlist entry to delete.
 *     schema:
 *       type: string
 *   - name: reference_id
 *     in: path
 *     required: true
 *     description: The ID of the wishlist entry to delete.
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
 *               description: Id of the wishlsit nad reference id.
 *             reference_id:
 *               type: string
 *             object:
 *              type: string
 *              description: The type of resource
 *             deleted:
 *               type: boolean
 *               description: Indicates if the wishlist entry was deleted.
 * tags:
 *   - Store Wishlist
 * security:
 *   - api_token: []
 *   - cookie_auth: []
 */
export declare const DELETE: (req: AuthenticatedMedusaRequest, res: MedusaResponse) => Promise<void>;
