"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.adminSellerCustomerGroupsQueryConfig = exports.adminSellerOrdersQueryConfig = exports.adminSellerQueryConfig = exports.adminSellerFields = void 0;
const query_config_1 = require("@medusajs/medusa/api/admin/customer-groups/query-config");
const query_config_2 = require("@medusajs/medusa/api/admin/orders/query-config");
exports.adminSellerFields = [
    'id',
    'name',
    'handle',
    'description',
    'photo'
];
exports.adminSellerQueryConfig = {
    list: {
        defaults: exports.adminSellerFields,
        isList: true
    },
    retrieve: {
        defaults: exports.adminSellerFields,
        isList: false
    }
};
exports.adminSellerOrdersQueryConfig = {
    list: {
        defaults: query_config_2.defaultAdminOrderFields,
        isList: true
    },
    retrieve: {
        defaults: query_config_2.defaultAdminOrderFields,
        isList: false
    }
};
exports.adminSellerCustomerGroupsQueryConfig = {
    list: {
        defaults: query_config_1.defaultAdminCustomerGroupFields,
        isList: true
    },
    retrieve: {
        defaults: query_config_1.defaultAdminCustomerGroupFields,
        isList: false
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicXVlcnktY29uZmlnLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2FwaS9hZG1pbi9zZWxsZXJzL3F1ZXJ5LWNvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSwwRkFBeUc7QUFDekcsaUZBQXdGO0FBRTNFLFFBQUEsaUJBQWlCLEdBQUc7SUFDL0IsSUFBSTtJQUNKLE1BQU07SUFDTixRQUFRO0lBQ1IsYUFBYTtJQUNiLE9BQU87Q0FDUixDQUFBO0FBRVksUUFBQSxzQkFBc0IsR0FBRztJQUNwQyxJQUFJLEVBQUU7UUFDSixRQUFRLEVBQUUseUJBQWlCO1FBQzNCLE1BQU0sRUFBRSxJQUFJO0tBQ2I7SUFDRCxRQUFRLEVBQUU7UUFDUixRQUFRLEVBQUUseUJBQWlCO1FBQzNCLE1BQU0sRUFBRSxLQUFLO0tBQ2Q7Q0FDRixDQUFBO0FBRVksUUFBQSw0QkFBNEIsR0FBRztJQUMxQyxJQUFJLEVBQUU7UUFDSixRQUFRLEVBQUUsc0NBQXVCO1FBQ2pDLE1BQU0sRUFBRSxJQUFJO0tBQ2I7SUFDRCxRQUFRLEVBQUU7UUFDUixRQUFRLEVBQUUsc0NBQXVCO1FBQ2pDLE1BQU0sRUFBRSxLQUFLO0tBQ2Q7Q0FDRixDQUFBO0FBRVksUUFBQSxvQ0FBb0MsR0FBRztJQUNsRCxJQUFJLEVBQUU7UUFDSixRQUFRLEVBQUUsOENBQStCO1FBQ3pDLE1BQU0sRUFBRSxJQUFJO0tBQ2I7SUFDRCxRQUFRLEVBQUU7UUFDUixRQUFRLEVBQUUsOENBQStCO1FBQ3pDLE1BQU0sRUFBRSxLQUFLO0tBQ2Q7Q0FDRixDQUFBIn0=