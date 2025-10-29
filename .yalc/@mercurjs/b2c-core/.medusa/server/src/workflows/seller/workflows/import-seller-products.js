"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.importSellerProductsWorkflow = void 0;
const core_flows_1 = require("@medusajs/medusa/core-flows");
const workflows_sdk_1 = require("@medusajs/workflows-sdk");
const framework_1 = require("@mercurjs/framework");
const steps_1 = require("../steps");
exports.importSellerProductsWorkflow = (0, workflows_sdk_1.createWorkflow)("import-seller-products", function (input) {
    const products = (0, core_flows_1.parseProductCsvStep)(input.file_content);
    const batchCreate = (0, steps_1.validateProductsToImportStep)(products);
    const created = core_flows_1.createProductsWorkflow.runAsStep({
        input: {
            products: batchCreate,
            additional_data: { seller_id: input.seller_id },
        },
    });
    const requestsPayload = (0, workflows_sdk_1.transform)({ created, input }, ({ created, input }) => {
        return created.map((p) => ({
            data: {
                ...p,
                product_id: p.id,
            },
            submitter_id: input.submitter_id,
            type: "product",
            status: "pending",
        }));
    });
    const eventPayload = (0, workflows_sdk_1.transform)({ requestsPayload, input }, ({ requestsPayload, input }) => ({
        request_payloads: requestsPayload,
        seller_id: input.seller_id,
        submitter_id: input.submitter_id,
    }));
    (0, core_flows_1.emitEventStep)({
        eventName: framework_1.ImportSellerProductsRequestUpdatedEvent.TO_CREATE,
        data: eventPayload,
    });
    return new workflows_sdk_1.WorkflowResponse(created);
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW1wb3J0LXNlbGxlci1wcm9kdWN0cy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy93b3JrZmxvd3Mvc2VsbGVyL3dvcmtmbG93cy9pbXBvcnQtc2VsbGVyLXByb2R1Y3RzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLDREQUlxQztBQUNyQywyREFJaUM7QUFFakMsbURBRzZCO0FBRTdCLG9DQUF3RDtBQUUzQyxRQUFBLDRCQUE0QixHQUFHLElBQUEsOEJBQWMsRUFDeEQsd0JBQXdCLEVBQ3hCLFVBQVUsS0FJVDtJQUNDLE1BQU0sUUFBUSxHQUFHLElBQUEsZ0NBQW1CLEVBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQ3pELE1BQU0sV0FBVyxHQUFHLElBQUEsb0NBQTRCLEVBQUMsUUFBUSxDQUFDLENBQUM7SUFFM0QsTUFBTSxPQUFPLEdBQUcsbUNBQXNCLENBQUMsU0FBUyxDQUFDO1FBQy9DLEtBQUssRUFBRTtZQUNMLFFBQVEsRUFBRSxXQUFXO1lBQ3JCLGVBQWUsRUFBRSxFQUFFLFNBQVMsRUFBRSxLQUFLLENBQUMsU0FBUyxFQUFFO1NBQ2hEO0tBQ0YsQ0FBQyxDQUFDO0lBRUgsTUFBTSxlQUFlLEdBQUcsSUFBQSx5QkFBUyxFQUMvQixFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsRUFDbEIsQ0FBQyxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFO1FBQ3JCLE9BQU8sT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQztZQUN6QixJQUFJLEVBQUU7Z0JBQ0osR0FBRyxDQUFDO2dCQUNKLFVBQVUsRUFBRSxDQUFDLENBQUMsRUFBRTthQUNqQjtZQUNELFlBQVksRUFBRSxLQUFLLENBQUMsWUFBWTtZQUNoQyxJQUFJLEVBQUUsU0FBUztZQUNmLE1BQU0sRUFBRSxTQUEwQjtTQUNuQyxDQUFDLENBQUMsQ0FBQztJQUNOLENBQUMsQ0FDRixDQUFDO0lBRUYsTUFBTSxZQUFZLEdBQUcsSUFBQSx5QkFBUyxFQUM1QixFQUFFLGVBQWUsRUFBRSxLQUFLLEVBQUUsRUFDMUIsQ0FBQyxFQUFFLGVBQWUsRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztRQUMvQixnQkFBZ0IsRUFBRSxlQUFlO1FBQ2pDLFNBQVMsRUFBRSxLQUFLLENBQUMsU0FBUztRQUMxQixZQUFZLEVBQUUsS0FBSyxDQUFDLFlBQVk7S0FDakMsQ0FBQyxDQUNILENBQUM7SUFFRixJQUFBLDBCQUFhLEVBQUM7UUFDWixTQUFTLEVBQUUsbURBQXVDLENBQUMsU0FBUztRQUM1RCxJQUFJLEVBQUUsWUFBWTtLQUNuQixDQUFDLENBQUM7SUFFSCxPQUFPLElBQUksZ0NBQWdCLENBQUMsT0FBTyxDQUFDLENBQUM7QUFDdkMsQ0FBQyxDQUNGLENBQUMifQ==