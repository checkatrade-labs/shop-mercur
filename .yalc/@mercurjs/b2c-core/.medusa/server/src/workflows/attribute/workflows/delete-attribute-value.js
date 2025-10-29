"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteAttributeValueWorkflow = exports.deleteAttributeValueWorkflowId = void 0;
const utils_1 = require("@medusajs/framework/utils");
const workflows_sdk_1 = require("@medusajs/framework/workflows-sdk");
const core_flows_1 = require("@medusajs/medusa/core-flows");
const attribute_1 = require("../../../modules/attribute");
const product_attribute_value_1 = __importDefault(require("../../../links/product-attribute-value"));
const steps_1 = require("../steps");
exports.deleteAttributeValueWorkflowId = "delete-attribute-value";
exports.deleteAttributeValueWorkflow = (0, workflows_sdk_1.createWorkflow)(exports.deleteAttributeValueWorkflowId, (input) => {
    const normalizedInput = (0, workflows_sdk_1.transform)({ input }, ({ input }) => Array.isArray(input) ? input : [input]);
    const attributeValueProductQuery = (0, core_flows_1.useQueryGraphStep)({
        entity: product_attribute_value_1.default.entryPoint,
        fields: ["product_id", "attribute_value_id"],
        filters: {
            attribute_value_id: normalizedInput,
        },
    });
    const deleted = (0, steps_1.deleteAttributeValueStep)(normalizedInput);
    const links = (0, workflows_sdk_1.transform)({ attributeValueProductQuery }, ({ attributeValueProductQuery }) => {
        const { data } = attributeValueProductQuery;
        return data.map((element) => ({
            [utils_1.Modules.PRODUCT]: {
                product_id: element.product_id,
            },
            [attribute_1.ATTRIBUTE_MODULE]: {
                attribute_value_id: element.attribute_value_id,
            },
        }));
    });
    (0, core_flows_1.dismissRemoteLinkStep)(links);
    return new workflows_sdk_1.WorkflowResponse(deleted);
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVsZXRlLWF0dHJpYnV0ZS12YWx1ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy93b3JrZmxvd3MvYXR0cmlidXRlL3dvcmtmbG93cy9kZWxldGUtYXR0cmlidXRlLXZhbHVlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLHFEQUFvRDtBQUNwRCxxRUFJMkM7QUFDM0MsNERBR3FDO0FBRXJDLDBEQUE4RDtBQUU5RCxxR0FBMkU7QUFDM0Usb0NBQW9EO0FBRXZDLFFBQUEsOEJBQThCLEdBQUcsd0JBQXdCLENBQUM7QUFJMUQsUUFBQSw0QkFBNEIsR0FBRyxJQUFBLDhCQUFjLEVBQ3hELHNDQUE4QixFQUM5QixDQUFDLEtBQXdDLEVBQUUsRUFBRTtJQUMzQyxNQUFNLGVBQWUsR0FBRyxJQUFBLHlCQUFTLEVBQUMsRUFBRSxLQUFLLEVBQUUsRUFBRSxDQUFDLEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBRSxDQUN6RCxLQUFLLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQ3ZDLENBQUM7SUFFRixNQUFNLDBCQUEwQixHQUFHLElBQUEsOEJBQWlCLEVBQUM7UUFDbkQsTUFBTSxFQUFFLGlDQUFxQixDQUFDLFVBQVU7UUFDeEMsTUFBTSxFQUFFLENBQUMsWUFBWSxFQUFFLG9CQUFvQixDQUFDO1FBQzVDLE9BQU8sRUFBRTtZQUNQLGtCQUFrQixFQUFFLGVBQWU7U0FDcEM7S0FDRixDQUFDLENBQUM7SUFFSCxNQUFNLE9BQU8sR0FBRyxJQUFBLGdDQUF3QixFQUFDLGVBQWUsQ0FBQyxDQUFDO0lBRTFELE1BQU0sS0FBSyxHQUFHLElBQUEseUJBQVMsRUFDckIsRUFBRSwwQkFBMEIsRUFBRSxFQUM5QixDQUFDLEVBQUUsMEJBQTBCLEVBQUUsRUFBRSxFQUFFO1FBQ2pDLE1BQU0sRUFBRSxJQUFJLEVBQUUsR0FBRywwQkFBMEIsQ0FBQztRQUM1QyxPQUFPLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxPQUFPLEVBQUUsRUFBRSxDQUFDLENBQUM7WUFDNUIsQ0FBQyxlQUFPLENBQUMsT0FBTyxDQUFDLEVBQUU7Z0JBQ2pCLFVBQVUsRUFBRSxPQUFPLENBQUMsVUFBVTthQUMvQjtZQUNELENBQUMsNEJBQWdCLENBQUMsRUFBRTtnQkFDbEIsa0JBQWtCLEVBQUUsT0FBTyxDQUFDLGtCQUFrQjthQUMvQztTQUNGLENBQUMsQ0FBQyxDQUFDO0lBQ04sQ0FBQyxDQUNGLENBQUM7SUFFRixJQUFBLGtDQUFxQixFQUFDLEtBQUssQ0FBQyxDQUFDO0lBRTdCLE9BQU8sSUFBSSxnQ0FBZ0IsQ0FBQyxPQUFPLENBQUMsQ0FBQztBQUN2QyxDQUFDLENBQ0YsQ0FBQyJ9