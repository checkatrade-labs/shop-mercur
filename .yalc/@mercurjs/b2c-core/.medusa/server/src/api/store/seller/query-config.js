"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.storeSellerQueryConfig = exports.storeSellerFields = void 0;
exports.storeSellerFields = [
    'id',
    'store_status',
    'name',
    'handle',
    'description',
    'photo',
    'address_line',
    'city',
    'postal_code',
    'country_code',
    'tax_id'
];
exports.storeSellerQueryConfig = {
    list: {
        defaults: exports.storeSellerFields,
        isList: true
    },
    retrieve: {
        defaults: exports.storeSellerFields,
        isList: false
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicXVlcnktY29uZmlnLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2FwaS9zdG9yZS9zZWxsZXIvcXVlcnktY29uZmlnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFhLFFBQUEsaUJBQWlCLEdBQUc7SUFDL0IsSUFBSTtJQUNKLGNBQWM7SUFDZCxNQUFNO0lBQ04sUUFBUTtJQUNSLGFBQWE7SUFDYixPQUFPO0lBQ1AsY0FBYztJQUNkLE1BQU07SUFDTixhQUFhO0lBQ2IsY0FBYztJQUNkLFFBQVE7Q0FDVCxDQUFBO0FBRVksUUFBQSxzQkFBc0IsR0FBRztJQUNwQyxJQUFJLEVBQUU7UUFDSixRQUFRLEVBQUUseUJBQWlCO1FBQzNCLE1BQU0sRUFBRSxJQUFJO0tBQ2I7SUFDRCxRQUFRLEVBQUU7UUFDUixRQUFRLEVBQUUseUJBQWlCO1FBQzNCLE1BQU0sRUFBRSxLQUFLO0tBQ2Q7Q0FDRixDQUFBIn0=