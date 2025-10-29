"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.POST = void 0;
const utils_1 = require("@medusajs/framework/utils");
const framework_1 = require("@mercurjs/framework");
/**
 * @oas [post] /vendor/sellers
 * operationId: "VendorCreateSeller"
 * summary: "Create a Seller"
 * description: "Creates a request to create a new seller with an initial owner member."
 * x-authenticated: true
 * requestBody:
 *   content:
 *     application/json:
 *       schema:
 *         $ref: "#/components/schemas/VendorCreateSeller"
 * responses:
 *   "201":
 *     description: Created
 *     content:
 *       application/json:
 *         schema:
 *           type: object
 *           properties:
 *             request:
 *               $ref: "#/components/schemas/VendorRequest"
 * tags:
 *   - Vendor Sellers
 * security:
 *   - api_token: []
 *   - cookie_auth: []
 */
const POST = async (req, res) => {
    if (req.auth_context?.actor_id) {
        throw new utils_1.MedusaError(utils_1.MedusaError.Types.INVALID_DATA, "Request already authenticated as a seller.");
    }
    const query = req.scope.resolve(utils_1.ContainerRegistrationKeys.QUERY);
    const { member, ...sellerData } = req.validatedBody;
    const { data: [identity], } = await query.graph({
        entity: "provider_identity",
        fields: ["id", "entity_id"],
        filters: {
            auth_identity_id: req.auth_context?.auth_identity_id,
        },
    });
    const { data: [existingRequest], } = await query.graph({
        entity: "request",
        fields: ["id"],
        filters: {
            submitter_id: identity.id,
            type: "seller",
        },
    });
    if (existingRequest) {
        throw new utils_1.MedusaError(utils_1.MedusaError.Types.CONFLICT, "Request already exists!");
    }
    const eventBus = req.scope.resolve(utils_1.Modules.EVENT_BUS);
    await eventBus.emit({
        name: framework_1.SellerRequest.TO_CREATE,
        data: {
            data: {
                seller: { ...sellerData, email: sellerData.email || member.email },
                member,
                auth_identity_id: req.auth_context?.auth_identity_id,
                provider_identity_id: identity.entity_id,
            },
            type: "seller",
            submitter_id: identity.id,
        },
    });
    res.status(201).json({ ok: true });
};
exports.POST = POST;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvYXBpL3ZlbmRvci9zZWxsZXJzL3JvdXRlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUlBLHFEQUltQztBQUduQyxtREFBb0Q7QUFFcEQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBMEJHO0FBQ0ksTUFBTSxJQUFJLEdBQUcsS0FBSyxFQUN2QixHQUF1RCxFQUN2RCxHQUFtQixFQUNuQixFQUFFO0lBQ0YsSUFBSSxHQUFHLENBQUMsWUFBWSxFQUFFLFFBQVEsRUFBRSxDQUFDO1FBQy9CLE1BQU0sSUFBSSxtQkFBVyxDQUNuQixtQkFBVyxDQUFDLEtBQUssQ0FBQyxZQUFZLEVBQzlCLDRDQUE0QyxDQUM3QyxDQUFDO0lBQ0osQ0FBQztJQUNELE1BQU0sS0FBSyxHQUFHLEdBQUcsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLGlDQUF5QixDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ2pFLE1BQU0sRUFBRSxNQUFNLEVBQUUsR0FBRyxVQUFVLEVBQUUsR0FBRyxHQUFHLENBQUMsYUFBYSxDQUFDO0lBRXBELE1BQU0sRUFDSixJQUFJLEVBQUUsQ0FBQyxRQUFRLENBQUMsR0FDakIsR0FBRyxNQUFNLEtBQUssQ0FBQyxLQUFLLENBQUM7UUFDcEIsTUFBTSxFQUFFLG1CQUFtQjtRQUMzQixNQUFNLEVBQUUsQ0FBQyxJQUFJLEVBQUUsV0FBVyxDQUFDO1FBQzNCLE9BQU8sRUFBRTtZQUNQLGdCQUFnQixFQUFFLEdBQUcsQ0FBQyxZQUFZLEVBQUUsZ0JBQWdCO1NBQ3JEO0tBQ0YsQ0FBQyxDQUFDO0lBRUgsTUFBTSxFQUNKLElBQUksRUFBRSxDQUFDLGVBQWUsQ0FBQyxHQUN4QixHQUFHLE1BQU0sS0FBSyxDQUFDLEtBQUssQ0FBQztRQUNwQixNQUFNLEVBQUUsU0FBUztRQUNqQixNQUFNLEVBQUUsQ0FBQyxJQUFJLENBQUM7UUFDZCxPQUFPLEVBQUU7WUFDUCxZQUFZLEVBQUUsUUFBUSxDQUFDLEVBQUU7WUFDekIsSUFBSSxFQUFFLFFBQVE7U0FDZjtLQUNGLENBQUMsQ0FBQztJQUVILElBQUksZUFBZSxFQUFFLENBQUM7UUFDcEIsTUFBTSxJQUFJLG1CQUFXLENBQ25CLG1CQUFXLENBQUMsS0FBSyxDQUFDLFFBQVEsRUFDMUIseUJBQXlCLENBQzFCLENBQUM7SUFDSixDQUFDO0lBRUQsTUFBTSxRQUFRLEdBQUcsR0FBRyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsZUFBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQ3RELE1BQU0sUUFBUSxDQUFDLElBQUksQ0FBQztRQUNsQixJQUFJLEVBQUUseUJBQWEsQ0FBQyxTQUFTO1FBQzdCLElBQUksRUFBRTtZQUNKLElBQUksRUFBRTtnQkFDSixNQUFNLEVBQUUsRUFBRSxHQUFHLFVBQVUsRUFBRSxLQUFLLEVBQUUsVUFBVSxDQUFDLEtBQUssSUFBSSxNQUFNLENBQUMsS0FBSyxFQUFFO2dCQUNsRSxNQUFNO2dCQUNOLGdCQUFnQixFQUFFLEdBQUcsQ0FBQyxZQUFZLEVBQUUsZ0JBQWdCO2dCQUNwRCxvQkFBb0IsRUFBRSxRQUFRLENBQUMsU0FBUzthQUN6QztZQUNELElBQUksRUFBRSxRQUFRO1lBQ2QsWUFBWSxFQUFFLFFBQVEsQ0FBQyxFQUFFO1NBQzFCO0tBQ0YsQ0FBQyxDQUFDO0lBRUgsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFFLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQztBQUNyQyxDQUFDLENBQUM7QUF6RFcsUUFBQSxJQUFJLFFBeURmIn0=