"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchSellerByAuthActorId = void 0;
const utils_1 = require("@medusajs/framework/utils");
const fetchSellerByAuthActorId = async (authActorId, scope, fields = ["id"]) => {
    const query = scope.resolve(utils_1.ContainerRegistrationKeys.QUERY);
    const { data: [seller], } = await query.graph({
        entity: "seller",
        filters: {
            members: {
                id: authActorId,
            },
        },
        fields,
    });
    return seller;
};
exports.fetchSellerByAuthActorId = fetchSellerByAuthActorId;
//# sourceMappingURL=seller.js.map