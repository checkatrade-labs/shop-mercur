"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("@medusajs/framework/utils");
const models_1 = require("./models");
const framework_1 = require("@mercurjs/framework");
class ConfigurationModuleService extends (0, utils_1.MedusaService)({
    ConfigurationRule: models_1.ConfigurationRule,
}) {
    async isRuleEnabled(type) {
        const [rule] = await this.listConfigurationRules({
            rule_type: type,
        });
        return rule ? rule.is_enabled : framework_1.ConfigurationRuleDefaults.get(type);
    }
}
exports.default = ConfigurationModuleService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9tb2R1bGVzL2NvbmZpZ3VyYXRpb24vc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHFEQUEwRDtBQUUxRCxxQ0FBNkM7QUFDN0MsbURBRzZCO0FBRTdCLE1BQU0sMEJBQTJCLFNBQVEsSUFBQSxxQkFBYSxFQUFDO0lBQ3JELGlCQUFpQixFQUFqQiwwQkFBaUI7Q0FDbEIsQ0FBQztJQUNBLEtBQUssQ0FBQyxhQUFhLENBQUMsSUFBMkI7UUFDN0MsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLE1BQU0sSUFBSSxDQUFDLHNCQUFzQixDQUFDO1lBQy9DLFNBQVMsRUFBRSxJQUFJO1NBQ2hCLENBQUMsQ0FBQztRQUNILE9BQU8sSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxxQ0FBeUIsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFFLENBQUM7SUFDdkUsQ0FBQztDQUNGO0FBRUQsa0JBQWUsMEJBQTBCLENBQUMifQ==