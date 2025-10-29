"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GET = void 0;
const utils_1 = require("@medusajs/framework/utils");
/**
 * @oas [get] /vendor/fulfillment-providers/{id}/options
 * operationId: "VendorListFulfillmentProviderOptions"
 * summary: "List Fulfillment Provider Options"
 * description: "Retrieves a list of available Fulfillment Provider Options."
 * x-authenticated: true
 * parameters:
 * - in: path
 *   name: id
 *   required: true
 *   description: The ID of the fulfillment provider.
 *   schema:
 *     type: string
 * responses:
 *   "200":
 *     description: OK
 *     content:
 *       application/json:
 *         schema:
 *           type: object
 *           properties:
 *             fulfillment_options:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                     id:
 *                       type: string
 *                     is_return:
 *                       type: boolean
 * tags:
 *   - Vendor Fulfillment Providers
 * security:
 *   - api_token: []
 *   - cookie_auth: []
 */
const GET = async (req, res) => {
    const fulfillmentProviderService = req.scope.resolve(utils_1.Modules.FULFILLMENT);
    const fulfillment_options = await fulfillmentProviderService.retrieveFulfillmentOptions(req.params.id);
    res.json({
        fulfillment_options
    });
};
exports.GET = GET;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvYXBpL3ZlbmRvci9mdWxmaWxsbWVudC1wcm92aWRlcnMvW2lkXS9vcHRpb25zL3JvdXRlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUNBLHFEQUFtRDtBQUVuRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0FtQ0c7QUFDSSxNQUFNLEdBQUcsR0FBRyxLQUFLLEVBQ3RCLEdBQStCLEVBQy9CLEdBQW1CLEVBQ25CLEVBQUU7SUFDRixNQUFNLDBCQUEwQixHQUFHLEdBQUcsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLGVBQU8sQ0FBQyxXQUFXLENBQUMsQ0FBQTtJQUV6RSxNQUFNLG1CQUFtQixHQUN2QixNQUFNLDBCQUEwQixDQUFDLDBCQUEwQixDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLENBQUE7SUFFNUUsR0FBRyxDQUFDLElBQUksQ0FBQztRQUNQLG1CQUFtQjtLQUNwQixDQUFDLENBQUE7QUFDSixDQUFDLENBQUE7QUFaWSxRQUFBLEdBQUcsT0FZZiJ9