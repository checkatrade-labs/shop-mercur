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
const seller_shipping_option_1 = __importDefault(require("../../../links/seller-shipping-option"));
const utils_2 = require("../../../shared/infra/http/utils");
/**
 * @oas [post] /vendor/shipping-options
 * operationId: "VendorCreateShippingOption"
 * summary: "Create a Shipping Option"
 * description: "Creates a Shipping Option for authenticated vendor."
 * x-authenticated: true
 * requestBody:
 *   content:
 *     application/json:
 *       schema:
 *         $ref: "#/components/schemas/VendorCreateShippingOption"
 * responses:
 *   "201":
 *     description: Created
 *     content:
 *       application/json:
 *         schema:
 *           type: object
 *           properties:
 *             shipping_option:
 *               $ref: "#/components/schemas/VendorShippingOption"
 * tags:
 *   - Vendor Shipping Options
 * security:
 *   - api_token: []
 *   - cookie_auth: []
 */
const POST = async (req, res) => {
    const query = req.scope.resolve(utils_1.ContainerRegistrationKeys.QUERY);
    const remoteLink = req.scope.resolve(utils_1.ContainerRegistrationKeys.REMOTE_LINK);
    const seller = await (0, utils_2.fetchSellerByAuthActorId)(req.auth_context?.actor_id, req.scope);
    const { result } = await (0, core_flows_1.createShippingOptionsWorkflow)(req.scope).run({
        input: [
            {
                ...req.validatedBody,
                price_type: "flat",
            },
        ],
    });
    // TODO: Move this into createShippingOptionsWorkflow workflow hook
    await remoteLink.create({
        [seller_1.SELLER_MODULE]: {
            seller_id: seller.id,
        },
        [utils_1.Modules.FULFILLMENT]: {
            shipping_option_id: result[0].id,
        },
    });
    const eventBus = req.scope.resolve(utils_1.Modules.EVENT_BUS);
    await eventBus.emit({
        name: framework_1.IntermediateEvents.SHIPPING_OPTION_CHANGED,
        data: { id: result[0].id },
    });
    const { data: [shipping_option], } = await query.graph({
        entity: "shipping_option",
        fields: req.queryConfig.fields,
        filters: { id: result[0].id },
    }, { throwIfKeyNotFound: true });
    res.status(201).json({ shipping_option });
};
exports.POST = POST;
/**
 * @oas [get] /vendor/shipping-options
 * operationId: "VendorListShippingOptions"
 * summary: "List Shipping Options"
 * description: "Retrieves a list of Shipping Options for authenticated vendor."
 * x-authenticated: true
 * responses:
 *   "200":
 *     description: OK
 *     content:
 *       application/json:
 *         schema:
 *           type: object
 *           properties:
 *             shipping_options:
 *               type: array
 *               items:
 *                 $ref: "#/components/schemas/VendorShippingOption"
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
 *   - Vendor Shipping Options
 * security:
 *   - api_token: []
 *   - cookie_auth: []
 */
