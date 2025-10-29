"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.storeOrderSetMiddlewares = void 0;
const framework_1 = require("@medusajs/framework");
const query_config_1 = require("./query-config");
const validators_1 = require("./validators");
exports.storeOrderSetMiddlewares = [
    {
        method: ['GET'],
        matcher: '/store/order-set',
        middlewares: [
            (0, framework_1.validateAndTransformQuery)(validators_1.StoreGetOrderSetParams, query_config_1.orderSetQueryConfig.list)
        ]
    },
    {
        method: ['GET'],
        matcher: '/store/order-set/:id',
        middlewares: [
            (0, framework_1.validateAndTransformQuery)(validators_1.StoreGetOrderSetParams, query_config_1.orderSetQueryConfig.retrieve)
        ]
    }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWlkZGxld2FyZXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvYXBpL3N0b3JlL29yZGVyLXNldC9taWRkbGV3YXJlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxtREFBZ0Y7QUFFaEYsaURBQW9EO0FBQ3BELDZDQUFxRDtBQUV4QyxRQUFBLHdCQUF3QixHQUFzQjtJQUN6RDtRQUNFLE1BQU0sRUFBRSxDQUFDLEtBQUssQ0FBQztRQUNmLE9BQU8sRUFBRSxrQkFBa0I7UUFDM0IsV0FBVyxFQUFFO1lBQ1gsSUFBQSxxQ0FBeUIsRUFDdkIsbUNBQXNCLEVBQ3RCLGtDQUFtQixDQUFDLElBQUksQ0FDekI7U0FDRjtLQUNGO0lBQ0Q7UUFDRSxNQUFNLEVBQUUsQ0FBQyxLQUFLLENBQUM7UUFDZixPQUFPLEVBQUUsc0JBQXNCO1FBQy9CLFdBQVcsRUFBRTtZQUNYLElBQUEscUNBQXlCLEVBQ3ZCLG1DQUFzQixFQUN0QixrQ0FBbUIsQ0FBQyxRQUFRLENBQzdCO1NBQ0Y7S0FDRjtDQUNGLENBQUEifQ==