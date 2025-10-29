import { z } from 'zod';
export type VendorFulfillmentSetParamsType = z.infer<typeof VendorFulfillmentSetParams>;
export declare const VendorFulfillmentSetParams: z.ZodObject<{
    fields: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    fields?: string | undefined;
}, {
    fields?: string | undefined;
}>;
/**
 * @schema GeoZoneCountry
 * type: object
 * required:
 *   - country_code
 *   - type
 * properties:
 *   country_code:
 *     type: string
 *     description: The country code of the geo zone.
 *   type:
 *     type: string
 *     enum: [country]
 *     description: The type of the geo zone.
 */
export declare const geoZoneCountry: z.ZodObject<{
    country_code: z.ZodString;
    type: z.ZodLiteral<"country">;
}, "strip", z.ZodTypeAny, {
    type: "country";
    country_code: string;
}, {
    type: "country";
    country_code: string;
}>;
/**
 * @schema GeoZoneProvince
 * type: object
 * required:
 *   - country_code
 *   - type
 *   - province_code
 * properties:
 *   country_code:
 *     type: string
 *     description: The country code of the geo zone.
 *   type:
 *     type: string
 *     enum: [province]
 *     description: The type of the geo zone.
 *   province_code:
 *     type: string
 *     description: The province code of the geo zone.
 */
export declare const geoZoneProvince: z.ZodObject<{
    country_code: z.ZodString;
    type: z.ZodLiteral<"province">;
    province_code: z.ZodString;
}, "strip", z.ZodTypeAny, {
    type: "province";
    country_code: string;
    province_code: string;
}, {
    type: "province";
    country_code: string;
    province_code: string;
}>;
/**
 * @schema GeoZoneCity
 * type: object
 * required:
 *   - country_code
 *   - type
 *   - province_code
 *   - city
 * properties:
 *   country_code:
 *     type: string
 *     description: The country code of the geo zone.
 *   type:
 *     type: string
 *     enum: [city]
 *     description: The type of the geo zone.
 *   province_code:
 *     type: string
 *     description: The province code of the geo zone.
 *   city:
 *     type: string
 *     description: The city name of the geo zone.
 */
export declare const geoZoneCity: z.ZodObject<{
    country_code: z.ZodString;
    type: z.ZodLiteral<"city">;
    province_code: z.ZodString;
    city: z.ZodString;
}, "strip", z.ZodTypeAny, {
    type: "city";
    city: string;
    country_code: string;
    province_code: string;
}, {
    type: "city";
    city: string;
    country_code: string;
    province_code: string;
}>;
/**
 * @schema GeoZoneZip
 * type: object
 * required:
 *   - country_code
 *   - type
 *   - province_code
 *   - city
 *   - postal_expression
 * properties:
 *   country_code:
 *     type: string
 *     description: The country code of the geo zone.
 *   type:
 *     type: string
 *     enum: [zip]
 *     description: The type of the geo zone.
 *   province_code:
 *     type: string
 *     description: The province code of the geo zone.
 *   city:
 *     type: string
 *     description: The city name of the geo zone.
 *   postal_expression:
 *     type: object
 *     description: The postal code expression for the geo zone.
 */
export declare const geoZoneZip: z.ZodObject<{
    country_code: z.ZodString;
    type: z.ZodLiteral<"zip">;
    province_code: z.ZodString;
    city: z.ZodString;
    postal_expression: z.ZodRecord<z.ZodString, z.ZodUnknown>;
}, "strip", z.ZodTypeAny, {
    type: "zip";
    city: string;
    country_code: string;
    province_code: string;
    postal_expression: Record<string, unknown>;
}, {
    type: "zip";
    city: string;
    country_code: string;
    province_code: string;
    postal_expression: Record<string, unknown>;
}>;
/**
 * @schema VendorCreateServiceZone
 * type: object
 * required:
 *   - name
 * properties:
 *   name:
 *     type: string
 *     description: The name of the service zone.
 *   geo_zones:
 *     type: array
 *     description: The geo zones that belong to the service zone.
 *     items:
 *       oneOf:
 *         - $ref: "#/components/schemas/GeoZoneCountry"
 *         - $ref: "#/components/schemas/GeoZoneProvince"
 *         - $ref: "#/components/schemas/GeoZoneCity"
 *         - $ref: "#/components/schemas/GeoZoneZip"
 */
