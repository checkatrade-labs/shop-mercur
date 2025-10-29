"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.POST = exports.GET = void 0;
const utils_1 = require("@medusajs/framework/utils");
const seller_customer_group_1 = __importDefault(require("../../../links/seller-customer-group"));
const utils_2 = require("../../../shared/infra/http/utils");
const workflows_1 = require("../../../workflows/customer-groups/workflows");
/**
 * @oas [get] /vendor/customer-groups
 * operationId: "VendorListCustomerGroups"
 * summary: "List Customer Groups"
 * description: "Retrieves a list of customer groups."
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
 * responses:
 *   "200":
 *     description: OK
 *     content:
 *       application/json:
 *         schema:
 *           type: object
 *           properties:
 *             customer_groups:
 *               type: array
 *               items:
 *                 $ref: "#/components/schemas/VendorCustomerGroup"
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
 *   - Vendor Customer Groups
 * security:
 *   - api_token: []
 *   - cookie_auth: []
 */
const GET = async (req, res) => {
    const query = req.scope.resolve(utils_1.ContainerRegistrationKeys.QUERY);
    const { data: customer_groups, metadata } = await query.graph({
        entity: seller_customer_group_1.default.entryPoint,
        fields: req.queryConfig.fields.map((field) => `customer_group.${field}`),
        pagination: req.queryConfig.pagination,
        filters: {
            ...req.filterableFields,
            deleted_at: {
                $eq: null,
            },
        },
    });
    res.json({
        customer_groups,
        count: metadata?.count,
        offset: metadata?.skip,
        limit: metadata?.take,
    });
};
exports.GET = GET;
/**
 * @oas [post] /vendor/customer-groups
 * operationId: "VendorCreateCustomerGroup"
 * summary: "Create a customer group"
 * description: "Creates a new customer group"
 * x-authenticated: true
 * requestBody:
 *   content:
 *     application/json:
 *       schema:
 *         $ref: "#/components/schemas/VendorCreateCustomerGroup"
 * responses:
 *   "201":
 *     description: Created
 *     content:
 *       application/json:
 *         schema:
 *           type: object
 *           properties:
 *             customer_group:
 *               $ref: "#/components/schemas/VendorCustomerGroup"
 * tags:
 *   - Vendor Customer Groups
 * security:
 *   - api_token: []
 *   - cookie_auth: []
 */
const POST = async (req, res) => {
    const seller = await (0, utils_2.fetchSellerByAuthActorId)(req.auth_context.actor_id, req.scope);
    const { result: customer_group } = await workflows_1.createSellerCustomerGroupWorkflow.run({
        container: req.scope,
        input: {
            ...req.validatedBody,
            created_by: req.auth_context.actor_id,
            seller_id: seller.id,
        },
    });
    res.status(201).json({
        customer_group,
    });
};
exports.POST = POST;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvYXBpL3ZlbmRvci9jdXN0b21lci1ncm91cHMvcm91dGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBSUEscURBQXNFO0FBRXRFLGlHQUF1RTtBQUN2RSw0REFBNEU7QUFDNUUsNEVBQWlHO0FBR2pHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0FnREc7QUFDSSxNQUFNLEdBQUcsR0FBRyxLQUFLLEVBQ3RCLEdBQStCLEVBQy9CLEdBQW1CLEVBQ25CLEVBQUU7SUFDRixNQUFNLEtBQUssR0FBRyxHQUFHLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxpQ0FBeUIsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUVqRSxNQUFNLEVBQUUsSUFBSSxFQUFFLGVBQWUsRUFBRSxRQUFRLEVBQUUsR0FBRyxNQUFNLEtBQUssQ0FBQyxLQUFLLENBQUM7UUFDNUQsTUFBTSxFQUFFLCtCQUFtQixDQUFDLFVBQVU7UUFDdEMsTUFBTSxFQUFFLEdBQUcsQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsa0JBQWtCLEtBQUssRUFBRSxDQUFDO1FBQ3hFLFVBQVUsRUFBRSxHQUFHLENBQUMsV0FBVyxDQUFDLFVBQVU7UUFDdEMsT0FBTyxFQUFFO1lBQ1AsR0FBRyxHQUFHLENBQUMsZ0JBQWdCO1lBQ3ZCLFVBQVUsRUFBRTtnQkFDVixHQUFHLEVBQUUsSUFBSTthQUNWO1NBQ0Y7S0FDRixDQUFDLENBQUM7SUFFSCxHQUFHLENBQUMsSUFBSSxDQUFDO1FBQ1AsZUFBZTtRQUNmLEtBQUssRUFBRSxRQUFRLEVBQUUsS0FBSztRQUN0QixNQUFNLEVBQUUsUUFBUSxFQUFFLElBQUk7UUFDdEIsS0FBSyxFQUFFLFFBQVEsRUFBRSxJQUFJO0tBQ3RCLENBQUMsQ0FBQztBQUNMLENBQUMsQ0FBQztBQXhCVyxRQUFBLEdBQUcsT0F3QmQ7QUFFRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0EwQkc7QUFDSSxNQUFNLElBQUksR0FBRyxLQUFLLEVBQ3ZCLEdBQThELEVBQzlELEdBQW1CLEVBQ25CLEVBQUU7SUFDRixNQUFNLE1BQU0sR0FBRyxNQUFNLElBQUEsZ0NBQXdCLEVBQzNDLEdBQUcsQ0FBQyxZQUFZLENBQUMsUUFBUSxFQUN6QixHQUFHLENBQUMsS0FBSyxDQUNWLENBQUM7SUFFRixNQUFNLEVBQUUsTUFBTSxFQUFFLGNBQWMsRUFBRSxHQUM5QixNQUFNLDZDQUFpQyxDQUFDLEdBQUcsQ0FBQztRQUMxQyxTQUFTLEVBQUUsR0FBRyxDQUFDLEtBQUs7UUFDcEIsS0FBSyxFQUFFO1lBQ0wsR0FBRyxHQUFHLENBQUMsYUFBYTtZQUNwQixVQUFVLEVBQUUsR0FBRyxDQUFDLFlBQVksQ0FBQyxRQUFRO1lBQ3JDLFNBQVMsRUFBRSxNQUFNLENBQUMsRUFBRTtTQUNyQjtLQUNGLENBQUMsQ0FBQztJQUVMLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDO1FBQ25CLGNBQWM7S0FDZixDQUFDLENBQUM7QUFDTCxDQUFDLENBQUM7QUF0QlcsUUFBQSxJQUFJLFFBc0JmIn0=