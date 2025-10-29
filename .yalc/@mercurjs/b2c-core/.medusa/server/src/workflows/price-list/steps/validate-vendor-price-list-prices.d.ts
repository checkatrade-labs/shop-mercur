import { CreatePriceListPriceWorkflowDTO, UpdatePriceListPriceWorkflowDTO } from '@medusajs/framework/types';
export declare const validateVendorPriceListPricesStep: import("@medusajs/framework/workflows-sdk").StepFunction<{
    create?: CreatePriceListPriceWorkflowDTO[];
    update?: UpdatePriceListPriceWorkflowDTO[];
    price_list_id?: string;
    seller_id: string;
}, unknown>;
