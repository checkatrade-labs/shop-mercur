"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.vendorCustomerOrdersQueryConfig = exports.vendorCustomerOrdersFields = exports.vendorCustomerQueryConfig = exports.vendorCustomersFields = exports.vendorCustomerFields = void 0;
exports.vendorCustomerFields = [
    'id',
    'email',
    'phone',
    'company_name',
    'first_name',
    'last_name',
    'has_account',
    'groups.id',
    'groups.name',
    'created_at',
    'updated_at',
    'deleted_at'
];
exports.vendorCustomersFields = [
    'id',
    'email',
    'phone',
    'company_name',
    'first_name',
    'last_name',
    'has_account',
    'groups.id',
    'created_at',
    'updated_at',
    'deleted_at'
];
exports.vendorCustomerQueryConfig = {
    list: {
        defaults: exports.vendorCustomersFields,
        isList: true
    },
    retrieve: {
        defaults: exports.vendorCustomerFields,
        isList: false
    }
};
exports.vendorCustomerOrdersFields = [
    'id',
    'region_id',
    'display_id',
    'customer_id',
    'version',
    'sales_channel_id',
    'status',
    'summary',
    'is_draft_order',
    'email',
    'currency_code',
    'shipping_address_id',
    'billing_address_id',
    'no_notification',
    'created_at',
    'updated_at',
    'deleted_at'
];
exports.vendorCustomerOrdersQueryConfig = {
    list: {
        defaults: exports.vendorCustomerOrdersFields,
        isList: true
    },
    retrieve: {
        defaults: exports.vendorCustomerOrdersFields,
        isList: false
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicXVlcnktY29uZmlnLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2FwaS92ZW5kb3IvY3VzdG9tZXJzL3F1ZXJ5LWNvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBYSxRQUFBLG9CQUFvQixHQUFHO0lBQ2xDLElBQUk7SUFDSixPQUFPO0lBQ1AsT0FBTztJQUNQLGNBQWM7SUFDZCxZQUFZO0lBQ1osV0FBVztJQUNYLGFBQWE7SUFDYixXQUFXO0lBQ1gsYUFBYTtJQUNiLFlBQVk7SUFDWixZQUFZO0lBQ1osWUFBWTtDQUNiLENBQUE7QUFFWSxRQUFBLHFCQUFxQixHQUFHO0lBQ25DLElBQUk7SUFDSixPQUFPO0lBQ1AsT0FBTztJQUNQLGNBQWM7SUFDZCxZQUFZO0lBQ1osV0FBVztJQUNYLGFBQWE7SUFDYixXQUFXO0lBQ1gsWUFBWTtJQUNaLFlBQVk7SUFDWixZQUFZO0NBQ2IsQ0FBQTtBQUVZLFFBQUEseUJBQXlCLEdBQUc7SUFDdkMsSUFBSSxFQUFFO1FBQ0osUUFBUSxFQUFFLDZCQUFxQjtRQUMvQixNQUFNLEVBQUUsSUFBSTtLQUNiO0lBQ0QsUUFBUSxFQUFFO1FBQ1IsUUFBUSxFQUFFLDRCQUFvQjtRQUM5QixNQUFNLEVBQUUsS0FBSztLQUNkO0NBQ0YsQ0FBQTtBQUVZLFFBQUEsMEJBQTBCLEdBQUc7SUFDeEMsSUFBSTtJQUNKLFdBQVc7SUFDWCxZQUFZO0lBQ1osYUFBYTtJQUNiLFNBQVM7SUFDVCxrQkFBa0I7SUFDbEIsUUFBUTtJQUNSLFNBQVM7SUFDVCxnQkFBZ0I7SUFDaEIsT0FBTztJQUNQLGVBQWU7SUFDZixxQkFBcUI7SUFDckIsb0JBQW9CO0lBQ3BCLGlCQUFpQjtJQUNqQixZQUFZO0lBQ1osWUFBWTtJQUNaLFlBQVk7Q0FDYixDQUFBO0FBRVksUUFBQSwrQkFBK0IsR0FBRztJQUM3QyxJQUFJLEVBQUU7UUFDSixRQUFRLEVBQUUsa0NBQTBCO1FBQ3BDLE1BQU0sRUFBRSxJQUFJO0tBQ2I7SUFDRCxRQUFRLEVBQUU7UUFDUixRQUFRLEVBQUUsa0NBQTBCO1FBQ3BDLE1BQU0sRUFBRSxLQUFLO0tBQ2Q7Q0FDRixDQUFBIn0=