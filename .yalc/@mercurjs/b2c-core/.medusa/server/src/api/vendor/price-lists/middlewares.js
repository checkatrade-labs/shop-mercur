"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.vendorPriceListsMiddlewares = void 0;
const framework_1 = require("@medusajs/framework");
const seller_price_list_1 = __importDefault(require("../../../links/seller-price-list"));
const middlewares_1 = require("../../../shared/infra/http/middlewares");
const query_config_1 = require("../products/query-config");
const query_config_2 = require("./query-config");
const validators_1 = require("./validators");
exports.vendorPriceListsMiddlewares = [
    {
        method: ['GET'],
        matcher: '/vendor/price-lists',
        middlewares: [
            (0, framework_1.validateAndTransformQuery)(validators_1.VendorGetPriceListPricesParams, query_config_2.vendorPriceListQueryConfig.list),
            (0, middlewares_1.filterBySellerId)()
        ]
    },
    {
        method: ['POST'],
        matcher: '/vendor/price-lists',
        middlewares: [
            (0, framework_1.validateAndTransformBody)(validators_1.VendorCreatePriceList),
            (0, framework_1.validateAndTransformQuery)(validators_1.VendorGetPriceListPricesParams, query_config_2.vendorPriceListQueryConfig.retrieve)
        ]
    },
    {
        method: ['GET'],
        matcher: '/vendor/price-lists/:id',
        middlewares: [
            (0, framework_1.validateAndTransformQuery)(validators_1.VendorGetPriceListPricesParams, query_config_2.vendorPriceListQueryConfig.retrieve),
            (0, middlewares_1.checkResourceOwnershipByResourceId)({
                entryPoint: seller_price_list_1.default.entryPoint,
                filterField: 'price_list_id'
            })
        ]
    },
    {
        method: ['DELETE'],
        matcher: '/vendor/price-lists/:id',
        middlewares: [
            (0, middlewares_1.checkResourceOwnershipByResourceId)({
                entryPoint: seller_price_list_1.default.entryPoint,
                filterField: 'price_list_id'
            })
        ]
    },
    {
        method: ['POST'],
        matcher: '/vendor/price-lists/:id',
        middlewares: [
            (0, framework_1.validateAndTransformQuery)(validators_1.VendorGetPriceListPricesParams, query_config_2.vendorPriceListQueryConfig.retrieve),
            (0, framework_1.validateAndTransformBody)(validators_1.VendorUpdatePriceList),
            (0, middlewares_1.checkResourceOwnershipByResourceId)({
                entryPoint: seller_price_list_1.default.entryPoint,
                filterField: 'price_list_id'
            })
        ]
    },
    {
        method: ['POST'],
        matcher: '/vendor/price-lists/:id/prices',
        middlewares: [
            (0, framework_1.validateAndTransformQuery)(validators_1.VendorGetPriceListPricesParams, query_config_2.vendorPriceListQueryConfig.retrieve),
            (0, framework_1.validateAndTransformBody)(validators_1.VendorCreatePriceListPrice),
            (0, middlewares_1.checkResourceOwnershipByResourceId)({
                entryPoint: seller_price_list_1.default.entryPoint,
                filterField: 'price_list_id'
            })
        ]
    },
    {
        method: ['GET'],
        matcher: '/vendor/price-lists/:id/products',
        middlewares: [
            (0, framework_1.validateAndTransformQuery)(validators_1.VendorGetPriceListProductsParams, query_config_1.vendorProductQueryConfig.list),
            (0, middlewares_1.checkResourceOwnershipByResourceId)({
                entryPoint: seller_price_list_1.default.entryPoint,
                filterField: 'price_list_id'
            })
        ]
    },
    {
        method: ['POST'],
        matcher: '/vendor/price-lists/:id/products',
        middlewares: [
            (0, framework_1.validateAndTransformBody)(validators_1.VendorUpdateProductsOnPriceList),
            (0, framework_1.validateAndTransformQuery)(validators_1.VendorGetPriceListPricesParams, query_config_2.vendorPriceListQueryConfig.retrieve),
            (0, middlewares_1.checkResourceOwnershipByResourceId)({
                entryPoint: seller_price_list_1.default.entryPoint,
                filterField: 'price_list_id'
            })
        ]
    },
    {
        method: ['DELETE'],
        matcher: '/vendor/price-lists/:id/prices/:price_id',
        middlewares: [
            (0, middlewares_1.checkResourceOwnershipByResourceId)({
                entryPoint: seller_price_list_1.default.entryPoint,
                filterField: 'price_list_id'
            })
        ]
    }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWlkZGxld2FyZXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvYXBpL3ZlbmRvci9wcmljZS1saXN0cy9taWRkbGV3YXJlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxtREFJNEI7QUFFNUIseUZBQThEO0FBQzlELHdFQUcrQztBQUMvQywyREFBbUU7QUFDbkUsaURBQTJEO0FBQzNELDZDQU9xQjtBQUVSLFFBQUEsMkJBQTJCLEdBQXNCO0lBQzVEO1FBQ0UsTUFBTSxFQUFFLENBQUMsS0FBSyxDQUFDO1FBQ2YsT0FBTyxFQUFFLHFCQUFxQjtRQUM5QixXQUFXLEVBQUU7WUFDWCxJQUFBLHFDQUF5QixFQUN2QiwyQ0FBOEIsRUFDOUIseUNBQTBCLENBQUMsSUFBSSxDQUNoQztZQUNELElBQUEsOEJBQWdCLEdBQUU7U0FDbkI7S0FDRjtJQUNEO1FBQ0UsTUFBTSxFQUFFLENBQUMsTUFBTSxDQUFDO1FBQ2hCLE9BQU8sRUFBRSxxQkFBcUI7UUFDOUIsV0FBVyxFQUFFO1lBQ1gsSUFBQSxvQ0FBd0IsRUFBQyxrQ0FBcUIsQ0FBQztZQUMvQyxJQUFBLHFDQUF5QixFQUN2QiwyQ0FBOEIsRUFDOUIseUNBQTBCLENBQUMsUUFBUSxDQUNwQztTQUNGO0tBQ0Y7SUFDRDtRQUNFLE1BQU0sRUFBRSxDQUFDLEtBQUssQ0FBQztRQUNmLE9BQU8sRUFBRSx5QkFBeUI7UUFDbEMsV0FBVyxFQUFFO1lBQ1gsSUFBQSxxQ0FBeUIsRUFDdkIsMkNBQThCLEVBQzlCLHlDQUEwQixDQUFDLFFBQVEsQ0FDcEM7WUFDRCxJQUFBLGdEQUFrQyxFQUFDO2dCQUNqQyxVQUFVLEVBQUUsMkJBQWUsQ0FBQyxVQUFVO2dCQUN0QyxXQUFXLEVBQUUsZUFBZTthQUM3QixDQUFDO1NBQ0g7S0FDRjtJQUNEO1FBQ0UsTUFBTSxFQUFFLENBQUMsUUFBUSxDQUFDO1FBQ2xCLE9BQU8sRUFBRSx5QkFBeUI7UUFDbEMsV0FBVyxFQUFFO1lBQ1gsSUFBQSxnREFBa0MsRUFBQztnQkFDakMsVUFBVSxFQUFFLDJCQUFlLENBQUMsVUFBVTtnQkFDdEMsV0FBVyxFQUFFLGVBQWU7YUFDN0IsQ0FBQztTQUNIO0tBQ0Y7SUFDRDtRQUNFLE1BQU0sRUFBRSxDQUFDLE1BQU0sQ0FBQztRQUNoQixPQUFPLEVBQUUseUJBQXlCO1FBQ2xDLFdBQVcsRUFBRTtZQUNYLElBQUEscUNBQXlCLEVBQ3ZCLDJDQUE4QixFQUM5Qix5Q0FBMEIsQ0FBQyxRQUFRLENBQ3BDO1lBQ0QsSUFBQSxvQ0FBd0IsRUFBQyxrQ0FBcUIsQ0FBQztZQUMvQyxJQUFBLGdEQUFrQyxFQUFDO2dCQUNqQyxVQUFVLEVBQUUsMkJBQWUsQ0FBQyxVQUFVO2dCQUN0QyxXQUFXLEVBQUUsZUFBZTthQUM3QixDQUFDO1NBQ0g7S0FDRjtJQUNEO1FBQ0UsTUFBTSxFQUFFLENBQUMsTUFBTSxDQUFDO1FBQ2hCLE9BQU8sRUFBRSxnQ0FBZ0M7UUFDekMsV0FBVyxFQUFFO1lBQ1gsSUFBQSxxQ0FBeUIsRUFDdkIsMkNBQThCLEVBQzlCLHlDQUEwQixDQUFDLFFBQVEsQ0FDcEM7WUFDRCxJQUFBLG9DQUF3QixFQUFDLHVDQUEwQixDQUFDO1lBQ3BELElBQUEsZ0RBQWtDLEVBQUM7Z0JBQ2pDLFVBQVUsRUFBRSwyQkFBZSxDQUFDLFVBQVU7Z0JBQ3RDLFdBQVcsRUFBRSxlQUFlO2FBQzdCLENBQUM7U0FDSDtLQUNGO0lBQ0Q7UUFDRSxNQUFNLEVBQUUsQ0FBQyxLQUFLLENBQUM7UUFDZixPQUFPLEVBQUUsa0NBQWtDO1FBQzNDLFdBQVcsRUFBRTtZQUNYLElBQUEscUNBQXlCLEVBQ3ZCLDZDQUFnQyxFQUNoQyx1Q0FBd0IsQ0FBQyxJQUFJLENBQzlCO1lBQ0QsSUFBQSxnREFBa0MsRUFBQztnQkFDakMsVUFBVSxFQUFFLDJCQUFlLENBQUMsVUFBVTtnQkFDdEMsV0FBVyxFQUFFLGVBQWU7YUFDN0IsQ0FBQztTQUNIO0tBQ0Y7SUFDRDtRQUNFLE1BQU0sRUFBRSxDQUFDLE1BQU0sQ0FBQztRQUNoQixPQUFPLEVBQUUsa0NBQWtDO1FBQzNDLFdBQVcsRUFBRTtZQUNYLElBQUEsb0NBQXdCLEVBQUMsNENBQStCLENBQUM7WUFDekQsSUFBQSxxQ0FBeUIsRUFDdkIsMkNBQThCLEVBQzlCLHlDQUEwQixDQUFDLFFBQVEsQ0FDcEM7WUFDRCxJQUFBLGdEQUFrQyxFQUFDO2dCQUNqQyxVQUFVLEVBQUUsMkJBQWUsQ0FBQyxVQUFVO2dCQUN0QyxXQUFXLEVBQUUsZUFBZTthQUM3QixDQUFDO1NBQ0g7S0FDRjtJQUNEO1FBQ0UsTUFBTSxFQUFFLENBQUMsUUFBUSxDQUFDO1FBQ2xCLE9BQU8sRUFBRSwwQ0FBMEM7UUFDbkQsV0FBVyxFQUFFO1lBQ1gsSUFBQSxnREFBa0MsRUFBQztnQkFDakMsVUFBVSxFQUFFLDJCQUFlLENBQUMsVUFBVTtnQkFDdEMsV0FBVyxFQUFFLGVBQWU7YUFDN0IsQ0FBQztTQUNIO0tBQ0Y7Q0FDRixDQUFBIn0=