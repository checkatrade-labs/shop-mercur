import { z } from 'zod';
export type VendorGetReturnsParamsType = z.infer<typeof VendorGetReturnsParams>;
export declare const VendorGetReturnsParams: z.ZodObject<{
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
 * @schema VendorReceiveReturn
 * type: object
 * description: The return receival details.
 * properties:
 *   internal_note:
 *     type: string
 *     title: internal_note
 *     description: A note.
 *   description:
 *     type: string
 *     title: description
 *     description: The return's description.
 *   metadata:
 *     type: object
 *     description: The return's metadata, can hold custom key-value pairs.
 */
export type VendorReceiveReturnSchemaType = z.infer<typeof VendorReceiveReturnSchema>;
export declare const VendorReceiveReturnSchema: z.ZodObject<{
    internal_note: z.ZodOptional<z.ZodString>;
    description: z.ZodOptional<z.ZodString>;
    metadata: z.ZodOptional<z.ZodNullable<z.ZodRecord<z.ZodString, z.ZodUnknown>>>;
}, "strip", z.ZodTypeAny, {
    internal_note?: string | undefined;
    description?: string | undefined;
    metadata?: Record<string, unknown> | null | undefined;
}, {
    internal_note?: string | undefined;
    description?: string | undefined;
    metadata?: Record<string, unknown> | null | undefined;
}>;
/**
 * @schema VendorReceiveReturnItems
 * type: object
 * description: The items details.
 * x-schemaName: VendorReceiveReturnItems
 * properties:
 *   items:
 *     type: array
 *     description: The items details.
 *     items:
 *       type: object
 *       description: An item's details.
 *       properties:
 *         id:
 *           type: string
 *           title: id
 *           description: The ID of the item in the order.
 *         quantity:
 *           type: number
 *           title: quantity
 *           description: The item's quantity.
 *         internal_note:
 *           type: string
 *           title: internal_note
 *           description: A note.
 */
export type VendorReceiveReturnItemsSchemaType = z.infer<typeof VendorReceiveReturnItemsSchema>;
export declare const VendorReceiveReturnItemsSchema: z.ZodObject<{
    items: z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        quantity: z.ZodNumber;
        internal_note: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        id: string;
        quantity: number;
        internal_note?: string | undefined;
    }, {
        id: string;
        quantity: number;
        internal_note?: string | undefined;
    }>, "many">;
}, "strip", z.ZodTypeAny, {
    items: {
        id: string;
        quantity: number;
        internal_note?: string | undefined;
    }[];
}, {
    items: {
        id: string;
        quantity: number;
        internal_note?: string | undefined;
    }[];
}>;
/**
 * @schema VendorReturnsReceiveItemsAction
 * type: object
 * description: The return receival details.
 * properties:
 *   quantity:
 *     type: string
 *     description: Quantity of the item
 *   internal_note:
 *     type: string
 *     description: A note.
 */
export type VendorReturnsReceiveItemsActionSchemaType = z.infer<typeof VendorReturnsReceiveItemsActionSchema>;
export declare const VendorReturnsReceiveItemsActionSchema: z.ZodObject<{
    quantity: z.ZodOptional<z.ZodNumber>;
    internal_note: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodString>>>;
}, "strip", z.ZodTypeAny, {
    quantity?: number | undefined;
    internal_note?: string | null | undefined;
}, {
    quantity?: number | undefined;
    internal_note?: string | null | undefined;
}>;
/**
 * @schema VendorReturnsDismissItemsAction
 * type: object
 * description: The return receival details.
 * properties:
 *   quantity:
 *     type: string
 *     description: Quantity of the item
 *   internal_note:
 *     type: string
 *     description: A note.
 */
export type VendorReturnsDismissItemsActionSchemaType = z.infer<typeof VendorReturnsDismissItemsActionSchema>;
export declare const VendorReturnsDismissItemsActionSchema: z.ZodObject<{
    quantity: z.ZodOptional<z.ZodNumber>;
    internal_note: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodString>>>;
}, "strip", z.ZodTypeAny, {
    quantity?: number | undefined;
    internal_note?: string | null | undefined;
}, {
    quantity?: number | undefined;
    internal_note?: string | null | undefined;
}>;
