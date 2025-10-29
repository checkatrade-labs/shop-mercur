"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createAttributesStep = exports.createAttributesStepId = void 0;
const utils_1 = require("@medusajs/framework/utils");
const workflows_sdk_1 = require("@medusajs/framework/workflows-sdk");
const attribute_1 = require("../../../modules/attribute");
exports.createAttributesStepId = "create-attributes";
exports.createAttributesStep = (0, workflows_sdk_1.createStep)(exports.createAttributesStepId, async (data, { container }) => {
    const service = container.resolve(attribute_1.ATTRIBUTE_MODULE);
    const existingAttributes = await service.listAttributes({
        name: data.map((attribute) => attribute.name),
    });
    if (existingAttributes.length) {
        throw new utils_1.MedusaError(utils_1.MedusaError.Types.CONFLICT, `Attributes ${existingAttributes.map((attribute) => attribute.name).join(", ")} already exist`);
    }
    const validated = data.map((attribute) => {
        return {
            ...attribute,
            handle: attribute.handle || (0, utils_1.toHandle)(attribute.name),
        };
    });
    //@ts-expect-error Possible values
    const created = (await service.createAttributes(validated));
    return new workflows_sdk_1.StepResponse(created, created.map((attribute) => attribute.id));
}, async (createdIds, { container }) => {
    if (!createdIds?.length) {
        return;
    }
    const service = container.resolve(attribute_1.ATTRIBUTE_MODULE);
    await service.deleteAttributes(createdIds);
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JlYXRlLWF0dHJpYnV0ZXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvd29ya2Zsb3dzL2F0dHJpYnV0ZS9zdGVwcy9jcmVhdGUtYXR0cmlidXRlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxxREFBa0U7QUFDbEUscUVBQTZFO0FBRTdFLDBEQUdvQztBQUd2QixRQUFBLHNCQUFzQixHQUFHLG1CQUFtQixDQUFDO0FBTzdDLFFBQUEsb0JBQW9CLEdBQUcsSUFBQSwwQkFBVSxFQUM1Qyw4QkFBc0IsRUFDdEIsS0FBSyxFQUFFLElBQThCLEVBQUUsRUFBRSxTQUFTLEVBQUUsRUFBRSxFQUFFO0lBQ3RELE1BQU0sT0FBTyxHQUFHLFNBQVMsQ0FBQyxPQUFPLENBQXlCLDRCQUFnQixDQUFDLENBQUM7SUFFNUUsTUFBTSxrQkFBa0IsR0FBRyxNQUFNLE9BQU8sQ0FBQyxjQUFjLENBQUM7UUFDdEQsSUFBSSxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxTQUFTLEVBQUUsRUFBRSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUM7S0FDOUMsQ0FBQyxDQUFDO0lBRUgsSUFBSSxrQkFBa0IsQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUM5QixNQUFNLElBQUksbUJBQVcsQ0FDbkIsbUJBQVcsQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUMxQixjQUFjLGtCQUFrQixDQUFDLEdBQUcsQ0FBQyxDQUFDLFNBQVMsRUFBRSxFQUFFLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQy9GLENBQUM7SUFDSixDQUFDO0lBRUQsTUFBTSxTQUFTLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLFNBQVMsRUFBRSxFQUFFO1FBQ3ZDLE9BQU87WUFDTCxHQUFHLFNBQVM7WUFDWixNQUFNLEVBQUUsU0FBUyxDQUFDLE1BQU0sSUFBSSxJQUFBLGdCQUFRLEVBQUMsU0FBUyxDQUFDLElBQUksQ0FBQztTQUNyRCxDQUFDO0lBQ0osQ0FBQyxDQUFDLENBQUM7SUFFSCxrQ0FBa0M7SUFDbEMsTUFBTSxPQUFPLEdBQUcsQ0FBQyxNQUFNLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQyxTQUFTLENBQUMsQ0FBVSxDQUFDO0lBQ3JFLE9BQU8sSUFBSSw0QkFBWSxDQUNyQixPQUFPLEVBQ1AsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLFNBQVMsRUFBRSxFQUFFLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQyxDQUN6QyxDQUFDO0FBQ0osQ0FBQyxFQUNELEtBQUssRUFBRSxVQUFnQyxFQUFFLEVBQUUsU0FBUyxFQUFFLEVBQUUsRUFBRTtJQUN4RCxJQUFJLENBQUMsVUFBVSxFQUFFLE1BQU0sRUFBRSxDQUFDO1FBQ3hCLE9BQU87SUFDVCxDQUFDO0lBRUQsTUFBTSxPQUFPLEdBQUcsU0FBUyxDQUFDLE9BQU8sQ0FBeUIsNEJBQWdCLENBQUMsQ0FBQztJQUU1RSxNQUFNLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQyxVQUFVLENBQUMsQ0FBQztBQUM3QyxDQUFDLENBQ0YsQ0FBQyJ9