"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.POST = void 0;
const utils_1 = require("@medusajs/framework/utils");
const framework_1 = require("@mercurjs/framework");
const utils_2 = require("../../../../../shared/infra/http/utils");
const fulfillment_set_1 = require("../../../../../workflows/fulfillment-set");
/**
 * @oas [post] /vendor/stock-locations/{id}/fulfillment-sets
 * operationId: "VendorCreateStockLocationFulfillmentSet"
 * summary: "Create a Fulfillment Set"
 * description: "Creates a Fulfillment Set for a Stock Location."
 * x-authenticated: true
 * parameters:
 *   - in: path
 *     name: id
 *     required: true
 *     description: The ID of the Stock Location.
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
 *         $ref: "#/components/schemas/VendorCreateStockLocationFulfillmentSet"
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
    const seller = await (0, utils_2.fetchSellerByAuthActorId)(req.auth_context.actor_id, req.scope);
    await (0, fulfillment_set_1.createLocationFulfillmentSetAndAssociateWithSellerWorkflow)(req.scope).run({
        input: {
            location_id: req.params.id,
            fulfillment_set_data: {
                name: req.validatedBody.name,
                type: req.validatedBody.type,
            },
            seller_id: seller.id,
        },
    });
    const eventBus = req.scope.resolve(utils_1.Modules.EVENT_BUS);
    await eventBus.emit({
        name: framework_1.IntermediateEvents.STOCK_LOCATION_CHANGED,
        data: { id: req.params.id },
    });
    const { data: [stockLocation], } = await query.graph({
        entity: "stock_location",
        fields: req.queryConfig.fields,
        filters: {
            id: req.params.id,
        },
    }, { throwIfKeyNotFound: true });
    res.status(200).json({ stock_location: stockLocation });
};
exports.POST = POST;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvYXBpL3ZlbmRvci9zdG9jay1sb2NhdGlvbnMvW2lkXS9mdWxmaWxsbWVudC1zZXRzL3JvdXRlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUlBLHFEQUErRTtBQUUvRSxtREFBeUQ7QUFFekQsa0VBQWtGO0FBQ2xGLDhFQUFzSDtBQUd0SDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0FzQ0c7QUFDSSxNQUFNLElBQUksR0FBRyxLQUFLLEVBQ3ZCLEdBQTRFLEVBQzVFLEdBQW1CLEVBQ25CLEVBQUU7SUFDRixNQUFNLEtBQUssR0FBRyxHQUFHLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxpQ0FBeUIsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUVqRSxNQUFNLE1BQU0sR0FBRyxNQUFNLElBQUEsZ0NBQXdCLEVBQzNDLEdBQUcsQ0FBQyxZQUFZLENBQUMsUUFBUSxFQUN6QixHQUFHLENBQUMsS0FBSyxDQUNWLENBQUM7SUFFRixNQUFNLElBQUEsNEVBQTBELEVBQzlELEdBQUcsQ0FBQyxLQUFLLENBQ1YsQ0FBQyxHQUFHLENBQUM7UUFDSixLQUFLLEVBQUU7WUFDTCxXQUFXLEVBQUUsR0FBRyxDQUFDLE1BQU0sQ0FBQyxFQUFFO1lBQzFCLG9CQUFvQixFQUFFO2dCQUNwQixJQUFJLEVBQUUsR0FBRyxDQUFDLGFBQWEsQ0FBQyxJQUFJO2dCQUM1QixJQUFJLEVBQUUsR0FBRyxDQUFDLGFBQWEsQ0FBQyxJQUFJO2FBQzdCO1lBQ0QsU0FBUyxFQUFFLE1BQU0sQ0FBQyxFQUFFO1NBQ3JCO0tBQ0YsQ0FBQyxDQUFDO0lBRUgsTUFBTSxRQUFRLEdBQUcsR0FBRyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsZUFBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQ3RELE1BQU0sUUFBUSxDQUFDLElBQUksQ0FBQztRQUNsQixJQUFJLEVBQUUsOEJBQWtCLENBQUMsc0JBQXNCO1FBQy9DLElBQUksRUFBRSxFQUFFLEVBQUUsRUFBRSxHQUFHLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFBRTtLQUM1QixDQUFDLENBQUM7SUFFSCxNQUFNLEVBQ0osSUFBSSxFQUFFLENBQUMsYUFBYSxDQUFDLEdBQ3RCLEdBQUcsTUFBTSxLQUFLLENBQUMsS0FBSyxDQUNuQjtRQUNFLE1BQU0sRUFBRSxnQkFBZ0I7UUFDeEIsTUFBTSxFQUFFLEdBQUcsQ0FBQyxXQUFXLENBQUMsTUFBTTtRQUM5QixPQUFPLEVBQUU7WUFDUCxFQUFFLEVBQUUsR0FBRyxDQUFDLE1BQU0sQ0FBQyxFQUFFO1NBQ2xCO0tBQ0YsRUFDRCxFQUFFLGtCQUFrQixFQUFFLElBQUksRUFBRSxDQUM3QixDQUFDO0lBRUYsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxjQUFjLEVBQUUsYUFBYSxFQUFFLENBQUMsQ0FBQztBQUMxRCxDQUFDLENBQUM7QUE1Q1csUUFBQSxJQUFJLFFBNENmIn0=