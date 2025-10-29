"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DELETE = exports.POST = exports.GET = void 0;
const core_flows_1 = require("@medusajs/core-flows");
const utils_1 = require("@medusajs/framework/utils");
const seller_stock_location_1 = __importDefault(require("../../../../links/seller-stock-location"));
const utils_2 = require("../../../../shared/infra/http/utils");
/**
 * @oas [get] /vendor/reservations/{id}
 * operationId: "VendorGetReservationById"
 * summary: "Get reservation"
 * description: "Retrieves reservation by id for the authenticated vendor."
 * x-authenticated: true
 * parameters:
 *   - in: path
 *     name: id
 *     required: true
 *     description: The ID of the reservation.
 *     schema:
 *       type: string
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
 *             reservation:
 *               $ref: "#/components/schemas/VendorReservation"
 * tags:
 *   - Vendor Reservations
 * security:
 *   - api_token: []
 *   - cookie_auth: []
 */
const GET = async (req, res) => {
    const query = req.scope.resolve(utils_1.ContainerRegistrationKeys.QUERY);
    const { id } = req.params;
    const { data: [reservation] } = await query.graph({
        entity: 'reservation',
        fields: req.queryConfig.fields,
        filters: {
            id
        }
    });
    res.json({ reservation });
};
exports.GET = GET;
/**
 * @oas [post] /vendor/reservations/{id}
 * operationId: "VendorUpdateReservationById"
 * summary: "Update reservation"
 * description: "Updates an existing reservation for the authenticated vendor."
 * x-authenticated: true
 * parameters:
 *   - in: path
 *     name: id
 *     required: true
 *     description: The ID of the Reservation.
 *     schema:
 *       type: string
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
 *         $ref: "#/components/schemas/VendorUpdateReservation"
 * responses:
 *   "200":
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
    const { id } = req.params;
    if (req.validatedBody.location_id) {
        const seller = await (0, utils_2.fetchSellerByAuthActorId)(req.auth_context.actor_id, req.scope);
        const { data: [relation] } = await query.graph({
            entity: seller_stock_location_1.default.entryPoint,
            fields: ['seller_id'],
            filters: {
                stock_location_id: req.validatedBody.location_id
            }
        });
        if (relation.seller_id !== seller.id) {
            throw new utils_1.MedusaError(utils_1.MedusaError.Types.UNAUTHORIZED, 'You can modify stock only in your own locations.');
        }
    }
    await core_flows_1.updateReservationsWorkflow.run({
        container: req.scope,
        input: {
            updates: [{ ...req.validatedBody, id }]
        }
    });
    const { data: [reservation] } = await query.graph({
        entity: 'reservation',
        fields: req.queryConfig.fields,
        filters: {
            id
        }
    });
    res.json({ reservation });
};
exports.POST = POST;
/**
 * @oas [delete] /vendor/reservations/{id}
 * operationId: "VendorDeleteReservationById"
 * summary: "Delete reservation"
 * description: "Deletes reservation by id for the authenticated vendor."
 * x-authenticated: true
 * parameters:
 *   - in: path
 *     name: id
 *     required: true
 *     description: The ID of the reservation.
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
 *               description: The ID of the deleted reservation
 *             object:
 *               type: string
 *               description: The type of the object that was deleted
 *             deleted:
 *               type: boolean
 *               description: Whether or not the items were deleted
 * tags:
 *   - Vendor Reservations
 * security:
 *   - api_token: []
 *   - cookie_auth: []
 */
