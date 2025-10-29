"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.POST = void 0;
const utils_1 = require("@medusajs/framework/utils");
const utils_2 = require("../../../../../shared/infra/http/utils");
const fulfillment_set_1 = require("../../../../../workflows/fulfillment-set");
/**
 * @oas [post] /vendor/fulfillment-sets/{id}/service-zones
 * operationId: "VendorCreateServiceZone"
 * summary: "Create a Service Zone"
 * description: "Creates a Service Zone."
 * x-authenticated: true
 * parameters:
 *   - in: path
 *     name: id
 *     required: true
 *     description: The ID of the Fulfillment Set.
 *     schema:
 *       type: string
 * requestBody:
 *   content:
 *     application/json:
 *       schema:
 *         $ref: "#/components/schemas/VendorCreateServiceZone"
 * responses:
 *   "200":
 *     description: OK
 *     content:
 *       application/json:
 *         schema:
 *           type: object
 *           properties:
 *             fulfillment_set:
 *               $ref: "#/components/schemas/VendorFulfillmentSet"
 * tags:
 *   - Vendor Fulfillment Sets
 * security:
 *   - api_token: []
 *   - cookie_auth: []
 */
const POST = async (req, res) => {
    const query = req.scope.resolve(utils_1.ContainerRegistrationKeys.QUERY);
    const seller = await (0, utils_2.fetchSellerByAuthActorId)(req.auth_context.actor_id, req.scope);
    await (0, fulfillment_set_1.createVendorServiceZonesWorkflow)(req.scope).run({
        input: {
            data: [{ fulfillment_set_id: req.params.id, ...req.validatedBody }],
            seller_id: seller.id,
        },
    });
    const { data: [fulfillmentSet], } = await query.graph({
        entity: "fulfillment_set",
        fields: req.queryConfig.fields,
        filters: {
            id: req.params.id,
        },
    }, { throwIfKeyNotFound: true });
    res.json({ fulfillment_set: fulfillmentSet });
};
exports.POST = POST;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvYXBpL3ZlbmRvci9mdWxmaWxsbWVudC1zZXRzL1tpZF0vc2VydmljZS16b25lcy9yb3V0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFJQSxxREFBc0U7QUFFdEUsa0VBQWtGO0FBQ2xGLDhFQUE0RjtBQUc1Rjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBaUNHO0FBQ0ksTUFBTSxJQUFJLEdBQUcsS0FBSyxFQUN2QixHQUE0RCxFQUM1RCxHQUFtQixFQUNuQixFQUFFO0lBQ0YsTUFBTSxLQUFLLEdBQUcsR0FBRyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsaUNBQXlCLENBQUMsS0FBSyxDQUFDLENBQUM7SUFFakUsTUFBTSxNQUFNLEdBQUcsTUFBTSxJQUFBLGdDQUF3QixFQUMzQyxHQUFHLENBQUMsWUFBWSxDQUFDLFFBQVEsRUFDekIsR0FBRyxDQUFDLEtBQUssQ0FDVixDQUFDO0lBRUYsTUFBTSxJQUFBLGtEQUFnQyxFQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUM7UUFDcEQsS0FBSyxFQUFFO1lBQ0wsSUFBSSxFQUFFLENBQUMsRUFBRSxrQkFBa0IsRUFBRSxHQUFHLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFBRSxHQUFHLEdBQUcsQ0FBQyxhQUFhLEVBQUUsQ0FBQztZQUNuRSxTQUFTLEVBQUUsTUFBTSxDQUFDLEVBQUU7U0FDckI7S0FDRixDQUFDLENBQUM7SUFFSCxNQUFNLEVBQ0osSUFBSSxFQUFFLENBQUMsY0FBYyxDQUFDLEdBQ3ZCLEdBQUcsTUFBTSxLQUFLLENBQUMsS0FBSyxDQUNuQjtRQUNFLE1BQU0sRUFBRSxpQkFBaUI7UUFDekIsTUFBTSxFQUFFLEdBQUcsQ0FBQyxXQUFXLENBQUMsTUFBTTtRQUM5QixPQUFPLEVBQUU7WUFDUCxFQUFFLEVBQUUsR0FBRyxDQUFDLE1BQU0sQ0FBQyxFQUFFO1NBQ2xCO0tBQ0YsRUFDRCxFQUFFLGtCQUFrQixFQUFFLElBQUksRUFBRSxDQUM3QixDQUFDO0lBRUYsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFLGVBQWUsRUFBRSxjQUFjLEVBQUUsQ0FBQyxDQUFDO0FBQ2hELENBQUMsQ0FBQztBQWhDVyxRQUFBLElBQUksUUFnQ2YifQ==