"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.storeReturnsMiddlewares = void 0;
const framework_1 = require("@medusajs/framework");
const query_config_1 = require("./query-config");
const validators_1 = require("./validators");
exports.storeReturnsMiddlewares = [
    {
        method: ['GET'],
        matcher: '/store/returns',
        middlewares: [
            (0, framework_1.validateAndTransformQuery)(validators_1.StoreGetReturnsParams, query_config_1.storeReturnQueryConfig.list)
        ]
    },
    {
        method: ['GET'],
        matcher: '/store/returns/:id',
        middlewares: [
            (0, framework_1.validateAndTransformQuery)(validators_1.StoreGetReturnsParams, query_config_1.storeReturnQueryConfig.retrieve)
        ]
    }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWlkZGxld2FyZXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvYXBpL3N0b3JlL3JldHVybnMvbWlkZGxld2FyZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsbURBQWdGO0FBRWhGLGlEQUF1RDtBQUN2RCw2Q0FBb0Q7QUFFdkMsUUFBQSx1QkFBdUIsR0FBc0I7SUFDeEQ7UUFDRSxNQUFNLEVBQUUsQ0FBQyxLQUFLLENBQUM7UUFDZixPQUFPLEVBQUUsZ0JBQWdCO1FBQ3pCLFdBQVcsRUFBRTtZQUNYLElBQUEscUNBQXlCLEVBQ3ZCLGtDQUFxQixFQUNyQixxQ0FBc0IsQ0FBQyxJQUFJLENBQzVCO1NBQ0Y7S0FDRjtJQUNEO1FBQ0UsTUFBTSxFQUFFLENBQUMsS0FBSyxDQUFDO1FBQ2YsT0FBTyxFQUFFLG9CQUFvQjtRQUM3QixXQUFXLEVBQUU7WUFDWCxJQUFBLHFDQUF5QixFQUN2QixrQ0FBcUIsRUFDckIscUNBQXNCLENBQUMsUUFBUSxDQUNoQztTQUNGO0tBQ0Y7Q0FDRixDQUFBIn0=