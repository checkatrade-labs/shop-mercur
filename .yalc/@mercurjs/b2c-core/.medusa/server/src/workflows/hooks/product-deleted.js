"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("@medusajs/framework/utils");
const core_flows_1 = require("@medusajs/medusa/core-flows");
const framework_1 = require("@mercurjs/framework");
core_flows_1.deleteProductsWorkflow.hooks.productsDeleted(async ({ ids }, { container }) => {
    await container.resolve(utils_1.Modules.EVENT_BUS).emit({
        name: framework_1.AlgoliaEvents.PRODUCTS_DELETED,
        data: { ids }
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1kZWxldGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vc3JjL3dvcmtmbG93cy9ob29rcy9wcm9kdWN0LWRlbGV0ZWQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxxREFBbUQ7QUFDbkQsNERBQW9FO0FBRXBFLG1EQUFtRDtBQUVuRCxtQ0FBc0IsQ0FBQyxLQUFLLENBQUMsZUFBZSxDQUFDLEtBQUssRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsU0FBUyxFQUFFLEVBQUUsRUFBRTtJQUM1RSxNQUFNLFNBQVMsQ0FBQyxPQUFPLENBQUMsZUFBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDLElBQUksQ0FBQztRQUM5QyxJQUFJLEVBQUUseUJBQWEsQ0FBQyxnQkFBZ0I7UUFDcEMsSUFBSSxFQUFFLEVBQUUsR0FBRyxFQUFFO0tBQ2QsQ0FBQyxDQUFBO0FBQ0osQ0FBQyxDQUFDLENBQUEifQ==