"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("@medusajs/framework/utils");
const promotion_1 = __importDefault(require("@medusajs/medusa/promotion"));
const seller_1 = __importDefault(require("../modules/seller"));
exports.default = (0, utils_1.defineLink)(seller_1.default.linkable.seller, {
    linkable: promotion_1.default.linkable.promotion,
    isList: true,
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsbGVyLXByb21vdGlvbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9saW5rcy9zZWxsZXItcHJvbW90aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEscURBQXVEO0FBQ3ZELDJFQUF5RDtBQUV6RCwrREFBNkM7QUFFN0Msa0JBQWUsSUFBQSxrQkFBVSxFQUFDLGdCQUFZLENBQUMsUUFBUSxDQUFDLE1BQU0sRUFBRTtJQUN0RCxRQUFRLEVBQUUsbUJBQWUsQ0FBQyxRQUFRLENBQUMsU0FBUztJQUM1QyxNQUFNLEVBQUUsSUFBSTtDQUNiLENBQUMsQ0FBQyJ9