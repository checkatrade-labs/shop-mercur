"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchProductDetails = void 0;
exports.getApplicableAttributes = getApplicableAttributes;
const utils_1 = require("@medusajs/framework/utils");
const category_attribute_1 = __importDefault(require("../../../../links/category-attribute"));
const fetchProductDetails = async (product_id, scope) => {
    const service = scope.resolve(utils_1.Modules.PRODUCT);
    const product = await service.retrieveProduct(product_id);
    return product;
};
exports.fetchProductDetails = fetchProductDetails;
async function getApplicableAttributes(container, product_id, fields) {
    const query = container.resolve(utils_1.ContainerRegistrationKeys.QUERY);
    const { data: [product] } = await query.graph({
        entity: 'product',
        fields: ['categories.id'],
        filters: {
            id: product_id
        }
    });
    const categoryIds = product.categories.map((category) => category.id);
    const { data: attributes } = await query.graph({
        entity: category_attribute_1.default.entryPoint,
        fields: ['attribute_id']
    });
    const attributeIds = attributes.map((attribute) => attribute.attribute_id);
    const { data: globalAttributes } = await query.graph({
        entity: 'attribute',
        fields: fields,
        filters: {
            id: {
                $nin: attributeIds
            }
        }
    });
    const { data: categoryAttributes } = await query.graph({
        entity: category_attribute_1.default.entryPoint,
        fields: fields.map((field) => `attribute.${field}`),
        filters: {
            product_category_id: categoryIds
        }
    });
    return [
        ...globalAttributes,
        ...categoryAttributes.map((rel) => rel.attribute)
    ];
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvc2hhcmVkL2luZnJhL2h0dHAvdXRpbHMvcHJvZHVjdHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBaUJBLDBEQThDQztBQTdERCxxREFBOEU7QUFJOUUsOEZBQW9FO0FBRTdELE1BQU0sbUJBQW1CLEdBQUcsS0FBSyxFQUN0QyxVQUFrQixFQUNsQixLQUFzQixFQUNELEVBQUU7SUFDdkIsTUFBTSxPQUFPLEdBQUcsS0FBSyxDQUFDLE9BQU8sQ0FBQyxlQUFPLENBQUMsT0FBTyxDQUFDLENBQUE7SUFDOUMsTUFBTSxPQUFPLEdBQUcsTUFBTSxPQUFPLENBQUMsZUFBZSxDQUFDLFVBQVUsQ0FBQyxDQUFBO0lBQ3pELE9BQU8sT0FBTyxDQUFBO0FBQ2hCLENBQUMsQ0FBQTtBQVBZLFFBQUEsbUJBQW1CLHVCQU8vQjtBQUVNLEtBQUssVUFBVSx1QkFBdUIsQ0FDM0MsU0FBMEIsRUFDMUIsVUFBa0IsRUFDbEIsTUFBZ0I7SUFFaEIsTUFBTSxLQUFLLEdBQUcsU0FBUyxDQUFDLE9BQU8sQ0FBQyxpQ0FBeUIsQ0FBQyxLQUFLLENBQUMsQ0FBQTtJQUVoRSxNQUFNLEVBQ0osSUFBSSxFQUFFLENBQUMsT0FBTyxDQUFDLEVBQ2hCLEdBQUcsTUFBTSxLQUFLLENBQUMsS0FBSyxDQUFDO1FBQ3BCLE1BQU0sRUFBRSxTQUFTO1FBQ2pCLE1BQU0sRUFBRSxDQUFDLGVBQWUsQ0FBQztRQUN6QixPQUFPLEVBQUU7WUFDUCxFQUFFLEVBQUUsVUFBVTtTQUNmO0tBQ0YsQ0FBQyxDQUFBO0lBQ0YsTUFBTSxXQUFXLEdBQUcsT0FBTyxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxRQUFRLEVBQUUsRUFBRSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsQ0FBQTtJQUVyRSxNQUFNLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSxHQUFHLE1BQU0sS0FBSyxDQUFDLEtBQUssQ0FBQztRQUM3QyxNQUFNLEVBQUUsNEJBQWlCLENBQUMsVUFBVTtRQUNwQyxNQUFNLEVBQUUsQ0FBQyxjQUFjLENBQUM7S0FDekIsQ0FBQyxDQUFBO0lBQ0YsTUFBTSxZQUFZLEdBQUcsVUFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFDLFNBQVMsRUFBRSxFQUFFLENBQUMsU0FBUyxDQUFDLFlBQVksQ0FBQyxDQUFBO0lBRTFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsZ0JBQWdCLEVBQUUsR0FBRyxNQUFNLEtBQUssQ0FBQyxLQUFLLENBQUM7UUFDbkQsTUFBTSxFQUFFLFdBQVc7UUFDbkIsTUFBTSxFQUFFLE1BQU07UUFDZCxPQUFPLEVBQUU7WUFDUCxFQUFFLEVBQUU7Z0JBQ0YsSUFBSSxFQUFFLFlBQVk7YUFDbkI7U0FDRjtLQUNGLENBQUMsQ0FBQTtJQUVGLE1BQU0sRUFBRSxJQUFJLEVBQUUsa0JBQWtCLEVBQUUsR0FBRyxNQUFNLEtBQUssQ0FBQyxLQUFLLENBQUM7UUFDckQsTUFBTSxFQUFFLDRCQUFpQixDQUFDLFVBQVU7UUFDcEMsTUFBTSxFQUFFLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLGFBQWEsS0FBSyxFQUFFLENBQUM7UUFDbkQsT0FBTyxFQUFFO1lBQ1AsbUJBQW1CLEVBQUUsV0FBVztTQUNqQztLQUNGLENBQUMsQ0FBQTtJQUVGLE9BQU87UUFDTCxHQUFHLGdCQUFnQjtRQUNuQixHQUFHLGtCQUFrQixDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQztLQUNsRCxDQUFBO0FBQ0gsQ0FBQyJ9