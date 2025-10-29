import { SubscriberArgs, SubscriberConfig } from '@medusajs/framework';
export default function payoutOrderHandler({ event, container }: SubscriberArgs<{
    order_id: string;
}>): Promise<void>;
export declare const config: SubscriberConfig;
