"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GET = void 0;
const utils_1 = require("@medusajs/framework/utils");
const operators_map_1 = require("@medusajs/medusa/api/admin/promotions/utils/operators-map");
const rule_attributes_map_1 = require("@medusajs/medusa/api/admin/promotions/utils/rule-attributes-map");
const rule_query_configuration_1 = require("@medusajs/medusa/api/admin/promotions/utils/rule-query-configuration");
const validate_rule_type_1 = require("@medusajs/medusa/api/admin/promotions/utils/validate-rule-type");
/**
 * @oas [get] /vendor/promotions/{id}/{rule_type}
 * operationId: VendorGetPromotionsIdRuleType
 * summary: List Rules of a Promotion
 * description: Retrieve a list of rules in a promotion.
 * x-authenticated: true
 * parameters:
 *   - name: id
 *     in: path
 *     description: The promotion's ID.
 *     required: true
 *     schema:
 *       type: string
 *   - name: rule_type
 *     in: path
 *     description: The type of rules to retrieve.
 *     required: true
 *     schema:
 *       type: string
 *       enum:
 *         - rules
 *         - target-rules
 *         - buy-rules
 *   - name: fields
 *     in: query
 *     description: Comma-separated fields that should be included in the returned data. if a field is prefixed with `+` it will be added to the default fields, using `-` will remove it from the default
 *       fields. without prefix it will replace the entire default fields.
 *     required: false
 *     schema:
 *       type: string
 *       title: fields
 *       description: Comma-separated fields that should be included in the returned data. if a field is prefixed with `+` it will be added to the default fields, using `-` will remove it from the default
 *         fields. without prefix it will replace the entire default fields.
 * security:
 *   - api_token: []
 *   - cookie_auth: []
 *   - jwt_token: []
 * tags:
 *   - Vendor Promotions
 * responses:
 *   "200":
 *     description: OK
 *     content:
 *       application/json:
 *         schema:
 *           type: object
 *           description: The list of promotion rules.
 *           properties:
 *             rules:
 *               type: array
 *               description: The list of promotion rules.
 *               items:
 *                 $ref: "#/components/schemas/VendorPromotionRule"
 */
