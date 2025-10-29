"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
exports.default = dailyPayoutsJob;
const utils_1 = require("@medusajs/framework/utils");
const framework_1 = require("@mercurjs/framework");
const BATCH_SIZE = 100;
const RETRY_COUNT = 3;
const DELAY_MS = 1200;
async function dailyPayoutsJob(container) {
    const pgConnection = container.resolve(utils_1.ContainerRegistrationKeys.PG_CONNECTION);
    const eventBus = container.resolve(utils_1.Modules.EVENT_BUS);
    let hasMore = true;
    let offset = 0;
    const events = [];
    while (hasMore) {
        const orders = await pgConnection
            .select('order.id')
            .from('order')
            .leftJoin('order_payout', 'order.id', 'order_payout.order_id')
            .whereNull('order_payout.order_id')
            .limit(BATCH_SIZE)
            .offset(offset);
        if (orders.length > 0) {
            let order_count = 0;
            for (const order of orders) {
                events.push({
                    data: {
                        order_id: order.id
                    },
                    name: framework_1.PayoutWorkflowEvents.RECEIVED,
                    options: {
                        attempts: RETRY_COUNT,
                        delay: (DELAY_MS * order_count * offset) / BATCH_SIZE
                    }
                });
                order_count++;
            }
            offset = offset + orders.length;
        }
        else {
            hasMore = false;
        }
    }
    await eventBus.emit(events, { delay: DELAY_MS });
}
exports.config = {
    name: 'daily-payouts',
    schedule: '0 0 * * *' // Every day at midnight
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGFpbHktcGF5b3V0cy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9qb2JzL2RhaWx5LXBheW91dHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBYUEsa0NBMkNDO0FBbkRELHFEQUE4RTtBQUU5RSxtREFBMEQ7QUFFMUQsTUFBTSxVQUFVLEdBQUcsR0FBRyxDQUFBO0FBQ3RCLE1BQU0sV0FBVyxHQUFHLENBQUMsQ0FBQTtBQUNyQixNQUFNLFFBQVEsR0FBRyxJQUFJLENBQUE7QUFFTixLQUFLLFVBQVUsZUFBZSxDQUFDLFNBQTBCO0lBQ3RFLE1BQU0sWUFBWSxHQUFHLFNBQVMsQ0FBQyxPQUFPLENBQ3BDLGlDQUF5QixDQUFDLGFBQWEsQ0FDeEMsQ0FBQTtJQUNELE1BQU0sUUFBUSxHQUEyQixTQUFTLENBQUMsT0FBTyxDQUFDLGVBQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQTtJQUU3RSxJQUFJLE9BQU8sR0FBRyxJQUFJLENBQUE7SUFDbEIsSUFBSSxNQUFNLEdBQUcsQ0FBQyxDQUFBO0lBRWQsTUFBTSxNQUFNLEdBQW9DLEVBQUUsQ0FBQTtJQUVsRCxPQUFPLE9BQU8sRUFBRSxDQUFDO1FBQ2YsTUFBTSxNQUFNLEdBQUcsTUFBTSxZQUFZO2FBQzlCLE1BQU0sQ0FBQyxVQUFVLENBQUM7YUFDbEIsSUFBSSxDQUFDLE9BQU8sQ0FBQzthQUNiLFFBQVEsQ0FBQyxjQUFjLEVBQUUsVUFBVSxFQUFFLHVCQUF1QixDQUFDO2FBQzdELFNBQVMsQ0FBQyx1QkFBdUIsQ0FBQzthQUNsQyxLQUFLLENBQUMsVUFBVSxDQUFDO2FBQ2pCLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQTtRQUVqQixJQUFJLE1BQU0sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFLENBQUM7WUFDdEIsSUFBSSxXQUFXLEdBQUcsQ0FBQyxDQUFBO1lBQ25CLEtBQUssTUFBTSxLQUFLLElBQUksTUFBTSxFQUFFLENBQUM7Z0JBQzNCLE1BQU0sQ0FBQyxJQUFJLENBQUM7b0JBQ1YsSUFBSSxFQUFFO3dCQUNKLFFBQVEsRUFBRSxLQUFLLENBQUMsRUFBRTtxQkFDbkI7b0JBQ0QsSUFBSSxFQUFFLGdDQUFvQixDQUFDLFFBQVE7b0JBQ25DLE9BQU8sRUFBRTt3QkFDUCxRQUFRLEVBQUUsV0FBVzt3QkFDckIsS0FBSyxFQUFFLENBQUMsUUFBUSxHQUFHLFdBQVcsR0FBRyxNQUFNLENBQUMsR0FBRyxVQUFVO3FCQUN0RDtpQkFDRixDQUFDLENBQUE7Z0JBQ0YsV0FBVyxFQUFFLENBQUE7WUFDZixDQUFDO1lBRUQsTUFBTSxHQUFHLE1BQU0sR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFBO1FBQ2pDLENBQUM7YUFBTSxDQUFDO1lBQ04sT0FBTyxHQUFHLEtBQUssQ0FBQTtRQUNqQixDQUFDO0lBQ0gsQ0FBQztJQUVELE1BQU0sUUFBUSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFFLENBQUMsQ0FBQTtBQUNsRCxDQUFDO0FBRVksUUFBQSxNQUFNLEdBQUc7SUFDcEIsSUFBSSxFQUFFLGVBQWU7SUFDckIsUUFBUSxFQUFFLFdBQVcsQ0FBQyx3QkFBd0I7Q0FDL0MsQ0FBQSJ9