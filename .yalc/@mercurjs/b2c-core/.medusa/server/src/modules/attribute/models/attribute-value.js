"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("@medusajs/framework/utils");
const attribute_1 = __importDefault(require("./attribute"));
const AttributeValue = utils_1.model.define('attribute_value', {
    id: utils_1.model.id({ prefix: 'attr_val' }).primaryKey(),
    value: utils_1.model.text(),
    rank: utils_1.model.number(),
    metadata: utils_1.model.json().nullable(),
    attribute: utils_1.model.belongsTo(() => attribute_1.default, {
        mappedBy: 'values'
    })
});
exports.default = AttributeValue;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXR0cmlidXRlLXZhbHVlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vc3JjL21vZHVsZXMvYXR0cmlidXRlL21vZGVscy9hdHRyaWJ1dGUtdmFsdWUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxxREFBaUQ7QUFFakQsNERBQW1DO0FBRW5DLE1BQU0sY0FBYyxHQUFHLGFBQUssQ0FBQyxNQUFNLENBQUMsaUJBQWlCLEVBQUU7SUFDckQsRUFBRSxFQUFFLGFBQUssQ0FBQyxFQUFFLENBQUMsRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLENBQUMsQ0FBQyxVQUFVLEVBQUU7SUFDakQsS0FBSyxFQUFFLGFBQUssQ0FBQyxJQUFJLEVBQUU7SUFDbkIsSUFBSSxFQUFFLGFBQUssQ0FBQyxNQUFNLEVBQUU7SUFDcEIsUUFBUSxFQUFFLGFBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQyxRQUFRLEVBQUU7SUFDakMsU0FBUyxFQUFFLGFBQUssQ0FBQyxTQUFTLENBQUMsR0FBRyxFQUFFLENBQUMsbUJBQVMsRUFBRTtRQUMxQyxRQUFRLEVBQUUsUUFBUTtLQUNuQixDQUFDO0NBQ0gsQ0FBQyxDQUFBO0FBRUYsa0JBQWUsY0FBYyxDQUFBIn0=