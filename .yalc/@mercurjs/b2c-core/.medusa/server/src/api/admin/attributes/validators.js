"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminCreateAttribute = exports.CreateAttribute = exports.AdminUpdateAttribute = exports.AdminUpdateAttributeValue = exports.AdminCreateAttributeValue = exports.AdminGetAttributesParams = exports.GetAttributesParams = exports.AdminGetAttributeParams = exports.AdminGetAttributeValuesParams = exports.AdminGetAttributeValueParams = void 0;
const zod_1 = require("zod");
const common_1 = require("@medusajs/medusa/api/utils/common-validators/common");
const validators_1 = require("@medusajs/medusa/api/utils/validators");
var AttributeUIComponent;
(function (AttributeUIComponent) {
    AttributeUIComponent["SELECT"] = "select";
    AttributeUIComponent["MULTIVALUE"] = "multivalue";
    AttributeUIComponent["UNIT"] = "unit";
    AttributeUIComponent["TOGGLE"] = "toggle";
    AttributeUIComponent["TEXTAREA"] = "text_area";
    AttributeUIComponent["COLOR_PICKER"] = "color_picker";
})(AttributeUIComponent || (AttributeUIComponent = {}));
exports.AdminGetAttributeValueParams = (0, validators_1.createSelectParams)();
exports.AdminGetAttributeValuesParams = (0, validators_1.createFindParams)();
exports.AdminGetAttributeParams = (0, validators_1.createSelectParams)();
exports.GetAttributesParams = zod_1.z.object({
    id: zod_1.z.string().optional(),
    name: zod_1.z.string().optional(),
    handle: zod_1.z.string().optional(),
    is_required: zod_1.z.boolean().optional(),
    is_filterable: zod_1.z.boolean().optional(),
    created_at: (0, validators_1.createOperatorMap)().optional(),
    updated_at: (0, validators_1.createOperatorMap)().optional(),
    deleted_at: (0, validators_1.createOperatorMap)().optional(),
    ui_component: zod_1.z.nativeEnum(AttributeUIComponent).optional(),
});
exports.AdminGetAttributesParams = (0, validators_1.createFindParams)({
    offset: 0,
    limit: 50,
})
    .merge((0, common_1.applyAndAndOrOperators)(exports.GetAttributesParams))
    .merge(exports.GetAttributesParams);
exports.AdminCreateAttributeValue = zod_1.z.object({
    value: zod_1.z.string().min(1),
    rank: zod_1.z.number(),
    metadata: zod_1.z.record(zod_1.z.unknown()).optional(),
});
exports.AdminUpdateAttributeValue = zod_1.z.object({
    id: zod_1.z.string().optional(),
    value: zod_1.z.string().optional(),
    rank: zod_1.z.number().optional(),
    metadata: zod_1.z.record(zod_1.z.unknown()).optional(),
});
exports.AdminUpdateAttribute = zod_1.z
    .object({
    name: zod_1.z.string().optional(),
    description: zod_1.z.string().optional(),
    handle: zod_1.z.string().optional(),
    is_filterable: zod_1.z.boolean().optional(),
    is_required: zod_1.z.boolean().optional(),
    metadata: zod_1.z.record(zod_1.z.unknown()).optional(),
    ui_component: zod_1.z.nativeEnum(AttributeUIComponent).optional(),
    product_category_ids: zod_1.z.array(zod_1.z.string()).optional(),
    possible_values: zod_1.z.array(exports.AdminUpdateAttributeValue).optional(),
})
    .strict();
exports.CreateAttribute = zod_1.z.object({
    name: zod_1.z.string().min(1),
    description: zod_1.z.string().optional(),
    is_filterable: zod_1.z.boolean().optional(),
    is_required: zod_1.z.boolean().optional(),
    ui_component: zod_1.z
        .nativeEnum(AttributeUIComponent)
        .default(AttributeUIComponent.SELECT),
    handle: zod_1.z.string().optional(),
    metadata: zod_1.z.record(zod_1.z.unknown()).optional(),
    possible_values: zod_1.z.array(exports.AdminCreateAttributeValue).optional(),
    product_category_ids: zod_1.z.array(zod_1.z.string()).optional(),
});
exports.AdminCreateAttribute = (0, validators_1.WithAdditionalData)(exports.CreateAttribute, (schema) => {
    return schema.refine((data) => data.ui_component !== AttributeUIComponent.SELECT ||
        (data.possible_values && data.possible_values.length > 0), {
        message: "Possible values are required when ui_component is SELECT",
        path: ["possible_values"],
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsaWRhdG9ycy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hcGkvYWRtaW4vYXR0cmlidXRlcy92YWxpZGF0b3JzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLDZCQUF3QjtBQUV4QixnRkFBNkY7QUFDN0Ysc0VBSytDO0FBRS9DLElBQUssb0JBT0o7QUFQRCxXQUFLLG9CQUFvQjtJQUN2Qix5Q0FBaUIsQ0FBQTtJQUNqQixpREFBeUIsQ0FBQTtJQUN6QixxQ0FBYSxDQUFBO0lBQ2IseUNBQWlCLENBQUE7SUFDakIsOENBQXNCLENBQUE7SUFDdEIscURBQTZCLENBQUE7QUFDL0IsQ0FBQyxFQVBJLG9CQUFvQixLQUFwQixvQkFBb0IsUUFPeEI7QUFLWSxRQUFBLDRCQUE0QixHQUFHLElBQUEsK0JBQWtCLEdBQUUsQ0FBQztBQUtwRCxRQUFBLDZCQUE2QixHQUFHLElBQUEsNkJBQWdCLEdBQUUsQ0FBQztBQUtuRCxRQUFBLHVCQUF1QixHQUFHLElBQUEsK0JBQWtCLEdBQUUsQ0FBQztBQUUvQyxRQUFBLG1CQUFtQixHQUFHLE9BQUMsQ0FBQyxNQUFNLENBQUM7SUFDMUMsRUFBRSxFQUFFLE9BQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxRQUFRLEVBQUU7SUFDekIsSUFBSSxFQUFFLE9BQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxRQUFRLEVBQUU7SUFDM0IsTUFBTSxFQUFFLE9BQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxRQUFRLEVBQUU7SUFDN0IsV0FBVyxFQUFFLE9BQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxRQUFRLEVBQUU7SUFDbkMsYUFBYSxFQUFFLE9BQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxRQUFRLEVBQUU7SUFDckMsVUFBVSxFQUFFLElBQUEsOEJBQWlCLEdBQUUsQ0FBQyxRQUFRLEVBQUU7SUFDMUMsVUFBVSxFQUFFLElBQUEsOEJBQWlCLEdBQUUsQ0FBQyxRQUFRLEVBQUU7SUFD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