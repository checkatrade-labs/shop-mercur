"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateProductStatusWorkflow = exports.updateProductStatusStep = void 0;
const utils_1 = require("@medusajs/framework/utils");
const workflows_sdk_1 = require("@medusajs/workflows-sdk");
exports.updateProductStatusStep = (0, workflows_sdk_1.createStep)("update-product-status", async (input, { container }) => {
    const service = container.resolve(utils_1.Modules.PRODUCT);
    const knex = container.resolve("__pg_connection__");
    await knex("product").where("id", input.id).update({
        status: input.status,
    });
    const product = await service.retrieveProduct(input.id);
    return new workflows_sdk_1.StepResponse(product, product.id);
});
exports.updateProductStatusWorkflow = (0, workflows_sdk_1.createWorkflow)("update-product-status", function (input) {
    return new workflows_sdk_1.WorkflowResponse((0, exports.updateProductStatusStep)(input));
});
//# sourceMappingURL=update-product-status.js.map