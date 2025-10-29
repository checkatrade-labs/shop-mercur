"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.vendorStoresQueryConfig = exports.vendorStoreFields = void 0;
exports.vendorStoreFields = [
    'id',
    'name',
    'supported_currencies.id',
    'supported_currencies.is_default',
    'supported_currencies.currency_code',
    'default_sales_channel_id',
    'default_region_id',
    'default_location_id',
    'metadata',
    'created_at',
    'updated_at'
];
exports.vendorStoresQueryConfig = {
    list: {
        defaults: exports.vendorStoreFields,
        isList: true
    },
    retrieve: {
        defaults: exports.vendorStoreFields,
        isList: false
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicXVlcnktY29uZmlnLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2FwaS92ZW5kb3Ivc3RvcmVzL3F1ZXJ5LWNvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBYSxRQUFBLGlCQUFpQixHQUFHO0lBQy9CLElBQUk7SUFDSixNQUFNO0lBQ04seUJBQXlCO0lBQ3pCLGlDQUFpQztJQUNqQyxvQ0FBb0M7SUFDcEMsMEJBQTBCO0lBQzFCLG1CQUFtQjtJQUNuQixxQkFBcUI7SUFDckIsVUFBVTtJQUNWLFlBQVk7SUFDWixZQUFZO0NBQ2IsQ0FBQTtBQUNZLFFBQUEsdUJBQXVCLEdBQUc7SUFDckMsSUFBSSxFQUFFO1FBQ0osUUFBUSxFQUFFLHlCQUFpQjtRQUMzQixNQUFNLEVBQUUsSUFBSTtLQUNiO0lBQ0QsUUFBUSxFQUFFO1FBQ1IsUUFBUSxFQUFFLHlCQUFpQjtRQUMzQixNQUFNLEVBQUUsS0FBSztLQUNkO0NBQ0YsQ0FBQSJ9