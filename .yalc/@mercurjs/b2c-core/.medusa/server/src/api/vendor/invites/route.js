"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GET = exports.POST = void 0;
const utils_1 = require("@medusajs/framework/utils");
const framework_1 = require("@mercurjs/framework");
const utils_2 = require("../../../shared/infra/http/utils");
const workflows_1 = require("../../../workflows/seller/workflows");
/**
 * @oas [post] /vendor/invites
 * operationId: "VendorCreateInvite"
 * summary: "Create a Member Invite"
 * description: "Creates a new member invite for the authenticated vendor."
 * x-authenticated: true
 * requestBody:
 *   content:
 *     application/json:
 *       schema:
 *         $ref: "#/components/schemas/VendorInviteMember"
 * responses:
 *   "201":
 *     description: Created
 *     content:
 *       application/json:
 *         schema:
 *           type: object
 *           properties:
 *             invite:
 *               $ref: "#/components/schemas/VendorMemberInvite"
 * tags:
 *   - Vendor Invites
 * security:
 *   - api_token: []
 *   - cookie_auth: []
 */
const POST = async (req, res) => {
    const query = req.scope.resolve(utils_1.ContainerRegistrationKeys.QUERY);
    const seller = await (0, utils_2.fetchSellerByAuthActorId)(req.auth_context.actor_id, req.scope, ["id", "name"]);
    const { result: created } = await (0, workflows_1.inviteMemberWorkflow)(req.scope).run({
        input: {
            ...req.validatedBody,
            seller_id: seller.id,
        },
    });
    const { data: [invite], } = await query.graph({
        entity: "member_invite",
        fields: req.queryConfig.fields,
        filters: { id: created.id },
    }, { throwIfKeyNotFound: true });
    const { data: [member], } = await query.graph({
        entity: "member",
        fields: req.queryConfig.fields,
        filters: { id: req.auth_context.actor_id },
    }, { throwIfKeyNotFound: true });
    const eventBus = req.scope.resolve(utils_1.Modules.EVENT_BUS);
    await eventBus.emit({
        name: framework_1.SellerTeamInviteEvent.CREATED,
        data: {
            user_name: member.email || seller.name,
            store_name: seller.name,
            token: created.token,
            id: invite.id,
            email: invite.email,
        },
    });
    res.status(201).json({ invite });
};
exports.POST = POST;
/**
 * @oas [get] /vendor/invites
 * operationId: "VendorListInvites"
 * summary: "List Member Invites"
 * description: "Retrieves a list of member invites for the authenticated vendor."
 * x-authenticated: true
 * parameters:
 *   - in: query
 *     name: limit
 *     schema:
 *       type: number
 *     description: The number of items to return. Default 50.
 *   - in: query
 *     name: offset
 *     schema:
 *       type: number
 *     description: The number of items to skip before starting the response. Default 0.
 *   - in: query
 *     name: fields
 *     schema:
 *       type: string
 *     description: Comma-separated fields that should be included in the returned data.
 *   - in: query
 *     name: order
 *     schema:
 *       type: string
 *     description: Field used to order the results.
 * responses:
 *   "200":
 *     description: OK
 *     content:
 *       application/json:
 *         schema:
 *           type: object
 *           properties:
 *             invites:
 *               type: array
 *               items:
 *                 $ref: "#/components/schemas/VendorMemberInvite"
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
 *   - Vendor Invites
 * security:
 *   - api_token: []
 *   - cookie_auth: []
 */
