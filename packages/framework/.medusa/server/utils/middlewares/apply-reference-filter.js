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
//# sourceMappingURL=apply-reference-filter.js.map