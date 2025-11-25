"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    AlgoliaProductValidator: function() {
        return AlgoliaProductValidator;
    },
    AlgoliaVariantValidator: function() {
        return AlgoliaVariantValidator;
    }
});
const _zod = require("zod");
const _seller = require("../seller");
const AlgoliaProductValidator = _zod.z.object({
    id: _zod.z.string(),
    title: _zod.z.string(),
    handle: _zod.z.string(),
    subtitle: _zod.z.string().nullable(),
    description: _zod.z.string().nullable(),
    thumbnail: _zod.z.string().nullable(),
    average_rating: _zod.z.coerce.number().nullable().default(null),
    supported_countries: _zod.z.array(_zod.z.string()).nullable().default([]),
    options: _zod.z.array(_zod.z.record(_zod.z.string())).nullable().default(null),
    images: _zod.z.array(_zod.z.object({
        id: _zod.z.string(),
        url: _zod.z.string(),
        rank: _zod.z.number()
    })).nullable().optional(),
    collection: _zod.z.object({
        title: _zod.z.string()
    }).nullable().optional(),
    type: _zod.z.object({
        value: _zod.z.string()
    }).nullable().optional(),
    tags: _zod.z.array(_zod.z.object({
        value: _zod.z.string()
    })).optional(),
    categories: _zod.z.array(_zod.z.object({
        name: _zod.z.string(),
        id: _zod.z.string()
    })).optional(),
    variants: _zod.z.any().nullable().default(null),
    attribute_values: _zod.z.array(_zod.z.object({
        name: _zod.z.string(),
        value: _zod.z.string(),
        is_filterable: _zod.z.boolean(),
        ui_component: _zod.z.string()
    })).optional(),
    sku: _zod.z.string().nullable().optional(),
    ean: _zod.z.string().nullable().optional(),
    upc: _zod.z.string().nullable().optional(),
    barcode: _zod.z.string().nullable().optional(),
    hs_code: _zod.z.string().nullable().optional(),
    mid_code: _zod.z.string().nullable().optional(),
    weight: _zod.z.coerce.number().nullable().optional(),
    length: _zod.z.coerce.number().nullable().optional(),
    height: _zod.z.coerce.number().nullable().optional(),
    width: _zod.z.coerce.number().nullable().optional(),
    origin_country: _zod.z.string().nullable().optional(),
    material: _zod.z.string().nullable().optional(),
    seller: _zod.z.object({
        id: _zod.z.string(),
        handle: _zod.z.string().nullish(),
        store_status: _zod.z.nativeEnum(_seller.StoreStatus).nullish()
    }).nullable()
});
const AlgoliaVariantValidator = _zod.z.object({
    id: _zod.z.string(),
    title: _zod.z.string().nullish(),
    sku: _zod.z.string().nullish(),
    barcode: _zod.z.string().nullish(),
    ean: _zod.z.string().nullish(),
    ups: _zod.z.string().nullish(),
    allow_backorder: _zod.z.boolean().optional(),
    manage_inventory: _zod.z.boolean().optional(),
    hs_code: _zod.z.string().nullish(),
    origin_country: _zod.z.string().nullish(),
    mid_code: _zod.z.string().nullish(),
    material: _zod.z.string().nullish(),
    weight: _zod.z.number().nullish(),
    length: _zod.z.number().nullish(),
    height: _zod.z.number().nullish(),
    wifth: _zod.z.number().nullish(),
    variant_rank: _zod.z.number().nullish(),
    metadata: _zod.z.record(_zod.z.unknown()).nullish(),
    options: _zod.z.array(_zod.z.object({
        id: _zod.z.string().optional(),
        value: _zod.z.string(),
        option: _zod.z.object({
            id: _zod.z.string().optional(),
            title: _zod.z.string()
        }).nullable().optional()
    })).optional(),
    prices: _zod.z.array(_zod.z.object({
        id: _zod.z.string().optional(),
        title: _zod.z.string().nullish(),
        currency_code: _zod.z.string(),
        min_quantity: _zod.z.number().nullish(),
        max_quantity: _zod.z.number().nullish(),
        rules_count: _zod.z.number().optional(),
        amount: _zod.z.number()
    })).optional()
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy90eXBlcy9hbGdvbGlhL2FsZ29saWEtcHJvZHVjdC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB6IH0gZnJvbSBcInpvZFwiO1xuaW1wb3J0IHsgU3RvcmVTdGF0dXMgfSBmcm9tIFwiLi4vc2VsbGVyXCI7XG5cbmV4cG9ydCB0eXBlIEFsZ29saWFQcm9kdWN0ID0gei5pbmZlcjx0eXBlb2YgQWxnb2xpYVByb2R1Y3RWYWxpZGF0b3I+O1xuZXhwb3J0IGNvbnN0IEFsZ29saWFQcm9kdWN0VmFsaWRhdG9yID0gei5vYmplY3Qoe1xuICBpZDogei5zdHJpbmcoKSxcbiAgdGl0bGU6IHouc3RyaW5nKCksXG4gIGhhbmRsZTogei5zdHJpbmcoKSxcbiAgc3VidGl0bGU6IHouc3RyaW5nKCkubnVsbGFibGUoKSxcbiAgZGVzY3JpcHRpb246IHouc3RyaW5nKCkubnVsbGFibGUoKSxcbiAgdGh1bWJuYWlsOiB6LnN0cmluZygpLm51bGxhYmxlKCksXG4gIGF2ZXJhZ2VfcmF0aW5nOiB6LmNvZXJjZS5udW1iZXIoKS5udWxsYWJsZSgpLmRlZmF1bHQobnVsbCksXG4gIHN1cHBvcnRlZF9jb3VudHJpZXM6IHouYXJyYXkoei5zdHJpbmcoKSkubnVsbGFibGUoKS5kZWZhdWx0KFtdKSxcbiAgb3B0aW9uczogei5hcnJheSh6LnJlY29yZCh6LnN0cmluZygpKSkubnVsbGFibGUoKS5kZWZhdWx0KG51bGwpLFxuICBpbWFnZXM6IHpcbiAgICAuYXJyYXkoXG4gICAgICB6Lm9iamVjdCh7XG4gICAgICAgIGlkOiB6LnN0cmluZygpLFxuICAgICAgICB1cmw6IHouc3RyaW5nKCksXG4gICAgICAgIHJhbms6IHoubnVtYmVyKCksXG4gICAgICB9KVxuICAgIClcbiAgICAubnVsbGFibGUoKVxuICAgIC5vcHRpb25hbCgpLFxuICBjb2xsZWN0aW9uOiB6XG4gICAgLm9iamVjdCh7XG4gICAgICB0aXRsZTogei5zdHJpbmcoKSxcbiAgICB9KVxuICAgIC5udWxsYWJsZSgpXG4gICAgLm9wdGlvbmFsKCksXG4gIHR5cGU6IHpcbiAgICAub2JqZWN0KHtcbiAgICAgIHZhbHVlOiB6LnN0cmluZygpLFxuICAgIH0pXG4gICAgLm51bGxhYmxlKClcbiAgICAub3B0aW9uYWwoKSxcbiAgdGFnczogelxuICAgIC5hcnJheShcbiAgICAgIHoub2JqZWN0KHtcbiAgICAgICAgdmFsdWU6IHouc3RyaW5nKCksXG4gICAgICB9KVxuICAgIClcbiAgICAub3B0aW9uYWwoKSxcbiAgY2F0ZWdvcmllczogelxuICAgIC5hcnJheShcbiAgICAgIHoub2JqZWN0KHtcbiAgICAgICAgbmFtZTogei5zdHJpbmcoKSxcbiAgICAgICAgaWQ6IHouc3RyaW5nKCksXG4gICAgICB9KVxuICAgIClcbiAgICAub3B0aW9uYWwoKSxcbiAgdmFyaWFudHM6IHouYW55KCkubnVsbGFibGUoKS5kZWZhdWx0KG51bGwpLFxuICBhdHRyaWJ1dGVfdmFsdWVzOiB6XG4gICAgLmFycmF5KFxuICAgICAgei5vYmplY3Qoe1xuICAgICAgICBuYW1lOiB6LnN0cmluZygpLFxuICAgICAgICB2YWx1ZTogei5zdHJpbmcoKSxcbiAgICAgICAgaXNfZmlsdGVyYWJsZTogei5ib29sZWFuKCksXG4gICAgICAgIHVpX2NvbXBvbmVudDogei5zdHJpbmcoKSxcbiAgICAgIH0pXG4gICAgKVxuICAgIC5vcHRpb25hbCgpLFxuICBza3U6IHouc3RyaW5nKCkubnVsbGFibGUoKS5vcHRpb25hbCgpLFxuICBlYW46IHouc3RyaW5nKCkubnVsbGFibGUoKS5vcHRpb25hbCgpLFxuICB1cGM6IHouc3RyaW5nKCkubnVsbGFibGUoKS5vcHRpb25hbCgpLFxuICBiYXJjb2RlOiB6LnN0cmluZygpLm51bGxhYmxlKCkub3B0aW9uYWwoKSxcbiAgaHNfY29kZTogei5zdHJpbmcoKS5udWxsYWJsZSgpLm9wdGlvbmFsKCksXG4gIG1pZF9jb2RlOiB6LnN0cmluZygpLm51bGxhYmxlKCkub3B0aW9uYWwoKSxcbiAgd2VpZ2h0OiB6LmNvZXJjZS5udW1iZXIoKS5udWxsYWJsZSgpLm9wdGlvbmFsKCksXG4gIGxlbmd0aDogei5jb2VyY2UubnVtYmVyKCkubnVsbGFibGUoKS5vcHRpb25hbCgpLFxuICBoZWlnaHQ6IHouY29lcmNlLm51bWJlcigpLm51bGxhYmxlKCkub3B0aW9uYWwoKSxcbiAgd2lkdGg6IHouY29lcmNlLm51bWJlcigpLm51bGxhYmxlKCkub3B0aW9uYWwoKSxcbiAgb3JpZ2luX2NvdW50cnk6IHouc3RyaW5nKCkubnVsbGFibGUoKS5vcHRpb25hbCgpLFxuICBtYXRlcmlhbDogei5zdHJpbmcoKS5udWxsYWJsZSgpLm9wdGlvbmFsKCksXG4gIHNlbGxlcjogelxuICAgIC5vYmplY3Qoe1xuICAgICAgaWQ6IHouc3RyaW5nKCksXG4gICAgICBoYW5kbGU6IHouc3RyaW5nKCkubnVsbGlzaCgpLFxuICAgICAgc3RvcmVfc3RhdHVzOiB6Lm5hdGl2ZUVudW0oU3RvcmVTdGF0dXMpLm51bGxpc2goKSxcbiAgICB9KVxuICAgIC5udWxsYWJsZSgpLFxufSk7XG5cbmV4cG9ydCBjb25zdCBBbGdvbGlhVmFyaWFudFZhbGlkYXRvciA9IHoub2JqZWN0KHtcbiAgaWQ6IHouc3RyaW5nKCksXG4gIHRpdGxlOiB6LnN0cmluZygpLm51bGxpc2goKSxcbiAgc2t1OiB6LnN0cmluZygpLm51bGxpc2goKSxcbiAgYmFyY29kZTogei5zdHJpbmcoKS5udWxsaXNoKCksXG4gIGVhbjogei5zdHJpbmcoKS5udWxsaXNoKCksXG4gIHVwczogei5zdHJpbmcoKS5udWxsaXNoKCksXG4gIGFsbG93X2JhY2tvcmRlcjogei5ib29sZWFuKCkub3B0aW9uYWwoKSxcbiAgbWFuYWdlX2ludmVudG9yeTogei5ib29sZWFuKCkub3B0aW9uYWwoKSxcbiAgaHNfY29kZTogei5zdHJpbmcoKS5udWxsaXNoKCksXG4gIG9yaWdpbl9jb3VudHJ5OiB6LnN0cmluZygpLm51bGxpc2goKSxcbiAgbWlkX2NvZGU6IHouc3RyaW5nKCkubnVsbGlzaCgpLFxuICBtYXRlcmlhbDogei5zdHJpbmcoKS5udWxsaXNoKCksXG4gIHdlaWdodDogei5udW1iZXIoKS5udWxsaXNoKCksXG4gIGxlbmd0aDogei5udW1iZXIoKS5udWxsaXNoKCksXG4gIGhlaWdodDogei5udW1iZXIoKS5udWxsaXNoKCksXG4gIHdpZnRoOiB6Lm51bWJlcigpLm51bGxpc2goKSxcbiAgdmFyaWFudF9yYW5rOiB6Lm51bWJlcigpLm51bGxpc2goKSxcbiAgbWV0YWRhdGE6IHoucmVjb3JkKHoudW5rbm93bigpKS5udWxsaXNoKCksXG4gIG9wdGlvbnM6IHouYXJyYXkoXG4gICAgei5vYmplY3Qoe1xuICAgICAgaWQ6IHouc3RyaW5nKCkub3B0aW9uYWwoKSxcbiAgICAgIHZhbHVlOiB6LnN0cmluZygpLFxuICAgICAgb3B0aW9uOiB6Lm9iamVjdCh7XG4gICAgICAgIGlkOiB6LnN0cmluZygpLm9wdGlvbmFsKCksXG4gICAgICAgIHRpdGxlOiB6LnN0cmluZygpLFxuICAgICAgfSkubnVsbGFibGUoKS5vcHRpb25hbCgpLFxuICAgIH0pXG4gICkub3B0aW9uYWwoKSxcbiAgcHJpY2VzOiB6LmFycmF5KFxuICAgIHoub2JqZWN0KHtcbiAgICAgIGlkOiB6LnN0cmluZygpLm9wdGlvbmFsKCksXG4gICAgICB0aXRsZTogei5zdHJpbmcoKS5udWxsaXNoKCksXG4gICAgICBjdXJyZW5jeV9jb2RlOiB6LnN0cmluZygpLFxuICAgICAgbWluX3F1YW50aXR5OiB6Lm51bWJlcigpLm51bGxpc2goKSxcbiAgICAgIG1heF9xdWFudGl0eTogei5udW1iZXIoKS5udWxsaXNoKCksXG4gICAgICBydWxlc19jb3VudDogei5udW1iZXIoKS5vcHRpb25hbCgpLFxuICAgICAgYW1vdW50OiB6Lm51bWJlcigpLFxuICAgIH0pXG4gICkub3B0aW9uYWwoKSxcbn0pO1xuIl0sIm5hbWVzIjpbIkFsZ29saWFQcm9kdWN0VmFsaWRhdG9yIiwiQWxnb2xpYVZhcmlhbnRWYWxpZGF0b3IiLCJ6Iiwib2JqZWN0IiwiaWQiLCJzdHJpbmciLCJ0aXRsZSIsImhhbmRsZSIsInN1YnRpdGxlIiwibnVsbGFibGUiLCJkZXNjcmlwdGlvbiIsInRodW1ibmFpbCIsImF2ZXJhZ2VfcmF0aW5nIiwiY29lcmNlIiwibnVtYmVyIiwiZGVmYXVsdCIsInN1cHBvcnRlZF9jb3VudHJpZXMiLCJhcnJheSIsIm9wdGlvbnMiLCJyZWNvcmQiLCJpbWFnZXMiLCJ1cmwiLCJyYW5rIiwib3B0aW9uYWwiLCJjb2xsZWN0aW9uIiwidHlwZSIsInZhbHVlIiwidGFncyIsImNhdGVnb3JpZXMiLCJuYW1lIiwidmFyaWFudHMiLCJhbnkiLCJhdHRyaWJ1dGVfdmFsdWVzIiwiaXNfZmlsdGVyYWJsZSIsImJvb2xlYW4iLCJ1aV9jb21wb25lbnQiLCJza3UiLCJlYW4iLCJ1cGMiLCJiYXJjb2RlIiwiaHNfY29kZSIsIm1pZF9jb2RlIiwid2VpZ2h0IiwibGVuZ3RoIiwiaGVpZ2h0Iiwid2lkdGgiLCJvcmlnaW5fY291bnRyeSIsIm1hdGVyaWFsIiwic2VsbGVyIiwibnVsbGlzaCIsInN0b3JlX3N0YXR1cyIsIm5hdGl2ZUVudW0iLCJTdG9yZVN0YXR1cyIsInVwcyIsImFsbG93X2JhY2tvcmRlciIsIm1hbmFnZV9pbnZlbnRvcnkiLCJ3aWZ0aCIsInZhcmlhbnRfcmFuayIsIm1ldGFkYXRhIiwidW5rbm93biIsIm9wdGlvbiIsInByaWNlcyIsImN1cnJlbmN5X2NvZGUiLCJtaW5fcXVhbnRpdHkiLCJtYXhfcXVhbnRpdHkiLCJydWxlc19jb3VudCIsImFtb3VudCJdLCJyYW5nZU1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztJQUlhQSx1QkFBdUI7ZUFBdkJBOztJQStFQUMsdUJBQXVCO2VBQXZCQTs7O3FCQW5GSzt3QkFDVTtBQUdy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