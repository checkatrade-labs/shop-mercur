import { CreateProductAttributeValueDTO } from "@mercurjs/framework";
export declare const createAttributeValueWorkflowId = "create-attribute-value";
export declare const createAttributeValueWorkflow: import("@medusajs/framework/workflows-sdk").ReturnWorkflow<CreateProductAttributeValueDTO, {
    id: string;
    value: string;
    rank: number;
    metadata: Record<string, unknown> | null;
    attribute: {
        id: string;
        name: string;
        description: string | null;
        is_required: boolean;
        is_filterable: boolean;
        handle: string;
        metadata: Record<string, unknown> | null;
        ui_component: import("@mercurjs/framework").AttributeUIComponent;
        values: /*elided*/ any[];
        possible_values: {
            id: string;
            value: string;
            rank: number;
            metadata: Record<string, unknown> | null;
            attribute: /*elided*/ any;
            created_at: Date;
            updated_at: Date;
            deleted_at: Date | null;
            attribute_id: string;
        }[];
        created_at: Date;
        updated_at: Date;
        deleted_at: Date | null;
    };
    created_at: Date;
    updated_at: Date;
    deleted_at: Date | null;
    attribute_id: string;
}, []>;
