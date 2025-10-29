"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.vendorFulfillmentSetsMiddlewares = void 0;
const framework_1 = require("@medusajs/framework");
const seller_fulfillment_set_1 = __importDefault(require("../../../links/seller-fulfillment-set"));
const seller_service_zone_1 = __importDefault(require("../../../links/seller-service-zone"));
const middlewares_1 = require("../../../shared/infra/http/middlewares");
const query_config_1 = require("./query-config");
const validators_1 = require("./validators");
exports.vendorFulfillmentSetsMiddlewares = [
    /* Fulfillment Set */
    {
        method: ['DELETE'],
        matcher: '/vendor/fulfillment-sets/:id',
        middlewares: [
            (0, middlewares_1.checkResourceOwnershipByResourceId)({
                entryPoint: seller_fulfillment_set_1.default.entryPoint,
                filterField: 'fulfillment_set_id'
            })
        ]
    },
    /* Service Zones */
    {
        method: ['POST'],
        matcher: '/vendor/fulfillment-sets/:id/service-zones',
        middlewares: [
            (0, middlewares_1.checkResourceOwnershipByResourceId)({
                entryPoint: seller_fulfillment_set_1.default.entryPoint,
                filterField: 'fulfillment_set_id'
            }),
            (0, framework_1.validateAndTransformBody)(validators_1.VendorCreateFulfillmentSetServiceZonesSchema),
            (0, framework_1.validateAndTransformQuery)(validators_1.VendorFulfillmentSetParams, query_config_1.vendorFulfillmentSetQueryConfig.retrieve)
        ]
    },
    {
        method: ['POST'],
        matcher: '/vendor/fulfillment-sets/:id/service-zones/:zone_id',
        middlewares: [
            (0, middlewares_1.checkResourceOwnershipByResourceId)({
                entryPoint: seller_fulfillment_set_1.default.entryPoint,
                filterField: 'fulfillment_set_id'
            }),
            (0, middlewares_1.checkResourceOwnershipByResourceId)({
                entryPoint: seller_service_zone_1.default.entryPoint,
                filterField: 'service_zone_id',
                resourceId: (req) => req.params.zone_id
            }),
            (0, framework_1.validateAndTransformBody)(validators_1.VendorUpdateServiceZone),
            (0, framework_1.validateAndTransformQuery)(validators_1.VendorFulfillmentSetParams, query_config_1.vendorFulfillmentSetQueryConfig.retrieve)
        ]
    },
    {
        method: ['DELETE'],
        matcher: '/vendor/fulfillment-sets/:id/service-zones/:zone_id',
        middlewares: [
            (0, middlewares_1.checkResourceOwnershipByResourceId)({
                entryPoint: seller_fulfillment_set_1.default.entryPoint,
                filterField: 'fulfillment_set_id'
            }),
            (0, middlewares_1.checkResourceOwnershipByResourceId)({
                entryPoint: seller_service_zone_1.default.entryPoint,
                filterField: 'service_zone_id',
                resourceId: (req) => req.params.zone_id
            })
        ]
    }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWlkZGxld2FyZXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvYXBpL3ZlbmRvci9mdWxmaWxsbWVudC1zZXRzL21pZGRsZXdhcmVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLG1EQUk0QjtBQUc1QixtR0FBNEU7QUFDNUUsNkZBQXNFO0FBQ3RFLHdFQUEyRjtBQUMzRixpREFBZ0U7QUFDaEUsNkNBSXFCO0FBRVIsUUFBQSxnQ0FBZ0MsR0FBc0I7SUFDakUscUJBQXFCO0lBQ3JCO1FBQ0UsTUFBTSxFQUFFLENBQUMsUUFBUSxDQUFDO1FBQ2xCLE9BQU8sRUFBRSw4QkFBOEI7UUFDdkMsV0FBVyxFQUFFO1lBQ1gsSUFBQSxnREFBa0MsRUFBQztnQkFDakMsVUFBVSxFQUFFLGdDQUF3QixDQUFDLFVBQVU7Z0JBQy9DLFdBQVcsRUFBRSxvQkFBb0I7YUFDbEMsQ0FBQztTQUNIO0tBQ0Y7SUFFRCxtQkFBbUI7SUFDbkI7UUFDRSxNQUFNLEVBQUUsQ0FBQyxNQUFNLENBQUM7UUFDaEIsT0FBTyxFQUFFLDRDQUE0QztRQUNyRCxXQUFXLEVBQUU7WUFDWCxJQUFBLGdEQUFrQyxFQUFDO2dCQUNqQyxVQUFVLEVBQUUsZ0NBQXdCLENBQUMsVUFBVTtnQkFDL0MsV0FBVyxFQUFFLG9CQUFvQjthQUNsQyxDQUFDO1lBQ0YsSUFBQSxvQ0FBd0IsRUFBQyx5REFBNEMsQ0FBQztZQUN0RSxJQUFBLHFDQUF5QixFQUN2Qix1Q0FBMEIsRUFDMUIsOENBQStCLENBQUMsUUFBUSxDQUN6QztTQUNGO0tBQ0Y7SUFDRDtRQUNFLE1BQU0sRUFBRSxDQUFDLE1BQU0sQ0FBQztRQUNoQixPQUFPLEVBQUUscURBQXFEO1FBQzlELFdBQVcsRUFBRTtZQUNYLElBQUEsZ0RBQWtDLEVBQUM7Z0JBQ2pDLFVBQVUsRUFBRSxnQ0FBd0IsQ0FBQyxVQUFVO2dCQUMvQyxXQUFXLEVBQUUsb0JBQW9CO2FBQ2xDLENBQUM7WUFDRixJQUFBLGdEQUFrQyxFQUFDO2dCQUNqQyxVQUFVLEVBQUUsNkJBQXFCLENBQUMsVUFBVTtnQkFDNUMsV0FBVyxFQUFFLGlCQUFpQjtnQkFDOUIsVUFBVSxFQUFFLENBQUMsR0FBa0IsRUFBRSxFQUFFLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxPQUFPO2FBQ3ZELENBQUM7WUFDRixJQUFBLG9DQUF3QixFQUFDLG9DQUF1QixDQUFDO1lBQ2pELElBQUEscUNBQXlCLEVBQ3ZCLHVDQUEwQixFQUMxQiw4Q0FBK0IsQ0FBQyxRQUFRLENBQ3pDO1NBQ0Y7S0FDRjtJQUNEO1FBQ0UsTUFBTSxFQUFFLENBQUMsUUFBUSxDQUFDO1FBQ2xCLE9BQU8sRUFBRSxxREFBcUQ7UUFDOUQsV0FBVyxFQUFFO1lBQ1gsSUFBQSxnREFBa0MsRUFBQztnQkFDakMsVUFBVSxFQUFFLGdDQUF3QixDQUFDLFVBQVU7Z0JBQy9DLFdBQVcsRUFBRSxvQkFBb0I7YUFDbEMsQ0FBQztZQUNGLElBQUEsZ0RBQWtDLEVBQUM7Z0JBQ2pDLFVBQVUsRUFBRSw2QkFBcUIsQ0FBQyxVQUFVO2dCQUM1QyxXQUFXLEVBQUUsaUJBQWlCO2dCQUM5QixVQUFVLEVBQUUsQ0FBQyxHQUFrQixFQUFFLEVBQUUsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLE9BQU87YUFDdkQsQ0FBQztTQUNIO0tBQ0Y7Q0FDRixDQUFBIn0=