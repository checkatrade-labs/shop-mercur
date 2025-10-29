"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.storeReturnQueryConfig = exports.storeReturnFields = void 0;
exports.storeReturnFields = [
    'id',
    'display_id',
    'order_version',
    'order_id',
    'status',
    'location_id',
    'requested_at',
    'canceled_at',
    'items.*',
    'refund_amount',
    'created_at',
    'updated_at',
    'deleted_at'
];
exports.storeReturnQueryConfig = {
    list: {
        defaults: [],
        isList: true
    },
    retrieve: {
        defaults: [],
        isList: false
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicXVlcnktY29uZmlnLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2FwaS9zdG9yZS9yZXR1cm5zL3F1ZXJ5LWNvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBYSxRQUFBLGlCQUFpQixHQUFHO0lBQy9CLElBQUk7SUFDSixZQUFZO0lBQ1osZUFBZTtJQUNmLFVBQVU7SUFDVixRQUFRO0lBQ1IsYUFBYTtJQUNiLGNBQWM7SUFDZCxhQUFhO0lBQ2IsU0FBUztJQUNULGVBQWU7SUFDZixZQUFZO0lBQ1osWUFBWTtJQUNaLFlBQVk7Q0FDYixDQUFBO0FBRVksUUFBQSxzQkFBc0IsR0FBRztJQUNwQyxJQUFJLEVBQUU7UUFDSixRQUFRLEVBQUUsRUFBRTtRQUNaLE1BQU0sRUFBRSxJQUFJO0tBQ2I7SUFDRCxRQUFRLEVBQUU7UUFDUixRQUFRLEVBQUUsRUFBRTtRQUNaLE1BQU0sRUFBRSxLQUFLO0tBQ2Q7Q0FDRixDQUFBIn0=