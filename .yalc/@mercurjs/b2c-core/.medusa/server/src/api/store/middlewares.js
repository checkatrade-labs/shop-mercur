"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.storeMiddlewares = void 0;
const framework_1 = require("@medusajs/framework");
const middlewares_1 = require("./carts/middlewares");
const middlewares_2 = require("./order-set/middlewares");
const middlewares_3 = require("./returns/middlewares");
const middlewares_4 = require("./seller/middlewares");
const middlewares_5 = require("./shipping-options/middlewares");
const middlewares_6 = require("./wishlist/middlewares");
exports.storeMiddlewares = [
    {
        matcher: "/store/reviews/*",
        middlewares: [(0, framework_1.authenticate)("customer", ["bearer", "session"])],
    },
    {
        matcher: "/store/return-request/*",
        middlewares: [(0, framework_1.authenticate)("customer", ["bearer", "session"])],
    },
    ...middlewares_1.storeCartsMiddlewares,
    ...middlewares_2.storeOrderSetMiddlewares,
    ...middlewares_4.storeSellerMiddlewares,
    ...middlewares_5.storeShippingOptionRoutesMiddlewares,
    ...middlewares_3.storeReturnsMiddlewares,
    ...middlewares_6.storeWishlistMiddlewares,
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWlkZGxld2FyZXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvYXBpL3N0b3JlL21pZGRsZXdhcmVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLG1EQUFvRTtBQUVwRSxxREFBNEQ7QUFDNUQseURBQW1FO0FBQ25FLHVEQUFnRTtBQUNoRSxzREFBOEQ7QUFDOUQsZ0VBQXNGO0FBQ3RGLHdEQUFrRTtBQUVyRCxRQUFBLGdCQUFnQixHQUFzQjtJQUNqRDtRQUNFLE9BQU8sRUFBRSxrQkFBa0I7UUFDM0IsV0FBVyxFQUFFLENBQUMsSUFBQSx3QkFBWSxFQUFDLFVBQVUsRUFBRSxDQUFDLFFBQVEsRUFBRSxTQUFTLENBQUMsQ0FBQyxDQUFDO0tBQy9EO0lBQ0Q7UUFDRSxPQUFPLEVBQUUseUJBQXlCO1FBQ2xDLFdBQVcsRUFBRSxDQUFDLElBQUEsd0JBQVksRUFBQyxVQUFVLEVBQUUsQ0FBQyxRQUFRLEVBQUUsU0FBUyxDQUFDLENBQUMsQ0FBQztLQUMvRDtJQUNELEdBQUcsbUNBQXFCO0lBQ3hCLEdBQUcsc0NBQXdCO0lBQzNCLEdBQUcsb0NBQXNCO0lBQ3pCLEdBQUcsa0RBQW9DO0lBQ3ZDLEdBQUcscUNBQXVCO0lBQzFCLEdBQUcsc0NBQXdCO0NBQzVCLENBQUMifQ==