"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VendorUpdateServiceZone = exports.VendorCreateFulfillmentSetServiceZonesSchema = exports.geoZoneZip = exports.geoZoneCity = exports.geoZoneProvince = exports.geoZoneCountry = exports.VendorFulfillmentSetParams = void 0;
const zod_1 = require("zod");
const validators_1 = require("@medusajs/medusa/api/utils/validators");
exports.VendorFulfillmentSetParams = (0, validators_1.createSelectParams)();
/* Geo zones */
/**
 * @schema GeoZoneBase
 * type: object
 * required:
 *   - country_code
 * properties:
 *   country_code:
 *     type: string
 *     description: The country code of the geo zone.
 */
const geoZoneBaseSchema = zod_1.z.object({
    country_code: zod_1.z.string()
});
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
exports.geoZoneCountry = geoZoneBaseSchema.merge(zod_1.z.object({
    type: zod_1.z.literal('country')
}));
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
exports.geoZoneProvince = geoZoneBaseSchema.merge(zod_1.z.object({
    type: zod_1.z.literal('province'),
    province_code: zod_1.z.string()
}));
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
exports.geoZoneCity = geoZoneBaseSchema.merge(zod_1.z.object({
    type: zod_1.z.literal('city'),
    province_code: zod_1.z.string(),
    city: zod_1.z.string()
}));
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
exports.geoZoneZip = geoZoneBaseSchema.merge(zod_1.z.object({
    type: zod_1.z.literal('zip'),
    province_code: zod_1.z.string(),
    city: zod_1.z.string(),
    postal_expression: zod_1.z.record(zod_1.z.unknown())
}));
/* Service zones */
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
exports.VendorCreateFulfillmentSetServiceZonesSchema = zod_1.z
    .object({
    name: zod_1.z.string(),
    geo_zones: zod_1.z
        .array(zod_1.z.union([exports.geoZoneCountry, exports.geoZoneProvince, exports.geoZoneCity, exports.geoZoneZip]))
        .optional()
})
    .strict();
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
exports.VendorUpdateServiceZone = zod_1.z
    .object({
    name: zod_1.z.string().nullish(),
    geo_zones: zod_1.z
        .array(zod_1.z.union([
        exports.geoZoneCountry.merge(zod_1.z.object({ id: zod_1.z.string().optional() })),
        exports.geoZoneProvince.merge(zod_1.z.object({ id: zod_1.z.string().optional() })),
        exports.geoZoneCity.merge(zod_1.z.object({ id: zod_1.z.string().optional() })),
        exports.geoZoneZip.merge(zod_1.z.object({ id: zod_1.z.string().optional() }))
    ]))
        .optional()
})
    .strict();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsaWRhdG9ycy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hcGkvdmVuZG9yL2Z1bGZpbGxtZW50LXNldHMvdmFsaWRhdG9ycy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSw2QkFBdUI7QUFFdkIsc0VBQTBFO0FBTTdELFFBQUEsMEJBQTBCLEdBQUcsSUFBQSwrQkFBa0IsR0FBRSxDQUFBO0FBRTlELGVBQWU7QUFFZjs7Ozs7Ozs7O0dBU0c7QUFDSCxNQUFNLGlCQUFpQixHQUFHLE9BQUMsQ0FBQyxNQUFNLENBQUM7SUFDakMsWUFBWSxFQUFFLE9BQUMsQ0FBQyxNQUFNLEVBQUU7Q0FDekIsQ0FBQyxDQUFBO0FBRUY7Ozs7Ozs7Ozs7Ozs7O0dBY0c7QUFDVSxRQUFBLGNBQWMsR0FBRyxpQkFBaUIsQ0FBQyxLQUFLLENBQ25ELE9BQUMsQ0FBQyxNQUFNLENBQUM7SUFDUCxJQUFJLEVBQUUsT0FBQyxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUM7Q0FDM0IsQ0FBQyxDQUNILENBQUE7QUFFRDs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBa0JHO0FBQ1UsUUFBQSxlQUFlLEdBQUcsaUJBQWlCLENBQUMsS0FBSyxDQUNwRCxPQUFDLENBQUMsTUFBTSxDQUFDO0lBQ1AsSUFBSSxFQUFFLE9BQUMsQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDO0lBQzNCLGFBQWEsRUFBRSxPQUFDLENBQUMsTUFBTSxFQUFFO0NBQzFCLENBQUMsQ0FDSCxDQUFBO0FBRUQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0FzQkc7QUFDVSxRQUFBLFdBQVcsR0FBRyxpQkFBaUIsQ0FBQyxLQUFLLENBQ2hELE9BQUMsQ0FBQyxNQUFNLENBQUM7SUFDUCxJQUFJLEVBQUUsT0FBQyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUM7SUFDdkIsYUFBYSxFQUFFLE9BQUMsQ0FBQyxNQUFNLEVBQUU7SUFDekIsSUFBSSxFQUFFLE9BQUMsQ0FBQyxNQUFNLEVBQUU7Q0FDakIsQ0FBQyxDQUNILENBQUE7QUFFRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0EwQkc7QUFDVSxRQUFBLFVBQVUsR0FBRyxpQkFBaUIsQ0FBQyxLQUFLLENBQy9DLE9BQUMsQ0FBQyxNQUFNLENBQUM7SUFDUCxJQUFJLEVBQUUsT0FBQyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUM7SUFDdEIsYUFBYSxFQUFFLE9BQUMsQ0FBQyxNQUFNLEVBQUU7SUFDekIsSUFBSSxFQUFFLE9BQUMsQ0FBQyxNQUFNLEVBQUU7SUFDaEIsaUJBQWlCLEVBQUUsT0FBQyxDQUFDLE1BQU0sQ0FBQyxPQUFDLENBQUMsT0FBTyxFQUFFLENBQUM7Q0FDekMsQ0FBQyxDQUNILENBQUE7QUFFRCxtQkFBbUI7QUFFbkI7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQWtCRztBQUNVLFFBQUEsNENBQTRDLEdBQUcsT0FBQztLQUMxRCxNQUFNLENBQUM7SUFDTixJQUFJLEVBQUUsT0FBQyxDQUFDLE1BQU0sRUFBRTtJQUNoQixTQUFTLEVBQUUsT0FBQztTQUNULEtBQUssQ0FDSixPQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsc0JBQWMsRUFBRSx1QkFBZSxFQUFFLG1CQUFXLEVBQUUsa0JBQVUsQ0FBQyxDQUFDLENBQ3BFO1NBQ0EsUUFBUSxFQUFFO0NBQ2QsQ0FBQztLQUNELE1BQU0sRUFBRSxDQUFBO0FBRVg7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0F3Q0c7QUFDVSxRQUFBLHVCQUF1QixHQUFHLE9BQUM7S0FDckMsTUFBTSxDQUFDO0lBQ04sSUFBSSxFQUFFLE9BQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxPQUFPLEVBQUU7SUFDMUIsU0FBUyxFQUFFLE9BQUM7U0FDVCxLQUFLLENBQ0osT0FBQyxDQUFDLEtBQUssQ0FBQztRQUNOLHNCQUFjLENBQUMsS0FBSyxDQUFDLE9BQUMsQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFLEVBQUUsT0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDLFFBQVEsRUFBRSxFQUFFLENBQUMsQ0FBQztRQUM3RCx1QkFBZSxDQUFDLEtBQUssQ0FBQyxPQUFDLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFBRSxFQUFFLE9BQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxRQUFRLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDOUQsbUJBQVcsQ0FBQyxLQUFLLENBQUMsT0FBQyxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUUsRUFBRSxPQUFDLENBQUMsTUFBTSxFQUFFLENBQUMsUUFBUSxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQzFELGtCQUFVLENBQUMsS0FBSyxDQUFDLE9BQUMsQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFLEVBQUUsT0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDLFFBQVEsRUFBRSxFQUFFLENBQUMsQ0FBQztLQUMxRCxDQUFDLENBQ0g7U0FDQSxRQUFRLEVBQUU7Q0FDZCxDQUFDO0tBQ0QsTUFBTSxFQUFFLENBQUEifQ==