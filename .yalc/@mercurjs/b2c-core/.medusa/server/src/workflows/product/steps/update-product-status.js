"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateProductStatusStep = void 0;
const utils_1 = require("@medusajs/framework/utils");
const workflows_sdk_1 = require("@medusajs/framework/workflows-sdk");
exports.updateProductStatusStep = (0, workflows_sdk_1.createStep)('update-product-status', async (input, { container }) => {
    const service = container.resolve(utils_1.Modules.PRODUCT);
    const product = await service.updateProducts(input.id, {
        status: input.status
    });
    return new workflows_sdk_1.StepResponse(product, product.id);
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXBkYXRlLXByb2R1Y3Qtc3RhdHVzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vc3JjL3dvcmtmbG93cy9wcm9kdWN0L3N0ZXBzL3VwZGF0ZS1wcm9kdWN0LXN0YXR1cy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxxREFBa0U7QUFDbEUscUVBQTRFO0FBRS9ELFFBQUEsdUJBQXVCLEdBQUcsSUFBQSwwQkFBVSxFQUMvQyx1QkFBdUIsRUFDdkIsS0FBSyxFQUFFLEtBQTRDLEVBQUUsRUFBRSxTQUFTLEVBQUUsRUFBRSxFQUFFO0lBQ3BFLE1BQU0sT0FBTyxHQUFHLFNBQVMsQ0FBQyxPQUFPLENBQUMsZUFBTyxDQUFDLE9BQU8sQ0FBQyxDQUFBO0lBRWxELE1BQU0sT0FBTyxHQUFHLE1BQU0sT0FBTyxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsRUFBRSxFQUFFO1FBQ3JELE1BQU0sRUFBRSxLQUFLLENBQUMsTUFBTTtLQUNyQixDQUFDLENBQUE7SUFFRixPQUFPLElBQUksNEJBQVksQ0FBQyxPQUFPLEVBQUUsT0FBTyxDQUFDLEVBQUUsQ0FBQyxDQUFBO0FBQzlDLENBQUMsQ0FDRixDQUFBIn0=