"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.vendorPriceListPriceQueryConfig = exports.vendorPriceListQueryConfig = exports.vendorPriceListQueryFields = exports.vendorPriceListPriceQueryFields = void 0;
exports.vendorPriceListPriceQueryFields = [
    'id',
    'currency_code',
    'amount',
    'min_quantity',
    'max_quantity',
    'created_at',
    'deleted_at',
    'updated_at',
    'price_set.variant.id',
    'price_rules.value',
    'price_rules.attribute'
];
exports.vendorPriceListQueryFields = [
    'id',
    'type',
    'description',
    'title',
    'status',
    'starts_at',
    'ends_at',
    'created_at',
    'updated_at',
    'deleted_at',
    'price_list_rules.value',
    'price_list_rules.attribute',
    ...exports.vendorPriceListPriceQueryFields.map((field) => `prices.${field}`)
];
exports.vendorPriceListQueryConfig = {
    list: {
        defaults: exports.vendorPriceListQueryFields,
        isList: true
    },
    retrieve: {
        defaults: exports.vendorPriceListQueryFields,
        isList: false
    }
};
exports.vendorPriceListPriceQueryConfig = {
    list: {
        defaults: exports.vendorPriceListPriceQueryFields,
        isList: true
    },
    retrieve: {
        defaults: exports.vendorPriceListPriceQueryFields,
        isList: false
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicXVlcnktY29uZmlnLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2FwaS92ZW5kb3IvcHJpY2UtbGlzdHMvcXVlcnktY29uZmlnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFhLFFBQUEsK0JBQStCLEdBQUc7SUFDN0MsSUFBSTtJQUNKLGVBQWU7SUFDZixRQUFRO0lBQ1IsY0FBYztJQUNkLGNBQWM7SUFDZCxZQUFZO0lBQ1osWUFBWTtJQUNaLFlBQVk7SUFDWixzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLHVCQUF1QjtDQUN4QixDQUFBO0FBRVksUUFBQSwwQkFBMEIsR0FBRztJQUN4QyxJQUFJO0lBQ0osTUFBTTtJQUNOLGFBQWE7SUFDYixPQUFPO0lBQ1AsUUFBUTtJQUNSLFdBQVc7SUFDWCxTQUFTO0lBQ1QsWUFBWTtJQUNaLFlBQVk7SUFDWixZQUFZO0lBQ1osd0JBQXdCO0lBQ3hCLDRCQUE0QjtJQUM1QixHQUFHLHVDQUErQixDQUFDLEdBQUcsQ0FBQyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsVUFBVSxLQUFLLEVBQUUsQ0FBQztDQUNyRSxDQUFBO0FBRVksUUFBQSwwQkFBMEIsR0FBRztJQUN4QyxJQUFJLEVBQUU7UUFDSixRQUFRLEVBQUUsa0NBQTBCO1FBQ3BDLE1BQU0sRUFBRSxJQUFJO0tBQ2I7SUFDRCxRQUFRLEVBQUU7UUFDUixRQUFRLEVBQUUsa0NBQTBCO1FBQ3BDLE1BQU0sRUFBRSxLQUFLO0tBQ2Q7Q0FDRixDQUFBO0FBRVksUUFBQSwrQkFBK0IsR0FBRztJQUM3QyxJQUFJLEVBQUU7UUFDSixRQUFRLEVBQUUsdUNBQStCO1FBQ3pDLE1BQU0sRUFBRSxJQUFJO0tBQ2I7SUFDRCxRQUFRLEVBQUU7UUFDUixRQUFRLEVBQUUsdUNBQStCO1FBQ3pDLE1BQU0sRUFBRSxLQUFLO0tBQ2Q7Q0FDRixDQUFBIn0=