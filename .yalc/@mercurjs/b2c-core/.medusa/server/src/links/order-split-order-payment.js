"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("@medusajs/framework/utils");
const order_1 = __importDefault(require("@medusajs/medusa/order"));
const split_order_payment_1 = __importDefault(require("../modules/split-order-payment"));
exports.default = (0, utils_1.defineLink)(order_1.default.linkable.order, split_order_payment_1.default.linkable.splitOrderPayment);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3JkZXItc3BsaXQtb3JkZXItcGF5bWVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9saW5rcy9vcmRlci1zcGxpdC1vcmRlci1wYXltZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEscURBQXVEO0FBQ3ZELG1FQUFpRDtBQUVqRCx5RkFBcUU7QUFFckUsa0JBQWUsSUFBQSxrQkFBVSxFQUN2QixlQUFXLENBQUMsUUFBUSxDQUFDLEtBQUssRUFDMUIsNkJBQXVCLENBQUMsUUFBUSxDQUFDLGlCQUFpQixDQUNuRCxDQUFDIn0=