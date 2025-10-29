import { RefundSplitOrderPaymentsDTO } from "@mercurjs/framework";
export declare const validateRefundSplitOrderPaymentStep: import("@medusajs/framework/workflows-sdk").StepFunction<RefundSplitOrderPaymentsDTO, {
    id: string;
    refunded_amount: number;
    status: string;
}>;
