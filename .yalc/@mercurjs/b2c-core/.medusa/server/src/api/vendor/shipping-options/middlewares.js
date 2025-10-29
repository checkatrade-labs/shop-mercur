"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.vendorShippingOptionsMiddlewares = void 0;
const framework_1 = require("@medusajs/framework");
const seller_service_zone_1 = __importDefault(require("../../../links/seller-service-zone"));
const seller_shipping_option_1 = __importDefault(require("../../../links/seller-shipping-option"));
const middlewares_1 = require("../../../shared/infra/http/middlewares");
const query_config_1 = require("./query-config");
const validators_1 = require("./validators");
exports.vendorShippingOptionsMiddlewares = [
    {
        method: ['GET'],
        matcher: '/vendor/shipping-options',
        middlewares: [
            (0, framework_1.validateAndTransformQuery)(validators_1.VendorGetShippingFindParams, query_config_1.vendorShippingOptionQueryConfig.list),
            (0, middlewares_1.filterBySellerId)()
        ]
    },
    {
        method: ['POST'],
        matcher: '/vendor/shipping-options',
        middlewares: [
            (0, framework_1.validateAndTransformBody)(validators_1.VendorCreateShippingOption),
            (0, middlewares_1.checkResourceOwnershipByResourceId)({
                entryPoint: seller_service_zone_1.default.entryPoint,
                filterField: 'service_zone_id',
                resourceId: (req) => req.validatedBody.service_zone_id
            }),
            (0, framework_1.validateAndTransformQuery)(validators_1.VendorGetShippingFindParams, query_config_1.vendorShippingOptionQueryConfig.retrieve)
        ]
    },
    {
        method: ['GET'],
        matcher: '/vendor/shipping-options/:id',
        middlewares: [
            (0, middlewares_1.checkResourceOwnershipByResourceId)({
                entryPoint: seller_shipping_option_1.default.entryPoint,
                filterField: 'shipping_option_id'
            }),
            (0, framework_1.validateAndTransformQuery)(validators_1.VendorGetShippingFindParams, query_config_1.vendorShippingOptionQueryConfig.retrieve)
        ]
    },
    {
        method: ['POST'],
        matcher: '/vendor/shipping-options/:id',
        middlewares: [
            (0, middlewares_1.checkResourceOwnershipByResourceId)({
                entryPoint: seller_shipping_option_1.default.entryPoint,
                filterField: 'shipping_option_id'
            }),
            (0, framework_1.validateAndTransformBody)(validators_1.VendorUpdateShippingOption),
            (0, framework_1.validateAndTransformQuery)(validators_1.VendorGetShippingFindParams, query_config_1.vendorShippingOptionQueryConfig.retrieve)
        ]
    },
    {
        method: ['DELETE'],
        matcher: '/vendor/shipping-options/:id',
        middlewares: [
            (0, middlewares_1.checkResourceOwnershipByResourceId)({
                entryPoint: seller_shipping_option_1.default.entryPoint,
                filterField: 'shipping_option_id'
            })
        ]
    }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWlkZGxld2FyZXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvYXBpL3ZlbmRvci9zaGlwcGluZy1vcHRpb25zL21pZGRsZXdhcmVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLG1EQUc0QjtBQUc1Qiw2RkFBc0U7QUFDdEUsbUdBQTRFO0FBQzVFLHdFQUcrQztBQUMvQyxpREFBZ0U7QUFDaEUsNkNBS3FCO0FBRVIsUUFBQSxnQ0FBZ0MsR0FBc0I7SUFDakU7UUFDRSxNQUFNLEVBQUUsQ0FBQyxLQUFLLENBQUM7UUFDZixPQUFPLEVBQUUsMEJBQTBCO1FBQ25DLFdBQVcsRUFBRTtZQUNYLElBQUEscUNBQXlCLEVBQ3ZCLHdDQUEyQixFQUMzQiw4Q0FBK0IsQ0FBQyxJQUFJLENBQ3JDO1lBQ0QsSUFBQSw4QkFBZ0IsR0FBRTtTQUNuQjtLQUNGO0lBQ0Q7UUFDRSxNQUFNLEVBQUUsQ0FBQyxNQUFNLENBQUM7UUFDaEIsT0FBTyxFQUFFLDBCQUEwQjtRQUNuQyxXQUFXLEVBQUU7WUFDWCxJQUFBLG9DQUF3QixFQUFDLHVDQUEwQixDQUFDO1lBQ3BELElBQUEsZ0RBQWtDLEVBQWlDO2dCQUNqRSxVQUFVLEVBQUUsNkJBQXFCLENBQUMsVUFBVTtnQkFDNUMsV0FBVyxFQUFFLGlCQUFpQjtnQkFDOUIsVUFBVSxFQUFFLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLGVBQWU7YUFDdkQsQ0FBQztZQUNGLElBQUEscUNBQXlCLEVBQ3ZCLHdDQUEyQixFQUMzQiw4Q0FBK0IsQ0FBQyxRQUFRLENBQ3pDO1NBQ0Y7S0FDRjtJQUNEO1FBQ0UsTUFBTSxFQUFFLENBQUMsS0FBSyxDQUFDO1FBQ2YsT0FBTyxFQUFFLDhCQUE4QjtRQUN2QyxXQUFXLEVBQUU7WUFDWCxJQUFBLGdEQUFrQyxFQUFDO2dCQUNqQyxVQUFVLEVBQUUsZ0NBQXdCLENBQUMsVUFBVTtnQkFDL0MsV0FBVyxFQUFFLG9CQUFvQjthQUNsQyxDQUFDO1lBQ0YsSUFBQSxxQ0FBeUIsRUFDdkIsd0NBQTJCLEVBQzNCLDhDQUErQixDQUFDLFFBQVEsQ0FDekM7U0FDRjtLQUNGO0lBQ0Q7UUFDRSxNQUFNLEVBQUUsQ0FBQyxNQUFNLENBQUM7UUFDaEIsT0FBTyxFQUFFLDhCQUE4QjtRQUN2QyxXQUFXLEVBQUU7WUFDWCxJQUFBLGdEQUFrQyxFQUFDO2dCQUNqQyxVQUFVLEVBQUUsZ0NBQXdCLENBQUMsVUFBVTtnQkFDL0MsV0FBVyxFQUFFLG9CQUFvQjthQUNsQyxDQUFDO1lBQ0YsSUFBQSxvQ0FBd0IsRUFBQyx1Q0FBMEIsQ0FBQztZQUNwRCxJQUFBLHFDQUF5QixFQUN2Qix3Q0FBMkIsRUFDM0IsOENBQStCLENBQUMsUUFBUSxDQUN6QztTQUNGO0tBQ0Y7SUFDRDtRQUNFLE1BQU0sRUFBRSxDQUFDLFFBQVEsQ0FBQztRQUNsQixPQUFPLEVBQUUsOEJBQThCO1FBQ3ZDLFdBQVcsRUFBRTtZQUNYLElBQUEsZ0RBQWtDLEVBQUM7Z0JBQ2pDLFVBQVUsRUFBRSxnQ0FBd0IsQ0FBQyxVQUFVO2dCQUMvQyxXQUFXLEVBQUUsb0JBQW9CO2FBQ2xDLENBQUM7U0FDSDtLQUNGO0NBQ0YsQ0FBQSJ9