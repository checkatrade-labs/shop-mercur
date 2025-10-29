"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.vendorOrderMiddlewares = void 0;
const framework_1 = require("@medusajs/framework");
const seller_order_1 = __importDefault(require("../../../links/seller-order"));
const seller_stock_location_1 = __importDefault(require("../../../links/seller-stock-location"));
const middlewares_1 = require("../../../shared/infra/http/middlewares");
const query_config_1 = require("./query-config");
const validators_1 = require("./validators");
const transformPaymentFilters = () => {
    return async (req, _res, next) => {
        if (!req.queryConfig || !req.queryConfig.fields) {
            return next();
        }
        req.queryConfig.fields = req.queryConfig.fields
            .filter((f) => !f.includes('payment_collections'))
            .concat(['split_order_payment.*']);
        return next();
    };
};
exports.vendorOrderMiddlewares = [
    {
        method: ['GET'],
        matcher: '/vendor/orders',
        middlewares: [
            (0, framework_1.validateAndTransformQuery)(validators_1.VendorGetOrderParams, query_config_1.vendorOrderQueryConfig.list),
            transformPaymentFilters()
        ]
    },
    {
        method: ['GET'],
        matcher: '/vendor/orders/:id',
        middlewares: [
            (0, framework_1.validateAndTransformQuery)(validators_1.VendorGetOrderParams, query_config_1.vendorOrderQueryConfig.retrieve),
            transformPaymentFilters(),
            (0, middlewares_1.checkResourceOwnershipByResourceId)({
                entryPoint: seller_order_1.default.entryPoint,
                filterField: 'order_id'
            })
        ]
    },
    {
        method: ['POST'],
        matcher: '/vendor/orders/:id/cancel',
        middlewares: [
            (0, framework_1.validateAndTransformQuery)(validators_1.VendorGetOrderParams, query_config_1.vendorOrderQueryConfig.retrieve),
            transformPaymentFilters(),
            (0, middlewares_1.checkResourceOwnershipByResourceId)({
                entryPoint: seller_order_1.default.entryPoint,
                filterField: 'order_id'
            })
        ]
    },
    {
        method: ['POST'],
        matcher: '/vendor/orders/:id/complete',
        middlewares: [
            (0, framework_1.validateAndTransformQuery)(validators_1.VendorGetOrderParams, query_config_1.vendorOrderQueryConfig.retrieve),
            transformPaymentFilters(),
            (0, middlewares_1.checkResourceOwnershipByResourceId)({
                entryPoint: seller_order_1.default.entryPoint,
                filterField: 'order_id'
            })
        ]
    },
    {
        method: ['POST'],
        matcher: '/vendor/orders/:id/fulfillments',
        middlewares: [
            (0, framework_1.validateAndTransformBody)(validators_1.VendorCreateFulfillment),
            (0, middlewares_1.checkResourceOwnershipByResourceId)({
                entryPoint: seller_order_1.default.entryPoint,
                filterField: 'order_id'
            }),
            (0, middlewares_1.checkResourceOwnershipByResourceId)({
                entryPoint: seller_stock_location_1.default.entryPoint,
                filterField: 'stock_location_id',
                resourceId: (req) => req.validatedBody.location_id
            })
        ]
    },
    {
        method: ['GET'],
        matcher: '/vendor/orders/:id/changes',
        middlewares: [
            (0, framework_1.validateAndTransformQuery)(validators_1.VendorGetOrderChangesParams, query_config_1.vendorOrderChangesQueryConfig.list),
            transformPaymentFilters(),
            (0, middlewares_1.checkResourceOwnershipByResourceId)({
                entryPoint: seller_order_1.default.entryPoint,
                filterField: 'order_id'
            })
        ]
    },
    {
        method: ['POST'],
        matcher: '/vendor/orders/:id/fulfillments/:fulfillment_id/cancel',
        middlewares: [
            (0, framework_1.validateAndTransformQuery)(validators_1.VendorGetOrderParams, query_config_1.vendorOrderQueryConfig.retrieve),
            transformPaymentFilters(),
            (0, middlewares_1.checkResourceOwnershipByResourceId)({
                entryPoint: seller_order_1.default.entryPoint,
                filterField: 'order_id'
            })
        ]
    },
    {
        method: ['POST'],
        matcher: '/vendor/orders/:id/fulfillments/:fulfillment_id/mark-as-delivered',
        middlewares: [
            (0, framework_1.validateAndTransformQuery)(validators_1.VendorGetOrderParams, query_config_1.vendorOrderQueryConfig.retrieve),
            transformPaymentFilters(),
            (0, middlewares_1.checkResourceOwnershipByResourceId)({
                entryPoint: seller_order_1.default.entryPoint,
                filterField: 'order_id'
            })
        ]
    },
    {
        method: ['POST'],
        matcher: '/vendor/orders/:id/fulfillments/:fulfillment_id/shipments',
        middlewares: [
            (0, framework_1.validateAndTransformBody)(validators_1.VendorOrderCreateShipment),
            (0, framework_1.validateAndTransformQuery)(validators_1.VendorGetOrderParams, query_config_1.vendorOrderQueryConfig.retrieve),
            transformPaymentFilters(),
            (0, middlewares_1.checkResourceOwnershipByResourceId)({
                entryPoint: seller_order_1.default.entryPoint,
                filterField: 'order_id'
            })
        ]
    }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWlkZGxld2FyZXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvYXBpL3ZlbmRvci9vcmRlcnMvbWlkZGxld2FyZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBRUEsbURBTzRCO0FBRTVCLCtFQUF5RDtBQUN6RCxpR0FBcUU7QUFDckUsd0VBQTJGO0FBQzNGLGlEQUd1QjtBQUN2Qiw2Q0FNcUI7QUFFckIsTUFBTSx1QkFBdUIsR0FBRyxHQUFHLEVBQUU7SUFDbkMsT0FBTyxLQUFLLEVBQ1YsR0FBa0IsRUFDbEIsSUFBb0IsRUFDcEIsSUFBa0IsRUFDbEIsRUFBRTtRQUNGLElBQUksQ0FBQyxHQUFHLENBQUMsV0FBVyxJQUFJLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxNQUFNLEVBQUUsQ0FBQztZQUNoRCxPQUFPLElBQUksRUFBRSxDQUFBO1FBQ2YsQ0FBQztRQUVELEdBQUcsQ0FBQyxXQUFXLENBQUMsTUFBTSxHQUFHLEdBQUcsQ0FBQyxXQUFXLENBQUMsTUFBTTthQUM1QyxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO2FBQ2pELE1BQU0sQ0FBQyxDQUFDLHVCQUF1QixDQUFDLENBQUMsQ0FBQTtRQUVwQyxPQUFPLElBQUksRUFBRSxDQUFBO0lBQ2YsQ0FBQyxDQUFBO0FBQ0gsQ0FBQyxDQUFBO0FBRVksUUFBQSxzQkFBc0IsR0FBc0I7SUFDdkQ7UUFDRSxNQUFNLEVBQUUsQ0FBQyxLQUFLLENBQUM7UUFDZixPQUFPLEVBQUUsZ0JBQWdCO1FBQ3pCLFdBQVcsRUFBRTtZQUNYLElBQUEscUNBQXlCLEVBQ3ZCLGlDQUFvQixFQUNwQixxQ0FBc0IsQ0FBQyxJQUFJLENBQzVCO1lBQ0QsdUJBQXVCLEVBQUU7U0FDMUI7S0FDRjtJQUNEO1FBQ0UsTUFBTSxFQUFFLENBQUMsS0FBSyxDQUFDO1FBQ2YsT0FBTyxFQUFFLG9CQUFvQjtRQUM3QixXQUFXLEVBQUU7WUFDWCxJQUFBLHFDQUF5QixFQUN2QixpQ0FBb0IsRUFDcEIscUNBQXNCLENBQUMsUUFBUSxDQUNoQztZQUNELHVCQUF1QixFQUFFO1lBQ3pCLElBQUEsZ0RBQWtDLEVBQUM7Z0JBQ2pDLFVBQVUsRUFBRSxzQkFBZSxDQUFDLFVBQVU7Z0JBQ3RDLFdBQVcsRUFBRSxVQUFVO2FBQ3hCLENBQUM7U0FDSDtLQUNGO0lBQ0Q7UUFDRSxNQUFNLEVBQUUsQ0FBQyxNQUFNLENBQUM7UUFDaEIsT0FBTyxFQUFFLDJCQUEyQjtRQUNwQyxXQUFXLEVBQUU7WUFDWCxJQUFBLHFDQUF5QixFQUN2QixpQ0FBb0IsRUFDcEIscUNBQXNCLENBQUMsUUFBUSxDQUNoQztZQUNELHVCQUF1QixFQUFFO1lBQ3pCLElBQUEsZ0RBQWtDLEVBQUM7Z0JBQ2pDLFVBQVUsRUFBRSxzQkFBZSxDQUFDLFVBQVU7Z0JBQ3RDLFdBQVcsRUFBRSxVQUFVO2FBQ3hCLENBQUM7U0FDSDtLQUNGO0lBQ0Q7UUFDRSxNQUFNLEVBQUUsQ0FBQyxNQUFNLENBQUM7UUFDaEIsT0FBTyxFQUFFLDZCQUE2QjtRQUN0QyxXQUFXLEVBQUU7WUFDWCxJQUFBLHFDQUF5QixFQUN2QixpQ0FBb0IsRUFDcEIscUNBQXNCLENBQUMsUUFBUSxDQUNoQztZQUNELHVCQUF1QixFQUFFO1lBQ3pCLElBQUEsZ0RBQWtDLEVBQUM7Z0JBQ2pDLFVBQVUsRUFBRSxzQkFBZSxDQUFDLFVBQVU7Z0JBQ3RDLFdBQVcsRUFBRSxVQUFVO2FBQ3hCLENBQUM7U0FDSDtLQUNGO0lBQ0Q7UUFDRSxNQUFNLEVBQUUsQ0FBQyxNQUFNLENBQUM7UUFDaEIsT0FBTyxFQUFFLGlDQUFpQztRQUMxQyxXQUFXLEVBQUU7WUFDWCxJQUFBLG9DQUF3QixFQUFDLG9DQUF1QixDQUFDO1lBQ2pELElBQUEsZ0RBQWtDLEVBQUM7Z0JBQ2pDLFVBQVUsRUFBRSxzQkFBZSxDQUFDLFVBQVU7Z0JBQ3RDLFdBQVcsRUFBRSxVQUFVO2FBQ3hCLENBQUM7WUFDRixJQUFBLGdEQUFrQyxFQUFDO2dCQUNqQyxVQUFVLEVBQUUsK0JBQWtCLENBQUMsVUFBVTtnQkFDekMsV0FBVyxFQUFFLG1CQUFtQjtnQkFDaEMsVUFBVSxFQUFFLENBQ1YsR0FBNEQsRUFDNUQsRUFBRSxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsV0FBVzthQUNuQyxDQUFDO1NBQ0g7S0FDRjtJQUNEO1FBQ0UsTUFBTSxFQUFFLENBQUMsS0FBSyxDQUFDO1FBQ2YsT0FBTyxFQUFFLDRCQUE0QjtRQUNyQyxXQUFXLEVBQUU7WUFDWCxJQUFBLHFDQUF5QixFQUN2Qix3Q0FBMkIsRUFDM0IsNENBQTZCLENBQUMsSUFBSSxDQUNuQztZQUNELHVCQUF1QixFQUFFO1lBQ3pCLElBQUEsZ0RBQWtDLEVBQUM7Z0JBQ2pDLFVBQVUsRUFBRSxzQkFBZSxDQUFDLFVBQVU7Z0JBQ3RDLFdBQVcsRUFBRSxVQUFVO2FBQ3hCLENBQUM7U0FDSDtLQUNGO0lBQ0Q7UUFDRSxNQUFNLEVBQUUsQ0FBQyxNQUFNLENBQUM7UUFDaEIsT0FBTyxFQUFFLHdEQUF3RDtRQUNqRSxXQUFXLEVBQUU7WUFDWCxJQUFBLHFDQUF5QixFQUN2QixpQ0FBb0IsRUFDcEIscUNBQXNCLENBQUMsUUFBUSxDQUNoQztZQUNELHVCQUF1QixFQUFFO1lBQ3pCLElBQUEsZ0RBQWtDLEVBQUM7Z0JBQ2pDLFVBQVUsRUFBRSxzQkFBZSxDQUFDLFVBQVU7Z0JBQ3RDLFdBQVcsRUFBRSxVQUFVO2FBQ3hCLENBQUM7U0FDSDtLQUNGO0lBQ0Q7UUFDRSxNQUFNLEVBQUUsQ0FBQyxNQUFNLENBQUM7UUFDaEIsT0FBTyxFQUNMLG1FQUFtRTtRQUNyRSxXQUFXLEVBQUU7WUFDWCxJQUFBLHFDQUF5QixFQUN2QixpQ0FBb0IsRUFDcEIscUNBQXNCLENBQUMsUUFBUSxDQUNoQztZQUNELHVCQUF1QixFQUFFO1lBQ3pCLElBQUEsZ0RBQWtDLEVBQUM7Z0JBQ2pDLFVBQVUsRUFBRSxzQkFBZSxDQUFDLFVBQVU7Z0JBQ3RDLFdBQVcsRUFBRSxVQUFVO2FBQ3hCLENBQUM7U0FDSDtLQUNGO0lBQ0Q7UUFDRSxNQUFNLEVBQUUsQ0FBQyxNQUFNLENBQUM7UUFDaEIsT0FBTyxFQUFFLDJEQUEyRDtRQUNwRSxXQUFXLEVBQUU7WUFDWCxJQUFBLG9DQUF3QixFQUFDLHNDQUF5QixDQUFDO1lBQ25ELElBQUEscUNBQXlCLEVBQ3ZCLGlDQUFvQixFQUNwQixxQ0FBc0IsQ0FBQyxRQUFRLENBQ2hDO1lBQ0QsdUJBQXVCLEVBQUU7WUFDekIsSUFBQSxnREFBa0MsRUFBQztnQkFDakMsVUFBVSxFQUFFLHNCQUFlLENBQUMsVUFBVTtnQkFDdEMsV0FBVyxFQUFFLFVBQVU7YUFDeEIsQ0FBQztTQUNIO0tBQ0Y7Q0FDRixDQUFBIn0=