"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GET = void 0;
const utils_1 = require("@medusajs/framework/utils");
const rule_query_configuration_1 = require("@medusajs/medusa/api/admin/promotions/utils/rule-query-configuration");
const validate_rule_attribute_1 = require("@medusajs/medusa/api/admin/promotions/utils/validate-rule-attribute");
const validate_rule_type_1 = require("@medusajs/medusa/api/admin/promotions/utils/validate-rule-type");
const seller_customer_group_1 = __importDefault(require("../../../../../../links/seller-customer-group"));
const seller_product_1 = __importDefault(require("../../../../../../links/seller-product"));
const utils_2 = require("../../../../../../shared/infra/http/utils");
/**
 * @oas [get] /vendor/promotions/rule-attribute-options/{rule_type}
 * operationId: VendorGetPromotionsRuleAttributeOptionsRule
 * summary: List Rule Attribute Options of a Rule Type
 * x-sidebar-summary: List Potential Rule Attributes
 * description: Retrieve a list of potential rule attributes for the promotion and application method types specified in the query parameters.
 * x-authenticated: true
 * parameters:
 *   - name: rule_type
 *     in: path
 *     description: The rule type.
 *     required: true
 *     schema:
 *       type: string
 *       enum:
 *         - rules
 *         - target-rules
 *         - buy-rules
 *   - name: promotion_type
 *     in: query
 *     description: The promotion type to retrieve rules for.
 *     required: false
 *     schema:
 *       type: string
 *       title: promotion_type
 *       description: The promotion type to retrieve rules for.
 *       enum:
 *         - standard
 *         - buyget
 *   - name: application_method_type
 *     in: query
 *     description: The application method type to retrieve rules for.
 *     required: false
 *     schema:
 *       type: string
 *       title: application_method_type
 *       description: The application method type to retrieve rules for.
 *       enum:
 *         - fixed
 *         - percentage
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
 *           description: The list of attributes.
 *           properties:
 *             attributes:
 *               type: array
 *               description: The list of attributes.
 *               items:
 *                 $ref: "#/components/schemas/VendorRuleAttributeOption"
 *
 */
const GET = async (req, res) => {
    const query = req.scope.resolve(utils_1.ContainerRegistrationKeys.QUERY);
    const { rule_type: ruleType, rule_attribute_id: ruleAttributeId, promotion_type: promotionType, application_method_type: applicationMethodType } = req.params;
    const queryConfig = rule_query_configuration_1.ruleQueryConfigurations[ruleAttributeId];
    const remoteQuery = req.scope.resolve(utils_1.ContainerRegistrationKeys.REMOTE_QUERY);
    const filterableFields = req.filterableFields;
    if (filterableFields.value) {
        filterableFields[queryConfig.valueAttr] = filterableFields.value;
        delete filterableFields.value;
    }
    (0, validate_rule_type_1.validateRuleType)(ruleType);
    (0, validate_rule_attribute_1.validateRuleAttribute)({
        promotionType,
        ruleType,
        ruleAttributeId,
        applicationMethodType
    });
    const seller = await (0, utils_2.fetchSellerByAuthActorId)(req.auth_context.actor_id, req.scope);
    if (queryConfig.entryPoint === 'product') {
        const { data: products } = await query.graph({
            entity: seller_product_1.default.entryPoint,
            fields: ['product_id'],
            filters: {
                seller_id: seller.id
            },
            withDeleted: true
        });
        filterableFields['id'] = products.map((p) => p.product_id);
    }
    if (queryConfig.entryPoint === 'customer_group') {
        const { data: groups } = await query.graph({
            entity: seller_customer_group_1.default.entryPoint,
            fields: ['customer_group_id'],
            filters: {
                seller_id: seller.id
            },
            withDeleted: true
        });
        filterableFields['id'] = groups.map((p) => p.customer_group_id);
    }
    const { rows } = await remoteQuery((0, utils_1.remoteQueryObjectFromString)({
        entryPoint: queryConfig.entryPoint,
        variables: {
            filters: filterableFields,
            ...req.queryConfig.pagination
        },
        fields: [queryConfig.labelAttr, queryConfig.valueAttr]
    }));
    const values = rows.map((r) => ({
        label: r[queryConfig.labelAttr],
        value: r[queryConfig.valueAttr]
    }));
    res.json({
        values
    });
};
exports.GET = GET;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvYXBpL3ZlbmRvci9wcm9tb3Rpb25zL3J1bGUtdmFsdWUtb3B0aW9ucy9bcnVsZV90eXBlXS9bcnVsZV9hdHRyaWJ1dGVfaWRdL3JvdXRlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUNBLHFEQUdrQztBQUNsQyxtSEFBOEc7QUFDOUcsaUhBQTJHO0FBQzNHLHVHQUFpRztBQUVqRywwR0FBK0U7QUFDL0UsNEZBQWtFO0FBQ2xFLHFFQUFvRjtBQUVwRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQTZERztBQUNJLE1BQU0sR0FBRyxHQUFHLEtBQUssRUFDdEIsR0FBK0IsRUFDL0IsR0FBbUIsRUFDbkIsRUFBRTtJQUNGLE1BQU0sS0FBSyxHQUFHLEdBQUcsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLGlDQUF5QixDQUFDLEtBQUssQ0FBQyxDQUFBO0lBQ2hFLE1BQU0sRUFDSixTQUFTLEVBQUUsUUFBUSxFQUNuQixpQkFBaUIsRUFBRSxlQUFlLEVBQ2xDLGNBQWMsRUFBRSxhQUFhLEVBQzdCLHVCQUF1QixFQUFFLHFCQUFxQixFQUMvQyxHQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUE7SUFDZCxNQUFNLFdBQVcsR0FBRyxrREFBdUIsQ0FBQyxlQUFlLENBQUMsQ0FBQTtJQUM1RCxNQUFNLFdBQVcsR0FBRyxHQUFHLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxpQ0FBeUIsQ0FBQyxZQUFZLENBQUMsQ0FBQTtJQUM3RSxNQUFNLGdCQUFnQixHQUFHLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQTtJQUU3QyxJQUFJLGdCQUFnQixDQUFDLEtBQUssRUFBRSxDQUFDO1FBQzNCLGdCQUFnQixDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsR0FBRyxnQkFBZ0IsQ0FBQyxLQUFL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