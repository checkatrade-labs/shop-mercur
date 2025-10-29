"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.vendorRegionsQueryConfig = exports.defaultVendorRegionFields = void 0;
exports.defaultVendorRegionFields = [
    'id',
    'name',
    'currency_code',
    'created_at',
    'updated_at',
    'deleted_at',
    'automatic_taxes',
    'metadata',
    '*countries'
];
exports.vendorRegionsQueryConfig = {
    list: {
        defaults: exports.defaultVendorRegionFields,
        isList: true
    },
    retrieve: {
        defaults: exports.defaultVendorRegionFields,
        isList: false
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicXVlcnktY29uZmlnLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2FwaS92ZW5kb3IvcmVnaW9ucy9xdWVyeS1jb25maWcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQWEsUUFBQSx5QkFBeUIsR0FBRztJQUN2QyxJQUFJO0lBQ0osTUFBTTtJQUNOLGVBQWU7SUFDZixZQUFZO0lBQ1osWUFBWTtJQUNaLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsVUFBVTtJQUNWLFlBQVk7Q0FDYixDQUFBO0FBRVksUUFBQSx3QkFBd0IsR0FBRztJQUN0QyxJQUFJLEVBQUU7UUFDSixRQUFRLEVBQUUsaUNBQXlCO1FBQ25DLE1BQU0sRUFBRSxJQUFJO0tBQ2I7SUFDRCxRQUFRLEVBQUU7UUFDUixRQUFRLEVBQUUsaUNBQXlCO1FBQ25DLE1BQU0sRUFBRSxLQUFLO0tBQ2Q7Q0FDRixDQUFBIn0=