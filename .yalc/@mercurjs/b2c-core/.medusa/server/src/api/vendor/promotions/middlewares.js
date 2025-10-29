"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.vendorPromotionsMiddlewares = void 0;
const framework_1 = require("@medusajs/framework");
const seller_promotion_1 = __importDefault(require("../../../links/seller-promotion"));
const middlewares_1 = require("../../../shared/infra/http/middlewares");
const query_config_1 = require("./query-config");
const validators_1 = require("./validators");
exports.vendorPromotionsMiddlewares = [
    {
        method: ['GET'],
        matcher: '/vendor/promotions',
        middlewares: [
            (0, framework_1.validateAndTransformQuery)(validators_1.VendorGetPromotionsParams, query_config_1.vendorPromotionQueryConfig.list),
            (0, middlewares_1.filterBySellerId)()
        ]
    },
    {
        method: ['GET'],
        matcher: '/vendor/promotions/:id',
        middlewares: [
            (0, framework_1.validateAndTransformQuery)(validators_1.VendorGetPromotionsParams, query_config_1.vendorPromotionQueryConfig.retrieve),
            (0, middlewares_1.checkResourceOwnershipByResourceId)({
                entryPoint: seller_promotion_1.default.entryPoint,
                filterField: 'promotion_id'
            })
        ]
    },
    {
        method: ['GET'],
        matcher: '/vendor/promotions/:id/:rule_type',
        middlewares: [
            (0, framework_1.unlessPath)(/.*\/promotions\/rule-attribute-options/, (0, framework_1.validateAndTransformQuery)(validators_1.VendorGetPromotionRuleTypeParams, query_config_1.vendorPromotionQueryConfig.retrieve)),
            (0, middlewares_1.checkResourceOwnershipByResourceId)({
                entryPoint: seller_promotion_1.default.entryPoint,
                filterField: 'promotion_id'
            })
        ]
    },
    {
        method: ['POST'],
        matcher: '/vendor/promotions/:id',
        middlewares: [
            (0, framework_1.validateAndTransformBody)(validators_1.VendorUpdatePromotion),
            (0, framework_1.validateAndTransformQuery)(validators_1.VendorGetPromotionsParams, query_config_1.vendorPromotionQueryConfig.retrieve),
            (0, middlewares_1.checkResourceOwnershipByResourceId)({
                entryPoint: seller_promotion_1.default.entryPoint,
                filterField: 'promotion_id'
            })
        ]
    },
    {
        method: ['DELETE'],
        matcher: '/vendor/promotions/:id',
        middlewares: [
            (0, middlewares_1.checkResourceOwnershipByResourceId)({
                entryPoint: seller_promotion_1.default.entryPoint,
                filterField: 'promotion_id'
            })
        ]
    },
    {
        method: ['POST'],
        matcher: '/vendor/promotions',
        middlewares: [
            (0, framework_1.validateAndTransformBody)(validators_1.VendorCreatePromotion),
            (0, framework_1.validateAndTransformQuery)(validators_1.VendorGetPromotionsParams, query_config_1.vendorPromotionQueryConfig.retrieve)
        ]
    },
    {
        method: ['POST'],
        matcher: '/vendor/promotions/:id/buy-rules/batch',
        middlewares: [
            (0, middlewares_1.checkResourceOwnershipByResourceId)({
                entryPoint: seller_promotion_1.default.entryPoint,
                filterField: 'promotion_id'
            }),
            (0, framework_1.validateAndTransformBody)(validators_1.VendorBatchPromotionRules),
            (0, framework_1.validateAndTransformQuery)(validators_1.VendorGetPromotionsParams, query_config_1.vendorPromotionQueryConfig.retrieve)
        ]
    },
    {
        method: ['POST'],
        matcher: '/vendor/promotions/:id/rules/batch',
        middlewares: [
            (0, middlewares_1.checkResourceOwnershipByResourceId)({
                entryPoint: seller_promotion_1.default.entryPoint,
                filterField: 'promotion_id'
            }),
            (0, framework_1.validateAndTransformBody)(validators_1.VendorBatchPromotionRules),
            (0, framework_1.validateAndTransformQuery)(validators_1.VendorGetPromotionsParams, query_config_1.vendorPromotionQueryConfig.retrieve)
        ]
    },
    {
        method: ['POST'],
        matcher: '/vendor/promotions/:id/target-rules/batch',
        middlewares: [
            (0, middlewares_1.checkResourceOwnershipByResourceId)({
                entryPoint: seller_promotion_1.default.entryPoint,
                filterField: 'promotion_id'
            }),
            (0, framework_1.validateAndTransformBody)(validators_1.VendorBatchPromotionRules),
            (0, framework_1.validateAndTransformQuery)(validators_1.VendorGetPromotionsParams, query_config_1.vendorPromotionQueryConfig.retrieve)
        ]
    },
    {
        method: ['GET'],
        matcher: '/vendor/promotions/rule-value-options/:rule_type/:rule_attribute_id',
        middlewares: [
            (0, framework_1.validateAndTransformQuery)(validators_1.VendorGetPromotionsRuleValueParams, query_config_1.listRuleValueTransformQueryConfig)
        ]
    },
    {
        method: ['GET'],
        matcher: '/vendor/promotions/rule-attribute-options/:rule_type',
        middlewares: [
            (0, framework_1.validateAndTransformQuery)(validators_1.VendorGetPromotionRuleParams, query_config_1.vendorRuleTransformQueryConfig.list)
        ]
    }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWlkZGxld2FyZXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvYXBpL3ZlbmRvci9wcm9tb3Rpb25zL21pZGRsZXdhcmVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLG1EQUs0QjtBQUU1Qix1RkFBNkQ7QUFDN0Qsd0VBRytDO0FBQy9DLGlEQUl1QjtBQUN2Qiw2Q0FRcUI7QUFFUixRQUFBLDJCQUEyQixHQUFzQjtJQUM1RDtRQUNFLE1BQU0sRUFBRSxDQUFDLEtBQUssQ0FBQztRQUNmLE9BQU8sRUFBRSxvQkFBb0I7UUFDN0IsV0FBVyxFQUFFO1lBQ1gsSUFBQSxxQ0FBeUIsRUFDdkIsc0NBQXlCLEVBQ3pCLHlDQUEwQixDQUFDLElBQUksQ0FDaEM7WUFDRCxJQUFBLDhCQUFnQixHQUFFO1NBQ25CO0tBQ0Y7SUFDRDtRQUNFLE1BQU0sRUFBRSxDQUFDLEtBQUssQ0FBQztRQUNmLE9BQU8sRUFBRSx3QkFBd0I7UUFDakMsV0FBVyxFQUFFO1lBQ1gsSUFBQSxxQ0FBeUIsRUFDdkIsc0NBQXlCLEVBQ3pCLHlDQUEwQixDQUFDLFFBQVEsQ0FDcEM7WUFDRCxJQUFBLGdEQUFrQyxFQUFDO2dCQUNqQyxVQUFVLEVBQUUsMEJBQWUsQ0FBQyxVQUFVO2dCQUN0QyxXQUFXLEVBQUUsY0FBYzthQUM1QixDQUFDO1NBQ0g7S0FDRjtJQUNEO1FBQ0UsTUFBTSxFQUFFLENBQUMsS0FBSyxDQUFDO1FBQ2YsT0FBTyxFQUFFLG1DQUFtQztRQUM1QyxXQUFXLEVBQUU7WUFDWCxJQUFBLHNCQUFVLEVBQ1Isd0NBQXdDLEVBQ3hDLElBQUEscUNBQXlCLEVBQ3ZCLDZDQUFnQyxFQUNoQyx5Q0FBMEIsQ0FBQyxRQUFRLENBQ3BDLENBQ0Y7WUFDRCxJQUFBLGdEQUFrQyxFQUFDO2dCQUNqQyxVQUFVLEVBQUUsMEJBQWUsQ0FBQyxVQUFVO2dCQUN0QyxXQUFXLEVBQUUsY0FBYzthQUM1QixDQUFDO1NBQ0g7S0FD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