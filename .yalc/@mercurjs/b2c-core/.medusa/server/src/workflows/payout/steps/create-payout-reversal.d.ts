import { BigNumberInput } from "@medusajs/framework/types";
type CreatePayoutReversalStepInput = {
    payout_id: string | null;
    amount: BigNumberInput;
    currency_code: string;
};
export declare const createPayoutReversalStep: import("@medusajs/framework/workflows-sdk").StepFunction<CreatePayoutReversalStepInput, unknown>;
export {};
