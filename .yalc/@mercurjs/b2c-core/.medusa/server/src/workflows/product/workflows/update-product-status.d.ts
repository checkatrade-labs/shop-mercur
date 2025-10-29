import { ProductStatus } from '@medusajs/framework/utils';
export declare const updateProductStatusWorkflow: import("@medusajs/workflows-sdk").ReturnWorkflow<{
    id: string;
    status: ProductStatus;
}, import("@medusajs/types").ProductDTO, []>;
