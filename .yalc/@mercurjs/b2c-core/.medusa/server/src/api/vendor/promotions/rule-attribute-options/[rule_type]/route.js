"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GET = void 0;
const validate_rule_type_1 = require("@medusajs/medusa/api/admin/promotions/utils/validate-rule-type");
const utils_1 = require("../../utils");
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
    const { rule_type: ruleType } = req.params;
    (0, validate_rule_type_1.validateRuleType)(ruleType);
    const attributes = (0, utils_1.getRuleAttributesMap)({
        promotionType: req.query.promotion_type,
        applicationMethodType: req.query.application_method_type
    })[ruleType] || [];
    res.json({
        attributes
    });
};
exports.GET = GET;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvYXBpL3ZlbmRvci9wcm9tb3Rpb25zL3J1bGUtYXR0cmlidXRlLW9wdGlvbnMvW3J1bGVfdHlwZV0vcm91dGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQ0EsdUdBQWlHO0FBRWpHLHVDQUFrRDtBQUVsRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQTZERztBQUNJLE1BQU0sR0FBRyxHQUFHLEtBQUssRUFDdEIsR0FBK0IsRUFDL0IsR0FBbUIsRUFDbkIsRUFBRTtJQUNGLE1BQU0sRUFBRSxTQUFTLEVBQUUsUUFBUSxFQUFFLEdBQUcsR0FBRyxDQUFDLE1BQU0sQ0FBQTtJQUUxQyxJQUFBLHFDQUFnQixFQUFDLFFBQVEsQ0FBQyxDQUFBO0lBRTFCLE1BQU0sVUFBVSxHQUNkLElBQUEsNEJBQW9CLEVBQUM7UUFDbkIsYUFBYSxFQUFFLEdBQUcsQ0FBQyxLQUFLLENBQUMsY0FBd0I7UUFDakQscUJBQXFCLEVBQUUsR0FBRyxDQUFDLEtBQUssQ0FBQyx1QkFBaUM7S0FDbkUsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQTtJQUVwQixHQUFHLENBQUMsSUFBSSxDQUFDO1FBQ1AsVUFBVTtLQUNYLENBQUMsQ0FBQTtBQUNKLENBQUMsQ0FBQTtBQWpCWSxRQUFBLEdBQUcsT0FpQmYifQ==