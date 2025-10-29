type WorkflowInput = {
    name: string;
    created_by: string;
    seller_id: string;
};
export declare const createSellerCustomerGroupWorkflow: import("@medusajs/workflows-sdk").ReturnWorkflow<WorkflowInput, import("@medusajs/types").CustomerGroupDTO, []>;
export {};
