"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.vendorStockLocationsMiddlewares = void 0;
const framework_1 = require("@medusajs/framework");
const validators_1 = require("@medusajs/medusa/api/utils/validators");
const seller_stock_location_1 = __importDefault(require("../../../links/seller-stock-location"));
const middlewares_1 = require("../../../shared/infra/http/middlewares");
const query_config_1 = require("./query-config");
const validators_2 = require("./validators");
exports.vendorStockLocationsMiddlewares = [
    /* Stock Location */
    {
        method: ['GET'],
        matcher: '/vendor/stock-locations',
        middlewares: [
            (0, framework_1.validateAndTransformQuery)(validators_2.VendorGetStockLocationParams, query_config_1.vendorStockLocationQueryConfig.list),
            (0, middlewares_1.filterBySellerId)()
        ]
    },
    {
        method: ['POST'],
        matcher: '/vendor/stock-locations',
        middlewares: [
            (0, framework_1.validateAndTransformBody)(validators_2.VendorCreateStockLocation),
            (0, framework_1.validateAndTransformQuery)(validators_2.VendorGetStockLocationParams, query_config_1.vendorStockLocationQueryConfig.retrieve)
        ]
    },
    {
        method: ['GET'],
        matcher: '/vendor/stock-locations/:id',
        middlewares: [
            (0, middlewares_1.checkResourceOwnershipByResourceId)({
                entryPoint: seller_stock_location_1.default.entryPoint,
                filterField: 'stock_location_id'
            }),
            (0, framework_1.validateAndTransformQuery)(validators_2.VendorGetStockLocationParams, query_config_1.vendorStockLocationQueryConfig.retrieve)
        ]
    },
    {
        method: ['POST'],
        matcher: '/vendor/stock-locations/:id',
        middlewares: [
            (0, middlewares_1.checkResourceOwnershipByResourceId)({
                entryPoint: seller_stock_location_1.default.entryPoint,
                filterField: 'stock_location_id'
            }),
            (0, framework_1.validateAndTransformBody)(validators_2.VendorUpdateStockLocation),
            (0, framework_1.validateAndTransformQuery)(validators_2.VendorGetStockLocationParams, query_config_1.vendorStockLocationQueryConfig.retrieve)
        ]
    },
    {
        method: ['POST'],
        matcher: '/vendor/stock-locations/:id/fulfillment-providers',
        middlewares: [
            (0, middlewares_1.checkResourceOwnershipByResourceId)({
                entryPoint: seller_stock_location_1.default.entryPoint,
                filterField: 'stock_location_id'
            }),
            (0, framework_1.validateAndTransformBody)((0, validators_1.createLinkBody)()),
            (0, framework_1.validateAndTransformQuery)(validators_2.VendorGetStockLocationParams, query_config_1.vendorStockLocationQueryConfig.retrieve)
        ]
    },
    {
        method: ['POST'],
        matcher: '/vendor/stock-locations/:id/sales-channels',
        middlewares: [
            (0, middlewares_1.checkResourceOwnershipByResourceId)({
                entryPoint: seller_stock_location_1.default.entryPoint,
                filterField: 'stock_location_id'
            }),
            (0, framework_1.validateAndTransformBody)((0, validators_1.createLinkBody)()),
            (0, framework_1.validateAndTransformQuery)(validators_2.VendorGetStockLocationParams, query_config_1.vendorStockLocationQueryConfig.retrieve)
        ]
    },
    /* Stock Location Fulfillment Set */
    {
        method: ['POST'],
        matcher: '/vendor/stock-locations/:id/fulfillment-sets',
        middlewares: [
            (0, middlewares_1.checkResourceOwnershipByResourceId)({
                entryPoint: seller_stock_location_1.default.entryPoint,
                filterField: 'stock_location_id'
            }),
            (0, framework_1.validateAndTransformBody)(validators_2.VendorCreateStockLocationFulfillmentSet),
            (0, framework_1.validateAndTransformQuery)(validators_2.VendorGetStockLocationParams, query_config_1.vendorStockLocationQueryConfig.retrieve)
        ]
    }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWlkZGxld2FyZXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvYXBpL3ZlbmRvci9zdG9jay1sb2NhdGlvbnMvbWlkZGxld2FyZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsbURBSTRCO0FBQzVCLHNFQUFzRTtBQUV0RSxpR0FBMEU7QUFDMUUsd0VBRytDO0FBQy9DLGlEQUErRDtBQUMvRCw2Q0FLcUI7QUFFUixRQUFBLCtCQUErQixHQUFzQjtJQUNoRSxvQkFBb0I7SUFDcEI7UUFDRSxNQUFNLEVBQUUsQ0FBQyxLQUFLLENBQUM7UUFDZixPQUFPLEVBQUUseUJBQXlCO1FBQ2xDLFdBQVcsRUFBRTtZQUNYLElBQUEscUNBQXlCLEVBQ3ZCLHlDQUE0QixFQUM1Qiw2Q0FBOEIsQ0FBQyxJQUFJLENBQ3BDO1lBQ0QsSUFBQSw4QkFBZ0IsR0FBRTtTQUNuQjtLQUNGO0lBQ0Q7UUFDRSxNQUFNLEVBQUUsQ0FBQyxNQUFNLENBQUM7UUFDaEIsT0FBTyxFQUFFLHlCQUF5QjtRQUNsQyxXQUFXLEVBQUU7WUFDWCxJQUFBLG9DQUF3QixFQUFDLHNDQUF5QixDQUFDO1lBQ25ELElBQUEscUNBQXlCLEVBQ3ZCLHlDQUE0QixFQUM1Qiw2Q0FBOEIsQ0FBQyxRQUFRLENBQ3hDO1NBQ0Y7S0FDRjtJQUNEO1FBQ0UsTUFBTSxFQUFFLENBQUMsS0FBSyxDQUFDO1FBQ2YsT0FBTyxFQUFFLDZCQUE2QjtRQUN0QyxXQUFXLEVBQUU7WUFDWCxJQUFBLGdEQUFrQyxFQUFDO2dCQUNqQyxVQUFVLEVBQUUsK0JBQXVCLENBQUMsVUFBVTtnQkFDOUMsV0FBVyxFQUFFLG1CQUFtQjthQUNqQyxDQUFDO1lBQ0YsSUFBQSxxQ0FBeUIsRUFDdkIseUNBQTRCLEVBQzVCLDZDQUE4QixDQUFDLFFBQVEsQ0FDeEM7U0FDRjtLQUNGO0lBQ0Q7UUFDRSxNQUFNLEVBQUUsQ0FBQyxNQUFNLENBQUM7UUFDaEIsT0FBTyxFQUFFLDZCQUE2QjtRQUN0QyxXQUFXLEVBQUU7WUFDWCxJQUFBLGdEQUFrQyxFQUFDO2dCQUNqQyxVQUFVLEVBQUUsK0JBQXVCLENBQUMsVUFBVTtnQkFDOUMsV0FBVyxFQUFFLG1CQUFtQjthQUNqQyxDQUFDO1lBQ0YsSUFBQSxvQ0FBd0IsRUFBQyxzQ0FBeUIsQ0FBQztZQUNuRCxJQUFBLHFDQUF5QixFQUN2Qix5Q0FBNEIsRUFDNUIsNkNBQThCLENBQUMsUUFBUSxDQUN4QztTQUNGO0tBQ0Y7SUFDRDtRQUNFLE1BQU0sRUFBRSxDQUFDLE1BQU0sQ0FBQztRQUNoQixPQUFPLEVBQUUsbURBQW1EO1FBQzVELFdBQVcsRUFBRTtZQUNYLElBQUEsZ0RBQWtDLEVBQUM7Z0JBQ2pDLFVBQVUsRUFBRSwrQkFBdUIsQ0FBQyxVQUFVO2dCQUM5QyxXQUFXLEVBQUUsbUJBQW1CO2FBQ2pDLENBQUM7WUFDRixJQUFBLG9DQUF3QixFQUFDLElBQUEsMkJBQWMsR0FBRSxDQUFDO1lBQzFDLElBQUEscUNBQXlCLEVBQ3ZCLHlDQUE0QixFQUM1Qiw2Q0FBOEIsQ0FBQyxRQUFRLENBQ3hDO1NBQ0Y7S0FDRjtJQUNEO1FBQ0UsTUFBTSxFQUFFLENBQUMsTUFBTSxDQUFDO1FBQ2hCLE9BQU8sRUFBRSw0Q0FBNEM7UUFDckQsV0FBVyxFQUFFO1lBQ1gsSUFBQSxnREFBa0MsRUFBQztnQkFDakMsVUFBVSxFQUFFLCtCQUF1QixDQUFDLFVBQVU7Z0JBQzlDLFdBQVcsRUFBRSxtQkFBbUI7YUFDakMsQ0FBQztZQUNGLElBQUEsb0NBQXdCLEVBQUMsSUFBQSwyQkFBYyxHQUFFLENBQUM7WUFDMUMsSUFBQSxxQ0FBeUIsRUFDdkIseUNBQTRCLEVBQzVCLDZDQUE4QixDQUFDLFFBQVEsQ0FDeEM7U0FDRjtLQUNGO0lBQ0Qsb0NBQW9DO0lBQ3BDO1FBQ0UsTUFBTSxFQUFFLENBQUMsTUFBTSxDQUFDO1FBQ2hCLE9BQU8sRUFBRSw4Q0FBOEM7UUFDdkQsV0FBVyxFQUFFO1lBQ1gsSUFBQSxnREFBa0MsRUFBQztnQkFDakMsVUFBVSxFQUFFLCtCQUF1QixDQUFDLFVBQVU7Z0JBQzlDLFdBQVcsRUFBRSxtQkFBbUI7YUFDakMsQ0FBQztZQUNGLElBQUEsb0NBQXdCLEVBQUMsb0RBQXVDLENBQUM7WUFDakUsSUFBQSxxQ0FBeUIsRUFDdkIseUNBQTRCLEVBQzVCLDZDQUE4QixDQUFDLFFBQVEsQ0FDeEM7U0FDRjtLQUNGO0NBQ0YsQ0FBQSJ9