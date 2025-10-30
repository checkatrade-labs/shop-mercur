import { ConfigModule, Logger } from "@medusajs/framework/types";
import { MedusaError, isPresent } from "@medusajs/framework/utils";
import { LegalEntityInfoRequiredType } from "@adyen/api-library/lib/src/typings/legalEntityManagement/legalEntityInfoRequiredType";
import { OnboardingLinkInfo } from "@adyen/api-library/lib/src/typings/legalEntityManagement/onboardingLinkInfo";

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

import {
  BalancePlatformAPI,
  Client,
  EnvironmentEnum,
  LegalEntityManagementAPI,
  ManagementAPI,
  DataProtectionAPI,
  Types,
} from "@adyen/api-library";

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
  adyenEnvironment: EnvironmentEnum;
  adyenHmacSecret: string;
};

export class AdyenPayoutProvider implements IPayoutProvider {
  protected readonly config_: AdyenConnectConfig;
  protected readonly logger_: Logger;
  protected readonly legalEntityApi_: LegalEntityManagementAPI;
  protected readonly balancePlatformApi_: BalancePlatformAPI;
  protected readonly managementApi_: ManagementAPI;
  protected readonly dataProtectionApi_: DataProtectionAPI;

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
        adyenEnvironment: process.env.ADYEN_ENVIRONMENT as EnvironmentEnum,
        adyenHmacSecret: process.env.ADYEN_HMAC_SECRET as string,
      };
    }

    // Initialize Adyen clients
    const platformClient = new Client({
      apiKey: this.config_.adyenPlatformApiKey,
      environment: this.config_.adyenEnvironment,
      liveEndpointUrlPrefix: this.config_.adyenUrlPrefix,
    });

    const legalClient = new Client({
      apiKey: this.config_.adyenLegalApiKey,
      environment: this.config_.adyenEnvironment,
      liveEndpointUrlPrefix: this.config_.adyenUrlPrefix,
    });

    const paymentClient = new Client({
      apiKey: this.config_.adyenPaymentApiKey,
      environment: this.config_.adyenEnvironment,
      liveEndpointUrlPrefix: this.config_.adyenUrlPrefix,
    });

    this.legalEntityApi_ = new LegalEntityManagementAPI(legalClient);
    this.balancePlatformApi_ = new BalancePlatformAPI(platformClient);
    this.managementApi_ = new ManagementAPI(paymentClient);
    this.dataProtectionApi_ = new DataProtectionAPI(paymentClient);
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
    account_id: legal_entity_id,
  }: CreatePayoutAccountInput): Promise<CreatePayoutAccountResponse> {
    let legalEntity: Types.legalEntityManagement.LegalEntity | undefined;
    let accountHolder: Types.balancePlatform.AccountHolder | undefined;
    let balanceAccount: Types.balancePlatform.BalanceAccount | undefined;
    let businessLine: Types.legalEntityManagement.BusinessLine | undefined;
    let store: Types.management.Store | undefined;

    try {
      this.logger_.info("[Adyen] Creating payout account (legal entity)");

      if (!isPresent(context.country)) {
        throw new MedusaError(
          MedusaError.Types.INVALID_DATA,
          `"country" is required`
        );
      }

      legalEntity =
        await this.legalEntityApi_.LegalEntitiesApi.createLegalEntity({
          type: LegalEntityInfoRequiredType.TypeEnum.Organization,
          reference: legal_entity_id,
          organization: {
            legalName: context.legal_name as string,
            description: `Legal entity for ${context.legal_name as string} on account ${legal_entity_id}`,
            phone: {
              phoneCountryCode: context.country_code as string,
              number: context.phone_number as string,
              type: "mobile",
            },
            registeredAddress: {
              city: context.city as string,
              postalCode: context.postal_code as string,
              street: context.street as string,
              street2: context.street2 as string,
              country: context.country as string,
            },
          },
        });

      this.logger_.info(`[Adyen] Legal entity created: ${legalEntity.id}`);

      accountHolder =
        await this.balancePlatformApi_.AccountHoldersApi.createAccountHolder({
          legalEntityId: legalEntity.id,
          description: `Account holder for ${context.legal_name as string}`,
          reference: legal_entity_id,
          // TODO: request capabilities if needed
          // capabilities: {},
        });

      this.logger_.info(`[Adyen] Account holder created: ${accountHolder.id}`);

      balanceAccount =
        await this.balancePlatformApi_.BalanceAccountsApi.createBalanceAccount({
          accountHolderId: accountHolder.id!,
          description: `Balance account for ${context.legal_name as string}`,
          reference: legal_entity_id,
        });

      this.logger_.info(
        `[Adyen] Balance account created: ${balanceAccount.id}`
      );

      businessLine =
        await this.legalEntityApi_.BusinessLinesApi.createBusinessLine({
          legalEntityId: legalEntity.id,
          industryCode: context.industry_code as string,
          service:
            Types.legalEntityManagement.BusinessLine.ServiceEnum
              .PaymentProcessing,
          salesChannels: ["eCommerce"],
          webData: [{ webAddress: process.env.STOREFRONT_URL as string }],
        });

      this.logger_.info(`[Adyen] Business line created: ${businessLine.id}`);

      store = await this.managementApi_.AccountStoreLevelApi.createStore({
        merchantId: this.config_.adyenMerchantAccount,
        businessLineIds: [businessLine.id],
        description: `Store for ${context.legal_name as string}`,
        address: {
          country: "GB",
          city: context.city as string,
          postalCode: context.postal_code as string,
          line1: context.street as string,
          line2: context.street2 as string,
        },
        phoneNumber: context.phone_number as string,
        shopperStatement: (context.legal_name as string).slice(0, 22),
        reference: legal_entity_id,
      });

      this.logger_.info(`[Adyen] Store created: ${store.id}`);

      return {
        data: legalEntity as unknown as Record<string, unknown>,
        id: legalEntity.id,
      };
    } catch (error) {
      this.logger_.error(
        "[Adyen] Error creating Adyen legal entity account",
        error
      );

      if (store && store.id) {
        await this.managementApi_.AccountStoreLevelApi.updateStoreById(
          store.id,
          {
            status: Types.management.Store.StatusEnum.Closed,
          }
        );

        this.logger_.info("[Adyen] Closed store");
      }

      if (businessLine && businessLine.id) {
        await this.legalEntityApi_.BusinessLinesApi.deleteBusinessLine(
          businessLine.id!
        );

        this.logger_.info("[Adyen] Deleted business line");
      }

      if (balanceAccount && balanceAccount.id) {
        await this.balancePlatformApi_.BalanceAccountsApi.updateBalanceAccount(
          balanceAccount.id,
          {
            status: Types.balancePlatform.BalanceAccount.StatusEnum.Closed,
          }
        );

        this.logger_.info("[Adyen] Closed balance account");
      }

      if (accountHolder && accountHolder.id) {
        await this.balancePlatformApi_.AccountHoldersApi.updateAccountHolder(
          accountHolder.id,
          {
            status: Types.balancePlatform.AccountHolder.StatusEnum.Closed,
          }
        );

        this.logger_.info("[Adyen] Closed account holder");
      }

      const message =
        error?.message ?? "Error occurred while creating Adyen payout account";
      throw new MedusaError(MedusaError.Types.UNEXPECTED_STATE, message);
    }
  }

  async initializeOnboarding(
    accountId: string,
    context: Record<string, unknown>
  ): Promise<InitializeOnboardingResponse> {
    try {
      this.logger_.info(
        `[Adyen] Initializing onboarding for legal entity: ${accountId}`
      );

      if (!isPresent(context.return_url)) {
        throw new MedusaError(
          MedusaError.Types.INVALID_DATA,
          `'return_url' is required`
        );
      }

      // Create an onboarding link for the legal entity
      const onboardingLinkRequest: OnboardingLinkInfo = {
        themeId: this.config_.adyenThemeId, // Your Adyen theme ID for branding
        locale: "en",
        redirectUrl: context.return_url as string,
      };

      const onboardingLink =
        await this.legalEntityApi_.HostedOnboardingApi.getLinkToAdyenhostedOnboardingPage(
          accountId,
          onboardingLinkRequest
        );

      this.logger_.info(
        `[Adyen] Onboarding link created: ${onboardingLink.url}`
      );

      return {
        data: {
          url: onboardingLink.url,
          expires_at: new Date(Date.now() + 30 * 60 * 1000),
        },
      };
    } catch (error) {
      this.logger_.error("[Adyen] Error initializing onboarding", error);
      const message =
        error?.message ?? "Error occurred while initializing Adyen onboarding";
      throw new MedusaError(MedusaError.Types.UNEXPECTED_STATE, message);
    }
  }

  async getAccount(accountId: string): Promise<Record<string, unknown>> {
    try {
      this.logger_.info(`[Adyen] Retrieving legal entity: ${accountId}`);

      const legalEntity =
        await this.legalEntityApi_.LegalEntitiesApi.getLegalEntity(accountId);

      this.logger_.info(`[Adyen] Legal entity retrieved: ${legalEntity.id}`);

      return legalEntity as unknown as Record<string, unknown>;
    } catch (error) {
      this.logger_.error("[Adyen] Error retrieving account", error);
      const message =
        error?.message ?? "Error occurred while getting Adyen account";
      throw new MedusaError(MedusaError.Types.UNEXPECTED_STATE, message);
    }
  }

  async reversePayout(
    input: ReversePayoutInput
  ): Promise<Record<string, unknown>> {
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
