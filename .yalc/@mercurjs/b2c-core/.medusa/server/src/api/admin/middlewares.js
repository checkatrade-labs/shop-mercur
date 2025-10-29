"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.adminMiddlewares = void 0;
const middlewares_1 = require("./attributes/middlewares");
const middlewares_2 = require("./configuration/middlewares");
const middlewares_3 = require("./order-sets/middlewares");
const middlewares_4 = require("./products/middlewares");
const middlewares_5 = require("./sellers/middlewares");
exports.adminMiddlewares = [
    ...middlewares_3.orderSetsMiddlewares,
    ...middlewares_2.configurationMiddleware,
    ...middlewares_5.sellerMiddlewares,
    ...middlewares_1.attributeMiddlewares,
    ...middlewares_4.adminProductsMiddlewares,
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWlkZGxld2FyZXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvYXBpL2FkbWluL21pZGRsZXdhcmVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUVBLDBEQUFnRTtBQUNoRSw2REFBc0U7QUFDdEUsMERBQWdFO0FBQ2hFLHdEQUFrRTtBQUNsRSx1REFBMEQ7QUFFN0MsUUFBQSxnQkFBZ0IsR0FBc0I7SUFDakQsR0FBRyxrQ0FBb0I7SUFDdkIsR0FBRyxxQ0FBdUI7SUFDMUIsR0FBRywrQkFBaUI7SUFDcEIsR0FBRyxrQ0FBb0I7SUFDdkIsR0FBRyxzQ0FBd0I7Q0FDNUIsQ0FBQyJ9