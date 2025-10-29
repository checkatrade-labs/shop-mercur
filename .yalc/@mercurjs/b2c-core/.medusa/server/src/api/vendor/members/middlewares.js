"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.vendorMembersMiddlewares = void 0;
const framework_1 = require("@medusajs/framework");
const middlewares_1 = require("../../../shared/infra/http/middlewares");
const query_config_1 = require("./query-config");
const validators_1 = require("./validators");
exports.vendorMembersMiddlewares = [
    {
        method: ['GET'],
        matcher: '/vendor/members',
        middlewares: [
            (0, framework_1.validateAndTransformQuery)(validators_1.VendorGetMemberParams, query_config_1.vendorMemberQueryConfig.list),
            (0, middlewares_1.filterBySellerId)()
        ]
    },
    {
        method: ['GET'],
        matcher: '/vendor/members/:id',
        middlewares: [
            (0, middlewares_1.checkResourceOwnershipByResourceId)({
                entryPoint: 'member'
            }),
            (0, framework_1.validateAndTransformQuery)(validators_1.VendorGetMemberParams, query_config_1.vendorMemberQueryConfig.retrieve)
        ]
    },
    {
        method: ['POST'],
        matcher: '/vendor/members/:id',
        middlewares: [
            (0, middlewares_1.checkResourceOwnershipByResourceId)({
                entryPoint: 'member'
            }),
            (0, framework_1.validateAndTransformBody)(validators_1.VendorUpdateMember),
            (0, framework_1.validateAndTransformQuery)(validators_1.VendorGetMemberParams, query_config_1.vendorMemberQueryConfig.retrieve)
        ]
    },
    {
        method: ['DELETE'],
        matcher: '/vendor/members/:id',
        middlewares: [
            (0, middlewares_1.checkResourceOwnershipByResourceId)({
                entryPoint: 'member'
            })
        ]
    }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWlkZGxld2FyZXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvYXBpL3ZlbmRvci9tZW1iZXJzL21pZGRsZXdhcmVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLG1EQUc0QjtBQUc1Qix3RUFHK0M7QUFDL0MsaURBQXdEO0FBQ3hELDZDQUF3RTtBQUUzRCxRQUFBLHdCQUF3QixHQUFzQjtJQUN6RDtRQUNFLE1BQU0sRUFBRSxDQUFDLEtBQUssQ0FBQztRQUNmLE9BQU8sRUFBRSxpQkFBaUI7UUFDMUIsV0FBVyxFQUFFO1lBQ1gsSUFBQSxxQ0FBeUIsRUFDdkIsa0NBQXFCLEVBQ3JCLHNDQUF1QixDQUFDLElBQUksQ0FDN0I7WUFDRCxJQUFBLDhCQUFnQixHQUFFO1NBQ25CO0tBQ0Y7SUFDRDtRQUNFLE1BQU0sRUFBRSxDQUFDLEtBQUssQ0FBQztRQUNmLE9BQU8sRUFBRSxxQkFBcUI7UUFDOUIsV0FBVyxFQUFFO1lBQ1gsSUFBQSxnREFBa0MsRUFBQztnQkFDakMsVUFBVSxFQUFFLFFBQVE7YUFDckIsQ0FBQztZQUNGLElBQUEscUNBQXlCLEVBQ3ZCLGtDQUFxQixFQUNyQixzQ0FBdUIsQ0FBQyxRQUFRLENBQ2pDO1NBQ0Y7S0FDRjtJQUNEO1FBQ0UsTUFBTSxFQUFFLENBQUMsTUFBTSxDQUFDO1FBQ2hCLE9BQU8sRUFBRSxxQkFBcUI7UUFDOUIsV0FBVyxFQUFFO1lBQ1gsSUFBQSxnREFBa0MsRUFBQztnQkFDakMsVUFBVSxFQUFFLFFBQVE7YUFDckIsQ0FBQztZQUNGLElBQUEsb0NBQXdCLEVBQUMsK0JBQWtCLENBQUM7WUFDNUMsSUFBQSxxQ0FBeUIsRUFDdkIsa0NBQXFCLEVBQ3JCLHNDQUF1QixDQUFDLFFBQVEsQ0FDakM7U0FDRjtLQUNGO0lBQ0Q7UUFDRSxNQUFNLEVBQUUsQ0FBQyxRQUFRLENBQUM7UUFDbEIsT0FBTyxFQUFFLHFCQUFxQjtRQUM5QixXQUFXLEVBQUU7WUFDWCxJQUFBLGdEQUFrQyxFQUFDO2dCQUNqQyxVQUFVLEVBQUUsUUFBUTthQUNyQixDQUFDO1NBQ0g7S0FDRjtDQUNGLENBQUEifQ==