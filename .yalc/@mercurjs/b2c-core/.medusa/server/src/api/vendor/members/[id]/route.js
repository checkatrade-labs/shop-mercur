"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DELETE = exports.GET = exports.POST = void 0;
const utils_1 = require("@medusajs/framework/utils");
const workflows_1 = require("../../../../workflows/seller/workflows");
/**
 * @oas [post] /vendor/members/{id}
 * operationId: "VendorUpdateMemberById"
 * summary: "Update a Member"
 * description: "Updates a member by id for the authenticated vendor."
 * x-authenticated: true
 * parameters:
 *   - in: path
 *     name: id
 *     required: true
 *     description: The ID of the Member.
 *     schema:
 *       type: string
 * requestBody:
 *   content:
 *     application/json:
 *       schema:
 *         $ref: "#/components/schemas/VendorUpdateMember"
 * responses:
 *   "200":
 *     description: OK
 *     content:
 *       application/json:
 *         schema:
 *           type: object
 *           properties:
 *             member:
 *               $ref: "#/components/schemas/VendorMember"
 * tags:
 *   - Vendor Members
 * security:
 *   - api_token: []
 *   - cookie_auth: []
 */
const POST = async (req, res) => {
    const query = req.scope.resolve(utils_1.ContainerRegistrationKeys.QUERY);
    const { id } = req.params;
    await (0, workflows_1.updateMemberWorkflow)(req.scope).run({
        input: {
            id,
            ...req.validatedBody,
        },
    });
    const { data: [member], } = await query.graph({
        entity: "member",
        fields: req.queryConfig.fields,
        filters: { id: id },
    }, { throwIfKeyNotFound: true });
    res.json({ member });
};
exports.POST = POST;
/**
 * @oas [get] /vendor/members/{id}
 * operationId: "VendorGetMemberById"
 * summary: "Get a Member"
 * description: "Retrieves a member by id."
 * x-authenticated: true
 * parameters:
 *   - in: path
 *     name: id
 *     required: true
 *     description: The ID of the Member.
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
 *             member:
 *               $ref: "#/components/schemas/VendorMember"
 * tags:
 *   - Vendor Members
 * security:
 *   - api_token: []
 *   - cookie_auth: []
 */
const GET = async (req, res) => {
    const query = req.scope.resolve(utils_1.ContainerRegistrationKeys.QUERY);
    const { id } = req.params;
    const { data: [member], } = await query.graph({
        entity: "member",
        fields: req.queryConfig.fields,
        filters: { id: id },
    }, { throwIfKeyNotFound: true });
    res.json({ member });
};
exports.GET = GET;
/**
 * @oas [delete] /vendor/members/{id}
 * operationId: "VendorDeleteMemberById"
 * summary: "Delete a Member"
 * description: "Deletes a member by id."
 * x-authenticated: true
 * parameters:
 *   - in: path
 *     name: id
 *     required: true
 *     description: The ID of the Member.
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
 *               description: The ID of the deleted Member
 *             object:
 *               type: string
 *               description: The type of the object that was deleted
 *             deleted:
 *               type: boolean
 *               description: Whether or not the items were deleted
 * tags:
 *   - Vendor Members
 * security:
 *   - api_token: []
 *   - cookie_auth: []
 */
