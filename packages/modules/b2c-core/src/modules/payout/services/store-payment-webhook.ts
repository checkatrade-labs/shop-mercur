// import { ProviderWebhookPayload } from "@medusajs/framework/types";
// import { SubscriberArgs, SubscriberConfig } from "@medusajs/framework";
// import { PaymentWebhookEvents } from "@medusajs/framework/utils";
// import PayoutModuleService from "../modules/payout/service";

// export default async function storePaymentWebhookHandler({
//   event,
//   container,
// }: SubscriberArgs<ProviderWebhookPayload>) {
//   const payoutService: PayoutModuleService = container.resolve(
//     "payoutModuleService"
//   );

//   const { provider, payload } = event.data;

//   console.log("--------------------------------");
//   console.log("Subscirber: Webhook event data ->: ", JSON.stringify(event.data, null, 2));
//   console.log("--------------------------------");

//   // Parse the raw payload
//   const rawBody =
//     typeof payload.rawData === "string"
//       ? payload.rawData
//       : payload.rawData.toString("utf8");

//   const body = JSON.parse(rawBody);

//   console.log("--------------------------------");
//   console.log("Subscirber: Webhook body ->: ", JSON.stringify(body, null, 2));
//   console.log("--------------------------------");

//   // For Adyen, extract the merchant reference from the webhook
//   // The structure is: { notificationItems: [{ NotificationRequestItem: {...} }] }
//   let reference = "";

//   if (provider === "pp_adyen_connect_adyen") {
//     const notificationItems = body.notificationItems;
//     if (
//       notificationItems &&
//       Array.isArray(notificationItems) &&
//       notificationItems[0]
//     ) {
//       const notification = notificationItems[0].NotificationRequestItem;
//       reference =
//         notification?.merchantReference || notification?.pspReference || "";
//     }
//   }

//   // Store the webhook
//   await payoutService.storePaymentWebhook({
//     provider_id: provider,
//     reference,
//     raw_payload: body,
//   });
// }

// export const config: SubscriberConfig = {
//   event: PaymentWebhookEvents.WebhookReceived,
//   context: {
//     subscriberId: "store-payment-webhook-handler",
//   },
// };
