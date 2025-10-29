"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StoreCreateWishlist = exports.StoreGetWishlistsParams = void 0;
const zod_1 = require("zod");
const validators_1 = require("@medusajs/medusa/api/utils/validators");
/**
 * @schema StoreGetWishlistsParams
 * title: "Get Wishlists Parameters"
 * description: "Parameters for retrieving a list of wishlists."
 * x-resourceId: StoreGetWishlistsParams
 * type: object
 * properties:
 *   offset:
 *     type: integer
 *     description: The number of wishlist entries to skip.
 *     default: 0
 *   limit:
 *     type: integer
 *     description: The maximum number of wishlist entries to return.
 *     default: 50
 */
exports.StoreGetWishlistsParams = (0, validators_1.createFindParams)({
    offset: 0,
    limit: 50
});
/**
 * @schema StoreCreateWishlist
 * title: "Create Wishlist Entry"
 * description: "A schema for creating a wishlist entry."
 * x-resourceId: StoreCreateWishlist
 * type: object
 * properties:
 *   reference:
 *     type: string
 *     enum: [product]
 *     description: The type of resource referenced by the wishlist entry.
 *   reference_id:
 *     type: string
 *     description: The ID of the resource being added to the wishlist.
 */
exports.StoreCreateWishlist = zod_1.z.object({
    reference: zod_1.z.enum(['product']),
    reference_id: zod_1.z.string()
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsaWRhdG9ycy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hcGkvc3RvcmUvd2lzaGxpc3QvdmFsaWRhdG9ycy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSw2QkFBdUI7QUFFdkIsc0VBQXdFO0FBTXhFOzs7Ozs7Ozs7Ozs7Ozs7R0FlRztBQUVVLFFBQUEsdUJBQXVCLEdBQUcsSUFBQSw2QkFBZ0IsRUFBQztJQUN0RCxNQUFNLEVBQUUsQ0FBQztJQUNULEtBQUssRUFBRSxFQUFFO0NBQ1YsQ0FBQyxDQUFBO0FBSUY7Ozs7Ozs7Ozs7Ozs7O0dBY0c7QUFFVSxRQUFBLG1CQUFtQixHQUFHLE9BQUMsQ0FBQyxNQUFNLENBQUM7SUFDMUMsU0FBUyxFQUFFLE9BQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUM5QixZQUFZLEVBQUUsT0FBQyxDQUFDLE1BQU0sRUFBRTtDQUN6QixDQUFDLENBQUEifQ==