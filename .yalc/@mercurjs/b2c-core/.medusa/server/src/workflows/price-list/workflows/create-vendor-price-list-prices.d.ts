import { CreatePriceListPriceWorkflowDTO } from '@medusajs/framework/types';
export declare const createVendorPriceListPricesWorkflow: import("@medusajs/framework/workflows-sdk").ReturnWorkflow<{
    prices: CreatePriceListPriceWorkflowDTO[];
    price_list_id: string;
    seller_id: string;
}, import("@medusajs/medusa/core-flows").CreatePriceListPricesWorkflowOutput, []>;
