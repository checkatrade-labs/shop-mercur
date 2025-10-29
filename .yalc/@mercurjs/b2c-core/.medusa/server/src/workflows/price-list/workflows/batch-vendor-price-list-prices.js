"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.batchVendorPriceListPricesWorkflow = void 0;
const core_flows_1 = require("@medusajs/medusa/core-flows");
const workflows_sdk_1 = require("@medusajs/workflows-sdk");
const steps_1 = require("../steps");
exports.batchVendorPriceListPricesWorkflow = (0, workflows_sdk_1.createWorkflow)('batch-vendor-price-list-prices', function (input) {
    (0, steps_1.validateVendorPriceListPricesStep)({
        create: input.create,
        update: input.update,
        price_list_id: input.id,
        seller_id: input.seller_id
    });
    const result = core_flows_1.batchPriceListPricesWorkflow.runAsStep({
        input: {
            data: {
                id: input.id,
                create: input.create,
                update: input.update,
                delete: input.delete
            }
        }
    });
    return new workflows_sdk_1.WorkflowResponse(result);
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmF0Y2gtdmVuZG9yLXByaWNlLWxpc3QtcHJpY2VzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vc3JjL3dvcmtmbG93cy9wcmljZS1saXN0L3dvcmtmbG93cy9iYXRjaC12ZW5kb3ItcHJpY2UtbGlzdC1wcmljZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBSUEsNERBQTBFO0FBQzFFLDJEQUEwRTtBQUUxRSxvQ0FBNEQ7QUFVL0MsUUFBQSxrQ0FBa0MsR0FBRyxJQUFBLDhCQUFjLEVBQzlELGdDQUFnQyxFQUNoQyxVQUFVLEtBQW9CO0lBQzVCLElBQUEseUNBQWlDLEVBQUM7UUFDaEMsTUFBTSxFQUFFLEtBQUssQ0FBQyxNQUFNO1FBQ3BCLE1BQU0sRUFBRSxLQUFLLENBQUMsTUFBTTtRQUNwQixhQUFhLEVBQUUsS0FBSyxDQUFDLEVBQUU7UUFDdkIsU0FBUyxFQUFFLEtBQUssQ0FBQyxTQUFTO0tBQzNCLENBQUMsQ0FBQTtJQUVGLE1BQU0sTUFBTSxHQUFHLHlDQUE0QixDQUFDLFNBQVMsQ0FBQztRQUNwRCxLQUFLLEVBQUU7WUFDTCxJQUFJLEVBQUU7Z0JBQ0osRUFBRSxFQUFFLEtBQUssQ0FBQyxFQUFFO2dCQUNaLE1BQU0sRUFBRSxLQUFLLENBQUMsTUFBTTtnQkFDcEIsTUFBTSxFQUFFLEtBQUssQ0FBQyxNQUFNO2dCQUNwQixNQUFNLEVBQUUsS0FBSyxDQUFDLE1BQU07YUFDckI7U0FDRjtLQUNGLENBQUMsQ0FBQTtJQUNGLE9BQU8sSUFBSSxnQ0FBZ0IsQ0FBQyxNQUFNLENBQUMsQ0FBQTtBQUNyQyxDQUFDLENBQ0YsQ0FBQSJ9