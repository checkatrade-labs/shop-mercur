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
exports.attributeMiddlewares = void 0;
const framework_1 = require("@medusajs/framework");
const QueryConfig = __importStar(require("./query-config"));
const validators_1 = require("./validators");
exports.attributeMiddlewares = [
    {
        method: ['GET'],
        matcher: '/admin/attributes',
        middlewares: [
            (0, framework_1.validateAndTransformQuery)(validators_1.AdminGetAttributesParams, QueryConfig.listAttributeQueryConfig)
        ]
    },
    {
        method: ['POST'],
        matcher: '/admin/attributes',
        middlewares: [
            (0, framework_1.validateAndTransformBody)(validators_1.AdminCreateAttribute),
            (0, framework_1.validateAndTransformQuery)(validators_1.AdminGetAttributeParams, QueryConfig.retrieveAttributeQueryConfig)
        ]
    },
    {
        method: ['GET'],
        matcher: '/admin/attributes/:id',
        middlewares: [
            (0, framework_1.validateAndTransformQuery)(validators_1.AdminGetAttributeParams, QueryConfig.retrieveAttributeQueryConfig)
        ]
    },
    {
        method: ['POST'],
        matcher: '/admin/attributes/:id',
        middlewares: [
            (0, framework_1.validateAndTransformBody)(validators_1.AdminUpdateAttribute),
            (0, framework_1.validateAndTransformQuery)(validators_1.AdminGetAttributeParams, QueryConfig.retrieveAttributeQueryConfig)
        ]
    },
    {
        method: ['GET'],
        matcher: '/admin/attributes/:id/values',
        middlewares: [
            (0, framework_1.validateAndTransformQuery)(validators_1.AdminGetAttributeValuesParams, QueryConfig.listAttributeValueQueryConfig)
        ]
    },
    {
        method: ['POST'],
        matcher: '/admin/attributes/:id/values',
        middlewares: [
            (0, framework_1.validateAndTransformBody)(validators_1.AdminCreateAttributeValue),
            (0, framework_1.validateAndTransformQuery)(validators_1.AdminGetAttributeValueParams, QueryConfig.retrieveAttributeValueQueryConfig)
        ]
    },
    {
        method: ['GET'],
        matcher: '/admin/attributes/:id/values/:valueId',
        middlewares: [
            (0, framework_1.validateAndTransformQuery)(validators_1.AdminGetAttributeValueParams, QueryConfig.retrieveAttributeValueQueryConfig)
        ]
    },
    {
        method: ['POST'],
        matcher: '/admin/attributes/:id/values/:valueId',
        middlewares: [
            (0, framework_1.validateAndTransformBody)(validators_1.AdminUpdateAttributeValue),
            (0, framework_1.validateAndTransformQuery)(validators_1.AdminGetAttributeValueParams, QueryConfig.retrieveAttributeValueQueryConfig)
        ]
    }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWlkZGxld2FyZXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvYXBpL2FkbWluL2F0dHJpYnV0ZXMvbWlkZGxld2FyZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsbURBSTRCO0FBRTVCLDREQUE2QztBQUM3Qyw2Q0FTcUI7QUFFUixRQUFBLG9CQUFvQixHQUFzQjtJQUNyRDtRQUNFLE1BQU0sRUFBRSxDQUFDLEtBQUssQ0FBQztRQUNmLE9BQU8sRUFBRSxtQkFBbUI7UUFDNUIsV0FBVyxFQUFFO1lBQ1gsSUFBQSxxQ0FBeUIsRUFDdkIscUNBQXdCLEVBQ3hCLFdBQVcsQ0FBQyx3QkFBd0IsQ0FDckM7U0FDRjtLQUNGO0lBQ0Q7UUFDRSxNQUFNLEVBQUUsQ0FBQyxNQUFNLENBQUM7UUFDaEIsT0FBTyxFQUFFLG1CQUFtQjtRQUM1QixXQUFXLEVBQUU7WUFDWCxJQUFBLG9DQUF3QixFQUFDLGlDQUFvQixDQUFDO1lBQzlDLElBQUEscUNBQXlCLEVBQ3ZCLG9DQUF1QixFQUN2QixXQUFXLENBQUMsNEJBQTRCLENBQ3pDO1NBQ0Y7S0FDRjtJQUNEO1FBQ0UsTUFBTSxFQUFFLENBQUMsS0FBSyxDQUFDO1FBQ2YsT0FBTyxFQUFFLHVCQUF1QjtRQUNoQyxXQUFXLEVBQUU7WUFDWCxJQUFBLHFDQUF5QixFQUN2QixvQ0FBdUIsRUFDdkIsV0FBVyxDQUFDLDRCQUE0QixDQUN6QztTQUNGO0tBQ0Y7SUFDRDtRQUNFLE1BQU0sRUFBRSxDQUFDLE1BQU0sQ0FBQztRQUNoQixPQUFPLEVBQUUsdUJBQXVCO1FBQ2hDLFdBQVcsRUFBRTtZQUNYLElBQUEsb0NBQXdCLEVBQUMsaUNBQW9CLENBQUM7WUFDOUMsSUFBQSxxQ0FBeUIsRUFDdkIsb0NBQXVCLEVBQ3ZCLFdBQVcsQ0FBQyw0QkFBNEIsQ0FDekM7U0FDRjtLQUNGO0lBQ0Q7UUFDRSxNQUFNLEVBQUUsQ0FBQyxLQUFLLENBQUM7UUFDZixPQUFPLEVBQUUsOEJBQThCO1FBQ3ZDLFdBQVcsRUFBRTtZQUNYLElBQUEscUNBQXlCLEVBQ3ZCLDBDQUE2QixFQUM3QixXQUFXLENBQUMsNkJBQTZCLENBQzFDO1NBQ0Y7S0FDRjtJQUNEO1FBQ0UsTUFBTSxFQUFFLENBQUMsTUFBTSxDQUFDO1FBQ2hCLE9BQU8sRUFBRSw4QkFBOEI7UUFDdkMsV0FBVyxFQUFFO1lBQ1gsSUFBQSxvQ0FBd0IsRUFBQyxzQ0FBeUIsQ0FBQztZQUNuRCxJQUFBLHFDQUF5QixFQUN2Qix5Q0FBNEIsRUFDNUIsV0FBVyxDQUFDLGlDQUFpQyxDQUM5QztTQUNGO0tBQ0Y7SUFDRDtRQUNFLE1BQU0sRUFBRSxDQUFDLEtBQUssQ0FBQztRQUNmLE9BQU8sRUFBRSx1Q0FBdUM7UUFDaEQsV0FBVyxFQUFFO1lBQ1gsSUFBQSxxQ0FBeUIsRUFDdkIseUNBQTRCLEVBQzVCLFdBQVcsQ0FBQyxpQ0FBaUMsQ0FDOUM7U0FDRjtLQUNGO0lBQ0Q7UUFDRSxNQUFNLEVBQUUsQ0FBQyxNQUFNLENBQUM7UUFDaEIsT0FBTyxFQUFFLHVDQUF1QztRQUNoRCxXQUFXLEVBQUU7WUFDWCxJQUFBLG9DQUF3QixFQUFDLHNDQUF5QixDQUFDO1lBQ25ELElBQUEscUNBQXlCLEVBQ3ZCLHlDQUE0QixFQUM1QixXQUFXLENBQUMsaUNBQWlDLENBQzlDO1NBQ0Y7S0FDRjtDQUNGLENBQUEifQ==