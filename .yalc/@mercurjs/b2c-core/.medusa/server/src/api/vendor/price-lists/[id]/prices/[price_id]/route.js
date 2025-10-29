"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DELETE = void 0;
const utils_1 = require("@medusajs/framework/utils");
const core_flows_1 = require("@medusajs/medusa/core-flows");
/**
 * @oas [delete] /vendor/price-lists/{id}/prices/{price_id}
 * operationId: "VendorDeletePriceListPriceById"
 * summary: "Deletes price list price"
 * description: "Deletes price list price by id."
 * x-authenticated: true
 * parameters:
 * - in: path
 *   name: id
 *   required: true
 *   description: The ID of the price list.
 *   schema:
 *     type: string
 * - in: path
 *   name: price_id
 *   required: true
 *   description: The ID of the price.
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
 *             id:
 *               type: string
 *               description: The ID of the deleted Price
 *             object:
 *               type: string
 *               description: The type of the object that was deleted
 *             deleted:
 *               type: boolean
 *               description: Whether or not the items were deleted
 * tags:
 *   - Vendor Price Lists
 * security:
 *   - api_token: []
 *   - cookie_auth: []
 */
const DELETE = async (req, res) => {
    const query = req.scope.resolve(utils_1.ContainerRegistrationKeys.QUERY);
    const { data: [price] } = await query.graph({
        entity: 'price',
        fields: ['price_list_id'],
        filters: {
            id: req.params.price_id
        }
    });
    if (price.price_list_id !== req.params.id) {
        throw new utils_1.MedusaError(utils_1.MedusaError.Types.INVALID_DATA, 'Invalid price_id!');
    }
    await core_flows_1.batchPriceListPricesWorkflow.run({
        container: req.scope,
        input: {
            data: {
                delete: [req.params.price_id]
            }
        }
    });
    res.status(200).json({
        id: req.params.price_id,
        object: 'price',
        deleted: true
    });
};
exports.DELETE = DELETE;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvYXBpL3ZlbmRvci9wcmljZS1saXN0cy9baWRdL3ByaWNlcy9bcHJpY2VfaWRdL3JvdXRlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUNBLHFEQUdrQztBQUNsQyw0REFBMEU7QUFFMUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBeUNHO0FBQ0ksTUFBTSxNQUFNLEdBQUcsS0FBSyxFQUN6QixHQUErQixFQUMvQixHQUFtQixFQUNuQixFQUFFO0lBQ0YsTUFBTSxLQUFLLEdBQUcsR0FBRyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsaUNBQXlCLENBQUMsS0FBSyxDQUFDLENBQUE7SUFFaEUsTUFBTSxFQUNKLElBQUksRUFBRSxDQUFDLEtBQUssQ0FBQyxFQUNkLEdBQUcsTUFBTSxLQUFLLENBQUMsS0FBSyxDQUFDO1FBQ3BCLE1BQU0sRUFBRSxPQUFPO1FBQ2YsTUFBTSxFQUFFLENBQUMsZUFBZSxDQUFDO1FBQ3pCLE9BQU8sRUFBRTtZQUNQLEVBQUUsRUFBRSxHQUFHLENBQUMsTUFBTSxDQUFDLFFBQVE7U0FDeEI7S0FDRixDQUFDLENBQUE7SUFFRixJQUFJLEtBQUssQ0FBQyxhQUFhLEtBQUssR0FBRyxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUUsQ0FBQztRQUMxQyxNQUFNLElBQUksbUJBQVcsQ0FBQyxtQkFBVyxDQUFDLEtBQUssQ0FBQyxZQUFZLEVBQUUsbUJBQW1CLENBQUMsQ0FBQTtJQUM1RSxDQUFDO0lBRUQsTUFBTSx5Q0FBNEIsQ0FBQyxHQUFHLENBQUM7UUFDckMsU0FBUyxFQUFFLEdBQUcsQ0FBQyxLQUFLO1FBQ3BCLEtBQUssRUFBRTtZQUNMLElBQUksRUFBRTtnQkFDSixNQUFNLEVBQUUsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQzthQUM5QjtTQUNGO0tBQ0YsQ0FBQyxDQUFBO0lBRUYsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUM7UUFDbkIsRUFBRSxFQUFFLEdBQUcsQ0FBQyxNQUFNLENBQUMsUUFBUTtRQUN2QixNQUFNLEVBQUUsT0FBTztRQUNmLE9BQU8sRUFBRSxJQUFJO0tBQ2QsQ0FBQyxDQUFBO0FBQ0osQ0FBQyxDQUFBO0FBbENZLFFBQUEsTUFBTSxVQWtDbEIifQ==