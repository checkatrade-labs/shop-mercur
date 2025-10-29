"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.vendorInvitesMiddlewares = void 0;
const framework_1 = require("@medusajs/framework");
const middlewares_1 = require("../../../shared/infra/http/middlewares");
const query_config_1 = require("./query-config");
const validators_1 = require("./validators");
exports.vendorInvitesMiddlewares = [
    {
        method: ['GET'],
        matcher: '/vendor/invites',
        middlewares: [
            (0, framework_1.validateAndTransformQuery)(validators_1.VendorGetMemberInviteParams, query_config_1.vendorMemberInviteQueryConfig.list),
            (0, middlewares_1.filterBySellerId)()
        ]
    },
    {
        method: ['POST'],
        matcher: '/vendor/invites',
        middlewares: [
            (0, framework_1.validateAndTransformBody)(validators_1.VendorInviteMember),
            (0, framework_1.validateAndTransformQuery)(validators_1.VendorGetMemberInviteParams, query_config_1.vendorMemberInviteQueryConfig.retrieve)
        ]
    },
    {
        method: ['POST'],
        matcher: '/vendor/invites/accept',
        middlewares: [
            (0, framework_1.validateAndTransformBody)(validators_1.VendorAcceptMemberInvite),
            (0, framework_1.validateAndTransformQuery)(validators_1.VendorGetMemberInviteParams, query_config_1.vendorMemberInviteQueryConfig.retrieve)
        ]
    }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWlkZGxld2FyZXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvYXBpL3ZlbmRvci9pbnZpdGVzL21pZGRsZXdhcmVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLG1EQUc0QjtBQUc1Qix3RUFBeUU7QUFDekUsaURBQThEO0FBQzlELDZDQUlxQjtBQUVSLFFBQUEsd0JBQXdCLEdBQXNCO0lBQ3pEO1FBQ0UsTUFBTSxFQUFFLENBQUMsS0FBSyxDQUFDO1FBQ2YsT0FBTyxFQUFFLGlCQUFpQjtRQUMxQixXQUFXLEVBQUU7WUFDWCxJQUFBLHFDQUF5QixFQUN2Qix3Q0FBMkIsRUFDM0IsNENBQTZCLENBQUMsSUFBSSxDQUNuQztZQUNELElBQUEsOEJBQWdCLEdBQUU7U0FDbkI7S0FDRjtJQUNEO1FBQ0UsTUFBTSxFQUFFLENBQUMsTUFBTSxDQUFDO1FBQ2hCLE9BQU8sRUFBRSxpQkFBaUI7UUFDMUIsV0FBVyxFQUFFO1lBQ1gsSUFBQSxvQ0FBd0IsRUFBQywrQkFBa0IsQ0FBQztZQUM1QyxJQUFBLHFDQUF5QixFQUN2Qix3Q0FBMkIsRUFDM0IsNENBQTZCLENBQUMsUUFBUSxDQUN2QztTQUNGO0tBQ0Y7SUFDRDtRQUNFLE1BQU0sRUFBRSxDQUFDLE1BQU0sQ0FBQztRQUNoQixPQUFPLEVBQUUsd0JBQXdCO1FBQ2pDLFdBQVcsRUFBRTtZQUNYLElBQUEsb0NBQXdCLEVBQUMscUNBQXdCLENBQUM7WUFDbEQsSUFBQSxxQ0FBeUIsRUFDdkIsd0NBQTJCLEVBQzNCLDRDQUE2QixDQUFDLFFBQVEsQ0FDdkM7U0FDRjtLQUNGO0NBQ0YsQ0FBQSJ9