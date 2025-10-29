"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.applyRequestsStatusFilter = applyRequestsStatusFilter;
/**
 * @desc Adds request status to filterableFileds
 */
function applyRequestsStatusFilter() {
    return async (req, _, next) => {
        if (req.validatedQuery.status) {
            req.filterableFields.status = req.validatedQuery.status;
        }
        return next();
    };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwbHktcmVxdWVzdC1zdGF0dXMtZmlsdGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL3NoYXJlZC9pbmZyYS9odHRwL21pZGRsZXdhcmVzL2FwcGx5LXJlcXVlc3Qtc3RhdHVzLWZpbHRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQU9BLDhEQVFDO0FBWEQ7O0dBRUc7QUFDSCxTQUFnQix5QkFBeUI7SUFDdkMsT0FBTyxLQUFLLEVBQUUsR0FBa0IsRUFBRSxDQUFDLEVBQUUsSUFBa0IsRUFBRSxFQUFFO1FBQ3pELElBQUksR0FBRyxDQUFDLGNBQWMsQ0FBQyxNQUFNLEVBQUUsQ0FBQztZQUM5QixHQUFHLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxHQUFHLEdBQUcsQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFBO1FBQ3pELENBQUM7UUFFRCxPQUFPLElBQUksRUFBRSxDQUFBO0lBQ2YsQ0FBQyxDQUFBO0FBQ0gsQ0FBQyJ9