"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SellerModuleSellerLinkable = void 0;
exports.SellerModuleSellerLinkable = {
    toJSON: () => ({
        serviceName: "seller",
        field: "seller",
        linkable: "seller_id",
        primaryKey: "id",
    }),
    id: {
        linkable: "seller_id",
        primaryKey: "id",
        serviceName: "seller",
        field: "seller",
        entity: "Seller",
    },
};
//# sourceMappingURL=linkables.js.map