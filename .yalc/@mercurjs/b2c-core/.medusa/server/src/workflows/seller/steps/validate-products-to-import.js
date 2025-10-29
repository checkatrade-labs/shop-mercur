"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateProductsToImportStep = void 0;
const zod_1 = require("zod");
const workflows_sdk_1 = require("@medusajs/framework/workflows-sdk");
const validators_1 = require("../../../api/vendor/products/validators");
exports.validateProductsToImportStep = (0, workflows_sdk_1.createStep)('validate-products-to-import', async (products) => {
    const toCreate = products.map((product) => ({
        ...validators_1.CreateProduct.extend({
            status: zod_1.z.string().optional()
        }).parse(product),
        status: 'proposed'
    }));
    return new workflows_sdk_1.StepResponse(toCreate);
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsaWRhdGUtcHJvZHVjdHMtdG8taW1wb3J0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vc3JjL3dvcmtmbG93cy9zZWxsZXIvc3RlcHMvdmFsaWRhdGUtcHJvZHVjdHMtdG8taW1wb3J0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLDZCQUF1QjtBQUd2QixxRUFBNEU7QUFFNUUsd0VBQXVFO0FBRTFELFFBQUEsNEJBQTRCLEdBQUcsSUFBQSwwQkFBVSxFQUNwRCw2QkFBNkIsRUFDN0IsS0FBSyxFQUFFLFFBQW1CLEVBQUUsRUFBRTtJQUM1QixNQUFNLFFBQVEsR0FBRyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUMsT0FBTyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQzFDLEdBQUcsMEJBQWEsQ0FBQyxNQUFNLENBQUM7WUFDdEIsTUFBTSxFQUFFLE9BQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxRQUFRLEVBQUU7U0FDOUIsQ0FBQyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUM7UUFDakIsTUFBTSxFQUFFLFVBQTJCO0tBQ3BDLENBQUMsQ0FBQyxDQUFBO0lBRUgsT0FBTyxJQUFJLDRCQUFZLENBQUMsUUFBUSxDQUFDLENBQUE7QUFDbkMsQ0FBQyxDQUNGLENBQUEifQ==