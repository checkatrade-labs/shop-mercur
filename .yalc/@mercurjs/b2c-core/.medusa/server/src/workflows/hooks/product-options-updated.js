"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("@medusajs/framework/utils");
const core_flows_1 = require("@medusajs/medusa/core-flows");
const framework_1 = require("@mercurjs/framework");
core_flows_1.updateProductOptionsWorkflow.hooks.productOptionsUpdated(async ({ product_options }, { container }) => {
    await container.resolve(utils_1.Modules.EVENT_BUS).emit({
        name: framework_1.AlgoliaEvents.PRODUCTS_CHANGED,
        data: {
            ids: product_options
                .map((v) => v.product_id)
                .filter((v) => v && v !== null)
        }
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1vcHRpb25zLXVwZGF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvd29ya2Zsb3dzL2hvb2tzL3Byb2R1Y3Qtb3B0aW9ucy11cGRhdGVkLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEscURBQW1EO0FBQ25ELDREQUEwRTtBQUUxRSxtREFBbUQ7QUFFbkQseUNBQTRCLENBQUMsS0FBSyxDQUFDLHFCQUFxQixDQUN0RCxLQUFLLEVBQUUsRUFBRSxlQUFlLEVBQUUsRUFBRSxFQUFFLFNBQVMsRUFBRSxFQUFFLEVBQUU7SUFDM0MsTUFBTSxTQUFTLENBQUMsT0FBTyxDQUFDLGVBQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQyxJQUFJLENBQUM7UUFDOUMsSUFBSSxFQUFFLHlCQUFhLENBQUMsZ0JBQWdCO1FBQ3BDLElBQUksRUFBRTtZQUNKLEdBQUcsRUFBRSxlQUFlO2lCQUNqQixHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUM7aUJBQ3hCLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxJQUFJLENBQUM7U0FDbEM7S0FDRixDQUFDLENBQUE7QUFDSixDQUFDLENBQ0YsQ0FBQSJ9