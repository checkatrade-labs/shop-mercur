"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createSellerCustomerGroupWorkflow = void 0;
const utils_1 = require("@medusajs/framework/utils");
const core_flows_1 = require("@medusajs/medusa/core-flows");
const workflows_sdk_1 = require("@medusajs/workflows-sdk");
const seller_1 = require("../../../modules/seller");
exports.createSellerCustomerGroupWorkflow = (0, workflows_sdk_1.createWorkflow)("create-seller-customer-group", function (input) {
    const group = core_flows_1.createCustomerGroupsWorkflow.runAsStep({
        input: {
            customersData: [input],
        },
    });
    const links = (0, workflows_sdk_1.transform)({ group, input }, ({ group, input }) => {
        return [
            {
                [seller_1.SELLER_MODULE]: {
                    seller_id: input.seller_id,
                },
                [utils_1.Modules.CUSTOMER]: {
                    customer_group_id: group[0].id,
                },
            },
        ];
    });
    (0, core_flows_1.createRemoteLinkStep)(links);
    return new workflows_sdk_1.WorkflowResponse(group[0]);
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JlYXRlLXNlbGxlci1jdXN0b21lci1ncm91cC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy93b3JrZmxvd3MvY3VzdG9tZXItZ3JvdXBzL3dvcmtmbG93cy9jcmVhdGUtc2VsbGVyLWN1c3RvbWVyLWdyb3VwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLHFEQUFvRDtBQUNwRCw0REFHcUM7QUFDckMsMkRBSWlDO0FBRWpDLG9EQUF3RDtBQU8zQyxRQUFBLGlDQUFpQyxHQUFHLElBQUEsOEJBQWMsRUFDN0QsOEJBQThCLEVBQzlCLFVBQVUsS0FBb0I7SUFDNUIsTUFBTSxLQUFLLEdBQUcseUNBQTRCLENBQUMsU0FBUyxDQUFDO1FBQ25ELEtBQUssRUFBRTtZQUNMLGFBQWEsRUFBRSxDQUFDLEtBQUssQ0FBQztTQUN2QjtLQUNGLENBQUMsQ0FBQztJQUVILE1BQU0sS0FBSyxHQUFHLElBQUEseUJBQVMsRUFBQyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsRUFBRSxDQUFDLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUU7UUFDN0QsT0FBTztZQUNMO2dCQUNFLENBQUMsc0JBQWEsQ0FBQyxFQUFFO29CQUNmLFNBQVMsRUFBRSxLQUFLLENBQUMsU0FBUztpQkFDM0I7Z0JBQ0QsQ0FBQyxlQUFPLENBQUMsUUFBUSxDQUFDLEVBQUU7b0JBQ2xCLGlCQUFpQixFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFO2lCQUMvQjthQUNGO1NBQ0YsQ0FBQztJQUNKLENBQUMsQ0FBQyxDQUFDO0lBRUgsSUFBQSxpQ0FBb0IsRUFBQyxLQUFLLENBQUMsQ0FBQztJQUU1QixPQUFPLElBQUksZ0NBQWdCLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDeEMsQ0FBQyxDQUNGLENBQUMifQ==