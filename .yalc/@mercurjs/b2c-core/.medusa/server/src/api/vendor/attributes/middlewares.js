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
exports.vendorAttributeMiddlewares = void 0;
const framework_1 = require("@medusajs/framework");
const QueryConfig = __importStar(require("./query-config"));
const validators_1 = require("./validators");
exports.vendorAttributeMiddlewares = [
    {
        method: ['GET'],
        matcher: '/vendor/attributes',
        middlewares: [
            (0, framework_1.validateAndTransformQuery)(validators_1.VendorGetAttributesParams, QueryConfig.listAttributeQueryConfig)
        ]
    },
    {
        method: ['GET'],
        matcher: '/vendor/attributes/:id',
        middlewares: [
            (0, framework_1.validateAndTransformQuery)(validators_1.VendorGetAttributesParams, QueryConfig.retrieveAttributeQueryConfig)
        ]
    }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWlkZGxld2FyZXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvYXBpL3ZlbmRvci9hdHRyaWJ1dGVzL21pZGRsZXdhcmVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG1EQUFnRjtBQUVoRiw0REFBNkM7QUFDN0MsNkNBQXdEO0FBRTNDLFFBQUEsMEJBQTBCLEdBQXNCO0lBQzNEO1FBQ0UsTUFBTSxFQUFFLENBQUMsS0FBSyxDQUFDO1FBQ2YsT0FBTyxFQUFFLG9CQUFvQjtRQUM3QixXQUFXLEVBQUU7WUFDWCxJQUFBLHFDQUF5QixFQUN2QixzQ0FBeUIsRUFDekIsV0FBVyxDQUFDLHdCQUF3QixDQUNyQztTQUNGO0tBQ0Y7SUFFRDtRQUNFLE1BQU0sRUFBRSxDQUFDLEtBQUssQ0FBQztRQUNmLE9BQU8sRUFBRSx3QkFBd0I7UUFDakMsV0FBVyxFQUFFO1lBQ1gsSUFBQSxxQ0FBeUIsRUFDdkIsc0NBQXlCLEVBQ3pCLFdBQVcsQ0FBQyw0QkFBNEIsQ0FDekM7U0FDRjtLQUNGO0NBQ0YsQ0FBQSJ9