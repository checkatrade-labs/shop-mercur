import { CreatePayoutDTO, PayoutDTO } from "@mercurjs/framework";
export declare const createPayoutStep: import("@medusajs/framework/workflows-sdk").StepFunction<CreatePayoutDTO, {
    payout: PayoutDTO | null;
    err: boolean;
}>;
