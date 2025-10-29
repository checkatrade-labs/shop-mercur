"use strict";
/**
 * @schema VendorCommissionPriceValue
 * title: "VendorCommissionPriceValue"
 * description: "Commission price value"
 * required:
 *   - amount
 *   - currency_code
 * properties:
 *   amount:
 *     type: number
 *   currency_code:
 *     type: string
 */
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @schema VendorCommissionRate
 * title: "CommissionRate"
 * description: "Commission rate object"
 * properties:
 *   id:
 *     type: string
 *     description: The unique identifier.
 *   type:
 *     type: string
 *     enum: [flat, percentage]
 *     description: Commission rate type.
 *   percentage_rate:
 *     type: number
 *     description: Percent of commission.
 *   include_tax:
 *     type: boolean
 *     description: Indicates if rate is calculated including tax.
 *   price_set_id:
 *     type: string
 *     description: Flat commission value.
 *   min_price_set_id:
 *     type: string
 *     description: Min commission value.
 *   max_price_set_id:
 *     type: string
 *     description: Max commission value.
 *   created_at:
 *     type: string
 *     format: date-time
 *     description: The date with timezone at which the resource was created.
 *   updated_at:
 *     type: string
 *     format: date-time
 *     description: The date with timezone at which the resource was last updated.
 */
/**
 * @schema VendorCommissionRule
 * title: "CommissionRule"
 * description: "Commission rule object"
 * properties:
 *   id:
 *     type: string
 *     description: The unique identifier.
 *   name:
 *     type: string
 *     description: Commission rule name.
 *   reference:
 *     type: string
 *     description: Rule reference type
 *   reference_id:
 *     type: string
 *     description: Rule reference id
 *   is_active:
 *     type: boolean
 *     description: Indicates if rule is active.
 *   rate:
 *     $ref: '#/components/schemas/VendorCommissionRate'
 *   created_at:
 *     type: string
 *     format: date-time
 *     description: The date with timezone at which the resource was created.
 *   updated_at:
 *     type: string
 *     format: date-time
 *     description: The date with timezone at which the resource was last updated.
 */
/**
 * @schema VendorCommissionAggregate
 * title: "CommissionAggregate"
 * description: "Commission aggregate object"
 * properties:
 *   id:
 *     type: string
 *     description: The unique identifier.
 *   name:
 *     type: string
 *     description: Commission rule name.
 *   type:
 *     type: string
 *     enum: [flat, percentage]
 *     description: Commission rate type.
 *   reference:
 *     type: string
 *     description: Rule reference type
 *   reference_id:
 *     type: string
 *     description: Rule reference id
 *   is_active:
 *     type: boolean
 *     description: Indicates if rule is active.
 *   include_tax:
 *     type: boolean
 *     description: Indicates if rate is calculated including tax.
 *   percentage_rate:
 *     type: number
 *     description: Percent of commission.
 *   price_set_id:
 *     type: string
 *     description: Flat rate price set id
 *   price_set:
 *     type: array
 *     description: Flat rate price set
 *     items:
 *       $ref: '#/components/schemas/VendorCommissionPriceValue'
 *   min_price_set_id:
 *     type: string
 *     description: Min price set id
 *   min_price_set:
 *     type: array
 *     description: Min price set
 *     items:
 *       $ref: '#/components/schemas/VendorCommissionPriceValue'
 *   max_price_set_id:
 *     type: string
 *     description: Max price set id
 *   max_price_set:
 *     type: array
 *     description: Max price set
 *     items:
 *       $ref: '#/components/schemas/VendorCommissionPriceValue'
 *   ref_value:
 *     type: string
 *     description: Aggregated reference value
 *   fee_value:
 *     type: string
 *     description: Aggregated fee value
 */
/**
 * @schema VendorCommissionLine
 * title: "CommissionLine"
 * description: "Commission line object"
 * properties:
 *   id:
 *     type: string
 *     description: The unique identifier of the commission line.
 *   item_line_id:
 *     type: string
 *     description: The ID of the order item line this commission applies to.
 *   rule_id:
 *     type: string
 *     description: The ID of the commission rule that generated this line.
 *   currency_code:
 *     type: string
 *     description: The currency code for the commission value.
 *   value:
 *     type: number
 *     description: The commission amount.
 *   created_at:
 *     type: string
 *     format: date-time
 *     description: The date with timezone at which the resource was created.
 *   updated_at:
 *     type: string
 *     format: date-time
 *     description: The date with timezone at which the resource was last updated.
 *   order:
 *     type: object
 *     description: The order associated with this commission line (when expanded).
 *   rule:
 *     type: object
 *     description: The commission rule associated with this line (when expanded).
 */
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbWlzc2lvbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hcGkvb3BlbmFwaS92ZW5kb3IvY29tbWlzc2lvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7Ozs7Ozs7Ozs7OztHQVlHOztBQUVIOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQW1DRztBQUVIOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0E4Qkc7QUFFSDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBNERHO0FBRUg7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0FrQ0cifQ==