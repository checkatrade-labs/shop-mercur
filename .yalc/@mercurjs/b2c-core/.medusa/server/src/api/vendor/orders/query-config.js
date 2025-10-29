"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.vendorOrderChangesQueryConfig = exports.vendorOrderChangesFields = exports.vendorOrderQueryConfig = exports.vendorOrderFields = void 0;
exports.vendorOrderFields = [
    'id',
    'display_id',
    'status',
    'email',
    'currency_code',
    'version',
    'summary',
    'metadata',
    'created_at',
    'updated_at',
    'region_id',
    'total',
    'subtotal',
    'tax_total',
    'order_change',
    'discount_total',
    'discount_tax_total',
    'original_total',
    'original_tax_total',
    'item_total',
    'item_subtotal',
    'item_tax_total',
    'original_item_total',
    'original_item_subtotal',
    'original_item_tax_total',
    'shipping_total',
    'shipping_subtotal',
    'shipping_tax_total',
    'original_shipping_tax_total',
    'original_shipping_subtotal',
    'original_shipping_total',
    '*items',
    '*items.tax_lines',
    '*items.adjustments',
    '*items.variant',
    '*items.variant.product',
    '*items.detail',
    '*shipping_address',
    '*billing_address',
    '*shipping_methods',
    '*shipping_methods.tax_lines',
    '*shipping_methods.adjustments',
    '*fulfillments',
    '*fulfillments.items',
    '*fulfillments.labels'
];
exports.vendorOrderQueryConfig = {
    list: {
        defaults: exports.vendorOrderFields,
        isList: true
    },
    retrieve: {
        defaults: exports.vendorOrderFields,
        isList: false
    }
};
exports.vendorOrderChangesFields = [
    'id',
    'order_id',
    'return_id',
    'claim_id',
    'exchange_id',
    'version',
    'change_type',
    '*actions',
    'description',
    'status',
    'internal_note',
    'created_by',
    'requested_by',
    'requested_at',
    'confirmed_by',
    'confirmed_at',
    'declined_by',
    'declined_reason',
    'metadata',
    'declined_at',
    'canceled_by',
    'canceled_at',
    'created_at',
    'updated_at'
];
exports.vendorOrderChangesQueryConfig = {
    list: {
        defaults: exports.vendorOrderChangesFields,
        isList: true
    },
    retrieve: {
        defaults: exports.vendorOrderChangesFields,
        isList: false
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicXVlcnktY29uZmlnLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2FwaS92ZW5kb3Ivb3JkZXJzL3F1ZXJ5LWNvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBYSxRQUFBLGlCQUFpQixHQUFHO0lBQy9CLElBQUk7SUFDSixZQUFZO0lBQ1osUUFBUTtJQUNSLE9BQU87SUFDUCxlQUFlO0lBQ2YsU0FBUztJQUNULFNBQVM7SUFDVCxVQUFVO0lBQ1YsWUFBWTtJQUNaLFlBQVk7SUFDWixXQUFXO0lBQ1gsT0FBTztJQUNQLFVBQVU7SUFDVixXQUFXO0lBQ1gsY0FBYztJQUNkLGdCQUFnQjtJQUNoQixvQkFBb0I7SUFDcEIsZ0JBQWdCO0lBQ2hCLG9CQUFvQjtJQUNwQixZQUFZO0lBQ1osZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixxQkFBcUI7SUFDckIsd0JBQXdCO0lBQ3hCLHlCQUF5QjtJQUN6QixnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLG9CQUFvQjtJQUNwQiw2QkFBNkI7SUFDN0IsNEJBQTRCO0lBQzVCLHlCQUF5QjtJQUN6QixRQUFRO0lBQ1Isa0JBQWtCO0lBQ2xCLG9CQUFvQjtJQUNwQixnQkFBZ0I7SUFDaEIsd0JBQXdCO0lBQ3hCLGVBQWU7SUFDZixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQiw2QkFBNkI7SUFDN0IsK0JBQStCO0lBQy9CLGVBQWU7SUFDZixxQkFBcUI7SUFDckIsc0JBQXNCO0NBQ3ZCLENBQUE7QUFFWSxRQUFBLHNCQUFzQixHQUFHO0lBQ3BDLElBQUksRUFBRTtRQUNKLFFBQVEsRUFBRSx5QkFBaUI7UUFDM0IsTUFBTSxFQUFFLElBQUk7S0FDYjtJQUNELFFBQVEsRUFBRTtRQUNSLFFBQVEsRUFBRSx5QkFBaUI7UUFDM0IsTUFBTSxFQUFFLEtBQUs7S0FDZDtDQUNGLENBQUE7QUFFWSxRQUFBLHdCQUF3QixHQUFHO0lBQ3RDLElBQUk7SUFDSixVQUFVO0lBQ1YsV0FBVztJQUNYLFVBQVU7SUFDVixhQUFhO0lBQ2IsU0FBUztJQUNULGFBQWE7SUFDYixVQUFVO0lBQ1YsYUFBYTtJQUNiLFFBQVE7SUFDUixlQUFlO0lBQ2YsWUFBWTtJQUNaLGNBQWM7SUFDZCxjQUFjO0lBQ2QsY0FBYztJQUNkLGNBQWM7SUFDZCxhQUFhO0lBQ2IsaUJBQWlCO0lBQ2pCLFVBQVU7SUFDVixhQUFhO0lBQ2IsYUFBYTtJQUNiLGFBQWE7SUFDYixZQUFZO0lBQ1osWUFBWTtDQUNiLENBQUE7QUFFWSxRQUFBLDZCQUE2QixHQUFHO0lBQzNDLElBQUksRUFBRTtRQUNKLFFBQVEsRUFBRSxnQ0FBd0I7UUFDbEMsTUFBTSxFQUFFLElBQUk7S0FDYjtJQUNELFFBQVEsRUFBRTtRQUNSLFFBQVEsRUFBRSxnQ0FBd0I7UUFDbEMsTUFBTSxFQUFFLEtBQUs7S0FDZDtDQUNGLENBQUEifQ==