"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyVendorCampaignStep = void 0;
const utils_1 = require("@medusajs/framework/utils");
const workflows_sdk_1 = require("@medusajs/framework/workflows-sdk");
const seller_campaign_1 = __importDefault(require("../../../links/seller-campaign"));
exports.verifyVendorCampaignStep = (0, workflows_sdk_1.createStep)('verify-vendor-campaign', async (input, { container }) => {
    const query = container.resolve(utils_1.ContainerRegistrationKeys.QUERY);
    if (!input.promotion.campaign_id) {
        return new workflows_sdk_1.StepResponse();
    }
    const { data: [relation] } = await query.graph({
        entity: seller_campaign_1.default.entryPoint,
        fields: ['id'],
        filters: {
            seller_id: input.seller_id,
            campaign_id: input.promotion.campaign_id
        }
    });
    if (!relation) {
        throw new utils_1.MedusaError(utils_1.MedusaError.Types.INVALID_DATA, 'Vendor Promotion can be linked only to seller own campaign!');
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmVyaWZ5LXZlbmRvci1jYW1wYWlnbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy93b3JrZmxvd3MvcHJvbW90aW9ucy9zdGVwcy92ZXJpZnktdmVuZG9yLWNhbXBhaWduLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLHFEQUdrQztBQUNsQyxxRUFBNEU7QUFFNUUscUZBQTJEO0FBRTlDLFFBQUEsd0JBQXdCLEdBQUcsSUFBQSwwQkFBVSxFQUNoRCx3QkFBd0IsRUFDeEIsS0FBSyxFQUNILEtBR0MsRUFDRCxFQUFFLFNBQVMsRUFBRSxFQUNiLEVBQUU7SUFDRixNQUFNLEtBQUssR0FBRyxTQUFTLENBQUMsT0FBTyxDQUFDLGlDQUF5QixDQUFDLEtBQUssQ0FBQyxDQUFBO0lBRWhFLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ2pDLE9BQU8sSUFBSSw0QkFBWSxFQUFFLENBQUE7SUFDM0IsQ0FBQztJQUVELE1BQU0sRUFDSixJQUFJLEVBQUUsQ0FBQyxRQUFRLENBQUMsRUFDakIsR0FBRyxNQUFNLEtBQUssQ0FBQyxLQUFLLENBQUM7UUFDcEIsTUFBTSxFQUFFLHlCQUFjLENBQUMsVUFBVTtRQUNqQyxNQUFNLEVBQUUsQ0FBQyxJQUFJLENBQUM7UUFDZCxPQUFPLEVBQUU7WUFDUCxTQUFTLEVBQUUsS0FBSyxDQUFDLFNBQVM7WUFDMUIsV0FBVyxFQUFFLEtBQUssQ0FBQyxTQUFTLENBQUMsV0FBVztTQUN6QztLQUNGLENBQUMsQ0FBQTtJQUVGLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUNkLE1BQU0sSUFBSSxtQkFBVyxDQUNuQixtQkFBVyxDQUFDLEtBQUssQ0FBQyxZQUFZLEVBQzlCLDZEQUE2RCxDQUM5RCxDQUFBO0lBQ0gsQ0FBQztBQUNILENBQUMsQ0FDRixDQUFBIn0=