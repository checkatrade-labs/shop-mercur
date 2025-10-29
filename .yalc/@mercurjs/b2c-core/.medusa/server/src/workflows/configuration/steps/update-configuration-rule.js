"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateConfigurationRuleStep = void 0;
const workflows_sdk_1 = require("@medusajs/framework/workflows-sdk");
const configuration_1 = require("../../../modules/configuration");
exports.updateConfigurationRuleStep = (0, workflows_sdk_1.createStep)("update-configuration-rule", async (input, { container }) => {
    const service = container.resolve(configuration_1.CONFIGURATION_MODULE);
    const configuration_rule = await service.updateConfigurationRules(input);
    return new workflows_sdk_1.StepResponse(configuration_rule, configuration_rule.id);
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXBkYXRlLWNvbmZpZ3VyYXRpb24tcnVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy93b3JrZmxvd3MvY29uZmlndXJhdGlvbi9zdGVwcy91cGRhdGUtY29uZmlndXJhdGlvbi1ydWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLHFFQUE2RTtBQUU3RSxrRUFHd0M7QUFHM0IsUUFBQSwyQkFBMkIsR0FBRyxJQUFBLDBCQUFVLEVBQ25ELDJCQUEyQixFQUMzQixLQUFLLEVBQUUsS0FBaUMsRUFBRSxFQUFFLFNBQVMsRUFBRSxFQUFFLEVBQUU7SUFDekQsTUFBTSxPQUFPLEdBQ1gsU0FBUyxDQUFDLE9BQU8sQ0FBNkIsb0NBQW9CLENBQUMsQ0FBQztJQUV0RSxNQUFNLGtCQUFrQixHQUFHLE1BQU0sT0FBTyxDQUFDLHdCQUF3QixDQUFDLEtBQUssQ0FBQyxDQUFDO0lBRXpFLE9BQU8sSUFBSSw0QkFBWSxDQUFDLGtCQUFrQixFQUFFLGtCQUFrQixDQUFDLEVBQUUsQ0FBQyxDQUFDO0FBQ3JFLENBQUMsQ0FDRixDQUFDIn0=