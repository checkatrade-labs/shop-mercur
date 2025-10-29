"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createWishlistEntryWorkflow = void 0;
const workflows_sdk_1 = require("@medusajs/framework/workflows-sdk");
const steps_1 = require("../steps");
exports.createWishlistEntryWorkflow = (0, workflows_sdk_1.createWorkflow)({
    name: 'create-wishlist'
}, function (input) {
    return new workflows_sdk_1.WorkflowResponse((0, steps_1.createWishlistEntryStep)(input));
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JlYXRlLXdpc2hsaXN0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vc3JjL3dvcmtmbG93cy93aXNobGlzdC93b3JrZmxvd3MvY3JlYXRlLXdpc2hsaXN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLHFFQUcwQztBQUkxQyxvQ0FBa0Q7QUFFckMsUUFBQSwyQkFBMkIsR0FBRyxJQUFBLDhCQUFjLEVBQ3ZEO0lBQ0UsSUFBSSxFQUFFLGlCQUFpQjtDQUN4QixFQUNELFVBQVUsS0FBd0I7SUFDaEMsT0FBTyxJQUFJLGdDQUFnQixDQUFDLElBQUEsK0JBQXVCLEVBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQTtBQUM3RCxDQUFDLENBQ0YsQ0FBQSJ9