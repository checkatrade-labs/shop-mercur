import { SubscriberArgs, SubscriberConfig } from '@medusajs/framework';
export default function inventoryItemChangedHandler({ event, container }: SubscriberArgs<{
    id: string | string[];
}>): Promise<void>;
export declare const config: SubscriberConfig;
