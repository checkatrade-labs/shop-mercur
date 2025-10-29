"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GET = void 0;
const http_1 = require("@medusajs/framework/http");
/**
 * @oas [get] /admin/notifications
 * operationId: "AdminListNotifications"
 * summary: "List Notifications"
 * description: "Retrieves a list of admin notifications from the feed channel."
 * x-authenticated: true
 * parameters:
 *   - name: offset
 *     in: query
 *     schema:
 *       type: number
 *     required: false
 *     description: The number of items to skip before starting to collect the result set.
 *   - name: limit
 *     in: query
 *     schema:
 *       type: number
 *     required: false
 *     description: The number of items to return.
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
 *             notifications:
 *               type: array
 *               items:
 *                 $ref: "#/components/schemas/AdminNotification"
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
 *   - Admin Notifications
 * security:
 *   - api_token: []
 *   - cookie_auth: []
 */
const GET = async (req, res) => {
    const { rows: notifications, metadata } = await (0, http_1.refetchEntities)('notification', { ...req.filterableFields, channel: 'feed' }, req.scope, req.queryConfig.fields, req.queryConfig.pagination);
    res.json({
        notifications,
        count: metadata.count,
        offset: metadata.skip,
        limit: metadata.take
    });
};
exports.GET = GET;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvYXBpL2FkbWluL25vdGlmaWNhdGlvbnMvcm91dGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsbURBSWlDO0FBR2pDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0FtREc7QUFDSSxNQUFNLEdBQUcsR0FBRyxLQUFLLEVBQ3RCLEdBQXNFLEVBQ3RFLEdBQTRELEVBQzVELEVBQUU7SUFDRixNQUFNLEVBQUUsSUFBSSxFQUFFLGFBQWEsRUFBRSxRQUFRLEVBQUUsR0FBRyxNQUFNLElBQUEsc0JBQWUsRUFDN0QsY0FBYyxFQUNkLEVBQUUsR0FBRyxHQUFHLENBQUMsZ0JBQWdCLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxFQUM1QyxHQUFHLENBQUMsS0FBSyxFQUNULEdBQUcsQ0FBQyxXQUFXLENBQUMsTUFBTSxFQUN0QixHQUFHLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FDM0IsQ0FBQTtJQUVELEdBQUcsQ0FBQyxJQUFJLENBQUM7UUFDUCxhQUFhO1FBQ2IsS0FBSyxFQUFFLFFBQVEsQ0FBQyxLQUFLO1FBQ3JCLE1BQU0sRUFBRSxRQUFRLENBQUMsSUFBSTtRQUNyQixLQUFLLEVBQUUsUUFBUSxDQUFDLElBQUk7S0FDckIsQ0FBQyxDQUFBO0FBQ0osQ0FBQyxDQUFBO0FBbEJZLFFBQUEsR0FBRyxPQWtCZiJ9