"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.filterBySellerId = filterBySellerId;
const seller_1 = require("../seller");
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
//# sourceMappingURL=filter-by-seller-id.js.map