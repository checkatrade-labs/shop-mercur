"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteAttributeStep = exports.deleteAttributeStepId = void 0;
const utils_1 = require("@medusajs/framework/utils");
const workflows_sdk_1 = require("@medusajs/workflows-sdk");
const attribute_1 = require("../../../modules/attribute");
exports.deleteAttributeStepId = "delete-attribute-step";
exports.deleteAttributeStep = (0, workflows_sdk_1.createStep)(exports.deleteAttributeStepId, async ({ id }, { container }) => {
    const attributeModuleService = container.resolve(attribute_1.ATTRIBUTE_MODULE);
    const link = container.resolve(utils_1.ContainerRegistrationKeys.LINK);
    await attributeModuleService.softDeleteAttributes(id);
    await link.delete({
        [attribute_1.ATTRIBUTE_MODULE]: {
            attribute_id: id,
        },
    });
    return new workflows_sdk_1.StepResponse(undefined, id);
}, async (id, { container }) => {
    if (!id) {
        return;
    }
    const attributeModuleService = container.resolve(attribute_1.ATTRIBUTE_MODULE);
    const link = container.resolve(utils_1.ContainerRegistrationKeys.LINK);
    await attributeModuleService.restoreAttributes(id);
    await link.restore({
        [attribute_1.ATTRIBUTE_MODULE]: {
            attribute_id: id,
        },
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVsZXRlLWF0dHJpYnV0ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy93b3JrZmxvd3MvYXR0cmlidXRlL3N0ZXBzL2RlbGV0ZS1hdHRyaWJ1dGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEscURBQXNFO0FBQ3RFLDJEQUFtRTtBQUVuRSwwREFHb0M7QUFFdkIsUUFBQSxxQkFBcUIsR0FBRyx1QkFBdUIsQ0FBQztBQU1oRCxRQUFBLG1CQUFtQixHQUFHLElBQUEsMEJBQVUsRUFDM0MsNkJBQXFCLEVBQ3JCLEtBQUssRUFBRSxFQUFFLEVBQUUsRUFBNEIsRUFBRSxFQUFFLFNBQVMsRUFBRSxFQUFFLEVBQUU7SUFDeEQsTUFBTSxzQkFBc0IsR0FBRyxTQUFTLENBQUMsT0FBTyxDQUM5Qyw0QkFBZ0IsQ0FDUyxDQUFDO0lBQzVCLE1BQU0sSUFBSSxHQUFHLFNBQVMsQ0FBQyxPQUFPLENBQUMsaUNBQXlCLENBQUMsSUFBSSxDQUFDLENBQUM7SUFFL0QsTUFBTSxzQkFBc0IsQ0FBQyxvQkFBb0IsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUN0RCxNQUFNLElBQUksQ0FBQyxNQUFNLENBQUM7UUFDaEIsQ0FBQyw0QkFBZ0IsQ0FBQyxFQUFFO1lBQ2xCLFlBQVksRUFBRSxFQUFFO1NBQ2pCO0tBQ0YsQ0FBQyxDQUFDO0lBQ0gsT0FBTyxJQUFJLDRCQUFZLENBQUMsU0FBUyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0FBQ3pDLENBQUMsRUFDRCxLQUFLLEVBQUUsRUFBc0IsRUFBRSxFQUFFLFNBQVMsRUFBRSxFQUFFLEVBQUU7SUFDOUMsSUFBSSxDQUFDLEVBQUUsRUFBRSxDQUFDO1FBQ1IsT0FBTztJQUNULENBQUM7SUFFRCxNQUFNLHNCQUFzQixHQUFHLFNBQVMsQ0FBQyxPQUFPLENBQzlDLDRCQUFnQixDQUNTLENBQUM7SUFDNUIsTUFBTSxJQUFJLEdBQUcsU0FBUyxDQUFDLE9BQU8sQ0FBQyxpQ0FBeUIsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUUvRCxNQUFNLHNCQUFzQixDQUFDLGlCQUFpQixDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ25ELE1BQU0sSUFBSSxDQUFDLE9BQU8sQ0FBQztRQUNqQixDQUFDLDRCQUFnQixDQUFDLEVBQUU7WUFDbEIsWUFBWSxFQUFFLEVBQUU7U0FDakI7S0FDRixDQUFDLENBQUM7QUFDTCxDQUFDLENBQ0YsQ0FBQyJ9