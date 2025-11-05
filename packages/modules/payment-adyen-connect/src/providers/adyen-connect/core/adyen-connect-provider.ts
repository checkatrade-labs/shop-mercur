import Stripe from "stripe";
import {
  CheckoutAPI,
  EnvironmentEnum,
  ManagementAPI,
} from "@adyen/api-library";
import { Client } from "@adyen/api-library";
import HmacValidator from "@adyen/api-library/lib/src/utils/hmacValidator";
import { NotificationRequestItem } from "@adyen/api-library/lib/src/typings/notification/models";

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
  toUnixSlash,
} from "@medusajs/framework/utils";
import {
  AuthorizePaymentInput,
  AuthorizePaymentOutput,
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
        return {
          status: PaymentSessionStatus.REQUIRES_MORE,
          data: dataResponse,
        };
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
      const reference = paymentSessionData?.reference as string;
      if (!reference) {
        return { data: paymentSessionData };
      }

      const checkoutAPI = new CheckoutAPI(this.client_);
      const session =
        await checkoutAPI.ModificationsApi.cancelAuthorisedPayment({
          merchantAccount: this.options_.adyenMerchantAccount,
          paymentReference: reference,
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
    try {

      throw new MedusaError(
        MedusaError.Types.NOT_ALLOWED,
        "Refund payment not implemented"
      );

      const response =
        await this.checkoutAPI_.ModificationsApi.refundCapturedPayment(
          "", // FIXME: Get payment PSP reference after we will receive the webhook
          {
            merchantAccount: this.options_.adyenMerchantAccount,
            amount: {
              value: getSmallestUnit(
                amount,
                paymentSessionData?.currency as string
              ),
              currency: paymentSessionData?.currency as string,
            },
          }
        );

      return { data: response as unknown as PaymentProviderOutput };
    } catch (e) {
      throw this.buildError("An error occurred in refundPayment", e);
    }
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

    throw new MedusaError(
      MedusaError.Types.NOT_ALLOWED,
      "Update payment not implemented"
    );

    const { data, amount, currency_code } = input;

    const amountNumeric = getSmallestUnit(amount, currency_code);

    if (isPresent(amount) && data?.amount === amountNumeric) {
      return { data };
    }

    try {
      const response = await this.checkoutAPI_.ModificationsApi.updateAuthorisedAmount(
        "", // FIXME: Get payment PSP reference after we will receive the webhook
        {
          merchantAccount: this.options_.adyenMerchantAccount,
          amount: {
            value: amountNumeric,
            currency: currency_code as string,
          },
        }
      );

      return { data: response as unknown as PaymentProviderOutput };
    } catch (e) {
      throw this.buildError("An error occurred in updatePayment", e);
    }
  }

  // TODO: Implement if it's needed
  async updatePaymentData(sessionId: string, data: Record<string, unknown>) {
    try {
      throw new MedusaError(
        MedusaError.Types.NOT_ALLOWED,
        "Update payment data not implemented"
      );

      // Prevent from updating the amount from here as it should go through
      // the updatePayment method to perform the correct logic
      if (isPresent(data.amount)) {
        throw new MedusaError(
          MedusaError.Types.INVALID_DATA,
          "Cannot update amount, use updatePayment instead"
        );
      }

    } catch (e) {
      throw this.buildError("An error occurred in updatePaymentData", e);
    }
  }

  async getWebhookActionAndData(
    webhookData: ProviderWebhookPayload["payload"]
  ): Promise<WebhookActionResult> {
    
    console.log("--------------------------------");
    console.log("webhookData", JSON.stringify(webhookData, null, 2));
    console.log("--------------------------------");

    const rawBody =
      typeof webhookData.rawData === "string"
        ? webhookData.rawData
        : webhookData.rawData.toString("utf8");

    const body = JSON.parse(rawBody);

    const notificationItems = body.notificationItems as Array<{
      NotificationRequestItem: NotificationRequestItem;
    }>;

    if (!notificationItems || !Array.isArray(notificationItems)) {
      throw new MedusaError(
        MedusaError.Types.INVALID_DATA,
        "Invalid webhook notification format"
      );
    }

    // Process the first notification item (Adyen typically sends one per webhook)
    const firstItem = notificationItems[0];
    if (!firstItem?.NotificationRequestItem) {
      throw new MedusaError(
        MedusaError.Types.INVALID_DATA,
        "Invalid notification item structure"
      );
    }

    const notification = firstItem.NotificationRequestItem;

    // Validate HMAC signature
    if (!notification.additionalData?.hmacSignature) {
      throw new MedusaError(
        MedusaError.Types.INVALID_DATA,
        "Missing hmacSignature for notification"
      );
    }

    const hmacValidator = new HmacValidator();
    if (!hmacValidator.validateHMAC(notification, this.options_.adyenHmacSecret)) {
      throw new MedusaError(
        MedusaError.Types.INVALID_DATA,
        "Invalid HMAC signature for notification"
      );
    }

    // Extract amount and currency
    const amount = notification.amount?.value && notification.amount?.currency
      ? getAmountFromSmallestUnit(
          notification.amount.value,
          notification.amount.currency
        )
      : 0;

    const isSuccess =
      notification.success ===
      NotificationRequestItem.SuccessEnum.True;

    // Map Adyen event codes to Medusa PaymentActions
    const baseData = {
      session_id: notification.merchantReference,
      amount: amount,
      pspReference: notification.pspReference,
    };

    switch (notification.eventCode) {
      case NotificationRequestItem.EventCodeEnum.Authorisation:
        return {
          action: isSuccess
            ? PaymentActions.AUTHORIZED
            : PaymentActions.FAILED,
          data: baseData,
        };

      case NotificationRequestItem.EventCodeEnum.Capture:
        return {
          action: isSuccess
            ? PaymentActions.SUCCESSFUL
            : PaymentActions.FAILED,
          data: baseData,
        };

      case NotificationRequestItem.EventCodeEnum.Cancellation:
      case NotificationRequestItem.EventCodeEnum.CancelOrRefund:
        return {
          action: PaymentActions.FAILED,
          data: baseData,
        };

      case NotificationRequestItem.EventCodeEnum.Refund:
      case NotificationRequestItem.EventCodeEnum.RefundFailed:
        // Refunds are handled separately, not as payment actions
        return { action: PaymentActions.NOT_SUPPORTED };

      default:
        return { action: PaymentActions.NOT_SUPPORTED };
    }
  }

  constructWebhookEvent(data: ProviderWebhookPayload["payload"]): Stripe.Event {
    // This method is kept for backward compatibility but not used for Adyen webhooks
    // Adyen webhooks are validated in getWebhookActionAndData using HMAC
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
