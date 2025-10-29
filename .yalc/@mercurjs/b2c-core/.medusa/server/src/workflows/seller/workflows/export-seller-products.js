"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.exportSellerProductsWorkflow = void 0;
const core_flows_1 = require("@medusajs/medusa/core-flows");
const workflows_sdk_1 = require("@medusajs/workflows-sdk");
const steps_1 = require("../steps");
exports.exportSellerProductsWorkflow = (0, workflows_sdk_1.createWorkflow)('export-seller-products', function (seller_id) {
    const products = (0, steps_1.getSellerProductsStep)(seller_id);
    const file = (0, core_flows_1.generateProductCsvStep)(products);
    const fileDetails = (0, core_flows_1.useRemoteQueryStep)({
        fields: ['id', 'url'],
        entry_point: 'file',
        variables: { id: file.id },
        list: false
    });
    return new workflows_sdk_1.WorkflowResponse(fileDetails);
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhwb3J0LXNlbGxlci1wcm9kdWN0cy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy93b3JrZmxvd3Mvc2VsbGVyL3dvcmtmbG93cy9leHBvcnQtc2VsbGVyLXByb2R1Y3RzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLDREQUdvQztBQUNwQywyREFBMEU7QUFFMUUsb0NBQWdEO0FBRW5DLFFBQUEsNEJBQTRCLEdBQUcsSUFBQSw4QkFBYyxFQUN4RCx3QkFBd0IsRUFDeEIsVUFBVSxTQUFpQjtJQUN6QixNQUFNLFFBQVEsR0FBRyxJQUFBLDZCQUFxQixFQUFDLFNBQVMsQ0FBQyxDQUFBO0lBRWpELE1BQU0sSUFBSSxHQUFHLElBQUEsbUNBQXNCLEVBQUMsUUFBUSxDQUFDLENBQUE7SUFDN0MsTUFBTSxXQUFXLEdBQUcsSUFBQSwrQkFBa0IsRUFBQztRQUNyQyxNQUFNLEVBQUUsQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDO1FBQ3JCLFdBQVcsRUFBRSxNQUFNO1FBQ25CLFNBQVMsRUFBRSxFQUFFLEVBQUUsRUFBRSxJQUFJLENBQUMsRUFBRSxFQUFFO1FBQzFCLElBQUksRUFBRSxLQUFLO0tBQ1osQ0FBQyxDQUFBO0lBRUYsT0FBTyxJQUFJLGdDQUFnQixDQUFDLFdBQVcsQ0FBQyxDQUFBO0FBQzFDLENBQUMsQ0FDRixDQUFBIn0=