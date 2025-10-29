import { MedusaContainer } from '@medusajs/framework';
export declare const filterSellerProductsByProductCategory: (container: MedusaContainer, productCategoryId: string, sellerId: string, skip: number, take: number) => Promise<{
    productIds: any[];
    count: number;
}>;
