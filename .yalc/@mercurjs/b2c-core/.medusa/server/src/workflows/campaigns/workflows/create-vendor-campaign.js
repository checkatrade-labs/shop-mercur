"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createVendorCampaignWorkflow = void 0;
const utils_1 = require("@medusajs/framework/utils");
const core_flows_1 = require("@medusajs/medusa/core-flows");
const workflows_sdk_1 = require("@medusajs/workflows-sdk");
const seller_1 = require("../../../modules/seller");
exports.createVendorCampaignWorkflow = (0, workflows_sdk_1.createWorkflow)("create-vendor-campaign", function (input) {
    const campaigns = core_flows_1.createCampaignsWorkflow.runAsStep({
        input: {
            campaignsData: [input.campaign],
        },
    });
    const links = (0, workflows_sdk_1.transform)({ input, campaigns }, ({ input, campaigns }) => campaigns.map((p) => {
        return {
            [seller_1.SELLER_MODULE]: {
                seller_id: input.seller_id,
            },
            [utils_1.Modules.PROMOTION]: {
                campaign_id: p.id,
            },
        };
    }));
    (0, core_flows_1.createRemoteLinkStep)(links);
    return new workflows_sdk_1.WorkflowResponse(campaigns);
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JlYXRlLXZlbmRvci1jYW1wYWlnbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy93b3JrZmxvd3MvY2FtcGFpZ25zL3dvcmtmbG93cy9jcmVhdGUtdmVuZG9yLWNhbXBhaWduLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUNBLHFEQUFvRDtBQUNwRCw0REFHcUM7QUFDckMsMkRBSWlDO0FBRWpDLG9EQUF3RDtBQUUzQyxRQUFBLDRCQUE0QixHQUFHLElBQUEsOEJBQWMsRUFDeEQsd0JBQXdCLEVBQ3hCLFVBQVUsS0FBeUQ7SUFDakUsTUFBTSxTQUFTLEdBQUcsb0NBQXVCLENBQUMsU0FBUyxDQUFDO1FBQ2xELEtBQUssRUFBRTtZQUNMLGFBQWEsRUFBRSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUM7U0FDaEM7S0FDRixDQUFDLENBQUM7SUFFSCxNQUFNLEtBQUssR0FBRyxJQUFBLHlCQUFTLEVBQUMsRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsRUFBRSxFQUFFLENBQ3JFLFNBQVMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRTtRQUNsQixPQUFPO1lBQ0wsQ0FBQyxzQkFBYSxDQUFDLEVBQUU7Z0JBQ2YsU0FBUyxFQUFFLEtBQUssQ0FBQyxTQUFTO2FBQzNCO1lBQ0QsQ0FBQyxlQUFPLENBQUMsU0FBUyxDQUFDLEVBQUU7Z0JBQ25CLFdBQVcsRUFBRSxDQUFDLENBQUMsRUFBRTthQUNsQjtTQUNGLENBQUM7SUFDSixDQUFDLENBQUMsQ0FDSCxDQUFDO0lBRUYsSUFBQSxpQ0FBb0IsRUFBQyxLQUFLLENBQUMsQ0FBQztJQUM1QixPQUFPLElBQUksZ0NBQWdCLENBQUMsU0FBUyxDQUFDLENBQUM7QUFDekMsQ0FBQyxDQUNGLENBQUMifQ==