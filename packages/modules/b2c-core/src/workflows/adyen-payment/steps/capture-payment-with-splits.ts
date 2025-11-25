import { StepResponse, createStep } from "@medusajs/framework/workflows-sdk";
import {
  ContainerRegistrationKeys,
  MedusaError,
} from "@medusajs/framework/utils";
import { Client, CheckoutAPI, EnvironmentEnum } from "@adyen/api-library";
import { Split } from "@adyen/api-library/lib/src/typings/checkout/split";
import { PaymentCaptureRequest } from "@adyen/api-library/lib/src/typings/checkout/models";
import { logger } from "@medusajs/framework";

type StepInput = {
  payment_session_id: string;
  order_id: string;
  seller_amount: number;
  commission_amount: number;
  currency_code: string;
  pspReference: string;
};

export const capturePaymentWithSplitsStep = createStep(
  "capture-payment-with-splits",
  async (input: StepInput, { container }) => {
    const query = container.resolve(ContainerRegistrationKeys.QUERY);

    // Get payment session to extract seller_payout_account_id
    // The input might be a payment_id or payment_session_id, so try both
    let paymentSession;

    try {
      const {
        data: [payment],
      } = await query.graph({
        entity: "payment",
        fields: ["id", "payment_session.*"],
        filters: {
          id: input.payment_session_id,
        },
      });

      if (payment && payment.payment_session) {
        paymentSession = payment.payment_session;
      }
    } catch (error) {
      // Not a payment ID, will try as payment_session_id
    }

    // If not found as payment, try as payment_session
    if (!paymentSession) {
      const {
        data: [session],
      } = await query.graph({
        entity: "payment_session",
        fields: ["id", "data"],
        filters: {
          id: input.payment_session_id,
        },
      });
      paymentSession = session;
    }

    if (!paymentSession) {
      throw new MedusaError(
        MedusaError.Types.INVALID_DATA,
        `Payment/Payment session ${input.payment_session_id} not found`
      );
    }

    const seller_payout_account_id =
      paymentSession.data?.seller_payout_account_id;

    if (!seller_payout_account_id) {
      throw new MedusaError(
        MedusaError.Types.INVALID_DATA,
        "seller_payout_account_id not found in payment session data"
      );
    }

    // get payout account by seller_payout_account_id
    const {
      data: [payoutAccount],
    } = await query.graph({
      entity: "payout_account",
      fields: ["data"],
      filters: {
        id: seller_payout_account_id,
      },
    });

    if (!payoutAccount) {
      throw new MedusaError(
        MedusaError.Types.INVALID_DATA,
        `Payout account ${seller_payout_account_id} not found`
      );
    }

    const balanceAccountId = payoutAccount.data?.balance_account?.id;

    if (!balanceAccountId) {
      throw new MedusaError(
        MedusaError.Types.INVALID_DATA,
        `Balance account ID not found for payout account ${seller_payout_account_id}`
      );
    }

    // Initialize Adyen client
    const client = new Client({
      apiKey: process.env.ADYEN_PAYMENT_API_KEY!,
      environment: process.env.ADYEN_ENVIRONMENT as EnvironmentEnum,
      liveEndpointUrlPrefix: process.env.ADYEN_URL_PREFIX,
    });

    const checkoutAPI = new CheckoutAPI(client);

    // seller_amount is already in smallest unit (cents) from the commission calculation
    // Prepare capture request with splits: seller's portion + commission
    const paymentCaptureRequest: PaymentCaptureRequest = {
      merchantAccount: process.env.ADYEN_MERCHANT_ACCOUNT!,
      amount: {
        value: input.seller_amount + input.commission_amount,
        currency: input.currency_code.toUpperCase(),
      },
      splits: [
        {
          type: Split.TypeEnum.BalanceAccount,
          reference: crypto.randomUUID(),
          account: balanceAccountId,
          amount: {
            currency: input.currency_code.toUpperCase(),
            value: input.seller_amount,
          },
        },
        {
          type: Split.TypeEnum.Commission,
          reference: crypto.randomUUID(),
          amount: {
            currency: input.currency_code.toUpperCase(),
            value: input.commission_amount,
          },
        },
      ],
    };

    logger.info(
      `Sending capture request to Adyen with idempotency key: capture-${input.order_id}`
    );

    try {
      // Capture the payment with idempotency key
      const response =
        await checkoutAPI.ModificationsApi.captureAuthorisedPayment(
          input.pspReference,
          paymentCaptureRequest,
          {
            idempotencyKey: `capture-${input.order_id}`,
          }
        );

      logger.info(
        `[Capture Adyen Payment] Response status: ${response.status}`
      );

      return new StepResponse({
        pspReference: input.pspReference,
        status: response.status,
        reference: response.reference,
        seller_amount: input.seller_amount,
        commission_amount: input.commission_amount,
        seller_payout_account_id,
        currency_code: input.currency_code,
      });
    } catch (error) {
      throw new MedusaError(
        MedusaError.Types.PAYMENT_AUTHORIZATION_ERROR,
        `Failed to capture Adyen payment: ${error}`
      );
    }
  }
);
