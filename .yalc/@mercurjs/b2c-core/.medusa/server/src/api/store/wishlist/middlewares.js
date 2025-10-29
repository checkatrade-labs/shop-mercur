"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.storeWishlistMiddlewares = void 0;
const framework_1 = require("@medusajs/framework");
const customer_wishlist_1 = __importDefault(require("../../../links/customer-wishlist"));
const check_customer_ownership_1 = require("../../../shared/infra/http/middlewares/check-customer-ownership");
const query_config_1 = require("./query-config");
const validators_1 = require("./validators");
exports.storeWishlistMiddlewares = [
    {
        method: ['GET'],
        matcher: '/store/wishlist',
        middlewares: [
            (0, framework_1.validateAndTransformQuery)(validators_1.StoreGetWishlistsParams, query_config_1.storeWishlistQueryConfig.list)
        ]
    },
    {
        method: ['POST'],
        matcher: '/store/wishlist',
        middlewares: [
            (0, framework_1.validateAndTransformQuery)(validators_1.StoreGetWishlistsParams, query_config_1.storeWishlistQueryConfig.retrieve),
            (0, framework_1.validateAndTransformBody)(validators_1.StoreCreateWishlist)
        ]
    },
    {
        method: ['DELETE'],
        matcher: '/store/wishlist/:id/product/:reference_id',
        middlewares: [
            (0, check_customer_ownership_1.checkCustomerResourceOwnershipByResourceId)({
                entryPoint: customer_wishlist_1.default.entryPoint,
                filterField: 'wishlist_id'
            })
        ]
    }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWlkZGxld2FyZXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvYXBpL3N0b3JlL3dpc2hsaXN0L21pZGRsZXdhcmVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLG1EQUc0QjtBQUc1Qix5RkFBK0Q7QUFDL0QsOEdBQTRIO0FBQzVILGlEQUF5RDtBQUN6RCw2Q0FBMkU7QUFFOUQsUUFBQSx3QkFBd0IsR0FBc0I7SUFDekQ7UUFDRSxNQUFNLEVBQUUsQ0FBQyxLQUFLLENBQUM7UUFDZixPQUFPLEVBQUUsaUJBQWlCO1FBQzFCLFdBQVcsRUFBRTtZQUNYLElBQUEscUNBQXlCLEVBQ3ZCLG9DQUF1QixFQUN2Qix1Q0FBd0IsQ0FBQyxJQUFJLENBQzlCO1NBQ0Y7S0FDRjtJQUNEO1FBQ0UsTUFBTSxFQUFFLENBQUMsTUFBTSxDQUFDO1FBQ2hCLE9BQU8sRUFBRSxpQkFBaUI7UUFDMUIsV0FBVyxFQUFFO1lBQ1gsSUFBQSxxQ0FBeUIsRUFDdkIsb0NBQXVCLEVBQ3ZCLHVDQUF3QixDQUFDLFFBQVEsQ0FDbEM7WUFDRCxJQUFBLG9DQUF3QixFQUFDLGdDQUFtQixDQUFDO1NBQzlDO0tBQ0Y7SUFDRDtRQUNFLE1BQU0sRUFBRSxDQUFDLFFBQVEsQ0FBQztRQUNsQixPQUFPLEVBQUUsMkNBQTJDO1FBQ3BELFdBQVcsRUFBRTtZQUNYLElBQUEscUVBQTBDLEVBQUM7Z0JBQ3pDLFVBQVUsRUFBRSwyQkFBZ0IsQ0FBQyxVQUFVO2dCQUN2QyxXQUFXLEVBQUUsYUFBYTthQUMzQixDQUFDO1NBQ0g7S0FDRjtDQUNGLENBQUEifQ==