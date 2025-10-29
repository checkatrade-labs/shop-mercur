"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GET = GET;
const utils_1 = require("@medusajs/framework/utils");
async function GET(req, res) {
    const query = req.scope.resolve(utils_1.ContainerRegistrationKeys.QUERY);
    const { data: stockLocations, metadata } = await query.graph({
        entity: 'stock_location',
        fields: ['seller.*', ...req.queryConfig.fields],
        filters: req.filterableFields,
        pagination: req.queryConfig.pagination
    });
    const filteredStockLocations = stockLocations.filter((stockLocation) => !stockLocation.seller);
    res.json({
        stock_locations: filteredStockLocations,
        count: metadata?.count,
        offset: metadata?.skip,
        limit: metadata?.take
    });
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvYXBpL2FkbWluL3N0b2NrLWxvY2F0aW9ucy9yb3V0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUdBLGtCQXNCQztBQXhCRCxxREFBcUU7QUFFOUQsS0FBSyxVQUFVLEdBQUcsQ0FDdkIsR0FBa0IsRUFDbEIsR0FBbUI7SUFFbkIsTUFBTSxLQUFLLEdBQUcsR0FBRyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsaUNBQXlCLENBQUMsS0FBSyxDQUFDLENBQUE7SUFDaEUsTUFBTSxFQUFFLElBQUksRUFBRSxjQUFjLEVBQUUsUUFBUSxFQUFFLEdBQUcsTUFBTSxLQUFLLENBQUMsS0FBSyxDQUFDO1FBQzNELE1BQU0sRUFBRSxnQkFBZ0I7UUFDeEIsTUFBTSxFQUFFLENBQUMsVUFBVSxFQUFFLEdBQUcsR0FBRyxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUM7UUFDL0MsT0FBTyxFQUFFLEdBQUcsQ0FBQyxnQkFBZ0I7UUFDN0IsVUFBVSxFQUFFLEdBQUcsQ0FBQyxXQUFXLENBQUMsVUFBVTtLQUN2QyxDQUFDLENBQUE7SUFFRixNQUFNLHNCQUFzQixHQUFHLGNBQWMsQ0FBQyxNQUFNLENBQ2xELENBQUMsYUFBYSxFQUFFLEVBQUUsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQ3pDLENBQUE7SUFFRCxHQUFHLENBQUMsSUFBSSxDQUFDO1FBQ1AsZUFBZSxFQUFFLHNCQUFzQjtRQUN2QyxLQUFLLEVBQUUsUUFBUSxFQUFFLEtBQUs7UUFDdEIsTUFBTSxFQUFFLFFBQVEsRUFBRSxJQUFJO1FBQ3RCLEtBQUssRUFBRSxRQUFRLEVBQUUsSUFBSTtLQUN0QixDQUFDLENBQUE7QUFDSixDQUFDIn0=