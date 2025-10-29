"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.filterProductsBySeller = void 0;
const utils_1 = require("@medusajs/framework/utils");
const filterProductsBySeller = async (container, sellerId, skip, take, salesChannelId) => {
    const knex = container.resolve(utils_1.ContainerRegistrationKeys.PG_CONNECTION);
    let baseQuery = knex('product')
        .distinct('product.id')
        .innerJoin('seller_seller_product_product', 'product.id', 'seller_seller_product_product.product_id')
        .where({
        'seller_seller_product_product.seller_id': sellerId,
        'seller_seller_product_product.deleted_at': null,
        'product.deleted_at': null
    });
    if (salesChannelId) {
        baseQuery = baseQuery
            .innerJoin('product_sales_channel', 'product.id', 'product_sales_channel.product_id')
            .where('product_sales_channel.sales_channel_id', salesChannelId);
    }
    const countQuery = baseQuery
        .clone()
        .clearSelect()
        .count('product.id as count');
    const [{ count }] = await countQuery;
    const totalCount = parseInt(count, 10);
    const productIds = await baseQuery
        .offset(skip)
        .limit(take)
        .pluck('product.id');
    return { productIds, count: totalCount };
};
exports.filterProductsBySeller = filterProductsBySeller;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvYXBpL3ZlbmRvci9wcm9kdWN0cy91dGlscy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFDQSxxREFBcUU7QUFFOUQsTUFBTSxzQkFBc0IsR0FBRyxLQUFLLEVBQ3pDLFNBQTBCLEVBQzFCLFFBQWdCLEVBQ2hCLElBQVksRUFDWixJQUFZLEVBQ1osY0FBdUIsRUFDdkIsRUFBRTtJQUNGLE1BQU0sSUFBSSxHQUFHLFNBQVMsQ0FBQyxPQUFPLENBQUMsaUNBQXlCLENBQUMsYUFBYSxDQUFDLENBQUE7SUFFdkUsSUFBSSxTQUFTLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQztTQUM1QixRQUFRLENBQUMsWUFBWSxDQUFDO1NBQ3RCLFNBQVMsQ0FDUiwrQkFBK0IsRUFDL0IsWUFBWSxFQUNaLDBDQUEwQyxDQUMzQztTQUNBLEtBQUssQ0FBQztRQUNMLHlDQUF5QyxFQUFFLFFBQVE7UUFDbkQsMENBQTBDLEVBQUUsSUFBSTtRQUNoRCxvQkFBb0IsRUFBRSxJQUFJO0tBQzNCLENBQUMsQ0FBQTtJQUVKLElBQUksY0FBYyxFQUFFLENBQUM7UUFDbkIsU0FBUyxHQUFHLFNBQVM7YUFDbEIsU0FBUyxDQUNSLHVCQUF1QixFQUN2QixZQUFZLEVBQ1osa0NBQWtDLENBQ25DO2FBQ0EsS0FBSyxDQUFDLHdDQUF3QyxFQUFFLGNBQWMsQ0FBQyxDQUFBO0lBQ3BFLENBQUM7SUFFRCxNQUFNLFVBQVUsR0FBRyxTQUFTO1NBQ3pCLEtBQUssRUFBRTtTQUNQLFdBQVcsRUFBRTtTQUNiLEtBQUssQ0FBQyxxQkFBcUIsQ0FBQyxDQUFBO0lBQy9CLE1BQU0sQ0FBQyxFQUFFLEtBQUssRUFBRSxDQUFDLEdBQUcsTUFBTSxVQUFVLENBQUE7SUFDcEMsTUFBTSxVQUFVLEdBQUcsUUFBUSxDQUFDLEtBQWUsRUFBRSxFQUFFLENBQUMsQ0FBQTtJQUVoRCxNQUFNLFVBQVUsR0FBRyxNQUFNLFNBQVM7U0FDL0IsTUFBTSxDQUFDLElBQUksQ0FBQztTQUNaLEtBQUssQ0FBQyxJQUFJLENBQUM7U0FDWCxLQUFLLENBQUMsWUFBWSxDQUFDLENBQUE7SUFFdEIsT0FBTyxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsVUFBVSxFQUFFLENBQUE7QUFDMUMsQ0FBQyxDQUFBO0FBN0NZLFFBQUEsc0JBQXNCLDBCQTZDbEMifQ==