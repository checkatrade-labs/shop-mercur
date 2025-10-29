"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateConfigurationRuleWorkflow = void 0;
const workflows_sdk_1 = require("@medusajs/workflows-sdk");
const update_configuration_rule_1 = require("../steps/update-configuration-rule");
exports.updateConfigurationRuleWorkflow = (0, workflows_sdk_1.createWorkflow)('update-configuration-rule', function (input) {
    return new workflows_sdk_1.WorkflowResponse((0, update_configuration_rule_1.updateConfigurationRuleStep)(input));
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXBkYXRlLWNvbmZpZ3VyYXRpb24tcnVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy93b3JrZmxvd3MvY29uZmlndXJhdGlvbi93b3JrZmxvd3MvdXBkYXRlLWNvbmZpZ3VyYXRpb24tcnVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSwyREFBMEU7QUFJMUUsa0ZBQWdGO0FBRW5FLFFBQUEsK0JBQStCLEdBQUcsSUFBQSw4QkFBYyxFQUMzRCwyQkFBMkIsRUFDM0IsVUFBVSxLQUFpQztJQUN6QyxPQUFPLElBQUksZ0NBQWdCLENBQUMsSUFBQSx1REFBMkIsRUFBQyxLQUFLLENBQUMsQ0FBQyxDQUFBO0FBQ2pFLENBQUMsQ0FDRixDQUFBIn0=