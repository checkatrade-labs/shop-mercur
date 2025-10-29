"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.adminOrderSetQueryConfig = exports.adminOrderSetFields = void 0;
exports.adminOrderSetFields = [
    'id',
    'display_id',
    'sales_channel_id',
    '*sales_channel',
    'cart_id',
    '*cart',
    'customer_id',
    '*customer',
    'payment_collection_id',
    '*payment_collection',
    'orders.id',
    'orders.display_id',
    'orders.region_id',
    'orders.status',
    'orders.version',
    'orders.summary',
    'orders.total',
    'orders.subtotal',
    'orders.tax_total',
    'orders.order_change',
    'orders.discount_total',
    'orders.discount_tax_total',
    'orders.original_total',
    'orders.original_tax_total',
    'orders.item_total',
    'orders.item_subtotal',
    'orders.item_tax_total',
    'orders.original_item_total',
    'orders.original_item_subtotal',
    'orders.original_item_tax_total',
    'orders.shipping_total',
    'orders.shipping_subtotal',
    'orders.shipping_tax_total',
    'orders.original_shipping_tax_total',
    'orders.original_shipping_subtotal',
    'orders.original_shipping_total',
    'orders.created_at',
    'orders.updated_at',
    'orders.items.*',
    'orders.items.tax_lines.*',
    'orders.items.adjustments.*',
    'orders.items.variant.*',
    'orders.items.variant.product.*',
    'orders.items.detail.*',
    'orders.shipping_address.*',
    'orders.billing_address.*',
    'orders.shipping_methods.*',
    'orders.shipping_methods.tax_lines.*',
    'orders.shipping_methods.adjustments.*',
    'orders.payment_collections.*',
    'orders.payment_collections.payments.*',
    'orders.payment_collections.payments.refunds.*'
];
exports.adminOrderSetQueryConfig = {
    list: {
        defaults: exports.adminOrderSetFields,
        isList: true
    },
    retrieve: {
        defaults: exports.adminOrderSetFields,
        isList: false
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicXVlcnktY29uZmlnLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2FwaS9hZG1pbi9vcmRlci1zZXRzL3F1ZXJ5LWNvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBYSxRQUFBLG1CQUFtQixHQUFHO0lBQ2pDLElBQUk7SUFDSixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixTQUFTO0lBQ1QsT0FBTztJQUNQLGFBQWE7SUFDYixXQUFXO0lBQ1gsdUJBQXVCO0lBQ3ZCLHFCQUFxQjtJQUNyQixXQUFXO0lBQ1gsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixjQUFjO0lBQ2QsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixxQkFBcUI7SUFDckIsdUJBQXVCO0lBQ3ZCLDJCQUEyQjtJQUMzQix1QkFBdUI7SUFDdkIsMkJBQTJCO0lBQzNCLG1CQUFtQjtJQUNuQixzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLDRCQUE0QjtJQUM1QiwrQkFBK0I7SUFDL0IsZ0NBQWdDO0lBQ2hDLHVCQUF1QjtJQUN2QiwwQkFBMEI7SUFDMUIsMkJBQTJCO0lBQzNCLG9DQUFvQztJQUNwQyxtQ0FBbUM7SUFDbkMsZ0NBQWdDO0lBQ2hDLG1CQUFtQjtJQUNuQixtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLDBCQUEwQjtJQUMxQiw0QkFBNEI7SUFDNUIsd0JBQXdCO0lBQ3hCLGdDQUFnQztJQUNoQyx1QkFBdUI7SUFDdkIsMkJBQTJCO0lBQzNCLDBCQUEwQjtJQUMxQiwyQkFBMkI7SUFDM0IscUNBQXFDO0lBQ3JDLHVDQUF1QztJQUN2Qyw4QkFBOEI7SUFDOUIsdUNBQXVDO0lBQ3ZDLCtDQUErQztDQUNoRCxDQUFBO0FBRVksUUFBQSx3QkFBd0IsR0FBRztJQUN0QyxJQUFJLEVBQUU7UUFDSixRQUFRLEVBQUUsMkJBQW1CO1FBQzdCLE1BQU0sRUFBRSxJQUFJO0tBQ2I7SUFDRCxRQUFRLEVBQUU7UUFDUixRQUFRLEVBQUUsMkJBQW1CO1FBQzdCLE1BQU0sRUFBRSxLQUFLO0tBQ2Q7Q0FDRixDQUFBIn0=