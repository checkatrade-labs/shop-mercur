"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IntermediateEvents = exports.AlgoliaEvents = void 0;
var AlgoliaEvents;
(function (AlgoliaEvents) {
    AlgoliaEvents["PRODUCTS_CHANGED"] = "algolia.products.changed";
    AlgoliaEvents["PRODUCTS_DELETED"] = "algolia.products.deleted";
    AlgoliaEvents["REVIEW_CHANGED"] = "algolia.reviews.changed";
})(AlgoliaEvents || (exports.AlgoliaEvents = AlgoliaEvents = {}));
var IntermediateEvents;
(function (IntermediateEvents) {
    IntermediateEvents["FULFULLMENT_SET_CHANGED"] = "algolia.intermediate.fulfillment_set.changed";
    IntermediateEvents["SERVICE_ZONE_CHANGED"] = "algolia.intermediate.service_zone.changed";
    IntermediateEvents["SHIPPING_OPTION_CHANGED"] = "algolia.intermediate.shipping_option.changed";
    IntermediateEvents["STOCK_LOCATION_CHANGED"] = "algolia.intermediate.stock_location.changed";
    IntermediateEvents["INVENTORY_ITEM_CHANGED"] = "algolia.intermediate.inventory_item.changed";
})(IntermediateEvents || (exports.IntermediateEvents = IntermediateEvents = {}));
//# sourceMappingURL=events.js.map