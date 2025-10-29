"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getFulfillmentStatus = exports.formatOrderSets = void 0;
const utils_1 = require("@medusajs/framework/utils");
const aggregate_status_1 = require("../../order/utils/aggregate-status");
const formatOrderSets = (orderSetsWithOrders) => {
    return orderSetsWithOrders.map((orderSet) => {
        const taxTotal = orderSet.orders.reduce((acc, item) => utils_1.MathBN.add(acc, item.tax_total), utils_1.MathBN.convert(0));
        const shippingTaxTotal = orderSet.orders.reduce((acc, order) => utils_1.MathBN.add(acc, order.shipping_tax_total), utils_1.MathBN.convert(0));
        const shippingTotal = orderSet.orders.reduce((acc, order) => utils_1.MathBN.add(acc, order.shipping_total), utils_1.MathBN.convert(0));
        const total = orderSet.orders.reduce((acc, order) => utils_1.MathBN.add(acc, order.total), utils_1.MathBN.convert(0));
        const subtotal = utils_1.MathBN.sub(total, taxTotal);
        const payment_status = getPaymentStatus(orderSet);
        return {
            ...orderSet,
            orders: orderSet.orders.map((order) => ({
                ...order,
                fulfillment_status: (0, aggregate_status_1.getLastFulfillmentStatus)(order),
                payment_status
            })),
            status: getStatus(orderSet.orders),
            payment_status,
            fulfillment_status: (0, exports.getFulfillmentStatus)(orderSet.orders),
            tax_total: new utils_1.BigNumber(taxTotal),
            shipping_tax_total: new utils_1.BigNumber(shippingTaxTotal),
            shipping_total: new utils_1.BigNumber(shippingTotal),
            total: new utils_1.BigNumber(total),
            subtotal: new utils_1.BigNumber(subtotal)
        };
    });
};
exports.formatOrderSets = formatOrderSets;
const getStatus = (orders) => {
    const statuses = orders.map((order) => order.status);
    if (statuses.every((status) => status === 'completed')) {
        return 'completed';
    }
    if (statuses.every((status) => status === 'canceled')) {
        return 'canceled';
    }
    if (statuses.some((status) => status === 'requires_action')) {
        return 'requires_action';
    }
    return 'pending';
};
const getPaymentStatus = (orderSet) => {
    return orderSet.payment_collection.status;
};
const getFulfillmentStatus = (orders) => {
    const statuses = orders.map((order) => order.fulfillment_status);
    if (statuses.every((status) => status === 'canceled')) {
        return 'canceled';
    }
    if (statuses.every((status) => status === 'delivered')) {
        return 'delivered';
    }
    if (statuses.every((status) => status === 'fulfilled')) {
        return 'fulfilled';
    }
    if (statuses.every((status) => status === 'shipped')) {
        return 'shipped';
    }
    if (statuses.some((status) => status === 'partially_delivered' || status === 'delivered')) {
        return 'partially_delivered';
    }
    if (statuses.some((status) => status === 'partially_shipped' || status === 'shipped')) {
        return 'partially_shipped';
    }
    if (statuses.some((status) => status === 'partially_fulfilled' || status === 'fulfilled')) {
        return 'partially_fulfilled';
    }
    return 'not_fulfilled';
};
exports.getFulfillmentStatus = getFulfillmentStatus;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybWF0LW9yZGVyLXNldHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvd29ya2Zsb3dzL29yZGVyLXNldC91dGlscy9mb3JtYXQtb3JkZXItc2V0cy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFNQSxxREFBNkQ7QUFRN0QseUVBQTZFO0FBRXRFLE1BQU0sZUFBZSxHQUFHLENBQzdCLG1CQUE0QyxFQUNwQixFQUFFO0lBQzFCLE9BQU8sbUJBQW1CLENBQUMsR0FBRyxDQUFDLENBQUMsUUFBUSxFQUFFLEVBQUU7UUFDMUMsTUFBTSxRQUFRLEdBQUcsUUFBUSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQ3JDLENBQUMsR0FBRyxFQUFFLElBQUksRUFBRSxFQUFFLENBQUMsY0FBTSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxFQUM5QyxjQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUNsQixDQUFBO1FBRUQsTUFBTSxnQkFBZ0IsR0FBRyxRQUFRLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FDN0MsQ0FBQyxHQUFHLEVBQUUsS0FBSyxFQUFFLEVBQUUsQ0FBQyxjQUFNLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxLQUFLLENBQUMsa0JBQW1CLENBQUMsRUFDMUQsY0FBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FDbEIsQ0FBQTtRQUVELE1BQU0sYUFBYSxHQUFHLFFBQVEsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUMxQyxDQUFDLEdBQUcsRUFBRSxLQUFLLEVBQUUsRUFBRSxDQUFDLGNBQU0sQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLEtBQUssQ0FBQyxjQUFlLENBQUMsRUFDdEQsY0FBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FDbEIsQ0FBQTtRQUVELE1BQU0sS0FBSyxHQUFHLFFBQVEsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUNsQyxDQUFD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