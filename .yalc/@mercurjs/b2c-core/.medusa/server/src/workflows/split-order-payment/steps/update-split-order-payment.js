"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateSplitOrderPaymentsStep = void 0;
const workflows_sdk_1 = require("@medusajs/framework/workflows-sdk");
const split_order_payment_1 = require("../../../modules/split-order-payment");
exports.updateSplitOrderPaymentsStep = (0, workflows_sdk_1.createStep)("update-split-order-payments", async (input, { container }) => {
    const service = container.resolve(split_order_payment_1.SPLIT_ORDER_PAYMENT_MODULE);
    const previousData = await service.listSplitOrderPayments({
        id: input.map((i) => i.id),
    });
    const updatedData = await service.updateSplitOrderPayments(input);
    return new workflows_sdk_1.StepResponse(updatedData, previousData);
}, async (previousData, { container }) => {
    const service = container.resolve(split_order_payment_1.SPLIT_ORDER_PAYMENT_MODULE);
    await service.updateSplitOrderPayments(previousData);
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXBkYXRlLXNwbGl0LW9yZGVyLXBheW1lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvd29ya2Zsb3dzL3NwbGl0LW9yZGVyLXBheW1lbnQvc3RlcHMvdXBkYXRlLXNwbGl0LW9yZGVyLXBheW1lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEscUVBQTZFO0FBTTdFLDhFQUc4QztBQUVqQyxRQUFBLDRCQUE0QixHQUFHLElBQUEsMEJBQVUsRUFDcEQsNkJBQTZCLEVBQzdCLEtBQUssRUFBRSxLQUFvQyxFQUFFLEVBQUUsU0FBUyxFQUFFLEVBQUUsRUFBRTtJQUM1RCxNQUFNLE9BQU8sR0FBRyxTQUFTLENBQUMsT0FBTyxDQUMvQixnREFBMEIsQ0FDM0IsQ0FBQztJQUVGLE1BQU0sWUFBWSxHQUFHLE1BQU0sT0FBTyxDQUFDLHNCQUFzQixDQUFDO1FBQ3hELEVBQUUsRUFBRSxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO0tBQzNCLENBQUMsQ0FBQztJQUVILE1BQU0sV0FBVyxHQUFHLE1BQU0sT0FBTyxDQUFDLHdCQUF3QixDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ2xFLE9BQU8sSUFBSSw0QkFBWSxDQUFDLFdBQVcsRUFBRSxZQUFZLENBQUMsQ0FBQztBQUNyRCxDQUFDLEVBQ0QsS0FBSyxFQUFFLFlBQW9DLEVBQUUsRUFBRSxTQUFTLEVBQUUsRUFBRSxFQUFFO0lBQzVELE1BQU0sT0FBTyxHQUFHLFNBQVMsQ0FBQyxPQUFPLENBQy9CLGdEQUEwQixDQUMzQixDQUFDO0lBQ0YsTUFBTSxPQUFPLENBQUMsd0JBQXdCLENBQUMsWUFBWSxDQUFDLENBQUM7QUFDdkQsQ0FBQyxDQUNGLENBQUMifQ==