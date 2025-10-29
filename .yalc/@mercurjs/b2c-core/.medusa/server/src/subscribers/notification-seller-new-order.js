"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
exports.default = sellerNewOrderHandler;
const utils_1 = require("@medusajs/framework/utils");
async function sellerNewOrderHandler({ event, container, }) {
    const notificationService = container.resolve(utils_1.Modules.NOTIFICATION);
    const query = container.resolve(utils_1.ContainerRegistrationKeys.QUERY);
    const { data: [order], } = await query.graph({
        entity: "order",
        fields: [
            "id",
            "display_id",
            "items.*",
            "seller.email",
            "seller.name",
            "seller.id",
            "customer.first_name",
            "customer.last_name",
        ],
        filters: {
            id: event.data.id,
        },
    });
    if (!order) {
        console.error("Order not found:", event.data.id);
        return;
    }
    const sellerEmail = order.seller?.email;
    if (!sellerEmail) {
        console.error("Seller email not found for order:", order.id);
        return;
    }
    const customer_name = `${order.customer?.first_name || ""} ${order.customer?.last_name || ""}`;
    await notificationService.createNotifications([
        {
            to: order.seller?.id,
            channel: "seller_feed",
            template: "seller_new_order_notification",
            data: {
                order_id: order.id,
                customer_name,
            },
        },
    ]);
}
exports.config = {
    event: utils_1.OrderWorkflowEvents.PLACED,
    context: {
        subscriberId: "seller-new-order-handler",
    },
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibm90aWZpY2F0aW9uLXNlbGxlci1uZXctb3JkZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvc3Vic2NyaWJlcnMvbm90aWZpY2F0aW9uLXNlbGxlci1uZXctb3JkZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBT0Esd0NBaURDO0FBdkRELHFEQUltQztBQUVwQixLQUFLLFVBQVUscUJBQXFCLENBQUMsRUFDbEQsS0FBSyxFQUNMLFNBQVMsR0FDc0I7SUFDL0IsTUFBTSxtQkFBbUIsR0FBRyxTQUFTLENBQUMsT0FBTyxDQUFDLGVBQU8sQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUNwRSxNQUFNLEtBQUssR0FBRyxTQUFTLENBQUMsT0FBTyxDQUFDLGlDQUF5QixDQUFDLEtBQUssQ0FBQyxDQUFDO0lBRWpFLE1BQU0sRUFDSixJQUFJLEVBQUUsQ0FBQyxLQUFLLENBQUMsR0FDZCxHQUFHLE1BQU0sS0FBSyxDQUFDLEtBQUssQ0FBQztRQUNwQixNQUFNLEVBQUUsT0FBTztRQUNmLE1BQU0sRUFBRTtZQUNOLElBQUk7WUFDSixZQUFZO1lBQ1osU0FBUztZQUNULGNBQWM7WUFDZCxhQUFhO1lBQ2IsV0FBVztZQUNYLHFCQUFxQjtZQUNyQixvQkFBb0I7U0FDckI7UUFDRCxPQUFPLEVBQUU7WUFDUCxFQUFFLEVBQUUsS0FBSyxDQUFDLElBQUksQ0FBQyxFQUFFO1NBQ2xCO0tBQ0YsQ0FBQyxDQUFDO0lBRUgsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ1gsT0FBTyxDQUFDLEtBQUssQ0FBQyxrQkFBa0IsRUFBRSxLQUFLLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ2pELE9BQU87SUFDVCxDQUFDO0lBRUQsTUFBTSxXQUFXLEdBQUcsS0FBSyxDQUFDLE1BQU0sRUFBRSxLQUFLLENBQUM7SUFDeEMsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ2pCLE9BQU8sQ0FBQyxLQUFLLENBQUMsbUNBQW1DLEVBQUUsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQzdELE9BQU87SUFDVCxDQUFDO0lBRUQsTUFBTSxhQUFhLEdBQUcsR0FBRyxLQUFLLENBQUMsUUFBUSxFQUFFLFVBQVUsSUFBSSxFQUFFLElBQUksS0FBSyxDQUFDLFFBQVEsRUFBRSxTQUFTLElBQUksRUFBRSxFQUFFLENBQUM7SUFDL0YsTUFBTSxtQkFBbUIsQ0FBQyxtQkFBbUIsQ0FBQztRQUM1QztZQUNFLEVBQUUsRUFBRSxLQUFLLENBQUMsTUFBTSxFQUFFLEVBQUU7WUFDcEIsT0FBTyxFQUFFLGFBQWE7WUFDdEIsUUFBUSxFQUFFLCtCQUErQjtZQUN6QyxJQUFJLEVBQUU7Z0JBQ0osUUFBUSxFQUFFLEtBQUssQ0FBQyxFQUFFO2dCQUNsQixhQUFhO2FBQ2Q7U0FDRjtLQUNGLENBQUMsQ0FBQztBQUNMLENBQUM7QUFFWSxRQUFBLE1BQU0sR0FBcUI7SUFDdEMsS0FBSyxFQUFFLDJCQUFtQixDQUFDLE1BQU07SUFDakMsT0FBTyxFQUFFO1FBQ1AsWUFBWSxFQUFFLDBCQUEwQjtLQUN6QztDQUNGLENBQUMifQ==