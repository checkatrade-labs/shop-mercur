"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GET = void 0;
const utils_1 = require("@medusajs/framework/utils");
const utils_2 = require("../../utils");
const GET = async (req, res) => {
    const query = req.scope.resolve(utils_1.ContainerRegistrationKeys.QUERY);
    const { productIds, count } = await (0, utils_2.filterSellerProductsByProductCategory)(req.scope, req.params.id, req.filterableFields.seller_id, req.queryConfig.pagination?.skip || 0, req.queryConfig.pagination?.take || 10);
    const { data: products } = await query.graph({
        entity: 'product',
        fields: req.queryConfig.fields,
        filters: {
            id: productIds
        }
    });
    res.json({
        products,
        count,
        offset: req.queryConfig.pagination?.skip || 0,
        limit: req.queryConfig.pagination?.take || 10
    });
};
exports.GET = GET;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvYXBpL3ZlbmRvci9wcm9kdWN0LWNhdGVnb3JpZXMvW2lkXS9wcm9kdWN0cy9yb3V0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFDQSxxREFBcUU7QUFFckUsdUNBQW1FO0FBRTVELE1BQU0sR0FBRyxHQUFHLEtBQUssRUFDdEIsR0FBK0IsRUFDL0IsR0FBbUIsRUFDbkIsRUFBRTtJQUNGLE1BQU0sS0FBSyxHQUFHLEdBQUcsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLGlDQUF5QixDQUFDLEtBQUssQ0FBQyxDQUFBO0lBRWhFLE1BQU0sRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLEdBQUcsTUFBTSxJQUFBLDZDQUFxQyxFQUN2RSxHQUFHLENBQUMsS0FBSyxFQUNULEdBQUcsQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUNiLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxTQUFtQixFQUN4QyxHQUFHLENBQUMsV0FBVyxDQUFDLFVBQVUsRUFBRSxJQUFJLElBQUksQ0FBQyxFQUNyQyxHQUFHLENBQUMsV0FBVyxDQUFDLFVBQVUsRUFBRSxJQUFJLElBQUksRUFBRSxDQUN2QyxDQUFBO0lBRUQsTUFBTSxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsR0FBRyxNQUFNLEtBQUssQ0FBQyxLQUFLLENBQUM7UUFDM0MsTUFBTSxFQUFFLFNBQVM7UUFDakIsTUFBTSxFQUFFLEdBQUcsQ0FBQyxXQUFXLENBQUMsTUFBTTtRQUM5QixPQUFPLEVBQUU7WUFDUCxFQUFFLEVBQUUsVUFBVTtTQUNmO0tBQ0YsQ0FBQyxDQUFBO0lBRUYsR0FBRyxDQUFDLElBQUksQ0FBQztRQUNQLFFBQVE7UUFDUixLQUFLO1FBQ0wsTUFBTSxFQUFFLEdBQUcsQ0FBQyxXQUFXLENBQUMsVUFBVSxFQUFFLElBQUksSUFBSSxDQUFDO1FBQzdDLEtBQUssRUFBRSxHQUFHLENBQUMsV0FBVyxDQUFDLFVBQVUsRUFBRSxJQUFJLElBQUksRUFBRTtLQUM5QyxDQUFDLENBQUE7QUFDSixDQUFDLENBQUE7QUE1QlksUUFBQSxHQUFHLE9BNEJmIn0=