"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DELETE = exports.POST = exports.GET = void 0;
const utils_1 = require("@medusajs/framework/utils");
const core_flows_1 = require("@medusajs/medusa/core-flows");
/**
 * @oas [get] /vendor/customer-groups/{id}
 * operationId: "VendorGetCustomerGroupById"
 * summary: "Retrieve customer group by id"
 * description: "Retrieve customer group by id"
 * x-authenticated: true
 * parameters:
 *   - in: path
 *     name: id
 *     required: true
 *     description: The ID of the Customer group.
 *     schema:
 *       type: string
 *   - in: query
 *     name: fields
 *     schema:
 *       type: string
 *     description: Comma-separated fields that should be included in the returned data.
 * responses:
 *   "200":
 *     description: OK
 *     content:
 *       application/json:
 *         schema:
 *           type: object
 *           properties:
 *             member:
 *               $ref: "#/components/schemas/VendorCustomerGroup"
 * tags:
 *   - Vendor Customer Groups
 * security:
 *   - api_token: []
 *   - cookie_auth: []
 */
const GET = async (req, res) => {
    const query = req.scope.resolve(utils_1.ContainerRegistrationKeys.QUERY);
    const { data: [customer_group] } = await query.graph({
        entity: 'customer_group',
        fields: req.queryConfig.fields,
        filters: {
            id: req.params.id
        }
    });
    res.json({
        customer_group
    });
};
exports.GET = GET;
/**
 * @oas [post] /vendor/customer-groups/{id}
 * operationId: "VendorUpdateCustomerGroup"
 * summary: "Update customer group"
 * description: "Updates customer group"
 * x-authenticated: true
 * parameters:
 *   - in: path
 *     name: id
 *     required: true
 *     description: The ID of the Customer group.
 *     schema:
 *       type: string
 * requestBody:
 *   content:
 *     application/json:
 *       schema:
 *         $ref: "#/components/schemas/VendorCreateCustomerGroup"
 * responses:
 *   "200":
 *     description: Ok
 *     content:
 *       application/json:
 *         schema:
 *           type: object
 *           properties:
 *             customer_group:
 *               $ref: "#/components/schemas/VendorCustomerGroup"
 * tags:
 *   - Vendor Customer Groups
 * security:
 *   - api_token: []
 *   - cookie_auth: []
 */
const POST = async (req, res) => {
    const query = req.scope.resolve(utils_1.ContainerRegistrationKeys.QUERY);
    await core_flows_1.updateCustomerGroupsWorkflow.run({
        input: {
            selector: {
                id: req.params.id
            },
            update: { ...req.validatedBody }
        }
    });
    const { data: [customer_group] } = await query.graph({
        entity: 'customer_group',
        fields: req.queryConfig.fields,
        filters: {
            id: req.params.id
        }
    });
    res.json({
        customer_group
    });
};
exports.POST = POST;
/**
 * @oas [delete] /vendor/customer-groups/{id}
 * operationId: "VendorDeleteCustomerGroupById"
 * summary: "Delete a customer group"
 * description: "Deletes a customer group by id."
 * x-authenticated: true
 * parameters:
 *   - in: path
 *     name: id
 *     required: true
 *     description: The ID of the Customer group.
 *     schema:
 *       type: string
 * responses:
 *   "200":
 *     description: OK
 *     content:
 *       application/json:
 *         schema:
 *           type: object
 *           properties:
 *             id:
 *               type: string
 *               description: The ID of the deleted Customer group
 *             object:
 *               type: string
 *               description: The type of the object that was deleted
 *             deleted:
 *               type: boolean
 *               description: Whether or not the items were deleted
 * tags:
 *   - Vendor Customer Groups
 * security:
 *   - api_token: []
 *   - cookie_auth: []
 */