const GET = async (req, res) => {
    const { id, rule_type: ruleType } = req.params;
    const remoteQuery = req.scope.resolve(utils_1.ContainerRegistrationKeys.REMOTE_QUERY);
    (0, validate_rule_type_1.validateRuleType)(ruleType);
    const dasherizedRuleType = ruleType.split('-').join('_');
    const queryObject = (0, utils_1.remoteQueryObjectFromString)({
        entryPoint: 'promotion',
        variables: { id },
        fields: req.queryConfig.fields
    });
    const [promotion] = await remoteQuery(queryObject);
    const ruleAttributes = (0, rule_attributes_map_1.getRuleAttributesMap)({
        promotionType: promotion?.type || req.query.promotion_type,
        applicationMethodType: promotion?.application_method?.type || req.query.application_method_type
    })[ruleType];
    const promotionRules = [];
    if (dasherizedRuleType === utils_1.RuleType.RULES) {
        promotionRules.push(...(promotion?.rules || []));
    }
    else if (dasherizedRuleType === utils_1.RuleType.TARGET_RULES) {
        promotionRules.push(...(promotion?.application_method?.target_rules || []));
    }
    else if (dasherizedRuleType === utils_1.RuleType.BUY_RULES) {
        promotionRules.push(...(promotion?.application_method?.buy_rules || []));
    }
    const transformedRules = [];
    const disguisedRules = ruleAttributes.filter((attr) => !!attr.disguised);
    for (const disguisedRule of disguisedRules) {
        const getValues = () => {
            const value = promotion?.application_method?.[disguisedRule.id];
            if (disguisedRule.field_type === 'number') {
                return value;
            }
            if (value) {
                return [{ label: value, value }];
            }
            return [];
        };
        const required = disguisedRule.required ?? true;
        const applicationMethod = promotion?.application_method;
        const recordValue = applicationMethod?.[disguisedRule.id];
        if (required || recordValue) {
            transformedRules.push({
                ...disguisedRule,
                id: undefined,
                attribute: disguisedRule.id,
                attribute_label: disguisedRule.label,
                operator: utils_1.RuleOperator.EQ,
                operator_label: operators_map_1.operatorsMap[utils_1.RuleOperator.EQ].label,
                value: undefined,
                values: getValues()
            });
        }
        continue;
    }
    for (const promotionRule of [...promotionRules, ...transformedRules]) {
        const currentRuleAttribute = ruleAttributes.find((attr) => attr.value === promotionRule.attribute ||
            attr.value === promotionRule.attribute);
        if (!currentRuleAttribute) {
            continue;
        }
        const queryConfig = rule_query_configuration_1.ruleQueryConfigurations[currentRuleAttribute.id];
        if (!queryConfig) {
            continue;
        }
        const rows = await remoteQuery((0, utils_1.remoteQueryObjectFromString)({
            entryPoint: queryConfig.entryPoint,
            variables: {
                filters: {
                    [queryConfig.valueAttr]: promotionRule.values?.map((v) => v.value)
                }
            },
            fields: [queryConfig.labelAttr, queryConfig.valueAttr]
        }));
        const valueLabelMap = new Map(rows.map((row) => [
            row[queryConfig.valueAttr],
            row[queryConfig.labelAttr]
        ]));
        promotionRule.values =
            promotionRule.values?.map((value) => ({
                value: value.value,
                label: valueLabelMap.get(value.value) || value.value
            })) || promotionRule.values;
        if (!currentRuleAttribute.hydrate) {
            transformedRules.push({
                ...currentRuleAttribute,
                ...promotionRule,
                attribute_label: currentRuleAttribute.label,
                operator_label: operators_map_1.operatorsMap[promotionRule.operator]?.label || promotionRule.operator
            });
        }
    }
    res.json({
        rules: transformedRules
    });
};
exports.GET = GET;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvYXBpL3ZlbmRvci9wcm9tb3Rpb25zL1tpZF0vW3J1bGVfdHlwZV0vcm91dGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBS0EscURBS2tDO0FBQ2xDLDZGQUF3RjtBQUN4Rix5R0FBc0c7QUFDdEcsbUhBQThHO0FBQzlHLHVHQUFpRztBQUVqRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0FxREc7QUFFSSxNQUFNLEdBQUcsR0FBRyxLQUFLLEVBQ3RCLEdBQStCLEVBQy9CLEdBQW1CLEVBQ25CLEVBQUU7SUFDRixNQUFNLEVBQUUsRUFBRSxFQUFFLFNBQVMsRUFBRSxRQUFRLEVBQUUsR0FBRyxHQUFHLENBQUMsTUFBTSxDQUFBO0lBQzlDLE1BQU0sV0FBVyxHQUFHLEdBQUcsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLGlDQUF5QixDQUFDLFlBQVksQ0FBQyxDQUFBO0lBRTdFLElBQUEscUNBQWdCLEVBQUMsUUFBUSxDQUFDLENBQUE7SUFFMUIsTUFBTSxrQkFBa0IsR0FBRyxRQUFRLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQTtJQUN4RCxNQUFNLFdBQVcsR0FBRyxJQUFBLG1DQUEyQixFQUFDO1FBQzlDLFVBQVUsRUFBRSxXQUFXO1FBQ3ZCLFNBQVMsRUFBRSxFQUFFLEVBQUUsRUFBRTtRQUNqQixNQUFNLEVBQUUsR0FBRyxDQUFDLFdBQVcsQ0FBQyxNQUFNO0tBQy9CLENBQUMsQ0FBQTtJQUVGLE1BQU0sQ0FBQyxTQUFTLENBQUMsR0FBRyxNQUFNLFdBQVcsQ0FBQyxXQUFXLENBQUMsQ0FBQTtJQUNsRCxNQUFNLGNBQWMsR0FBRyxJQUFBLDBDQUFvQixFQUFDO1FBQzFDLGFBQWEsRUFBRSxTQUFTLEVBQUUsSUFBSSxJQUFJ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