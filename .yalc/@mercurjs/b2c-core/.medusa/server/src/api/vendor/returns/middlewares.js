"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.vendorReturnsMiddlewares = void 0;
const framework_1 = require("@medusajs/framework");
const seller_return_1 = __importDefault(require("../../../links/seller-return"));
const middlewares_1 = require("../../../shared/infra/http/middlewares");
const query_config_1 = require("./query-config");
const validators_1 = require("./validators");
exports.vendorReturnsMiddlewares = [
    {
        method: ['GET'],
        matcher: '/vendor/returns',
        middlewares: [
            (0, framework_1.validateAndTransformQuery)(validators_1.VendorGetReturnsParams, query_config_1.vendorReturnsQueryConfig.list),
            (0, middlewares_1.filterBySellerId)()
        ]
    },
    {
        method: ['GET'],
        matcher: '/vendor/returns/:id',
        middlewares: [
            (0, framework_1.validateAndTransformQuery)(validators_1.VendorGetReturnsParams, query_config_1.vendorReturnsQueryConfig.retrieve),
            (0, middlewares_1.checkResourceOwnershipByResourceId)({
                entryPoint: seller_return_1.default.entryPoint,
                filterField: 'return_id'
            })
        ]
    },
    {
        method: ['POST'],
        matcher: '/vendor/returns/:id/dismiss-items',
        middlewares: [
            (0, framework_1.validateAndTransformQuery)(validators_1.VendorGetReturnsParams, query_config_1.vendorReturnsQueryConfig.retrieve),
            (0, framework_1.validateAndTransformBody)(validators_1.VendorReceiveReturnItemsSchema),
            (0, middlewares_1.checkResourceOwnershipByResourceId)({
                entryPoint: seller_return_1.default.entryPoint,
                filterField: 'return_id'
            })
        ]
    },
    {
        method: ['POST'],
        matcher: '/vendor/returns/:id/dismiss-items/:action_id',
        middlewares: [
            (0, framework_1.validateAndTransformQuery)(validators_1.VendorGetReturnsParams, query_config_1.vendorReturnsQueryConfig.retrieve),
            (0, framework_1.validateAndTransformBody)(validators_1.VendorReturnsDismissItemsActionSchema),
            (0, middlewares_1.checkResourceOwnershipByResourceId)({
                entryPoint: seller_return_1.default.entryPoint,
                filterField: 'return_id'
            })
        ]
    },
    {
        method: ['DELETE'],
        matcher: '/vendor/returns/:id/dismiss-items/:action_id',
        middlewares: [
            (0, framework_1.validateAndTransformQuery)(validators_1.VendorGetReturnsParams, query_config_1.vendorReturnsQueryConfig.retrieve),
            (0, middlewares_1.checkResourceOwnershipByResourceId)({
                entryPoint: seller_return_1.default.entryPoint,
                filterField: 'return_id'
            })
        ]
    },
    {
        method: ['POST'],
        matcher: '/vendor/returns/:id/receive',
        middlewares: [
            (0, framework_1.validateAndTransformQuery)(validators_1.VendorGetReturnsParams, query_config_1.vendorReturnsQueryConfig.retrieve),
            (0, framework_1.validateAndTransformBody)(validators_1.VendorReceiveReturnSchema),
            (0, middlewares_1.checkResourceOwnershipByResourceId)({
                entryPoint: seller_return_1.default.entryPoint,
                filterField: 'return_id'
            })
        ]
    },
    {
        method: ['POST'],
        matcher: '/vendor/returns/:id/receive/confirm',
        middlewares: [
            (0, framework_1.validateAndTransformQuery)(validators_1.VendorGetReturnsParams, query_config_1.vendorReturnsQueryConfig.retrieve),
            (0, middlewares_1.checkResourceOwnershipByResourceId)({
                entryPoint: seller_return_1.default.entryPoint,
                filterField: 'return_id'
            })
        ]
    },
    {
        method: ['POST'],
        matcher: '/vendor/returns/:id/receive-items',
        middlewares: [
            (0, framework_1.validateAndTransformQuery)(validators_1.VendorGetReturnsParams, query_config_1.vendorReturnsQueryConfig.retrieve),
            (0, framework_1.validateAndTransformBody)(validators_1.VendorReceiveReturnItemsSchema),
            (0, middlewares_1.checkResourceOwnershipByResourceId)({
                entryPoint: seller_return_1.default.entryPoint,
                filterField: 'return_id'
            })
        ]
    },
    {
        method: ['POST'],
        matcher: '/vendor/returns/:id/receive-items/:action_id',
        middlewares: [
            (0, framework_1.validateAndTransformQuery)(validators_1.VendorGetReturnsParams, query_config_1.vendorReturnsQueryConfig.retrieve),
            (0, framework_1.validateAndTransformBody)(validators_1.VendorReturnsReceiveItemsActionSchema),
            (0, middlewares_1.checkResourceOwnershipByResourceId)({
                entryPoint: seller_return_1.default.entryPoint,
                filterField: 'return_id'
            })
        ]
    },
    {
        method: ['DELETE'],
        matcher: '/vendor/returns/:id/receive-items/:action_id',
        middlewares: [
            (0, framework_1.validateAndTransformQuery)(validators_1.VendorGetReturnsParams, query_config_1.vendorReturnsQueryConfig.retrieve),
            (0, middlewares_1.checkResourceOwnershipByResourceId)({
                entryPoint: seller_return_1.default.entryPoint,
                filterField: 'return_id'
            })
        ]
    }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWlkZGxld2FyZXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvYXBpL3ZlbmRvci9yZXR1cm5zL21pZGRsZXdhcmVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLG1EQUk0QjtBQUU1QixpRkFBdUQ7QUFDdkQsd0VBRytDO0FBQy9DLGlEQUF5RDtBQUN6RCw2Q0FNcUI7QUFFUixRQUFBLHdCQUF3QixHQUFzQjtJQUN6RDtRQUNFLE1BQU0sRUFBRSxDQUFDLEtBQUssQ0FBQztRQUNmLE9BQU8sRUFBRSxpQkFBaUI7UUFDMUIsV0FBVyxFQUFFO1lBQ1gsSUFBQSxxQ0FBeUIsRUFDdkIsbUNBQXNCLEVBQ3RCLHVDQUF3QixDQUFDLElBQUksQ0FDOUI7WUFDRCxJQUFBLDhCQUFnQixHQUFFO1NBQ25CO0tBQ0Y7SUFDRDtRQUNFLE1BQU0sRUFBRSxDQUFDLEtBQUssQ0FBQztRQUNmLE9BQU8sRUFBRSxxQkFBcUI7UUFDOUIsV0FBVyxFQUFFO1lBQ1gsSUFBQSxxQ0FBeUIsRUFDdkIsbUNBQXNCLEVBQ3RCLHVDQUF3QixDQUFDLFFBQVEsQ0FDbEM7WUFDRCxJQUFBLGdEQUFrQyxFQUFDO2dCQUNqQyxVQUFVLEVBQUUsdUJBQVksQ0FBQyxVQUFVO2dCQUNuQyxXQUFXLEVBQUUsV0FBVzthQUN6QixDQUFDO1NBQ0g7S0FDRjtJQUNEO1FBQ0UsTUFBTSxFQUFFLENBQUMsTUFBTSxDQUFDO1FBQ2hCLE9BQU8sRUFBRSxtQ0FBbUM7UUFDNUMsV0FBVyxFQUFFO1lBQ1gsSUFBQSxxQ0FBeUIsRUFDdkIsbUNBQXNCLEVBQ3RCLHVDQUF3QixDQUFDLFFBQVEsQ0FDbEM7WUFDRCxJQUFBLG9DQUF3QixFQUFDLDJDQUE4QixDQUFDO1lBQ3hELElBQUEsZ0RBQWtDLEVBQUM7Z0JBQ2pDLFVBQVUsRUFBRSx1QkFBWSxDQUFDLFVBQVU7Z0JBQ25DLFdBQVcsRUFBRSxXQUFXO2FBQ3pCLENBQUM7U0FDSDtLQUNG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