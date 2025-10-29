import { RefundSplitOrderPaymentsDTO } from "@mercurjs/framework";
export declare const selectAndValidatePaymentRefundStep: import("@medusajs/framework/workflows-sdk").StepFunction<RefundSplitOrderPaymentsDTO, {
    payment_id: any;
    currency_code: any;
    amount: number;
    order_id: any;
}>;
export declare const partialPaymentRefundWorkflow: import("@medusajs/framework/workflows-sdk").ReturnWorkflow<RefundSplitOrderPaymentsDTO, import("@medusajs/types").PaymentDTO[], []>;
