"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.selectSellerCustomers = selectSellerCustomers;
exports.selectCustomerOrders = selectCustomerOrders;
exports.selectOrdersChartData = selectOrdersChartData;
exports.selectCustomersChartData = selectCustomersChartData;
const utils_1 = require("@medusajs/framework/utils");
async function selectSellerCustomers(container, seller_id, pagination, fields = ['*']) {
    const query = container.resolve(utils_1.ContainerRegistrationKeys.QUERY);
    const knex = container.resolve(utils_1.ContainerRegistrationKeys.PG_CONNECTION);
    const customers = await knex
        .select('id')
        .from('customer')
        .whereIn('customer.id', function () {
        this.distinct('customer_id')
            .from('order')
            .leftJoin('seller_seller_order_order', 'order.id', 'seller_seller_order_order.order_id')
            .where('seller_id', seller_id);
    });
    const { data, metadata } = await query.graph({
        entity: 'customer',
        fields,
        filters: {
            id: customers.map((c) => c.id)
        },
        pagination
    });
    return { customers: data, count: metadata?.count };
}
async function selectCustomerOrders(container, seller_id, customer_id, pagination, fields = ['*']) {
    const knex = container.resolve(utils_1.ContainerRegistrationKeys.PG_CONNECTION);
    const orders = await knex
        .select(fields.map((f) => `order.${f}`))
        .from('order')
        .leftJoin('seller_seller_order_order', 'order.id', 'seller_seller_order_order.order_id')
        .where('order.customer_id', customer_id)
        .andWhere('seller_seller_order_order.seller_id', seller_id)
        .limit(pagination.take)
        .offset(pagination.skip);
    const countResult = (await knex
        .countDistinct('order.id')
        .from('order')
        .leftJoin('seller_seller_order_order', 'order.id', 'seller_seller_order_order.order_id')
        .where('order.customer_id', customer_id)
        .andWhere('seller_seller_order_order.seller_id', seller_id));
    return { orders, count: parseInt(countResult[0]?.count || '0') };
}
async function selectOrdersChartData(container, seller_id, time_range) {
    const knex = container.resolve(utils_1.ContainerRegistrationKeys.PG_CONNECTION);
    const result = await knex('seller_seller_order_order')
        .select(knex.raw(`DATE_TRUNC('DAY', "created_at") AS date`))
        .count('*')
        .where('seller_id', seller_id)
        .andWhereBetween('created_at', time_range)
        .groupByRaw('date')
        .orderByRaw('date asc');
    return result;
}
async function selectCustomersChartData(container, seller_id, time_range) {
    const knex = container.resolve(utils_1.ContainerRegistrationKeys.PG_CONNECTION);
    const result = await knex
        .with('customer_first_orders', (qb) => {
        qb.select('customer_id')
            .select(knex.raw('MIN(seller_seller_order_order.created_at) as first_order_date'))
            .from('order')
            .leftJoin('seller_seller_order_order', 'order.id', 'seller_seller_order_order.order_id')
            .where('seller_id', seller_id)
            .groupBy('customer_id');
    })
        .select(knex.raw(`DATE_TRUNC('DAY', "first_order_date") AS date`))
        .count('*')
        .from('customer_first_orders')
        .whereBetween('first_order_date', time_range)
        .groupByRaw('date')
        .orderByRaw('date asc');
    return result;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvbW9kdWxlcy9zZWxsZXIvdXRpbHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFHQSxzREFpQ0M7QUFFRCxvREFvQ0M7QUFFRCxzREFnQkM7QUFFRCw0REFnQ0M7QUE3SEQscURBQXFFO0FBRTlELEtBQUssVUFBVSxxQkFBcUIsQ0FDekMsU0FBMEIsRUFDMUIsU0FBaUIsRUFDakIsVUFBMEMsRUFDMUMsU0FBbUIsQ0FBQyxHQUFHLENBQUM7SUFFeEIsTUFBTSxLQUFLLEdBQUcsU0FBUyxDQUFDLE9BQU8sQ0FBQyxpQ0FBeUIsQ0FBQyxLQUFLLENBQUMsQ0FBQTtJQUNoRSxNQUFNLElBQUksR0FBRyxTQUFTLENBQUMsT0FBTyxDQUFDLGlDQUF5QixDQUFDLGFBQWEsQ0FBQyxDQUFBO0lBRXZFLE1BQU0sU0FBUyxHQUFHLE1BQU0sSUFBSTtTQUN6QixNQUFNLENBQUMsSUFBSSxDQUFDO1NBQ1osSUFBSSxDQUFDLFVBQVUsQ0FBQztTQUNoQixPQUFPLENBQUMsYUFBYSxFQUFFO1FBQ3RCLElBQUksQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDO2FBQ3pCLElBQUksQ0FBQyxPQUFPLENBQUM7YUFDYixRQUFRLENBQ1AsMkJBQTJCLEVBQzNCLFVBQVUsRUFDVixvQ0FBb0MsQ0FDckM7YUFDQSxLQUFLLENBQUMsV0FBVyxFQUFFLFNBQVMsQ0FBQyxDQUFBO0lBQ2xDLENBQUMsQ0FBQyxDQUFBO0lBRUosTUFBTSxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsR0FBRyxNQUFNLEtBQUssQ0FBQyxLQUFLLENBQUM7UUFDM0MsTUFBTSxFQUFFLFVBQVU7UUFDbEIsTUFBTTtRQUNOLE9BQU8sRUFBRTtZQUNQLEVBQUUsRUFBRSxTQUFTLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO1NBQy9CO1FBQ0QsVUFBVTtLQUNYLENBQUMsQ0FBQTtJQUVGLE9BQU8sRUFBRSxTQUFTLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLENBQUE7QUFDcEQsQ0FBQztBQUVNLEtBQUssVUFBVSxvQkFBb0IsQ0FDeEMsU0FBMEIsRUFDMUIsU0FBaUIsRUFDakIsV0FBbUIsRUFDbkIsVUFBMEMsRUFDMUMsU0FBbUIsQ0FBQyxHQUFHLENBQUM7SUFFeEIsTUFBTSxJQUFJLEdBQUcsU0FBUyxDQUFDLE9BQU8sQ0FBQyxpQ0FBeUIsQ0FBQyxhQUFhLENBQUMsQ0FBQTtJQUV2RSxNQUFNLE1BQU0sR0FBRyxNQUFNLElBQUk7U0FDdEIsTUFBTSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUMsQ0FBQztTQUN2QyxJQUFJLENBQUMsT0FBTyxDQUFDO1NBQ2IsUUFBUSxDQUNQLDJCQUEyQixFQUMzQixVQUFVLEVBQ1Ysb0NBQW9DLENBQ3JDO1NBQ0EsS0FBSyxDQUFDLG1CQUFtQixFQUFFLFdBQVcsQ0FBQztTQUN2QyxRQUFRLENBQUMscUNBQXFDLEVBQUUsU0FBUyxDQUFDO1NBQzFELEtBQUssQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDO1NBQ3RCLE1BQU0sQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUE7SUFFMUIsTUFBTSxXQUFXLEdBQUcsQ0FBQyxNQUFNLElBQUk7U0FDNUIsYUFBYSxDQUFDLFVBQVUsQ0FBQztTQUN6QixJQUFJLENBQUMsT0FBTyxDQUFDO1NBQ2IsUUFBUSxDQUNQLDJCQUEyQixFQUMzQixVQUFVLEVBQ1Ysb0NBQW9DLENBQ3JDO1NBQ0EsS0FBSyxDQUFDLG1CQUFtQixFQUFFLFdBQVcsQ0FBQztTQUN2QyxRQUFRLENBQUMscUNBQXFDLEVBQUUsU0FBUyxDQUFDLENBRTFELENBQUE7SUFFSCxPQUFPLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxRQUFRLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxFQUFFLEtBQUssSUFBSSxHQUFHLENBQUMsRUFBRSxDQUFBO0FBQ2xFLENBQUM7QUFFTSxLQUFLLFVBQVUscUJBQXFCLENBQ3pDLFNBQTBCLEVBQzFCLFNBQWlCLEVBQ2pCLFVBQTRCO0lBRTVCLE1BQU0sSUFBSSxHQUFHLFNBQVMsQ0FBQyxPQUFPLENBQUMsaUNBQXlCLENBQUMsYUFBYSxDQUFDLENBQUE7SUFFdkUsTUFBTSxNQUFNLEdBQUcsTUFBTSxJQUFJLENBQUMsMkJBQTJCLENBQUM7U0FDbkQsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMseUNBQXlDLENBQUMsQ0FBQztTQUMzRCxLQUFLLENBQUMsR0FBRyxDQUFDO1NBQ1YsS0FBSyxDQUFDLFdBQVcsRUFBRSxTQUFTLENBQUM7U0FDN0IsZUFBZSxDQUFDLFlBQVksRUFBRSxVQUFVLENBQUM7U0FDekMsVUFBVSxDQUFDLE1BQU0sQ0FBQztTQUNsQixVQUFVLENBQUMsVUFBVSxDQUFDLENBQUE7SUFFekIsT0FBTyxNQUFvRCxDQUFBO0FBQzdELENBQUM7QUFFTSxLQUFLLFVBQVUsd0JBQXdCLENBQzVDLFNBQTBCLEVBQzFCLFNBQWlCLEVBQ2pCLFVBQTRCO0lBRTVCLE1BQU0sSUFBSSxHQUFHLFNBQVMsQ0FBQyxPQUFPLENBQUMsaUNBQXlCLENBQUMsYUFBYSxDQUFDLENBQUE7SUFFdkUsTUFBTSxNQUFNLEdBQUcsTUFBTSxJQUFJO1NBQ3RCLElBQUksQ0FBQyx1QkFBdUIsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFO1FBQ3BDLEVBQUUsQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDO2FBQ3JCLE1BQU0sQ0FDTCxJQUFJLENBQUMsR0FBRyxDQUNOLCtEQUErRCxDQUNoRSxDQUNGO2FBQ0EsSUFBSSxDQUFDLE9BQU8sQ0FBQzthQUNiLFFBQVEsQ0FDUCwyQkFBMkIsRUFDM0IsVUFBVSxFQUNWLG9DQUFvQyxDQUNyQzthQUNBLEtBQUssQ0FBQyxXQUFXLEVBQUUsU0FBUyxDQUFDO2FBQzdCLE9BQU8sQ0FBQyxhQUFhLENBQUMsQ0FBQTtJQUMzQixDQUFDLENBQUM7U0FDRCxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQywrQ0FBK0MsQ0FBQyxDQUFDO1NBQ2pFLEtBQUssQ0FBQyxHQUFHLENBQUM7U0FDVixJQUFJLENBQUMsdUJBQXVCLENBQUM7U0FDN0IsWUFBWSxDQUFDLGtCQUFrQixFQUFFLFVBQVUsQ0FBQztTQUM1QyxVQUFVLENBQUMsTUFBTSxDQUFDO1NBQ2xCLFVBQVUsQ0FBQyxVQUFVLENBQUMsQ0FBQTtJQUV6QixPQUFPLE1BQW9ELENBQUE7QUFDN0QsQ0FBQyJ9