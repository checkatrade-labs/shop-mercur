"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.vendorFulfillmentProvidersMiddlewares = void 0;
const framework_1 = require("@medusajs/framework");
const query_config_1 = require("./query-config");
const validators_1 = require("./validators");
exports.vendorFulfillmentProvidersMiddlewares = [
    {
        method: ['GET'],
        matcher: '/vendor/fulfillment-providers',
        middlewares: [
            (0, framework_1.validateAndTransformQuery)(validators_1.VendorGetFulfillmentProvidersParams, query_config_1.vendorFulfillmentProvidersQueryConfig.list)
        ]
    }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWlkZGxld2FyZXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvYXBpL3ZlbmRvci9mdWxmaWxsbWVudC1wcm92aWRlcnMvbWlkZGxld2FyZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsbURBQStEO0FBRy9ELGlEQUFzRTtBQUN0RSw2Q0FBa0U7QUFFckQsUUFBQSxxQ0FBcUMsR0FBc0I7SUFDdEU7UUFDRSxNQUFNLEVBQUUsQ0FBQyxLQUFLLENBQUM7UUFDZixPQUFPLEVBQUUsK0JBQStCO1FBQ3hDLFdBQVcsRUFBRTtZQUNYLElBQUEscUNBQXlCLEVBQ3ZCLGdEQUFtQyxFQUNuQyxvREFBcUMsQ0FBQyxJQUFJLENBQzNDO1NBQ0Y7S0FDRjtDQUNGLENBQUEifQ==