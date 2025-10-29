import { CreatePriceListWorkflowInputDTO } from "@medusajs/framework/types";
export declare const createVendorPriceListWorkflow: import("@medusajs/workflows-sdk").ReturnWorkflow<{
    price_lists_data: CreatePriceListWorkflowInputDTO;
    seller_id: string;
}, import("@medusajs/framework/types").PriceListDTO[], []>;
