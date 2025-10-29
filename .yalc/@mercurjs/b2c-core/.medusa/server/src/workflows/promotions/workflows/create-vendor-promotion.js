"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createVendorPromotionWorkflow = void 0;
const utils_1 = require("@medusajs/framework/utils");
const core_flows_1 = require("@medusajs/medusa/core-flows");
const workflows_sdk_1 = require("@medusajs/workflows-sdk");
const seller_1 = require("../../../modules/seller");
const steps_1 = require("../steps");
exports.createVendorPromotionWorkflow = (0, workflows_sdk_1.createWorkflow)("create-vendor-promotion", function (input) {
    (0, steps_1.verifyVendorCampaignStep)(input);
    (0, steps_1.verifyVendorPromotionStep)(input);
    (0, steps_1.verifyVendorTargetPromotionRulesStep)((0, workflows_sdk_1.transform)(input, (input) => ({
        rules: input.promotion.application_method.target_rules,
        seller_id: input.seller_id,
    })));
    const promotions = core_flows_1.createPromotionsWorkflow.runAsStep({
        input: {
            promotionsData: [input.promotion],
        },
    });
    const links = (0, workflows_sdk_1.transform)({ input, promotions }, ({ input, promotions }) => {
        const promo = promotions[0];
        const link = [
            {
                [seller_1.SELLER_MODULE]: {
                    seller_id: input.seller_id,
                },
                [utils_1.Modules.PROMOTION]: {
                    promotion_id: promo.id,
                },
            },
        ];
        if (promo.campaign) {
            link.push({
                [seller_1.SELLER_MODULE]: {
                    seller_id: input.seller_id,
                },
                [utils_1.Modules.PROMOTION]: {
                    campaign_id: promo.campaign.id,
                },
            });
        }
        return link;
    });
    (0, core_flows_1.createRemoteLinkStep)(links);
    return new workflows_sdk_1.WorkflowResponse(promotions);
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JlYXRlLXZlbmRvci1wcm9tb3Rpb24uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvd29ya2Zsb3dzL3Byb21vdGlvbnMvd29ya2Zsb3dzL2NyZWF0ZS12ZW5kb3ItcHJvbW90aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUNBLHFEQUFvRDtBQUNwRCw0REFHcUM7QUFDckMsMkRBSWlDO0FBRWpDLG9EQUF3RDtBQUV4RCxvQ0FJa0I7QUFFTCxRQUFBLDZCQUE2QixHQUFHLElBQUEsOEJBQWMsRUFDekQseUJBQXlCLEVBQ3pCLFVBQVUsS0FBMkQ7SUFDbkUsSUFBQSxnQ0FBd0IsRUFBQyxLQUFLLENBQUMsQ0FBQztJQUNoQyxJQUFBLGlDQUF5QixFQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ2pDLElBQUEsNENBQW9DLEVBQ2xDLElBQUEseUJBQVMsRUFBQyxLQUFLLEVBQUUsQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDM0IsS0FBSyxFQUFFLEtBQUssQ0FBQyxTQUFTLENBQUMsa0JBQWtCLENBQUMsWUFBWTtRQUN0RCxTQUFTLEVBQUUsS0FBSyxDQUFDLFNBQVM7S0FDM0IsQ0FBQyxDQUFDLENBQ0osQ0FBQztJQUVGLE1BQU0sVUFBVSxHQUFHLHFDQUF3QixDQUFDLFNBQVMsQ0FBQztRQUNwRCxLQUFLLEVBQUU7WUFDTCxjQUFjLEVBQUUsQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDO1NBQ2xDO0tBQ0YsQ0FBQyxDQUFDO0lBRUgsTUFBTSxLQUFLLEdBQUcsSUFBQSx5QkFBUyxFQUFDLEVBQUUsS0FBSyxFQUFFLFVBQVUsRUFBRSxFQUFFLENBQUMsRUFBRSxLQUFLLEVBQUUsVUFBVSxFQUFFLEVBQUUsRUFBRTtRQUN2RSxNQUFNLEtBQUssR0FBRyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDNUIsTUFBTSxJQUFJLEdBQXFCO1lBQzdCO2dCQUNFLENBQUMsc0JBQWEsQ0FBQyxFQUFFO29CQUNmLFNBQVMsRUFBRSxLQUFLLENBQUMsU0FBUztpQkFDM0I7Z0JBQ0QsQ0FBQyxlQUFPLENBQUMsU0FBUyxDQUFDLEVBQUU7b0JBQ25CLFlBQVksRUFBRSxLQUFLLENBQUMsRUFBRTtpQkFDdkI7YUFDRjtTQUNGLENBQUM7UUFFRixJQUFJLEtBQUssQ0FBQyxRQUFRLEVBQUUsQ0FBQztZQUNuQixJQUFJLENBQUMsSUFBSSxDQUFDO2dCQUNSLENBQUMsc0JBQWEsQ0FBQyxFQUFFO29CQUNmLFNBQVMsRUFBRSxLQUFLLENBQUMsU0FBUztpQkFDM0I7Z0JBQ0QsQ0FBQyxlQUFPLENBQUMsU0FBUyxDQUFDLEVBQUU7b0JBQ25CLFdBQVcsRUFBRSxLQUFLLENBQUMsUUFBUSxDQUFDLEVBQUU7aUJBQy9CO2FBQ0YsQ0FBQyxDQUFDO1FBQ0wsQ0FBQztRQUNELE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQyxDQUFDLENBQUM7SUFFSCxJQUFBLGlDQUFvQixFQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzVCLE9BQU8sSUFBSSxnQ0FBZ0IsQ0FBQyxVQUFVLENBQUMsQ0FBQztBQUMxQyxDQUFDLENBQ0YsQ0FBQyJ9