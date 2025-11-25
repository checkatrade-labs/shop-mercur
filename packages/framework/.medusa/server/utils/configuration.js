"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkConfigurationRule = exports.ConfigurationRuleDefaults = void 0;
const utils_1 = require("@medusajs/framework/utils");
const types_1 = require("../types");
exports.ConfigurationRuleDefaults = new Map([
    [types_1.ConfigurationRuleType.GLOBAL_PRODUCT_CATALOG, false],
    [types_1.ConfigurationRuleType.PRODUCT_REQUEST_ENABLED, true],
    [types_1.ConfigurationRuleType.REQUIRE_PRODUCT_APPROVAL, false],
    [types_1.ConfigurationRuleType.PRODUCT_IMPORT_ENABLED, true],
]);
const checkConfigurationRule = async (scope, ruleType) => {
    const logger = scope.resolve(utils_1.ContainerRegistrationKeys.LOGGER);
    const query = scope.resolve(utils_1.ContainerRegistrationKeys.QUERY);
    let enabled = exports.ConfigurationRuleDefaults.get(ruleType) || false;
    try {
        const { data: [rule], } = await query.graph({
            entity: "configuration_rule",
            fields: ["is_enabled"],
            filters: {
                rule_type: ruleType,
            },
        });
        enabled = rule.is_enabled;
    }
    catch (error) {
        logger.error(`Error checking configuration rule ${ruleType}: ${error}`);
    }
    return enabled;
};
exports.checkConfigurationRule = checkConfigurationRule;
//# sourceMappingURL=configuration.js.map