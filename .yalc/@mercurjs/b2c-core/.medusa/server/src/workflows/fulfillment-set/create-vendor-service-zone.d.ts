import { CreateServiceZoneDTO } from "@medusajs/framework/types";
type WorkflowData = {
    seller_id: string;
    data: CreateServiceZoneDTO[];
};
export declare const createVendorServiceZonesWorkflow: import("@medusajs/framework/workflows-sdk").ReturnWorkflow<WorkflowData, import("@medusajs/medusa/core-flows").CreateServiceZonesWorkflowOutput, []>;
export {};
