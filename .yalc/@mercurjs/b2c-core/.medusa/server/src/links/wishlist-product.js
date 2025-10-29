"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("@medusajs/framework/utils");
const product_1 = __importDefault(require("@medusajs/medusa/product"));
const wishlist_1 = __importDefault(require("../modules/wishlist"));
exports.default = (0, utils_1.defineLink)(wishlist_1.default.linkable.wishlist, {
    linkable: product_1.default.linkable.product,
    deleteCascade: true,
    isList: true,
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lzaGxpc3QtcHJvZHVjdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9saW5rcy93aXNobGlzdC1wcm9kdWN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEscURBQXVEO0FBQ3ZELHVFQUFxRDtBQUVyRCxtRUFBaUQ7QUFFakQsa0JBQWUsSUFBQSxrQkFBVSxFQUFDLGtCQUFjLENBQUMsUUFBUSxDQUFDLFFBQVEsRUFBRTtJQUMxRCxRQUFRLEVBQUUsaUJBQWEsQ0FBQyxRQUFRLENBQUMsT0FBTztJQUN4QyxhQUFhLEVBQUUsSUFBSTtJQUNuQixNQUFNLEVBQUUsSUFBSTtDQUNiLENBQUMsQ0FBQyJ9