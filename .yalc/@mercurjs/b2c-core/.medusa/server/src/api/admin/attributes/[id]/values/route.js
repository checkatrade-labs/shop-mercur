"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.POST = exports.GET = void 0;
const utils_1 = require("@medusajs/framework/utils");
const workflows_1 = require("../../../../../workflows/attribute/workflows");
/**
 * @oas [get] /admin/attributes/{id}/values
 * operationId: "AdminListAttributeValues"
 * summary: "List Attribute Values"
 * description: "Retrieves a list of possible values for a specific attribute."
 * x-authenticated: true
 * parameters:
 *   - name: id
 *     in: path
 *     required: true
 *     schema:
 *       type: string
 *     description: The ID of the attribute.
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
 *             attribute_possible_values:
 *               type: array
 *               items:
 *                 $ref: "#/components/schemas/AttributePossibleValue"
 *             count:
 *               type: integer
 *               description: The total number of items available
 *             offset:
 *               type: integer
 *               description: The number of items skipped before these items
 *             limit:
 *               type: integer
 *               description: The number of items per page
 * tags:
 *   - Admin Attributes
 * security:
 *   - api_token: []
 *   - cookie_auth: []
 */
const GET = async (req, res) => {
    const query = req.scope.resolve(utils_1.ContainerRegistrationKeys.QUERY);
    const { data: attribute_possible_values, metadata } = await query.graph({
        entity: 'attribute_possible_value',
        filters: {
            attribute_id: req.params.id
        },
        ...req.queryConfig
    });
    res.status(200).json({
        attribute_possible_values,
        count: metadata?.count,
        offset: metadata?.skip,
        limit: metadata?.take
    });
};
exports.GET = GET;
/**
 * @oas [post] /admin/attributes/{id}/values
 * operationId: "AdminCreateAttributeValue"
 * summary: "Create Attribute Value"
 * description: "Creates a new possible value for a specific attribute."
 * x-authenticated: true
 * parameters:
 *   - name: id
 *     in: path
 *     required: true
 *     schema:
 *       type: string
 *     description: The ID of the attribute.
 * requestBody:
 *   required: true
 *   content:
 *     application/json:
 *       schema:
 *         type: object
 *         required:
 *           - value
 *           - rank
 *         properties:
 *           value:
 *             type: string
 *             minLength: 1
 *             description: The value of the possible value.
 *           rank:
 *             type: number
 *             description: The rank/order of the possible value.
 *           metadata:
 *             type: object
 *             description: Additional metadata for the possible value.
 * responses:
 *   "201":
 *     description: Created
 *     content:
 *       application/json:
 *         schema:
 *           type: object
 *           properties:
 *             attribute_possible_value:
 *               $ref: "#/components/schemas/AttributePossibleValue"
 * tags:
 *   - Admin Attributes
 * security:
 *   - api_token: []
 *   - cookie_auth: []
 */
const POST = async (req, res) => {
    const query = req.scope.resolve(utils_1.ContainerRegistrationKeys.QUERY);
    const attributeId = req.params.id;
    const { result: [createdAttributeValue] } = await (0, workflows_1.createAttributePossibleValuesWorkflow)(req.scope).run({
        input: [
            {
                ...req.validatedBody,
                attribute_id: attributeId
            }
        ]
    });
    const { data: [attribute_possible_value] } = await query.graph({
        entity: 'attribute_possible_value',
        filters: {
            id: createdAttributeValue.id
        },
        ...req.queryConfig
    });
    return res.status(201).json({ attribute_possible_value });
};
exports.POST = POST;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvYXBpL2FkbWluL2F0dHJpYnV0ZXMvW2lkXS92YWx1ZXMvcm91dGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQ0EscURBQXFFO0FBRXJFLDRFQUFvRztBQU1wRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBeURHO0FBQ0ksTUFBTSxHQUFHLEdBQUcsS0FBSyxFQUN0QixHQUFxRCxFQUNyRCxHQUFtQixFQUNuQixFQUFFO0lBQ0YsTUFBTSxLQUFLLEdBQUcsR0FBRyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsaUNBQXlCLENBQUMsS0FBSyxDQUFDLENBQUE7SUFFaEUsTUFBTSxFQUFFLElBQUksRUFBRSx5QkFBeUIsRUFBRSxRQUFRLEVBQUUsR0FBRyxNQUFNLEtBQUssQ0FBQyxLQUFLLENBQUM7UUFDdEUsTUFBTSxFQUFFLDBCQUEwQjtRQUNsQyxPQUFPLEVBQUU7WUFDUCxZQUFZLEVBQUUsR0FBRyxDQUFDLE1BQU0sQ0FBQyxFQUFFO1NBQzVCO1FBQ0QsR0FBRyxHQUFHLENBQUMsV0FBVztLQUNuQixDQUFDLENBQUE7SUFFRixHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQztRQUNuQix5QkFBeUI7UUFDekIsS0FBSyxFQUFFLFFBQVEsRUFBRSxLQUFLO1FBQ3RCLE1BQU0sRUFBRSxRQUFRLEVBQUUsSUFBSTtRQUN0QixLQUFLLEVBQUUsUUFBUSxFQUFFLElBQUk7S0FDdEIsQ0FBQyxDQUFBO0FBQ0osQ0FBQyxDQUFBO0FBcEJZLFFBQUEsR0FBRyxPQW9CZjtBQUVEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0FnREc7QUFDSSxNQUFNLElBQUksR0FBRyxLQUFLLEVBQ3ZCLEdBQWlELEVBQ2pELEdBQW1CLEVBQ25CLEVBQUU7SUFDRixNQUFNLEtBQUssR0FBRyxHQUFHLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxpQ0FBeUIsQ0FBQyxLQUFLLENBQUMsQ0FBQTtJQUNoRSxNQUFNLFdBQVcsR0FBRyxHQUFHLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQTtJQUVqQyxNQUFNLEVBQ0osTUFBTSxFQUFFLENBQUMscUJBQXFCLENBQUMsRUFDaEMsR0FBRyxNQUFNLElBQUEsaURBQXFDLEVBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQztRQUM3RCxLQUFLLEVBQUU7WUFDTDtnQkFDRSxHQUFHLEdBQUcsQ0FBQyxhQUFhO2dCQUNwQixZQUFZLEVBQUUsV0FBVzthQUMxQjtTQUNGO0tBQ0YsQ0FBQyxDQUFBO0lBRUYsTUFBTSxFQUNKLElBQUksRUFBRSxDQUFDLHdCQUF3QixDQUFDLEVBQ2pDLEdBQUcsTUFBTSxLQUFLLENBQUMsS0FBSyxDQUFDO1FBQ3BCLE1BQU0sRUFBRSwwQkFBMEI7UUFDbEMsT0FBTyxFQUFFO1lBQ1AsRUFBRSxFQUFFLHFCQUFxQixDQUFDLEVBQUU7U0FDN0I7UUFDRCxHQUFHLEdBQUcsQ0FBQyxXQUFXO0tBQ25CLENBQUMsQ0FBQTtJQUVGLE9BQU8sR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSx3QkFBd0IsRUFBRSxDQUFDLENBQUE7QUFDM0QsQ0FBQyxDQUFBO0FBN0JZLFFBQUEsSUFBSSxRQTZCaEIifQ==