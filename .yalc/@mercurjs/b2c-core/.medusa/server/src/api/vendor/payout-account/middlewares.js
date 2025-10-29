"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.vendorPayoutAccountMiddlewares = void 0;
const framework_1 = require("@medusajs/framework");
const middlewares_1 = require("../../../shared/infra/http/middlewares");
const query_config_1 = require("./query-config");
const validators_1 = require("./validators");
exports.vendorPayoutAccountMiddlewares = [
    {
        method: ['GET'],
        matcher: '/vendor/payout-account',
        middlewares: [
            (0, framework_1.validateAndTransformQuery)(validators_1.VendorGetPayoutAccountParams, query_config_1.vendorPayoutAccountQueryConfig.retrieve),
            (0, middlewares_1.filterBySellerId)()
        ]
    },
    {
        method: ['POST'],
        matcher: '/vendor/payout-account',
        middlewares: [
            (0, framework_1.validateAndTransformBody)(validators_1.VendorCreatePayoutAccount),
            (0, framework_1.validateAndTransformQuery)(validators_1.VendorGetPayoutAccountParams, query_config_1.vendorPayoutAccountQueryConfig.retrieve),
            (0, middlewares_1.filterBySellerId)()
        ]
    },
    {
        method: ['POST'],
        matcher: '/vendor/payout-account/onboarding',
        middlewares: [
            (0, framework_1.validateAndTransformBody)(validators_1.VendorCreateOnboarding),
            (0, framework_1.validateAndTransformQuery)(validators_1.VendorGetPayoutAccountParams, query_config_1.vendorPayoutAccountQueryConfig.retrieve)
        ]
    }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWlkZGxld2FyZXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvYXBpL3ZlbmRvci9wYXlvdXQtYWNjb3VudC9taWRkbGV3YXJlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxtREFHNEI7QUFHNUIsd0VBQXlFO0FBQ3pFLGlEQUErRDtBQUMvRCw2Q0FJcUI7QUFFUixRQUFBLDhCQUE4QixHQUFzQjtJQUMvRDtRQUNFLE1BQU0sRUFBRSxDQUFDLEtBQUssQ0FBQztRQUNmLE9BQU8sRUFBRSx3QkFBd0I7UUFDakMsV0FBVyxFQUFFO1lBQ1gsSUFBQSxxQ0FBeUIsRUFDdkIseUNBQTRCLEVBQzVCLDZDQUE4QixDQUFDLFFBQVEsQ0FDeEM7WUFDRCxJQUFBLDhCQUFnQixHQUFFO1NBQ25CO0tBQ0Y7SUFDRDtRQUNFLE1BQU0sRUFBRSxDQUFDLE1BQU0sQ0FBQztRQUNoQixPQUFPLEVBQUUsd0JBQXdCO1FBQ2pDLFdBQVcsRUFBRTtZQUNYLElBQUEsb0NBQXdCLEVBQUMsc0NBQXlCLENBQUM7WUFDbkQsSUFBQSxxQ0FBeUIsRUFDdkIseUNBQTRCLEVBQzVCLDZDQUE4QixDQUFDLFFBQVEsQ0FDeEM7WUFDRCxJQUFBLDhCQUFnQixHQUFFO1NBQ25CO0tBQ0Y7SUFDRDtRQUNFLE1BQU0sRUFBRSxDQUFDLE1BQU0sQ0FBQztRQUNoQixPQUFPLEVBQUUsbUNBQW1DO1FBQzVDLFdBQVcsRUFBRTtZQUNYLElBQUEsb0NBQXdCLEVBQUMsbUNBQXNCLENBQUM7WUFDaEQsSUFBQSxxQ0FBeUIsRUFDdkIseUNBQTRCLEVBQzVCLDZDQUE4QixDQUFDLFFBQVEsQ0FDeEM7U0FDRjtLQUNGO0NBQ0YsQ0FBQSJ9