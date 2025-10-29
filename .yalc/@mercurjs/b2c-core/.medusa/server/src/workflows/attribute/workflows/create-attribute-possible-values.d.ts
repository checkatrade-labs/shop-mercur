import { CreateAttributeValueDTO } from '@mercurjs/framework';
export type CreateAttributePossibleValuesWorkflowInput = CreateAttributeValueDTO[];
export declare const createAttributePossibleValuesWorkflow: import("@medusajs/framework/workflows-sdk").ReturnWorkflow<CreateAttributePossibleValuesWorkflowInput, {
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
        values: {
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
        possible_values: /*elided*/ any[];
        created_at: Date;
        updated_at: Date;
        deleted_at: Date | null;
    };
    created_at: Date;
    updated_at: Date;
    deleted_at: Date | null;
    attribute_id: string;
}[], []>;
