import { z } from 'zod';
export type VendorGetReservationParamsType = z.infer<typeof VendorGetReservationParams>;
export declare const VendorGetReservationParams: z.ZodObject<{
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
/**
 * @schema VendorUpdateReservation
 * type: object
 * properties:
 *   description:
 *     type: string
 *     description: The description of the reservation.
 *   location_id:
 *     type: string
 *     description: The location id of the reservation.
 *   quantity:
 *     type: number
 *     description: The number of items in the reservation.
 */
export type VendorUpdateReservationType = z.infer<typeof VendorUpdateReservation>;
export declare const VendorUpdateReservation: z.ZodObject<{
    location_id: z.ZodOptional<z.ZodString>;
    quantity: z.ZodOptional<z.ZodNumber>;
    description: z.ZodOptional<z.ZodNullable<z.ZodString>>;
}, "strict", z.ZodTypeAny, {
    location_id?: string | undefined;
    quantity?: number | undefined;
    description?: string | null | undefined;
}, {
    location_id?: string | undefined;
    quantity?: number | undefined;
    description?: string | null | undefined;
}>;
/**
 * @schema VendorCreateReservation
 * type: object
 * properties:
 *   description:
 *     type: string
 *     description: The description of the reservation.
 *   location_id:
 *     type: string
 *     description: The location id of the reservation.
 *   inventory_item_id:
 *     type: string
 *     description: The inventory item id of the reservation.
 *   line_item_id:
 *     type: string
 *     description: The line item id of the reservation.
 *   quantity:
 *     type: number
 *     description: The number of items in the reservation.
 */
export type VendorCreateReservationType = z.infer<typeof VendorCreateReservation>;
export declare const VendorCreateReservation: z.ZodObject<{
    line_item_id: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    location_id: z.ZodString;
    inventory_item_id: z.ZodString;
    quantity: z.ZodNumber;
    description: z.ZodOptional<z.ZodNullable<z.ZodString>>;
}, "strict", z.ZodTypeAny, {
    location_id: string;
    inventory_item_id: string;
    quantity: number;
    line_item_id?: string | null | undefined;
    description?: string | null | undefined;
}, {
    location_id: string;
    inventory_item_id: string;
    quantity: number;
    line_item_id?: string | null | undefined;
    description?: string | null | undefined;
}>;
