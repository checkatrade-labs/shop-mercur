import {
  WorkflowResponse,
  createWorkflow,
} from "@medusajs/framework/workflows-sdk";

import { calculateCommissionForPaymentStep, captureAdyenPaymentStep } from "../steps";

type WorkflowInput = {
  payment_session_id: string;
};

export const calculateCommissionForPaymentWorkflow = createWorkflow(
  "calculate-commission-for-payment",
  function (input: WorkflowInput) {
    // Calculate commission for the payment
    const commissionData = calculateCommissionForPaymentStep({
      payment_session_id: input.payment_session_id,
    });

    // Capture the payment with Adyen splits
    const captureResult = captureAdyenPaymentStep({
      payment_session_id: commissionData.payment_session_id,
      order_id: commissionData.order_id,
      seller_amount: commissionData.seller_amount,
      commission_amount: commissionData.commission_amount,
      currency_code: commissionData.currency_code,
    });

    return new WorkflowResponse({
      commissionData,
      captureResult,
    });
  }
);
