"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.vendorSellersMiddlewares = void 0;
const framework_1 = require("@medusajs/framework");
const query_config_1 = require("./query-config");
const validators_1 = require("./validators");
exports.vendorSellersMiddlewares = [
    {
        method: ["POST"],
        matcher: "/vendor/sellers",
        middlewares: [
            (0, framework_1.validateAndTransformBody)(validators_1.VendorCreateSeller),
            (0, framework_1.validateAndTransformQuery)(validators_1.VendorGetSellerParams, query_config_1.vendorSellerQueryConfig.retrieve),
        ],
    },
    {
        method: ["GET"],
        matcher: "/vendor/sellers/me",
        middlewares: [
            (0, framework_1.validateAndTransformQuery)(validators_1.VendorGetSellerParams, query_config_1.vendorSellerQueryConfig.list),
        ],
    },
    {
        method: ["POST"],
        matcher: "/vendor/sellers/me",
        middlewares: [
            (0, framework_1.validateAndTransformBody)(validators_1.VendorUpdateSeller),
            (0, framework_1.validateAndTransformQuery)(validators_1.VendorGetSellerParams, query_config_1.vendorSellerQueryConfig.retrieve),
        ],
    },
    {
        method: ["GET", "POST"],
        matcher: "/vendor/sellers/me/onboarding",
        middlewares: [
            (0, framework_1.validateAndTransformQuery)(validators_1.VendorGetOnboardingParams, query_config_1.vendorOnboardingQueryConfig.retrieve),
        ],
    },
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWlkZGxld2FyZXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvYXBpL3ZlbmRvci9zZWxsZXJzL21pZGRsZXdhcmVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLG1EQUc2QjtBQUc3QixpREFHd0I7QUFDeEIsNkNBS3NCO0FBRVQsUUFBQSx3QkFBd0IsR0FBc0I7SUFDekQ7UUFDRSxNQUFNLEVBQUUsQ0FBQyxNQUFNLENBQUM7UUFDaEIsT0FBTyxFQUFFLGlCQUFpQjtRQUMxQixXQUFXLEVBQUU7WUFDWCxJQUFBLG9DQUF3QixFQUFDLCtCQUFrQixDQUFDO1lBQzVDLElBQUEscUNBQXlCLEVBQ3ZCLGtDQUFxQixFQUNyQixzQ0FBdUIsQ0FBQyxRQUFRLENBQ2pDO1NBQ0Y7S0FDRjtJQUNEO1FBQ0UsTUFBTSxFQUFFLENBQUMsS0FBSyxDQUFDO1FBQ2YsT0FBTyxFQUFFLG9CQUFvQjtRQUM3QixXQUFXLEVBQUU7WUFDWCxJQUFBLHFDQUF5QixFQUN2QixrQ0FBcUIsRUFDckIsc0NBQXVCLENBQUMsSUFBSSxDQUM3QjtTQUNGO0tBQ0Y7SUFDRDtRQUNFLE1BQU0sRUFBRSxDQUFDLE1BQU0sQ0FBQztRQUNoQixPQUFPLEVBQUUsb0JBQW9CO1FBQzdCLFdBQVcsRUFBRTtZQUNYLElBQUEsb0NBQXdCLEVBQUMsK0JBQWtCLENBQUM7WUFDNUMsSUFBQSxxQ0FBeUIsRUFDdkIsa0NBQXFCLEVBQ3JCLHNDQUF1QixDQUFDLFFBQVEsQ0FDakM7U0FDRjtLQUNGO0lBQ0Q7UUFDRSxNQUFNLEVBQUUsQ0FBQyxLQUFLLEVBQUUsTUFBTSxDQUFDO1FBQ3ZCLE9BQU8sRUFBRSwrQkFBK0I7UUFDeEMsV0FBVyxFQUFFO1lBQ1gsSUFBQSxxQ0FBeUIsRUFDdkIsc0NBQXlCLEVBQ3pCLDBDQUEyQixDQUFDLFFBQVEsQ0FDckM7U0FDRjtLQUNGO0NBQ0YsQ0FBQyJ9