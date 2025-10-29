"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.filterSellerProductsByProductCategory = void 0;
const utils_1 = require("@medusajs/framework/utils");
const filterSellerProductsByProductCategory = async (container, productCategoryId, sellerId, skip, take) => {
    const knex = container.resolve(utils_1.ContainerRegistrationKeys.PG_CONNECTION);
    const baseQuery = knex('product')
        .distinct('product.id')
        .innerJoin('seller_seller_product_product', 'product.id', 'seller_seller_product_product.product_id')
        .innerJoin('product_category_product', 'product.id', 'product_category_product.product_id')
        .where({
        'seller_seller_product_product.seller_id': sellerId,
        'product_category_product.product_category_id': productCategoryId,
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
exports.filterSellerProductsByProductCategory = filterSellerProductsByProductCategory;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvYXBpL3ZlbmRvci9wcm9kdWN0LWNhdGVnb3JpZXMvdXRpbHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQ0EscURBQXFFO0FBRTlELE1BQU0scUNBQXFDLEdBQUcsS0FBSyxFQUN4RCxTQUEwQixFQUMxQixpQkFBeUIsRUFDekIsUUFBZ0IsRUFDaEIsSUFBWSxFQUNaLElBQVksRUFDWixFQUFFO0lBQ0YsTUFBTSxJQUFJLEdBQUcsU0FBUyxDQUFDLE9BQU8sQ0FBQyxpQ0FBeUIsQ0FBQyxhQUFhLENBQUMsQ0FBQTtJQUV2RSxNQUFNLFNBQVMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDO1NBQzlCLFFBQVEsQ0FBQyxZQUFZLENBQUM7U0FDdEIsU0FBUyxDQUNSLCtCQUErQixFQUMvQixZQUFZLEVBQ1osMENBQTBDLENBQzNDO1NBQ0EsU0FBUyxDQUNSLDBCQUEwQixFQUMxQixZQUFZLEVBQ1oscUNBQXFDLENBQ3RDO1NBQ0EsS0FBSyxDQUFDO1FBQ0wseUNBQXlDLEVBQUUsUUFBUTtRQUNuRCw4Q0FBOEMsRUFBRSxpQkFBaUI7UUFDakUsMENBQTBDLEVBQUUsSUFBSTtRQUNoRCxvQkFBb0IsRUFBRSxJQUFJO0tBQzNCLENBQUMsQ0FBQTtJQUVKLE1BQU0sVUFBVSxHQUFHLFNBQVM7U0FDekIsS0FBSyxFQUFFO1NBQ1AsV0FBVyxFQUFFO1NBQ2IsS0FBSyxDQUFDLHFCQUFxQixDQUFDLENBQUE7SUFDL0IsTUFBTSxDQUFDLEVBQUUsS0FBSyxFQUFFLENBQUMsR0FBRyxNQUFNLFVBQVUsQ0FBQTtJQUNwQyxNQUFNLFVBQVUsR0FBRyxRQUFRLENBQUMsS0FBZSxFQUFFLEVBQUUsQ0FBQyxDQUFBO0lBRWhELE1BQU0sVUFBVSxHQUFHLE1BQU0sU0FBUztTQUMvQixNQUFNLENBQUMsSUFBSSxDQUFDO1NBQ1osS0FBSyxDQUFDLElBQUksQ0FBQztTQUNYLEtBQUssQ0FBQyxZQUFZLENBQUMsQ0FBQTtJQUV0QixPQUFPLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxVQUFVLEVBQUUsQ0FBQTtBQUMxQyxDQUFDLENBQUE7QUF6Q1ksUUFBQSxxQ0FBcUMseUNBeUNqRCJ9