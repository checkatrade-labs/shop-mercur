"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.vendorMiddlewares = void 0;
const framework_1 = require("@medusajs/framework");
const middlewares_1 = require("../../shared/infra/http/middlewares");
const utils_1 = require("../../shared/infra/http/utils");
const middlewares_2 = require("./attributes/middlewares");
const middlewares_3 = require("./campaigns/middlewares");
const cors_1 = require("./cors");
const middlewares_4 = require("./customer-groups/middlewares");
const middlewares_5 = require("./customers/middlewares");
const middlewares_6 = require("./fulfillment-providers/middlewares");
const middlewares_7 = require("./fulfillment-sets/middlewares");
const middlewares_8 = require("./inventory-items/middlewares");
const middlewares_9 = require("./invites/middlewares");
const middlewares_10 = require("./me/middlewares");
const middlewares_11 = require("./members/middlewares");
const middlewares_12 = require("./notifications/middlewares");
const middlewares_13 = require("./orders/middlewares");
const middlewares_14 = require("./payout-account/middlewares");
const middlewares_15 = require("./payouts/middlewares");
const middlewares_16 = require("./price-lists/middlewares");
const middlewares_17 = require("./price-preferences/middlewares");
const middlewares_18 = require("./product-categories/middlewares");
const middlewares_19 = require("./product-collections/middlewares");
const middlewares_20 = require("./product-tags/middlewares");
const middlewares_21 = require("./product-types/middlewares");
const middlewares_22 = require("./products/middlewares");
const middlewares_23 = require("./promotions/middlewares");
const middlewares_24 = require("./regions/middlewares");
const middlewares_25 = require("./reservations/middlewares");
const middlewares_26 = require("./returns/middlewares");
const middlewares_27 = require("./sales-channels/middlewares");
const middlewares_28 = require("./sellers/middlewares");
const middlewares_29 = require("./shipping-options/middlewares");
const middlewares_30 = require("./shipping-profiles/middlewares");
const middlewares_31 = require("./statistics/middlewares");
const middlewares_32 = require("./stock-locations/middlewares");
const middlewares_33 = require("./stores/middlewares");
const middlewares_34 = require("./uploads/middlewares");
exports.vendorMiddlewares = [
    {
        matcher: "/vendor*",
        middlewares: [cors_1.vendorCors],
    },
    /**
     * @desc Here we are authenticating the seller routes
     * except for the route for creating a seller
     * and the route for accepting a member invite
     */
    {
        matcher: "/vendor/sellers",
        method: ["POST"],
        middlewares: [
            (0, framework_1.authenticate)("seller", ["bearer", "session"], {
                allowUnregistered: true,
            }),
        ],
    },
    {
        matcher: "/vendor/invites/accept",
        method: ["POST"],
        middlewares: [
            (0, framework_1.authenticate)("seller", ["bearer", "session"], {
                allowUnregistered: true,
            }),
        ],
    },
    {
        matcher: "/vendor/*",
        middlewares: [
            (0, utils_1.unlessBaseUrl)(/^\/vendor\/(sellers|invites\/accept)$/, (0, middlewares_1.checkSellerApproved)(["bearer", "session"])),
            (0, utils_1.unlessBaseUrl)(/^\/vendor\/(sellers|invites\/accept)$/, (0, framework_1.authenticate)("seller", ["bearer", "session"], {
                allowUnregistered: false,
            })),
            (0, utils_1.unlessBaseUrl)(/^\/vendor\/(sellers|orders|fulfillment|invites\/accept)/, middlewares_1.storeActiveGuard),
        ],
    },
    ...middlewares_10.vendorMeMiddlewares,
    ...middlewares_28.vendorSellersMiddlewares,
    ...middlewares_11.vendorMembersMiddlewares,
    ...middlewares_22.vendorProductsMiddlewares,
    ...middlewares_9.vendorInvitesMiddlewares,
    ...middlewares_7.vendorFulfillmentSetsMiddlewares,
    ...middlewares_32.vendorStockLocationsMiddlewares,
    ...middlewares_29.vendorShippingOptionsMiddlewares,
    ...middlewares_14.vendorPayoutAccountMiddlewares,
    ...middlewares_8.vendorInventoryItemsMiddlewares,
    ...middlewares_15.vendorPayoutMiddlewares,
    ...middlewares_13.vendorOrderMiddlewares,
    ...middlewares_8.vendorInventoryItemsMiddlewares,
    ...middlewares_27.vendorSalesChannelMiddlewares,
    ...middlewares_5.vendorCustomersMiddlewares,
    ...middlewares_4.vendorCustomerGroupsMiddlewares,
    ...middlewares_33.vendorStoresMiddlewares,
    ...middlewares_20.vendorProductTagsMiddlewares,
    ...middlewares_21.vendorProductTypesMiddlewares,
    ...middlewares_18.vendorProductCategoriesMiddlewares,
    ...middlewares_19.vendorProductCollectionsMiddlewares,
    ...middlewares_34.vendorUploadMiddlewares,
    ...middlewares_23.vendorPromotionsMiddlewares,
    ...middlewares_25.vendorReservationsMiddlewares,
    ...middlewares_16.vendorPriceListsMiddlewares,
    ...middlewares_23.vendorPromotionsMiddlewares,
    ...middlewares_3.vendorCampaignsMiddlewares,
    ...middlewares_31.vendorStatisticsMiddlewares,
    ...middlewares_6.vendorFulfillmentProvidersMiddlewares,
    ...middlewares_26.vendorReturnsMiddlewares,
    ...middlewares_30.vendorShippingProfilesMiddlewares,
    ...middlewares_24.vendorRegionsMiddlewares,
    ...middlewares_12.vendorNotificationMiddlewares,
    ...middlewares_2.vendorAttributeMiddlewares,
    ...middlewares_17.vendorPricePreferencesRoutesMiddlewares,
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWlkZGxld2FyZXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvYXBpL3ZlbmRvci9taWRkbGV3YXJlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxtREFBb0U7QUFFcEUscUVBRzZDO0FBQzdDLHlEQUE4RDtBQUM5RCwwREFBc0U7QUFDdEUseURBQXFFO0FBQ3JFLGlDQUFvQztBQUNwQywrREFBZ0Y7QUFDaEYseURBQXFFO0FBQ3JFLHFFQUE0RjtBQUM1RixnRUFBa0Y7QUFDbEYsK0RBQWdGO0FBQ2hGLHVEQUFpRTtBQUNqRSxtREFBdUQ7QUFDdkQsd0RBQWlFO0FBQ2pFLDhEQUE0RTtBQUM1RSx1REFBOEQ7QUFDOUQsK0RBQThFO0FBQzlFLHdEQUFnRTtBQUNoRSw0REFBd0U7QUFDeEUsa0VBQTBGO0FBQzFGLG1FQUFzRjtBQUN0RixvRUFBd0Y7QUFDeEYsNkRBQTBFO0FBQzFFLDhEQUE0RTtBQUM1RSx5REFBbUU7QUFDbkUsMkRBQXVFO0FBQ3ZFLHdEQUFpRTtBQUNqRSw2REFBMkU7QUFDM0Usd0RBQWlFO0FBQ2pFLCtEQUE2RTtBQUM3RSx3REFBaUU7QUFDakUsaUVBQWtGO0FBQ2xGLGtFQUFvRjtBQUNwRiwyREFBdUU7QUFDdkUsZ0VBQWdGO0FBQ2hGLHVEQUErRDtBQUMvRCx3REFBZ0U7QUFFbkQsUUFBQSxpQkFBaUIsR0FBc0I7SUFDbEQ7UUFDRSxPQUFPLEVBQUUsVUFBVTtRQUNuQixXQUFXLEVBQUUsQ0FBQyxpQkFBVSxDQUFDO0tBQzFCO0lBQ0Q7Ozs7T0FJRztJQUNIO1FBQ0UsT0FBTyxFQUFFLGlCQUFpQjtRQUMxQixNQUFNLEVBQUUsQ0FBQyxNQUFNLENBQUM7UUFDaEIsV0FBVyxFQUFFO1lBQ1gsSUFBQSx3QkFBWSxFQUFDLFFBQVEsRUFBRSxDQUFDLFFBQVEsRUFBRSxTQUFTLENBQUMsRUFBRTtnQkFDNUMsaUJBQWlCLEVBQUUsSUFBSTthQUN4QixDQUFDO1NBQ0g7S0FDRjtJQUNEO1FBQ0UsT0FBTyxFQUFFLHdCQUF3QjtRQUNqQyxNQUFNLEVBQUUsQ0FBQyxNQUFNLENBQUM7UUFDaEIsV0FBVyxFQUFFO1lBQ1gsSUFBQSx3QkFBWSxFQUFDLFFBQVEsRUFBRSxDQUFDLFFBQVEsRUFBRSxTQUFTLENBQUMsRUFBRTtnQkFDNUMsaUJBQWlCLEVBQUUsSUFBSTthQUN4QixDQUFDO1NBQ0g7S0FDRjtJQUNEO1FBQ0UsT0FBTyxFQUFFLFdBQVc7UUFDcEIsV0FBVyxFQUFFO1lBQ1gsSUFBQSxxQkFBYSxFQUNYLHVDQUF1QyxFQUN2QyxJQUFBLGlDQUFtQixFQUFDLENBQUMsUUFBUSxFQUFFLFNBQVMsQ0FBQyxDQUFDLENBQzNDO1lBQ0QsSUFBQSxxQkFBYSxFQUNYLHVDQUF1QyxFQUN2QyxJQUFBLHdCQUFZLEVBQUMsUUFBUSxFQUFFLENBQUMsUUFBUSxFQUFFLFNBQVMsQ0FBQyxFQUFFO2dCQUM1QyxpQkFBaUIsRUFBRSxLQUFLO2FBQ3pCLENBQUMsQ0FDSDtZQUNELElBQUEscUJBQWEsRUFDWCx5REFBeUQsRUFDekQsOEJBQWdCLENBQ2pCO1NBQ0Y7S0FDRjtJQUNELEdBQUcsa0NBQW1CO0lBQ3RCLEdBQUcsdUNBQXdCO0lBQzNCLEdBQUcsdUNBQXdCO0lBQzNCLEdBQUcsd0NBQXlCO0lBQzVCLEdBQUcsc0NBQXdCO0lBQzNCLEdBQUcsOENBQWdDO0lBQ25DLEdBQUcsOENBQStCO0lBQ2xDLEdBQUcsK0NBQWdDO0lBQ25DLEdBQUcsNkNBQThCO0lBQ2pDLEdBQUcsNkNBQStCO0lBQ2xDLEdBQUcsc0NBQXVCO0lBQzFCLEdBQUcscUNBQXNCO0lBQ3pCLEdBQUcsNkNBQStCO0lBQ2xDLEdBQUcsNENBQTZCO0lBQ2hDLEdBQUcsd0NBQTBCO0lBQzdCLEdBQUcsNkNBQStCO0lBQ2xDLEdBQUcsc0NBQXVCO0lBQzFCLEdBQUcsMkNBQTRCO0lBQy9CLEdBQUcsNENBQTZCO0lBQ2hDLEdBQUcsaURBQWtDO0lBQ3JDLEdBQUcsa0RBQW1DO0lBQ3RDLEdBQUcsc0NBQXVCO0lBQzFCLEdBQUcsMENBQTJCO0lBQzlCLEdBQUcsNENBQTZCO0lBQ2hDLEdBQUcsMENBQTJCO0lBQzlCLEdBQUcsMENBQTJCO0lBQzlCLEdBQUcsd0NBQTBCO0lBQzdCLEdBQUcsMENBQTJCO0lBQzlCLEdBQUcsbURBQXFDO0lBQ3hDLEdBQUcsdUNBQXdCO0lBQzNCLEdBQUcsZ0RBQWlDO0lBQ3BDLEdBQUcsdUNBQXdCO0lBQzNCLEdBQUcsNENBQTZCO0lBQ2hDLEdBQUcsd0NBQTBCO0lBQzdCLEdBQUcsc0RBQXVDO0NBQzNDLENBQUMifQ==