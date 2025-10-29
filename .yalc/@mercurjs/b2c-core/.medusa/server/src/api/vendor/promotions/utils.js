"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getRuleAttributesMap = exports.DisguisedRule = exports.operatorsMap = void 0;
const utils_1 = require("@medusajs/framework/utils");
exports.operatorsMap = {
    [utils_1.RuleOperator.IN]: {
        id: utils_1.RuleOperator.IN,
        value: utils_1.RuleOperator.IN,
        label: 'In'
    },
    [utils_1.RuleOperator.EQ]: {
        id: utils_1.RuleOperator.EQ,
        value: utils_1.RuleOperator.EQ,
        label: 'Equals'
    },
    [utils_1.RuleOperator.NE]: {
        id: utils_1.RuleOperator.NE,
        value: utils_1.RuleOperator.NE,
        label: 'Not In'
    }
};
var DisguisedRule;
(function (DisguisedRule) {
    DisguisedRule["APPLY_TO_QUANTITY"] = "apply_to_quantity";
    DisguisedRule["BUY_RULES_MIN_QUANTITY"] = "buy_rules_min_quantity";
    DisguisedRule["CURRENCY_CODE"] = "currency_code";
})(DisguisedRule || (exports.DisguisedRule = DisguisedRule = {}));
const ruleAttributes = [
    {
        id: 'customer_group',
        value: 'customer.groups.id',
        label: 'Customer Group',
        required: false,
        field_type: 'multiselect',
        operators: Object.values(exports.operatorsMap)
    },
    {
        id: 'region',
        value: 'region.id',
        label: 'Region',
        required: false,
        field_type: 'multiselect',
        operators: Object.values(exports.operatorsMap)
    },
    {
        id: 'country',
        value: 'shipping_address.country_code',
        label: 'Country',
        required: false,
        field_type: 'multiselect',
        operators: Object.values(exports.operatorsMap)
    },
    {
        id: 'sales_channel',
        value: 'sales_channel_id',
        label: 'Sales Channel',
        required: false,
        field_type: 'multiselect',
        operators: Object.values(exports.operatorsMap)
    }
];
const commonAttributes = [
    {
        id: 'product',
        value: 'items.product.id',
        label: 'Product',
        required: false,
        field_type: 'multiselect',
        operators: [exports.operatorsMap['in'], exports.operatorsMap['eq']]
    }
];
const currencyRule = {
    id: DisguisedRule.CURRENCY_CODE,
    value: DisguisedRule.CURRENCY_CODE,
    label: 'Currency Code',
    field_type: 'select',
    required: true,
    disguised: true,
    hydrate: true,
    operators: [exports.operatorsMap[utils_1.RuleOperator.EQ]]
};
const buyGetBuyRules = [
    {
        id: DisguisedRule.BUY_RULES_MIN_QUANTITY,
        value: DisguisedRule.BUY_RULES_MIN_QUANTITY,
        label: 'Minimum quantity of items',
        field_type: 'number',
        required: true,
        disguised: true,
        operators: [exports.operatorsMap[utils_1.RuleOperator.EQ]]
    }
];
const buyGetTargetRules = [
    {
        id: DisguisedRule.APPLY_TO_QUANTITY,
        value: DisguisedRule.APPLY_TO_QUANTITY,
        label: 'Quantity of items promotion will apply to',
        field_type: 'number',
        required: true,
        disguised: true,
        operators: [exports.operatorsMap[utils_1.RuleOperator.EQ]]
    }
];
const getRuleAttributesMap = ({ promotionType, applicationMethodType }) => {
    const map = {
        rules: [...ruleAttributes],
        'target-rules': [...commonAttributes],
        'buy-rules': [...commonAttributes]
    };
    if (applicationMethodType === utils_1.ApplicationMethodType.FIXED) {
        map['rules'].push({ ...currencyRule });
    }
    else {
        map['rules'].push({ ...currencyRule, required: false });
    }
    if (promotionType === utils_1.PromotionType.BUYGET) {
        map['buy-rules'].push(...buyGetBuyRules);
        map['target-rules'].push(...buyGetTargetRules);
    }
    return map;
};
exports.getRuleAttributesMap = getRuleAttributesMap;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvYXBpL3ZlbmRvci9wcm9tb3Rpb25zL3V0aWxzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLHFEQUlrQztBQUVyQixRQUFBLFlBQVksR0FBRztJQUMxQixDQUFDLG9CQUFZLENBQUMsRUFBRSxDQUFDLEVBQUU7UUFDakIsRUFBRSxFQUFFLG9CQUFZLENBQUMsRUFBRTtRQUNuQixLQUFLLEVBQUUsb0JBQVksQ0FBQyxFQUFFO1FBQ3RCLEtBQUssRUFBRSxJQUFJO0tBQ1o7SUFDRCxDQUFDLG9CQUFZLENBQUMsRUFBRSxDQUFDLEVBQUU7UUFDakIsRUFBRSxFQUFFLG9CQUFZLENBQUMsRUFBRTtRQUNuQixLQUFLLEVBQUUsb0JBQVksQ0FBQyxFQUFFO1FBQ3RCLEtBQUssRUFBRSxRQUFRO0tBQ2hCO0lBQ0QsQ0FBQyxvQkFBWSxDQUFDLEVBQUUsQ0FBQyxFQUFFO1FBQ2pCLEVBQUUsRUFBRSxvQkFBWSxDQUFDLEVBQUU7UUFDbkIsS0FBSyxFQUFFLG9CQUFZLENBQUMsRUFBRTtRQUN0QixLQUFLLEVBQUUsUUFBUTtLQUNoQjtDQUNGLENBQUE7QUFFRCxJQUFZLGFBSVg7QUFKRCxXQUFZLGFBQWE7SUFDdkIsd0RBQXVDLENBQUE7SUFDdkMsa0VBQWlELENBQUE7SUFDakQsZ0RBQStCLENBQUE7QUFDakMsQ0FBQyxFQUpXLGFBQWEsNkJBQWIsYUFBYSxRQUl4QjtBQUVELE1BQU0sY0FBYyxHQUFHO0lBQ3JCO1FBQ0UsRUFBRSxFQUFFLGdCQUFnQjtRQUNwQixLQUFLLEVBQUUsb0JBQW9CO1FBQzNCLEtBQUssRUFBRSxnQkFBZ0I7UUFDdkIsUUFBUSxFQUFFLEtBQUs7UUFDZixVQUFVLEVBQUUsYUFBYTtRQUN6QixTQUFTLEVBQUUsTUFBTSxDQUFDLE1BQU0sQ0FBQyxvQkFBWSxDQUFDO0tBQ3ZDO0lBQ0Q7UUFDRSxFQUFFLEVBQUUsUUFBUTtR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