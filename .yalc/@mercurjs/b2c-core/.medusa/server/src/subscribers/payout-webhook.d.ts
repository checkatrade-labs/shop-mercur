import { SubscriberArgs, SubscriberConfig } from "@medusajs/framework";
import { PayoutWebhookActionPayload } from "@mercurjs/framework";
export default function payoutWebhookHandler({ event, container, }: SubscriberArgs<PayoutWebhookActionPayload>): Promise<void>;
export declare const config: SubscriberConfig;
