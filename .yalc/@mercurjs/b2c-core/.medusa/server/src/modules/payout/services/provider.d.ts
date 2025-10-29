import Stripe from "stripe";
import { ConfigModule, Logger } from "@medusajs/framework/types";
import { CreatePayoutAccountInput, CreatePayoutAccountResponse, IPayoutProvider, InitializeOnboardingResponse, PayoutWebhookAction, PayoutWebhookActionPayload, ProcessPayoutInput, ProcessPayoutResponse, ReversePayoutInput } from "@mercurjs/framework";
type InjectedDependencies = {
    logger: Logger;
    configModule: ConfigModule;
};
type StripeConnectConfig = {
    apiKey: string;
    webhookSecret: string;
};
export declare class PayoutProvider implements IPayoutProvider {
    protected readonly config_: StripeConnectConfig;
    protected readonly logger_: Logger;
    protected readonly client_: Stripe;
    constructor({ logger, configModule }: InjectedDependencies);
    createPayout({ amount, currency, account_reference_id, transaction_id, source_transaction, }: ProcessPayoutInput): Promise<ProcessPayoutResponse>;
    createPayoutAccount({ context, account_id, }: CreatePayoutAccountInput): Promise<CreatePayoutAccountResponse>;
    initializeOnboarding(accountId: string, context: Record<string, unknown>): Promise<InitializeOnboardingResponse>;
    getAccount(accountId: string): Promise<Stripe.Account>;
    reversePayout(input: ReversePayoutInput): Promise<Stripe.Response<Stripe.TransferReversal>>;
    getWebhookActionAndData(payload: PayoutWebhookActionPayload): Promise<{
        action: PayoutWebhookAction;
        data: {
            account_id: string;
        };
    }>;
}
export {};
