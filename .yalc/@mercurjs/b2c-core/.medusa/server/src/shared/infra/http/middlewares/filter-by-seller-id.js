"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.filterBySellerId = filterBySellerId;
const seller_1 = require("../utils/seller");
/**
 * @desc Adds a seller id to the filterable fields
 */
function filterBySellerId() {
    return async (req, _, next) => {
        const seller = await (0, seller_1.fetchSellerByAuthActorId)(req.auth_context.actor_id, req.scope);
        req.filterableFields.seller_id = seller.id;
        return next();
    };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsdGVyLWJ5LXNlbGxlci1pZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9zaGFyZWQvaW5mcmEvaHR0cC9taWRkbGV3YXJlcy9maWx0ZXItYnktc2VsbGVyLWlkLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBU0EsNENBV0M7QUFoQkQsNENBQTBEO0FBRTFEOztHQUVHO0FBQ0gsU0FBZ0IsZ0JBQWdCO0lBQzlCLE9BQU8sS0FBSyxFQUFFLEdBQStCLEVBQUUsQ0FBQyxFQUFFLElBQWtCLEVBQUUsRUFBRTtRQUN0RSxNQUFNLE1BQU0sR0FBRyxNQUFNLElBQUEsaUNBQXdCLEVBQzNDLEdBQUcsQ0FBQyxZQUFZLENBQUMsUUFBUSxFQUN6QixHQUFHLENBQUMsS0FBSyxDQUNWLENBQUE7UUFFRCxHQUFHLENBQUMsZ0JBQWdCLENBQUMsU0FBUyxHQUFHLE1BQU0sQ0FBQyxFQUFFLENBQUE7UUFFMUMsT0FBTyxJQUFJLEVBQUUsQ0FBQTtJQUNmLENBQUMsQ0FBQTtBQUNILENBQUMifQ==