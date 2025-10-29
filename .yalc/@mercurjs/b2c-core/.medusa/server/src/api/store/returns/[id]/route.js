"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GET = GET;
const utils_1 = require("@medusajs/framework/utils");
const query_config_1 = require("../query-config");
async function GET(req, res) {
    const query = req.scope.resolve(utils_1.ContainerRegistrationKeys.QUERY);
    const { data: [order] } = await query.graph({
        entity: 'order',
        fields: query_config_1.storeReturnFields.map((field) => `returns.${field}`),
        filters: {
            customer_id: req.auth_context.actor_id,
            returns: {
                id: req.params.id
            }
        }
    });
    res.json({
        return: order.returns[0]
    });
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvYXBpL3N0b3JlL3JldHVybnMvW2lkXS9yb3V0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUtBLGtCQXNCQztBQTFCRCxxREFBcUU7QUFFckUsa0RBQW1EO0FBRTVDLEtBQUssVUFBVSxHQUFHLENBQ3ZCLEdBQStCLEVBQy9CLEdBQW1CO0lBRW5CLE1BQU0sS0FBSyxHQUFHLEdBQUcsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLGlDQUF5QixDQUFDLEtBQUssQ0FBQyxDQUFBO0lBRWhFLE1BQU0sRUFDSixJQUFJLEVBQUUsQ0FBQyxLQUFLLENBQUMsRUFDZCxHQUFHLE1BQU0sS0FBSyxDQUFDLEtBQUssQ0FBQztRQUNwQixNQUFNLEVBQUUsT0FBTztRQUNmLE1BQU0sRUFBRSxnQ0FBaUIsQ0FBQyxHQUFHLENBQUMsQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLFdBQVcsS0FBSyxFQUFFLENBQUM7UUFDNUQsT0FBTyxFQUFFO1lBQ1AsV0FBVyxFQUFFLEdBQUcsQ0FBQyxZQUFZLENBQUMsUUFBUTtZQUN0QyxPQUFPLEVBQUU7Z0JBQ1AsRUFBRSxFQUFFLEdBQUcsQ0FBQyxNQUFNLENBQUMsRUFBRTthQUNsQjtTQUNGO0tBQ0YsQ0FBQyxDQUFBO0lBRUYsR0FBRyxDQUFDLElBQUksQ0FBQztRQUNQLE1BQU0sRUFBRSxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztLQUN6QixDQUFDLENBQUE7QUFDSixDQUFDIn0=