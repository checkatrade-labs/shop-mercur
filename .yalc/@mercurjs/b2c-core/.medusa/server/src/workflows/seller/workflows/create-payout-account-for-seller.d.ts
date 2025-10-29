import { CreatePayoutAccountDTO } from "@mercurjs/framework";
type CreatePayoutAccountForSellerInput = {
    context: CreatePayoutAccountDTO["context"];
    seller_id: string;
};
export declare const createPayoutAccountForSellerWorkflow: import("@medusajs/workflows-sdk").ReturnWorkflow<CreatePayoutAccountForSellerInput, {
    id: string;
    status: import("@mercurjs/framework").PayoutAccountStatus;
    reference_id: string;
    data: Record<string, unknown>;
    context: Record<string, unknown> | null;
    onboarding: {
        id: string;
        data: Record<string, unknown> | null;
        context: Record<string, unknown> | null;
        payout_account: /*elided*/ any;
        created_at: Date;
        updated_at: Date;
        deleted_at: Date | null;
        payout_account_id: string;
    };
    payouts: {
        id: string;
        currency_code: string;
        amount: number;
        data: Record<string, unknown> | null;
        payout_account: /*elided*/ any;
        reversals: {
            id: string;
            currency_code: string;
            amount: number;
            data: Record<string, unknown> | null;
            payout: /*elided*/ any;
            raw_amount: Record<string, unknown>;
            created_at: Date;
            updated_at: Date;
            deleted_at: Date | null;
            payout_id: string;
        }[];
        raw_amount: Record<string, unknown>;
        created_at: Date;
        updated_at: Date;
        deleted_at: Date | null;
        payout_account_id: string;
    }[];
    created_at: Date;
    updated_at: Date;
    deleted_at: Date | null;
}, []>;
export {};
