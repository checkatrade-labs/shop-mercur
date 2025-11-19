"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MemberRole = exports.StoreStatus = void 0;
var StoreStatus;
(function (StoreStatus) {
    StoreStatus["ACTIVE"] = "ACTIVE";
    StoreStatus["INACTIVE"] = "INACTIVE";
    StoreStatus["SUSPENDED"] = "SUSPENDED";
})(StoreStatus || (exports.StoreStatus = StoreStatus = {}));
var MemberRole;
(function (MemberRole) {
    MemberRole["OWNER"] = "owner";
    MemberRole["ADMIN"] = "admin";
    MemberRole["MEMBER"] = "member";
})(MemberRole || (exports.MemberRole = MemberRole = {}));
//# sourceMappingURL=common.js.map