import { CreateAttributeValueDTO } from "@mercurjs/framework";
export declare const createAttributePossibleValuesStepId = "create-attribute-possible-values";
export type CreateAttributePossibleValuesStepInput = CreateAttributeValueDTO[];
export declare const createAttributePossibleValuesStep: import("@medusajs/framework/workflows-sdk").StepFunction<CreateAttributePossibleValuesStepInput, {
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
}[]>;
