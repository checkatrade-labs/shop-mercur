import { SubscriberConfig } from '@medusajs/framework';
import { SubscriberArgs } from '@medusajs/medusa';
export default function orderSetPlacedHandler({ event, container }: SubscriberArgs<{
    id: string;
}>): Promise<void>;
export declare const config: SubscriberConfig;
