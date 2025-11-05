import Stripe from "stripe";
import {
  CheckoutAPI,
  EnvironmentEnum,
  ManagementAPI,
} from "@adyen/api-library";
import { Client } from "@adyen/api-library";

import {
  ProviderWebhookPayload,
  WebhookActionResult,
} from "@medusajs/framework/types";
import {
  AbstractPaymentProvider,
  MedusaError,
  PaymentActions,
  PaymentSessionStatus,
  isPresent,
} from "@medusajs/framework/utils";
import {
  AuthorizePaymentInput,
  AuthorizePaymentOutput,
  BigNumberInput,
  CancelPaymentInput,
  CancelPaymentOutput,
  CapturePaymentInput,
  CapturePaymentOutput,
  DeletePaymentInput,
  DeletePaymentOutput,
  GetPaymentStatusInput,
  GetPaymentStatusOutput,
  InitiatePaymentInput,
  InitiatePaymentOutput,
  PaymentProviderOutput,
  RefundPaymentInput,
  RefundPaymentOutput,
  RetrievePaymentInput,
  RetrievePaymentOutput,
  UpdatePaymentInput,
  UpdatePaymentOutput,
} from "@medusajs/types";

import {
  getAmountFromSmallestUnit,
  getSmallestUnit,
  ErrorCodes,
  ErrorIntentStatus,
} from "@mercurjs/framework";
import { PaymentMethodSetupInfo } from "@adyen/api-library/lib/src/typings/management/paymentMethodSetupInfo";
import { SessionResultResponse } from "@adyen/api-library/lib/src/typings/checkout/sessionResultResponse";

type Options = {
  apiKey: string;
  webhookSecret: string;

  adyenMerchantAccount: string;
  adyenThemeId: string;
  adyenPaymentApiKey: string;
  adyenPlatformApiKey: string;
  adyenLegalApiKey: string;
  adyenUrlPrefix: string;
  adyenEnvironment: EnvironmentEnum;
  adyenHmacSecret: string;

  allowedPaymentMethods: string[];
};

// TODO: Use types from "@mercurjs/framework"; as it's done for Stripe
// e.g. import { getSmallestUnit } from "@mercurjs/framework";

abstract class StripeConnectProvider extends AbstractPaymentProvider<Options> {
  private readonly options_: Options;
  private readonly client_: Client;
  private readonly client2_: Stripe;
  private readonly checkoutAPI_: CheckoutAPI;

  constructor(container, options: Options) {
    super(container);

    this.options_ = options;

    this.client_ = new Client({
      apiKey: options.adyenPaymentApiKey,
      environment: options.adyenEnvironment,
      liveEndpointUrlPrefix: options.adyenUrlPrefix,
    });

    this.checkoutAPI_ = new CheckoutAPI(this.client_);

    this.client2_ = new Stripe(options.apiKey);
  }

  async getPaymentStatus(
    input: GetPaymentStatusInput
  ): Promise<GetPaymentStatusOutput> {

    return { status: PaymentSessionStatus.CAPTURED, data: input.data };

    const paymentIntent =
      await this.checkoutAPI_.PaymentsApi.getResultOfPaymentSession(
        input.data?.id as string,
        "" // FIXME: Add sessionResult
      );
    const dataResponse = paymentIntent as unknown as Record<string, unknown>;

    switch (paymentIntent.status) {
      case SessionResultResponse.StatusEnum.Active:
      case SessionResultResponse.StatusEnum.PaymentPending:
        return { status: PaymentSessionStatus.PENDING, data: dataResponse };
      case SessionResultResponse.StatusEnum.Canceled:
      case SessionResultResponse.StatusEnum.Refused:
        return { status: PaymentSessionStatus.CANCELED, data: dataResponse };
      case SessionResultResponse.StatusEnum.Completed:
        return { status: PaymentSessionStatus.CAPTURED, data: dataResponse };
      case SessionResultResponse.StatusEnum.Expired:
        return { status: PaymentSessionStatus.REQUIRES_MORE, data: dataResponse };
      default:
        return { status: PaymentSessionStatus.PENDING, data: dataResponse };
    }
  }

  async initiatePayment(
    input: InitiatePaymentInput
  ): Promise<InitiatePaymentOutput> {
    const { amount, currency_code } = input;

    const session = await this.checkoutAPI_.PaymentsApi.sessions({
      merchantAccount: this.options_.adyenMerchantAccount,
      reference: input.context?.idempotency_key as string,
      store: "12afad4c-12f5-4a3d-a4a6-5bb4a35e229a", // TODO: Store should be passed as a parameter dynamically
      allowedPaymentMethods: ["visa", "mc", "amex"],
      amount: {
        value: getSmallestUnit(amount, currency_code),
        currency: currency_code?.toUpperCase(),
      },
      returnUrl: `${process.env.STOREFRONT_URL}/user`,
      shopperEmail: input.context?.customer?.email,
      shopperName: {
        firstName: input.context?.customer?.first_name as string,
        lastName: input.context?.customer?.last_name as string,
      },
      // TODO: Add basic metadata about seller and order
      metadata: {
        session_id: input.data?.session_id as string,
      },
    });

    return {
      id: session.id,
      data: session as unknown as PaymentProviderOutput,
    };
  }

