export declare const markSplitOrderPaymentsAsCapturedWorkflow: import("@medusajs/framework/workflows-sdk").ReturnWorkflow<string, {
    id: string;
    status: string;
    currency_code: string;
    authorized_amount: number;
    captured_amount: number;
    refunded_amount: number;
    payment_collection_id: string;
    raw_authorized_amount: Record<string, unknown>;
    raw_captured_amount: Record<string, unknown>;
    raw_refunded_amount: Record<string, unknown>;
    created_at: Date;
    updated_at: Date;
    deleted_at: Date | null;
}[], []>;
