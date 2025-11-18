import { z } from "zod";
import { StoreStatus } from "../seller";
export type AlgoliaProduct = z.infer<typeof AlgoliaProductValidator>;
export declare const AlgoliaProductValidator: z.ZodObject<{
    id: z.ZodString;
    title: z.ZodString;
    handle: z.ZodString;
    subtitle: z.ZodNullable<z.ZodString>;
    description: z.ZodNullable<z.ZodString>;
    thumbnail: z.ZodNullable<z.ZodString>;
    average_rating: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    supported_countries: z.ZodDefault<z.ZodNullable<z.ZodArray<z.ZodString, "many">>>;
    options: z.ZodDefault<z.ZodNullable<z.ZodArray<z.ZodRecord<z.ZodString, z.ZodString>, "many">>>;
    images: z.ZodOptional<z.ZodNullable<z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        url: z.ZodString;
        rank: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        id: string;
        rank: number;
        url: string;
    }, {
        id: string;
        rank: number;
        url: string;
    }>, "many">>>;
    collection: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        title: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        title: string;
    }, {
        title: string;
    }>>>;
    type: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        value: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        value: string;
    }, {
        value: string;
    }>>>;
    tags: z.ZodOptional<z.ZodArray<z.ZodObject<{
        value: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        value: string;
    }, {
        value: string;
    }>, "many">>;
    categories: z.ZodOptional<z.ZodArray<z.ZodObject<{
        name: z.ZodString;
        id: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        id: string;
        name: string;
    }, {
        id: string;
        name: string;
    }>, "many">>;
    variants: z.ZodDefault<z.ZodNullable<z.ZodAny>>;
    attribute_values: z.ZodOptional<z.ZodArray<z.ZodObject<{
        name: z.ZodString;
        value: z.ZodString;
        is_filterable: z.ZodBoolean;
        ui_component: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        name: string;
        value: string;
        is_filterable: boolean;
        ui_component: string;
    }, {
        name: string;
        value: string;
        is_filterable: boolean;
        ui_component: string;
    }>, "many">>;
    sku: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    ean: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    upc: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    barcode: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    hs_code: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    mid_code: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    weight: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    length: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    height: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    width: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    origin_country: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    material: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    seller: z.ZodNullable<z.ZodObject<{
        id: z.ZodString;
        handle: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        store_status: z.ZodOptional<z.ZodNullable<z.ZodNativeEnum<typeof StoreStatus>>>;
    }, "strip", z.ZodTypeAny, {
        id: string;
        store_status?: StoreStatus | null | undefined;
        handle?: string | null | undefined;
    }, {
        id: string;
        store_status?: StoreStatus | null | undefined;
        handle?: string | null | undefined;
    }>>;
}, "strip", z.ZodTypeAny, {
    id: string;
    description: string | null;
    handle: string;
    seller: {
        id: string;
        store_status?: StoreStatus | null | undefined;
        handle?: string | null | undefined;
    } | null;
    title: string;
    subtitle: string | null;
    thumbnail: string | null;
    average_rating: number | null;
    options: Record<string, string>[] | null;
    supported_countries: string[] | null;
    length?: number | null | undefined;
    type?: {
        value: string;
    } | null | undefined;
    images?: {
        id: string;
        rank: number;
        url: string;
    }[] | null | undefined;
    collection?: {
        title: string;
    } | null | undefined;
    tags?: {
        value: string;
    }[] | undefined;
    categories?: {
        id: string;
        name: string;
    }[] | undefined;
    variants?: any;
    attribute_values?: {
        name: string;
        value: string;
        is_filterable: boolean;
        ui_component: string;
    }[] | undefined;
    sku?: string | null | undefined;
    ean?: string | null | undefined;
    upc?: string | null | undefined;
    barcode?: string | null | undefined;
    hs_code?: string | null | undefined;
    mid_code?: string | null | undefined;
    weight?: number | null | undefined;
    height?: number | null | undefined;
    width?: number | null | undefined;
    origin_country?: string | null | undefined;
    material?: string | null | undefined;
}, {
    id: string;
    description: string | null;
    handle: string;
    seller: {
        id: string;
        store_status?: StoreStatus | null | undefined;
        handle?: string | null | undefined;
    } | null;
    title: string;
    subtitle: string | null;
    thumbnail: string | null;
    average_rating?: number | null | undefined;
    length?: number | null | undefined;
    options?: Record<string, string>[] | null | undefined;
    type?: {
        value: string;
    } | null | undefined;
    supported_countries?: string[] | null | undefined;
    images?: {
        id: string;
        rank: number;
        url: string;
    }[] | null | undefined;
    collection?: {
        title: string;
    } | null | undefined;
    tags?: {
        value: string;
    }[] | undefined;
    categories?: {
        id: string;
        name: string;
    }[] | undefined;
    variants?: any;
    attribute_values?: {
        name: string;
        value: string;
        is_filterable: boolean;
        ui_component: string;
    }[] | undefined;
    sku?: string | null | undefined;
    ean?: string | null | undefined;
    upc?: string | null | undefined;
    barcode?: string | null | undefined;
    hs_code?: string | null | undefined;
    mid_code?: string | null | undefined;
    weight?: number | null | undefined;
    height?: number | null | undefined;
    width?: number | null | undefined;
    origin_country?: string | null | undefined;
    material?: string | null | undefined;
}>;
export declare const AlgoliaVariantValidator: z.ZodObject<{
    id: z.ZodString;
    title: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    sku: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    barcode: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    ean: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    ups: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    allow_backorder: z.ZodBoolean;
    manage_inventory: z.ZodBoolean;
    hs_code: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    origin_country: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    mid_code: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    material: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    weight: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    length: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    height: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    wifth: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    variant_rank: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    options: z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        value: z.ZodString;
        option: z.ZodObject<{
            id: z.ZodString;
            title: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            id: string;
            title: string;
        }, {
            id: string;
            title: string;
        }>;
    }, "strip", z.ZodTypeAny, {
        id: string;
        value: string;
        option: {
            id: string;
            title: string;
        };
    }, {
        id: string;
        value: string;
        option: {
            id: string;
            title: string;
        };
    }>, "many">;
    prices: z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        title: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        currency_code: z.ZodString;
        min_quantity: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        max_quantity: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        rules_count: z.ZodNumber;
        amount: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        id: string;
        currency_code: string;
        rules_count: number;
        amount: number;
        title?: string | null | undefined;
        min_quantity?: number | null | undefined;
        max_quantity?: number | null | undefined;
    }, {
        id: string;
        currency_code: string;
        rules_count: number;
        amount: number;
        title?: string | null | undefined;
        min_quantity?: number | null | undefined;
        max_quantity?: number | null | undefined;
    }>, "many">;
}, "strip", z.ZodTypeAny, {
    id: string;
    options: {
        id: string;
        value: string;
        option: {
            id: string;
            title: string;
        };
    }[];
    allow_backorder: boolean;
    manage_inventory: boolean;
    prices: {
        id: string;
        currency_code: string;
        rules_count: number;
        amount: number;
        title?: string | null | undefined;
        min_quantity?: number | null | undefined;
        max_quantity?: number | null | undefined;
    }[];
    title?: string | null | undefined;
    length?: number | null | undefined;
    sku?: string | null | undefined;
    ean?: string | null | undefined;
    barcode?: string | null | undefined;
    hs_code?: string | null | undefined;
    mid_code?: string | null | undefined;
    weight?: number | null | undefined;
    height?: number | null | undefined;
    origin_country?: string | null | undefined;
    material?: string | null | undefined;
    ups?: string | null | undefined;
    wifth?: number | null | undefined;
    variant_rank?: number | null | undefined;
}, {
    id: string;
    options: {
        id: string;
        value: string;
        option: {
            id: string;
            title: string;
        };
    }[];
    allow_backorder: boolean;
    manage_inventory: boolean;
    prices: {
        id: string;
        currency_code: string;
        rules_count: number;
        amount: number;
        title?: string | null | undefined;
        min_quantity?: number | null | undefined;
        max_quantity?: number | null | undefined;
    }[];
    title?: string | null | undefined;
    length?: number | null | undefined;
    sku?: string | null | undefined;
    ean?: string | null | undefined;
    barcode?: string | null | undefined;
    hs_code?: string | null | undefined;
    mid_code?: string | null | undefined;
    weight?: number | null | undefined;
    height?: number | null | undefined;
    origin_country?: string | null | undefined;
    material?: string | null | undefined;
    ups?: string | null | undefined;
    wifth?: number | null | undefined;
    variant_rank?: number | null | undefined;
}>;
//# sourceMappingURL=algolia-product.d.ts.map