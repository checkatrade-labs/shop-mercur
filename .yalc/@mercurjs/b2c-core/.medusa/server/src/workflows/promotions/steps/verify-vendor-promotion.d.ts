import { CreatePromotionDTO } from '@medusajs/framework/types';
export declare const verifyVendorPromotionStep: import("@medusajs/framework/workflows-sdk").StepFunction<{
    promotion: CreatePromotionDTO;
    seller_id: string;
}, unknown>;
