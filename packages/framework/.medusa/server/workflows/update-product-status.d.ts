import { ProductStatus } from "@medusajs/framework/utils";
export declare const updateProductStatusStep: import("@medusajs/workflows-sdk").StepFunction<{
    id: string;
    status: ProductStatus;
}, import("@medusajs/types").ProductDTO>;
export declare const updateProductStatusWorkflow: import("@medusajs/workflows-sdk").ReturnWorkflow<{
    id: string;
    status: ProductStatus;
}, import("@medusajs/types").ProductDTO, []>;
//# sourceMappingURL=update-product-status.d.ts.map