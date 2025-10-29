"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.POST = POST;
const workflows_1 = require("../../../../workflows/seller/workflows");
/**
 * @oas [post] /admin/sellers/invite
 * operationId: "AdminInviteSeller"
 * summary: "Invite Seller"
 * description: "Sends an invitation to a new seller to join the platform."
 * x-authenticated: true
 * requestBody:
 *   required: true
 *   content:
 *     application/json:
 *       schema:
 *         type: object
 *         required:
 *           - email
 *         properties:
 *           email:
 *             type: string
 *             format: email
 *             description: The email address of the seller to invite.
 *           registration_url:
 *             type: string
 *             default: "http://localhost:5173/register"
 *             description: The registration URL for the invitation.
 * responses:
 *   "201":
 *     description: Created
 *     content:
 *       application/json:
 *         schema:
 *           type: object
 *           properties:
 *             invitation:
 *               $ref: "#/components/schemas/AdminSellerInvitation"
 *   "400":
 *     description: Bad Request
 *     content:
 *       application/json:
 *         schema:
 *           type: object
 *           properties:
 *             message:
 *               type: string
 *               example: "Invalid email format"
 * tags:
 *   - Admin Sellers
 * security:
 *   - api_token: []
 *   - cookie_auth: []
 */
async function POST(req, res) {
    const { result: invitation } = await workflows_1.inviteSellerWorkflow.run({
        container: req.scope,
        input: req.validatedBody
    });
    res.status(201).json({ invitation });
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvYXBpL2FkbWluL3NlbGxlcnMvaW52aXRlL3JvdXRlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBc0RBLG9CQVVDO0FBOURELHNFQUE2RTtBQUc3RTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBZ0RHO0FBQ0ksS0FBSyxVQUFVLElBQUksQ0FDeEIsR0FBeUMsRUFDekMsR0FBbUI7SUFFbkIsTUFBTSxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsR0FBRyxNQUFNLGdDQUFvQixDQUFDLEdBQUcsQ0FBQztRQUM1RCxTQUFTLEVBQUUsR0FBRyxDQUFDLEtBQUs7UUFDcEIsS0FBSyxFQUFFLEdBQUcsQ0FBQyxhQUFhO0tBQ3pCLENBQUMsQ0FBQTtJQUVGLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsVUFBVSxFQUFFLENBQUMsQ0FBQTtBQUN0QyxDQUFDIn0=