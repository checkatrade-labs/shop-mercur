"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.storeSellerMiddlewares = void 0;
const framework_1 = require("@medusajs/framework");
const query_config_1 = require("./query-config");
const validators_1 = require("./validators");
exports.storeSellerMiddlewares = [
    {
        methods: ['GET'],
        matcher: '/store/seller',
        middlewares: [
            (0, framework_1.validateAndTransformQuery)(validators_1.StoreGetSellersParams, query_config_1.storeSellerQueryConfig.list)
        ]
    },
    {
        methods: ['GET'],
        matcher: '/store/seller/:handle',
        middlewares: [
            (0, framework_1.validateAndTransformQuery)(validators_1.StoreGetSellersParams, query_config_1.storeSellerQueryConfig.retrieve)
        ]
    }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWlkZGxld2FyZXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvYXBpL3N0b3JlL3NlbGxlci9taWRkbGV3YXJlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxtREFBZ0Y7QUFFaEYsaURBQXVEO0FBQ3ZELDZDQUFvRDtBQUV2QyxRQUFBLHNCQUFzQixHQUFzQjtJQUN2RDtRQUNFLE9BQU8sRUFBRSxDQUFDLEtBQUssQ0FBQztRQUNoQixPQUFPLEVBQUUsZUFBZTtRQUN4QixXQUFXLEVBQUU7WUFDWCxJQUFBLHFDQUF5QixFQUN2QixrQ0FBcUIsRUFDckIscUNBQXNCLENBQUMsSUFBSSxDQUM1QjtTQUNGO0tBQ0Y7SUFDRDtRQUNFLE9BQU8sRUFBRSxDQUFDLEtBQUssQ0FBQztRQUNoQixPQUFPLEVBQUUsdUJBQXVCO1FBQ2hDLFdBQVcsRUFBRTtZQUNYLElBQUEscUNBQXlCLEVBQ3ZCLGtDQUFxQixFQUNyQixxQ0FBc0IsQ0FBQyxRQUFRLENBQ2hDO1NBQ0Y7S0FDRjtDQUNGLENBQUEifQ==