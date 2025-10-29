import { MedusaContainer } from '@medusajs/framework';
import { ProductDTO } from '@medusajs/framework/types';
export declare const productsUpdatedHookHandler: ({ products, additional_data, container }: {
    products: ProductDTO[];
    additional_data: Record<string, unknown> | undefined;
    container: MedusaContainer;
}) => Promise<never[] | undefined>;
