import { SubscriberArgs, SubscriberConfig } from "@medusajs/framework";
import { RequestDTO } from "@mercurjs/framework";
export default function sellerCreationRequestAcceptedHandler({ event, container, }: SubscriberArgs<RequestDTO>): Promise<void>;
export declare const config: SubscriberConfig;
