import { SubscriberArgs, SubscriberConfig } from "@medusajs/framework";
export default function sellerNewOrderHandler({ event, container, }: SubscriberArgs<{
    id: string;
}>): Promise<void>;
export declare const config: SubscriberConfig;
