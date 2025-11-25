import { model } from "@medusajs/framework/utils";

export const PaymentWebhook = model.define("payment_webhook", {
  id: model.id({ prefix: "pwh" }).primaryKey(),
  provider_id: model.text(),
  reference: model.text(),
  raw_payload: model.json(),
});
