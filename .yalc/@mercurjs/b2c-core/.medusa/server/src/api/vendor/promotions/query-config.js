"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.listRuleValueTransformQueryConfig = exports.vendorRuleTransformQueryConfig = exports.defaultVendorPromotionRuleFields = exports.vendorPromotionQueryConfig = exports.vendorPromotionFields = void 0;
exports.vendorPromotionFields = [
    'id',
    'code',
    'is_automatic',
    'type',
    'created_at',
    'updated_at',
    'deleted_at',
    '*campaign',
    '*campaign.budget',
    '*application_method',
    '*application_method.target_rules',
    'application_method.target_rules.values.value',
    'rules.id',
    'rules.attribute',
    'rules.operator',
    'rules.values.value'
];
exports.vendorPromotionQueryConfig = {
    list: {
        defaults: exports.vendorPromotionFields,
        isList: true
    },
    retrieve: {
        defaults: exports.vendorPromotionFields,
        isList: false
    }
};
exports.defaultVendorPromotionRuleFields = [
    'id',
    'description',
    'attribute',
    'operator',
    'values.value'
];
exports.vendorRuleTransformQueryConfig = {
    list: {
        defaults: exports.defaultVendorPromotionRuleFields,
        isList: true
    },
    retrieve: {
        defaults: exports.defaultVendorPromotionRuleFields,
        isList: false
    }
};
exports.listRuleValueTransformQueryConfig = {
    defaults: [],
    allowed: [],
    isList: true
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicXVlcnktY29uZmlnLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2FwaS92ZW5kb3IvcHJvbW90aW9ucy9xdWVyeS1jb25maWcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQWEsUUFBQSxxQkFBcUIsR0FBRztJQUNuQyxJQUFJO0lBQ0osTUFBTTtJQUNOLGNBQWM7SUFDZCxNQUFNO0lBQ04sWUFBWTtJQUNaLFlBQVk7SUFDWixZQUFZO0lBQ1osV0FBVztJQUNYLGtCQUFrQjtJQUNsQixxQkFBcUI7SUFDckIsa0NBQWtDO0lBQ2xDLDhDQUE4QztJQUM5QyxVQUFVO0lBQ1YsaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQixvQkFBb0I7Q0FDckIsQ0FBQTtBQUVZLFFBQUEsMEJBQTBCLEdBQUc7SUFDeEMsSUFBSSxFQUFFO1FBQ0osUUFBUSxFQUFFLDZCQUFxQjtRQUMvQixNQUFNLEVBQUUsSUFBSTtLQUNiO0lBQ0QsUUFBUSxFQUFFO1FBQ1IsUUFBUSxFQUFFLDZCQUFxQjtRQUMvQixNQUFNLEVBQUUsS0FBSztLQUNkO0NBQ0YsQ0FBQTtBQUVZLFFBQUEsZ0NBQWdDLEdBQUc7SUFDOUMsSUFBSTtJQUNKLGFBQWE7SUFDYixXQUFXO0lBQ1gsVUFBVTtJQUNWLGNBQWM7Q0FDZixDQUFBO0FBRVksUUFBQSw4QkFBOEIsR0FBRztJQUM1QyxJQUFJLEVBQUU7UUFDSixRQUFRLEVBQUUsd0NBQWdDO1FBQzFDLE1BQU0sRUFBRSxJQUFJO0tBQ2I7SUFDRCxRQUFRLEVBQUU7UUFDUixRQUFRLEVBQUUsd0NBQWdDO1FBQzFDLE1BQU0sRUFBRSxLQUFLO0tBQ2Q7Q0FDRixDQUFBO0FBRVksUUFBQSxpQ0FBaUMsR0FBRztJQUMvQyxRQUFRLEVBQUUsRUFBRTtJQUNaLE9BQU8sRUFBRSxFQUFFO0lBQ1gsTUFBTSxFQUFFLElBQUk7Q0FDYixDQUFBIn0=