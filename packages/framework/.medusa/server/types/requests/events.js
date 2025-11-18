"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RemoveReviewRequestUpdatedEvent = exports.ProductTagRequestUpdatedEvent = exports.ProductTypeRequestUpdatedEvent = exports.SellerTeamInviteEvent = exports.ImportSellerProductsRequestUpdatedEvent = exports.ProductUpdateRequestUpdatedEvent = exports.ProductRequestUpdatedEvent = exports.ProductCollectionRequestUpdatedEvent = exports.ProductCategoryRequestUpdatedEvent = exports.RequestUpdated = exports.SellerRequest = exports.SellerAccountRequestUpdatedEvent = void 0;
var SellerAccountRequestUpdatedEvent;
(function (SellerAccountRequestUpdatedEvent) {
    SellerAccountRequestUpdatedEvent["ACCEPTED"] = "requests.seller.accepted";
    SellerAccountRequestUpdatedEvent["REJECTED"] = "requests.seller.rejected";
})(SellerAccountRequestUpdatedEvent || (exports.SellerAccountRequestUpdatedEvent = SellerAccountRequestUpdatedEvent = {}));
var SellerRequest;
(function (SellerRequest) {
    SellerRequest["CREATED"] = "requests.seller.created";
    SellerRequest["TO_CREATE"] = "requests.seller.to_create";
})(SellerRequest || (exports.SellerRequest = SellerRequest = {}));
var RequestUpdated;
(function (RequestUpdated) {
    RequestUpdated["CREATED"] = "requests.*.created";
})(RequestUpdated || (exports.RequestUpdated = RequestUpdated = {}));
var ProductCategoryRequestUpdatedEvent;
(function (ProductCategoryRequestUpdatedEvent) {
    ProductCategoryRequestUpdatedEvent["ACCEPTED"] = "requests.product_category.accepted";
    ProductCategoryRequestUpdatedEvent["REJECTED"] = "requests.product_category.rejected";
})(ProductCategoryRequestUpdatedEvent || (exports.ProductCategoryRequestUpdatedEvent = ProductCategoryRequestUpdatedEvent = {}));
var ProductCollectionRequestUpdatedEvent;
(function (ProductCollectionRequestUpdatedEvent) {
    ProductCollectionRequestUpdatedEvent["ACCEPTED"] = "requests.product_collection.accepted";
    ProductCollectionRequestUpdatedEvent["REJECTED"] = "requests.product_collection.rejected";
})(ProductCollectionRequestUpdatedEvent || (exports.ProductCollectionRequestUpdatedEvent = ProductCollectionRequestUpdatedEvent = {}));
var ProductRequestUpdatedEvent;
(function (ProductRequestUpdatedEvent) {
    ProductRequestUpdatedEvent["CREATED"] = "requests.product.created";
    ProductRequestUpdatedEvent["ACCEPTED"] = "requests.product.accepted";
    ProductRequestUpdatedEvent["REJECTED"] = "requests.product.rejected";
    ProductRequestUpdatedEvent["TO_CREATE"] = "requests.product.to_create";
})(ProductRequestUpdatedEvent || (exports.ProductRequestUpdatedEvent = ProductRequestUpdatedEvent = {}));
var ProductUpdateRequestUpdatedEvent;
(function (ProductUpdateRequestUpdatedEvent) {
    ProductUpdateRequestUpdatedEvent["CREATED"] = "requests.product_update.created";
    ProductUpdateRequestUpdatedEvent["ACCEPTED"] = "requests.product_update.accepted";
    ProductUpdateRequestUpdatedEvent["REJECTED"] = "requests.product_update.rejected";
    ProductUpdateRequestUpdatedEvent["TO_CREATE"] = "requests.product_update.to_create";
})(ProductUpdateRequestUpdatedEvent || (exports.ProductUpdateRequestUpdatedEvent = ProductUpdateRequestUpdatedEvent = {}));
var ImportSellerProductsRequestUpdatedEvent;
(function (ImportSellerProductsRequestUpdatedEvent) {
    ImportSellerProductsRequestUpdatedEvent["TO_CREATE"] = "requests.import_seller_products.to_create";
})(ImportSellerProductsRequestUpdatedEvent || (exports.ImportSellerProductsRequestUpdatedEvent = ImportSellerProductsRequestUpdatedEvent = {}));
var SellerTeamInviteEvent;
(function (SellerTeamInviteEvent) {
    SellerTeamInviteEvent["CREATED"] = "seller.team.invite.created";
})(SellerTeamInviteEvent || (exports.SellerTeamInviteEvent = SellerTeamInviteEvent = {}));
var ProductTypeRequestUpdatedEvent;
(function (ProductTypeRequestUpdatedEvent) {
    ProductTypeRequestUpdatedEvent["ACCEPTED"] = "requests.product_type.accepted";
    ProductTypeRequestUpdatedEvent["REJECTED"] = "requests.product_type.rejected";
})(ProductTypeRequestUpdatedEvent || (exports.ProductTypeRequestUpdatedEvent = ProductTypeRequestUpdatedEvent = {}));
var ProductTagRequestUpdatedEvent;
(function (ProductTagRequestUpdatedEvent) {
    ProductTagRequestUpdatedEvent["ACCEPTED"] = "requests.product_tag.accepted";
    ProductTagRequestUpdatedEvent["REJECTED"] = "requests.product_tag.rejected";
})(ProductTagRequestUpdatedEvent || (exports.ProductTagRequestUpdatedEvent = ProductTagRequestUpdatedEvent = {}));
var RemoveReviewRequestUpdatedEvent;
(function (RemoveReviewRequestUpdatedEvent) {
    RemoveReviewRequestUpdatedEvent["REMOVED"] = "requests.review.removed";
})(RemoveReviewRequestUpdatedEvent || (exports.RemoveReviewRequestUpdatedEvent = RemoveReviewRequestUpdatedEvent = {}));
//# sourceMappingURL=events.js.map