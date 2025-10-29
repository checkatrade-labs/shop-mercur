import { BigNumber } from '@medusajs/framework/utils';
export declare const calculateTotalCommissionStep: import("@medusajs/framework/workflows-sdk").StepFunction<{
    order_id: string;
}, {
    total_commission: BigNumber;
}>;
