"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createLocationFulfillmentSetAndAssociateWithSellerWorkflow = void 0;
const utils_1 = require("@medusajs/framework/utils");
const workflows_sdk_1 = require("@medusajs/framework/workflows-sdk");
const core_flows_1 = require("@medusajs/medusa/core-flows");
const workflows_sdk_2 = require("@medusajs/workflows-sdk");
const seller_1 = require("../../modules/seller");
exports.createLocationFulfillmentSetAndAssociateWithSellerWorkflow = (0, workflows_sdk_2.createWorkflow)("create-fulfillment-set-and-associate-with-seller", function (input) {
    const fulfillmentSet = (0, core_flows_1.createFulfillmentSets)([
        {
            name: input.fulfillment_set_data.name,
            type: input.fulfillment_set_data.type,
        },
    ]);
    const fullfillmentSetId = (0, workflows_sdk_1.transform)(fulfillmentSet, (data) => data[0].id);
    (0, core_flows_1.createRemoteLinkStep)([
        {
            [utils_1.Modules.STOCK_LOCATION]: {
                stock_location_id: input.location_id,
            },
            [utils_1.Modules.FULFILLMENT]: {
                fulfillment_set_id: fullfillmentSetId,
            },
        },
        {
            [seller_1.SELLER_MODULE]: {
                seller_id: input.seller_id,
            },
            [utils_1.Modules.FULFILLMENT]: {
                fulfillment_set_id: fullfillmentSetId,
            },
        },
    ]);
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JlYXRlLWxvY2F0aW9uLWZ1bGZpbGxtZW50LXNldC1hbmQtYXNzb2NpYXRlLXdpdGgtc2VsbGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vc3JjL3dvcmtmbG93cy9mdWxmaWxsbWVudC1zZXQvY3JlYXRlLWxvY2F0aW9uLWZ1bGZpbGxtZW50LXNldC1hbmQtYXNzb2NpYXRlLXdpdGgtc2VsbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLHFEQUFvRDtBQUNwRCxxRUFBOEQ7QUFDOUQsNERBR3FDO0FBQ3JDLDJEQUF5RDtBQUV6RCxpREFBcUQ7QUFXeEMsUUFBQSwwREFBMEQsR0FDckUsSUFBQSw4QkFBYyxFQUNaLGtEQUFrRCxFQUNsRCxVQUFVLEtBQXNEO0lBQzlELE1BQU0sY0FBYyxHQUFHLElBQUEsa0NBQXFCLEVBQUM7UUFDM0M7WUFDRSxJQUFJLEVBQUUsS0FBSyxDQUFDLG9CQUFvQixDQUFDLElBQUk7WUFDckMsSUFBSSxFQUFFLEtBQUssQ0FBQyxvQkFBb0IsQ0FBQyxJQUFJO1NBQ3RDO0tBQ0YsQ0FBQyxDQUFDO0lBRUgsTUFBTSxpQkFBaUIsR0FBRyxJQUFBLHlCQUFTLEVBQUMsY0FBYyxFQUFFLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUM7SUFFMUUsSUFBQSxpQ0FBb0IsRUFBQztRQUNuQjtZQUNFLENBQUMsZUFBTyxDQUFDLGNBQWMsQ0FBQyxFQUFFO2dCQUN4QixpQkFBaUIsRUFBRSxLQUFLLENBQUMsV0FBVzthQUNyQztZQUNELENBQUMsZUFBTyxDQUFDLFdBQVcsQ0FBQyxFQUFFO2dCQUNyQixrQkFBa0IsRUFBRSxpQkFBaUI7YUFDdEM7U0FDRjtRQUNEO1lBQ0UsQ0FBQyxzQkFBYSxDQUFDLEVBQUU7Z0JBQ2YsU0FBUyxFQUFFLEtBQUssQ0FBQyxTQUFTO2FBQzNCO1lBQ0QsQ0FBQyxlQUFPLENBQUMsV0FBVyxDQUFDLEVBQUU7Z0JBQ3JCLGtCQUFrQixFQUFFLGlCQUFpQjthQUN0QztTQUNGO0tBQ0YsQ0FBQyxDQUFDO0FBQ0wsQ0FBQyxDQUNGLENBQUMifQ==