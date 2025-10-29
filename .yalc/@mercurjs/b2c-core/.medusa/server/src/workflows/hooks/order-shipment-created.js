"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("@medusajs/framework/utils");
const core_flows_1 = require("@medusajs/medusa/core-flows");
core_flows_1.createOrderShipmentWorkflow.hooks.shipmentCreated(async ({ shipment }, { container }) => {
    const query = container.resolve(utils_1.ContainerRegistrationKeys.QUERY);
    const { data: [fulfillment] } = await query.graph({
        entity: 'fulfillment',
        fields: ['order.id'],
        filters: {
            id: shipment.id
        }
    });
    const order_id = fulfillment.order.id;
    const { result: order } = await core_flows_1.getOrderDetailWorkflow.run({
        container,
        input: {
            order_id,
            fields: ['payment_status']
        }
    });
    if (order.payment_status === 'captured') {
        await core_flows_1.completeOrderWorkflow.run({
            container,
            input: {
                orderIds: [order_id]
            }
        });
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3JkZXItc2hpcG1lbnQtY3JlYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy93b3JrZmxvd3MvaG9va3Mvb3JkZXItc2hpcG1lbnQtY3JlYXRlZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHFEQUFxRTtBQUNyRSw0REFJb0M7QUFFcEMsd0NBQTJCLENBQUMsS0FBSyxDQUFDLGVBQWUsQ0FDL0MsS0FBSyxFQUFFLEVBQUUsUUFBUSxFQUFFLEVBQUUsRUFBRSxTQUFTLEVBQUUsRUFBRSxFQUFFO0lBQ3BDLE1BQU0sS0FBSyxHQUFHLFNBQVMsQ0FBQyxPQUFPLENBQUMsaUNBQXlCLENBQUMsS0FBSyxDQUFDLENBQUE7SUFFaEUsTUFBTSxFQUNKLElBQUksRUFBRSxDQUFDLFdBQVcsQ0FBQyxFQUNwQixHQUFHLE1BQU0sS0FBSyxDQUFDLEtBQUssQ0FBQztRQUNwQixNQUFNLEVBQUUsYUFBYTtRQUNyQixNQUFNLEVBQUUsQ0FBQyxVQUFVLENBQUM7UUFDcEIsT0FBTyxFQUFFO1lBQ1AsRUFBRSxFQUFFLFFBQVEsQ0FBQyxFQUFFO1NBQ2hCO0tBQ0YsQ0FBQyxDQUFBO0lBRUYsTUFBTSxRQUFRLEdBQUcsV0FBVyxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUE7SUFFckMsTUFBTSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsR0FBRyxNQUFNLG1DQUFzQixDQUFDLEdBQUcsQ0FBQztRQUN6RCxTQUFTO1FBQ1QsS0FBSyxFQUFFO1lBQ0wsUUFBUTtZQUNSLE1BQU0sRUFBRSxDQUFDLGdCQUFnQixDQUFDO1NBQzNCO0tBQ0YsQ0FBQyxDQUFBO0lBRUYsSUFBSSxLQUFLLENBQUMsY0FBYyxLQUFLLFVBQVUsRUFBRSxDQUFDO1FBQ3hDLE1BQU0sa0NBQXFCLENBQUMsR0FBRyxDQUFDO1lBQzlCLFNBQVM7WUFDVCxLQUFLLEVBQUU7Z0JBQ0wsUUFBUSxFQUFFLENBQUMsUUFBUSxDQUFDO2FBQ3JCO1NBQ0YsQ0FBQyxDQUFBO0lBQ0osQ0FBQztBQUNILENBQUMsQ0FDRixDQUFBIn0=