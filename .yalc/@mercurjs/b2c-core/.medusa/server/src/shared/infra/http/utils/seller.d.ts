import { MedusaContainer } from '@medusajs/framework';
import { SellerDTO } from '@mercurjs/framework';
export declare const fetchSellerByAuthActorId: (authActorId: string, scope: MedusaContainer, fields?: string[]) => Promise<SellerDTO>;
