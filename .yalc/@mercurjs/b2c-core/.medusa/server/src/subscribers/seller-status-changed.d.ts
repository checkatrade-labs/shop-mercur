import { SubscriberArgs, SubscriberConfig } from '@medusajs/framework';
import { StoreStatus } from '@mercurjs/framework';
export default function sellerStatusChangedHandler({ event, container }: SubscriberArgs<{
    id: string;
    store_status: StoreStatus;
}>): Promise<void>;
export declare const config: SubscriberConfig;