const DELETE = async (req, res) => {
    const { id } = req.params;
    await (0, workflows_1.deleteMemberWorkflow)(req.scope).run({
        input: id,
    });
    res.json({
        id,
        object: "member",
        deleted: true,
    });
};
exports.DELETE = DELETE;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvYXBpL3ZlbmRvci9tZW1iZXJzL1tpZF0vcm91dGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBSUEscURBQXNFO0FBRXRFLHNFQUdnRDtBQUloRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBaUNHO0FBQ0ksTUFBTSxJQUFJLEdBQUcsS0FBSyxFQUN2QixHQUF1RCxFQUN2RCxHQUFtQixFQUNuQixFQUFFO0lBQ0YsTUFBTSxLQUFLLEdBQUcsR0FBRyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsaUNBQXlCLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDakUsTUFBTSxFQUFFLEVBQUUsRUFBRSxHQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUM7SUFFMUIsTUFBTSxJQUFBLGdDQUFvQixFQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUM7UUFDeEMsS0FBSyxFQUFFO1lBQ0wsRUFBRTtZQUNGLEdBQUcsR0FBRyxDQUFDLGFBQWE7U0FDckI7S0FDRixDQUFDLENBQUM7SUFFSCxNQUFNLEVBQ0osSUFBSSxFQUFFLENBQUMsTUFBTSxDQUFDLEdBQ2YsR0FBRyxNQUFNLEtBQUssQ0FBQyxLQUFLLENBQ25CO1FBQ0UsTUFBTSxFQUFFLFFBQVE7UUFDaEIsTUFBTSxFQUFFLEdBQUcsQ0FBQyxXQUFXLENBQUMsTUFBTTtRQUM5QixPQUFPLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFO0tBQ3BCLEVBQ0QsRUFBRSxrQkFBa0IsRUFBRSxJQUFJLEVBQUUsQ0FDN0IsQ0FBQztJQUVGLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRSxNQUFNLEVBQUUsQ0FBQyxDQUFDO0FBQ3ZCLENBQUMsQ0FBQztBQTFCVyxRQUFBLElBQUksUUEwQmY7QUFFRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQTRCRztBQUNJLE1BQU0sR0FBRyxHQUFHLEtBQUssRUFDdEIsR0FBK0IsRUFDL0IsR0FBbUIsRUFDbkIsRUFBRTtJQUNGLE1BQU0sS0FBSyxHQUFHLEdBQUcsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLGlDQUF5QixDQUFDLEtBQUssQ0FBQyxDQUFDO0lBRWpFLE1BQU0sRUFBRSxFQUFFLEVBQUUsR0FBRyxHQUFHLENBQUMsTUFBTSxDQUFDO0lBQzFCLE1BQU0sRUFDSixJQUFJLEVBQUUsQ0FBQyxNQUFNLENBQUMsR0FDZixHQUFHLE1BQU0sS0FBSyxDQUFDLEtBQUssQ0FDbkI7UUFDRSxNQUFNLEVBQUUsUUFBUTtRQUNoQixNQUFNLEVBQUUsR0FBRyxDQUFDLFdBQVcsQ0FBQyxNQUFNO1FBQzlCLE9BQU8sRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUU7S0FDcEIsRUFDRCxFQUFFLGtCQUFrQixFQUFFLElBQUksRUFBRSxDQUM3QixDQUFDO0lBRUYsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFLE1BQU0sRUFBRSxDQUFDLENBQUM7QUFDdkIsQ0FBQyxDQUFDO0FBbkJXLFFBQUEsR0FBRyxPQW1CZDtBQUVGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQW1DRztBQUNJLE1BQU0sTUFBTSxHQUFHLEtBQUssRUFDekIsR0FBK0IsRUFDL0IsR0FBbUIsRUFDbkIsRUFBRTtJQUNGLE1BQU0sRUFBRSxFQUFFLEVBQUUsR0FBRyxHQUFHLENBQUMsTUFBTSxDQUFDO0lBRTFCLE1BQU0sSUFBQSxnQ0FBb0IsRUFBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDO1FBQ3hDLEtBQUssRUFBRSxFQUFFO0tBQ1YsQ0FBQyxDQUFDO0lBRUgsR0FBRyxDQUFDLElBQUksQ0FBQztRQUNQLEVBQUU7UUFDRixNQUFNLEVBQUUsUUFBUTtRQUNoQixPQUFPLEVBQUUsSUFBSTtLQUNkLENBQUMsQ0FBQztBQUNMLENBQUMsQ0FBQztBQWZXLFFBQUEsTUFBTSxVQWVqQiJ9