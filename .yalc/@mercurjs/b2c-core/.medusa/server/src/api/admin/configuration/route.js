"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.POST = exports.GET = void 0;
const utils_1 = require("@medusajs/framework/utils");
const workflows_1 = require("../../../workflows/configuration/workflows");
/**
 * @oas [get] /admin/configuration
 * operationId: "AdminListRules"
 * summary: "List rules"
 * description: "Retrieves rules list"
 * x-authenticated: true
 * parameters:
 *   - name: offset
 *     in: query
 *     schema:
 *       type: number
 *     required: false
 *     description: The number of items to skip before starting to collect the result set.
 *   - name: limit
 *     in: query
 *     schema:
 *       type: number
 *     required: false
 *     description: The number of items to return.
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
 *             count:
 *               type: integer
 *               description: The total number of requests
 *             offset:
 *               type: integer
 *               description: The number of requests skipped
 *             limit:
 *               type: integer
 *               description: The number of requests per page
 * tags:
 *   - Admin Configuration
 * security:
 *   - api_token: []
 *   - cookie_auth: []
 */
const GET = async (req, res) => {
    const query = req.scope.resolve(utils_1.ContainerRegistrationKeys.QUERY);
    const { data: configuration_rules, metadata } = await query.graph({
        entity: 'configuration_rule',
        fields: ['id', 'rule_type', 'is_enabled'],
        pagination: req.queryConfig.pagination
    });
    res.json({
        configuration_rules,
        count: metadata?.count,
        offset: metadata?.skip,
        limit: metadata?.take
    });
};
exports.GET = GET;
/**
 * @oas [post] /admin/configuration
 * operationId: "AdminCreateRule"
 * summary: "Create a configuration rule"
 * description: "Creates a request to admin to accept new resource"
 * x-authenticated: true
 * requestBody:
 *   content:
 *     application/json:
 *       schema:
 *         $ref: "#/components/schemas/AdminCreateRule"
 * responses:
 *   "201":
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
    const { result: configuration_rule } = await workflows_1.createConfigurationRuleWorkflow.run({
        container: req.scope,
        input: req.validatedBody
    });
    res.status(201).json({ configuration_rule });
};
exports.POST = POST;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvYXBpL2FkbWluL2NvbmZpZ3VyYXRpb24vcm91dGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQ0EscURBQXFFO0FBRXJFLDBFQUE0RjtBQUc1Rjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBNkNHO0FBQ0ksTUFBTSxHQUFHLEdBQUcsS0FBSyxFQUFFLEdBQWtCLEVBQUUsR0FBbUIsRUFBRSxFQUFFO0lBQ25FLE1BQU0sS0FBSyxHQUFHLEdBQUcsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLGlDQUF5QixDQUFDLEtBQUssQ0FBQyxDQUFBO0lBRWhFLE1BQU0sRUFBRSxJQUFJLEVBQUUsbUJBQW1CLEVBQUUsUUFBUSxFQUFFLEdBQUcsTUFBTSxLQUFLLENBQUMsS0FBSyxDQUFDO1FBQ2hFLE1BQU0sRUFBRSxvQkFBb0I7UUFDNUIsTUFBTSxFQUFFLENBQUMsSUFBSSxFQUFFLFdBQVcsRUFBRSxZQUFZLENBQUM7UUFDekMsVUFBVSxFQUFFLEdBQUcsQ0FBQyxXQUFXLENBQUMsVUFBVTtLQUN2QyxDQUFDLENBQUE7SUFFRixHQUFHLENBQUMsSUFBSSxDQUFDO1FBQ1AsbUJBQW1CO1FBQ25CLEtBQUssRUFBRSxRQUFRLEVBQUUsS0FBSztRQUN0QixNQUFNLEVBQUUsUUFBUSxFQUFFLElBQUk7UUFDdEIsS0FBSyxFQUFFLFFBQVEsRUFBRSxJQUFJO0tBQ3RCLENBQUMsQ0FBQTtBQUNKLENBQUMsQ0FBQTtBQWZZLFFBQUEsR0FBRyxPQWVmO0FBRUQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBMEJHO0FBQ0ksTUFBTSxJQUFJLEdBQUcsS0FBSyxFQUN2QixHQUF1QyxFQUN2QyxHQUFtQixFQUNuQixFQUFFO0lBQ0YsTUFBTSxFQUFFLE1BQU0sRUFBRSxrQkFBa0IsRUFBRSxHQUNsQyxNQUFNLDJDQUErQixDQUFDLEdBQUcsQ0FBQztRQUN4QyxTQUFTLEVBQUUsR0FBRyxDQUFDLEtBQUs7UUFDcEIsS0FBSyxFQUFFLEdBQUcsQ0FBQyxhQUFhO0tBQ3pCLENBQUMsQ0FBQTtJQUVKLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsa0JBQWtCLEVBQUUsQ0FBQyxDQUFBO0FBQzlDLENBQUMsQ0FBQTtBQVhZLFFBQUEsSUFBSSxRQVdoQiJ9