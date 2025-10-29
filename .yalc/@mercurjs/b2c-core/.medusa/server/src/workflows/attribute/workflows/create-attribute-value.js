"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createAttributeValueWorkflow = exports.createAttributeValueWorkflowId = void 0;
const utils_1 = require("@medusajs/framework/utils");
const workflows_sdk_1 = require("@medusajs/framework/workflows-sdk");
const core_flows_1 = require("@medusajs/medusa/core-flows");
const attribute_1 = require("../../../modules/attribute");
const steps_1 = require("../steps");
exports.createAttributeValueWorkflowId = "create-attribute-value";
exports.createAttributeValueWorkflow = (0, workflows_sdk_1.createWorkflow)(exports.createAttributeValueWorkflowId, (input) => {
    const attributeValueWithoutExternalRelations = (0, workflows_sdk_1.transform)({ input }, ({ input }) => {
        return {
            attribute_id: input.attribute_id,
            value: input.value,
        };
    });
    (0, steps_1.validateAttributeValueStep)(input);
    const attributeValue = (0, steps_1.createAttributeValueStep)(attributeValueWithoutExternalRelations);
    const link = (0, workflows_sdk_1.transform)({ input, attributeValue }, ({ input, attributeValue }) => [
        {
            [utils_1.Modules.PRODUCT]: {
                product_id: input.product_id,
            },
            [attribute_1.ATTRIBUTE_MODULE]: {
                attribute_value_id: attributeValue.id,
            },
        },
    ]);
    (0, core_flows_1.createRemoteLinkStep)(link);
    return new workflows_sdk_1.WorkflowResponse(attributeValue);
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JlYXRlLWF0dHJpYnV0ZS12YWx1ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy93b3JrZmxvd3MvYXR0cmlidXRlL3dvcmtmbG93cy9jcmVhdGUtYXR0cmlidXRlLXZhbHVlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLHFEQUFvRDtBQUNwRCxxRUFJMkM7QUFDM0MsNERBQW1FO0FBRW5FLDBEQUE4RDtBQUc5RCxvQ0FBZ0Y7QUFFbkUsUUFBQSw4QkFBOEIsR0FBRyx3QkFBd0IsQ0FBQztBQUUxRCxRQUFBLDRCQUE0QixHQUFHLElBQUEsOEJBQWMsRUFDeEQsc0NBQThCLEVBQzlCLENBQUMsS0FBcUMsRUFBRSxFQUFFO0lBQ3hDLE1BQU0sc0NBQXNDLEdBQUcsSUFBQSx5QkFBUyxFQUN0RCxFQUFFLEtBQUssRUFBRSxFQUNULENBQUMsRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFO1FBQ1osT0FBTztZQUNMLFlBQVksRUFBRSxLQUFLLENBQUMsWUFBWTtZQUNoQyxLQUFLLEVBQUUsS0FBSyxDQUFDLEtBQUs7U0FDbkIsQ0FBQztJQUNKLENBQUMsQ0FDRixDQUFDO0lBRUYsSUFBQSxrQ0FBMEIsRUFBQyxLQUFLLENBQUMsQ0FBQztJQUVsQyxNQUFNLGNBQWMsR0FBRyxJQUFBLGdDQUF3QixFQUM3QyxzQ0FBc0MsQ0FDdkMsQ0FBQztJQUVGLE1BQU0sSUFBSSxHQUFHLElBQUEseUJBQVMsRUFDcEIsRUFBRSxLQUFLLEVBQUUsY0FBYyxFQUFFLEVBQ3pCLENBQUMsRUFBRSxLQUFLLEVBQUUsY0FBYyxFQUFFLEVBQUUsRUFBRSxDQUFDO1FBQzdCO1lBQ0UsQ0FBQyxlQUFPLENBQUMsT0FBTyxDQUFDLEVBQUU7Z0JBQ2pCLFVBQVUsRUFBRSxLQUFLLENBQUMsVUFBVTthQUM3QjtZQUNELENBQUMsNEJBQWdCLENBQUMsRUFBRTtnQkFDbEIsa0JBQWtCLEVBQUUsY0FBYyxDQUFDLEVBQUU7YUFDdEM7U0FDRjtLQUNGLENBQ0YsQ0FBQztJQUVGLElBQUEsaUNBQW9CLEVBQUMsSUFBSSxDQUFDLENBQUM7SUFFM0IsT0FBTyxJQUFJLGdDQUFnQixDQUFDLGNBQWMsQ0FBQyxDQUFDO0FBQzlDLENBQUMsQ0FDRixDQUFDIn0=