"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("@medusajs/framework/utils");
const framework_1 = require("@mercurjs/framework");
const attribute_possible_value_1 = __importDefault(require("./attribute-possible-value"));
const attribute_value_1 = __importDefault(require("./attribute-value"));
const Attribute = utils_1.model
    .define("attribute", {
    id: utils_1.model.id({ prefix: "attr" }).primaryKey(),
    name: utils_1.model.text().searchable(),
    description: utils_1.model.text().nullable(),
    is_required: utils_1.model.boolean().default(false),
    is_filterable: utils_1.model.boolean().default(true),
    handle: utils_1.model.text().unique(),
    metadata: utils_1.model.json().nullable(),
    ui_component: utils_1.model
        .enum(Object.values(framework_1.AttributeUIComponent))
        .default(framework_1.AttributeUIComponent.SELECT),
    values: utils_1.model.hasMany(() => attribute_value_1.default),
    possible_values: utils_1.model.hasMany(() => attribute_possible_value_1.default),
})
    .cascades({
    delete: ["values", "possible_values"],
});
exports.default = Attribute;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXR0cmlidXRlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vc3JjL21vZHVsZXMvYXR0cmlidXRlL21vZGVscy9hdHRyaWJ1dGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxxREFBa0Q7QUFFbEQsbURBQTJEO0FBQzNELDBGQUFnRTtBQUNoRSx3RUFBK0M7QUFFL0MsTUFBTSxTQUFTLEdBQUcsYUFBSztLQUNwQixNQUFNLENBQUMsV0FBVyxFQUFFO0lBQ25CLEVBQUUsRUFBRSxhQUFLLENBQUMsRUFBRSxDQUFDLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxDQUFDLENBQUMsVUFBVSxFQUFFO0lBQzdDLElBQUksRUFBRSxhQUFLLENBQUMsSUFBSSxFQUFFLENBQUMsVUFBVSxFQUFFO0lBQy9CLFdBQVcsRUFBRSxhQUFLLENBQUMsSUFBSSxFQUFFLENBQUMsUUFBUSxFQUFFO0lBQ3BDLFdBQVcsRUFBRSxhQUFLLENBQUMsT0FBTyxFQUFFLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQztJQUMzQyxhQUFhLEVBQUUsYUFBSyxDQUFDLE9BQU8sRUFBRSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUM7SUFDNUMsTUFBTSxFQUFFLGFBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQyxNQUFNLEVBQUU7SUFDN0IsUUFBUSxFQUFFLGFBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQyxRQUFRLEVBQUU7SUFDakMsWUFBWSxFQUFFLGFBQUs7U0FDaEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsZ0NBQW9CLENBQUMsQ0FBQztTQUN6QyxPQUFPLENBQUMsZ0NBQW9CLENBQUMsTUFBTSxDQUFDO0lBQ3ZDLE1BQU0sRUFBRSxhQUFLLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBRSxDQUFDLHlCQUFjLENBQUM7SUFDM0MsZUFBZSxFQUFFLGFBQUssQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUFFLENBQUMsa0NBQXNCLENBQUM7Q0FDN0QsQ0FBQztLQUNELFFBQVEsQ0FBQztJQUNSLE1BQU0sRUFBRSxDQUFDLFFBQVEsRUFBRSxpQkFBaUIsQ0FBQztDQUN0QyxDQUFDLENBQUM7QUFFTCxrQkFBZSxTQUFTLENBQUMifQ==