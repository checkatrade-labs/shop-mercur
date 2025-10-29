"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculatePayoutForOrderStep = void 0;
const utils_1 = require("@medusajs/framework/utils");
const workflows_sdk_1 = require("@medusajs/framework/workflows-sdk");
exports.calculatePayoutForOrderStep = (0, workflows_sdk_1.createStep)('calculate-payout-for-order', async (input, { container }) => {
    const query = container.resolve(utils_1.ContainerRegistrationKeys.QUERY);
    const { data: [order] } = await query.graph({
        entity: 'order',
        fields: ['items.id', 'split_order_payment.*'],
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
    const orderPayment = order.split_order_payment;
    const captured_amount = utils_1.MathBN.convert(orderPayment.captured_amount);
    const refunded_amount = utils_1.MathBN.convert(orderPayment.refunded_amount);
    const payout_total = captured_amount
        .minus(refunded_amount)
        .minus(total_commission);
    return new workflows_sdk_1.StepResponse(payout_total);
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FsY3VsYXRlLXBheW91dC1mb3Itb3JkZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvd29ya2Zsb3dzL29yZGVyL3N0ZXBzL2NhbGN1bGF0ZS1wYXlvdXQtZm9yLW9yZGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLHFEQUE2RTtBQUM3RSxxRUFBNEU7QUFJL0QsUUFBQSwyQkFBMkIsR0FBRyxJQUFBLDBCQUFVLEVBQ25ELDRCQUE0QixFQUM1QixLQUFLLEVBQ0gsS0FFQyxFQUNELEVBQUUsU0FBUyxFQUFFLEVBQ2IsRUFBRTtJQUNGLE1BQU0sS0FBSyxHQUFHLFNBQVMsQ0FBQyxPQUFPLENBQUMsaUNBQXlCLENBQUMsS0FBSyxDQUFDLENBQUE7SUFFaEUsTUFBTSxFQUNKLElBQUksRUFBRSxDQUFDLEtBQUssQ0FBQyxFQUNkLEdBQUcsTUFBTSxLQUFLLENBQUMsS0FBSyxDQUFDO1FBQ3BCLE1BQU0sRUFBRSxPQUFPO1FBQ2YsTUFBTSxFQUFFLENBQUMsVUFBVSxFQUFFLHVCQUF1QixDQUFDO1FBQzdDLE9BQU8sRUFBRTtZQUNQLEVBQUUsRUFBRSxLQUFLLENBQUMsUUFBUTtTQUNuQjtLQUNGLENBQUMsQ0FBQTtJQUVGLE1BQU0sZ0JBQWdCLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQTtJQUVyRCxNQUFNLEVBQUUsSUFBSSxFQUFFLGdCQUFnQixFQUFFLEdBQUcsTUFBTSxLQUFLLENBQUMsS0FBSyxDQUFDO1FBQ25ELE1BQU0sRUFBRSxpQkFBaUI7UUFDekIsTUFBTSxFQUFFLENBQUMsR0FBRyxDQUFDO1FBQ2IsT0FBTyxFQUFFO1lBQ1AsWUFBWSxFQUFFLGdCQUFnQjtTQUMvQjtLQUNGLENBQUMsQ0FBQTtJQUVGLE1BQU0sZ0JBQWdCLEdBQUcsZ0JBQWdCLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBRyxFQUFFLE9BQU8sRUFBRSxFQUFFO1FBQ2hFLE9BQU8sY0FBTSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFBO0lBQ3ZDLENBQUMsRUFBRSxjQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUE7SUFFckIsTUFBTSxZQUFZLEdBQXlCLEtBQUssQ0FBQyxtQkFBbUIsQ0FBQTtJQUVwRSxNQUFNLGVBQWUsR0FBRyxjQUFNLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxlQUFlLENBQUMsQ0FBQTtJQUNwRSxNQUFNLGVBQWUsR0FBRyxjQUFNLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxlQUFlLENBQUMsQ0FBQTtJQUVwRSxNQUFNLFlBQVksR0FBRyxlQUFlO1NBQ2pDLEtBQUssQ0FBQyxlQUFlLENBQUM7U0FDdEIsS0FBSyxDQUFDLGdCQUFnQixDQUFDLENBQUE7SUFFMUIsT0FBTyxJQUFJLDRCQUFZLENBQUMsWUFBWSxDQUFDLENBQUE7QUFDdkMsQ0FBQyxDQUNGLENBQUEifQ==