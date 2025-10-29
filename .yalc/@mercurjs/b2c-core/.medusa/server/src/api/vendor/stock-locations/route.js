"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GET = exports.POST = void 0;
const utils_1 = require("@medusajs/framework/utils");
const core_flows_1 = require("@medusajs/medusa/core-flows");
const framework_1 = require("@mercurjs/framework");
const seller_1 = require("../../../modules/seller");
const seller_stock_location_1 = __importDefault(require("../../../links/seller-stock-location"));
const utils_2 = require("../../../shared/infra/http/utils");
/**
 * @oas [post] /vendor/stock-locations
 * operationId: "VendorCreateStockLocation"
 * summary: "Create a Stock Location"
 * description: "Creates a Stock Location."
 * x-authenticated: true
 * parameters:
 *   - in: query
 *     name: fields
 *     description: The comma-separated fields to include in the response
 *     schema:
 *       type: string
 * requestBody:
 *   content:
 *     application/json:
 *       schema:
 *         $ref: "#/components/schemas/VendorCreateStockLocation"
 * responses:
 *   "201":
 *     description: Created
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
    const remoteLink = req.scope.resolve(utils_1.ContainerRegistrationKeys.REMOTE_LINK);
    const seller = await (0, utils_2.fetchSellerByAuthActorId)(req.auth_context.actor_id, req.scope);
    const { result } = await (0, core_flows_1.createStockLocationsWorkflow)(req.scope).run({
        input: { locations: [req.validatedBody] },
    });
    await remoteLink.create({
        [seller_1.SELLER_MODULE]: {
            seller_id: seller.id,
        },
        [utils_1.Modules.STOCK_LOCATION]: {
            stock_location_id: result[0].id,
        },
    });
    const eventBus = req.scope.resolve(utils_1.Modules.EVENT_BUS);
    await eventBus.emit({
        name: framework_1.IntermediateEvents.STOCK_LOCATION_CHANGED,
        data: { id: result[0].id },
    });
    const { data: [stockLocation], } = await query.graph({
        entity: "stock_location",
        fields: req.queryConfig.fields,
        filters: {
            id: result[0].id,
        },
    });
    res.status(201).json({
        stock_location: stockLocation,
    });
};
exports.POST = POST;
/**
 * @oas [get] /vendor/stock-locations
 * operationId: "VendorListStockLocations"
 * summary: "List Stock Locations"
 * description: "Retrieves a list of Stock Locations."
 * x-authenticated: true
 * parameters:
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
 *             stock_locations:
 *               type: array
 *               items:
 *                 $ref: "#/components/schemas/VendorStockLocation"
 * tags:
 *   - Vendor Stock Locations
 * security:
 *   - api_token: []
 *   - cookie_auth: []
 */