export declare const VendorCreateFulfillmentSetServiceZonesSchema: z.ZodObject<{
    name: z.ZodString;
    geo_zones: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodObject<{
        country_code: z.ZodString;
        type: z.ZodLiteral<"country">;
    }, "strip", z.ZodTypeAny, {
        type: "country";
        country_code: string;
    }, {
        type: "country";
        country_code: string;
    }>, z.ZodObject<{
        country_code: z.ZodString;
        type: z.ZodLiteral<"province">;
        province_code: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        type: "province";
        country_code: string;
        province_code: string;
    }, {
        type: "province";
        country_code: string;
        province_code: string;
    }>, z.ZodObject<{
        country_code: z.ZodString;
        type: z.ZodLiteral<"city">;
        province_code: z.ZodString;
        city: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        type: "city";
        city: string;
        country_code: string;
        province_code: string;
    }, {
        type: "city";
        city: string;
        country_code: string;
        province_code: string;
    }>, z.ZodObject<{
        country_code: z.ZodString;
        type: z.ZodLiteral<"zip">;
        province_code: z.ZodString;
        city: z.ZodString;
        postal_expression: z.ZodRecord<z.ZodString, z.ZodUnknown>;
    }, "strip", z.ZodTypeAny, {
        type: "zip";
        city: string;
        country_code: string;
        province_code: string;
        postal_expression: Record<string, unknown>;
    }, {
        type: "zip";
        city: string;
        country_code: string;
        province_code: string;
        postal_expression: Record<string, unknown>;
    }>]>, "many">>;
}, "strict", z.ZodTypeAny, {
    name: string;
    geo_zones?: ({
        type: "country";
        country_code: string;
    } | {
        type: "province";
        country_code: string;
        province_code: string;
    } | {
        type: "city";
        city: string;
        country_code: string;
        province_code: string;
    } | {
        type: "zip";
        city: string;
        country_code: string;
        province_code: string;
        postal_expression: Record<string, unknown>;
    })[] | undefined;
}, {
    name: string;
    geo_zones?: ({
        type: "country";
        country_code: string;
    } | {
        type: "province";
        country_code: string;
        province_code: string;
    } | {
        type: "city";
        city: string;
        country_code: string;
        province_code: string;
    } | {
        type: "zip";
        city: string;
        country_code: string;
        province_code: string;
        postal_expression: Record<string, unknown>;
    })[] | undefined;
}>;
/**
 * @schema VendorUpdateServiceZone
 * type: object
 * properties:
 *   name:
 *     type: string
 *     description: The name of the service zone.
 *   geo_zones:
 *     type: array
 *     description: The geo zones that belong to the service zone.
 *     items:
 *       oneOf:
 *         - allOf:
 *           - $ref: "#/components/schemas/GeoZoneCountry"
 *           - type: object
 *             properties:
 *               id:
 *                 type: string
 *                 description: The ID of the geo zone.
 *         - allOf:
 *           - $ref: "#/components/schemas/GeoZoneProvince"
 *           - type: object
 *             properties:
 *               id:
 *                 type: string
 *                 description: The ID of the geo zone.
 *         - allOf:
 *           - $ref: "#/components/schemas/GeoZoneCity"
 *           - type: object
 *             properties:
 *               id:
 *                 type: string
 *                 description: The ID of the geo zone.
 *         - allOf:
 *           - $ref: "#/components/schemas/GeoZoneZip"
 *           - type: object
 *             properties:
 *               id:
 *                 type: string
 *                 description: The ID of the geo zone.
 */
export declare const VendorUpdateServiceZone: z.ZodObject<{
    name: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    geo_zones: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodObject<{
        type: z.ZodLiteral<"country">;
        country_code: z.ZodString;
        id: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        type: "country";
        country_code: string;
        id?: string | undefined;
    }, {
        type: "country";
        country_code: string;
        id?: string | undefined;
    }>, z.ZodObject<{
        type: z.ZodLiteral<"province">;
        country_code: z.ZodString;
        province_code: z.ZodString;
        id: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        type: "province";
        country_code: string;
        province_code: string;
        id?: string | undefined;
    }, {
        type: "province";
        country_code: string;
        province_code: string;
        id?: string | undefined;
    }>, z.ZodObject<{
        type: z.ZodLiteral<"city">;
        city: z.ZodString;
        country_code: z.ZodString;
        province_code: z.ZodString;
        id: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        type: "city";
        city: string;
        country_code: string;
        province_code: string;
        id?: string | undefined;
    }, {
        type: "city";
        city: string;
        country_code: string;
        province_code: string;
        id?: string | undefined;
    }>, z.ZodObject<{
        type: z.ZodLiteral<"zip">;
        city: z.ZodString;
        country_code: z.ZodString;
        province_code: z.ZodString;
        postal_expression: z.ZodRecord<z.ZodString, z.ZodUnknown>;
        id: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        type: "zip";
        city: string;
        country_code: string;
        province_code: string;
        postal_expression: Record<string, unknown>;
        id?: string | undefined;
    }, {
        type: "zip";
        city: string;
        country_code: string;
        province_code: string;
        postal_expression: Record<string, unknown>;
        id?: string | undefined;
    }>]>, "many">>;
}, "strict", z.ZodTypeAny, {
    name?: string | null | undefined;
    geo_zones?: ({
        type: "country";
        country_code: string;
        id?: string | undefined;
    } | {
        type: "province";
        country_code: string;
        province_code: string;
        id?: string | undefined;
    } | {
        type: "city";
        city: string;
        country_code: string;
        province_code: string;
        id?: string | undefined;
    } | {
        type: "zip";
        city: string;
        country_code: string;
        province_code: string;
        postal_expression: Record<string, unknown>;
        id?: string | undefined;
    })[] | undefined;
}, {
    name?: string | null | undefined;
    geo_zones?: ({
        type: "country";
        country_code: string;
        id?: string | undefined;
    } | {
        type: "province";
        country_code: string;
        province_code: string;
        id?: string | undefined;
    } | {
        type: "city";
        city: string;
        country_code: string;
        province_code: string;
        id?: string | undefined;
    } | {
        type: "zip";
        city: string;
        country_code: string;
        province_code: string;
        postal_expression: Record<string, unknown>;
        id?: string | undefined;
    })[] | undefined;
}>;
export type VendorCreateServiceZoneType = z.infer<typeof VendorCreateFulfillmentSetServiceZonesSchema>;
export type VendorUpdateServiceZoneType = z.infer<typeof VendorUpdateServiceZone>;
