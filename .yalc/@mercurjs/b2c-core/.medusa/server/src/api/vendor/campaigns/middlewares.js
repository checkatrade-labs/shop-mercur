"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.vendorCampaignsMiddlewares = void 0;
const framework_1 = require("@medusajs/framework");
const seller_campaign_1 = __importDefault(require("../../../links/seller-campaign"));
const middlewares_1 = require("../../../shared/infra/http/middlewares");
const query_config_1 = require("./query-config");
const validators_1 = require("./validators");
exports.vendorCampaignsMiddlewares = [
    {
        method: ['GET'],
        matcher: '/vendor/campaigns',
        middlewares: [
            (0, framework_1.validateAndTransformQuery)(validators_1.VendorGetCampaignsParams, query_config_1.vendorCampaignQueryConfig.list),
            (0, middlewares_1.filterBySellerId)()
        ]
    },
    {
        method: ['GET'],
        matcher: '/vendor/campaigns/:id',
        middlewares: [
            (0, framework_1.validateAndTransformQuery)(validators_1.VendorGetCampaignsParams, query_config_1.vendorCampaignQueryConfig.retrieve),
            (0, middlewares_1.checkResourceOwnershipByResourceId)({
                entryPoint: seller_campaign_1.default.entryPoint,
                filterField: 'campaign_id'
            })
        ]
    },
    {
        method: ['POST'],
        matcher: '/vendor/campaigns/:id',
        middlewares: [
            (0, framework_1.validateAndTransformBody)(validators_1.VendorUpdateCampaign),
            (0, framework_1.validateAndTransformQuery)(validators_1.VendorGetCampaignsParams, query_config_1.vendorCampaignQueryConfig.retrieve),
            (0, middlewares_1.checkResourceOwnershipByResourceId)({
                entryPoint: seller_campaign_1.default.entryPoint,
                filterField: 'campaign_id'
            })
        ]
    },
    {
        method: ['DELETE'],
        matcher: '/vendor/campaigns/:id',
        middlewares: [
            (0, middlewares_1.checkResourceOwnershipByResourceId)({
                entryPoint: seller_campaign_1.default.entryPoint,
                filterField: 'campaign_id'
            })
        ]
    },
    {
        method: ['POST'],
        matcher: '/vendor/campaigns',
        middlewares: [
            (0, framework_1.validateAndTransformBody)(validators_1.VendorCreateCampaign),
            (0, framework_1.validateAndTransformQuery)(validators_1.VendorGetCampaignsParams, query_config_1.vendorCampaignQueryConfig.retrieve)
        ]
    }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWlkZGxld2FyZXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvYXBpL3ZlbmRvci9jYW1wYWlnbnMvbWlkZGxld2FyZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsbURBSTRCO0FBRTVCLHFGQUEyRDtBQUMzRCx3RUFHK0M7QUFDL0MsaURBQTBEO0FBQzFELDZDQUlxQjtBQUVSLFFBQUEsMEJBQTBCLEdBQXNCO0lBQzNEO1FBQ0UsTUFBTSxFQUFFLENBQUMsS0FBSyxDQUFDO1FBQ2YsT0FBTyxFQUFFLG1CQUFtQjtRQUM1QixXQUFXLEVBQUU7WUFDWCxJQUFBLHFDQUF5QixFQUN2QixxQ0FBd0IsRUFDeEIsd0NBQXlCLENBQUMsSUFBSSxDQUMvQjtZQUNELElBQUEsOEJBQWdCLEdBQUU7U0FDbkI7S0FDRjtJQUNEO1FBQ0UsTUFBTSxFQUFFLENBQUMsS0FBSyxDQUFDO1FBQ2YsT0FBTyxFQUFFLHVCQUF1QjtRQUNoQyxXQUFXLEVBQUU7WUFDWCxJQUFBLHFDQUF5QixFQUN2QixxQ0FBd0IsRUFDeEIsd0NBQXlCLENBQUMsUUFBUSxDQUNuQztZQUNELElBQUEsZ0RBQWtDLEVBQUM7Z0JBQ2pDLFVBQVUsRUFBRSx5QkFBYyxDQUFDLFVBQVU7Z0JBQ3JDLFdBQVcsRUFBRSxhQUFhO2FBQzNCLENBQUM7U0FDSDtLQUNGO0lBQ0Q7UUFDRSxNQUFNLEVBQUUsQ0FBQyxNQUFNLENBQUM7UUFDaEIsT0FBTyxFQUFFLHVCQUF1QjtRQUNoQyxXQUFXLEVBQUU7WUFDWCxJQUFBLG9DQUF3QixFQUFDLGlDQUFvQixDQUFDO1lBQzlDLElBQUEscUNBQXlCLEVBQ3ZCLHFDQUF3QixFQUN4Qix3Q0FBeUIsQ0FBQyxRQUFRLENBQ25DO1lBQ0QsSUFBQSxnREFBa0MsRUFBQztnQkFDakMsVUFBVSxFQUFFLHlCQUFjLENBQUMsVUFBVTtnQkFDckMsV0FBVyxFQUFFLGFBQWE7YUFDM0IsQ0FBQztTQUNIO0tBQ0Y7SUFDRDtRQUNFLE1BQU0sRUFBRSxDQUFDLFFBQVEsQ0FBQztRQUNsQixPQUFPLEVBQUUsdUJBQXVCO1FBQ2hDLFdBQVcsRUFBRTtZQUNYLElBQUEsZ0RBQWtDLEVBQUM7Z0JBQ2pDLFVBQVUsRUFBRSx5QkFBYyxDQUFDLFVBQVU7Z0JBQ3JDLFdBQVcsRUFBRSxhQUFhO2FBQzNCLENBQUM7U0FDSDtLQUNGO0lBQ0Q7UUFDRSxNQUFNLEVBQUUsQ0FBQyxNQUFNLENBQUM7UUFDaEIsT0FBTyxFQUFFLG1CQUFtQjtRQUM1QixXQUFXLEVBQUU7WUFDWCxJQUFBLG9DQUF3QixFQUFDLGlDQUFvQixDQUFDO1lBQzlDLElBQUEscUNBQXlCLEVBQ3ZCLHFDQUF3QixFQUN4Qix3Q0FBeUIsQ0FBQyxRQUFRLENBQ25DO1NBQ0Y7S0FDRjtDQUNGLENBQUEifQ==