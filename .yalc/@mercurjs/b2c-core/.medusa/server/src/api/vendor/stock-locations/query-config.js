"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.vendorStockLocationQueryConfig = exports.vendorStockLocationFields = void 0;
exports.vendorStockLocationFields = [
    'id',
    'metadata',
    'name',
    'address.id',
    'address.address_1',
    'address.address_2',
    'address.city',
    'address.country_code',
    'address.phone',
    'address.province',
    'address.postal_code',
    'address.metadata',
    '*fulfillment_sets',
    '*fulfillment_providers'
];
exports.vendorStockLocationQueryConfig = {
    list: {
        defaults: exports.vendorStockLocationFields,
        isList: true
    },
    retrieve: {
        defaults: exports.vendorStockLocationFields,
        isList: false
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicXVlcnktY29uZmlnLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2FwaS92ZW5kb3Ivc3RvY2stbG9jYXRpb25zL3F1ZXJ5LWNvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBYSxRQUFBLHlCQUF5QixHQUFHO0lBQ3ZDLElBQUk7SUFDSixVQUFVO0lBQ1YsTUFBTTtJQUNOLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsbUJBQW1CO0lBQ25CLGNBQWM7SUFDZCxzQkFBc0I7SUFDdEIsZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixxQkFBcUI7SUFDckIsa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQix3QkFBd0I7Q0FDekIsQ0FBQTtBQUVZLFFBQUEsOEJBQThCLEdBQUc7SUFDNUMsSUFBSSxFQUFFO1FBQ0osUUFBUSxFQUFFLGlDQUF5QjtRQUNuQyxNQUFNLEVBQUUsSUFBSTtLQUNiO0lBQ0QsUUFBUSxFQUFFO1FBQ1IsUUFBUSxFQUFFLGlDQUF5QjtRQUNuQyxNQUFNLEVBQUUsS0FBSztLQUNkO0NBQ0YsQ0FBQSJ9