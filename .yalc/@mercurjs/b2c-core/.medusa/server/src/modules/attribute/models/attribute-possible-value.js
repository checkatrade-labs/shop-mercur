"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("@medusajs/framework/utils");
const attribute_1 = __importDefault(require("./attribute"));
const AttributePossibleValue = utils_1.model
    .define('attribute_possible_value', {
    id: utils_1.model.id({ prefix: 'attr_pos_val' }).primaryKey(),
    value: utils_1.model.text(),
    rank: utils_1.model.number(),
    metadata: utils_1.model.json().nullable(),
    attribute: utils_1.model.belongsTo(() => attribute_1.default, {
        mappedBy: 'possible_values'
    })
})
    .indexes([
    {
        on: ['attribute_id', 'value'],
        name: 'UQ_attribute_id_value',
        unique: true
    }
]);
exports.default = AttributePossibleValue;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXR0cmlidXRlLXBvc3NpYmxlLXZhbHVlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vc3JjL21vZHVsZXMvYXR0cmlidXRlL21vZGVscy9hdHRyaWJ1dGUtcG9zc2libGUtdmFsdWUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxxREFBaUQ7QUFFakQsNERBQW1DO0FBRW5DLE1BQU0sc0JBQXNCLEdBQUcsYUFBSztLQUNqQyxNQUFNLENBQUMsMEJBQTBCLEVBQUU7SUFDbEMsRUFBRSxFQUFFLGFBQUssQ0FBQyxFQUFFLENBQUMsRUFBRSxNQUFNLEVBQUUsY0FBYyxFQUFFLENBQUMsQ0FBQyxVQUFVLEVBQUU7SUFDckQsS0FBSyxFQUFFLGFBQUssQ0FBQyxJQUFJLEVBQUU7SUFDbkIsSUFBSSxFQUFFLGFBQUssQ0FBQyxNQUFNLEVBQUU7SUFDcEIsUUFBUSxFQUFFLGFBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQyxRQUFRLEVBQUU7SUFDakMsU0FBUyxFQUFFLGFBQUssQ0FBQyxTQUFTLENBQUMsR0FBRyxFQUFFLENBQUMsbUJBQVMsRUFBRTtRQUMxQyxRQUFRLEVBQUUsaUJBQWlCO0tBQzVCLENBQUM7Q0FDSCxDQUFDO0tBQ0QsT0FBTyxDQUFDO0lBQ1A7UUFDRSxFQUFFLEVBQUUsQ0FBQyxjQUFjLEVBQUUsT0FBTyxDQUFDO1FBQzdCLElBQUksRUFBRSx1QkFBdUI7UUFDN0IsTUFBTSxFQUFFLElBQUk7S0FDYjtDQUNGLENBQUMsQ0FBQTtBQUVKLGtCQUFlLHNCQUFzQixDQUFBIn0=