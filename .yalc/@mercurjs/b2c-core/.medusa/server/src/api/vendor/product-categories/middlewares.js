"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.vendorProductCategoriesMiddlewares = void 0;
const framework_1 = require("@medusajs/framework");
const middlewares_1 = require("../../../shared/infra/http/middlewares");
const query_config_1 = require("./query-config");
const validators_1 = require("./validators");
exports.vendorProductCategoriesMiddlewares = [
    {
        method: ['GET'],
        matcher: '/vendor/product-categories',
        middlewares: [
            (0, framework_1.validateAndTransformQuery)(validators_1.VendorGetProductCategoriesParams, query_config_1.vendorProductCategoryQueryConfig.list)
        ]
    },
    {
        method: ['GET'],
        matcher: '/vendor/product-categories/:id',
        middlewares: [
            (0, framework_1.validateAndTransformQuery)(validators_1.VendorGetProductCategoriesParams, query_config_1.vendorProductCategoryQueryConfig.retrieve)
        ]
    },
    {
        method: ['GET'],
        matcher: '/vendor/product-categories/:id/products',
        middlewares: [
            (0, framework_1.validateAndTransformQuery)(validators_1.VendorGetProductCategoriesProductsParams, query_config_1.vendorProductCategoryProductsQueryConfig.list),
            (0, middlewares_1.filterBySellerId)()
        ]
    }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWlkZGxld2FyZXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvYXBpL3ZlbmRvci9wcm9kdWN0LWNhdGVnb3JpZXMvbWlkZGxld2FyZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsbURBQWdGO0FBRWhGLHdFQUF5RTtBQUN6RSxpREFHdUI7QUFDdkIsNkNBR3FCO0FBRVIsUUFBQSxrQ0FBa0MsR0FBc0I7SUFDbkU7UUFDRSxNQUFNLEVBQUUsQ0FBQyxLQUFLLENBQUM7UUFDZixPQUFPLEVBQUUsNEJBQTRCO1FBQ3JDLFdBQVcsRUFBRTtZQUNYLElBQUEscUNBQXlCLEVBQ3ZCLDZDQUFnQyxFQUNoQywrQ0FBZ0MsQ0FBQyxJQUFJLENBQ3RDO1NBQ0Y7S0FDRjtJQUNEO1FBQ0UsTUFBTSxFQUFFLENBQUMsS0FBSyxDQUFDO1FBQ2YsT0FBTyxFQUFFLGdDQUFnQztRQUN6QyxXQUFXLEVBQUU7WUFDWCxJQUFBLHFDQUF5QixFQUN2Qiw2Q0FBZ0MsRUFDaEMsK0NBQWdDLENBQUMsUUFBUSxDQUMxQztTQUNGO0tBQ0Y7SUFDRDtRQUNFLE1BQU0sRUFBRSxDQUFDLEtBQUssQ0FBQztRQUNmLE9BQU8sRUFBRSx5Q0FBeUM7UUFDbEQsV0FBVyxFQUFFO1lBQ1gsSUFBQSxxQ0FBeUIsRUFDdkIscURBQXdDLEVBQ3hDLHVEQUF3QyxDQUFDLElBQUksQ0FDOUM7WUFDRCxJQUFBLDhCQUFnQixHQUFFO1NBQ25CO0tBQ0Y7Q0FDRixDQUFBIn0=