import {
  WorkflowResponse,
  createWorkflow,
} from "@medusajs/framework/workflows-sdk";

import { calculatePaymentSplitStep, capturePaymentWithSplitsStep } from "../steps";

type WorkflowInput = {
  payment_session_id: string;
};

export const capturePaymentWithCommissionWorkflow = createWorkflow(
  "capture-payment-with-commission",
  function (input: WorkflowInput) {
    // Step 1: Calculate payment split (seller amount + commission)
    const splitData = calculatePaymentSplitStep({
      payment_session_id: input.payment_session_id,
    });

    // Step 2: Capture payment with splits to seller and platform
    const captureResult = capturePaymentWithSplitsStep({
      payment_session_id: splitData.payment_session_id,
      order_id: splitData.order_id,
      seller_amount: splitData.seller_amount,
      commission_amount: splitData.commission_amount,
      currency_code: splitData.currency_code,
    });

    return new WorkflowResponse({
      splitData,
      captureResult,
    });
  }
);
