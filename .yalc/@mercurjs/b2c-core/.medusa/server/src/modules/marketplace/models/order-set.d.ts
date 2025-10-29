export declare const OrderSet: import("@medusajs/framework/utils").DmlEntity<import("@medusajs/framework/utils").DMLEntitySchemaBuilder<{
    id: import("@medusajs/framework/utils").PrimaryKeyModifier<string, import("@medusajs/framework/utils").IdProperty>;
    display_id: import("@medusajs/framework/utils").NullableModifier<number, import("@medusajs/framework/utils").NumberProperty>;
    sales_channel_id: import("@medusajs/framework/utils").TextProperty;
    cart_id: import("@medusajs/framework/utils").TextProperty;
    customer_id: import("@medusajs/framework/utils").NullableModifier<string, import("@medusajs/framework/utils").TextProperty>;
    payment_collection_id: import("@medusajs/framework/utils").TextProperty;
}>, "order_set">;
