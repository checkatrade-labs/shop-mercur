"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.vendorCustomersMiddlewares = void 0;
const framework_1 = require("@medusajs/framework");
const query_config_1 = require("./query-config");
const validators_1 = require("./validators");
exports.vendorCustomersMiddlewares = [
    {
        method: ['GET'],
        matcher: '/vendor/customers',
        middlewares: [
            (0, framework_1.validateAndTransformQuery)(validators_1.VendorGetCustomersParams, query_config_1.vendorCustomerQueryConfig.list)
        ]
    },
    {
        method: ['GET'],
        matcher: '/vendor/customers/:id',
        middlewares: [
            (0, framework_1.validateAndTransformQuery)(validators_1.VendorGetCustomersParams, query_config_1.vendorCustomerQueryConfig.retrieve)
        ]
    },
    {
        method: ['GET'],
        matcher: '/vendor/customers/:id/orders',
        middlewares: [
            (0, framework_1.validateAndTransformQuery)(validators_1.VendorGetCustomerOrdersParams, query_config_1.vendorCustomerOrdersQueryConfig.list)
        ]
    },
    {
        method: ['POST'],
        matcher: '/vendor/customers/:id/customer-groups',
        middlewares: [
            (0, framework_1.validateAndTransformBody)(validators_1.VendorUpdateCustomerGroups),
            (0, framework_1.validateAndTransformQuery)(validators_1.VendorGetCustomersParams, query_config_1.vendorCustomerQueryConfig.retrieve)
        ]
    }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWlkZGxld2FyZXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvYXBpL3ZlbmRvci9jdXN0b21lcnMvbWlkZGxld2FyZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsbURBSTRCO0FBRTVCLGlEQUd1QjtBQUN2Qiw2Q0FJcUI7QUFFUixRQUFBLDBCQUEwQixHQUFzQjtJQUMzRDtRQUNFLE1BQU0sRUFBRSxDQUFDLEtBQUssQ0FBQztRQUNmLE9BQU8sRUFBRSxtQkFBbUI7UUFDNUIsV0FBVyxFQUFFO1lBQ1gsSUFBQSxxQ0FBeUIsRUFDdkIscUNBQXdCLEVBQ3hCLHdDQUF5QixDQUFDLElBQUksQ0FDL0I7U0FDRjtLQUNGO0lBQ0Q7UUFDRSxNQUFNLEVBQUUsQ0FBQyxLQUFLLENBQUM7UUFDZixPQUFPLEVBQUUsdUJBQXVCO1FBQ2hDLFdBQVcsRUFBRTtZQUNYLElBQUEscUNBQXlCLEVBQ3ZCLHFDQUF3QixFQUN4Qix3Q0FBeUIsQ0FBQyxRQUFRLENBQ25DO1NBQ0Y7S0FDRjtJQUNEO1FBQ0UsTUFBTSxFQUFFLENBQUMsS0FBSyxDQUFDO1FBQ2YsT0FBTyxFQUFFLDhCQUE4QjtRQUN2QyxXQUFXLEVBQUU7WUFDWCxJQUFBLHFDQUF5QixFQUN2QiwwQ0FBNkIsRUFDN0IsOENBQStCLENBQUMsSUFBSSxDQUNyQztTQUNGO0tBQ0Y7SUFDRDtRQUNFLE1BQU0sRUFBRSxDQUFDLE1BQU0sQ0FBQztRQUNoQixPQUFPLEVBQUUsdUNBQXVDO1FBQ2hELFdBQVcsRUFBRTtZQUNYLElBQUEsb0NBQXdCLEVBQUMsdUNBQTBCLENBQUM7WUFDcEQsSUFBQSxxQ0FBeUIsRUFDdkIscUNBQXdCLEVBQ3hCLHdDQUF5QixDQUFDLFFBQVEsQ0FDbkM7U0FDRjtLQUNGO0NBQ0YsQ0FBQSJ9