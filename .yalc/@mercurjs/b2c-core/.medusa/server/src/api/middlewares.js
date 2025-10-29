"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const medusa_1 = require("@medusajs/medusa");
const middlewares_1 = require("./store/middlewares");
const middlewares_2 = require("./vendor/middlewares");
const middlewares_3 = require("./admin/middlewares");
exports.default = (0, medusa_1.defineMiddlewares)({
    routes: [...middlewares_1.storeMiddlewares, ...middlewares_3.adminMiddlewares, ...middlewares_2.vendorMiddlewares],
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWlkZGxld2FyZXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvYXBpL21pZGRsZXdhcmVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsNkNBQXFEO0FBRXJELHFEQUF1RDtBQUN2RCxzREFBeUQ7QUFDekQscURBQXVEO0FBRXZELGtCQUFlLElBQUEsMEJBQWlCLEVBQUM7SUFDL0IsTUFBTSxFQUFFLENBQUMsR0FBRyw4QkFBZ0IsRUFBRSxHQUFHLDhCQUFnQixFQUFFLEdBQUcsK0JBQWlCLENBQUM7Q0FDekUsQ0FBQyxDQUFDIn0=