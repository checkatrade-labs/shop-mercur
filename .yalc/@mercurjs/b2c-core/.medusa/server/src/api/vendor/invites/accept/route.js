"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.POST = void 0;
const utils_1 = require("@medusajs/framework/utils");
const workflows_1 = require("../../../../workflows/seller/workflows");
/**
 * @oas [post] /vendor/invites/{id}/accept
 * operationId: "VendorAcceptInvite"
 * summary: "Accept a Member Invite"
 * description: "Accepts a member invite using the provided token and creates a new member."
 * x-authenticated: true
 * parameters:
 *   - in: path
 *     name: id
 *     required: true
 *     description: The ID of the invite to accept.
 *     schema:
 *       type: string
 * requestBody:
 *   content:
 *     application/json:
 *       schema:
 *         $ref: "#/components/schemas/VendorAcceptMemberInvite"
 * responses:
 *   "200":
 *     description: OK
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
    const { result } = await (0, workflows_1.acceptMemberInvitesWorkflow)(req.scope).run({
        input: {
            invite: req.validatedBody,
            authIdentityId: req.auth_context.auth_identity_id,
        },
    });
    const { data: [invite], } = await query.graph({
        entity: "member_invite",
        fields: req.queryConfig.fields,
        filters: { id: result.id },
    }, { throwIfKeyNotFound: true });
    res.json({ invite });
};
exports.POST = POST;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvYXBpL3ZlbmRvci9pbnZpdGVzL2FjY2VwdC9yb3V0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFJQSxxREFBc0U7QUFFdEUsc0VBQXFGO0FBR3JGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0FpQ0c7QUFDSSxNQUFNLElBQUksR0FBRyxLQUFLLEVBQ3ZCLEdBQTZELEVBQzdELEdBQW1CLEVBQ25CLEVBQUU7SUFDRixNQUFNLEtBQUssR0FBRyxHQUFHLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxpQ0FBeUIsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUVqRSxNQUFNLEVBQUUsTUFBTSxFQUFFLEdBQUcsTUFBTSxJQUFBLHVDQUEyQixFQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUM7UUFDbEUsS0FBSyxFQUFFO1lBQ0wsTUFBTSxFQUFFLEdBQUcsQ0FBQyxhQUFhO1lBQ3pCLGNBQWMsRUFBRSxHQUFHLENBQUMsWUFBWSxDQUFDLGdCQUFnQjtTQUNsRDtLQUNGLENBQUMsQ0FBQztJQUVILE1BQU0sRUFDSixJQUFJLEVBQUUsQ0FBQyxNQUFNLENBQUMsR0FDZixHQUFHLE1BQU0sS0FBSyxDQUFDLEtBQUssQ0FDbkI7UUFDRSxNQUFNLEVBQUUsZUFBZTtRQUN2QixNQUFNLEVBQUUsR0FBRyxDQUFDLFdBQVcsQ0FBQyxNQUFNO1FBQzlCLE9BQU8sRUFBRSxFQUFFLEVBQUUsRUFBRSxNQUFNLENBQUMsRUFBRSxFQUFFO0tBQzNCLEVBQ0QsRUFBRSxrQkFBa0IsRUFBRSxJQUFJLEVBQUUsQ0FDN0IsQ0FBQztJQUVGLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRSxNQUFNLEVBQUUsQ0FBQyxDQUFDO0FBQ3ZCLENBQUMsQ0FBQztBQXpCVyxRQUFBLElBQUksUUF5QmYifQ==