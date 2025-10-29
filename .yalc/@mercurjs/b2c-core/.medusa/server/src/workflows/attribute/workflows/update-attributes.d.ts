import { UpdateAttributeDTO } from "@mercurjs/framework";
export type UpdateAttributesWorkflowInput = {
    attributes: UpdateAttributeDTO[];
};
export declare const updateAttributesWorkflow: import("@medusajs/framework/workflows-sdk").ReturnWorkflow<UpdateAttributesWorkflowInput, {
    possible_values: {
        attribute_id: string;
        id?: string;
        value?: string;
        rank?: number;
        metadata?: Record<string, unknown>;
    }[] | undefined;
    id: string;
    name?: string;
    description?: string;
    handle?: string;
    is_filterable?: boolean;
    is_required?: boolean;
    metadata?: Record<string, unknown>;
    product_category_ids?: {
        id: string;
    }[];
}[], []>;
