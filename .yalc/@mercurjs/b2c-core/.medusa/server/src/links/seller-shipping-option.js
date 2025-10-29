"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("@medusajs/framework/utils");
const fulfillment_1 = __importDefault(require("@medusajs/medusa/fulfillment"));
const seller_1 = __importDefault(require("../modules/seller"));
exports.default = (0, utils_1.defineLink)(seller_1.default.linkable.seller, {
    linkable: fulfillment_1.default.linkable.shippingOption,
    isList: true,
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsbGVyLXNoaXBwaW5nLW9wdGlvbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9saW5rcy9zZWxsZXItc2hpcHBpbmctb3B0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEscURBQXVEO0FBQ3ZELCtFQUE2RDtBQUU3RCwrREFBNkM7QUFFN0Msa0JBQWUsSUFBQSxrQkFBVSxFQUFDLGdCQUFZLENBQUMsUUFBUSxDQUFDLE1BQU0sRUFBRTtJQUN0RCxRQUFRLEVBQUUscUJBQWlCLENBQUMsUUFBUSxDQUFDLGNBQWM7SUFDbkQsTUFBTSxFQUFFLElBQUk7Q0FDYixDQUFDLENBQUMifQ==