const GET = async (req, res) => {
    const query = req.scope.resolve(utils_1.ContainerRegistrationKeys.QUERY);
    const { data: sellerLocations, metadata } = await query.graph({
        entity: seller_stock_location_1.default.entryPoint,
        fields: req.queryConfig.fields.map((field) => `stock_location.${field}`),
        filters: {
            ...req.filterableFields,
            deleted_at: {
                $eq: null,
            },
        },
        pagination: req.queryConfig.pagination,
    });
    res.status(200).json({
        stock_locations: sellerLocations.map((sellerLocation) => sellerLocation.stock_location),
        count: metadata?.count,
        offset: metadata?.skip,
        limit: metadata?.take,
    });
};
exports.GET = GET;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvYXBpL3ZlbmRvci9zdG9jay1sb2NhdGlvbnMvcm91dGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBSUEscURBQStFO0FBQy9FLDREQUEyRTtBQUUzRSxtREFBeUQ7QUFDekQsb0RBQXdEO0FBRXhELGlHQUEyRTtBQUMzRSw0REFBNEU7QUFHNUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBZ0NHO0FBQ0ksTUFBTSxJQUFJLEdBQUcsS0FBSyxFQUN2QixHQUE4RCxFQUM5RCxHQUFtQixFQUNuQixFQUFFO0lBQ0YsTUFBTSxLQUFLLEdBQUcsR0FBRyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsaUNBQXlCLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDakUsTUFBTSxVQUFVLEdBQUcsR0FBRyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsaUNBQXlCLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDNUUsTUFBTSxNQUFNLEdBQUcsTUFBTSxJQUFBLGdDQUF3QixFQUMzQyxHQUFHLENBQUMsWUFBWSxDQUFDLFFBQVEsRUFDekIsR0FBRyxDQUFDLEtBQUssQ0FDVixDQUFDO0lBRUYsTUFBTSxFQUFFLE1BQU0sRUFBRSxHQUFHLE1BQU0sSUFBQSx5Q0FBNEIsRUFBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDO1FBQ25FLEtBQUssRUFBRSxFQUFFLFNBQVMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsRUFBRTtLQUMxQyxDQUFDLENBQUM7SUFFSCxNQUFNLFVBQVUsQ0FBQyxNQUFNLENBQUM7UUFDdEIsQ0FBQyxzQkFBYSxDQUFDLEVBQUU7WUFDZixTQUFTLEVBQUUsTUFBTSxDQUFDLEVBQUU7U0FDckI7UUFDRCxDQUFDLGVBQU8sQ0FBQyxjQUFjLENBQUMsRUFBRTtZQUN4QixpQkFBaUIsRUFBRSxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRTtTQUNoQztLQUNGLENBQUMsQ0FBQztJQUVILE1BQU0sUUFBUSxHQUFHLEdBQUcsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLGVBQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUN0RCxNQUFNLFFBQVEsQ0FBQyxJQUFJLENBQUM7UUFDbEIsSUFBSSxFQUFFLDhCQUFrQixDQUFDLHNCQUFzQjtRQUMvQyxJQUFJLEVBQUUsRUFBRSxFQUFFLEVBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRTtLQUMzQixDQUFDLENBQUM7SUFFSCxNQUFNLEVBQ0osSUFBSSxFQUFFLENBQUMsYUFBYSxDQUFDLEdBQ3RCLEdBQUcsTUFBTSxLQUFLLENBQUMsS0FBSyxDQUFDO1FBQ3BCLE1BQU0sRUFBRSxnQkFBZ0I7UUFDeEIsTUFBTSxFQUFFLEdBQUcsQ0FBQyxXQUFXLENBQUMsTUFBTTtRQUM5QixPQUFPLEVBQUU7WUFDUCxFQUFFLEVBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUU7U0FDakI7S0FDRixDQUFDLENBQUM7SUFFSCxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQztRQUNuQixjQUFjLEVBQUUsYUFBYTtLQUM5QixDQUFDLENBQUM7QUFDTCxDQUFDLENBQUM7QUEzQ1csUUFBQSxJQUFJLFFBMkNmO0FBRUY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBNkJHO0FBQ0ksTUFBTSxHQUFHLEdBQUcsS0FBSyxFQUN0QixHQUErQixFQUMvQixHQUFtQixFQUNuQixFQUFFO0lBQ0YsTUFBTSxLQUFLLEdBQUcsR0FBRyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsaUNBQXlCLENBQUMsS0FBSyxDQUFDLENBQUM7SUFFakUsTUFBTSxFQUFFLElBQUksRUFBRSxlQUFlLEVBQUUsUUFBUSxFQUFFLEdBQUcsTUFBTSxLQUFLLENBQUMsS0FBSyxDQUFDO1FBQzVELE1BQU0sRUFBRSwrQkFBdUIsQ0FBQyxVQUFVO1FBQzFDLE1BQU0sRUFBRSxHQUFHLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLGtCQUFrQixLQUFLLEVBQUUsQ0FBQztRQUN4RSxPQUFPLEVBQUU7WUFDUCxHQUFHLEdBQUcsQ0FBQyxnQkFBZ0I7WUFDdkIsVUFBVSxFQUFFO2dCQUNWLEdBQUcsRUFBRSxJQUFJO2FBQ1Y7U0FDRjtRQUNELFVBQVUsRUFBRSxHQUFHLENBQUMsV0FBVyxDQUFDLFVBQVU7S0FDdkMsQ0FBQyxDQUFDO0lBRUgsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUM7UUFDbkIsZUFBZSxFQUFFLGVBQWUsQ0FBQyxHQUFHLENBQ2xDLENBQUMsY0FBYyxFQUFFLEVBQUUsQ0FBQyxjQUFjLENBQUMsY0FBYyxDQUNsRDtRQUNELEtBQUssRUFBRSxRQUFRLEVBQUUsS0FBSztRQUN0QixNQUFNLEVBQUUsUUFBUSxFQUFFLElBQUk7UUFDdEIsS0FBSyxFQUFFLFFBQVEsRUFBRSxJQUFJO0tBQ3RCLENBQUMsQ0FBQztBQUNMLENBQUMsQ0FBQztBQTFCVyxRQUFBLEdBQUcsT0EwQmQifQ==