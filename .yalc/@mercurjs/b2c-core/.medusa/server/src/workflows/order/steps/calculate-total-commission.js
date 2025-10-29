"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculateTotalCommissionStep = void 0;
const utils_1 = require("@medusajs/framework/utils");
const workflows_sdk_1 = require("@medusajs/framework/workflows-sdk");
exports.calculateTotalCommissionStep = (0, workflows_sdk_1.createStep)('calculate-total-commission', async (input, { container }) => {
    const query = container.resolve(utils_1.ContainerRegistrationKeys.QUERY);
    const { data: [order] } = await query.graph({
        entity: 'order',
        fields: ['items.id'],
        filters: {
            id: input.order_id
        }
    });
    const order_line_items = order.items.map((i) => i.id);
    const { data: commission_lines } = await query.graph({
        entity: 'commission_line',
        fields: ['*'],
        filters: {
            item_line_id: order_line_items
        }
    });
    const total_commission = commission_lines.reduce((acc, current) => {
        return utils_1.MathBN.add(acc, current.value);
    }, utils_1.MathBN.convert(0));
    return new workflows_sdk_1.StepResponse({ total_commission });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FsY3VsYXRlLXRvdGFsLWNvbW1pc3Npb24uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvd29ya2Zsb3dzL29yZGVyL3N0ZXBzL2NhbGN1bGF0ZS10b3RhbC1jb21taXNzaW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLHFEQUlrQztBQUNsQyxxRUFBNEU7QUFFL0QsUUFBQSw0QkFBNEIsR0FBRyxJQUFBLDBCQUFVLEVBQ3BELDRCQUE0QixFQUM1QixLQUFLLEVBQ0gsS0FFQyxFQUNELEVBQUUsU0FBUyxFQUFFLEVBQ2IsRUFBRTtJQUNGLE1BQU0sS0FBSyxHQUFHLFNBQVMsQ0FBQyxPQUFPLENBQUMsaUNBQXlCLENBQUMsS0FBSyxDQUFDLENBQUE7SUFFaEUsTUFBTSxFQUNKLElBQUksRUFBRSxDQUFDLEtBQUssQ0FBQyxFQUNkLEdBQUcsTUFBTSxLQUFLLENBQUMsS0FBSyxDQUFDO1FBQ3BCLE1BQU0sRUFBRSxPQUFPO1FBQ2YsTUFBTSxFQUFFLENBQUMsVUFBVSxDQUFDO1FBQ3BCLE9BQU8sRUFBRTtZQUNQLEVBQUUsRUFBRSxLQUFLLENBQUMsUUFBUTtTQUNuQjtLQUNGLENBQUMsQ0FBQTtJQUVGLE1BQU0sZ0JBQWdCLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQTtJQUVyRCxNQUFNLEVBQUUsSUFBSSxFQUFFLGdCQUFnQixFQUFFLEdBQUcsTUFBTSxLQUFLLENBQUMsS0FBSyxDQUFDO1FBQ25ELE1BQU0sRUFBRSxpQkFBaUI7UUFDekIsTUFBTSxFQUFFLENBQUMsR0FBRyxDQUFDO1FBQ2IsT0FBTyxFQUFFO1lBQ1AsWUFBWSxFQUFFLGdCQUFnQjtTQUMvQjtLQUNGLENBQUMsQ0FBQTtJQUVGLE1BQU0sZ0JBQWdCLEdBQWMsZ0JBQWdCLENBQUMsTUFBTSxDQUN6RCxDQUFDLEdBQUcsRUFBRSxPQUFPLEVBQUUsRUFBRTtRQUNmLE9BQU8sY0FBTSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFBO0lBQ3ZDLENBQUMsRUFDRCxjQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUNsQixDQUFBO0lBRUQsT0FBTyxJQUFJLDRCQUFZLENBQUMsRUFBRSxnQkFBZ0IsRUFBRSxDQUFDLENBQUE7QUFDL0MsQ0FBQyxDQUNGLENBQUEifQ==