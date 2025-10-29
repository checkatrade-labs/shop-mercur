import { CreateAttributeDTO } from "@mercurjs/framework";
export declare const createAttributesWorkflowId = "create-attributes";
type CreateAttributesWorkflowInput = {
    attributes: CreateAttributeDTO[];
};
export declare const createAttributesWorkflow: import("@medusajs/framework/workflows-sdk").ReturnWorkflow<CreateAttributesWorkflowInput, any[], []>;
export {};
