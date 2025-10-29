"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VendorCreateStockLocationFulfillmentSet = exports.VendorUpdateStockLocation = exports.VendorCreateStockLocation = exports.UpsertStockLocationAddress = exports.VendorGetStockLocationParams = exports.VendorGetStockLocationsParamsDirectFields = void 0;
const zod_1 = require("zod");
const common_1 = require("@medusajs/medusa/api/utils/common-validators/common");
const validators_1 = require("@medusajs/medusa/api/utils/validators");
exports.VendorGetStockLocationsParamsDirectFields = zod_1.z.object({
    stock_location_id: zod_1.z.union([zod_1.z.string(), zod_1.z.array(zod_1.z.string())]).optional()
});
exports.VendorGetStockLocationParams = (0, validators_1.createFindParams)({
    limit: 20,
    offset: 0
})
    .merge(exports.VendorGetStockLocationsParamsDirectFields)
    .merge((0, common_1.applyAndAndOrOperators)(exports.VendorGetStockLocationsParamsDirectFields));
/**
 * @schema UpsertStockLocationAddress
 * type: object
 * required:
 *   - address_1
 *   - country_code
 * properties:
 *   address_1:
 *     type: string
 *     description: Address line 1
 *   address_2:
 *     type: string
 *     nullable: true
 *     description: Address line 2
 *   company:
 *     type: string
 *     nullable: true
 *     description: Company name
 *   city:
 *     type: string
 *     nullable: true
 *     description: City
 *   country_code:
 *     type: string
 *     description: Country code
 *   phone:
 *     type: string
 *     nullable: true
 *     description: Phone number
 *   postal_code:
 *     type: string
 *     nullable: true
 *     description: Postal code
 *   province:
 *     type: string
 *     nullable: true
 *     description: Province
 */
exports.UpsertStockLocationAddress = zod_1.z.object({
    address_1: zod_1.z.string(),
    address_2: zod_1.z.string().nullish(),
    company: zod_1.z.string().nullish(),
    city: zod_1.z.string().nullish(),
    country_code: zod_1.z.string(),
    phone: zod_1.z.string().nullish(),
    postal_code: zod_1.z.string().nullish(),
    province: zod_1.z.string().nullish()
});
/**
 * @schema VendorCreateStockLocation
 * type: object
 * required:
 *   - name
 * properties:
 *   name:
 *     type: string
 *     description: Name of the stock location
 *   address:
 *     $ref: "#/components/schemas/UpsertStockLocationAddress"
 *   address_id:
 *     type: string
 *     nullable: true
 *     description: ID of an existing address to use
 *   metadata:
 *     type: object
 *     nullable: true
 *     description: Additional metadata
 */
exports.VendorCreateStockLocation = zod_1.z.object({
    name: zod_1.z.preprocess((val) => val?.trim(), zod_1.z.string()),
    address: exports.UpsertStockLocationAddress.optional(),
    address_id: zod_1.z.string().nullish(),
    metadata: zod_1.z.record(zod_1.z.unknown()).nullish()
});
/**
 * @schema VendorUpdateStockLocation
 * type: object
 * properties:
 *   name:
 *     type: string
 *     description: Name of the stock location
 *   address:
 *     $ref: "#/components/schemas/UpsertStockLocationAddress"
 *   address_id:
 *     type: string
 *     nullable: true
 *     description: ID of an existing address to use
 *   metadata:
 *     type: object
 *     nullable: true
 *     description: Additional metadata
 */
exports.VendorUpdateStockLocation = zod_1.z.object({
    name: zod_1.z
        .preprocess((val) => val.trim(), zod_1.z.string().optional())
        .optional(),
    address: exports.UpsertStockLocationAddress.optional(),
    address_id: zod_1.z.string().nullish(),
    metadata: zod_1.z.record(zod_1.z.unknown()).nullish()
});
/**
 * @schema VendorCreateStockLocationFulfillmentSet
 * type: object
 * required:
 *   - name
 *   - type
 * properties:
 *   name:
 *     type: string
 *     description: Name of the fulfillment set
 *   type:
 *     type: string
 *     description: Type of the fulfillment set
 */
