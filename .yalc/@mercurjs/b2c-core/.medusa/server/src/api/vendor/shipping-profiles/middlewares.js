"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.vendorShippingProfilesMiddlewares = void 0;
const framework_1 = require("@medusajs/framework");
const seller_shipping_profile_1 = __importDefault(require("../../../links/seller-shipping-profile"));
const middlewares_1 = require("../../../shared/infra/http/middlewares");
const query_config_1 = require("./query-config");
const validators_1 = require("./validators");
exports.vendorShippingProfilesMiddlewares = [
    {
        method: ['POST'],
        matcher: '/vendor/shipping-profiles',
        middlewares: [
            (0, framework_1.validateAndTransformBody)(validators_1.VendorCreateShippingProfile),
            (0, framework_1.validateAndTransformQuery)(validators_1.VendorGetShippingProfilesParams, query_config_1.shippingProfilesQueryConfig.retrieve)
        ]
    },
    {
        method: ['GET'],
        matcher: '/vendor/shipping-profiles',
        middlewares: [
            (0, framework_1.validateAndTransformQuery)(validators_1.VendorGetShippingProfilesParams, query_config_1.shippingProfilesQueryConfig.list),
            (0, middlewares_1.filterBySellerId)()
        ]
    },
    {
        method: ['POST'],
        matcher: '/vendor/shipping-profiles/:id',
        middlewares: [
            (0, framework_1.validateAndTransformBody)(validators_1.VendorUpdateShippingProfile),
            (0, framework_1.validateAndTransformQuery)(validators_1.VendorGetShippingProfilesParams, query_config_1.shippingProfilesQueryConfig.retrieve),
            (0, middlewares_1.checkResourceOwnershipByResourceId)({
                entryPoint: seller_shipping_profile_1.default.entryPoint,
                filterField: 'shipping_profile_id'
            })
        ]
    },
    {
        method: ['DELETE'],
        matcher: '/vendor/shipping-profiles/:id',
        middlewares: [
            (0, middlewares_1.checkResourceOwnershipByResourceId)({
                entryPoint: seller_shipping_profile_1.default.entryPoint,
                filterField: 'shipping_profile_id'
            })
        ]
    },
    {
        method: ['GET'],
        matcher: '/vendor/shipping-profiles/:id',
        middlewares: [
            (0, framework_1.validateAndTransformQuery)(validators_1.VendorGetShippingProfilesParams, query_config_1.shippingProfilesQueryConfig.retrieve),
            (0, middlewares_1.checkResourceOwnershipByResourceId)({
                entryPoint: seller_shipping_profile_1.default.entryPoint,
                filterField: 'shipping_profile_id'
            })
        ]
    }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWlkZGxld2FyZXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvYXBpL3ZlbmRvci9zaGlwcGluZy1wcm9maWxlcy9taWRkbGV3YXJlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxtREFHNEI7QUFHNUIscUdBQTBFO0FBQzFFLHdFQUcrQztBQUMvQyxpREFBNEQ7QUFDNUQsNkNBSXFCO0FBRVIsUUFBQSxpQ0FBaUMsR0FBc0I7SUFDbEU7UUFDRSxNQUFNLEVBQUUsQ0FBQyxNQUFNLENBQUM7UUFDaEIsT0FBTyxFQUFFLDJCQUEyQjtRQUNwQyxXQUFXLEVBQUU7WUFDWCxJQUFBLG9DQUF3QixFQUFDLHdDQUEyQixDQUFDO1lBQ3JELElBQUEscUNBQXlCLEVBQ3ZCLDRDQUErQixFQUMvQiwwQ0FBMkIsQ0FBQyxRQUFRLENBQ3JDO1NBQ0Y7S0FDRjtJQUNEO1FBQ0UsTUFBTSxFQUFFLENBQUMsS0FBSyxDQUFDO1FBQ2YsT0FBTyxFQUFFLDJCQUEyQjtRQUNwQyxXQUFXLEVBQUU7WUFDWCxJQUFBLHFDQUF5QixFQUN2Qiw0Q0FBK0IsRUFDL0IsMENBQTJCLENBQUMsSUFBSSxDQUNqQztZQUNELElBQUEsOEJBQWdCLEdBQUU7U0FDbkI7S0FDRjtJQUNEO1FBQ0UsTUFBTSxFQUFFLENBQUMsTUFBTSxDQUFDO1FBQ2hCLE9BQU8sRUFBRSwrQkFBK0I7UUFDeEMsV0FBVyxFQUFFO1lBQ1gsSUFBQSxvQ0FBd0IsRUFBQyx3Q0FBMkIsQ0FBQztZQUNyRCxJQUFBLHFDQUF5QixFQUN2Qiw0Q0FBK0IsRUFDL0IsMENBQTJCLENBQUMsUUFBUSxDQUNyQztZQUNELElBQUEsZ0RBQWtDLEVBQUM7Z0JBQ2pDLFVBQVUsRUFBRSxpQ0FBcUIsQ0FBQyxVQUFVO2dCQUM1QyxXQUFXLEVBQUUscUJBQXFCO2FBQ25DLENBQUM7U0FDSDtLQUNGO0lBQ0Q7UUFDRSxNQUFNLEVBQUUsQ0FBQyxRQUFRLENBQUM7UUFDbEIsT0FBTyxFQUFFLCtCQUErQjtRQUN4QyxXQUFXLEVBQUU7WUFDWCxJQUFBLGdEQUFrQyxFQUFDO2dCQUNqQyxVQUFVLEVBQUUsaUNBQXFCLENBQUMsVUFBVTtnQkFDNUMsV0FBVyxFQUFFLHFCQUFxQjthQUNuQyxDQUFDO1NBQ0g7S0FDRjtJQUNEO1FBQ0UsTUFBTSxFQUFFLENBQUMsS0FBSyxDQUFDO1FBQ2YsT0FBTyxFQUFFLCtCQUErQjtRQUN4QyxXQUFXLEVBQUU7WUFDWCxJQUFBLHFDQUF5QixFQUN2Qiw0Q0FBK0IsRUFDL0IsMENBQTJCLENBQUMsUUFBUSxDQUNyQztZQUNELElBQUEsZ0RBQWtDLEVBQUM7Z0JBQ2pDLFVBQVUsRUFBRSxpQ0FBcUIsQ0FBQyxVQUFVO2dCQUM1QyxXQUFXLEVBQUUscUJBQXFCO2FBQ25DLENBQUM7U0FDSDtLQUNGO0NBQ0YsQ0FBQSJ9