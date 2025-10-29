import { OrderWorkflow } from '@medusajs/framework/types';
import { CancelValidateOrderStepInput } from '@medusajs/medusa/core-flows';
export declare const cancelValidateOrder: import("@medusajs/framework/workflows-sdk").StepFunction<CancelValidateOrderStepInput, unknown>;
export declare const cancelOrderWorkflow: import("@medusajs/framework/workflows-sdk").ReturnWorkflow<OrderWorkflow.CancelOrderWorkflowInput, any, []>;
