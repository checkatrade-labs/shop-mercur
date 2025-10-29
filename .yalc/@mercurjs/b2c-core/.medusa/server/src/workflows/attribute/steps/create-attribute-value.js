"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createAttributeValueStep = exports.createAttributeValueStepId = void 0;
const workflows_sdk_1 = require("@medusajs/framework/workflows-sdk");
const attribute_1 = require("../../../modules/attribute");
exports.createAttributeValueStepId = "create-attribute-value";
exports.createAttributeValueStep = (0, workflows_sdk_1.createStep)(exports.createAttributeValueStepId, async (input, { container }) => {
    const attributeModuleService = container.resolve(attribute_1.ATTRIBUTE_MODULE);
    const created = await attributeModuleService.createAttributeValues({
        ...input,
        rank: 0,
    });
    return new workflows_sdk_1.StepResponse(created, created.id);
}, async (id, { container }) => {
    if (!id) {
        return;
    }
    const attributeModuleService = container.resolve(attribute_1.ATTRIBUTE_MODULE);
    await attributeModuleService.deleteAttributeValues(id);
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JlYXRlLWF0dHJpYnV0ZS12YWx1ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy93b3JrZmxvd3MvYXR0cmlidXRlL3N0ZXBzL2NyZWF0ZS1hdHRyaWJ1dGUtdmFsdWUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEscUVBQTZFO0FBRTdFLDBEQUdvQztBQUd2QixRQUFBLDBCQUEwQixHQUFHLHdCQUF3QixDQUFDO0FBRXRELFFBQUEsd0JBQXdCLEdBQUcsSUFBQSwwQkFBVSxFQUNoRCxrQ0FBMEIsRUFDMUIsS0FBSyxFQUNILEtBQXlELEVBQ3pELEVBQUUsU0FBUyxFQUFFLEVBQ2IsRUFBRTtJQUNGLE1BQU0sc0JBQXNCLEdBQzFCLFNBQVMsQ0FBQyxPQUFPLENBQXlCLDRCQUFnQixDQUFDLENBQUM7SUFFOUQsTUFBTSxPQUFPLEdBQUcsTUFBTSxzQkFBc0IsQ0FBQyxxQkFBcUIsQ0FBQztRQUNqRSxHQUFHLEtBQUs7UUFDUixJQUFJLEVBQUUsQ0FBQztLQUNSLENBQUMsQ0FBQztJQUVILE9BQU8sSUFBSSw0QkFBWSxDQUFDLE9BQU8sRUFBRSxPQUFPLENBQUMsRUFBRSxDQUFDLENBQUM7QUFDL0MsQ0FBQyxFQUNELEtBQUssRUFBRSxFQUFzQixFQUFFLEVBQUUsU0FBUyxFQUFFLEVBQUUsRUFBRTtJQUM5QyxJQUFJLENBQUMsRUFBRSxFQUFFLENBQUM7UUFDUixPQUFPO0lBQ1QsQ0FBQztJQUVELE1BQU0sc0JBQXNCLEdBQzFCLFNBQVMsQ0FBQyxPQUFPLENBQXlCLDRCQUFnQixDQUFDLENBQUM7SUFDOUQsTUFBTSxzQkFBc0IsQ0FBQyxxQkFBcUIsQ0FBQyxFQUFFLENBQUMsQ0FBQztBQUN6RCxDQUFDLENBQ0YsQ0FBQyJ9