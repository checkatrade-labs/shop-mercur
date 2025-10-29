import { MedusaContainer, ProductDTO } from "@medusajs/framework/types";
export declare const productsCreatedHookHandler: ({ products, additional_data, container, }: {
    products: ProductDTO[];
    additional_data: Record<string, unknown> | undefined;
    container: MedusaContainer;
}) => Promise<never[] | undefined>;
