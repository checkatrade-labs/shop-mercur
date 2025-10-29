"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.productsCreatedHookHandler = void 0;
const utils_1 = require("@medusajs/framework/utils");
const products_1 = require("../../../shared/infra/http/utils/products");
const workflows_1 = require("../../../workflows/attribute/workflows");
const productsCreatedHookHandler = async ({ products, additional_data, container, }) => {
    const attributeValues = (additional_data?.values ??
        []);
    if (!attributeValues.length) {
        return [];
    }
    for (const product of products) {
        const requiredAttributes = (await (0, products_1.getApplicableAttributes)(container, product.id, [
            "id",
            "name",
            "is_required",
        ])).filter((attr) => attr.is_required);
        const missingAttributes = (0, utils_1.arrayDifference)(requiredAttributes.map((attr) => attr.id), attributeValues.map((attr) => attr.attribute_id));
        if (missingAttributes.length) {
            throw new utils_1.MedusaError(utils_1.MedusaError.Types.INVALID_DATA, `Missing required attributes for product ${product.title}: ${missingAttributes.join(", ")}`);
        }
        for (const attrVal of attributeValues) {
            await (0, workflows_1.createAttributeValueWorkflow)(container).run({
                input: {
                    attribute_id: attrVal.attribute_id,
                    value: attrVal.value,
                    product_id: product.id,
                },
            });
        }
    }
};
exports.productsCreatedHookHandler = productsCreatedHookHandler;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdHMtY3JlYXRlZC1oYW5kbGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vc3JjL3dvcmtmbG93cy9hdHRyaWJ1dGUvdXRpbHMvcHJvZHVjdHMtY3JlYXRlZC1oYW5kbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUNBLHFEQUF5RTtBQUl6RSx3RUFBb0Y7QUFDcEYsc0VBQXNGO0FBRS9FLE1BQU0sMEJBQTBCLEdBQUcsS0FBSyxFQUFFLEVBQy9DLFFBQVEsRUFDUixlQUFlLEVBQ2YsU0FBUyxHQUtWLEVBQUUsRUFBRTtJQUNILE1BQU0sZUFBZSxHQUFHLENBQUMsZUFBZSxFQUFFLE1BQU07UUFDOUMsRUFBRSxDQUErQixDQUFDO0lBRXBDLElBQUksQ0FBQyxlQUFlLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDNUIsT0FBTyxFQUFFLENBQUM7SUFDWixDQUFDO0lBRUQsS0FBSyxNQUFNLE9BQU8sSUFBSSxRQUFRLEVBQUUsQ0FBQztRQUMvQixNQUFNLGtCQUFrQixHQUFHLENBQ3pCLE1BQU0sSUFBQSxrQ0FBdUIsRUFBQyxTQUFTLEVBQUUsT0FBTyxDQUFDLEVBQUUsRUFBRTtZQUNuRCxJQUFJO1lBQ0osTUFBTTtZQUNOLGFBQWE7U0FDZCxDQUFDLENBQ0gsQ0FBQyxNQUFNLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUVyQyxNQUFNLGlCQUFpQixHQUFHLElBQUEsdUJBQWUsRUFDdkMsa0JBQWtCLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQ3pDLGVBQWUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FDakQsQ0FBQztRQUVGLElBQUksaUJBQWlCLENBQUMsTUFBTSxFQUFFLENBQUM7WUFDN0IsTUFBTSxJQUFJLG1CQUFXLENBQ25CLG1CQUFXLENBQUMsS0FBSyxDQUFDLFlBQVksRUFDOUIsMkNBQTJDLE9BQU8sQ0FBQyxLQUFLLEtBQUssaUJBQWlCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQzVGLENBQUM7UUFDSixDQUFDO1FBRUQsS0FBSyxNQUFNLE9BQU8sSUFBSSxlQUFlLEVBQUUsQ0FBQztZQUN0QyxNQUFNLElBQUEsd0NBQTRCLEVBQUMsU0FBUyxDQUFDLENBQUMsR0FBRyxDQUFDO2dCQUNoRCxLQUFLLEVBQUU7b0JBQ0wsWUFBWSxFQUFFLE9BQU8sQ0FBQyxZQUFZO29CQUNsQyxLQUFLLEVBQUUsT0FBTyxDQUFDLEtBQUs7b0JBQ3BCLFVBQVUsRUFBRSxPQUFPLENBQUMsRUFBRTtpQkFDdkI7YUFDRixDQUFDLENBQUM7UUFDTCxDQUFDO0lBQ0gsQ0FBQztBQUNILENBQUMsQ0FBQztBQS9DVyxRQUFBLDBCQUEwQiw4QkErQ3JDIn0=