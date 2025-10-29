"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.POST = void 0;
const utils_1 = require("@medusajs/framework/utils");
const core_flows_1 = require("@medusajs/medusa/core-flows");
/**
 * @oas [post] /vendor/returns/{id}/receive-items
 * operationId: "VendorAddReceiveReturnItemById"
 * summary: "Add received Item to Return"
 * description: "Add received items to return."
 * x-authenticated: true
 * parameters:
 *   - in: path
 *     name: id
 *     required: true
 *     description: The ID of the return.
 *     schema:
 *       type: string
 *   - name: fields
 *     in: query
 *     schema:
 *       type: string
 *     description: Comma-separated fields that should be included in the returned data.
 *     required: false
 * requestBody:
 *   content:
 *     application/json:
 *       schema:
 *         $ref: "#/components/schemas/VendorReceiveReturnItems"
 * responses:
 *   "200":
 *     description: OK
 *     content:
 *       application/json:
 *         schema:
 *           type: object
 *           properties:
 *             return:
 *               $ref: "#/components/schemas/VendorReturn"
 * tags:
 *   - Vendor Returns
 * security:
 *   - api_token: []
 *   - cookie_auth: []
 */
const POST = async (req, res) => {
    const query = req.scope.resolve(utils_1.ContainerRegistrationKeys.QUERY);
    const { id } = req.params;
    await core_flows_1.receiveItemReturnRequestWorkflow.run({
        container: req.scope,
        input: { ...req.validatedBody, return_id: id }
    });
    const { data: [result] } = await query.graph({
        entity: 'return',
        fields: req.queryConfig.fields,
        filters: {
            id: req.params.id
        }
    });
    res.json({
        return: result
    });
};
exports.POST = POST;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvYXBpL3ZlbmRvci9yZXR1cm5zL1tpZF0vcmVjZWl2ZS1pdGVtcy9yb3V0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFDQSxxREFBcUU7QUFDckUsNERBQThFO0FBSTlFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0F1Q0c7QUFDSSxNQUFNLElBQUksR0FBRyxLQUFLLEVBQ3ZCLEdBQW1FLEVBQ25FLEdBQW1CLEVBQ25CLEVBQUU7SUFDRixNQUFNLEtBQUssR0FBRyxHQUFHLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxpQ0FBeUIsQ0FBQyxLQUFLLENBQUMsQ0FBQTtJQUNoRSxNQUFNLEVBQUUsRUFBRSxFQUFFLEdBQUcsR0FBRyxDQUFDLE1BQU0sQ0FBQTtJQUV6QixNQUFNLDZDQUFnQyxDQUFDLEdBQUcsQ0FBQztRQUN6QyxTQUFTLEVBQUUsR0FBRyxDQUFDLEtBQUs7UUFDcEIsS0FBSyxFQUFFLEVBQUUsR0FBRyxHQUFHLENBQUMsYUFBYSxFQUFFLFNBQVMsRUFBRSxFQUFFLEVBQUU7S0FDL0MsQ0FBQyxDQUFBO0lBRUYsTUFBTSxFQUNKLElBQUksRUFBRSxDQUFDLE1BQU0sQ0FBQyxFQUNmLEdBQUcsTUFBTSxLQUFLLENBQUMsS0FBSyxDQUFDO1FBQ3BCLE1BQU0sRUFBRSxRQUFRO1FBQ2hCLE1BQU0sRUFBRSxHQUFHLENBQUMsV0FBVyxDQUFDLE1BQU07UUFDOUIsT0FBTyxFQUFFO1lBQ1AsRUFBRSxFQUFFLEdBQUcsQ0FBQyxNQUFNLENBQUMsRUFBRTtTQUNsQjtLQUNGLENBQUMsQ0FBQTtJQUVGLEdBQUcsQ0FBQyxJQUFJLENBQUM7UUFDUCxNQUFNLEVBQUUsTUFBTTtLQUNmLENBQUMsQ0FBQTtBQUNKLENBQUMsQ0FBQTtBQXpCWSxRQUFBLElBQUksUUF5QmhCIn0=