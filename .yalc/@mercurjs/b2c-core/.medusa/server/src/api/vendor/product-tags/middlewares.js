"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.vendorProductTagsMiddlewares = void 0;
const framework_1 = require("@medusajs/framework");
const query_config_1 = require("./query-config");
const validators_1 = require("./validators");
exports.vendorProductTagsMiddlewares = [
    {
        method: ['GET'],
        matcher: '/vendor/product-tags',
        middlewares: [
            (0, framework_1.validateAndTransformQuery)(validators_1.VendorGetProductTagsParams, query_config_1.vendorProductTagsQueryConfig.list)
        ]
    },
    {
        method: ['GET'],
        matcher: '/vendor/product-tags/:id',
        middlewares: [
            (0, framework_1.validateAndTransformQuery)(validators_1.VendorGetProductTagsParams, query_config_1.vendorProductTagsQueryConfig.retrieve)
        ]
    }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWlkZGxld2FyZXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvYXBpL3ZlbmRvci9wcm9kdWN0LXRhZ3MvbWlkZGxld2FyZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsbURBQWdGO0FBRWhGLGlEQUE2RDtBQUM3RCw2Q0FBeUQ7QUFFNUMsUUFBQSw0QkFBNEIsR0FBc0I7SUFDN0Q7UUFDRSxNQUFNLEVBQUUsQ0FBQyxLQUFLLENBQUM7UUFDZixPQUFPLEVBQUUsc0JBQXNCO1FBQy9CLFdBQVcsRUFBRTtZQUNYLElBQUEscUNBQXlCLEVBQ3ZCLHVDQUEwQixFQUMxQiwyQ0FBNEIsQ0FBQyxJQUFJLENBQ2xDO1NBQ0Y7S0FDRjtJQUNEO1FBQ0UsTUFBTSxFQUFFLENBQUMsS0FBSyxDQUFDO1FBQ2YsT0FBTyxFQUFFLDBCQUEwQjtRQUNuQyxXQUFXLEVBQUU7WUFDWCxJQUFBLHFDQUF5QixFQUN2Qix1Q0FBMEIsRUFDMUIsMkNBQTRCLENBQUMsUUFBUSxDQUN0QztTQUNGO0tBQ0Y7Q0FDRixDQUFBIn0=