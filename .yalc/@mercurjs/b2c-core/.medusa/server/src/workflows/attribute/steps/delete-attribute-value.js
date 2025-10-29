"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteAttributeValueStep = exports.deleteAttributeValueStepId = void 0;
const workflows_sdk_1 = require("@medusajs/framework/workflows-sdk");
const attribute_1 = require("../../../modules/attribute");
exports.deleteAttributeValueStepId = "delete-attribute-value";
exports.deleteAttributeValueStep = (0, workflows_sdk_1.createStep)(exports.deleteAttributeValueStepId, async (ids, { container }) => {
    const attributeModuleService = container.resolve(attribute_1.ATTRIBUTE_MODULE);
    await attributeModuleService.softDeleteAttributeValues(ids);
    return new workflows_sdk_1.StepResponse(ids, ids);
}, async (ids, { container }) => {
    if (!ids?.length) {
        return;
    }
    const attributeModuleService = container.resolve(attribute_1.ATTRIBUTE_MODULE);
    await attributeModuleService.restoreAttributeValues(ids);
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVsZXRlLWF0dHJpYnV0ZS12YWx1ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy93b3JrZmxvd3MvYXR0cmlidXRlL3N0ZXBzL2RlbGV0ZS1hdHRyaWJ1dGUtdmFsdWUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEscUVBQTZFO0FBRTdFLDBEQUdvQztBQUV2QixRQUFBLDBCQUEwQixHQUFHLHdCQUF3QixDQUFDO0FBRXRELFFBQUEsd0JBQXdCLEdBQUcsSUFBQSwwQkFBVSxFQUNoRCxrQ0FBMEIsRUFDMUIsS0FBSyxFQUFFLEdBQWEsRUFBRSxFQUFFLFNBQVMsRUFBRSxFQUFFLEVBQUU7SUFDckMsTUFBTSxzQkFBc0IsR0FDMUIsU0FBUyxDQUFDLE9BQU8sQ0FBeUIsNEJBQWdCLENBQUMsQ0FBQztJQUU5RCxNQUFNLHNCQUFzQixDQUFDLHlCQUF5QixDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBRTVELE9BQU8sSUFBSSw0QkFBWSxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQztBQUNwQyxDQUFDLEVBQ0QsS0FBSyxFQUFFLEdBQXlCLEVBQUUsRUFBRSxTQUFTLEVBQUUsRUFBRSxFQUFFO0lBQ2pELElBQUksQ0FBQyxHQUFHLEVBQUUsTUFBTSxFQUFFLENBQUM7UUFDakIsT0FBTztJQUNULENBQUM7SUFFRCxNQUFNLHNCQUFzQixHQUMxQixTQUFTLENBQUMsT0FBTyxDQUF5Qiw0QkFBZ0IsQ0FBQyxDQUFDO0lBRTlELE1BQU0sc0JBQXNCLENBQUMsc0JBQXNCLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDM0QsQ0FBQyxDQUNGLENBQUMifQ==