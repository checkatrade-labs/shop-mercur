"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DELETE = exports.POST = exports.GET = void 0;
const utils_1 = require("@medusajs/framework/utils");
const core_flows_1 = require("@medusajs/medusa/core-flows");
const framework_1 = require("@mercurjs/framework");
/**
 * @oas [get] /vendor/stock-locations/{id}
 * operationId: "VendorGetStockLocation"
 * summary: "Get Stock Location"
 * description: "Retrieves a Stock Location by id."
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
const GET = async (req, res) => {
    const query = req.scope.resolve(utils_1.ContainerRegistrationKeys.QUERY);
    const { data: [stockLocation] } = await query.graph({
        entity: 'stock_location',
        fields: req.queryConfig.fields,
        filters: {
            id: req.params.id
        }
    }, { throwIfKeyNotFound: true });
    res.status(200).json({
        stock_location: stockLocation
    });
};
exports.GET = GET;
/**
 * @oas [post] /vendor/stock-locations/{id}
 * operationId: "VendorUpdateStockLocation"
 * summary: "Update Stock Location"
 * description: "Updates a Stock Location."
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
 *         $ref: "#/components/schemas/VendorUpdateStockLocation"
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
    const query = req.scope.resolve(utils_1.ContainerRegistrationKeys.QUERY);
    await (0, core_flows_1.updateStockLocationsWorkflow)(req.scope).run({
        input: {
            selector: {
                id: req.params.id
            },
            update: req.validatedBody
        }
    });
    const eventBus = req.scope.resolve(utils_1.Modules.EVENT_BUS);
    await eventBus.emit({
        name: framework_1.IntermediateEvents.STOCK_LOCATION_CHANGED,
        data: { id: req.params.id }
    });
    const { data: [stockLocation] } = await query.graph({
        entity: 'stock_location',
        fields: req.queryConfig.fields,
        filters: {
            id: req.params.id
        }
    }, { throwIfKeyNotFound: true });
    res.status(200).json({
        stock_location: stockLocation
    });
};
exports.POST = POST;
/**
 * @oas [delete] /vendor/stock-locations/{id}
 * operationId: "VendorDeleteStockLocationById"
 * summary: "Delete stock location"
 * description: "Deletes stock location by id for the authenticated vendor."
 * x-authenticated: true
 * parameters:
 *   - in: path
 *     name: id
 *     required: true
 *     description: The ID of the stock location.
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
 *               description: The ID of the deleted resource
 *             object:
 *               type: string
 *               description: The type of the object that was deleted
 *             deleted:
 *               type: boolean
 *               description: Whether or not the items were deleted
 * tags:
 *   - Vendor Stock Locations
 * security:
 *   - api_token: []
 *   - cookie_auth: []
 */
