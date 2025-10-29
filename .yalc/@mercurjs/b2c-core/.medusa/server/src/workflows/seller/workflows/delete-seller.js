"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteSellerWorkflow = void 0;
const workflows_sdk_1 = require("@medusajs/workflows-sdk");
const steps_1 = require("../steps");
exports.deleteSellerWorkflow = (0, workflows_sdk_1.createWorkflow)('delete-seller', function (id) {
    (0, steps_1.deleteSellerStep)(id);
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVsZXRlLXNlbGxlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy93b3JrZmxvd3Mvc2VsbGVyL3dvcmtmbG93cy9kZWxldGUtc2VsbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLDJEQUF3RDtBQUV4RCxvQ0FBMkM7QUFFOUIsUUFBQSxvQkFBb0IsR0FBRyxJQUFBLDhCQUFjLEVBQ2hELGVBQWUsRUFDZixVQUFVLEVBQVU7SUFDbEIsSUFBQSx3QkFBZ0IsRUFBQyxFQUFFLENBQUMsQ0FBQTtBQUN0QixDQUFDLENBQ0YsQ0FBQSJ9