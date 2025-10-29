import { CreateOrderSetDTO } from "@mercurjs/framework";
export declare const createOrderSetStep: import("@medusajs/framework/workflows-sdk").StepFunction<CreateOrderSetDTO, {
    id: string;
    display_id: number | null;
    sales_channel_id: string;
    cart_id: string;
    customer_id: string | null;
    payment_collection_id: string;
    raw_display_id: Record<string, unknown> | null;
    created_at: Date;
    updated_at: Date;
    deleted_at: Date | null;
}>;
