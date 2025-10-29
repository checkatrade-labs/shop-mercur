"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createSellerShippingProfileStep = void 0;
const utils_1 = require("@medusajs/framework/utils");
const workflows_sdk_1 = require("@medusajs/framework/workflows-sdk");
const core_flows_1 = require("@medusajs/medusa/core-flows");
const seller_1 = require("../../../modules/seller");
exports.createSellerShippingProfileStep = (0, workflows_sdk_1.createStep)("create-seller-shipping-profile", async ({ id: sellerId }, { container }) => {
    const link = container.resolve(utils_1.ContainerRegistrationKeys.LINK);
    const { result } = await core_flows_1.createShippingProfilesWorkflow.run({
        container,
        input: {
            data: [
                {
                    type: "default",
                    name: `${sellerId}:Default shipping profile`,
                },
            ],
        },
    });
    await link.create({
        [seller_1.SELLER_MODULE]: {
            seller_id: sellerId,
        },
        [utils_1.Modules.FULFILLMENT]: {
            shipping_profile_id: result[0].id,
        },
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JlYXRlLXNlbGxlci1zaGlwcGluZy1wcm9maWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vc3JjL3dvcmtmbG93cy9zZWxsZXIvc3RlcHMvY3JlYXRlLXNlbGxlci1zaGlwcGluZy1wcm9maWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLHFEQUErRTtBQUMvRSxxRUFBK0Q7QUFDL0QsNERBQTZFO0FBQzdFLG9EQUF3RDtBQUczQyxRQUFBLCtCQUErQixHQUFHLElBQUEsMEJBQVUsRUFDdkQsZ0NBQWdDLEVBQ2hDLEtBQUssRUFBRSxFQUFFLEVBQUUsRUFBRSxRQUFRLEVBQWEsRUFBRSxFQUFFLFNBQVMsRUFBRSxFQUFFLEVBQUU7SUFDbkQsTUFBTSxJQUFJLEdBQUcsU0FBUyxDQUFDLE9BQU8sQ0FBQyxpQ0FBeUIsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUMvRCxNQUFNLEVBQUUsTUFBTSxFQUFFLEdBQUcsTUFBTSwyQ0FBOEIsQ0FBQyxHQUFHLENBQUM7UUFDMUQsU0FBUztRQUNULEtBQUssRUFBRTtZQUNMLElBQUksRUFBRTtnQkFDSjtvQkFDRSxJQUFJLEVBQUUsU0FBUztvQkFDZixJQUFJLEVBQUUsR0FBRyxRQUFRLDJCQUEyQjtpQkFDN0M7YUFDRjtTQUNGO0tBQ0YsQ0FBQyxDQUFDO0lBRUgsTUFBTSxJQUFJLENBQUMsTUFBTSxDQUFDO1FBQ2hCLENBQUMsc0JBQWEsQ0FBQyxFQUFFO1lBQ2YsU0FBUyxFQUFFLFFBQVE7U0FDcEI7UUFDRCxDQUFDLGVBQU8sQ0FBQyxXQUFXLENBQUMsRUFBRTtZQUNyQixtQkFBbUIsRUFBRSxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRTtTQUNsQztLQUNGLENBQUMsQ0FBQztBQUNMLENBQUMsQ0FDRixDQUFDIn0=