"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createAttributesWorkflow = exports.createAttributesWorkflowId = void 0;
const utils_1 = require("@medusajs/framework/utils");
const workflows_sdk_1 = require("@medusajs/framework/workflows-sdk");
const core_flows_1 = require("@medusajs/medusa/core-flows");
const attribute_1 = require("../../../modules/attribute");
const create_attributes_1 = require("../steps/create-attributes");
exports.createAttributesWorkflowId = "create-attributes";
exports.createAttributesWorkflow = (0, workflows_sdk_1.createWorkflow)(exports.createAttributesWorkflowId, (input) => {
    const attributesWithoutExternalRelations = (0, workflows_sdk_1.transform)(input, ({ attributes }) => {
        return attributes.map((attribute) => {
            delete attribute.product_category_ids;
            return attribute;
        });
    });
    const createdAttributes = (0, create_attributes_1.createAttributesStep)(attributesWithoutExternalRelations);
    const productCategoryLinks = (0, workflows_sdk_1.transform)({ input, createdAttributes }, ({ input, createdAttributes }) => {
        return createdAttributes
            .map((attribute, idx) => {
            const inputAttribute = input.attributes[idx];
            return (inputAttribute.product_category_ids?.map((productCategoryId) => ({
                [utils_1.Modules.PRODUCT]: {
                    product_category_id: productCategoryId,
                },
                [attribute_1.ATTRIBUTE_MODULE]: {
                    attribute_id: attribute.id,
                },
            })) || []);
        })
            .flat();
    });
    (0, workflows_sdk_1.when)({ productCategoryLinks }, ({ productCategoryLinks }) => {
        return productCategoryLinks.length > 0;
    }).then(() => {
        (0, core_flows_1.createRemoteLinkStep)(productCategoryLinks);
    });
    return new workflows_sdk_1.WorkflowResponse(createdAttributes);
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JlYXRlLWF0dHJpYnV0ZXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvd29ya2Zsb3dzL2F0dHJpYnV0ZS93b3JrZmxvd3MvY3JlYXRlLWF0dHJpYnV0ZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQ0EscURBQW9EO0FBQ3BELHFFQU0yQztBQUMzQyw0REFBbUU7QUFFbkUsMERBQThEO0FBRzlELGtFQUFrRTtBQUVyRCxRQUFBLDBCQUEwQixHQUFHLG1CQUFtQixDQUFDO0FBTWpELFFBQUEsd0JBQXdCLEdBQUcsSUFBQSw4QkFBYyxFQUNwRCxrQ0FBMEIsRUFDMUIsQ0FBQyxLQUFrRCxFQUFFLEVBQUU7SUFDckQsTUFBTSxrQ0FBa0MsR0FBRyxJQUFBLHlCQUFTLEVBQ2xELEtBQUssRUFDTCxDQUFDLEVBQUUsVUFBVSxFQUFFLEVBQUUsRUFBRTtRQUNqQixPQUFPLFVBQVUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxTQUFTLEVBQUUsRUFBRTtZQUNsQyxPQUFPLFNBQVMsQ0FBQyxvQkFBb0IsQ0FBQztZQUN0QyxPQUFPLFNBQVMsQ0FBQztRQUNuQixDQUFDLENBQUMsQ0FBQztJQUNMLENBQUMsQ0FDRixDQUFDO0lBRUYsTUFBTSxpQkFBaUIsR0FBRyxJQUFBLHdDQUFvQixFQUM1QyxrQ0FBa0MsQ0FDbkMsQ0FBQztJQUVGLE1BQU0sb0JBQW9CLEdBQXFCLElBQUEseUJBQVMsRUFDdEQsRUFBRSxLQUFLLEVBQUUsaUJBQWlCLEVBQUUsRUFDNUIsQ0FBQyxFQUFFLEtBQUssRUFBRSxpQkFBaUIsRUFBRSxFQUFFLEVBQUU7UUFDL0IsT0FBTyxpQkFBaUI7YUFDckIsR0FBRyxDQUFDLENBQUMsU0FBUyxFQUFFLEdBQUcsRUFBRSxFQUFFO1lBQ3RCLE1BQU0sY0FBYyxHQUFHLEtBQUssQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDN0MsT0FBTyxDQUNMLGNBQWMsQ0FBQyxvQkFBb0IsRUFBRSxHQUFHLENBQUMsQ0FBQyxpQkFBaUIsRUFBRSxFQUFFLENBQUMsQ0FBQztnQkFDL0QsQ0FBQyxlQUFPLENBQUMsT0FBTyxDQUFDLEVBQUU7b0JBQ2pCLG1CQUFtQixFQUFFLGlCQUFpQjtpQkFDdkM7Z0JBQ0QsQ0FBQyw0QkFBZ0IsQ0FBQyxFQUFFO29CQUNsQixZQUFZLEVBQUUsU0FBUyxDQUFDLEVBQUU7aUJBQzNCO2FBQ0YsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUNWLENBQUM7UUFDSixDQUFDLENBQUM7YUFDRCxJQUFJLEVBQUUsQ0FBQztJQUNaLENBQUMsQ0FDRixDQUFDO0lBRUYsSUFBQSxvQkFBSSxFQUFDLEVBQUUsb0JBQW9CLEVBQUUsRUFBRSxDQUFDLEVBQUUsb0JBQW9CLEVBQUUsRUFBRSxFQUFFO1FBQzFELE9BQU8sb0JBQW9CLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztJQUN6QyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFO1FBQ1gsSUFBQSxpQ0FBb0IsRUFBQyxvQkFBb0IsQ0FBQyxDQUFDO0lBQzdDLENBQUMsQ0FBQyxDQUFDO0lBRUgsT0FBTyxJQUFJLGdDQUFnQixDQUFDLGlCQUFpQixDQUFDLENBQUM7QUFDakQsQ0FBQyxDQUNGLENBQUMifQ==