"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createVendorServiceZonesWorkflow = void 0;
const utils_1 = require("@medusajs/framework/utils");
const workflows_sdk_1 = require("@medusajs/framework/workflows-sdk");
const core_flows_1 = require("@medusajs/medusa/core-flows");
const framework_1 = require("@mercurjs/framework");
const seller_1 = require("../../modules/seller");
const steps_1 = require("../common/steps");
exports.createVendorServiceZonesWorkflow = (0, workflows_sdk_1.createWorkflow)("create-vendor-service-zones", function ({ data, seller_id }) {
    const zones = core_flows_1.createServiceZonesWorkflow.runAsStep({ input: { data } });
    const links = (0, workflows_sdk_1.transform)({ zones, seller_id }, ({ zones, seller_id }) => {
        return zones.map((zone) => ({
            [seller_1.SELLER_MODULE]: {
                seller_id: seller_id,
            },
            [utils_1.Modules.FULFILLMENT]: {
                service_zone_id: zone.id,
            },
        }));
    });
    const events = (0, workflows_sdk_1.transform)(zones, (zones) => zones.map((z) => ({
        name: framework_1.IntermediateEvents.SERVICE_ZONE_CHANGED,
        data: { id: z.id },
    })));
    (0, core_flows_1.createRemoteLinkStep)(links);
    (0, steps_1.emitMultipleEventsStep)(events);
    return new workflows_sdk_1.WorkflowResponse(zones);
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JlYXRlLXZlbmRvci1zZXJ2aWNlLXpvbmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvd29ya2Zsb3dzL2Z1bGZpbGxtZW50LXNldC9jcmVhdGUtdmVuZG9yLXNlcnZpY2Utem9uZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFDQSxxREFBb0Q7QUFDcEQscUVBSTJDO0FBQzNDLDREQUdxQztBQUVyQyxtREFBeUQ7QUFDekQsaURBQXFEO0FBRXJELDJDQUF5RDtBQUk1QyxRQUFBLGdDQUFnQyxHQUFHLElBQUEsOEJBQWMsRUFDNUQsNkJBQTZCLEVBQzdCLFVBQVUsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFnQjtJQUN6QyxNQUFNLEtBQUssR0FBRyx1Q0FBMEIsQ0FBQyxTQUFTLENBQUMsRUFBRSxLQUFLLEVBQUUsRUFBRSxJQUFJLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFFeEUsTUFBTSxLQUFLLEdBQUcsSUFBQSx5QkFBUyxFQUFDLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxFQUFFLENBQUMsRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLEVBQUUsRUFBRTtRQUNyRSxPQUFPLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLENBQUM7WUFDMUIsQ0FBQyxzQkFBYSxDQUFDLEVBQUU7Z0JBQ2YsU0FBUyxFQUFFLFNBQVM7YUFDckI7WUFDRCxDQUFDLGVBQU8sQ0FBQyxXQUFXLENBQUMsRUFBRTtnQkFDckIsZUFBZSxFQUFFLElBQUksQ0FBQyxFQUFFO2FBQ3pCO1NBQ0YsQ0FBQyxDQUFDLENBQUM7SUFDTixDQUFDLENBQUMsQ0FBQztJQUVILE1BQU0sTUFBTSxHQUFHLElBQUEseUJBQVMsRUFBQyxLQUFLLEVBQUUsQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUN4QyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQ2hCLElBQUksRUFBRSw4QkFBa0IsQ0FBQyxvQkFBb0I7UUFDN0MsSUFBSSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUU7S0FDbkIsQ0FBQyxDQUFDLENBQ0osQ0FBQztJQUVGLElBQUEsaUNBQW9CLEVBQUMsS0FBSyxDQUFDLENBQUM7SUFDNUIsSUFBQSw4QkFBc0IsRUFBQyxNQUFNLENBQUMsQ0FBQztJQUMvQixPQUFPLElBQUksZ0NBQWdCLENBQUMsS0FBSyxDQUFDLENBQUM7QUFDckMsQ0FBQyxDQUNGLENBQUMifQ==