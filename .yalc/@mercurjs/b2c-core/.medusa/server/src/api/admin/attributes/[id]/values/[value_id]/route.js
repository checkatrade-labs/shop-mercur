"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.POST = exports.GET = void 0;
const utils_1 = require("@medusajs/framework/utils");
const workflows_1 = require("../../../../../../workflows/attribute/workflows");
/**
 * @oas [get] /admin/attributes/{id}/values/{value_id}
 * operationId: "AdminGetAttributeValue"
 * summary: "Get Attribute Value"
 * description: "Retrieves a specific attribute possible value by its ID."
 * x-authenticated: true
 * parameters:
 *   - name: id
 *     in: path
 *     required: true
 *     schema:
 *       type: string
 *     description: The ID of the attribute.
 *   - name: value_id
 *     in: path
 *     required: true
 *     schema:
 *       type: string
 *     description: The ID of the attribute possible value.
 *   - name: fields
 *     in: query
 *     schema:
 *       type: string
 *     required: false
 *     description: Comma-separated fields to include in the response.
 * responses:
 *   "200":
 *     description: OK
 *     content:
 *       application/json:
 *         schema:
 *           type: object
 *           properties:
 *             attribute_possible_value:
 *               $ref: "#/components/schemas/AttributePossibleValue"
 *   "404":
 *     description: Not Found
 *     content:
 *       application/json:
 *         schema:
 *           type: object
 *           properties:
 *             message:
 *               type: string
 *               example: "Attribute possible value not found"
 * tags:
 *   - Admin Attributes
 * security:
 *   - api_token: []
 *   - cookie_auth: []
 */
const GET = async (req, res) => {
    const { value_id } = req.params;
    const query = req.scope.resolve(utils_1.ContainerRegistrationKeys.QUERY);
    const { data: [attribute_possible_value] } = await query.graph({
        entity: 'attribute_possible_value',
        ...req.queryConfig,
        filters: {
            ...req.filterableFields,
            id: value_id
        }
    }, { throwIfKeyNotFound: true });
    return res.json({ attribute_possible_value });
};
exports.GET = GET;
/**
 * @oas [post] /admin/attributes/{id}/values/{value_id}
 * operationId: "AdminUpdateAttributeValue"
 * summary: "Update Attribute Value"
 * description: "Updates an existing attribute possible value with the specified properties."
 * x-authenticated: true
 * parameters:
 *   - name: id
 *     in: path
 *     required: true
 *     schema:
 *       type: string
 *     description: The ID of the attribute.
 *   - name: value_id
 *     in: path
 *     required: true
 *     schema:
 *       type: string
 *     description: The ID of the attribute possible value to update.
 * requestBody:
 *   required: true
 *   content:
 *     application/json:
 *       schema:
 *         type: object
 *         properties:
 *           value:
 *             type: string
 *             description: The value of the possible value.
 *           rank:
 *             type: number
 *             description: The rank/order of the possible value.
 *           metadata:
 *             type: object
 *             description: Additional metadata for the possible value.
 * responses:
 *   "200":
 *     description: OK
 *     content:
 *       application/json:
 *         schema:
 *           type: object
 *           properties:
 *             attribute_possible_value:
 *               $ref: "#/components/schemas/AttributePossibleValue"
 *   "404":
 *     description: Not Found
 *     content:
 *       application/json:
 *         schema:
 *           type: object
 *           properties:
 *             message:
 *               type: string
 *               example: "Attribute possible value not found"
 * tags:
 *   - Admin Attributes
 * security:
 *   - api_token: []
 *   - cookie_auth: []
 */
