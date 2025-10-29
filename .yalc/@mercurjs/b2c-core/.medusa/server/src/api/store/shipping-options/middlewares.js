"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.storeShippingOptionRoutesMiddlewares = void 0;
const framework_1 = require("@medusajs/framework");
const query_config_1 = require("./query-config");
const validators_1 = require("./validators");
exports.storeShippingOptionRoutesMiddlewares = [
    {
        method: ['GET'],
        matcher: '/store/shipping-options',
        middlewares: [
            (0, framework_1.validateAndTransformQuery)(validators_1.StoreGetShippingOptions, query_config_1.listTransformQueryConfig)
        ]
    },
    {
        method: ['GET'],
        matcher: '/store/shipping-options/return',
        middlewares: [
            (0, framework_1.authenticate)('customer', ['bearer', 'session']),
            (0, framework_1.validateAndTransformQuery)(validators_1.StoreGetReturnShippingOptions, query_config_1.storeGetReturnShippingOptionsQueryConfig.list)
        ]
    }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWlkZGxld2FyZXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvYXBpL3N0b3JlL3NoaXBwaW5nLW9wdGlvbnMvbWlkZGxld2FyZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsbURBSTRCO0FBRTVCLGlEQUd1QjtBQUN2Qiw2Q0FHcUI7QUFFUixRQUFBLG9DQUFvQyxHQUFzQjtJQUNyRTtRQUNFLE1BQU0sRUFBRSxDQUFDLEtBQUssQ0FBQztRQUNmLE9BQU8sRUFBRSx5QkFBeUI7UUFDbEMsV0FBVyxFQUFFO1lBQ1gsSUFBQSxxQ0FBeUIsRUFDdkIsb0NBQXVCLEVBQ3ZCLHVDQUF3QixDQUN6QjtTQUNGO0tBQ0Y7SUFDRDtRQUNFLE1BQU0sRUFBRSxDQUFDLEtBQUssQ0FBQztRQUNmLE9BQU8sRUFBRSxnQ0FBZ0M7UUFDekMsV0FBVyxFQUFFO1lBQ1gsSUFBQSx3QkFBWSxFQUFDLFVBQVUsRUFBRSxDQUFDLFFBQVEsRUFBRSxTQUFTLENBQUMsQ0FBQztZQUMvQyxJQUFBLHFDQUF5QixFQUN2QiwwQ0FBNkIsRUFDN0IsdURBQXdDLENBQUMsSUFBSSxDQUM5QztTQUNGO0tBQ0Y7Q0FDRixDQUFBIn0=