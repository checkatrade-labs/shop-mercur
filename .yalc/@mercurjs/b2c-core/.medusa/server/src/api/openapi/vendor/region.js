"use strict";
/**
 * @schema VendorRegion
 * title: "Region"
 * description: "Region object"
 * properties:
 *   id:
 *     type: string
 *     description: The unique identifier of the item.
 *   created_at:
 *     type: string
 *     format: date-time
 *     description: The date with timezone at which the resource was created.
 *   updated_at:
 *     type: string
 *     format: date-time
 *     description: The date with timezone at which the resource was last updated.
 *   name:
 *     type: string
 *     description: The name of the region.
 *   currency_code:
 *     type: string
 *     description: The currency of the region.
 *   automatic_taxes:
 *     type: boolean
 *     description: Whether taxes are applied automatically during checkout.
 *   type:
 *     type: string
 *     description: The type of the promotion.
 *   countries:
 *     type: array
 *     items:
 *       $ref: "#/components/schemas/VendorRegionCountry"
 */
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @schema VendorRegionCountry
 * title: "Region country"
 * description: "Region country object"
 * properties:
 *   id:
 *     type: string
 *     description: The unique identifier of the item.
 *   name:
 *     type: string
 *     description: Name of the country
 *   display_name:
 *     type: string
 *     description: Display name of the country
 *   iso_2:
 *     type: string
 *     description: ISO_2 code
 *   iso_3:
 *     type: string
 *     description: ISO_3 code
 *   num_code:
 *     type: string
 *     description: Numcode
 */
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVnaW9uLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2FwaS9vcGVuYXBpL3ZlbmRvci9yZWdpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQWdDRzs7QUFFSDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0F1QkcifQ==