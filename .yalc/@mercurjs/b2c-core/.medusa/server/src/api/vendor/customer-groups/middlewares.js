"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.vendorCustomerGroupsMiddlewares = void 0;
const framework_1 = require("@medusajs/framework");
const seller_customer_group_1 = __importDefault(require("../../../links/seller-customer-group"));
const middlewares_1 = require("../../../shared/infra/http/middlewares");
const query_config_1 = require("./query-config");
const validators_1 = require("./validators");
exports.vendorCustomerGroupsMiddlewares = [
    {
        method: ['GET'],
        matcher: '/vendor/customer-groups',
        middlewares: [
            (0, framework_1.validateAndTransformQuery)(validators_1.VendorGetCustomerGroupsParams, query_config_1.vendorCustomerGroupsQueryConfig.list),
            (0, middlewares_1.filterBySellerId)()
        ]
    },
    {
        method: ['POST'],
        matcher: '/vendor/customer-groups',
        middlewares: [
            (0, framework_1.validateAndTransformBody)(validators_1.VendorCreateCustomerGroup),
            (0, framework_1.validateAndTransformQuery)(validators_1.VendorGetCustomerGroupsParams, query_config_1.vendorCustomerGroupsQueryConfig.retrieve)
        ]
    },
    {
        method: ['GET'],
        matcher: '/vendor/customer-groups/:id',
        middlewares: [
            (0, middlewares_1.checkResourceOwnershipByResourceId)({
                entryPoint: seller_customer_group_1.default.entryPoint,
                filterField: 'customer_group_id'
            }),
            (0, framework_1.validateAndTransformQuery)(validators_1.VendorGetCustomerGroupsParams, query_config_1.vendorCustomerGroupsQueryConfig.retrieve)
        ]
    },
    {
        method: ['DELETE'],
        matcher: '/vendor/customer-groups/:id',
        middlewares: [
            (0, middlewares_1.checkResourceOwnershipByResourceId)({
                entryPoint: seller_customer_group_1.default.entryPoint,
                filterField: 'customer_group_id'
            })
        ]
    },
    {
        method: ['POST'],
        matcher: '/vendor/customer-groups/:id',
        middlewares: [
            (0, framework_1.validateAndTransformBody)(validators_1.VendorCreateCustomerGroup),
            (0, framework_1.validateAndTransformQuery)(validators_1.VendorGetCustomerGroupsParams, query_config_1.vendorCustomerGroupsQueryConfig.retrieve),
            (0, middlewares_1.checkResourceOwnershipByResourceId)({
                entryPoint: seller_customer_group_1.default.entryPoint,
                filterField: 'customer_group_id'
            })
        ]
    },
    {
        method: ['POST'],
        matcher: '/vendor/customer-groups/:id/customers',
        middlewares: [
            (0, framework_1.validateAndTransformBody)(validators_1.VendorLinkCustomersToGroup),
            (0, framework_1.validateAndTransformQuery)(validators_1.VendorGetCustomerGroupsParams, query_config_1.vendorCustomerGroupsQueryConfig.retrieve),
            (0, middlewares_1.checkResourceOwnershipByResourceId)({
                entryPoint: seller_customer_group_1.default.entryPoint,
                filterField: 'customer_group_id'
            })
        ]
    }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWlkZGxld2FyZXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvYXBpL3ZlbmRvci9jdXN0b21lci1ncm91cHMvbWlkZGxld2FyZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsbURBSTRCO0FBRTVCLGlHQUFzRTtBQUN0RSx3RUFHK0M7QUFDL0MsaURBQWdFO0FBQ2hFLDZDQUlxQjtBQUVSLFFBQUEsK0JBQStCLEdBQXNCO0lBQ2hFO1FBQ0UsTUFBTSxFQUFFLENBQUMsS0FBSyxDQUFDO1FBQ2YsT0FBTyxFQUFFLHlCQUF5QjtRQUNsQyxXQUFXLEVBQUU7WUFDWCxJQUFBLHFDQUF5QixFQUN2QiwwQ0FBNkIsRUFDN0IsOENBQStCLENBQUMsSUFBSSxDQUNyQztZQUNELElBQUEsOEJBQWdCLEdBQUU7U0FDbkI7S0FDRjtJQUNEO1FBQ0UsTUFBTSxFQUFFLENBQUMsTUFBTSxDQUFDO1FBQ2hCLE9BQU8sRUFBRSx5QkFBeUI7UUFDbEMsV0FBVyxFQUFFO1lBQ1gsSUFBQSxvQ0FBd0IsRUFBQyxzQ0FBeUIsQ0FBQztZQUNuRCxJQUFBLHFDQUF5QixFQUN2QiwwQ0FBNkIsRUFDN0IsOENBQStCLENBQUMsUUFBUSxDQUN6QztTQUNGO0tBQ0Y7SUFDRDtRQUNFLE1BQU0sRUFBRSxDQUFDLEtBQUssQ0FBQztRQUNmLE9BQU8sRUFBRSw2QkFBNkI7UUFDdEMsV0FBVyxFQUFFO1lBQ1gsSUFBQSxnREFBa0MsRUFBQztnQkFDakMsVUFBVSxFQUFFLCtCQUFtQixDQUFDLFVBQVU7Z0JBQzFDLFdBQVcsRUFBRSxtQkFBbUI7YUFDakMsQ0FBQztZQUNGLElBQUEscUNBQXlCLEVBQ3ZCLDBDQUE2QixFQUM3Qiw4Q0FBK0IsQ0FBQyxRQUFRLENBQ3pDO1NBQ0Y7S0FDRjtJQUNEO1FBQ0UsTUFBTSxFQUFFLENBQUMsUUFBUSxDQUFDO1FBQ2xCLE9BQU8sRUFBRSw2QkFBNkI7UUFDdEMsV0FBVyxFQUFFO1lBQ1gsSUFBQSxnREFBa0MsRUFBQztnQkFDakMsVUFBVSxFQUFFLCtCQUFtQixDQUFDLFVBQVU7Z0JBQzFDLFdBQVcsRUFBRSxtQkFBbUI7YUFDakMsQ0FBQztTQUNIO0tBQ0Y7SUFDRDtRQUNFLE1BQU0sRUFBRSxDQUFDLE1BQU0sQ0FBQztRQUNoQixPQUFPLEVBQUUsNkJBQTZCO1FBQ3RDLFdBQVcsRUFBRTtZQUNYLElBQUEsb0NBQXdCLEVBQUMsc0NBQXlCLENBQUM7WUFDbkQsSUFBQSxxQ0FBeUIsRUFDdkIsMENBQTZCLEVBQzdCLDhDQUErQixDQUFDLFFBQVEsQ0FDekM7WUFDRCxJQUFBLGdEQUFrQyxFQUFDO2dCQUNqQyxVQUFVLEVBQUUsK0JBQW1CLENBQUMsVUFBVTtnQkFDMUMsV0FBVyxFQUFFLG1CQUFtQjthQUNqQyxDQUFDO1NBQ0g7S0FDRjtJQUNEO1FBQ0UsTUFBTSxFQUFFLENBQUMsTUFBTSxDQUFDO1FBQ2hCLE9BQU8sRUFBRSx1Q0FBdUM7UUFDaEQsV0FBVyxFQUFFO1lBQ1gsSUFBQSxvQ0FBd0IsRUFBQyx1Q0FBMEIsQ0FBQztZQUNwRCxJQUFBLHFDQUF5QixFQUN2QiwwQ0FBNkIsRUFDN0IsOENBQStCLENBQUMsUUFBUSxDQUN6QztZQUNELElBQUEsZ0RBQWtDLEVBQUM7Z0JBQ2pDLFVBQVUsRUFBRSwrQkFBbUIsQ0FBQyxVQUFVO2dCQUMxQyxXQUFXLEVBQUUsbUJBQW1CO2FBQ2pDLENBQUM7U0FDSDtLQUNGO0NBQ0YsQ0FBQSJ9