export declare const ConfigurationRule: import("@medusajs/framework/utils").DmlEntity<import("@medusajs/framework/utils").DMLEntitySchemaBuilder<{
    id: import("@medusajs/framework/utils").PrimaryKeyModifier<string, import("@medusajs/framework/utils").IdProperty>;
    rule_type: import("@medusajs/framework/utils").EnumProperty<["global_product_catalog", "require_product_approval", "product_request_enabled", "product_import_enabled"]>;
    is_enabled: import("@medusajs/framework/utils").BooleanProperty;
}>, "configuration_rule">;
