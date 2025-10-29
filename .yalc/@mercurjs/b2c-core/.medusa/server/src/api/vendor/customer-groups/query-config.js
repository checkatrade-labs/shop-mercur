"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.vendorCustomerGroupsQueryConfig = exports.vendorCustomerGroupsFields = void 0;
exports.vendorCustomerGroupsFields = [
    'id',
    'name',
    'customers.id',
    'customers.first_name',
    'customers.last_name',
    'customers.email',
    'created_at',
    'updated_at',
    'deleted_at'
];
exports.vendorCustomerGroupsQueryConfig = {
    list: {
        defaults: exports.vendorCustomerGroupsFields,
        isList: true
    },
    retrieve: {
        defaults: exports.vendorCustomerGroupsFields,
        isList: false
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicXVlcnktY29uZmlnLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2FwaS92ZW5kb3IvY3VzdG9tZXItZ3JvdXBzL3F1ZXJ5LWNvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBYSxRQUFBLDBCQUEwQixHQUFHO0lBQ3hDLElBQUk7SUFDSixNQUFNO0lBQ04sY0FBYztJQUNkLHNCQUFzQjtJQUN0QixxQkFBcUI7SUFDckIsaUJBQWlCO0lBQ2pCLFlBQVk7SUFDWixZQUFZO0lBQ1osWUFBWTtDQUNiLENBQUE7QUFFWSxRQUFBLCtCQUErQixHQUFHO0lBQzdDLElBQUksRUFBRTtRQUNKLFFBQVEsRUFBRSxrQ0FBMEI7UUFDcEMsTUFBTSxFQUFFLElBQUk7S0FDYjtJQUNELFFBQVEsRUFBRTtRQUNSLFFBQVEsRUFBRSxrQ0FBMEI7UUFDcEMsTUFBTSxFQUFFLEtBQUs7S0FDZDtDQUNGLENBQUEifQ==