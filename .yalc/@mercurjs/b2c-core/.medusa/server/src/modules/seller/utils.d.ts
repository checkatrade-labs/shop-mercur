import { MedusaContainer } from '@medusajs/framework';
export declare function selectSellerCustomers(container: MedusaContainer, seller_id: string, pagination: {
    skip: number;
    take: number;
}, fields?: string[]): Promise<{
    customers: any[];
    count: number | undefined;
}>;
export declare function selectCustomerOrders(container: MedusaContainer, seller_id: string, customer_id: string, pagination: {
    skip: number;
    take: number;
}, fields?: string[]): Promise<{
    orders: any[];
    count: number;
}>;
export declare function selectOrdersChartData(container: MedusaContainer, seller_id: string, time_range: [string, string]): Promise<{
    date: Date;
    count: string;
}[]>;
export declare function selectCustomersChartData(container: MedusaContainer, seller_id: string, time_range: [string, string]): Promise<{
    date: Date;
    count: string;
}[]>;
