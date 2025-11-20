import { ProviderWebhookPayload } from "@medusajs/framework/types";
import { SubscriberArgs, SubscriberConfig } from "@medusajs/framework";
import { PaymentWebhookEvents } from "@medusajs/framework/utils";
import { PAYOUT_MODULE } from "../modules/payout";
import PayoutModuleService from "../modules/payout/service";
import { PaymentProvider } from "../api/vendor/payout-account/types";

export default async function storePaymentWebhookHandler({
  event,
  container,
}: SubscriberArgs<ProviderWebhookPayload>) {
  //
  const payoutService: PayoutModuleService = container.resolve(PAYOUT_MODULE);

  const { provider, payload } = event.data;
  const providerId = `pp_${provider}`;

  console.log("--------------------------------");
  console.log(
    "event.data -> ",
    JSON.stringify(event.data, null, 2)
  );
  console.log("--------------------------------");

  // Parse the raw payload
  const rawBody =
    typeof payload.rawData === "string"
      ? payload.rawData
      : payload.rawData.toString("utf8");

  const body = JSON.parse(rawBody);

  // For Adyen, extract the merchant reference from the webhook
  // The structure is: { notificationItems: [{ NotificationRequestItem: {...} }] }
  let reference = "";

  // provider includes pp_ prefix so we need to check if it contains the payment provider id, which is without the pp_ prefix
  if (providerId === PaymentProvider.ADYEN_CONNECT) {
    const notificationItems = body.notificationItems;
    if (
      notificationItems &&
      Array.isArray(notificationItems) &&
      notificationItems[0]
    ) {
      const notification = notificationItems[0].NotificationRequestItem;
      reference = notification?.merchantReference;
    }
  } else if (providerId === PaymentProvider.STRIPE_CONNECT) {
    // TODO: Get the reference from the Stripe webhook body
    reference = body.data?.object?.id;
  }

  await payoutService.storePaymentWebhook({
    provider_id: providerId,
    reference,
    raw_payload: body,
  });
}

export const config: SubscriberConfig = {
  event: PaymentWebhookEvents.WebhookReceived,
  context: {
    subscriberId: "store-payment-webhook-handler",
  },
};