const GET = async (req, res) => {
    const query = req.scope.resolve(utils_1.ContainerRegistrationKeys.QUERY);
    const { data: invites, metadata } = await query.graph({
        entity: "member_invite",
        fields: req.queryConfig.fields,
        filters: req.filterableFields,
        pagination: {
            ...req.queryConfig.pagination,
        },
    });
    res.json({
        invites,
        count: metadata.count,
        offset: metadata.skip,
        limit: metadata.take,
    });
};
exports.GET = GET;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvYXBpL3ZlbmRvci9pbnZpdGVzL3JvdXRlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUlBLHFEQUErRTtBQUUvRSxtREFBNEQ7QUFFNUQsNERBQTRFO0FBQzVFLG1FQUEyRTtBQUczRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0EwQkc7QUFDSSxNQUFNLElBQUksR0FBRyxLQUFLLEVBQ3ZCLEdBQXVELEVBQ3ZELEdBQW1CLEVBQ25CLEVBQUU7SUFDRixNQUFNLEtBQUssR0FBRyxHQUFHLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxpQ0FBeUIsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUVqRSxNQUFNLE1BQU0sR0FBRyxNQUFNLElBQUEsZ0NBQXdCLEVBQzNDLEdBQUcsQ0FBQyxZQUFZLENBQUMsUUFBUSxFQUN6QixHQUFHLENBQUMsS0FBSyxFQUNULENBQUMsSUFBSSxFQUFFLE1BQU0sQ0FBQyxDQUNmLENBQUM7SUFFRixNQUFNLEVBQUUsTUFBTSxFQUFFLE9BQU8sRUFBRSxHQUFHLE1BQU0sSUFBQSxnQ0FBb0IsRUFBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDO1FBQ3BFLEtBQUssRUFBRTtZQUNMLEdBQUcsR0FBRyxDQUFDLGFBQWE7WUFDcEIsU0FBUyxFQUFFLE1BQU0sQ0FBQyxFQUFFO1NBQ3JCO0tBQ0YsQ0FBQyxDQUFDO0lBRUgsTUFBTSxFQUNKLElBQUksRUFBRSxDQUFDLE1BQU0sQ0FBQyxHQUNmLEdBQUcsTUFBTSxLQUFLLENBQUMsS0FBSyxDQUNuQjtRQUNFLE1BQU0sRUFBRSxlQUFlO1FBQ3ZCLE1BQU0sRUFBRSxHQUFHLENBQUMsV0FBVyxDQUFDLE1BQU07UUFDOUIsT0FBTyxFQUFFLEVBQUUsRUFBRSxFQUFFLE9BQU8sQ0FBQyxFQUFFLEVBQUU7S0FDNUIsRUFDRCxFQUFFLGtCQUFrQixFQUFFLElBQUksRUFBRSxDQUM3QixDQUFDO0lBRUYsTUFBTSxFQUNKLElBQUksRUFBRSxDQUFDLE1BQU0sQ0FBQyxHQUNmLEdBQUcsTUFBTSxLQUFLLENBQUMsS0FBSyxDQUNuQjtRQUNFLE1BQU0sRUFBRSxRQUFRO1FBQ2hCLE1BQU0sRUFBRSxHQUFHLENBQUMsV0FBVyxDQUFDLE1BQU07UUFDOUIsT0FBTyxFQUFFLEVBQUUsRUFBRSxFQUFFLEdBQUcsQ0FBQyxZQUFZLENBQUMsUUFBUSxFQUFFO0tBQzNDLEVBQ0QsRUFBRSxrQkFBa0IsRUFBRSxJQUFJLEVBQUUsQ0FDN0IsQ0FBQztJQUVGLE1BQU0sUUFBUSxHQUFHLEdBQUcsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLGVBQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUN0RCxNQUFNLFFBQVEsQ0FBQyxJQUFJLENBQUM7UUFDbEIsSUFBSSxFQUFFLGlDQUFxQixDQUFDLE9BQU87UUFDbkMsSUFBSSxFQUFFO1lBQ0osU0FBUyxFQUFFLE1BQU0sQ0FBQyxLQUFLLElBQUksTUFBTSxDQUFDLElBQUk7WUFDdEMsVUFBVSxFQUFFLE1BQU0sQ0FBQyxJQUFJO1lBQ3ZCLEtBQUssRUFBRSxPQUFPLENBQUMsS0FBSztZQUNwQixFQUFFLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDYixLQUFLLEVBQUUsTUFBTSxDQUFDLEtBQUs7U0FDcEI7S0FDRixDQUFDLENBQUM7SUFDSCxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLE1BQU0sRUFBRSxDQUFDLENBQUM7QUFDbkMsQ0FBQyxDQUFDO0FBckRXLFFBQUEsSUFBSSxRQXFEZjtBQUVGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQXFERztBQUNJLE1BQU0sR0FBRyxHQUFHLEtBQUssRUFDdEIsR0FBK0IsRUFDL0IsR0FBbUIsRUFDbkIsRUFBRTtJQUNGLE1BQU0sS0FBSyxHQUFHLEdBQUcsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLGlDQUF5QixDQUFDLEtBQUssQ0FBQyxDQUFDO0lBRWpFLE1BQU0sRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLFFBQVEsRUFBRSxHQUFHLE1BQU0sS0FBSyxDQUFDLEtBQUssQ0FBQztRQUNwRCxNQUFNLEVBQUUsZUFBZTtRQUN2QixNQUFNLEVBQUUsR0FBRyxDQUFDLFdBQVcsQ0FBQyxNQUFNO1FBQzlCLE9BQU8sRUFBRSxHQUFHLENBQUMsZ0JBQWdCO1FBQzdCLFVBQVUsRUFBRTtZQUNWLEdBQUcsR0FBRyxDQUFDLFdBQVcsQ0FBQyxVQUFVO1NBQzlCO0tBQ0YsQ0FBQyxDQUFDO0lBRUgsR0FBRyxDQUFDLElBQUksQ0FBQztRQUNQLE9BQU87UUFDUCxLQUFLLEVBQUUsUUFBUyxDQUFDLEtBQUs7UUFDdEIsTUFBTSxFQUFFLFFBQVMsQ0FBQyxJQUFJO1FBQ3RCLEtBQUssRUFBRSxRQUFTLENBQUMsSUFBSTtLQUN0QixDQUFDLENBQUM7QUFDTCxDQUFDLENBQUM7QUFyQlcsUUFBQSxHQUFHLE9BcUJkIn0=