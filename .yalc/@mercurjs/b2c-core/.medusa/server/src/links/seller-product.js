"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("@medusajs/framework/utils");
const product_1 = __importDefault(require("@medusajs/medusa/product"));
const seller_1 = __importDefault(require("../modules/seller"));
exports.default = (0, utils_1.defineLink)(seller_1.default.linkable.seller, {
    linkable: product_1.default.linkable.product,
    isList: true,
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsbGVyLXByb2R1Y3QuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvbGlua3Mvc2VsbGVyLXByb2R1Y3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxxREFBdUQ7QUFDdkQsdUVBQXFEO0FBRXJELCtEQUE2QztBQUU3QyxrQkFBZSxJQUFBLGtCQUFVLEVBQUMsZ0JBQVksQ0FBQyxRQUFRLENBQUMsTUFBTSxFQUFFO0lBQ3RELFFBQVEsRUFBRSxpQkFBYSxDQUFDLFFBQVEsQ0FBQyxPQUFPO0lBQ3hDLE1BQU0sRUFBRSxJQUFJO0NBQ2IsQ0FBQyxDQUFDIn0=