const DELETE = async (req, res) => {
    const id = req.params.id;
    await core_flows_1.deleteCustomerGroupsWorkflow.run({
        container: req.scope,
        input: { ids: [id] }
    });
    res.json({
        id,
        object: 'customer_group',
        deleted: true
    });
};
exports.DELETE = DELETE;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvYXBpL3ZlbmRvci9jdXN0b21lci1ncm91cHMvW2lkXS9yb3V0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFDQSxxREFBcUU7QUFDckUsNERBR29DO0FBSXBDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0FpQ0c7QUFDSSxNQUFNLEdBQUcsR0FBRyxLQUFLLEVBQ3RCLEdBQStCLEVBQy9CLEdBQW1CLEVBQ25CLEVBQUU7SUFDRixNQUFNLEtBQUssR0FBRyxHQUFHLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxpQ0FBeUIsQ0FBQyxLQUFLLENBQUMsQ0FBQTtJQUVoRSxNQUFNLEVBQ0osSUFBSSxFQUFFLENBQUMsY0FBYyxDQUFDLEVBQ3ZCLEdBQUcsTUFBTSxLQUFLLENBQUMsS0FBSyxDQUFDO1FBQ3BCLE1BQU0sRUFBRSxnQkFBZ0I7UUFDeEIsTUFBTSxFQUFFLEdBQUcsQ0FBQyxXQUFXLENBQUMsTUFBTTtRQUM5QixPQUFPLEVBQUU7WUFDUCxFQUFFLEVBQUUsR0FBRyxDQUFDLE1BQU0sQ0FBQyxFQUFFO1NBQ2xCO0tBQ0YsQ0FBQyxDQUFBO0lBRUYsR0FBRyxDQUFDLElBQUksQ0FBQztRQUNQLGNBQWM7S0FDZixDQUFDLENBQUE7QUFDSixDQUFDLENBQUE7QUFuQlksUUFBQSxHQUFHLE9BbUJmO0FBRUQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQWlDRztBQUNJLE1BQU0sSUFBSSxHQUFHLEtBQUssRUFDdkIsR0FBOEQsRUFDOUQsR0FBbUIsRUFDbkIsRUFBRTtJQUNGLE1BQU0sS0FBSyxHQUFHLEdBQUcsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLGlDQUF5QixDQUFDLEtBQUssQ0FBQyxDQUFBO0lBRWhFLE1BQU0seUNBQTRCLENBQUMsR0FBRyxDQUFDO1FBQ3JDLEtBQUssRUFBRTtZQUNMLFFBQVEsRUFBRTtnQkFDUixFQUFFLEVBQUUsR0FBRyxDQUFDLE1BQU0sQ0FBQyxFQUFFO2FBQ2xCO1lBQ0QsTUFBTSxFQUFFLEVBQUUsR0FBRyxHQUFHLENBQUMsYUFBYSxFQUFFO1NBQ2pDO0tBQ0YsQ0FBQyxDQUFBO0lBRUYsTUFBTSxFQUNKLElBQUksRUFBRSxDQUFDLGNBQWMsQ0FBQyxFQUN2QixHQUFHLE1BQU0sS0FBSyxDQUFDLEtBQUssQ0FBQztRQUNwQixNQUFNLEVBQUUsZ0JBQWdCO1FBQ3hCLE1BQU0sRUFBRSxHQUFHLENBQUMsV0FBVyxDQUFDLE1BQU07UUFDOUIsT0FBTyxFQUFFO1lBQ1AsRUFBRSxFQUFFLEdBQUcsQ0FBQyxNQUFNLENBQUMsRUFBRTtTQUNsQjtLQUNGLENBQUMsQ0FBQTtJQUVGLEdBQUcsQ0FBQyxJQUFJLENBQUM7UUFDUCxjQUFjO0tBQ2YsQ0FBQyxDQUFBO0FBQ0osQ0FBQyxDQUFBO0FBNUJZLFFBQUEsSUFBSSxRQTRCaEI7QUFFRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0FtQ0c7QUFDSSxNQUFNLE1BQU0sR0FBRyxLQUFLLEVBQ3pCLEdBQStCLEVBQy9CLEdBQW1CLEVBQ25CLEVBQUU7SUFDRixNQUFNLEVBQUUsR0FBRyxHQUFHLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQTtJQUV4QixNQUFNLHlDQUE0QixDQUFDLEdBQUcsQ0FBQztRQUNyQyxTQUFTLEVBQUUsR0FBRyxDQUFDLEtBQUs7UUFDcEIsS0FBSyxFQUFFLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUU7S0FDckIsQ0FBQyxDQUFBO0lBRUYsR0FBRyxDQUFDLElBQUksQ0FBQztRQUNQLEVBQUU7UUFDRixNQUFNLEVBQUUsZ0JBQWdCO1FBQ3hCLE9BQU8sRUFBRSxJQUFJO0tBQ2QsQ0FBQyxDQUFBO0FBQ0osQ0FBQyxDQUFBO0FBaEJZLFFBQUEsTUFBTSxVQWdCbEIifQ==