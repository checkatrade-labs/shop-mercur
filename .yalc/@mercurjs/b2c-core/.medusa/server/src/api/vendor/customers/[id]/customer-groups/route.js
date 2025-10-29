"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.POST = void 0;
const utils_1 = require("@medusajs/framework/utils");
const core_flows_1 = require("@medusajs/medusa/core-flows");
const utils_2 = require("../../../../../shared/infra/http/utils");
const utils_3 = require("../../utils");
/**
 * @oas [post] /vendor/customers/{id}/customer-groups
 * operationId: "VendorLinkCustomerToCustomerGroups"
 * summary: "Link customers to customer group"
 * description: "Adds or removes customer groups to a customer"
 * x-authenticated: true
 * parameters:
 *   - in: path
 *     name: id
 *     required: true
 *     description: The ID of the Customer.
 *     schema:
 *       type: string
 * requestBody:
 *   content:
 *     application/json:
 *       schema:
 *         $ref: "#/components/schemas/VendorUpdateCustomersCustomerGroups"
 * responses:
 *   "200":
 *     description: Ok
 *     content:
 *       application/json:
 *         schema:
 *           type: object
 *           properties:
 *             customer:
 *               $ref: "#/components/schemas/VendorCustomer"
 * tags:
 *   - Vendor Customers
 * security:
 *   - api_token: []
 *   - cookie_auth: []
 */
const POST = async (req, res) => {
    const query = req.scope.resolve(utils_1.ContainerRegistrationKeys.QUERY);
    const seller = await (0, utils_2.fetchSellerByAuthActorId)(req.auth_context.actor_id, req.scope);
    await (0, utils_3.validateCustomerGroupsOwnership)(req.scope, seller.id, req.validatedBody.add.concat(req.validatedBody.remove));
    await core_flows_1.linkCustomerGroupsToCustomerWorkflow.run({
        container: req.scope,
        input: {
            id: req.params.id,
            ...req.validatedBody
        }
    });
    const { data: [customer] } = await query.graph({
        entity: 'customer',
        fields: req.queryConfig.fields,
        filters: {
            id: req.params.id
        }
    });
    res.json({
        customer
    });
};
exports.POST = POST;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvYXBpL3ZlbmRvci9jdXN0b21lcnMvW2lkXS9jdXN0b21lci1ncm91cHMvcm91dGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQ0EscURBQXFFO0FBQ3JFLDREQUFrRjtBQUVsRixrRUFBaUY7QUFDakYsdUNBQTZEO0FBRzdEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0FpQ0c7QUFDSSxNQUFNLElBQUksR0FBRyxLQUFLLEVBQ3ZCLEdBQStELEVBQy9ELEdBQW1CLEVBQ25CLEVBQUU7SUFDRixNQUFNLEtBQUssR0FBRyxHQUFHLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxpQ0FBeUIsQ0FBQyxLQUFLLENBQUMsQ0FBQTtJQUNoRSxNQUFNLE1BQU0sR0FBRyxNQUFNLElBQUEsZ0NBQXdCLEVBQzNDLEdBQUcsQ0FBQyxZQUFZLENBQUMsUUFBUSxFQUN6QixHQUFHLENBQUMsS0FBSyxDQUNWLENBQUE7SUFFRCxNQUFNLElBQUEsdUNBQStCLEVBQ25DLEdBQUcsQ0FBQyxLQUFLLEVBQ1QsTUFBTSxDQUFDLEVBQUUsRUFDVCxHQUFHLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsQ0FDdkQsQ0FBQTtJQUVELE1BQU0saURBQW9DLENBQUMsR0FBRyxDQUFDO1FBQzdDLFNBQVMsRUFBRSxHQUFHLENBQUMsS0FBSztRQUNwQixLQUFLLEVBQUU7WUFDTCxFQUFFLEVBQUUsR0FBRyxDQUFDLE1BQU0sQ0FBQyxFQUFFO1lBQ2pCLEdBQUcsR0FBRyxDQUFDLGFBQWE7U0FDckI7S0FDRixDQUFDLENBQUE7SUFFRixNQUFNLEVBQ0osSUFBSSxFQUFFLENBQUMsUUFBUSxDQUFDLEVBQ2pCLEdBQUcsTUFBTSxLQUFLLENBQUMsS0FBSyxDQUFDO1FBQ3BCLE1BQU0sRUFBRSxVQUFVO1FBQ2xCLE1BQU0sRUFBRSxHQUFHLENBQUMsV0FBVyxDQUFDLE1BQU07UUFDOUIsT0FBTyxFQUFFO1lBQ1AsRUFBRSxFQUFFLEdBQUcsQ0FBQyxNQUFNLENBQUMsRUFBRTtTQUNsQjtLQUNGLENBQUMsQ0FBQTtJQUVGLEdBQUcsQ0FBQyxJQUFJLENBQUM7UUFDUCxRQUFRO0tBQ1QsQ0FBQyxDQUFBO0FBQ0osQ0FBQyxDQUFBO0FBckNZLFFBQUEsSUFBSSxRQXFDaEIifQ==