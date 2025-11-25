import { ProviderWebhookPayload } from "@medusajs/framework/types";
import { logger, SubscriberArgs, SubscriberConfig } from "@medusajs/framework";
import { PaymentWebhookEvents } from "@medusajs/framework/utils";
import { calculateCommissionForPaymentWorkflow } from "../workflows/adyen-payment/workflows/calculate-commission-for-payment";
import { NotificationRequestItem } from "@adyen/api-library/lib/src/typings/notification/models";

export default async function adyenWebhookHandler({
  event,
  container,
}: SubscriberArgs<ProviderWebhookPayload>) {
  const { provider, payload } = event.data;

  logger.info(`[Payment Capture] Processing webhook for provider: ${provider}`);

  const rawBody =
    typeof payload.rawData === "string"
      ? payload.rawData
      : payload.rawData.toString("utf8");

  const body = JSON.parse(rawBody);

  const notificationItems = body.notificationItems;
  if (
    !notificationItems ||
    !Array.isArray(notificationItems) ||
    !notificationItems[0]
  ) {
    logger.error("[Payment Capture] Invalid webhook payload structure");
    return;
  }

  const notification = notificationItems[0].NotificationRequestItem;

  const eventCode = notification.eventCode;
  const pspReference = notification.pspReference;
  const merchantReference = notification.merchantReference;
  const success =
    notification.success === NotificationRequestItem.SuccessEnum.True;

  logger.debug(
    `[Payment Capture] Event: ${eventCode}, PSP: ${pspReference}, Success: ${success}`
  );

  // Only process successful AUTHORISATION events
  if (
    eventCode === NotificationRequestItem.EventCodeEnum.Authorisation &&
    success
  ) {
    logger.debug(
      `[Adyen Webhook] Processing AUTHORISATION for merchant reference: ${merchantReference}`
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
        `[Payment Capture] Commission calculation and capture completed for payment session ${merchantReference}`
      );

    } catch (error) {
      logger.error(`[Adyen Webhook] Error processing AUTHORISATION: ${error}`);
      throw error;
    }
  } else {
    // TODO: Cancel payment
    logger.info(
      `[Adyen Webhook] Skipping event ${eventCode} (success: ${success})`
    );
  }
}

export const config: SubscriberConfig = {
  event: PaymentWebhookEvents.WebhookReceived,
  context: {
    subscriberId: "adyen-webhook-handler",
  },
};
