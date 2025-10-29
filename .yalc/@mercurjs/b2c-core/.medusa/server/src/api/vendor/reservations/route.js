"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.POST = exports.GET = void 0;
const utils_1 = require("@medusajs/framework/utils");
const core_flows_1 = require("@medusajs/medusa/core-flows");
const seller_inventory_item_1 = __importDefault(require("../../../links/seller-inventory-item"));
/**
 * @oas [get] /vendor/reservations
 * operationId: "VendorListReservations"
 * summary: "List Reservations"
 * description: "Retrieves a list of reservations for the authenticated vendor."
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
 *             reservations:
 *               type: array
 *               items:
 *                 $ref: "#/components/schemas/VendorReservation"
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
 *   - Vendor Reservations
 * security:
 *   - api_token: []
 *   - cookie_auth: []
 */
const GET = async (req, res) => {
    const query = req.scope.resolve(utils_1.ContainerRegistrationKeys.QUERY);
    const { data: inventory_items } = await query.graph({
        entity: seller_inventory_item_1.default.entryPoint,
        fields: ['inventory_item_id'],
        filters: req.filterableFields
    });
    const { data: reservations, metadata } = await query.graph({
        entity: 'reservation',
        fields: req.queryConfig.fields,
        filters: {
            inventory_item_id: inventory_items.map((item) => item.inventory_item_id)
        },
        pagination: req.queryConfig.pagination
    });
    res.json({
        reservations,
        count: metadata?.count,
        offset: metadata?.skip,
        limit: metadata?.take
    });
};
exports.GET = GET;
/**
 * @oas [post] /vendor/reservations
 * operationId: "VendorCreateReservation"
 * summary: "Create reservation"
 * description: "Creates new reservation"
 * x-authenticated: true
 * parameters:
 *   - name: fields
 *     in: query
 *     schema:
 *       type: string
 *     required: false
 *     description: Comma-separated fields to include in the response.
 * requestBody:
 *   content:
 *     application/json:
 *       schema:
 *         $ref: "#/components/schemas/VendorCreateReservation"
 * responses:
 *   "201":
 *     description: OK
 *     content:
 *       application/json:
 *         schema:
 *           type: object
 *           properties:
 *             reservation:
 *               $ref: "#/components/schemas/VendorReservation"
 * tags:
 *   - Vendor Reservations
 * security:
 *   - api_token: []
 *   - cookie_auth: []
 */
const POST = async (req, res) => {
    const query = req.scope.resolve(utils_1.ContainerRegistrationKeys.QUERY);
    const { result } = await core_flows_1.createReservationsWorkflow.run({
        container: req.scope,
        input: { reservations: [req.validatedBody] }
    });
    const { data: [reservation] } = await query.graph({
        entity: 'reservation',
        fields: req.queryConfig.fields,
        filters: {
            id: result[0].id
        }
    });
    res.status(201).json({ reservation });
};
exports.POST = POST;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvYXBpL3ZlbmRvci9yZXNlcnZhdGlvbnMvcm91dGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQ0EscURBQXFFO0FBQ3JFLDREQUF3RTtBQUV4RSxpR0FBc0U7QUFNdEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQW1ERztBQUNJLE1BQU0sR0FBRyxHQUFHLEtBQUssRUFDdEIsR0FBK0QsRUFDL0QsR0FBbUIsRUFDbkIsRUFBRTtJQUNGLE1BQU0sS0FBSyxHQUFHLEdBQUcsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLGlDQUF5QixDQUFDLEtBQUssQ0FBQyxDQUFBO0lBRWhFLE1BQU0sRUFBRSxJQUFJLEVBQUUsZUFBZSxFQUFFLEdBQUcsTUFBTSxLQUFLLENBQUMsS0FBSyxDQUFDO1FBQ2xELE1BQU0sRUFBRSwrQkFBbUIsQ0FBQyxVQUFVO1FBQ3RDLE1BQU0sRUFBRSxDQUFDLG1CQUFtQixDQUFDO1FBQzdCLE9BQU8sRUFBRSxHQUFHLENBQUMsZ0JBQWdCO0tBQzlCLENBQUMsQ0FBQTtJQUVGLE1BQU0sRUFBRSxJQUFJLEVBQUUsWUFBWSxFQUFFLFFBQVEsRUFBRSxHQUFHLE1BQU0sS0FBSyxDQUFDLEtBQUssQ0FBQztRQUN6RCxNQUFNLEVBQUUsYUFBYTtRQUNyQixNQUFNLEVBQUUsR0FBRyxDQUFDLFdBQVcsQ0FBQyxNQUFNO1FBQzlCLE9BQU8sRUFBRTtZQUNQLGlCQUFpQixFQUFFLGVBQWUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQztTQUN6RTtRQUNELFVBQVUsRUFBRSxHQUFHLENBQUMsV0FBVyxDQUFDLFVBQVU7S0FDdkMsQ0FBQyxDQUFBO0lBRUYsR0FBRyxDQUFDLElBQUksQ0FBQztRQUNQLFlBQVk7UUFDWixLQUFLLEVBQUUsUUFBUSxFQUFFLEtBQUs7UUFDdEIsTUFBTSxFQUFFLFFBQVEsRUFBRSxJQUFJO1FBQ3RCLEtBQUssRUFBRSxRQUFRLEVBQUUsSUFBSTtLQUN0QixDQUFDLENBQUE7QUFDSixDQUFDLENBQUE7QUEzQlksUUFBQSxHQUFHLE9BMkJmO0FBRUQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQWlDRztBQUNJLE1BQU0sSUFBSSxHQUFHLEtBQUssRUFDdkIsR0FBNEQsRUFDNUQsR0FBbUIsRUFDbkIsRUFBRTtJQUNGLE1BQU0sS0FBSyxHQUFHLEdBQUcsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLGlDQUF5QixDQUFDLEtBQUssQ0FBQyxDQUFBO0lBRWhFLE1BQU0sRUFBRSxNQUFNLEVBQUUsR0FBRyxNQUFNLHVDQUEwQixDQUFDLEdBQUcsQ0FBQztRQUN0RCxTQUFTLEVBQUUsR0FBRyxDQUFDLEtBQUs7UUFDcEIsS0FBSyxFQUFFLEVBQUUsWUFBWSxFQUFFLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxFQUFFO0tBQzdDLENBQUMsQ0FBQTtJQUVGLE1BQU0sRUFDSixJQUFJLEVBQUUsQ0FBQyxXQUFXLENBQUMsRUFDcEIsR0FBRyxNQUFNLEtBQUssQ0FBQyxLQUFLLENBQUM7UUFDcEIsTUFBTSxFQUFFLGFBQWE7UUFDckIsTUFBTSxFQUFFLEdBQUcsQ0FBQyxXQUFXLENBQUMsTUFBTTtRQUM5QixPQUFPLEVBQUU7WUFDUCxFQUFFLEVBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUU7U0FDakI7S0FDRixDQUFDLENBQUE7SUFFRixHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLFdBQVcsRUFBRSxDQUFDLENBQUE7QUFDdkMsQ0FBQyxDQUFBO0FBdEJZLFFBQUEsSUFBSSxRQXNCaEIifQ==