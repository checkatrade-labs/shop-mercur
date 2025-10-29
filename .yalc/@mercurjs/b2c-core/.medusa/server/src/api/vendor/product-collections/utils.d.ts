import { MedusaContainer } from '@medusajs/framework';
export declare const filterSellerProductsByCollection: (container: MedusaContainer, collectionId: string, sellerId: string, skip: number, take: number) => Promise<{
    productIds: any[];
    count: number;
}>;
