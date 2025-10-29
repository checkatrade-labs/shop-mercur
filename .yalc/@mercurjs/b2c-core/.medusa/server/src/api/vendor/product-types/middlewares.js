"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.vendorProductTypesMiddlewares = void 0;
const framework_1 = require("@medusajs/framework");
const query_config_1 = require("./query-config");
const validators_1 = require("./validators");
exports.vendorProductTypesMiddlewares = [
    {
        method: ['GET'],
        matcher: '/vendor/product-types',
        middlewares: [
            (0, framework_1.validateAndTransformQuery)(validators_1.VendorGetProductTypesParams, query_config_1.vendorProductTypeQueryConfig.list)
        ]
    },
    {
        method: ['GET'],
        matcher: '/vendor/product-types/:id',
        middlewares: [
            (0, framework_1.validateAndTransformQuery)(validators_1.VendorGetProductTypesParams, query_config_1.vendorProductTypeQueryConfig.retrieve)
        ]
    }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWlkZGxld2FyZXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvYXBpL3ZlbmRvci9wcm9kdWN0LXR5cGVzL21pZGRsZXdhcmVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLG1EQUFnRjtBQUVoRixpREFBNkQ7QUFDN0QsNkNBQTBEO0FBRTdDLFFBQUEsNkJBQTZCLEdBQXNCO0lBQzlEO1FBQ0UsTUFBTSxFQUFFLENBQUMsS0FBSyxDQUFDO1FBQ2YsT0FBTyxFQUFFLHVCQUF1QjtRQUNoQyxXQUFXLEVBQUU7WUFDWCxJQUFBLHFDQUF5QixFQUN2Qix3Q0FBMkIsRUFDM0IsMkNBQTRCLENBQUMsSUFBSSxDQUNsQztTQUNGO0tBQ0Y7SUFDRDtRQUNFLE1BQU0sRUFBRSxDQUFDLEtBQUssQ0FBQztRQUNmLE9BQU8sRUFBRSwyQkFBMkI7UUFDcEMsV0FBVyxFQUFFO1lBQ1gsSUFBQSxxQ0FBeUIsRUFDdkIsd0NBQTJCLEVBQzNCLDJDQUE0QixDQUFDLFFBQVEsQ0FDdEM7U0FDRjtLQUNGO0NBQ0YsQ0FBQSJ9