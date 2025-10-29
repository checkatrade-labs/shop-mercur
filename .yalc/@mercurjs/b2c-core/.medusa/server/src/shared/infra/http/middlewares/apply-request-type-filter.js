"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.applyRequestsTypeFilter = applyRequestsTypeFilter;
/**
 * @desc Adds request type filterableFileds
 */
function applyRequestsTypeFilter() {
    return async (req, _, next) => {
        if (req.validatedQuery.type) {
            req.filterableFields.type = req.validatedQuery.type;
        }
        return next();
    };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwbHktcmVxdWVzdC10eXBlLWZpbHRlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9zaGFyZWQvaW5mcmEvaHR0cC9taWRkbGV3YXJlcy9hcHBseS1yZXF1ZXN0LXR5cGUtZmlsdGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBT0EsMERBT0M7QUFWRDs7R0FFRztBQUNILFNBQWdCLHVCQUF1QjtJQUNyQyxPQUFPLEtBQUssRUFBRSxHQUFrQixFQUFFLENBQUMsRUFBRSxJQUFrQixFQUFFLEVBQUU7UUFDekQsSUFBSSxHQUFHLENBQUMsY0FBYyxDQUFDLElBQUksRUFBRSxDQUFDO1lBQzVCLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLEdBQUcsR0FBRyxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUE7UUFDckQsQ0FBQztRQUNELE9BQU8sSUFBSSxFQUFFLENBQUE7SUFDZixDQUFDLENBQUE7QUFDSCxDQUFDIn0=