  async authorizePayment(
    data: AuthorizePaymentInput
  ): Promise<AuthorizePaymentOutput> {
    const result = await this.getPaymentStatus(data);
    if (result.status === PaymentSessionStatus.CAPTURED) {
      return { status: PaymentSessionStatus.AUTHORIZED, data: result.data };
    }

    return result;
  }

  async cancelPayment({
    data: paymentSessionData,
  }: CancelPaymentInput): Promise<CancelPaymentOutput> {
    try {
      const id = paymentSessionData?.id as string;

      if (!id) {
        return { data: paymentSessionData };
      }

      const checkoutAPI = new CheckoutAPI(this.client_);
      const session =
        await checkoutAPI.ModificationsApi.cancelAuthorisedPayment({
          merchantAccount: this.options_.adyenMerchantAccount,
          paymentReference: paymentSessionData?.id as string,
        });

      return { data: session as unknown as PaymentProviderOutput };
    } catch (error) {
      throw this.buildError("An error occurred in cancelPayment", error);
    }
  }

  // By default, payments are captured automatically without a delay, immediately after authorization of the payment request.
  // ref: https://docs.adyen.com/online-payments/capture
  async capturePayment({
    data: paymentSessionData,
  }: CapturePaymentInput): Promise<CapturePaymentOutput> {
    return { data: paymentSessionData as unknown as PaymentProviderOutput };
  }

  deletePayment(data: DeletePaymentInput): Promise<DeletePaymentOutput> {
    return this.cancelPayment(data);
  }

  async refundPayment({
    data: paymentSessionData,
    amount,
  }: RefundPaymentInput): Promise<RefundPaymentOutput> {
    // TODO: Implement refund payment
    throw new MedusaError(
      MedusaError.Types.NOT_ALLOWED,
      "Refund payment not implemented"
    );
    // return { data: paymentSessionData };
  }

  // TODO: Needs to be tested
  async retrievePayment({
    data: paymentSessionData,
  }: RetrievePaymentInput): Promise<RetrievePaymentOutput> {
    try {

      return { data: paymentSessionData as unknown as PaymentProviderOutput };

      if (!paymentSessionData || !paymentSessionData?.id) {
        throw new MedusaError(
          MedusaError.Types.INVALID_DATA,
          "Payment session data is required"
        );
      }

      const checkoutAPI = new CheckoutAPI(this.client_);
      const response = await checkoutAPI.PaymentsApi.getResultOfPaymentSession(
        paymentSessionData?.id as string,
        "" // FIXME: Add sessionResult
      );

      const result = response as unknown as PaymentProviderOutput;

      return { data: result };
    } catch (e) {
      throw this.buildError("An error occurred in retrievePayment", e);
    }
  }

  async updatePayment(input: UpdatePaymentInput): Promise<UpdatePaymentOutput> {
    const { data, amount, currency_code } = input;

    const amountNumeric = getSmallestUnit(amount, currency_code);

    if (isPresent(amount) && data?.amount === amountNumeric) {
      return { data };
    }

    try {
      const id = data?.id as string;
      const sessionData = (await this.client2_.paymentIntents.update(id, {
        amount: amountNumeric,
      })) as any;

      return { data: sessionData };
    } catch (e) {
      throw this.buildError("An error occurred in updatePayment", e);
    }
  }

  async updatePaymentData(sessionId: string, data: Record<string, unknown>) {
    try {
      // Prevent from updating the amount from here as it should go through
      // the updatePayment method to perform the correct logic
      if (isPresent(data.amount)) {
        throw new MedusaError(
          MedusaError.Types.INVALID_DATA,
          "Cannot update amount, use updatePayment instead"
        );
      }

      return (await this.client2_.paymentIntents.update(sessionId, {
        ...data,
      })) as any;
    } catch (e) {
      throw this.buildError("An error occurred in updatePaymentData", e);
    }
  }

  async getWebhookActionAndData(
    webhookData: ProviderWebhookPayload["payload"]
  ): Promise<WebhookActionResult> {
    const event = this.constructWebhookEvent(webhookData);
    const intent = event.data.object as Stripe.PaymentIntent;

    const { currency } = intent;
    switch (event.type) {
      case "payment_intent.amount_capturable_updated":
        return {
          action: PaymentActions.AUTHORIZED,
          data: {
            session_id: intent.metadata.session_id,
            amount: getAmountFromSmallestUnit(
              intent.amount_capturable,
              currency
            ),
          },
        };
      case "payment_intent.succeeded":
        return {
          action: PaymentActions.SUCCESSFUL,
          data: {
            session_id: intent.metadata.session_id,
            amount: getAmountFromSmallestUnit(intent.amount_received, currency),
          },
        };
      case "payment_intent.payment_failed":
        return {
          action: PaymentActions.FAILED,
          data: {
            session_id: intent.metadata.session_id,
            amount: getAmountFromSmallestUnit(intent.amount, currency),
          },
        };
      default:
        return { action: PaymentActions.NOT_SUPPORTED };
    }
  }

  constructWebhookEvent(data: ProviderWebhookPayload["payload"]): Stripe.Event {
    const signature = data.headers["stripe-signature"] as string;

    return this.client2_.webhooks.constructEvent(
      data.rawData as string | Buffer,
      signature,
      this.options_.webhookSecret
    );
  }

  private buildError(message: string, error: Error) {
    return new MedusaError(
      MedusaError.Types.PAYMENT_AUTHORIZATION_ERROR,
      `${message}: ${error}`
    );
  }
}

export default StripeConnectProvider;
