"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DELETE = void 0;
const workflows_1 = require("../../../../../../workflows/wishlist/workflows");
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
const DELETE = async (req, res) => {
    await workflows_1.deleteWishlistEntryWorkflow.run({
        container: req.scope,
        input: req.params
    });
    res.json({
        ...req.params,
        object: 'wishlist',
        deleted: true
    });
};
exports.DELETE = DELETE;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvYXBpL3N0b3JlL3dpc2hsaXN0L1tpZF0vcHJvZHVjdC9bcmVmZXJlbmNlX2lkXS9yb3V0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFFQSw4RUFBNEY7QUFFNUY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0EyQ0c7QUFFSSxNQUFNLE1BQU0sR0FBRyxLQUFLLEVBQ3pCLEdBQStCLEVBQy9CLEdBQW1CLEVBQ25CLEVBQUU7SUFDRixNQUFNLHVDQUEyQixDQUFDLEdBQUcsQ0FBQztRQUNwQyxTQUFTLEVBQUUsR0FBRyxDQUFDLEtBQUs7UUFDcEIsS0FBSyxFQUFFLEdBQUcsQ0FBQyxNQUFNO0tBQ2xCLENBQUMsQ0FBQTtJQUVGLEdBQUcsQ0FBQyxJQUFJLENBQUM7UUFDUCxHQUFHLEdBQUcsQ0FBQyxNQUFNO1FBQ2IsTUFBTSxFQUFFLFVBQVU7UUFDbEIsT0FBTyxFQUFFLElBQUk7S0FDZCxDQUFDLENBQUE7QUFDSixDQUFDLENBQUE7QUFkWSxRQUFBLE1BQU0sVUFjbEIifQ==