const POST = async (req, res) => {
    const { value_id } = req.params;
    const query = req.scope.resolve(utils_1.ContainerRegistrationKeys.QUERY);
    await (0, workflows_1.updateAttributePossibleValueWorkflow)(req.scope).run({
        input: {
            ...req.validatedBody,
            id: value_id
        }
    });
    const { data: [attribute_possible_value] } = await query.graph({
        entity: 'attribute_possible_value',
        ...req.queryConfig,
        filters: {
            ...req.filterableFields,
            id: value_id
        }
    });
    return res.json({ attribute_possible_value });
};
exports.POST = POST;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvYXBpL2FkbWluL2F0dHJpYnV0ZXMvW2lkXS92YWx1ZXMvW3ZhbHVlX2lkXS9yb3V0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFDQSxxREFBcUU7QUFFckUsK0VBQXNHO0FBTXRHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQWtERztBQUNJLE1BQU0sR0FBRyxHQUFHLEtBQUssRUFDdEIsR0FBb0QsRUFDcEQsR0FBbUIsRUFDbkIsRUFBRTtJQUNGLE1BQU0sRUFBRSxRQUFRLEVBQUUsR0FBRyxHQUFHLENBQUMsTUFBTSxDQUFBO0lBQy9CLE1BQU0sS0FBSyxHQUFHLEdBQUcsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLGlDQUF5QixDQUFDLEtBQUssQ0FBQyxDQUFBO0lBRWhFLE1BQU0sRUFDSixJQUFJLEVBQUUsQ0FBQyx3QkFBd0IsQ0FBQyxFQUNqQyxHQUFHLE1BQU0sS0FBSyxDQUFDLEtBQUssQ0FDbkI7UUFDRSxNQUFNLEVBQUUsMEJBQTBCO1FBQ2xDLEdBQUcsR0FBRyxDQUFDLFdBQVc7UUFDbEIsT0FBTyxFQUFFO1lBQ1AsR0FBRyxHQUFHLENBQUMsZ0JBQWdCO1lBQ3ZCLEVBQUUsRUFBRSxRQUFRO1NBQ2I7S0FDRixFQUNELEVBQUUsa0JBQWtCLEVBQUUsSUFBSSxFQUFFLENBQzdCLENBQUE7SUFFRCxPQUFPLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRSx3QkFBd0IsRUFBRSxDQUFDLENBQUE7QUFDL0MsQ0FBQyxDQUFBO0FBdEJZLFFBQUEsR0FBRyxPQXNCZjtBQUVEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0E0REc7QUFDSSxNQUFNLElBQUksR0FBRyxLQUFLLEVBQ3ZCLEdBQWlELEVBQ2pELEdBQW1CLEVBQ25CLEVBQUU7SUFDRixNQUFNLEVBQUUsUUFBUSxFQUFFLEdBQUcsR0FBRyxDQUFDLE1BQU0sQ0FBQTtJQUMvQixNQUFNLEtBQUssR0FBRyxHQUFHLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxpQ0FBeUIsQ0FBQyxLQUFLLENBQUMsQ0FBQTtJQUVoRSxNQUFNLElBQUEsZ0RBQW9DLEVBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQztRQUN4RCxLQUFLLEVBQUU7WUFDTCxHQUFHLEdBQUcsQ0FBQyxhQUFhO1lBQ3BCLEVBQUUsRUFBRSxRQUFRO1NBQ2I7S0FDRixDQUFDLENBQUE7SUFFRixNQUFNLEVBQ0osSUFBSSxFQUFFLENBQUMsd0JBQXdCLENBQUMsRUFDakMsR0FBRyxNQUFNLEtBQUssQ0FBQyxLQUFLLENBQUM7UUFDcEIsTUFBTSxFQUFFLDBCQUEwQjtRQUNsQyxHQUFHLEdBQUcsQ0FBQyxXQUFXO1FBQ2xCLE9BQU8sRUFBRTtZQUNQLEdBQUcsR0FBRyxDQUFDLGdCQUFnQjtZQUN2QixFQUFFLEVBQUUsUUFBUTtTQUNiO0tBQ0YsQ0FBQyxDQUFBO0lBRUYsT0FBTyxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUUsd0JBQXdCLEVBQUUsQ0FBQyxDQUFBO0FBQy9DLENBQUMsQ0FBQTtBQTFCWSxRQUFBLElBQUksUUEwQmhCIn0=