"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("@medusajs/framework/utils");
const product_1 = __importDefault(require("@medusajs/medusa/product"));
const attribute_1 = __importDefault(require("../modules/attribute"));
exports.default = (0, utils_1.defineLink)({
    linkable: product_1.default.linkable.product,
    isList: true,
}, {
    linkable: attribute_1.default.linkable.attributeValue,
    isList: true,
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1hdHRyaWJ1dGUtdmFsdWUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvbGlua3MvcHJvZHVjdC1hdHRyaWJ1dGUtdmFsdWUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxxREFBdUQ7QUFDdkQsdUVBQXFEO0FBRXJELHFFQUFtRDtBQUVuRCxrQkFBZSxJQUFBLGtCQUFVLEVBQ3ZCO0lBQ0UsUUFBUSxFQUFFLGlCQUFhLENBQUMsUUFBUSxDQUFDLE9BQU87SUFDeEMsTUFBTSxFQUFFLElBQUk7Q0FDYixFQUNEO0lBQ0UsUUFBUSxFQUFFLG1CQUFlLENBQUMsUUFBUSxDQUFDLGNBQWM7SUFDakQsTUFBTSxFQUFFLElBQUk7Q0FDYixDQUNGLENBQUMifQ==