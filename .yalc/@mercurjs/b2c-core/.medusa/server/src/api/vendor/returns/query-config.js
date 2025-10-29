"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.vendorReturnsQueryConfig = exports.vendorReturnFields = void 0;
exports.vendorReturnFields = [
    'id',
    'order_id',
    'exchange_id',
    'claim_id',
    'display_id',
    'location_id',
    'order_version',
    'status',
    'metadata',
    'no_notification',
    'refund_amount',
    'items.*',
    'items.reason.*',
    'created_by',
    'created_at',
    'updated_at',
    'canceled_at',
    'requested_at',
    'received_at'
];
exports.vendorReturnsQueryConfig = {
    list: {
        defaults: exports.vendorReturnFields,
        isList: true
    },
    retrieve: {
        defaults: exports.vendorReturnFields,
        isList: false
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicXVlcnktY29uZmlnLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2FwaS92ZW5kb3IvcmV0dXJucy9xdWVyeS1jb25maWcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQWEsUUFBQSxrQkFBa0IsR0FBRztJQUNoQyxJQUFJO0lBQ0osVUFBVTtJQUNWLGFBQWE7SUFDYixVQUFVO0lBQ1YsWUFBWTtJQUNaLGFBQWE7SUFDYixlQUFlO0lBQ2YsUUFBUTtJQUNSLFVBQVU7SUFDVixpQkFBaUI7SUFDakIsZUFBZTtJQUNmLFNBQVM7SUFDVCxnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLFlBQVk7SUFDWixZQUFZO0lBQ1osYUFBYTtJQUNiLGNBQWM7SUFDZCxhQUFhO0NBQ2QsQ0FBQTtBQUVZLFFBQUEsd0JBQXdCLEdBQUc7SUFDdEMsSUFBSSxFQUFFO1FBQ0osUUFBUSxFQUFFLDBCQUFrQjtRQUM1QixNQUFNLEVBQUUsSUFBSTtLQUNiO0lBQ0QsUUFBUSxFQUFFO1FBQ1IsUUFBUSxFQUFFLDBCQUFrQjtRQUM1QixNQUFNLEVBQUUsS0FBSztLQUNkO0NBQ0YsQ0FBQSJ9