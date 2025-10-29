import { MedusaContainer } from '@medusajs/framework';
import { ProductDTO } from '@medusajs/framework/types';
import { AttributeDTO } from '@mercurjs/framework';
export declare const fetchProductDetails: (product_id: string, scope: MedusaContainer) => Promise<ProductDTO>;
export declare function getApplicableAttributes(container: MedusaContainer, product_id: string, fields: string[]): Promise<AttributeDTO[]>;
