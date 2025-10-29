"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("@medusajs/framework/utils");
const order_1 = __importDefault(require("@medusajs/medusa/order"));
const seller_1 = __importDefault(require("../modules/seller"));
exports.default = (0, utils_1.defineLink)(seller_1.default.linkable.seller, {
    linkable: order_1.default.linkable.return,
    isList: true,
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsbGVyLXJldHVybi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9saW5rcy9zZWxsZXItcmV0dXJuLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEscURBQXVEO0FBQ3ZELG1FQUFpRDtBQUVqRCwrREFBNkM7QUFFN0Msa0JBQWUsSUFBQSxrQkFBVSxFQUFDLGdCQUFZLENBQUMsUUFBUSxDQUFDLE1BQU0sRUFBRTtJQUN0RCxRQUFRLEVBQUUsZUFBVyxDQUFDLFFBQVEsQ0FBQyxNQUFNO0lBQ3JDLE1BQU0sRUFBRSxJQUFJO0NBQ2IsQ0FBQyxDQUFDIn0=