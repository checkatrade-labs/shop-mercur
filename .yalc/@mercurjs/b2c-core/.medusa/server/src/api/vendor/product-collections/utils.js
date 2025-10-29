"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.filterSellerProductsByCollection = void 0;
const utils_1 = require("@medusajs/framework/utils");
const filterSellerProductsByCollection = async (container, collectionId, sellerId, skip, take) => {
    const knex = container.resolve(utils_1.ContainerRegistrationKeys.PG_CONNECTION);
    const baseQuery = knex('product')
        .distinct('product.id')
        .innerJoin('seller_seller_product_product', 'product.id', 'seller_seller_product_product.product_id')
        .where({
        'seller_seller_product_product.seller_id': sellerId,
        'product.collection_id': collectionId,
        'seller_seller_product_product.deleted_at': null,
        'product.deleted_at': null
    });
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
exports.filterSellerProductsByCollection = filterSellerProductsByCollection;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvYXBpL3ZlbmRvci9wcm9kdWN0LWNvbGxlY3Rpb25zL3V0aWxzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUNBLHFEQUFxRTtBQUU5RCxNQUFNLGdDQUFnQyxHQUFHLEtBQUssRUFDbkQsU0FBMEIsRUFDMUIsWUFBb0IsRUFDcEIsUUFBZ0IsRUFDaEIsSUFBWSxFQUNaLElBQVksRUFDWixFQUFFO0lBQ0YsTUFBTSxJQUFJLEdBQUcsU0FBUyxDQUFDLE9BQU8sQ0FBQyxpQ0FBeUIsQ0FBQyxhQUFhLENBQUMsQ0FBQTtJQUV2RSxNQUFNLFNBQVMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDO1NBQzlCLFFBQVEsQ0FBQyxZQUFZLENBQUM7U0FDdEIsU0FBUyxDQUNSLCtCQUErQixFQUMvQixZQUFZLEVBQ1osMENBQTBDLENBQzNDO1NBQ0EsS0FBSyxDQUFDO1FBQ0wseUNBQXlDLEVBQUUsUUFBUTtRQUNuRCx1QkFBdUIsRUFBRSxZQUFZO1FBQ3JDLDBDQUEwQyxFQUFFLElBQUk7UUFDaEQsb0JBQW9CLEVBQUUsSUFBSTtLQUMzQixDQUFDLENBQUE7SUFFSixNQUFNLFVBQVUsR0FBRyxTQUFTO1NBQ3pCLEtBQUssRUFBRTtTQUNQLFdBQVcsRUFBRTtTQUNiLEtBQUssQ0FBQyxxQkFBcUIsQ0FBQyxDQUFBO0lBQy9CLE1BQU0sQ0FBQyxFQUFFLEtBQUssRUFBRSxDQUFDLEdBQUcsTUFBTSxVQUFVLENBQUE7SUFDcEMsTUFBTSxVQUFVLEdBQUcsUUFBUSxDQUFDLEtBQWUsRUFBRSxFQUFFLENBQUMsQ0FBQTtJQUVoRCxNQUFNLFVBQVUsR0FBRyxNQUFNLFNBQVM7U0FDL0IsTUFBTSxDQUFDLElBQUksQ0FBQztTQUNaLEtBQUssQ0FBQyxJQUFJLENBQUM7U0FDWCxLQUFLLENBQUMsWUFBWSxDQUFDLENBQUE7SUFFdEIsT0FBTyxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsVUFBVSxFQUFFLENBQUE7QUFDMUMsQ0FBQyxDQUFBO0FBcENZLFFBQUEsZ0NBQWdDLG9DQW9DNUMifQ==