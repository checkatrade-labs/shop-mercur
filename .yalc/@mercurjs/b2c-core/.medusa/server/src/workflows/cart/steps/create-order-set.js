"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createOrderSetStep = void 0;
const workflows_sdk_1 = require("@medusajs/framework/workflows-sdk");
const marketplace_1 = require("../../../modules/marketplace");
exports.createOrderSetStep = (0, workflows_sdk_1.createStep)("create-order-set", async (input, { container }) => {
    const service = container.resolve(marketplace_1.MARKETPLACE_MODULE);
    const orderSet = await service.createOrderSets(input);
    return new workflows_sdk_1.StepResponse(orderSet, orderSet.id);
}, async (orderSetId, { container }) => {
    const service = container.resolve(marketplace_1.MARKETPLACE_MODULE);
    await service.deleteOrderSets(orderSetId);
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JlYXRlLW9yZGVyLXNldC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy93b3JrZmxvd3MvY2FydC9zdGVwcy9jcmVhdGUtb3JkZXItc2V0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLHFFQUE2RTtBQUc3RSw4REFBa0U7QUFHckQsUUFBQSxrQkFBa0IsR0FBRyxJQUFBLDBCQUFVLEVBQzFDLGtCQUFrQixFQUNsQixLQUFLLEVBQUUsS0FBd0IsRUFBRSxFQUFFLFNBQVMsRUFBRSxFQUFFLEVBQUU7SUFDaEQsTUFBTSxPQUFPLEdBQ1gsU0FBUyxDQUFDLE9BQU8sQ0FBMkIsZ0NBQWtCLENBQUMsQ0FBQztJQUVsRSxNQUFNLFFBQVEsR0FBRyxNQUFNLE9BQU8sQ0FBQyxlQUFlLENBQUMsS0FBSyxDQUFDLENBQUM7SUFFdEQsT0FBTyxJQUFJLDRCQUFZLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQyxFQUFFLENBQUMsQ0FBQztBQUNqRCxDQUFDLEVBQ0QsS0FBSyxFQUFFLFVBQWtCLEVBQUUsRUFBRSxTQUFTLEVBQUUsRUFBRSxFQUFFO0lBQzFDLE1BQU0sT0FBTyxHQUNYLFNBQVMsQ0FBQyxPQUFPLENBQTJCLGdDQUFrQixDQUFDLENBQUM7SUFDbEUsTUFBTSxPQUFPLENBQUMsZUFBZSxDQUFDLFVBQVUsQ0FBQyxDQUFDO0FBQzVDLENBQUMsQ0FDRixDQUFDIn0=