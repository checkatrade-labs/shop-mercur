import { SubscriberArgs, SubscriberConfig } from '@medusajs/medusa';
export default function newOrderSetAdminNotifyHandler({ event, container }: SubscriberArgs<{
    id: string;
}>): Promise<void>;
export declare const config: SubscriberConfig;
