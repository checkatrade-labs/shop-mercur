"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
exports.default = dailyPayoutsSummaryJob;
const utils_1 = require("@medusajs/framework/utils");
const framework_1 = require("@mercurjs/framework");
async function dailyPayoutsSummaryJob(container) {
    const query = container.resolve(utils_1.ContainerRegistrationKeys.QUERY);
    const eventBus = container.resolve(utils_1.Modules.EVENT_BUS);
    const { data: payout_accounts } = await query.graph({
        entity: 'payout_account',
        fields: ['id', 'seller.id', 'seller.email', 'seller.name'],
        filters: {
            status: framework_1.PayoutAccountStatus.ACTIVE
        }
    });
    const to_date = new Date();
    const from_date = new Date(to_date.getTime() - 24 * 60 * 60 * 1000);
    const events = [];
    for (const payout_account of payout_accounts) {
        const { data: payouts } = await query.graph({
            entity: 'payout',
            fields: [
                'id',
                'created_at',
                'amount',
                'currency_code',
                'order.id',
                'order.created_at',
                'order.display_id'
            ],
            filters: {
                payout_account_id: payout_account.id,
                created_at: {
                    $gte: from_date,
                    $lte: to_date
                }
            }
        });
        if (payouts.length > 0) {
            events.push({
                name: framework_1.PayoutSummaryEvents.NOTIFICATION_SENT,
                data: {
                    seller: payout_account.seller,
                    payouts
                }
            });
        }
    }
    await eventBus.emit(events);
}
exports.config = {
    name: 'daily-payouts-summary',
    schedule: '0 8 * * *' // Every day at 8 AM
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGFpbHktcGF5b3V0cy1zdW1tYXJ5LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2pvYnMvZGFpbHktcGF5b3V0cy1zdW1tYXJ5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQVNBLHlDQW1EQztBQXZERCxxREFBOEU7QUFFOUUsbURBQThFO0FBRS9ELEtBQUssVUFBVSxzQkFBc0IsQ0FDbEQsU0FBMEI7SUFFMUIsTUFBTSxLQUFLLEdBQUcsU0FBUyxDQUFDLE9BQU8sQ0FBQyxpQ0FBeUIsQ0FBQyxLQUFLLENBQUMsQ0FBQTtJQUNoRSxNQUFNLFFBQVEsR0FBMkIsU0FBUyxDQUFDLE9BQU8sQ0FBQyxlQUFPLENBQUMsU0FBUyxDQUFDLENBQUE7SUFFN0UsTUFBTSxFQUFFLElBQUksRUFBRSxlQUFlLEVBQUUsR0FBRyxNQUFNLEtBQUssQ0FBQyxLQUFLLENBQUM7UUFDbEQsTUFBTSxFQUFFLGdCQUFnQjtRQUN4QixNQUFNLEVBQUUsQ0FBQyxJQUFJLEVBQUUsV0FBVyxFQUFFLGNBQWMsRUFBRSxhQUFhLENBQUM7UUFDMUQsT0FBTyxFQUFFO1lBQ1AsTUFBTSxFQUFFLCtCQUFtQixDQUFDLE1BQU07U0FDbkM7S0FDRixDQUFDLENBQUE7SUFFRixNQUFNLE9BQU8sR0FBRyxJQUFJLElBQUksRUFBRSxDQUFBO0lBQzFCLE1BQU0sU0FBUyxHQUFHLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxJQUFJLENBQUMsQ0FBQTtJQUNuRSxNQUFNLE1BQU0sR0FBYyxFQUFFLENBQUE7SUFFNUIsS0FBSyxNQUFNLGNBQWMsSUFBSSxlQUFlLEVBQUUsQ0FBQztRQUM3QyxNQUFNLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxHQUFHLE1BQU0sS0FBSyxDQUFDLEtBQUssQ0FBQztZQUMxQyxNQUFNLEVBQUUsUUFBUTtZQUNoQixNQUFNLEVBQUU7Z0JBQ04sSUFBSTtnQkFDSixZQUFZO2dCQUNaLFFBQVE7Z0JBQ1IsZUFBZTtnQkFDZixVQUFVO2dCQUNWLGtCQUFrQjtnQkFDbEIsa0JBQWtCO2FBQ25CO1lBQ0QsT0FBTyxFQUFFO2dCQUNQLGlCQUFpQixFQUFFLGNBQWMsQ0FBQyxFQUFFO2dCQUNwQyxVQUFVLEVBQUU7b0JBQ1YsSUFBSSxFQUFFLFNBQVM7b0JBQ2YsSUFBSSxFQUFFLE9BQU87aUJBQ2Q7YUFDRjtTQUNGLENBQUMsQ0FBQTtRQUVGLElBQUksT0FBTyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUUsQ0FBQztZQUN2QixNQUFNLENBQUMsSUFBSSxDQUFDO2dCQUNWLElBQUksRUFBRSwrQkFBbUIsQ0FBQyxpQkFBaUI7Z0JBQzNDLElBQUksRUFBRTtvQkFDSixNQUFNLEVBQUUsY0FBYyxDQUFDLE1BQU07b0JBQzdCLE9BQU87aUJBQ1I7YUFDRixDQUFDLENBQUE7UUFDSixDQUFDO0lBQ0gsQ0FBQztJQUVELE1BQU0sUUFBUSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQTtBQUM3QixDQUFDO0FBRVksUUFBQSxNQUFNLEdBQUc7SUFDcEIsSUFBSSxFQUFFLHVCQUF1QjtJQUM3QixRQUFRLEVBQUUsV0FBVyxDQUFDLG9CQUFvQjtDQUMzQyxDQUFBIn0=