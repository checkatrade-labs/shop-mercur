import { ProductStatus } from '@medusajs/framework/utils';
export declare const validateProductsToImportStep: import("@medusajs/framework/workflows-sdk").StepFunction<unknown[], {
    status: ProductStatus;
    title: string;
    is_giftcard: boolean;
    discountable: boolean;
    length?: number | undefined;
    options?: {
        values: string[];
        title: string;
    }[] | undefined;
    handle?: string | undefined;
    description?: string | undefined;
    variants?: {
        title: string;
        prices: {
            currency_code: string;
            amount: number;
            min_quantity?: number | null | undefined;
            max_quantity?: number | null | undefined;
            rules?: Record<string, string> | undefined;
        }[];
        allow_backorder: false;
        manage_inventory: true;
        sku?: string | undefined;
        ean?: string | undefined;
        upc?: string | undefined;
        barcode?: string | undefined;
        hs_code?: string | undefined;
        mid_code?: string | undefined;
        variant_rank?: number | undefined;
        weight?: number | undefined;
        length?: number | undefined;
        height?: number | undefined;
        width?: number | undefined;
        origin_country?: string | undefined;
        material?: string | undefined;
        metadata?: Record<string, unknown> | undefined;
        options?: Record<string, string> | undefined;
        inventory_items?: {
            inventory_item_id: string;
            required_quantity: number;
        }[] | undefined;
    }[] | undefined;
    subtitle?: string | undefined;
    thumbnail?: string | undefined;
    width?: number | undefined;
    weight?: number | undefined;
    height?: number | undefined;
    origin_country?: string | undefined;
    hs_code?: string | undefined;
    mid_code?: string | undefined;
    material?: string | undefined;
    collection_id?: string | undefined;
    categories?: {
        id: string;
    }[] | undefined;
    type_id?: string | undefined;
    tags?: {
        id: string;
    }[] | undefined;
    images?: {
        url: string;
    }[] | undefined;
    external_id?: string | undefined;
    metadata?: Record<string, unknown> | undefined;
    sales_channels?: {
        id: string;
    }[] | undefined;
}[]>;
