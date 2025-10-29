import { MedusaContainer } from '@medusajs/framework';
export declare const filterProductsBySeller: (container: MedusaContainer, sellerId: string, skip: number, take: number, salesChannelId?: string) => Promise<{
    productIds: any[];
    count: number;
}>;
