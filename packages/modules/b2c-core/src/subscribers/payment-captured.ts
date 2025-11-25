import { logger, SubscriberArgs, SubscriberConfig } from "@medusajs/framework";
import { PaymentEvents } from "@medusajs/framework/utils";
import { calculateCommissionForPaymentWorkflow } from "../workflows/adyen-payment/workflows/calculate-commission-for-payment";

export default async function paymentCapturedHandler({
  event,
  container,
}: SubscriberArgs<{ id: string }>) {
  const paymentId = event?.data?.id;

  if (!paymentId) {
    logger.error("[Payment Captured] No payment ID found in event data");
    return;
  }

  // Run the workflow to calculate commission
  const result = await calculateCommissionForPaymentWorkflow.run({
    container,
    input: {
      payment_session_id: paymentId,
    },
  });

  logger.info(`[Payment Captured] Commission calculation completed`);
}

export const config: SubscriberConfig = {
  event: PaymentEvents.CAPTURED,
  context: {
    subscriberId: "payment-captured-commission-handler",
  },
};
