"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.POST = void 0;
const core_flows_1 = require("@medusajs/core-flows");
const utils_1 = require("@medusajs/framework/utils");
const buildLinks = (id, fulfillmentProviderIds) => {
    return fulfillmentProviderIds.map((fulfillmentProviderId) => ({
        [utils_1.Modules.STOCK_LOCATION]: { stock_location_id: id },
        [utils_1.Modules.FULFILLMENT]: {
            fulfillment_provider_id: fulfillmentProviderId
        }
    }));
};
/**
 * @oas [post] /vendor/stock-locations/{id}/fulfillment-providers
 * operationId: "VendorUpdateStockLocationFulfillmentProviders"
 * summary: "Update Stock Location Fulfillment Providers"
 * description: "Updates the fulfillment providers of a Stock Location."
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
 *             description: Array of fulfillment provider IDs to add
 *             items:
 *               type: string
 *           remove:
 *             type: array
 *             description: Array of fulfillment provider IDs to remove
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
    const { add = [], remove = [] } = req.validatedBody;
    const query = req.scope.resolve(utils_1.ContainerRegistrationKeys.QUERY);
    await (0, core_flows_1.batchLinksWorkflow)(req.scope).run({
        input: {
            create: buildLinks(id, add),
            delete: buildLinks(id, remove)
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvYXBpL3ZlbmRvci9zdG9jay1sb2NhdGlvbnMvW2lkXS9mdWxmaWxsbWVudC1wcm92aWRlcnMvcm91dGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEscURBQXlEO0FBTXpELHFEQUE4RTtBQUU5RSxNQUFNLFVBQVUsR0FBRyxDQUFDLEVBQUUsRUFBRSxzQkFBZ0MsRUFBRSxFQUFFO0lBQzFELE9BQU8sc0JBQXNCLENBQUMsR0FBRyxDQUFDLENBQUMscUJBQXFCLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDNUQsQ0FBQyxlQUFPLENBQUMsY0FBYyxDQUFDLEVBQUUsRUFBRSxpQkFBaUIsRUFBRSxFQUFFLEVBQUU7UUFDbkQsQ0FBQyxlQUFPLENBQUMsV0FBVyxDQUFDLEVBQUU7WUFDckIsdUJBQXVCLEVBQUUscUJBQXFCO1NBQy9DO0tBQ0YsQ0FBQyxDQUFDLENBQUE7QUFDTCxDQUFDLENBQUE7QUFFRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQWlERztBQUNJLE1BQU0sSUFBSSxHQUFHLEtBQUssRUFDdkIsR0FBa0QsRUFDbEQsR0FBbUIsRUFDbkIsRUFBRTtJQUNGLE1BQU0sRUFBRSxFQUFFLEVBQUUsR0FBRyxHQUFHLENBQUMsTUFBTSxDQUFBO0lBQ3pCLE1BQU0sRUFBRSxHQUFHLEdBQUcsRUFBRSxFQUFFLE1BQU0sR0FBRyxFQUFFLEVBQUUsR0FBRyxHQUFHLENBQUMsYUFBYSxDQUFBO0lBRW5ELE1BQU0sS0FBSyxHQUFHLEdBQUcsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLGlDQUF5QixDQUFDLEtBQUssQ0FBQyxDQUFBO0lBRWhFLE1BQU0sSUFBQSwrQkFBa0IsRUFBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDO1FBQ3RDLEtBQUssRUFBRTtZQUNMLE1BQU0sRUFBRSxVQUFVLENBQUMsRUFBRSxFQUFFLEdBQUcsQ0FBQztZQUMzQixNQUFNLEVBQUUsVUFBVSxDQUFDLEVBQUUsRUFBRSxNQUFNLENBQUM7U0FDL0I7S0FDRixDQUFDLENBQUE7SUFFRixNQUFNLEVBQ0osSUFBSSxFQUFFLENBQUMsYUFBYSxDQUFDLEVBQ3RCLEdBQUcsTUFBTSxLQUFLLENBQUMsS0FBSyxDQUFDO1FBQ3BCLE1BQU0sRUFBRSxnQkFBZ0I7UUFDeEIsTUFBTSxFQUFFLEdBQUcsQ0FBQyxXQUFXLENBQUMsTUFBTTtRQUM5QixPQUFPLEVBQUU7WUFDUCxFQUFFLEVBQUUsR0FBRyxDQUFDLE1BQU0sQ0FBQyxFQUFFO1NBQ2xCO0tBQ0YsQ0FBQyxDQUFBO0lBRUYsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxjQUFjLEVBQUUsYUFBYSxFQUFFLENBQUMsQ0FBQTtBQUN6RCxDQUFDLENBQUE7QUEzQlksUUFBQSxJQUFJLFFBMkJoQiJ9