const DELETE = async (req, res) => {
    const { id } = req.params;
    await core_flows_1.deleteReservationsWorkflow.run({
        container: req.scope,
        input: { ids: [id] }
    });
    res.status(200).json({
        id,
        object: 'reservation',
        deleted: true
    });
};
exports.DELETE = DELETE;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvYXBpL3ZlbmRvci9yZXNlcnZhdGlvbnMvW2lkXS9yb3V0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxxREFHNkI7QUFLN0IscURBR2tDO0FBRWxDLG9HQUF5RTtBQUN6RSwrREFBOEU7QUFHOUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0FrQ0c7QUFDSSxNQUFNLEdBQUcsR0FBRyxLQUFLLEVBQ3RCLEdBQStCLEVBQy9CLEdBQW1CLEVBQ25CLEVBQUU7SUFDRixNQUFNLEtBQUssR0FBRyxHQUFHLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxpQ0FBeUIsQ0FBQyxLQUFLLENBQUMsQ0FBQTtJQUNoRSxNQUFNLEVBQUUsRUFBRSxFQUFFLEdBQUcsR0FBRyxDQUFDLE1BQU0sQ0FBQTtJQUV6QixNQUFNLEVBQ0osSUFBSSxFQUFFLENBQUMsV0FBVyxDQUFDLEVBQ3BCLEdBQUcsTUFBTSxLQUFLLENBQUMsS0FBSyxDQUFDO1FBQ3BCLE1BQU0sRUFBRSxhQUFhO1FBQ3JCLE1BQU0sRUFBRSxHQUFHLENBQUMsV0FBVyxDQUFDLE1BQU07UUFDOUIsT0FBTyxFQUFFO1lBQ1AsRUFBRTtTQUNIO0tBQ0YsQ0FBQyxDQUFBO0lBRUYsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFLFdBQVcsRUFBRSxDQUFDLENBQUE7QUFDM0IsQ0FBQyxDQUFBO0FBbEJZLFFBQUEsR0FBRyxPQWtCZjtBQUVEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0F1Q0c7QUFDSSxNQUFNLElBQUksR0FBRyxLQUFLLEVBQ3ZCLEdBQTRELEVBQzVELEdBQW1CLEVBQ25CLEVBQUU7SUFDRixNQUFNLEtBQUssR0FBRyxHQUFHLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxpQ0FBeUIsQ0FBQyxLQUFLLENBQUMsQ0FBQTtJQUNoRSxNQUFNLEVBQUUsRUFBRSxFQUFFLEdBQUcsR0FBRyxDQUFDLE1BQU0sQ0FBQTtJQUV6QixJQUFJLEdBQUcsQ0FBQyxhQUFhLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDbEMsTUFBTSxNQUFNLEdBQUcsTUFBTSxJQUFBLGdDQUF3QixFQUMzQyxHQUFHLENBQUMsWUFBWSxDQUFDLFFBQVEsRUFDekIsR0FBRyxDQUFDLEtBQUssQ0FDVixDQUFBO1FBRUQsTUFBTSxFQUNKLElBQUksRUFBRSxDQUFDLFFBQVEsQ0FBQyxFQUNqQixHQUFHLE1BQU0sS0FBSyxDQUFDLEtBQUssQ0FBQztZQUNwQixNQUFNLEVBQUUsK0JBQW1CLENBQUMsVUFBVTtZQUN0QyxNQUFNLEVBQUUsQ0FBQyxXQUFXLENBQUM7WUFDckIsT0FBTyxFQUFFO2dCQUNQLGlCQUFpQixFQUFFLEdBQUcsQ0FBQyxhQUFhLENBQUMsV0FBVzthQUNqRDtTQUNGLENBQUMsQ0FBQTtRQUVGLElBQUksUUFBUSxDQUFDLFNBQVMsS0FBSyxNQUFNLENBQUMsRUFBRSxFQUFFLENBQUM7WUFDckMsTUFBTSxJQUFJLG1CQUFXLENBQ25CLG1CQUFXLENBQUMsS0FBSyxDQUFDLFlBQVksRUFDOUIsa0RBQWtELENBQ25ELENBQUE7UUFDSCxDQUFDO0lBQ0gsQ0FBQztJQUVELE1BQU0sdUNBQTBCLENBQUMsR0FBRyxDQUFDO1FBQ25DLFNBQVMsRUFBRSxHQUFHLENBQUMsS0FBSztRQUNwQixLQUFLLEVBQUU7WUFDTCxPQUFPLEVBQUUsQ0FBQyxFQUFFLEdBQUcsR0FBRyxDQUFDLGFBQWEsRUFBRSxFQUFFLEVBQUUsQ0FBQztTQUN4QztLQUNGLENBQUMsQ0FBQTtJQUVGLE1BQU0sRUFDSixJQUFJLEVBQUUsQ0FBQyxXQUFXLENBQUMsRUFDcEIsR0FBRyxNQUFNLEtBQUssQ0FBQyxLQUFLLENBQUM7UUFDcEIsTUFBTSxFQUFFLGFBQWE7UUFDckIsTUFBTSxFQUFFLEdBQUcsQ0FBQyxXQUFXLENBQUMsTUFBTTtRQUM5QixPQUFPLEVBQUU7WUFDUCxFQUFFO1NBQ0g7S0FDRixDQUFDLENBQUE7SUFFRixHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUUsV0FBVyxFQUFFLENBQUMsQ0FBQTtBQUMzQixDQUFDLENBQUE7QUFqRFksUUFBQSxJQUFJLFFBaURoQjtBQUVEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQW1DRztBQUNJLE1BQU0sTUFBTSxHQUFHLEtBQUssRUFDekIsR0FBK0IsRUFDL0IsR0FBbUIsRUFDbkIsRUFBRTtJQUNGLE1BQU0sRUFBRSxFQUFFLEVBQUUsR0FBRyxHQUFHLENBQUMsTUFBTSxDQUFBO0lBRXpCLE1BQU0sdUNBQTBCLENBQUMsR0FBRyxDQUFDO1FBQ25DLFNBQVMsRUFBRSxHQUFHLENBQUMsS0FBSztRQUNwQixLQUFLLEVBQUUsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRTtLQUNyQixDQUFDLENBQUE7SUFFRixHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQztRQUNuQixFQUFFO1FBQ0YsTUFBTSxFQUFFLGFBQWE7UUFDckIsT0FBTyxFQUFFLElBQUk7S0FDZCxDQUFDLENBQUE7QUFDSixDQUFDLENBQUE7QUFoQlksUUFBQSxNQUFNLFVBZ0JsQiJ9