const DELETE = async (req, res) => {
    await (0, core_flows_1.deleteStockLocationsWorkflow)(req.scope).run({
        input: {
            ids: [req.params.id]
        }
    });
    const eventBus = req.scope.resolve(utils_1.Modules.EVENT_BUS);
    await eventBus.emit({
        name: framework_1.IntermediateEvents.STOCK_LOCATION_CHANGED,
        data: { id: req.params.id }
    });
    res.status(200).json({
        id: req.params.id,
        object: 'stock_location',
        deleted: true
    });
};
exports.DELETE = DELETE;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvYXBpL3ZlbmRvci9zdG9jay1sb2NhdGlvbnMvW2lkXS9yb3V0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFFQSxxREFBOEU7QUFDOUUsNERBR29DO0FBRXBDLG1EQUF3RDtBQUl4RDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBaUNHO0FBQ0ksTUFBTSxHQUFHLEdBQUcsS0FBSyxFQUN0QixHQUErQixFQUMvQixHQUFtQixFQUNuQixFQUFFO0lBQ0YsTUFBTSxLQUFLLEdBQUcsR0FBRyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsaUNBQXlCLENBQUMsS0FBSyxDQUFDLENBQUE7SUFFaEUsTUFBTSxFQUNKLElBQUksRUFBRSxDQUFDLGFBQWEsQ0FBQyxFQUN0QixHQUFHLE1BQU0sS0FBSyxDQUFDLEtBQUssQ0FDbkI7UUFDRSxNQUFNLEVBQUUsZ0JBQWdCO1FBQ3hCLE1BQU0sRUFBRSxHQUFHLENBQUMsV0FBVyxDQUFDLE1BQU07UUFDOUIsT0FBTyxFQUFFO1lBQ1AsRUFBRSxFQUFFLEdBQUcsQ0FBQyxNQUFNLENBQUMsRUFBRTtTQUNsQjtLQUNGLEVBQ0QsRUFBRSxrQkFBa0IsRUFBRSxJQUFJLEVBQUUsQ0FDN0IsQ0FBQTtJQUVELEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDO1FBQ25CLGNBQWMsRUFBRSxhQUFhO0tBQzlCLENBQUMsQ0FBQTtBQUNKLENBQUMsQ0FBQTtBQXRCWSxRQUFBLEdBQUcsT0FzQmY7QUFFRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0FzQ0c7QUFDSSxNQUFNLElBQUksR0FBRyxLQUFLLEVBQ3ZCLEdBQThELEVBQzlELEdBQW1CLEVBQ25CLEVBQUU7SUFDRixNQUFNLEtBQUssR0FBRyxHQUFHLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxpQ0FBeUIsQ0FBQyxLQUFLLENBQUMsQ0FBQTtJQUVoRSxNQUFNLElBQUEseUNBQTRCLEVBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQztRQUNoRCxLQUFLLEVBQUU7WUFDTCxRQUFRLEVBQUU7Z0JBQ1IsRUFBRSxFQUFFLEdBQUcsQ0FBQyxNQUFNLENBQUMsRUFBRTthQUNsQjtZQUNELE1BQU0sRUFBRSxHQUFHLENBQUMsYUFBYTtTQUMxQjtLQUNGLENBQUMsQ0FBQTtJQUVGLE1BQU0sUUFBUSxHQUFHLEdBQUcsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLGVBQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQTtJQUNyRCxNQUFNLFFBQVEsQ0FBQyxJQUFJLENBQUM7UUFDbEIsSUFBSSxFQUFFLDhCQUFrQixDQUFDLHNCQUFzQjtRQUMvQyxJQUFJLEVBQUUsRUFBRSxFQUFFLEVBQUUsR0FBRyxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUU7S0FDNUIsQ0FBQyxDQUFBO0lBRUYsTUFBTSxFQUNKLElBQUksRUFBRSxDQUFDLGFBQWEsQ0FBQyxFQUN0QixHQUFHLE1BQU0sS0FBSyxDQUFDLEtBQUssQ0FDbkI7UUFDRSxNQUFNLEVBQUUsZ0JBQWdCO1FBQ3hCLE1BQU0sRUFBRSxHQUFHLENBQUMsV0FBVyxDQUFDLE1BQU07UUFDOUIsT0FBTyxFQUFFO1lBQ1AsRUFBRSxFQUFFLEdBQUcsQ0FBQyxNQUFNLENBQUMsRUFBRTtTQUNsQjtLQUNGLEVBQ0QsRUFBRSxrQkFBa0IsRUFBRSxJQUFJLEVBQUUsQ0FDN0IsQ0FBQTtJQUVELEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDO1FBQ25CLGNBQWMsRUFBRSxhQUFhO0tBQzlCLENBQUMsQ0FBQTtBQUNKLENBQUMsQ0FBQTtBQXJDWSxRQUFBLElBQUksUUFxQ2hCO0FBRUQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBbUNHO0FBQ0ksTUFBTSxNQUFNLEdBQUcsS0FBSyxFQUN6QixHQUErQixFQUMvQixHQUFtQixFQUNuQixFQUFFO0lBQ0YsTUFBTSxJQUFBLHlDQUE0QixFQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUM7UUFDaEQsS0FBSyxFQUFFO1lBQ0wsR0FBRyxFQUFFLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUM7U0FDckI7S0FDRixDQUFDLENBQUE7SUFFRixNQUFNLFFBQVEsR0FBRyxHQUFHLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxlQUFPLENBQUMsU0FBUyxDQUFDLENBQUE7SUFDckQsTUFBTSxRQUFRLENBQUMsSUFBSSxDQUFDO1FBQ2xCLElBQUksRUFBRSw4QkFBa0IsQ0FBQyxzQkFBc0I7UUFDL0MsSUFBSSxFQUFFLEVBQUUsRUFBRSxFQUFFLEdBQUcsQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFO0tBQzVCLENBQUMsQ0FBQTtJQUVGLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDO1FBQ25CLEVBQUUsRUFBRSxHQUFHLENBQUMsTUFBTSxDQUFDLEVBQUU7UUFDakIsTUFBTSxFQUFFLGdCQUFnQjtRQUN4QixPQUFPLEVBQUUsSUFBSTtLQUNkLENBQUMsQ0FBQTtBQUNKLENBQUMsQ0FBQTtBQXJCWSxRQUFBLE1BQU0sVUFxQmxCIn0=