exports.VendorCreateStockLocationFulfillmentSet = zod_1.z
    .object({
    name: zod_1.z.string(),
    type: zod_1.z.string()
})
    .strict();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsaWRhdG9ycy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hcGkvdmVuZG9yL3N0b2NrLWxvY2F0aW9ucy92YWxpZGF0b3JzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLDZCQUF1QjtBQUV2QixnRkFBNEY7QUFDNUYsc0VBQXdFO0FBTTNELFFBQUEseUNBQXlDLEdBQUcsT0FBQyxDQUFDLE1BQU0sQ0FBQztJQUNoRSxpQkFBaUIsRUFBRSxPQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsT0FBQyxDQUFDLE1BQU0sRUFBRSxFQUFFLE9BQUMsQ0FBQyxLQUFLLENBQUMsT0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsRUFBRTtDQUN6RSxDQUFDLENBQUE7QUFFVyxRQUFBLDRCQUE0QixHQUFHLElBQUEsNkJBQWdCLEVBQUM7SUFDM0QsS0FBSyxFQUFFLEVBQUU7SUFDVCxNQUFNLEVBQUUsQ0FBQztDQUNWLENBQUM7S0FDQyxLQUFLLENBQUMsaURBQXlDLENBQUM7S0FDaEQsS0FBSyxDQUFDLElBQUEsK0JBQXNCLEVBQUMsaURBQXlDLENBQUMsQ0FBQyxDQUFBO0FBRTNFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBcUNHO0FBQ1UsUUFBQSwwQkFBMEIsR0FBRyxPQUFDLENBQUMsTUFBTSxDQUFDO0lBQ2pELFNBQVMsRUFBRSxPQUFDLENBQUMsTUFBTSxFQUFFO0lBQ3JCLFNBQVMsRUFBRSxPQUFDLENBQUMsTUFBTSxFQUFFLENBQUMsT0FBTyxFQUFFO0lBQy9CLE9BQU8sRUFBRSxPQUFDLENBQUMsTUFBTSxFQUFFLENBQUMsT0FBTyxFQUFFO0lBQzdCLElBQUksRUFBRSxPQUFDLENBQUMsTUFBTSxFQUFFLENBQUMsT0FBTyxFQUFFO0lBQzFCLFlBQVksRUFBRSxPQUFDLENBQUMsTUFBTSxFQUFFO0lBQ3hCLEtBQUssRUFBRSxPQUFDLENBQUMsTUFBTSxFQUFFLENBQUMsT0FBTyxFQUFFO0lBQzNCLFdBQVcsRUFBRSxPQUFDLENBQUMsTUFBTSxFQUFFLENBQUMsT0FBTyxFQUFFO0lBQ2pDLFFBQVEsRUFBRSxPQUFDLENBQUMsTUFBTSxFQUFFLENBQUMsT0FBTyxFQUFFO0NBQy9CLENBQUMsQ0FBQTtBQUtGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBbUJHO0FBQ1UsUUFBQSx5QkFBeUIsR0FBRyxPQUFDLENBQUMsTUFBTSxDQUFDO0lBQ2hELElBQUksRUFBRSxPQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsR0FBVyxFQUFFLEVBQUUsQ0FBQyxHQUFHLEVBQUUsSUFBSSxFQUFFLEVBQUUsT0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDO0lBQzVELE9BQU8sRUFBRSxrQ0FBMEIsQ0FBQyxRQUFRLEVBQUU7SUFDOUMsVUFBVSxFQUFFLE9BQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxPQUFPLEVBQUU7SUFDaEMsUUFBUSxFQUFFLE9BQUMsQ0FBQyxNQUFNLENBQUMsT0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUMsT0FBTyxFQUFFO0NBQzFDLENBQUMsQ0FBQTtBQUtGOzs7Ozs7Ozs7Ozs7Ozs7OztHQWlCRztBQUNVLFFBQUEseUJBQXlCLEdBQUcsT0FBQyxDQUFDLE1BQU0sQ0FBQztJQUNoRCxJQUFJLEVBQUUsT0FBQztTQUNKLFVBQVUsQ0FBQyxDQUFDLEdBQVcsRUFBRSxFQUFFLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxFQUFFLE9BQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxRQUFRLEVBQUUsQ0FBQztTQUM5RCxRQUFRLEVBQUU7SUFDYixPQUFPLEVBQUUsa0NBQTBCLENBQUMsUUFBUSxFQUFFO0lBQzlDLFVBQVUsRUFBRSxPQUFDLENBQUMsTUFBTSxFQUFFLENBQUMsT0FBTyxFQUFFO0lBQ2hDLFFBQVEsRUFBRSxPQUFDLENBQUMsTUFBTSxDQUFDLE9BQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDLE9BQU8sRUFBRTtDQUMxQyxDQUFDLENBQUE7QUFLRjs7Ozs7Ozs7Ozs7OztHQWFHO0FBQ1UsUUFBQSx1Q0FBdUMsR0FBRyxPQUFDO0tBQ3JELE1BQU0sQ0FBQztJQUNOLElBQUksRUFBRSxPQUFDLENBQUMsTUFBTSxFQUFFO0lBQ2hCLElBQUksRUFBRSxPQUFDLENBQUMsTUFBTSxFQUFFO0NBQ2pCLENBQUM7S0FDRCxNQUFNLEVBQUUsQ0FBQSJ9