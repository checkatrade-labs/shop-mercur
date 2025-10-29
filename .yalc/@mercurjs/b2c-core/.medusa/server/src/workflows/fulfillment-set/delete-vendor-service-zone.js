"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteVendorServiceZonesWorkflow = void 0;
const utils_1 = require("@medusajs/framework/utils");
const workflows_sdk_1 = require("@medusajs/framework/workflows-sdk");
const core_flows_1 = require("@medusajs/medusa/core-flows");
const framework_1 = require("@mercurjs/framework");
const seller_1 = require("../../modules/seller");
const steps_1 = require("../common/steps");
exports.deleteVendorServiceZonesWorkflow = (0, workflows_sdk_1.createWorkflow)("delete-vendor-service-zones", function ({ ids, seller_id }) {
    core_flows_1.deleteServiceZonesWorkflow.runAsStep({
        input: {
            ids,
        },
    });
    const links = (0, workflows_sdk_1.transform)({ ids, seller_id }, ({ ids, seller_id }) => {
        return ids.map((zone) => ({
            [seller_1.SELLER_MODULE]: {
                seller_id,
            },
            [utils_1.Modules.FULFILLMENT]: {
                service_zone_id: zone,
            },
        }));
    });
    const events = (0, workflows_sdk_1.transform)(ids, (ids) => ids.map((id) => ({
        name: framework_1.IntermediateEvents.SERVICE_ZONE_CHANGED,
        data: { id },
    })));
    (0, core_flows_1.dismissRemoteLinkStep)(links);
    (0, steps_1.emitMultipleEventsStep)(events);
    return new workflows_sdk_1.WorkflowResponse(ids);
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVsZXRlLXZlbmRvci1zZXJ2aWNlLXpvbmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvd29ya2Zsb3dzL2Z1bGZpbGxtZW50LXNldC9kZWxldGUtdmVuZG9yLXNlcnZpY2Utem9uZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxxREFBb0Q7QUFDcEQscUVBSTJDO0FBQzNDLDREQUdxQztBQUVyQyxtREFBeUQ7QUFDekQsaURBQXFEO0FBRXJELDJDQUF5RDtBQUk1QyxRQUFBLGdDQUFnQyxHQUFHLElBQUEsOEJBQWMsRUFDNUQsNkJBQTZCLEVBQzdCLFVBQVUsRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFnQjtJQUN4Qyx1Q0FBMEIsQ0FBQyxTQUFTLENBQUM7UUFDbkMsS0FBSyxFQUFFO1lBQ0wsR0FBRztTQUNKO0tBQ0YsQ0FBQyxDQUFDO0lBRUgsTUFBTSxLQUFLLEdBQUcsSUFBQSx5QkFBUyxFQUFDLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLEVBQUUsRUFBRTtRQUNqRSxPQUFPLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLENBQUM7WUFDeEIsQ0FBQyxzQkFBYSxDQUFDLEVBQUU7Z0JBQ2YsU0FBUzthQUNWO1lBQ0QsQ0FBQyxlQUFPLENBQUMsV0FBVyxDQUFDLEVBQUU7Z0JBQ3JCLGVBQWUsRUFBRSxJQUFJO2FBQ3RCO1NBQ0YsQ0FBQyxDQUFDLENBQUM7SUFDTixDQUFDLENBQUMsQ0FBQztJQUVILE1BQU0sTUFBTSxHQUFHLElBQUEseUJBQVMsRUFBQyxHQUFHLEVBQUUsQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUNwQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQ2YsSUFBSSxFQUFFLDhCQUFrQixDQUFDLG9CQUFvQjtRQUM3QyxJQUFJLEVBQUUsRUFBRSxFQUFFLEVBQUU7S0FDYixDQUFDLENBQUMsQ0FDSixDQUFDO0lBRUYsSUFBQSxrQ0FBcUIsRUFBQyxLQUFLLENBQUMsQ0FBQztJQUM3QixJQUFBLDhCQUFzQixFQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQy9CLE9BQU8sSUFBSSxnQ0FBZ0IsQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUNuQyxDQUFDLENBQ0YsQ0FBQyJ9