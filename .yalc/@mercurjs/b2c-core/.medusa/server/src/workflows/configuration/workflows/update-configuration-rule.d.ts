import { UpdateConfigurationRuleDTO } from '@mercurjs/framework';
export declare const updateConfigurationRuleWorkflow: import("@medusajs/workflows-sdk").ReturnWorkflow<UpdateConfigurationRuleDTO, {
    id: string;
    rule_type: "global_product_catalog" | "require_product_approval" | "product_request_enabled" | "product_import_enabled";
    is_enabled: boolean;
    created_at: Date;
    updated_at: Date;
    deleted_at: Date | null;
}, []>;
