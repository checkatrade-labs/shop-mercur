"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("@medusajs/framework/utils");
const product_1 = __importDefault(require("@medusajs/medusa/product"));
const taxcode_1 = __importDefault(require("../modules/taxcode"));
exports.default = (0, utils_1.defineLink)({
    linkable: product_1.default.linkable.productCategory,
    isList: true,
}, taxcode_1.default.linkable.taxCode);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2F0ZWdvcnktdGF4Y29kZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9saW5rcy9jYXRlZ29yeS10YXhjb2RlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEscURBQXVEO0FBQ3ZELHVFQUFxRDtBQUVyRCxpRUFBeUM7QUFFekMsa0JBQWUsSUFBQSxrQkFBVSxFQUN2QjtJQUNFLFFBQVEsRUFBRSxpQkFBYSxDQUFDLFFBQVEsQ0FBQyxlQUFlO0lBQ2hELE1BQU0sRUFBRSxJQUFJO0NBQ2IsRUFDRCxpQkFBTyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQ3pCLENBQUMifQ==