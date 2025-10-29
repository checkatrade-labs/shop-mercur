"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createSellerStep = void 0;
const utils_1 = require("@medusajs/framework/utils");
const workflows_sdk_1 = require("@medusajs/framework/workflows-sdk");
const seller_1 = require("../../../modules/seller");
exports.createSellerStep = (0, workflows_sdk_1.createStep)("create-seller", async (input, { container }) => {
    const service = container.resolve(seller_1.SELLER_MODULE);
    const seller = await service.createSellers({
        ...input,
        handle: (0, utils_1.toHandle)(input.name),
    });
    return new workflows_sdk_1.StepResponse(seller, seller.id);
}, async (id, { container }) => {
    if (!id) {
        return;
    }
    const service = container.resolve(seller_1.SELLER_MODULE);
    await service.deleteSellers([id]);
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JlYXRlLXNlbGxlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy93b3JrZmxvd3Mvc2VsbGVyL3N0ZXBzL2NyZWF0ZS1zZWxsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEscURBQXFEO0FBQ3JELHFFQUE2RTtBQUc3RSxvREFBNkU7QUFFaEUsUUFBQSxnQkFBZ0IsR0FBRyxJQUFBLDBCQUFVLEVBQ3hDLGVBQWUsRUFDZixLQUFLLEVBQUUsS0FBc0IsRUFBRSxFQUFFLFNBQVMsRUFBRSxFQUFFLEVBQUU7SUFDOUMsTUFBTSxPQUFPLEdBQUcsU0FBUyxDQUFDLE9BQU8sQ0FBc0Isc0JBQWEsQ0FBQyxDQUFDO0lBRXRFLE1BQU0sTUFBTSxHQUFjLE1BQU0sT0FBTyxDQUFDLGFBQWEsQ0FBQztRQUNwRCxHQUFHLEtBQUs7UUFDUixNQUFNLEVBQUUsSUFBQSxnQkFBUSxFQUFDLEtBQUssQ0FBQyxJQUFJLENBQUM7S0FDN0IsQ0FBQyxDQUFDO0lBRUgsT0FBTyxJQUFJLDRCQUFZLENBQUMsTUFBTSxFQUFFLE1BQU0sQ0FBQyxFQUFFLENBQUMsQ0FBQztBQUM3QyxDQUFDLEVBQ0QsS0FBSyxFQUFFLEVBQVUsRUFBRSxFQUFFLFNBQVMsRUFBRSxFQUFFLEVBQUU7SUFDbEMsSUFBSSxDQUFDLEVBQUUsRUFBRSxDQUFDO1FBQ1IsT0FBTztJQUNULENBQUM7SUFFRCxNQUFNLE9BQU8sR0FBRyxTQUFTLENBQUMsT0FBTyxDQUFzQixzQkFBYSxDQUFDLENBQUM7SUFFdEUsTUFBTSxPQUFPLENBQUMsYUFBYSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztBQUNwQyxDQUFDLENBQ0YsQ0FBQyJ9