"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("@medusajs/framework/utils");
const core_flows_1 = require("@medusajs/medusa/core-flows");
const framework_1 = require("@mercurjs/framework");
core_flows_1.updateProductTagsWorkflow.hooks.productTagsUpdated(async ({ product_tags }, { container }) => {
    const productIds = product_tags
        .map((t) => t.products)
        .flat()
        .map((p) => p?.id)
        .filter((v) => v && v !== null);
    await container.resolve(utils_1.Modules.EVENT_BUS).emit({
        name: framework_1.AlgoliaEvents.PRODUCTS_CHANGED,
        data: {
            ids: new Set([...productIds])
        }
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC10YWdzLXVwZGF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvd29ya2Zsb3dzL2hvb2tzL3Byb2R1Y3QtdGFncy11cGRhdGVkLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEscURBQW1EO0FBQ25ELDREQUF1RTtBQUV2RSxtREFBbUQ7QUFFbkQsc0NBQXlCLENBQUMsS0FBSyxDQUFDLGtCQUFrQixDQUNoRCxLQUFLLEVBQUUsRUFBRSxZQUFZLEVBQUUsRUFBRSxFQUFFLFNBQVMsRUFBRSxFQUFFLEVBQUU7SUFDeEMsTUFBTSxVQUFVLEdBQUcsWUFBWTtTQUM1QixHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUM7U0FDdEIsSUFBSSxFQUFFO1NBQ04sR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDO1NBQ2pCLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxJQUFJLENBQUMsQ0FBQTtJQUVqQyxNQUFNLFNBQVMsQ0FBQyxPQUFPLENBQUMsZUFBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDLElBQUksQ0FBQztRQUM5QyxJQUFJLEVBQUUseUJBQWEsQ0FBQyxnQkFBZ0I7UUFDcEMsSUFBSSxFQUFFO1lBQ0osR0FBRyxFQUFFLElBQUksR0FBRyxDQUFDLENBQUMsR0FBRyxVQUFVLENBQUMsQ0FBQztTQUM5QjtLQUNGLENBQUMsQ0FBQTtBQUNKLENBQUMsQ0FDRixDQUFBIn0=