import { CreatePromotionDTO } from "@medusajs/framework/types";
export declare const createVendorPromotionWorkflow: import("@medusajs/workflows-sdk").ReturnWorkflow<{
    promotion: CreatePromotionDTO;
    seller_id: string;
}, import("@medusajs/framework/types").PromotionDTO[], []>;
