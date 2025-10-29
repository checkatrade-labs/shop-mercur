"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.vendorSalesChannelMiddlewares = void 0;
const framework_1 = require("@medusajs/framework");
const query_config_1 = require("./query-config");
const validators_1 = require("./validators");
exports.vendorSalesChannelMiddlewares = [
    {
        method: ['GET'],
        matcher: '/vendor/sales-channels',
        middlewares: [
            (0, framework_1.validateAndTransformQuery)(validators_1.VendorGetSalesChannelParams, query_config_1.vendorSalesChannelQueryConfig.list)
        ]
    }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWlkZGxld2FyZXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvYXBpL3ZlbmRvci9zYWxlcy1jaGFubmVscy9taWRkbGV3YXJlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxtREFBZ0Y7QUFFaEYsaURBQThEO0FBQzlELDZDQUEwRDtBQUU3QyxRQUFBLDZCQUE2QixHQUFzQjtJQUM5RDtRQUNFLE1BQU0sRUFBRSxDQUFDLEtBQUssQ0FBQztRQUNmLE9BQU8sRUFBRSx3QkFBd0I7UUFDakMsV0FBVyxFQUFFO1lBQ1gsSUFBQSxxQ0FBeUIsRUFDdkIsd0NBQTJCLEVBQzNCLDRDQUE2QixDQUFDLElBQUksQ0FDbkM7U0FDRjtLQUNGO0NBQ0YsQ0FBQSJ9