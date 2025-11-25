import {
  WorkflowResponse,
  createWorkflow,
} from "@medusajs/framework/workflows-sdk";

import { calculateCommissionForPaymentStep } from "../steps/calculate-commission-for-payment";

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

    return new WorkflowResponse(commissionData);
  }
);
