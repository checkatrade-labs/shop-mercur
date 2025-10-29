import { ProductStatus } from '@medusajs/framework/utils';
export declare const updateProductStatusStep: import("@medusajs/framework/workflows-sdk").StepFunction<{
    id: string;
    status: ProductStatus;
}, import("@medusajs/types").ProductDTO>;
