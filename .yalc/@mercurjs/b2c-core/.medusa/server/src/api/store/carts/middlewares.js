"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.storeCartsMiddlewares = void 0;
const framework_1 = require("@medusajs/framework");
const QueryConfig = __importStar(require("@medusajs/medusa/api/store/carts/query-config"));
const validators_1 = require("@medusajs/medusa/api/store/carts/validators");
const validators_2 = require("@medusajs/medusa/api/store/carts/validators");
const validators_3 = require("./validators");
exports.storeCartsMiddlewares = [
    {
        method: ['POST'],
        matcher: '/store/carts/:id/shipping-methods',
        middlewares: [
            (0, framework_1.validateAndTransformBody)(validators_2.StoreAddCartShippingMethods),
            (0, framework_1.validateAndTransformQuery)(validators_1.StoreGetCartsCart, QueryConfig.retrieveTransformQueryConfig)
        ]
    },
    {
        method: ['DELETE'],
        matcher: '/store/carts/:id/shipping-methods',
        middlewares: [
            (0, framework_1.validateAndTransformBody)(validators_3.StoreDeleteCartShippingMethods),
            (0, framework_1.validateAndTransformQuery)(validators_1.StoreGetCartsCart, QueryConfig.retrieveTransformQueryConfig)
        ]
    }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWlkZGxld2FyZXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvYXBpL3N0b3JlL2NhcnRzL21pZGRsZXdhcmVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG1EQUk0QjtBQUM1QiwyRkFBNEU7QUFDNUUsNEVBQStFO0FBQy9FLDRFQUF5RjtBQUV6Riw2Q0FBNkQ7QUFFaEQsUUFBQSxxQkFBcUIsR0FBc0I7SUFDdEQ7UUFDRSxNQUFNLEVBQUUsQ0FBQyxNQUFNLENBQUM7UUFDaEIsT0FBTyxFQUFFLG1DQUFtQztRQUM1QyxXQUFXLEVBQUU7WUFDWCxJQUFBLG9DQUF3QixFQUFDLHdDQUEyQixDQUFDO1lBQ3JELElBQUEscUNBQXlCLEVBQ3ZCLDhCQUFpQixFQUNqQixXQUFXLENBQUMsNEJBQTRCLENBQ3pDO1NBQ0Y7S0FDRjtJQUNEO1FBQ0UsTUFBTSxFQUFFLENBQUMsUUFBUSxDQUFDO1FBQ2xCLE9BQU8sRUFBRSxtQ0FBbUM7UUFDNUMsV0FBVyxFQUFFO1lBQ1gsSUFBQSxvQ0FBd0IsRUFBQywyQ0FBOEIsQ0FBQztZQUN4RCxJQUFBLHFDQUF5QixFQUN2Qiw4QkFBaUIsRUFDakIsV0FBVyxDQUFDLDRCQUE0QixDQUN6QztTQUNGO0tBQ0Y7Q0FDRixDQUFBIn0=