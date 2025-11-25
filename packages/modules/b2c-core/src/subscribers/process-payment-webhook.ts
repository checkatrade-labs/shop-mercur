import { ProviderWebhookPayload } from "@medusajs/framework/types";
import { logger, SubscriberArgs, SubscriberConfig } from "@medusajs/framework";
import { PaymentWebhookEvents } from "@medusajs/framework/utils";
import { NotificationRequestItem } from "@adyen/api-library/lib/src/typings/notification/models";
import { PAYOUT_MODULE } from "../modules/payout";
import PayoutModuleService from "../modules/payout/service";
import { PaymentProvider } from "../api/vendor/payout-account/types";
import { calculateCommissionForPaymentWorkflow } from "../workflows/adyen-payment/workflows/calculate-commission-for-payment";

export default async function processPaymentWebhookHandler({
  event,
  container,
}: SubscriberArgs<ProviderWebhookPayload>) {
  const payoutService: PayoutModuleService = container.resolve(PAYOUT_MODULE);

  const { provider, payload } = event.data;
  const providerId = `pp_${provider}`;

  logger.info(`[Process Payment Webhook] Processing webhook for provider: ${provider}`);

  // Parse the raw payload
  const rawBody =
    typeof payload.rawData === "string"
      ? payload.rawData
      : payload.rawData.toString("utf8");

  const body = JSON.parse(rawBody);

  let reference = "";
  let notification: any = null;

  // Extract reference and notification based on provider
  if (providerId === PaymentProvider.ADYEN_CONNECT) {
    const notificationItems = body.notificationItems;
    if (
      notificationItems &&
      Array.isArray(notificationItems) &&
      notificationItems[0]
    ) {
      notification = notificationItems[0].NotificationRequestItem;
      reference = notification?.merchantReference;
    }
  } else if (providerId === PaymentProvider.STRIPE_CONNECT) {
    // TODO: Get the reference from the Stripe webhook body
    reference = body.data?.object?.id;
  }

  // Store the webhook in the database
  await payoutService.storePaymentWebhook({
    provider_id: providerId,
    reference,
    raw_payload: body,
  });

  logger.info(`[Process Payment Webhook] Webhook stored for reference: ${reference}`);

  // Process Adyen AUTHORISATION events
  if (providerId === PaymentProvider.ADYEN_CONNECT && notification) {
    const eventCode = notification.eventCode;
    const pspReference = notification.pspReference;
    const merchantReference = notification.merchantReference;
    const success = notification.success === NotificationRequestItem.SuccessEnum.True;

    logger.info(
      `[Process Payment Webhook] Adyen Event: ${eventCode}, PSP: ${pspReference}, Success: ${success}`
    );

    // Only process successful AUTHORISATION events for Adyen
    if (
      eventCode === NotificationRequestItem.EventCodeEnum.Authorisation &&
      success
    ) {
      logger.info(
        `[Process Payment Webhook] Processing AUTHORISATION for merchant reference: ${merchantReference}`
      );

      try {
        // Run the workflow to calculate commission and capture payment with splits
        const result = await calculateCommissionForPaymentWorkflow.run({
          container,
          input: {
            payment_session_id: merchantReference, // merchantReference is the payment_session_id
          },
        });

        logger.info(
          `[Process Payment Webhook] Commission calculation and capture completed for ${merchantReference}`
        );
      } catch (error) {

        // Cancel payment

        logger.error(
          `[Process Payment Webhook] Error processing AUTHORISATION: ${error}`
        );
        throw error;
      }
    } else {
      logger.info(
        `[Process Payment Webhook] Skipping Adyen event ${eventCode} (success: ${success})`
      );
    }
  }
}

export const config: SubscriberConfig = {
  event: PaymentWebhookEvents.WebhookReceived,
  context: {
    subscriberId: "process-payment-webhook-handler",
  },
};
