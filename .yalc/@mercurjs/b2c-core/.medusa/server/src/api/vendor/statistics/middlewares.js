"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.vendorStatisticsMiddlewares = void 0;
const framework_1 = require("@medusajs/framework");
const validators_1 = require("./validators");
exports.vendorStatisticsMiddlewares = [
    {
        method: ['GET'],
        matcher: '/vendor/statistics',
        middlewares: [(0, framework_1.validateAndTransformQuery)(validators_1.VendorGetStatisticsParams, {})]
    }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWlkZGxld2FyZXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvYXBpL3ZlbmRvci9zdGF0aXN0aWNzL21pZGRsZXdhcmVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLG1EQUFnRjtBQUVoRiw2Q0FBd0Q7QUFFM0MsUUFBQSwyQkFBMkIsR0FBc0I7SUFDNUQ7UUFDRSxNQUFNLEVBQUUsQ0FBQyxLQUFLLENBQUM7UUFDZixPQUFPLEVBQUUsb0JBQW9CO1FBQzdCLFdBQVcsRUFBRSxDQUFDLElBQUEscUNBQXlCLEVBQUMsc0NBQXlCLEVBQUUsRUFBRSxDQUFDLENBQUM7S0FDeEU7Q0FDRixDQUFBIn0=