"use strict";
/**
 * @schema AdminCommissionPriceValue
 * title: "AdminCommissionPriceValue"
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
 * @schema AdminCommissionRate
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
 * @schema AdminCommissionRule
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
 *     $ref: '#/components/schemas/AdminCommissionRate'
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
 * @schema AdminCommissionAggregate
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
 *       $ref: '#/components/schemas/AdminCommissionPriceValue'
 *   min_price_set_id:
 *     type: string
 *     description: Min price set id
 *   min_price_set:
 *     type: array
 *     description: Min price set
 *     items:
 *       $ref: '#/components/schemas/AdminCommissionPriceValue'
 *   max_price_set_id:
 *     type: string
 *     description: Max price set id
 *   max_price_set:
 *     type: array
 *     description: Max price set
 *     items:
 *       $ref: '#/components/schemas/AdminCommissionPriceValue'
 *   ref_value:
 *     type: string
 *     description: Aggregated reference value
 *   fee_value:
 *     type: string
 *     description: Aggregated fee value
 */
/**
 * @schema AdminCommissionLine
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbWlzc2lvbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hcGkvb3BlbmFwaS9hZG1pbi9jb21taXNzaW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTs7Ozs7Ozs7Ozs7O0dBWUc7O0FBRUg7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBbUNHO0FBRUg7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQThCRztBQUVIOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0E0REc7QUFFSDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQWtDRyJ9