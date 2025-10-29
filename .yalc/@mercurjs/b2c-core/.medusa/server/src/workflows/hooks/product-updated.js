"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("@medusajs/framework/utils");
const core_flows_1 = require("@medusajs/medusa/core-flows");
const framework_1 = require("@mercurjs/framework");
const utils_2 = require("../attribute/utils");
core_flows_1.updateProductsWorkflow.hooks.productsUpdated(async ({ products, additional_data }, { container }) => {
    await (0, utils_2.productsUpdatedHookHandler)({
        products,
        additional_data,
        container
    });
    await container.resolve(utils_1.Modules.EVENT_BUS).emit({
        name: framework_1.AlgoliaEvents.PRODUCTS_CHANGED,
        data: { ids: products.map((product) => product.id) }
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC11cGRhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vc3JjL3dvcmtmbG93cy9ob29rcy9wcm9kdWN0LXVwZGF0ZWQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxxREFBbUQ7QUFDbkQsNERBQW9FO0FBRXBFLG1EQUFtRDtBQUVuRCw4Q0FBK0Q7QUFFL0QsbUNBQXNCLENBQUMsS0FBSyxDQUFDLGVBQWUsQ0FDMUMsS0FBSyxFQUFFLEVBQUUsUUFBUSxFQUFFLGVBQWUsRUFBRSxFQUFFLEVBQUUsU0FBUyxFQUFFLEVBQUUsRUFBRTtJQUNyRCxNQUFNLElBQUEsa0NBQTBCLEVBQUM7UUFDL0IsUUFBUTtRQUNSLGVBQWU7UUFDZixTQUFTO0tBQ1YsQ0FBQyxDQUFBO0lBRUYsTUFBTSxTQUFTLENBQUMsT0FBTyxDQUFDLGVBQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQyxJQUFJLENBQUM7UUFDOUMsSUFBSSxFQUFFLHlCQUFhLENBQUMsZ0JBQWdCO1FBQ3BDLElBQUksRUFBRSxFQUFFLEdBQUcsRUFBRSxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUMsT0FBTyxFQUFFLEVBQUUsQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLEVBQUU7S0FDckQsQ0FBQyxDQUFBO0FBQ0osQ0FBQyxDQUNGLENBQUEifQ==