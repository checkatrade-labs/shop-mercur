"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
exports.default = newOrderSetAdminNotifyHandler;
const utils_1 = require("@medusajs/framework/utils");
const framework_1 = require("@mercurjs/framework");
async function newOrderSetAdminNotifyHandler({ event, container }) {
    const notificationService = container.resolve(utils_1.Modules.NOTIFICATION);
    const query = container.resolve(utils_1.ContainerRegistrationKeys.QUERY);
    const { id: orderSetId } = event.data;
    const { data: [order_set] } = await query.graph({
        entity: 'order_set',
        fields: ['orders.id'],
        filters: {
            id: orderSetId
        }
    });
    if (!order_set || order_set.orders.length < 2) {
        return;
    }
    await notificationService.createNotifications({
        to: '',
        channel: 'feed',
        template: 'admin-ui',
        content: {
            subject: `New Order Set Placed`
        },
        data: {
            title: `New order set placed`,
            description: 'Someone has placed a new order from multiple sellers 🔔',
            redirect: '/admin/orders'
        }
    });
}
exports.config = {
    event: framework_1.OrderSetWorkflowEvents.PLACED,
    context: {
        subscriberId: 'new-order-set-admin-notify-handler'
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibm90aWZpY2F0aW9uLWFkbWluLW5ldy1vcmRlci1zZXQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvc3Vic2NyaWJlcnMvbm90aWZpY2F0aW9uLWFkbWluLW5ldy1vcmRlci1zZXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBS0EsZ0RBbUNDO0FBeENELHFEQUE4RTtBQUc5RSxtREFBNEQ7QUFFN0MsS0FBSyxVQUFVLDZCQUE2QixDQUFDLEVBQzFELEtBQUssRUFDTCxTQUFTLEVBQ3NCO0lBQy9CLE1BQU0sbUJBQW1CLEdBQUcsU0FBUyxDQUFDLE9BQU8sQ0FBQyxlQUFPLENBQUMsWUFBWSxDQUFDLENBQUE7SUFDbkUsTUFBTSxLQUFLLEdBQUcsU0FBUyxDQUFDLE9BQU8sQ0FBQyxpQ0FBeUIsQ0FBQyxLQUFLLENBQUMsQ0FBQTtJQUNoRSxNQUFNLEVBQUUsRUFBRSxFQUFFLFVBQVUsRUFBRSxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUE7SUFFckMsTUFBTSxFQUNKLElBQUksRUFBRSxDQUFDLFNBQVMsQ0FBQyxFQUNsQixHQUFHLE1BQU0sS0FBSyxDQUFDLEtBQUssQ0FBQztRQUNwQixNQUFNLEVBQUUsV0FBVztRQUNuQixNQUFNLEVBQUUsQ0FBQyxXQUFXLENBQUM7UUFDckIsT0FBTyxFQUFFO1lBQ1AsRUFBRSxFQUFFLFVBQVU7U0FDZjtLQUNGLENBQUMsQ0FBQTtJQUVGLElBQUksQ0FBQyxTQUFTLElBQUksU0FBUyxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFLENBQUM7UUFDOUMsT0FBTTtJQUNSLENBQUM7SUFFRCxNQUFNLG1CQUFtQixDQUFDLG1CQUFtQixDQUFDO1FBQzVDLEVBQUUsRUFBRSxFQUFFO1FBQ04sT0FBTyxFQUFFLE1BQU07UUFDZixRQUFRLEVBQUUsVUFBVTtRQUNwQixPQUFPLEVBQUU7WUFDUCxPQUFPLEVBQUUsc0JBQXNCO1NBQ2hDO1FBQ0QsSUFBSSxFQUFFO1lBQ0osS0FBSyxFQUFFLHNCQUFzQjtZQUM3QixXQUFXLEVBQUUseURBQXlEO1lBQ3RFLFFBQVEsRUFBRSxlQUFlO1NBQzFCO0tBQ0YsQ0FBQyxDQUFBO0FBQ0osQ0FBQztBQUVZLFFBQUEsTUFBTSxHQUFxQjtJQUN0QyxLQUFLLEVBQUUsa0NBQXNCLENBQUMsTUFBTTtJQUNwQyxPQUFPLEVBQUU7UUFDUCxZQUFZLEVBQUUsb0NBQW9DO0tBQ25EO0NBQ0YsQ0FBQSJ9