const GET = async (req, res) => {
    const query = req.scope.resolve(utils_1.ContainerRegistrationKeys.QUERY);
    const { data: sellerShippingOptions, metadata } = await query.graph({
        entity: seller_shipping_option_1.default.entryPoint,
        fields: req.queryConfig.fields.map((field) => `shipping_option.${field}`),
        filters: {
            ...req.filterableFields,
            deleted_at: {
                $eq: null,
            },
        },
        pagination: req.queryConfig.pagination,
    });
    res.json({
        shipping_options: sellerShippingOptions.map((rel) => rel.shipping_option),
        count: metadata.count,
        offset: metadata.skip,
        limit: metadata.take,
    });
};
exports.GET = GET;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvYXBpL3ZlbmRvci9zaGlwcGluZy1vcHRpb25zL3JvdXRlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUlBLHFEQUErRTtBQUMvRSw0REFBNEU7QUFFNUUsbURBQXlEO0FBQ3pELG9EQUF3RDtBQUV4RCxtR0FBeUU7QUFDekUsNERBQTRFO0FBTTVFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQTBCRztBQUNJLE1BQU0sSUFBSSxHQUFHLEtBQUssRUFDdkIsR0FBK0QsRUFDL0QsR0FBbUIsRUFDbkIsRUFBRTtJQUNGLE1BQU0sS0FBSyxHQUFHLEdBQUcsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLGlDQUF5QixDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ2pFLE1BQU0sVUFBVSxHQUFHLEdBQUcsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLGlDQUF5QixDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBRTVFLE1BQU0sTUFBTSxHQUFHLE1BQU0sSUFBQSxnQ0FBd0IsRUFDM0MsR0FBRyxDQUFDLFlBQVksRUFBRSxRQUFRLEVBQzFCLEdBQUcsQ0FBQyxLQUFLLENBQ1YsQ0FBQztJQUVGLE1BQU0sRUFBRSxNQUFNLEVBQUUsR0FBRyxNQUFNLElBQUEsMENBQTZCLEVBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQztRQUNwRSxLQUFLLEVBQUU7WUFDTDtnQkFDRSxHQUFHLEdBQUcsQ0FBQyxhQUFhO2dCQUNwQixVQUFVLEVBQUUsTUFBTTthQUNuQjtTQUNGO0tBQ0YsQ0FBQyxDQUFDO0lBRUgsbUVBQW1FO0lBQ25FLE1BQU0sVUFBVSxDQUFDLE1BQU0sQ0FBQztRQUN0QixDQUFDLHNCQUFhLENBQUMsRUFBRTtZQUNmLFNBQVMsRUFBRSxNQUFNLENBQUMsRUFBRTtTQUNyQjtRQUNELENBQUMsZUFBTyxDQUFDLFdBQVcsQ0FBQyxFQUFFO1lBQ3JCLGtCQUFrQixFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFO1NBQ2pDO0tBQ0YsQ0FBQyxDQUFDO0lBRUgsTUFBTSxRQUFRLEdBQUcsR0FBRyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsZUFBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQ3RELE1BQU0sUUFBUSxDQUFDLElBQUksQ0FBQztRQUNsQixJQUFJLEVBQUUsOEJBQWtCLENBQUMsdUJBQXVCO1FBQ2hELElBQUksRUFBRSxFQUFFLEVBQUUsRUFBRSxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFO0tBQzNCLENBQUMsQ0FBQztJQUVILE1BQU0sRUFDSixJQUFJLEVBQUUsQ0FBQyxlQUFlLENBQUMsR0FDeEIsR0FBRyxNQUFNLEtBQUssQ0FBQyxLQUFLLENBQ25CO1FBQ0UsTUFBTSxFQUFFLGlCQUFpQjtRQUN6QixNQUFNLEVBQUUsR0FBRyxDQUFDLFdBQVcsQ0FBQyxNQUFNO1FBQzlCLE9BQU8sRUFBRSxFQUFFLEVBQUUsRUFBRSxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFO0tBQzlCLEVBQ0QsRUFBRSxrQkFBa0IsRUFBRSxJQUFJLEVBQUUsQ0FDN0IsQ0FBQztJQUVGLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsZUFBZSxFQUFFLENBQUMsQ0FBQztBQUM1QyxDQUFDLENBQUM7QUFqRFcsUUFBQSxJQUFJLFFBaURmO0FBRUY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBZ0NHO0FBQ0ksTUFBTSxHQUFHLEdBQUcsS0FBSyxFQUN0QixHQUE0RCxFQUM1RCxHQUFtQixFQUNuQixFQUFFO0lBQ0YsTUFBTSxLQUFLLEdBQUcsR0FBRyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsaUNBQXlCLENBQUMsS0FBSyxDQUFDLENBQUM7SUFFakUsTUFBTSxFQUFFLElBQUksRUFBRSxxQkFBcUIsRUFBRSxRQUFRLEVBQUUsR0FBRyxNQUFNLEtBQUssQ0FBQyxLQUFLLENBQUM7UUFDbEUsTUFBTSxFQUFFLGdDQUFvQixDQUFDLFVBQVU7UUFDdkMsTUFBTSxFQUFFLEdBQUcsQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsbUJBQW1CLEtBQUssRUFBRSxDQUFDO1FBQ3pFLE9BQU8sRUFBRTtZQUNQLEdBQUcsR0FBRyxDQUFDLGdCQUFnQjtZQUN2QixVQUFVLEVBQUU7Z0JBQ1YsR0FBRyxFQUFFLElBQUk7YUFDVjtTQUNGO1FBQ0QsVUFBVSxFQUFFLEdBQUcsQ0FBQyxXQUFXLENBQUMsVUFBVTtLQUN2QyxDQUFDLENBQUM7SUFFSCxHQUFHLENBQUMsSUFBSSxDQUFDO1FBQ1AsZ0JBQWdCLEVBQUUscUJBQXFCLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxHQUFHLENBQUMsZUFBZSxDQUFDO1FBQ3pFLEtBQUssRUFBRSxRQUFTLENBQUMsS0FBSztRQUN0QixNQUFNLEVBQUUsUUFBUyxDQUFDLElBQUk7UUFDdEIsS0FBSyxFQUFFLFFBQVMsQ0FBQyxJQUFJO0tBQ3RCLENBQUMsQ0FBQztBQUNMLENBQUMsQ0FBQztBQXhCVyxRQUFBLEdBQUcsT0F3QmQifQ==