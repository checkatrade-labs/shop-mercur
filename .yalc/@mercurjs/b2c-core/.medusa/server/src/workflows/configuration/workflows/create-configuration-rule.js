"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createConfigurationRuleWorkflow = void 0;
const workflows_sdk_1 = require("@medusajs/workflows-sdk");
const steps_1 = require("../steps");
exports.createConfigurationRuleWorkflow = (0, workflows_sdk_1.createWorkflow)('create-configuration-rule', function (input) {
    return new workflows_sdk_1.WorkflowResponse((0, steps_1.createConfigurationRuleStep)(input));
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JlYXRlLWNvbmZpZ3VyYXRpb24tcnVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy93b3JrZmxvd3MvY29uZmlndXJhdGlvbi93b3JrZmxvd3MvY3JlYXRlLWNvbmZpZ3VyYXRpb24tcnVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSwyREFBMEU7QUFJMUUsb0NBQXNEO0FBRXpDLFFBQUEsK0JBQStCLEdBQUcsSUFBQSw4QkFBYyxFQUMzRCwyQkFBMkIsRUFDM0IsVUFBVSxLQUFpQztJQUN6QyxPQUFPLElBQUksZ0NBQWdCLENBQUMsSUFBQSxtQ0FBMkIsRUFBQyxLQUFLLENBQUMsQ0FBQyxDQUFBO0FBQ2pFLENBQUMsQ0FDRixDQUFBIn0=