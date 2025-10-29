"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("@medusajs/framework/utils");
const fulfillment_1 = __importDefault(require("@medusajs/medusa/fulfillment"));
const seller_1 = __importDefault(require("../modules/seller"));
exports.default = (0, utils_1.defineLink)(seller_1.default.linkable.seller, {
    linkable: fulfillment_1.default.linkable.shippingProfile,
    isList: true,
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsbGVyLXNoaXBwaW5nLXByb2ZpbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvbGlua3Mvc2VsbGVyLXNoaXBwaW5nLXByb2ZpbGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxxREFBdUQ7QUFDdkQsK0VBQTZEO0FBRTdELCtEQUE2QztBQUU3QyxrQkFBZSxJQUFBLGtCQUFVLEVBQUMsZ0JBQVksQ0FBQyxRQUFRLENBQUMsTUFBTSxFQUFFO0lBQ3RELFFBQVEsRUFBRSxxQkFBaUIsQ0FBQyxRQUFRLENBQUMsZUFBZTtJQUNwRCxNQUFNLEVBQUUsSUFBSTtDQUNiLENBQUMsQ0FBQyJ9