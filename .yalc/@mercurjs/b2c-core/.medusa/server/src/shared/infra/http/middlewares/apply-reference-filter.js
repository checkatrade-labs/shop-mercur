"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.applyReferenceFilter = applyReferenceFilter;
/**
 * @desc Adds reference type filterableFileds
 */
function applyReferenceFilter() {
    return async (req, _, next) => {
        if (req.validatedQuery.reference) {
            req.filterableFields.reference = req.validatedQuery.reference;
        }
        return next();
    };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwbHktcmVmZXJlbmNlLWZpbHRlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9zaGFyZWQvaW5mcmEvaHR0cC9taWRkbGV3YXJlcy9hcHBseS1yZWZlcmVuY2UtZmlsdGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBT0Esb0RBT0M7QUFWRDs7R0FFRztBQUNILFNBQWdCLG9CQUFvQjtJQUNsQyxPQUFPLEtBQUssRUFBRSxHQUFrQixFQUFFLENBQUMsRUFBRSxJQUFrQixFQUFFLEVBQUU7UUFDekQsSUFBSSxHQUFHLENBQUMsY0FBYyxDQUFDLFNBQVMsRUFBRSxDQUFDO1lBQ2pDLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxTQUFTLEdBQUcsR0FBRyxDQUFDLGNBQWMsQ0FBQyxTQUFTLENBQUE7UUFDL0QsQ0FBQztRQUNELE9BQU8sSUFBSSxFQUFFLENBQUE7SUFDZixDQUFDLENBQUE7QUFDSCxDQUFDIn0=