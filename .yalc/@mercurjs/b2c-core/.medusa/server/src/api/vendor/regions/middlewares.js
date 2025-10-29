"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.vendorRegionsMiddlewares = void 0;
const framework_1 = require("@medusajs/framework");
const query_config_1 = require("./query-config");
const validators_1 = require("./validators");
exports.vendorRegionsMiddlewares = [
    {
        method: ['GET'],
        matcher: '/vendor/regions',
        middlewares: [
            (0, framework_1.validateAndTransformQuery)(validators_1.VendorGetRegionsParams, query_config_1.vendorRegionsQueryConfig.list)
        ]
    },
    {
        method: ['GET'],
        matcher: '/vendor/regions/:id',
        middlewares: [
            (0, framework_1.validateAndTransformQuery)(validators_1.VendorGetRegionsParams, query_config_1.vendorRegionsQueryConfig.retrieve)
        ]
    }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWlkZGxld2FyZXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvYXBpL3ZlbmRvci9yZWdpb25zL21pZGRsZXdhcmVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLG1EQUFnRjtBQUVoRixpREFBeUQ7QUFDekQsNkNBQXFEO0FBRXhDLFFBQUEsd0JBQXdCLEdBQXNCO0lBQ3pEO1FBQ0UsTUFBTSxFQUFFLENBQUMsS0FBSyxDQUFDO1FBQ2YsT0FBTyxFQUFFLGlCQUFpQjtRQUMxQixXQUFXLEVBQUU7WUFDWCxJQUFBLHFDQUF5QixFQUN2QixtQ0FBc0IsRUFDdEIsdUNBQXdCLENBQUMsSUFBSSxDQUM5QjtTQUNGO0tBQ0Y7SUFDRDtRQUNFLE1BQU0sRUFBRSxDQUFDLEtBQUssQ0FBQztRQUNmLE9BQU8sRUFBRSxxQkFBcUI7UUFDOUIsV0FBVyxFQUFFO1lBQ1gsSUFBQSxxQ0FBeUIsRUFDdkIsbUNBQXNCLEVBQ3RCLHVDQUF3QixDQUFDLFFBQVEsQ0FDbEM7U0FDRjtLQUNGO0NBQ0YsQ0FBQSJ9