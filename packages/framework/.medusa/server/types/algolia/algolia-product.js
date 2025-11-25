"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AlgoliaVariantValidator = exports.AlgoliaProductValidator = void 0;
const zod_1 = require("zod");
const seller_1 = require("../seller");
exports.AlgoliaProductValidator = zod_1.z.object({
    id: zod_1.z.string(),
    title: zod_1.z.string(),
    handle: zod_1.z.string(),
    subtitle: zod_1.z.string().nullable(),
    description: zod_1.z.string().nullable(),
    thumbnail: zod_1.z.string().nullable(),
    average_rating: zod_1.z.coerce.number().nullable().default(null),
    supported_countries: zod_1.z.array(zod_1.z.string()).nullable().default([]),
    options: zod_1.z.array(zod_1.z.record(zod_1.z.string())).nullable().default(null),
    images: zod_1.z
        .array(zod_1.z.object({
        id: zod_1.z.string(),
        url: zod_1.z.string(),
        rank: zod_1.z.number(),
    }))
        .nullable()
        .optional(),
    collection: zod_1.z
        .object({
        title: zod_1.z.string(),
    })
        .nullable()
        .optional(),
    type: zod_1.z
        .object({
        value: zod_1.z.string(),
    })
        .nullable()
        .optional(),
    tags: zod_1.z
        .array(zod_1.z.object({
        value: zod_1.z.string(),
    }))
        .optional(),
    categories: zod_1.z
        .array(zod_1.z.object({
        name: zod_1.z.string(),
        id: zod_1.z.string(),
    }))
        .optional(),
    variants: zod_1.z.any().nullable().default(null),
    attribute_values: zod_1.z
        .array(zod_1.z.object({
        name: zod_1.z.string(),
        value: zod_1.z.string(),
        is_filterable: zod_1.z.boolean(),
        ui_component: zod_1.z.string(),
    }))
        .optional(),
    sku: zod_1.z.string().nullable().optional(),
    ean: zod_1.z.string().nullable().optional(),
    upc: zod_1.z.string().nullable().optional(),
    barcode: zod_1.z.string().nullable().optional(),
    hs_code: zod_1.z.string().nullable().optional(),
    mid_code: zod_1.z.string().nullable().optional(),
    weight: zod_1.z.coerce.number().nullable().optional(),
    length: zod_1.z.coerce.number().nullable().optional(),
    height: zod_1.z.coerce.number().nullable().optional(),
    width: zod_1.z.coerce.number().nullable().optional(),
    origin_country: zod_1.z.string().nullable().optional(),
    material: zod_1.z.string().nullable().optional(),
    seller: zod_1.z
        .object({
        id: zod_1.z.string(),
        handle: zod_1.z.string().nullish(),
        store_status: zod_1.z.nativeEnum(seller_1.StoreStatus).nullish(),
    })
        .nullable(),
});
exports.AlgoliaVariantValidator = zod_1.z.object({
    id: zod_1.z.string(),
    title: zod_1.z.string().nullish(),
    sku: zod_1.z.string().nullish(),
    barcode: zod_1.z.string().nullish(),
    ean: zod_1.z.string().nullish(),
    ups: zod_1.z.string().nullish(),
    allow_backorder: zod_1.z.boolean(),
    manage_inventory: zod_1.z.boolean(),
    hs_code: zod_1.z.string().nullish(),
    origin_country: zod_1.z.string().nullish(),
    mid_code: zod_1.z.string().nullish(),
    material: zod_1.z.string().nullish(),
    weight: zod_1.z.number().nullish(),
    length: zod_1.z.number().nullish(),
    height: zod_1.z.number().nullish(),
    wifth: zod_1.z.number().nullish(),
    variant_rank: zod_1.z.number().nullish(),
    options: zod_1.z.array(zod_1.z.object({
        id: zod_1.z.string(),
        value: zod_1.z.string(),
        option: zod_1.z.object({
            id: zod_1.z.string(),
            title: zod_1.z.string(),
        }),
    })),
    prices: zod_1.z.array(zod_1.z.object({
        id: zod_1.z.string(),
        title: zod_1.z.string().nullish(),
        currency_code: zod_1.z.string(),
        min_quantity: zod_1.z.number().nullish(),
        max_quantity: zod_1.z.number().nullish(),
        rules_count: zod_1.z.number(),
        amount: zod_1.z.number(),
    })),
});
//# sourceMappingURL=algolia-product.js.map