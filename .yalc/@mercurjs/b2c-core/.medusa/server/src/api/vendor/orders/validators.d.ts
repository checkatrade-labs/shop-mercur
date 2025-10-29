import * as z from 'zod';
export type VendorGetOrderParamsType = z.infer<typeof VendorGetOrderParams>;
export declare const VendorGetOrderParams: z.ZodObject<{
    offset: z.ZodEffects<z.ZodDefault<z.ZodOptional<z.ZodNumber>>, number, unknown>;
    limit: z.ZodEffects<z.ZodDefault<z.ZodOptional<z.ZodNumber>>, number, unknown>;
    fields: z.ZodOptional<z.ZodString>;
    order: z.ZodOptional<z.ZodString> | z.ZodDefault<z.ZodOptional<z.ZodString>>;
    with_deleted: z.ZodEffects<z.ZodOptional<z.ZodBoolean>, boolean | undefined, unknown>;
    created_at: z.ZodOptional<z.ZodUnion<[any, z.ZodObject<{
        $eq: any;
        $ne: any;
        $in: any;
        $nin: any;
        $like: any;
        $ilike: any;
        $re: any;
        $contains: any;
        $gt: any;
        $gte: any;
        $lt: any;
        $lte: any;
    }, "strip", z.ZodTypeAny, {
        $eq?: any;
        $ne?: any;
        $in?: any;
        $nin?: any;
        $like?: any;
        $ilike?: any;
        $re?: any;
        $contains?: any;
        $gt?: any;
        $gte?: any;
        $lt?: any;
        $lte?: any;
    }, {
        $eq?: any;
        $ne?: any;
        $in?: any;
        $nin?: any;
        $like?: any;
        $ilike?: any;
        $re?: any;
        $contains?: any;
        $gt?: any;
        $gte?: any;
        $lt?: any;
        $lte?: any;
    }>]>>;
    status: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodArray<z.ZodString, "many">, z.ZodUnion<[any, z.ZodObject<{
        $eq: any;
        $ne: any;
        $in: any;
        $nin: any;
        $like: any;
        $ilike: any;
        $re: any;
        $contains: any;
        $gt: any;
        $gte: any;
        $lt: any;
        $lte: any;
    }, "strip", z.ZodTypeAny, {
        $eq?: any;
        $ne?: any;
        $in?: any;
        $nin?: any;
        $like?: any;
        $ilike?: any;
        $re?: any;
        $contains?: any;
        $gt?: any;
        $gte?: any;
        $lt?: any;
        $lte?: any;
    }, {
        $eq?: any;
        $ne?: any;
        $in?: any;
        $nin?: any;
        $like?: any;
        $ilike?: any;
        $re?: any;
        $contains?: any;
        $gt?: any;
        $gte?: any;
        $lt?: any;
        $lte?: any;
    }>]>]>>;
    fulfillment_status: z.ZodOptional<z.ZodString>;
    payment_status: z.ZodOptional<z.ZodString>;
    region_id: z.ZodOptional<z.ZodString>;
    sales_channel_id: z.ZodOptional<z.ZodString>;
    q: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    offset: number;
    limit: number;
    fields?: string | undefined;
    order?: string | undefined;
    with_deleted?: boolean | undefined;
    created_at?: any;
    status?: any;
    fulfillment_status?: string | undefined;
    payment_status?: string | undefined;
    region_id?: string | undefined;
    sales_channel_id?: string | undefined;
    q?: string | undefined;
}, {
    offset?: unknown;
    limit?: unknown;
    fields?: string | undefined;
    order?: string | undefined;
    with_deleted?: unknown;
    created_at?: any;
    status?: any;
    fulfillment_status?: string | undefined;
    payment_status?: string | undefined;
    region_id?: string | undefined;
    sales_channel_id?: string | undefined;
    q?: string | undefined;
}>;
export type VendorGetOrderChangesParamsType = z.infer<typeof VendorGetOrderChangesParams>;
export declare const VendorGetOrderChangesParams: z.ZodObject<{
    fields: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    fields?: string | undefined;
}, {
    fields?: string | undefined;
}>;
/**
 * @schema VendorCreateFulfillment
 * type: object
 * properties:
 *   requires_shipping:
 *     type: boolean
 *   location_id:
 *     type: string
 *     description: The location id.
 *   items:
 *     type: array
 *     description: Items to create fulfillment.
 *     items:
 *       type: object
 *       properties:
 *         id:
 *           type: string
 *         quantity:
 *           type: number
 */
export type VendorCreateFulfillmentType = z.infer<typeof VendorCreateFulfillment>;
export declare const VendorCreateFulfillment: z.ZodObject<{
    items: z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        quantity: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        id: string;
        quantity: number;
    }, {
        id: string;
        quantity: number;
    }>, "many">;
    requires_shipping: z.ZodBoolean;
    location_id: z.ZodString;
}, "strip", z.ZodTypeAny, {
    location_id: string;
    requires_shipping: boolean;
    items: {
        id: string;
        quantity: number;
    }[];
}, {
    location_id: string;
    requires_shipping: boolean;
    items: {
        id: string;
        quantity: number;
    }[];
}>;
/**
 * @schema VendorOrderCreateShipment
 * type: object
 * properties:
 *   items:
 *     type: array
 *     description: Items in the shipment.
 *     items:
 *       type: object
 *       properties:
 *         id:
 *           type: string
 *         quantity:
 *           type: number
 *   labels:
 *     type: array
 *     description: Labels of the shipment
 *     items:
 *       type: object
 *       properties:
 *         tracking_number:
 *           type: string
 *         tracking_url:
 *           type: string
 *         label_url:
 *           type: string
 */
export type VendorOrderCreateShipmentType = z.infer<typeof VendorOrderCreateShipment>;
export declare const VendorOrderCreateShipment: z.ZodObject<{
    items: z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        quantity: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        id: string;
        quantity: number;
    }, {
        id: string;
        quantity: number;
    }>, "many">;
    labels: z.ZodOptional<z.ZodArray<z.ZodObject<{
        tracking_number: z.ZodString;
        tracking_url: z.ZodString;
        label_url: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        tracking_number: string;
        tracking_url: string;
        label_url: string;
    }, {
        tracking_number: string;
        tracking_url: string;
        label_url: string;
    }>, "many">>;
}, "strip", z.ZodTypeAny, {
    items: {
        id: string;
        quantity: number;
    }[];
    labels?: {
        tracking_number: string;
        tracking_url: string;
        label_url: string;
    }[] | undefined;
}, {
    items: {
        id: string;
        quantity: number;
    }[];
    labels?: {
        tracking_number: string;
        tracking_url: string;
        label_url: string;
    }[] | undefined;
}>;
