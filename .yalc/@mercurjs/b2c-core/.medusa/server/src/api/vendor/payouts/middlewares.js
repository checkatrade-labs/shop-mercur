"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.vendorPayoutMiddlewares = void 0;
const framework_1 = require("@medusajs/framework");
const middlewares_1 = require("../../../shared/infra/http/middlewares");
const query_config_1 = require("./query-config");
const validators_1 = require("./validators");
exports.vendorPayoutMiddlewares = [
    {
        method: ['GET'],
        matcher: '/vendor/payouts',
        middlewares: [
            (0, framework_1.validateAndTransformQuery)(validators_1.VendorGetPayoutParams, query_config_1.vendorPayoutQueryConfig.list),
            (0, middlewares_1.filterBySellerId)()
        ]
    }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWlkZGxld2FyZXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvYXBpL3ZlbmRvci9wYXlvdXRzL21pZGRsZXdhcmVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLG1EQUErRDtBQUcvRCx3RUFBeUU7QUFDekUsaURBQXdEO0FBQ3hELDZDQUFvRDtBQUV2QyxRQUFBLHVCQUF1QixHQUFzQjtJQUN4RDtRQUNFLE1BQU0sRUFBRSxDQUFDLEtBQUssQ0FBQztRQUNmLE9BQU8sRUFBRSxpQkFBaUI7UUFDMUIsV0FBVyxFQUFFO1lBQ1gsSUFBQSxxQ0FBeUIsRUFDdkIsa0NBQXFCLEVBQ3JCLHNDQUF1QixDQUFDLElBQUksQ0FDN0I7WUFDRCxJQUFBLDhCQUFnQixHQUFFO1NBQ25CO0tBQ0Y7Q0FDRixDQUFBIn0=