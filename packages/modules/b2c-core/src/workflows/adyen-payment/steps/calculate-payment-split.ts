import { StepResponse, createStep } from "@medusajs/framework/workflows-sdk";
import { ContainerRegistrationKeys, MathBN } from "@medusajs/framework/utils";

import { SplitOrderPaymentDTO } from "@mercurjs/framework";
import { getSmallestUnit } from "@mercurjs/framework";
import { PaymentSessionDTO } from "@medusajs/framework/types";

type StepInput = {
  payment_session_id: string;
};

export const calculatePaymentSplitStep = createStep(
  "calculate-payment-split",
  async (input: StepInput, { container }) => {
    const query = container.resolve(ContainerRegistrationKeys.QUERY);

    let paymentSession: PaymentSessionDTO | undefined;

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
        fields: ["id", "payment_collection_id", "currency_code"],
        filters: {
          id: input.payment_session_id,
        },
      });
      paymentSession = session;
    }

    if (!paymentSession) {
      throw new Error(
        `Payment/Payment session ${input.payment_session_id} not found`
      );
    }

    // Query payment_collection to find order_id
    const paymentCollectionId = paymentSession.payment_collection_id;

    if (!paymentCollectionId) {
      throw new Error("Payment collection ID not found in payment session");
    }

    const { data: paymentCollections } = await query.graph({
      entity: "payment_collection",
      fields: ["id", "order.id"],
      filters: {
        id: paymentCollectionId,
      },
    });

    if (!paymentCollections || paymentCollections.length === 0) {
      throw new Error(`Payment collection ${paymentCollectionId} not found`);
    }

    const paymentCollection = paymentCollections[0];

    if (!paymentCollection.order) {
      return new StepResponse({
        payment_session_id: input.payment_session_id,
        order_id: undefined,
        seller_id: null,
        captured_amount: 0,
        refunded_amount: 0,
        commission_amount: 0,
        seller_amount: 0,
        currency_code: paymentSession.currency_code,
        commission_lines_count: 0,
      });
    }

    const orderId = paymentCollection.order.id;
    const {
      data: [order],
    } = await query.graph({
      entity: "order",
      fields: [
        "items.id",
        "split_order_payment.*",
        "seller.id",
        "currency_code",
      ],
      filters: {
        id: orderId,
      },
    });

    if (!order) {
      throw new Error(`Order ${orderId} not found`);
    }

    const currencyCode = order.currency_code.toLowerCase();

    // Get commission lines for order items - exact same logic as calculate-payout-for-order
    const order_line_items = order.items.map((i: any) => i.id);

    const { data: commission_lines } = await query.graph({
      entity: "commission_line",
      fields: ["*"],
      filters: {
        item_line_id: order_line_items,
      },
    });

    // Sum commission values and convert to smallest unit (cents)
    const total_commission_base = commission_lines.reduce((acc, current) => {
      return MathBN.add(acc, current.value);
    }, MathBN.convert(0));

    const total_commission = MathBN.convert(
      getSmallestUnit(total_commission_base.toNumber(), currencyCode)
    );

    // Use same calculation logic as calculate-payout-for-order
    const orderPayment: SplitOrderPaymentDTO = order.split_order_payment;

    // Convert amounts to smallest unit (cents)
    // Use authorized_amount as fallback if captured_amount is not set yet
    // (both subscribers listen to PaymentEvents.CAPTURED and may run in parallel)
    const capturedAmountBase =
      orderPayment.captured_amount || orderPayment.authorized_amount;
    const refundedAmountBase = orderPayment.refunded_amount || 0;

    const captured_amount_cents = getSmallestUnit(
      capturedAmountBase,
      currencyCode
    );
    const refunded_amount_cents = getSmallestUnit(
      refundedAmountBase,
      currencyCode
    );

    const captured_amount = MathBN.convert(captured_amount_cents);
    const refunded_amount = MathBN.convert(refunded_amount_cents);

    const sellerAmount = captured_amount
      .minus(refunded_amount)
      .minus(total_commission);

    return new StepResponse({
      payment_session_id: input.payment_session_id,
      order_id: order.id,
      seller_id: order.seller.id,
      captured_amount: captured_amount.toNumber(),
      refunded_amount: refunded_amount.toNumber(),
      commission_amount: total_commission.toNumber(),
      seller_amount: sellerAmount.toNumber(),
      currency_code: currencyCode,
      commission_lines_count: commission_lines.length,
    });
  }
);
