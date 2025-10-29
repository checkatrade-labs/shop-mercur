"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GET = void 0;
const utils_1 = require("@medusajs/framework/utils");
const configuration_1 = require("../../../modules/configuration");
/**
 * @oas [get] /vendor/configuration
 * operationId: "VendorListRules"
 * summary: "List rules"
 * description: "Retrieves marketplace rules list"
 * x-authenticated: true
 * responses:
 *   "200":
 *     description: OK
 *     content:
 *       application/json:
 *         schema:
 *           type: object
 *           properties:
 *             configuration_rules:
 *               type: array
 *               items:
 *                 $ref: "#/components/schemas/ConfigurationRule"
 * tags:
 *   - Vendor Configuration
 * security:
 *   - api_token: []
 *   - cookie_auth: []
 */
const GET = async (req, res) => {
    const query = req.scope.resolve(utils_1.ContainerRegistrationKeys.QUERY);
    const rules = {};
    configuration_1.ConfigurationRuleDefaults.forEach((val, key) => {
        rules[key] = val;
    });
    const { data: configuration_rules } = await query.graph({
        entity: "configuration_rule",
        fields: ["rule_type", "is_enabled"],
    });
    configuration_rules.forEach(({ rule_type, is_enabled }) => {
        rules[rule_type] = is_enabled;
    });
    res.json({
        configuration_rules: rules,
    });
};
exports.GET = GET;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvYXBpL3ZlbmRvci9jb25maWd1cmF0aW9uL3JvdXRlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUNBLHFEQUFzRTtBQUV0RSxrRUFBMkU7QUFFM0U7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBdUJHO0FBQ0ksTUFBTSxHQUFHLEdBQUcsS0FBSyxFQUFFLEdBQWtCLEVBQUUsR0FBbUIsRUFBRSxFQUFFO0lBQ25FLE1BQU0sS0FBSyxHQUFHLEdBQUcsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLGlDQUF5QixDQUFDLEtBQUssQ0FBQyxDQUFDO0lBRWpFLE1BQU0sS0FBSyxHQUFHLEVBQUUsQ0FBQztJQUNqQix5Q0FBeUIsQ0FBQyxPQUFPLENBQUMsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEVBQUU7UUFDN0MsS0FBSyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQztJQUNuQixDQUFDLENBQUMsQ0FBQztJQUVILE1BQU0sRUFBRSxJQUFJLEVBQUUsbUJBQW1CLEVBQUUsR0FBRyxNQUFNLEtBQUssQ0FBQyxLQUFLLENBQUM7UUFDdEQsTUFBTSxFQUFFLG9CQUFvQjtRQUM1QixNQUFNLEVBQUUsQ0FBQyxXQUFXLEVBQUUsWUFBWSxDQUFDO0tBQ3BDLENBQUMsQ0FBQztJQUVILG1CQUFtQixDQUFDLE9BQU8sQ0FBQyxDQUFDLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxFQUFFLEVBQUU7UUFDeEQsS0FBSyxDQUFDLFNBQVMsQ0FBQyxHQUFHLFVBQVUsQ0FBQztJQUNoQyxDQUFDLENBQUMsQ0FBQztJQUVILEdBQUcsQ0FBQyxJQUFJLENBQUM7UUFDUCxtQkFBbUIsRUFBRSxLQUFLO0tBQzNCLENBQUMsQ0FBQztBQUNMLENBQUMsQ0FBQztBQXBCVyxRQUFBLEdBQUcsT0FvQmQifQ==