import { PayoutWebhookActionAndDataResponse } from '@mercurjs/framework';
type ProcessPayoutWebhookActionInput = {
    action: PayoutWebhookActionAndDataResponse['action'];
    data: PayoutWebhookActionAndDataResponse['data'];
};
export declare const processPayoutWebhookActionWorkflow: import("@medusajs/workflows-sdk").ReturnWorkflow<ProcessPayoutWebhookActionInput, unknown, any[]>;
export {};
