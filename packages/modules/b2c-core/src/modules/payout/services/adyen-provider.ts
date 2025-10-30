import { ConfigModule, Logger } from "@medusajs/framework/types";
import { MedusaError } from "@medusajs/framework/utils";

import { PAYOUT_MODULE } from "..";

import {
  CreatePayoutAccountInput,
  CreatePayoutAccountResponse,
  IPayoutProvider,
  InitializeOnboardingResponse,
  PayoutWebhookActionPayload,
  PayoutWebhookActionAndDataResponse,
  ProcessPayoutInput,
  ProcessPayoutResponse,
  ReversePayoutInput,
} from "@mercurjs/framework";

type InjectedDependencies = {
  logger: Logger;
  configModule: ConfigModule;
};

type AdyenConnectConfig = {
  adyenMerchantAccount: string;
  adyenThemeId: string;
  adyenPaymentApiKey: string;
  adyenPlatformApiKey: string;
  adyenLegalApiKey: string;
  adyenUrlPrefix: string;
  adyenEnvironment: string;
  adyenHmacSecret: string;
};

export class AdyenPayoutProvider implements IPayoutProvider {
  protected readonly config_: AdyenConnectConfig;
  protected readonly logger_: Logger;
  // TODO: Initialize Adyen client here when implementing
  // protected readonly client_: AdyenClient;

  constructor({ logger, configModule }: InjectedDependencies) {
    this.logger_ = logger;

    const moduleDef = configModule.modules?.[PAYOUT_MODULE];
    if (typeof moduleDef !== "boolean" && moduleDef?.options) {
      this.config_ = {
        adyenMerchantAccount: process.env.ADYEN_MERCHANT_ACCOUNT as string,
        adyenThemeId: process.env.ADYEN_THEME_ID as string,
        adyenPaymentApiKey: process.env.ADYEN_PAYMENT_API_KEY as string,
        adyenPlatformApiKey: process.env.ADYEN_PLATFORM_API_KEY as string,
        adyenLegalApiKey: process.env.ADYEN_LEGAL_API_KEY as string,
        adyenUrlPrefix: process.env.ADYEN_URL_PREFIX as string,
        adyenEnvironment: process.env.ADYEN_ENVIRONMENT as string,
        adyenHmacSecret: process.env.ADYEN_HMAC_SECRET as string,
      };
    }

    // TODO: Initialize Adyen client
    // this.client_ = new AdyenClient(this.config_.apiKey);
  }

  async createPayout({
    amount,
    currency,
    account_reference_id,
    transaction_id,
    source_transaction,
  }: ProcessPayoutInput): Promise<ProcessPayoutResponse> {
    // TODO: Implement Adyen payout creation
    this.logger_.info(
      `[Adyen] Processing payout for transaction with ID ${transaction_id}`
    );

    throw new MedusaError(
      MedusaError.Types.NOT_ALLOWED,
      "Adyen createPayout not yet implemented"
    );
  }

  async createPayoutAccount({
    payment_provider_id,
    context,
    account_id,
  }: CreatePayoutAccountInput): Promise<CreatePayoutAccountResponse> {
    // TODO: Implement Adyen account creation
    this.logger_.info("[Adyen] Creating payout account");

    throw new MedusaError(
      MedusaError.Types.NOT_ALLOWED,
      "Adyen createPayoutAccount not yet implemented"
    );
  }

  async initializeOnboarding(
    accountId: string,
    context: Record<string, unknown>
  ): Promise<InitializeOnboardingResponse> {
    // TODO: Implement Adyen onboarding initialization
    this.logger_.info("[Adyen] Initializing onboarding");

    throw new MedusaError(
      MedusaError.Types.NOT_ALLOWED,
      "Adyen initializeOnboarding not yet implemented"
    );
  }

  async getAccount(accountId: string): Promise<Record<string, unknown>> {
    // TODO: Implement Adyen account retrieval
    throw new MedusaError(
      MedusaError.Types.NOT_ALLOWED,
      "Adyen getAccount not yet implemented"
    );
  }

  async reversePayout(input: ReversePayoutInput): Promise<Record<string, unknown>> {
    // TODO: Implement Adyen payout reversal
    throw new MedusaError(
      MedusaError.Types.NOT_ALLOWED,
      "Adyen reversePayout not yet implemented"
    );
  }

  async getWebhookActionAndData(
    payload: PayoutWebhookActionPayload
  ): Promise<PayoutWebhookActionAndDataResponse> {
    // TODO: Implement Adyen webhook handling
    throw new MedusaError(
      MedusaError.Types.NOT_ALLOWED,
      "Adyen getWebhookActionAndData not yet implemented"
    );
  }
}
