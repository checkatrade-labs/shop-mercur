import { OrderDetailDTO } from '@medusajs/framework/types';
import { FormattedOrderSetDTO, OrderSetWithOrdersDTO } from '@mercurjs/framework';
export declare const formatOrderSets: (orderSetsWithOrders: OrderSetWithOrdersDTO[]) => FormattedOrderSetDTO[];
export declare const getFulfillmentStatus: (orders: OrderDetailDTO[]) => "not_fulfilled" | "partially_fulfilled" | "fulfilled" | "partially_shipped" | "shipped" | "delivered" | "partially_delivered" | "canceled";
