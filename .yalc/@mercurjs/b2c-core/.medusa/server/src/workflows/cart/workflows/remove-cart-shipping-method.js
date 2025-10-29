"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.removeCartShippingMethodsWorkflow = void 0;
const workflows_sdk_1 = require("@medusajs/framework/workflows-sdk");
const core_flows_1 = require("@medusajs/medusa/core-flows");
exports.removeCartShippingMethodsWorkflow = (0, workflows_sdk_1.createWorkflow)('remove-cart-shipping-methods', function (input) {
    return new workflows_sdk_1.WorkflowResponse((0, core_flows_1.removeShippingMethodFromCartStep)(input));
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVtb3ZlLWNhcnQtc2hpcHBpbmctbWV0aG9kLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vc3JjL3dvcmtmbG93cy9jYXJ0L3dvcmtmbG93cy9yZW1vdmUtY2FydC1zaGlwcGluZy1tZXRob2QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEscUVBRzBDO0FBQzFDLDREQUE4RTtBQU1qRSxRQUFBLGlDQUFpQyxHQUFHLElBQUEsOEJBQWMsRUFDN0QsOEJBQThCLEVBQzlCLFVBQVUsS0FBbUI7SUFDM0IsT0FBTyxJQUFJLGdDQUFnQixDQUFDLElBQUEsNkNBQWdDLEVBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQTtBQUN0RSxDQUFDLENBQ0YsQ0FBQSJ9