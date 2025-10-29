"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.vendorPricePreferencesRoutesMiddlewares = void 0;
const framework_1 = require("@medusajs/framework");
const query_config_1 = require("./query-config");
const validators_1 = require("./validators");
exports.vendorPricePreferencesRoutesMiddlewares = [
    {
        method: ['GET'],
        matcher: '/vendor/price-preferences',
        middlewares: [
            (0, framework_1.validateAndTransformQuery)(validators_1.VendorGetPricePreferencesParams, query_config_1.listPricePreferenceQueryConfig)
        ]
    }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWlkZGxld2FyZXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvYXBpL3ZlbmRvci9wcmljZS1wcmVmZXJlbmNlcy9taWRkbGV3YXJlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxtREFBZ0Y7QUFFaEYsaURBQStEO0FBQy9ELDZDQUE4RDtBQUVqRCxRQUFBLHVDQUF1QyxHQUFzQjtJQUN4RTtRQUNFLE1BQU0sRUFBRSxDQUFDLEtBQUssQ0FBQztRQUNmLE9BQU8sRUFBRSwyQkFBMkI7UUFDcEMsV0FBVyxFQUFFO1lBQ1gsSUFBQSxxQ0FBeUIsRUFDdkIsNENBQStCLEVBQy9CLDZDQUE4QixDQUMvQjtTQUNGO0tBQ0Y7Q0FDRixDQUFBIn0=