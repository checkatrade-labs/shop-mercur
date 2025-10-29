import { MedusaContainer } from '@medusajs/framework';
type BodyPayload = {
    create?: {
        inventory_item_id: string;
        location_id: string;
    }[];
    update?: {
        inventory_item_id: string;
        location_id: string;
    }[];
    delete?: string[];
};
export declare function validateOwnership(container: MedusaContainer, seller_id: string, body: BodyPayload): Promise<void>;
export declare function prepareBatchInventoryLevelDeletePayload(container: MedusaContainer, inventory_item_id: string, delete_ids?: string[]): Promise<string[]>;
export {};
