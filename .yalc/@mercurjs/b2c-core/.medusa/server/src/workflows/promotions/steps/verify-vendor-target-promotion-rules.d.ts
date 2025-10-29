import { CreatePromotionRuleDTO } from '@medusajs/framework/types';
export declare const verifyVendorTargetPromotionRulesStep: import("@medusajs/framework/workflows-sdk").StepFunction<{
    rules?: CreatePromotionRuleDTO[];
    seller_id: string;
}, unknown>;
