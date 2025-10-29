"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("@medusajs/framework/utils");
const core_flows_1 = require("@medusajs/medusa/core-flows");
const framework_1 = require("@mercurjs/framework");
core_flows_1.updateProductVariantsWorkflow.hooks.productVariantsUpdated(async ({ product_variants }, { container }) => {
    await container.resolve(utils_1.Modules.EVENT_BUS).emit({
        name: framework_1.AlgoliaEvents.PRODUCTS_CHANGED,
        data: {
            ids: product_variants
                .map((v) => v.product_id)
                .filter((v) => v && v !== null)
        }
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC12YXJpYW50cy11cGRhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vc3JjL3dvcmtmbG93cy9ob29rcy9wcm9kdWN0LXZhcmlhbnRzLXVwZGF0ZWQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxxREFBbUQ7QUFDbkQsNERBQTJFO0FBRTNFLG1EQUFtRDtBQUVuRCwwQ0FBNkIsQ0FBQyxLQUFLLENBQUMsc0JBQXNCLENBQ3hELEtBQUssRUFBRSxFQUFFLGdCQUFnQixFQUFFLEVBQUUsRUFBRSxTQUFTLEVBQUUsRUFBRSxFQUFFO0lBQzVDLE1BQU0sU0FBUyxDQUFDLE9BQU8sQ0FBQyxlQUFPLENBQUMsU0FBUyxDQUFDLENBQUMsSUFBSSxDQUFDO1FBQzlDLElBQUksRUFBRSx5QkFBYSxDQUFDLGdCQUFnQjtRQUNwQyxJQUFJLEVBQUU7WUFDSixHQUFHLEVBQUUsZ0JBQWdCO2lCQUNsQixHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUM7aUJBQ3hCLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxJQUFJLENBQUM7U0FDbEM7S0FDRixDQUFDLENBQUE7QUFDSixDQUFDLENBQ0YsQ0FBQSJ9