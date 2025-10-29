"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.POST = void 0;
const workflows_1 = require("../../../../workflows/configuration/workflows");
/**
 * @oas [post] /admin/configuration/{id}
 * operationId: "AdminUpdateRule"
 * summary: "Update a configuration rule"
 * description: "Updates a rule"
 * x-authenticated: true
 * parameters:
 *   - in: path
 *     name: id
 *     required: true
 *     description: The ID of the Rule.
 *     schema:
 *       type: string
 * requestBody:
 *   content:
 *     application/json:
 *       schema:
 *         $ref: "#/components/schemas/AdminUpdateRule"
 * responses:
 *   "200":
 *     description: Created
 *     content:
 *       application/json:
 *         schema:
 *           type: object
 *           properties:
 *             configuration_rule:
 *               $ref: "#/components/schemas/ConfigurationRule"
 * tags:
 *   - Admin Configuration
 * security:
 *   - api_token: []
 *   - cookie_auth: []
 */
const POST = async (req, res) => {
    const { result: configuration_rule } = await workflows_1.updateConfigurationRuleWorkflow.run({
        container: req.scope,
        input: { ...req.validatedBody, id: req.params.id }
    });
    res.json({ configuration_rule });
};
exports.POST = POST;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvYXBpL2FkbWluL2NvbmZpZ3VyYXRpb24vW2lkXS9yb3V0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFFQSw2RUFBK0Y7QUFHL0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQWlDRztBQUNJLE1BQU0sSUFBSSxHQUFHLEtBQUssRUFDdkIsR0FBdUMsRUFDdkMsR0FBbUIsRUFDbkIsRUFBRTtJQUNGLE1BQU0sRUFBRSxNQUFNLEVBQUUsa0JBQWtCLEVBQUUsR0FDbEMsTUFBTSwyQ0FBK0IsQ0FBQyxHQUFHLENBQUM7UUFDeEMsU0FBUyxFQUFFLEdBQUcsQ0FBQyxLQUFLO1FBQ3BCLEtBQUssRUFBRSxFQUFFLEdBQUcsR0FBRyxDQUFDLGFBQWEsRUFBRSxFQUFFLEVBQUUsR0FBRyxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUU7S0FDbkQsQ0FBQyxDQUFBO0lBRUosR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFLGtCQUFrQixFQUFFLENBQUMsQ0FBQTtBQUNsQyxDQUFDLENBQUE7QUFYWSxRQUFBLElBQUksUUFXaEIifQ==