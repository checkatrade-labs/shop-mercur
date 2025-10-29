import { z } from 'zod';
export type StoreGetWishlistsParamsType = z.infer<typeof StoreGetWishlistsParams>;
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
export declare const StoreGetWishlistsParams: z.ZodObject<{
    fields: z.ZodOptional<z.ZodString>;
    offset: z.ZodEffects<z.ZodDefault<z.ZodOptional<z.ZodNumber>>, number, unknown>;
    limit: z.ZodEffects<z.ZodDefault<z.ZodOptional<z.ZodNumber>>, number, unknown>;
    order: z.ZodOptional<z.ZodString> | z.ZodDefault<z.ZodOptional<z.ZodString>>;
    with_deleted: z.ZodEffects<z.ZodOptional<z.ZodBoolean>, boolean | undefined, unknown>;
}, "strip", z.ZodTypeAny, {
    offset: number;
    limit: number;
    fields?: string | undefined;
    order?: string | undefined;
    with_deleted?: boolean | undefined;
}, {
    fields?: string | undefined;
    offset?: unknown;
    limit?: unknown;
    order?: string | undefined;
    with_deleted?: unknown;
}>;
export type StoreCreateWishlistType = z.infer<typeof StoreCreateWishlist>;
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
export declare const StoreCreateWishlist: z.ZodObject<{
    reference: z.ZodEnum<["product"]>;
    reference_id: z.ZodString;
}, "strip", z.ZodTypeAny, {
    reference: "product";
    reference_id: string;
}, {
    reference: "product";
    reference_id: string;
}>;
