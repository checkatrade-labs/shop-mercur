"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.orderSetQueryConfig = exports.defaultStoreRetrieveOrderSetFields = void 0;
exports.defaultStoreRetrieveOrderSetFields = [
    'id',
    'updated_at',
    'created_at',
    'display_id',
    'orders.id',
    'orders.display_id',
    'orders.currency_code',
    'orders.created_at',
    'orders.updated_at',
    'orders.completed_at',
    'orders.status',
    'orders.payment_status',
    'orders.fulfillment_status',
    'orders.total',
    'orders.subtotal',
    'orders.tax_total',
    'orders.discount_total',
    'orders.discount_tax_total',
    'orders.original_total',
    'orders.original_tax_total',
    'orders.item_total',
    'orders.item_subtotal',
    'orders.item_tax_total',
    'orders.sales_channel_id',
    'orders.original_item_total',
    'orders.original_item_subtotal',
    'orders.original_item_tax_total',
    'orders.shipping_total',
    'orders.shipping_subtotal',
    'orders.shipping_tax_total',
    'orders.shipping_address.*',
    'orders.items.*',
    'orders.seller.*',
    'orders.fulfillments.labels.*'
];
exports.orderSetQueryConfig = {
    retrieve: {
        defaults: [],
        isList: false
    },
    list: {
        defaults: [],
        isList: true
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicXVlcnktY29uZmlnLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2FwaS9zdG9yZS9vcmRlci1zZXQvcXVlcnktY29uZmlnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFhLFFBQUEsa0NBQWtDLEdBQUc7SUFDaEQsSUFBSTtJQUNKLFlBQVk7SUFDWixZQUFZO0lBQ1osWUFBWTtJQUNaLFdBQVc7SUFDWCxtQkFBbUI7SUFDbkIsc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQixtQkFBbUI7SUFDbkIscUJBQXFCO0lBQ3JCLGVBQWU7SUFDZix1QkFBdUI7SUFDdkIsMkJBQTJCO0lBQzNCLGNBQWM7SUFDZCxpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLHVCQUF1QjtJQUN2QiwyQkFBMkI7SUFDM0IsdUJBQXVCO0lBQ3ZCLDJCQUEyQjtJQUMzQixtQkFBbUI7SUFDbkIsc0JBQXNCO0lBQ3RCLHVCQUF1QjtJQUN2Qix5QkFBeUI7SUFDekIsNEJBQTRCO0lBQzVCLCtCQUErQjtJQUMvQixnQ0FBZ0M7SUFDaEMsdUJBQXVCO0lBQ3ZCLDBCQUEwQjtJQUMxQiwyQkFBMkI7SUFDM0IsMkJBQTJCO0lBQzNCLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsOEJBQThCO0NBQy9CLENBQUE7QUFFWSxRQUFBLG1CQUFtQixHQUFHO0lBQ2pDLFFBQVEsRUFBRTtRQUNSLFFBQVEsRUFBRSxFQUFFO1FBQ1osTUFBTSxFQUFFLEtBQUs7S0FDZDtJQUNELElBQUksRUFBRTtRQUNKLFFBQVEsRUFBRSxFQUFFO1FBQ1osTUFBTSxFQUFFLElBQUk7S0FDYjtDQUNGLENBQUEifQ==