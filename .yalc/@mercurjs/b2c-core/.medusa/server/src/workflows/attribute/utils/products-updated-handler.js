"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.productsUpdatedHookHandler = void 0;
const utils_1 = require("@medusajs/framework/utils");
const product_attribute_value_1 = __importDefault(require("../../../links/product-attribute-value"));
const workflows_1 = require("../../../workflows/attribute/workflows");
const productsUpdatedHookHandler = async ({ products, additional_data, container }) => {
    const query = container.resolve(utils_1.ContainerRegistrationKeys.QUERY);
    const attributeValues = (additional_data?.values ??
        []);
    const productIds = products.map((prod) => prod.id);
    if (!attributeValues.length) {
        return [];
    }
    const updatedValueIds = (await Promise.all(productIds.map(async (prodId) => {
        const { data: productValues } = await query.graph({
            entity: product_attribute_value_1.default.entryPoint,
            fields: [
                'attribute_value.id',
                'attribute_value.value',
                'attribute_value.attribute_id'
            ],
            filters: {
                product_id: prodId
            }
        });
        return Promise.all(attributeValues.map(async (attrVal) => {
            const unchangedProductValue = productValues.find((prodVal) => prodVal.attribute_value.value === attrVal.value &&
                prodVal.attribute_value.attribute_id === attrVal.attribute_id);
            if (unchangedProductValue) {
                return unchangedProductValue.attribute_value.id;
            }
            const { result } = await (0, workflows_1.createAttributeValueWorkflow)(container).run({
                input: {
                    attribute_id: attrVal.attribute_id,
                    value: attrVal.value,
                    product_id: prodId
                }
            });
            return result.id;
        }));
    }))).flat();
    const { data: attributeValuesToDelete } = await query.graph({
        entity: product_attribute_value_1.default.entryPoint,
        fields: ['attribute_value_id'],
        filters: {
            attribute_value_id: {
                $nin: updatedValueIds
            },
            product_id: productIds
        }
    });
    if (!attributeValuesToDelete.length) {
        return;
    }
    await (0, workflows_1.deleteAttributeValueWorkflow)(container).run({
        input: attributeValuesToDelete.map((val) => val.attribute_value_id)
    });
};
exports.productsUpdatedHookHandler = productsUpdatedHookHandler;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdHMtdXBkYXRlZC1oYW5kbGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vc3JjL3dvcmtmbG93cy9hdHRyaWJ1dGUvdXRpbHMvcHJvZHVjdHMtdXBkYXRlZC1oYW5kbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUVBLHFEQUFxRTtBQUlyRSxxR0FBMEU7QUFDMUUsc0VBRytDO0FBRXhDLE1BQU0sMEJBQTBCLEdBQUcsS0FBSyxFQUFFLEVBQy9DLFFBQVEsRUFDUixlQUFlLEVBQ2YsU0FBUyxFQUtWLEVBQUUsRUFBRTtJQUNILE1BQU0sS0FBSyxHQUFHLFNBQVMsQ0FBQyxPQUFPLENBQUMsaUNBQXlCLENBQUMsS0FBSyxDQUFDLENBQUE7SUFFaEUsTUFBTSxlQUFlLEdBQUcsQ0FBQyxlQUFlLEVBQUUsTUFBTTtRQUM5QyxFQUFFLENBQStCLENBQUE7SUFDbkMsTUFBTSxVQUFVLEdBQUcsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFBO0lBRWxELElBQUksQ0FBQyxlQUFlLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDNUIsT0FBTyxFQUFFLENBQUE7SUFDWCxDQUFDO0lBRUQsTUFBTSxlQUFlLEdBQUcsQ0FDdEIsTUFBTSxPQUFPLENBQUMsR0FBRyxDQUNmLFVBQVUsQ0FBQyxHQUFHLENBQUMsS0FBSyxFQUFFLE1BQU0sRUFBRSxFQUFFO1FBQzlCLE1BQU0sRUFBRSxJQUFJLEVBQUUsYUFBYSxFQUFFLEdBQUcsTUFBTSxLQUFLLENBQUMsS0FBSyxDQUFDO1lBQ2hELE1BQU0sRUFBRSxpQ0FBcUIsQ0FBQyxVQUFVO1lBQ3hDLE1BQU0sRUFBRTtnQkFDTixvQkFBb0I7Z0JBQ3BCLHVCQUF1QjtnQkFDdkIsOEJBQThCO2FBQy9CO1lBQ0QsT0FBTyxFQUFFO2dCQUNQLFVBQVUsRUFBRSxNQUFNO2FBQ25CO1NBQ0YsQ0FBQyxDQUFBO1FBRUYsT0FBTyxPQUFPLENBQUMsR0FBRyxDQUNoQixlQUFlLENBQUMsR0FBRyxDQUFDLEtBQUssRUFBRSxPQUFPLEVBQUUsRUFBRTtZQUNwQyxNQUFNLHFCQUFxQixHQUFHLGFBQWEsQ0FBQyxJQUFJLENBQzlDLENBQUMsT0FBTyxFQUFFLEVBQUUsQ0FDVixPQUFPLENBQUMsZUFBZSxDQUFDLEtBQUssS0FBSyxPQUFPLENBQUMsS0FBSztnQkFDL0MsT0FBTyxDQUFDLGVBQWUsQ0FBQyxZQUFZLEtBQUssT0FBTyxDQUFDLFlBQVksQ0FDaEUsQ0FBQTtZQUNELElBQUkscUJBQXFCLEVBQUUsQ0FBQztnQkFDMUIsT0FBTyxxQkFBcUIsQ0FBQyxlQUFlLENBQUMsRUFBWSxDQUFBO1lBQzNELENBQUM7WUFFRCxNQUFNLEVBQUUsTUFBTSxFQUFFLEdBQUcsTUFBTSxJQUFBLHdDQUE0QixFQUNuRCxTQUFTLENBQ1YsQ0FBQyxHQUFHLENBQUM7Z0JBQ0osS0FBSyxFQUFFO29CQUNMLFlBQVksRUFBRSxPQUFPLENBQUMsWUFBWTtvQkFDbEMsS0FBSyxFQUFFLE9BQU8sQ0FBQyxLQUFLO29CQUNwQixVQUFVLEVBQUUsTUFBTTtpQkFDbkI7YUFDRixDQUFDLENBQUE7WUFDRixPQUFPLE1BQU0sQ0FBQyxFQUFFLENBQUE7UUFDbEIsQ0FBQyxDQUFDLENBQ0gsQ0FBQTtJQUNILENBQUMsQ0FBQyxDQUNILENBQ0YsQ0FBQyxJQUFJLEVBQUUsQ0FBQTtJQUVSLE1BQU0sRUFBRSxJQUFJLEVBQUUsdUJBQXVCLEVBQUUsR0FBRyxNQUFNLEtBQUssQ0FBQyxLQUFLLENBQUM7UUFDMUQsTUFBTSxFQUFFLGlDQUFxQixDQUFDLFVBQVU7UUFDeEMsTUFBTSxFQUFFLENBQUMsb0JBQW9CLENBQUM7UUFDOUIsT0FBTyxFQUFFO1lBQ1Asa0JBQWtCLEVBQUU7Z0JBQ2xCLElBQUksRUFBRSxlQUFlO2FBQ3RCO1lBQ0QsVUFBVSxFQUFFLFVBQVU7U0FDdkI7S0FDRixDQUFDLENBQUE7SUFFRixJQUFJLENBQUMsdUJBQXVCLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDcEMsT0FBTTtJQUNSLENBQUM7SUFFRCxNQUFNLElBQUEsd0NBQTRCLEVBQUMsU0FBUyxDQUFDLENBQUMsR0FBRyxDQUFDO1FBQ2hELEtBQUssRUFBRSx1QkFBdUIsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLEdBQUcsQ0FBQyxrQkFBa0IsQ0FBQztLQUNwRSxDQUFDLENBQUE7QUFDSixDQUFDLENBQUE7QUEvRVksUUFBQSwwQkFBMEIsOEJBK0V0QyJ9