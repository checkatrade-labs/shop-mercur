"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.vendorStoresMiddlewares = void 0;
const framework_1 = require("@medusajs/framework");
const query_config_1 = require("./query-config");
const validators_1 = require("./validators");
exports.vendorStoresMiddlewares = [
    {
        method: ['GET'],
        matcher: '/vendor/stores',
        middlewares: [
            (0, framework_1.validateAndTransformQuery)(validators_1.VendorGetStoresParams, query_config_1.vendorStoresQueryConfig.list)
        ]
    },
    {
        method: ['GET'],
        matcher: '/vendor/stores/:id',
        middlewares: [
            (0, framework_1.validateAndTransformQuery)(validators_1.VendorGetStoresParams, query_config_1.vendorStoresQueryConfig.retrieve)
        ]
    }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWlkZGxld2FyZXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvYXBpL3ZlbmRvci9zdG9yZXMvbWlkZGxld2FyZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsbURBQWdGO0FBRWhGLGlEQUF3RDtBQUN4RCw2Q0FBb0Q7QUFFdkMsUUFBQSx1QkFBdUIsR0FBc0I7SUFDeEQ7UUFDRSxNQUFNLEVBQUUsQ0FBQyxLQUFLLENBQUM7UUFDZixPQUFPLEVBQUUsZ0JBQWdCO1FBQ3pCLFdBQVcsRUFBRTtZQUNYLElBQUEscUNBQXlCLEVBQ3ZCLGtDQUFxQixFQUNyQixzQ0FBdUIsQ0FBQyxJQUFJLENBQzdCO1NBQ0Y7S0FDRjtJQUNEO1FBQ0UsTUFBTSxFQUFFLENBQUMsS0FBSyxDQUFDO1FBQ2YsT0FBTyxFQUFFLG9CQUFvQjtRQUM3QixXQUFXLEVBQUU7WUFDWCxJQUFBLHFDQUF5QixFQUN2QixrQ0FBcUIsRUFDckIsc0NBQXVCLENBQUMsUUFBUSxDQUNqQztTQUNGO0tBQ0Y7Q0FDRixDQUFBIn0=