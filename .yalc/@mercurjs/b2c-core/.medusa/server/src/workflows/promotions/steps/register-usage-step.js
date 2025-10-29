"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerUsageStep = exports.registerUsageStepId = void 0;
const utils_1 = require("@medusajs/framework/utils");
const workflows_sdk_1 = require("@medusajs/framework/workflows-sdk");
exports.registerUsageStepId = 'register-promo-usage';
exports.registerUsageStep = (0, workflows_sdk_1.createStep)(exports.registerUsageStepId, async (data, { container }) => {
    if (!data.length) {
        return new workflows_sdk_1.StepResponse(null, []);
    }
    const promotionModule = container.resolve(utils_1.Modules.PROMOTION);
    await promotionModule.registerUsage(data);
    return new workflows_sdk_1.StepResponse(null, data);
}, async (revertData, { container }) => {
    if (!revertData?.length) {
        return;
    }
    const promotionModule = container.resolve(utils_1.Modules.PROMOTION);
    await promotionModule.revertUsage(revertData);
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVnaXN0ZXItdXNhZ2Utc3RlcC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy93b3JrZmxvd3MvcHJvbW90aW9ucy9zdGVwcy9yZWdpc3Rlci11c2FnZS1zdGVwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUlBLHFEQUFtRDtBQUNuRCxxRUFBNEU7QUFFL0QsUUFBQSxtQkFBbUIsR0FBRyxzQkFBc0IsQ0FBQTtBQUM1QyxRQUFBLGlCQUFpQixHQUFHLElBQUEsMEJBQVUsRUFDekMsMkJBQW1CLEVBQ25CLEtBQUssRUFBRSxJQUE0QixFQUFFLEVBQUUsU0FBUyxFQUFFLEVBQUUsRUFBRTtJQUNwRCxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQ2pCLE9BQU8sSUFBSSw0QkFBWSxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsQ0FBQTtJQUNuQyxDQUFDO0lBRUQsTUFBTSxlQUFlLEdBQUcsU0FBUyxDQUFDLE9BQU8sQ0FDdkMsZUFBTyxDQUFDLFNBQVMsQ0FDbEIsQ0FBQTtJQUVELE1BQU0sZUFBZSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQTtJQUV6QyxPQUFPLElBQUksNEJBQVksQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUE7QUFDckMsQ0FBQyxFQUNELEtBQUssRUFBRSxVQUFVLEVBQUUsRUFBRSxTQUFTLEVBQUUsRUFBRSxFQUFFO0lBQ2xDLElBQUksQ0FBQyxVQUFVLEVBQUUsTUFBTSxFQUFFLENBQUM7UUFDeEIsT0FBTTtJQUNSLENBQUM7SUFFRCxNQUFNLGVBQWUsR0FBRyxTQUFTLENBQUMsT0FBTyxDQUN2QyxlQUFPLENBQUMsU0FBUyxDQUNsQixDQUFBO0lBRUQsTUFBTSxlQUFlLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQyxDQUFBO0FBQy9DLENBQUMsQ0FDRixDQUFBIn0=