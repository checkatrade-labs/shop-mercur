import { CreatePriceListPriceWorkflowDTO, UpdatePriceListPriceWorkflowDTO } from '@medusajs/framework/types';
type WorkflowInput = {
    id: string;
    seller_id: string;
    delete: string[];
    create: CreatePriceListPriceWorkflowDTO[];
    update: UpdatePriceListPriceWorkflowDTO[];
};
export declare const batchVendorPriceListPricesWorkflow: import("@medusajs/workflows-sdk").ReturnWorkflow<WorkflowInput, import("@medusajs/framework/types").BatchPriceListPricesWorkflowResult, []>;
export {};
