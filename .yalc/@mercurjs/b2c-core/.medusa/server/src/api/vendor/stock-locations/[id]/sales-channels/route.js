"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.POST = void 0;
const core_flows_1 = require("@medusajs/core-flows");
const utils_1 = require("@medusajs/framework/utils");
/**
 * @oas [post] /vendor/stock-locations/{id}/sales-channels
 * operationId: "VendorUpdateStockLocationSalesChannels"
 * summary: "Update Stock Location Sales Channels"
 * description: "Updates the sales channels of a Stock Location."
 * x-authenticated: true
 * parameters:
 *   - in: path
 *     name: id
 *     required: true
 *     description: The ID of the Stock Location
 *     schema:
 *       type: string
 *   - in: query
 *     name: fields
 *     description: The comma-separated fields to include in the response
 *     schema:
 *       type: string
 * requestBody:
 *   content:
 *     application/json:
 *       schema:
 *         type: object
 *         properties:
 *           add:
 *             type: array
 *             description: Array of sales channel IDs to add
 *             items:
 *               type: string
 *           remove:
 *             type: array
 *             description: Array of sales channel IDs to remove
 *             items:
 *               type: string
 * responses:
 *   "200":
 *     description: OK
 *     content:
 *       application/json:
 *         schema:
 *           type: object
 *           properties:
 *             stock_location:
 *               $ref: "#/components/schemas/VendorStockLocation"
 * tags:
 *   - Vendor Stock Locations
 * security:
 *   - api_token: []
 *   - cookie_auth: []
 */
const POST = async (req, res) => {
    const { id } = req.params;
    const { add, remove } = req.validatedBody;
    const query = req.scope.resolve(utils_1.ContainerRegistrationKeys.QUERY);
    const workflow = (0, core_flows_1.linkSalesChannelsToStockLocationWorkflow)(req.scope);
    await workflow.run({
        input: {
            id,
            add,
            remove
        }
    });
    const { data: [stockLocation] } = await query.graph({
        entity: 'stock_location',
        fields: req.queryConfig.fields,
        filters: {
            id: req.params.id
        }
    });
    res.status(200).json({ stock_location: stockLocation });
};
exports.POST = POST;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvYXBpL3ZlbmRvci9zdG9jay1sb2NhdGlvbnMvW2lkXS9zYWxlcy1jaGFubmVscy9yb3V0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxxREFBK0U7QUFNL0UscURBQXFFO0FBRXJFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBaURHO0FBQ0ksTUFBTSxJQUFJLEdBQUcsS0FBSyxFQUN2QixHQUFrRCxFQUNsRCxHQUFtQixFQUNuQixFQUFFO0lBQ0YsTUFBTSxFQUFFLEVBQUUsRUFBRSxHQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUE7SUFDekIsTUFBTSxFQUFFLEdBQUcsRUFBRSxNQUFNLEVBQUUsR0FBRyxHQUFHLENBQUMsYUFBYSxDQUFBO0lBRXpDLE1BQU0sS0FBSyxHQUFHLEdBQUcsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLGlDQUF5QixDQUFDLEtBQUssQ0FBQyxDQUFBO0lBRWhFLE1BQU0sUUFBUSxHQUFHLElBQUEscURBQXdDLEVBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFBO0lBQ3BFLE1BQU0sUUFBUSxDQUFDLEdBQUcsQ0FBQztRQUNqQixLQUFLLEVBQUU7WUFDTCxFQUFFO1lBQ0YsR0FBRztZQUNILE1BQU07U0FDUDtLQUNGLENBQUMsQ0FBQTtJQUVGLE1BQU0sRUFDSixJQUFJLEVBQUUsQ0FBQyxhQUFhLENBQUMsRUFDdEIsR0FBRyxNQUFNLEtBQUssQ0FBQyxLQUFLLENBQUM7UUFDcEIsTUFBTSxFQUFFLGdCQUFnQjtRQUN4QixNQUFNLEVBQUUsR0FBRyxDQUFDLFdBQVcsQ0FBQyxNQUFNO1FBQzlCLE9BQU8sRUFBRTtZQUNQLEVBQUUsRUFBRSxHQUFHLENBQUMsTUFBTSxDQUFDLEVBQUU7U0FDbEI7S0FDRixDQUFDLENBQUE7SUFFRixHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLGNBQWMsRUFBRSxhQUFhLEVBQUUsQ0FBQyxDQUFBO0FBQ3pELENBQUMsQ0FBQTtBQTdCWSxRQUFBLElBQUksUUE2QmhCIn0=