"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sellerMiddlewares = void 0;
const framework_1 = require("@medusajs/framework");
const query_config_1 = require("@medusajs/medusa/api/admin/products/query-config");
const query_config_2 = require("./query-config");
const validators_1 = require("./validators");
exports.sellerMiddlewares = [
    {
        method: ['GET'],
        matcher: '/admin/sellers',
        middlewares: [
            (0, framework_1.validateAndTransformQuery)(validators_1.AdminSellerParams, query_config_2.adminSellerQueryConfig.list)
        ]
    },
    {
        method: ['GET'],
        matcher: '/admin/sellers/:id',
        middlewares: [
            (0, framework_1.unlessPath)(/.*\/sellers\/invite/, (0, framework_1.validateAndTransformQuery)(validators_1.AdminSellerParams, query_config_2.adminSellerQueryConfig.retrieve))
        ]
    },
    {
        method: ['POST'],
        matcher: '/admin/sellers/:id',
        middlewares: [
            (0, framework_1.unlessPath)(/.*\/sellers\/invite/, (0, framework_1.validateAndTransformQuery)(validators_1.AdminSellerParams, query_config_2.adminSellerQueryConfig.retrieve)),
            (0, framework_1.unlessPath)(/.*\/sellers\/invite/, (0, framework_1.validateAndTransformBody)(validators_1.AdminUpdateSeller))
        ]
    },
    {
        method: ['GET'],
        matcher: '/admin/sellers/:id/products',
        middlewares: [
            (0, framework_1.unlessPath)(/.*\/sellers\/invite/, (0, framework_1.validateAndTransformQuery)(validators_1.AdminGetSellerProductsParams, query_config_1.listProductQueryConfig))
        ]
    },
    {
        method: ['GET'],
        matcher: '/admin/sellers/:id/orders',
        middlewares: [
            (0, framework_1.unlessPath)(/.*\/sellers\/invite/, (0, framework_1.validateAndTransformQuery)(validators_1.AdminGetSellerOrdersParams, query_config_2.adminSellerOrdersQueryConfig.list))
        ]
    },
    {
        method: ['GET'],
        matcher: '/admin/sellers/:id/customer-groups',
        middlewares: [
            (0, framework_1.unlessPath)(/.*\/sellers\/invite/, (0, framework_1.validateAndTransformQuery)(validators_1.AdminGetSellerCustomerGroupsParams, query_config_2.adminSellerOrdersQueryConfig.list))
        ]
    },
    {
        method: ['POST'],
        matcher: '/admin/sellers/invite',
        middlewares: [(0, framework_1.validateAndTransformBody)(validators_1.AdminInviteSeller)]
    }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWlkZGxld2FyZXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvYXBpL2FkbWluL3NlbGxlcnMvbWlkZGxld2FyZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsbURBSzRCO0FBQzVCLG1GQUF5RjtBQUV6RixpREFHdUI7QUFDdkIsNkNBT3FCO0FBRVIsUUFBQSxpQkFBaUIsR0FBc0I7SUFDbEQ7UUFDRSxNQUFNLEVBQUUsQ0FBQyxLQUFLLENBQUM7UUFDZixPQUFPLEVBQUUsZ0JBQWdCO1FBQ3pCLFdBQVcsRUFBRTtZQUNYLElBQUEscUNBQXlCLEVBQUMsOEJBQWlCLEVBQUUscUNBQXNCLENBQUMsSUFBSSxDQUFDO1NBQzFFO0tBQ0Y7SUFDRDtRQUNFLE1BQU0sRUFBRSxDQUFDLEtBQUssQ0FBQztRQUNmLE9BQU8sRUFBRSxvQkFBb0I7UUFDN0IsV0FBVyxFQUFFO1lBQ1gsSUFBQSxzQkFBVSxFQUNSLHFCQUFxQixFQUNyQixJQUFBLHFDQUF5QixFQUN2Qiw4QkFBaUIsRUFDakIscUNBQXNCLENBQUMsUUFBUSxDQUNoQyxDQUNGO1NBQ0Y7S0FDRjtJQUNEO1FBQ0UsTUFBTSxFQUFFLENBQUMsTUFBTSxDQUFDO1FBQ2hCLE9BQU8sRUFBRSxvQkFBb0I7UUFDN0IsV0FBVyxFQUFFO1lBQ1gsSUFBQSxzQkFBVSxFQUNSLHFCQUFxQixFQUNyQixJQUFBLHFDQUF5QixFQUN2Qiw4QkFBaUIsRUFDakIscUNBQXNCLENBQUMsUUFBUSxDQUNoQyxDQUNGO1lBQ0QsSUFBQSxzQkFBVSxFQUNSLHFCQUFxQixFQUNyQixJQUFBLG9DQUF3QixFQUFDLDhCQUFpQixDQUFDLENBQzVDO1NBQ0Y7S0FDRjtJQUNEO1FBQ0UsTUFBTSxFQUFFLENBQUMsS0FBSyxDQUFDO1FBQ2YsT0FBTyxFQUFFLDZCQUE2QjtRQUN0QyxXQUFXLEVBQUU7WUFDWCxJQUFBLHNCQUFVLEVBQ1IscUJBQXFCLEVBQ3JCLElBQUEscUNBQXlCLEVBQ3ZCLHlDQUE0QixFQUM1QixxQ0FBc0IsQ0FDdkIsQ0FDRjtTQUNGO0tBQ0Y7SUFDRDtRQUNFLE1BQU0sRUFBRSxDQUFDLEtBQUssQ0FBQztRQUNmLE9BQU8sRUFBRSwyQkFBMkI7UUFDcEMsV0FBVyxFQUFFO1lBQ1gsSUFBQSxzQkFBVSxFQUNSLHFCQUFxQixFQUNyQixJQUFBLHFDQUF5QixFQUN2Qix1Q0FBMEIsRUFDMUIsMkNBQTRCLENBQUMsSUFBSSxDQUNsQyxDQUNGO1NBQ0Y7S0FDRjtJQUNEO1FBQ0UsTUFBTSxFQUFFLENBQUMsS0FBSyxDQUFDO1FBQ2YsT0FBTyxFQUFFLG9DQUFvQztRQUM3QyxXQUFXLEVBQUU7WUFDWCxJQUFBLHNCQUFVLEVBQ1IscUJBQXFCLEVBQ3JCLElBQUEscUNBQXlCLEVBQ3ZCLCtDQUFrQyxFQUNsQywyQ0FBNEIsQ0FBQyxJQUFJLENBQ2xDLENBQ0Y7U0FDRjtLQUNGO0lBQ0Q7UUFDRSxNQUFNLEVBQUUsQ0FBQyxNQUFNLENBQUM7UUFDaEIsT0FBTyxFQUFFLHVCQUF1QjtRQUNoQyxXQUFXLEVBQUUsQ0FBQyxJQUFBLG9DQUF3QixFQUFDLDhCQUFpQixDQUFDLENBQUM7S0FDM0Q7Q0FDRixDQUFBIn0=