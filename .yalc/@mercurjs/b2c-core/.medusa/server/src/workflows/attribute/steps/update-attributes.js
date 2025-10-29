"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateAttributesStep = void 0;
const workflows_sdk_1 = require("@medusajs/framework/workflows-sdk");
const attribute_1 = require("../../../modules/attribute");
const updateAttributesStepId = "update-attributes";
exports.updateAttributesStep = (0, workflows_sdk_1.createStep)(updateAttributesStepId, async (data, { container }) => {
    const service = container.resolve(attribute_1.ATTRIBUTE_MODULE);
    const prevData = await service.listAttributes({
        id: data.map((attribute) => attribute.id),
    });
    const normalized = data.map((attr) => {
        const { possible_values: values, ...attribute } = attr;
        const valuesWithAttribute = values?.map((val) => ({
            ...val,
            attribute_id: attribute.id,
        }));
        return {
            ...attr,
            possible_values: valuesWithAttribute,
        };
    });
    const attributes = normalized.map((element) => {
        delete element.product_category_ids;
        return element;
    });
    await service.updateAttributeWithUpsertOrReplacePossibleValues(normalized);
    return new workflows_sdk_1.StepResponse(attributes, prevData);
}, async (prevData, { container }) => {
    if (!prevData?.length) {
        return;
    }
    const service = container.resolve(attribute_1.ATTRIBUTE_MODULE);
    //@ts-expect-error Possible values
    await service.updateAttributes(prevData);
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXBkYXRlLWF0dHJpYnV0ZXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvd29ya2Zsb3dzL2F0dHJpYnV0ZS9zdGVwcy91cGRhdGUtYXR0cmlidXRlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxxRUFJMkM7QUFFM0MsMERBR29DO0FBR3BDLE1BQU0sc0JBQXNCLEdBQUcsbUJBQW1CLENBQUM7QUFFdEMsUUFBQSxvQkFBb0IsR0FBRyxJQUFBLDBCQUFVLEVBQzVDLHNCQUFzQixFQUN0QixLQUFLLEVBQUUsSUFBMEIsRUFBRSxFQUFFLFNBQVMsRUFBRSxFQUFFLEVBQUU7SUFDbEQsTUFBTSxPQUFPLEdBQUcsU0FBUyxDQUFDLE9BQU8sQ0FBeUIsNEJBQWdCLENBQUMsQ0FBQztJQUU1RSxNQUFNLFFBQVEsR0FBRyxNQUFNLE9BQU8sQ0FBQyxjQUFjLENBQUM7UUFDNUMsRUFBRSxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxTQUFTLEVBQUUsRUFBRSxDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUM7S0FDMUMsQ0FBQyxDQUFDO0lBRUgsTUFBTSxVQUFVLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFFO1FBQ25DLE1BQU0sRUFBRSxlQUFlLEVBQUUsTUFBTSxFQUFFLEdBQUcsU0FBUyxFQUFFLEdBQUcsSUFBSSxDQUFDO1FBQ3ZELE1BQU0sbUJBQW1CLEdBQUcsTUFBTSxFQUFFLEdBQUcsQ0FBQyxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsQ0FBQztZQUNoRCxHQUFHLEdBQUc7WUFDTixZQUFZLEVBQUUsU0FBUyxDQUFDLEVBQUU7U0FDM0IsQ0FBQyxDQUFDLENBQUM7UUFDSixPQUFPO1lBQ0wsR0FBRyxJQUFJO1lBQ1AsZUFBZSxFQUFFLG1CQUFtQjtTQUNyQyxDQUFDO0lBQ0osQ0FBQyxDQUFDLENBQUM7SUFFSCxNQUFNLFVBQVUsR0FBRyxVQUFVLENBQUMsR0FBRyxDQUFDLENBQUMsT0FBTyxFQUFFLEVBQUU7UUFDNUMsT0FBTyxPQUFPLENBQUMsb0JBQW9CLENBQUM7UUFDcEMsT0FBTyxPQUFPLENBQUM7SUFDakIsQ0FBQyxDQUFDLENBQUM7SUFFSCxNQUFNLE9BQU8sQ0FBQyxnREFBZ0QsQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUUzRSxPQUFPLElBQUksNEJBQVksQ0FBQyxVQUFVLEVBQUUsUUFBUSxDQUFDLENBQUM7QUFDaEQsQ0FBQyxFQUNELEtBQUssRUFBRSxRQUFRLEVBQUUsRUFBRSxTQUFTLEVBQUUsRUFBRSxFQUFFO0lBQ2hDLElBQUksQ0FBQyxRQUFRLEVBQUUsTUFBTSxFQUFFLENBQUM7UUFDdEIsT0FBTztJQUNULENBQUM7SUFDRCxNQUFNLE9BQU8sR0FBRyxTQUFTLENBQUMsT0FBTyxDQUF5Qiw0QkFBZ0IsQ0FBQyxDQUFDO0lBRTVFLGtDQUFrQztJQUNsQyxNQUFNLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsQ0FBQztBQUMzQyxDQUFDLENBQ0YsQ0FBQyJ9