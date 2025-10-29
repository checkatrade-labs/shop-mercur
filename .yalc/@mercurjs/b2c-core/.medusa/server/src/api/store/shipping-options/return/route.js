"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GET = void 0;
const workflows_1 = require("../../../../workflows/cart/workflows");
/**
 * @oas [get] /store/shipping-options/return
 * operationId: "GetReturnShippingOptions"
 * summary: "Get Return Shipping Options"
 * description: "Retrieves a list of return shipping options for a specific order"
 * tags:
 *   - Store Shipping Options
 * parameters:
 *   - name: order_id
 *     in: query
 *     required: true
 *     schema:
 *       type: string
 *     description: The ID of the order to get return shipping options for
 * responses:
 *   200:
 *     description: Successfully retrieved return shipping options
 *     content:
 *       application/json:
 *         schema:
 *           type: object
 *           properties:
 *             shipping_options:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: string
 *                     description: The ID of the shipping option
 *                   name:
 *                     type: string
 *                     description: The name of the shipping option
 *                   price_type:
 *                     type: string
 *                     description: The type of price calculation
 *                     enum: [flat_rate, calculated]
 *                   amount:
 *                     type: number
 *                     description: The amount to charge for the shipping option
 *                   data:
 *                     type: object
 *                     description: Additional data about the shipping option
 *                   requirements:
 *                     type: object
 *                     description: Requirements for the shipping option
 */
const GET = async (req, res) => {
    const { order_id } = req.validatedQuery;
    const { result: shippingOptions } = await workflows_1.listSellerReturnShippingOptionsForOrderWorkflow.run({
        container: req.scope,
        input: {
            order_id
        }
    });
    res.json({
        shipping_options: shippingOptions
    });
};
exports.GET = GET;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvYXBpL3N0b3JlL3NoaXBwaW5nLW9wdGlvbnMvcmV0dXJuL3JvdXRlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUVBLG9FQUFzRztBQUd0Rzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQThDRztBQUNJLE1BQU0sR0FBRyxHQUFHLEtBQUssRUFDdEIsR0FBd0UsRUFDeEUsR0FBbUIsRUFDbkIsRUFBRTtJQUNGLE1BQU0sRUFBRSxRQUFRLEVBQUUsR0FBRyxHQUFHLENBQUMsY0FBYyxDQUFBO0lBRXZDLE1BQU0sRUFBRSxNQUFNLEVBQUUsZUFBZSxFQUFFLEdBQy9CLE1BQU0sMkRBQStDLENBQUMsR0FBRyxDQUFDO1FBQ3hELFNBQVMsRUFBRSxHQUFHLENBQUMsS0FBSztRQUNwQixLQUFLLEVBQUU7WUFDTCxRQUFRO1NBQ1Q7S0FDRixDQUFDLENBQUE7SUFFSixHQUFHLENBQUMsSUFBSSxDQUFDO1FBQ1AsZ0JBQWdCLEVBQUUsZUFBZTtLQUNsQyxDQUFDLENBQUE7QUFDSixDQUFDLENBQUE7QUFqQlksUUFBQSxHQUFHLE9BaUJmIn0=