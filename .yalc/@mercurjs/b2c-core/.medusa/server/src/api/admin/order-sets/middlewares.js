"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.orderSetsMiddlewares = void 0;
const framework_1 = require("@medusajs/framework");
const query_config_1 = require("./query-config");
const validators_1 = require("./validators");
exports.orderSetsMiddlewares = [
    {
        method: ['GET'],
        matcher: '/admin/order-sets',
        middlewares: [
            (0, framework_1.validateAndTransformQuery)(validators_1.AdminOrderSetParams, query_config_1.adminOrderSetQueryConfig.list)
        ]
    },
    {
        method: ['GET'],
        matcher: '/admin/order-sets/:id',
        middlewares: [
            (0, framework_1.validateAndTransformQuery)(validators_1.AdminOrderSetParams, query_config_1.adminOrderSetQueryConfig.retrieve)
        ]
    }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWlkZGxld2FyZXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvYXBpL2FkbWluL29yZGVyLXNldHMvbWlkZGxld2FyZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsbURBQStEO0FBRy9ELGlEQUF5RDtBQUN6RCw2Q0FBa0Q7QUFFckMsUUFBQSxvQkFBb0IsR0FBc0I7SUFDckQ7UUFDRSxNQUFNLEVBQUUsQ0FBQyxLQUFLLENBQUM7UUFDZixPQUFPLEVBQUUsbUJBQW1CO1FBQzVCLFdBQVcsRUFBRTtZQUNYLElBQUEscUNBQXlCLEVBQ3ZCLGdDQUFtQixFQUNuQix1Q0FBd0IsQ0FBQyxJQUFJLENBQzlCO1NBQ0Y7S0FDRjtJQUNEO1FBQ0UsTUFBTSxFQUFFLENBQUMsS0FBSyxDQUFDO1FBQ2YsT0FBTyxFQUFFLHVCQUF1QjtRQUNoQyxXQUFXLEVBQUU7WUFDWCxJQUFBLHFDQUF5QixFQUN2QixnQ0FBbUIsRUFDbkIsdUNBQXdCLENBQUMsUUFBUSxDQUNsQztTQUNGO0tBQ0Y7Q0FDRixDQUFBIn0=