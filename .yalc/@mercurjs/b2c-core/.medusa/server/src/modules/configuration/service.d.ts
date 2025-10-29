import { ConfigurationRuleType } from "@mercurjs/framework";
declare const ConfigurationModuleService_base: import("@medusajs/framework/utils").MedusaServiceReturnType<import("@medusajs/framework/utils").ModelConfigurationsToConfigTemplate<{
    readonly ConfigurationRule: import("@medusajs/framework/utils").DmlEntity<import("@medusajs/framework/utils").DMLEntitySchemaBuilder<{
        id: import("@medusajs/framework/utils").PrimaryKeyModifier<string, import("@medusajs/framework/utils").IdProperty>;
        rule_type: import("@medusajs/framework/utils").EnumProperty<["global_product_catalog", "require_product_approval", "product_request_enabled", "product_import_enabled"]>;
        is_enabled: import("@medusajs/framework/utils").BooleanProperty;
    }>, "configuration_rule">;
}>>;
declare class ConfigurationModuleService extends ConfigurationModuleService_base {
    isRuleEnabled(type: ConfigurationRuleType): Promise<boolean>;
}
export default ConfigurationModuleService;
