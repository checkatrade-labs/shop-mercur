"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("@medusajs/framework/utils");
const core_flows_1 = require("@medusajs/medusa/core-flows");
const framework_1 = require("@mercurjs/framework");
core_flows_1.updateCollectionsWorkflow.hooks.collectionsUpdated(async ({ collections }, { container }) => {
    const productIds = collections
        .map((c) => c.products)
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1jb2xsZWN0aW9ucy11cGRhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vc3JjL3dvcmtmbG93cy9ob29rcy9wcm9kdWN0LWNvbGxlY3Rpb25zLXVwZGF0ZWQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxxREFBbUQ7QUFDbkQsNERBQXVFO0FBRXZFLG1EQUFtRDtBQUVuRCxzQ0FBeUIsQ0FBQyxLQUFLLENBQUMsa0JBQWtCLENBQ2hELEtBQUssRUFBRSxFQUFFLFdBQVcsRUFBRSxFQUFFLEVBQUUsU0FBUyxFQUFFLEVBQUUsRUFBRTtJQUN2QyxNQUFNLFVBQVUsR0FBRyxXQUFXO1NBQzNCLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQztTQUN0QixJQUFJLEVBQUU7U0FDTixHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUM7U0FDakIsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLElBQUksQ0FBQyxDQUFBO0lBRWpDLE1BQU0sU0FBUyxDQUFDLE9BQU8sQ0FBQyxlQUFPLENBQUMsU0FBUyxDQUFDLENBQUMsSUFBSSxDQUFDO1FBQzlDLElBQUksRUFBRSx5QkFBYSxDQUFDLGdCQUFnQjtRQUNwQyxJQUFJLEVBQUU7WUFDSixHQUFHLEVBQUUsSUFBSSxHQUFHLENBQUMsQ0FBQyxHQUFHLFVBQVUsQ0FBQyxDQUFDO1NBQzlCO0tBQ0YsQ0FBQyxDQUFBO0FBQ0osQ0FBQyxDQUNGLENBQUEifQ==