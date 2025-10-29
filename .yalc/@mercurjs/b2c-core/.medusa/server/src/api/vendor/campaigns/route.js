"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.POST = exports.GET = void 0;
const utils_1 = require("@medusajs/framework/utils");
const seller_campaign_1 = __importDefault(require("../../../links/seller-campaign"));
const utils_2 = require("../../../shared/infra/http/utils");
const workflows_1 = require("../../../workflows/campaigns/workflows");
/**
 * @oas [get] /vendor/campaigns
 * operationId: "VendorListCampaigns"
 * summary: "List Campaigns"
 * description: "Retrieves a list of campaigns for the authenticated vendor."
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
 *             campaigns:
 *               type: array
 *               items:
 *                 $ref: "#/components/schemas/VendorCampaign"
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
 *   - Vendor Campaigns
 * security:
 *   - api_token: []
 *   - cookie_auth: []
 */
const GET = async (req, res) => {
    const query = req.scope.resolve(utils_1.ContainerRegistrationKeys.QUERY);
    const { data: relations, metadata } = await query.graph({
        entity: seller_campaign_1.default.entryPoint,
        fields: req.queryConfig.fields.map((field) => `campaign.${field}`),
        filters: {
            ...req.filterableFields,
            deleted_at: {
                $eq: null,
            },
        },
        pagination: req.queryConfig.pagination,
    });
    const activeCampaigns = relations
        .map((relation) => relation.campaign)
        .filter((campaign) => !!campaign);
    res.json({
        campaigns: activeCampaigns,
        count: activeCampaigns.length,
        offset: metadata?.skip,
        limit: metadata?.take,
    });
};
exports.GET = GET;
/**
 * @oas [post] /vendor/campaigns
 * operationId: "VendorCreateCampaign"
 * summary: "Create campaign"
 * description: "Creates a new campaign for the authenticated vendor."
 * x-authenticated: true
 * parameters:
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
 *         $ref: "#/components/schemas/VendorCreateCampaign"
 * responses:
 *   "201":
 *     description: Created
 *     content:
 *       application/json:
 *         schema:
 *           type: object
 *           properties:
 *             campaign:
 *               $ref: "#/components/schemas/VendorCampaign"
 * tags:
 *   - Vendor Campaigns
 * security:
 *   - api_token: []
 *   - cookie_auth: []
 */
const POST = async (req, res) => {
    const query = req.scope.resolve(utils_1.ContainerRegistrationKeys.QUERY);
    const seller = await (0, utils_2.fetchSellerByAuthActorId)(req.auth_context?.actor_id, req.scope);
    const { result } = await workflows_1.createVendorCampaignWorkflow.run({
        container: req.scope,
        input: { campaign: req.validatedBody, seller_id: seller.id },
    });
    const { data: [campaign], } = await query.graph({
        entity: "campaign",
        fields: req.queryConfig.fields,
        filters: {
            id: result[0].id,
        },
    });
    res.status(201).json({ campaign });
};
exports.POST = POST;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvYXBpL3ZlbmRvci9jYW1wYWlnbnMvcm91dGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBSUEscURBQXNFO0FBRXRFLHFGQUE0RDtBQUM1RCw0REFBNEU7QUFDNUUsc0VBQXNGO0FBR3RGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0FtREc7QUFDSSxNQUFNLEdBQUcsR0FBRyxLQUFLLEVBQ3RCLEdBQStCLEVBQy9CLEdBQW1CLEVBQ25CLEVBQUU7SUFDRixNQUFNLEtBQUssR0FBRyxHQUFHLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxpQ0FBeUIsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUVqRSxNQUFNLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSxRQUFRLEVBQUUsR0FBRyxNQUFNLEtBQUssQ0FBQyxLQUFLLENBQUM7UUFDdEQsTUFBTSxFQUFFLHlCQUFjLENBQUMsVUFBVTtRQUNqQyxNQUFNLEVBQUUsR0FBRyxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxZQUFZLEtBQUssRUFBRSxDQUFDO1FBQ2xFLE9BQU8sRUFBRTtZQUNQLEdBQUcsR0FBRyxDQUFDLGdCQUFnQjtZQUN2QixVQUFVLEVBQUU7Z0JBQ1YsR0FBRyxFQUFFLElBQUk7YUFDVjtTQUNGO1FBQ0QsVUFBVSxFQUFFLEdBQUcsQ0FBQyxXQUFXLENBQUMsVUFBVTtLQUN2QyxDQUFDLENBQUM7SUFFSCxNQUFNLGVBQWUsR0FBRyxTQUFTO1NBQzlCLEdBQUcsQ0FBQyxDQUFDLFFBQVEsRUFBRSxFQUFFLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQztTQUNwQyxNQUFNLENBQUMsQ0FBQyxRQUFRLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUVwQyxHQUFHLENBQUMsSUFBSSxDQUFDO1FBQ1AsU0FBUyxFQUFFLGVBQWU7UUFDMUIsS0FBSyxFQUFFLGVBQWUsQ0FBQyxNQUFNO1FBQzdCLE1BQU0sRUFBRSxRQUFRLEVBQUUsSUFBSTtRQUN0QixLQUFLLEVBQUUsUUFBUSxFQUFFLElBQUk7S0FDdEIsQ0FBQyxDQUFDO0FBQ0wsQ0FBQyxDQUFDO0FBNUJXLFFBQUEsR0FBRyxPQTRCZDtBQUVGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0FpQ0c7QUFDSSxNQUFNLElBQUksR0FBRyxLQUFLLEVBQ3ZCLEdBQXlELEVBQ3pELEdBQW1CLEVBQ25CLEVBQUU7SUFDRixNQUFNLEtBQUssR0FBRyxHQUFHLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxpQ0FBeUIsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNqRSxNQUFNLE1BQU0sR0FBRyxNQUFNLElBQUEsZ0NBQXdCLEVBQzNDLEdBQUcsQ0FBQyxZQUFZLEVBQUUsUUFBUSxFQUMxQixHQUFHLENBQUMsS0FBSyxDQUNWLENBQUM7SUFFRixNQUFNLEVBQUUsTUFBTSxFQUFFLEdBQUcsTUFBTSx3Q0FBNEIsQ0FBQyxHQUFHLENBQUM7UUFDeEQsU0FBUyxFQUFFLEdBQUcsQ0FBQyxLQUFLO1FBQ3BCLEtBQUssRUFBRSxFQUFFLFFBQVEsRUFBRSxHQUFHLENBQUMsYUFBYSxFQUFFLFNBQVMsRUFBRSxNQUFNLENBQUMsRUFBRSxFQUFFO0tBQzdELENBQUMsQ0FBQztJQUVILE1BQU0sRUFDSixJQUFJLEVBQUUsQ0FBQyxRQUFRLENBQUMsR0FDakIsR0FBRyxNQUFNLEtBQUssQ0FBQyxLQUFLLENBQUM7UUFDcEIsTUFBTSxFQUFFLFVBQVU7UUFDbEIsTUFBTSxFQUFFLEdBQUcsQ0FBQyxXQUFXLENBQUMsTUFBTTtRQUM5QixPQUFPLEVBQUU7WUFDUCxFQUFFLEVBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUU7U0FDakI7S0FDRixDQUFDLENBQUM7SUFFSCxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLFFBQVEsRUFBRSxDQUFDLENBQUM7QUFDckMsQ0FBQyxDQUFDO0FBMUJXLFFBQUEsSUFBSSxRQTBCZiJ9