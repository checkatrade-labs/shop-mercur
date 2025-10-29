import { SubscriberArgs, SubscriberConfig } from '@medusajs/framework';
export default function fulfillmentSetChangedHandler({ event, container }: SubscriberArgs<{
    id: string;
}>): Promise<void>;
export declare const config: SubscriberConfig;
