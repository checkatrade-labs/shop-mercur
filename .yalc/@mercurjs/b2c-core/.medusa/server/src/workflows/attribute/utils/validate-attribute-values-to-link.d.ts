import { MedusaContainer, ProductDTO } from "@medusajs/framework/types";
import { ProductAttributeValueDTO } from "@mercurjs/framework";
export declare const validateAttributeValuesToLink: ({ attributeValues, products, container, }: {
    attributeValues: ProductAttributeValueDTO[];
    products: ProductDTO[];
    container: MedusaContainer;
}) => Promise<void>;
