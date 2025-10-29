"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DELETE = exports.POST = void 0;
const utils_1 = require("@medusajs/framework/utils");
const workflows_1 = require("../../../../../workflows/cart/workflows");
const POST = async (req, res) => {
    const query = req.scope.resolve(utils_1.ContainerRegistrationKeys.QUERY);
    await (0, workflows_1.addSellerShippingMethodToCartWorkflow)(req.scope).run({
        input: {
            cart_id: req.params.id,
            option: {
                id: req.validatedBody.option_id,
                data: req.validatedBody.data
            }
        }
    });
    const { data: [cart] } = await query.graph({
        entity: 'cart',
        filters: {
            id: req.params.id
        },
        fields: req.queryConfig.fields
    });
    res.json({ cart });
};
exports.POST = POST;
const DELETE = async (req, res) => {
    const query = req.scope.resolve(utils_1.ContainerRegistrationKeys.QUERY);
    await workflows_1.removeCartShippingMethodsWorkflow.run({
        container: req.scope,
        input: req.validatedBody
    });
    const { data: [cart] } = await query.graph({
        entity: 'cart',
        filters: {
            id: req.params.id
        },
        fields: req.queryConfig.fields
    });
    res.json({ cart });
};
exports.DELETE = DELETE;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvYXBpL3N0b3JlL2NhcnRzL1tpZF0vc2hpcHBpbmctbWV0aG9kcy9yb3V0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFDQSxxREFBcUU7QUFHckUsdUVBR2dEO0FBR3pDLE1BQU0sSUFBSSxHQUFHLEtBQUssRUFDdkIsR0FBbUQsRUFDbkQsR0FBbUIsRUFDbkIsRUFBRTtJQUNGLE1BQU0sS0FBSyxHQUFHLEdBQUcsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLGlDQUF5QixDQUFDLEtBQUssQ0FBQyxDQUFBO0lBRWhFLE1BQU0sSUFBQSxpREFBcUMsRUFBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDO1FBQ3pELEtBQUssRUFBRTtZQUNMLE9BQU8sRUFBRSxHQUFHLENBQUMsTUFBTSxDQUFDLEVBQUU7WUFDdEIsTUFBTSxFQUFFO2dCQUNOLEVBQUUsRUFBRSxHQUFHLENBQUMsYUFBYSxDQUFDLFNBQVM7Z0JBQy9CLElBQUksRUFBRSxHQUFHLENBQUMsYUFBYSxDQUFDLElBQUk7YUFDN0I7U0FDRjtLQUNGLENBQUMsQ0FBQTtJQUVGLE1BQU0sRUFDSixJQUFJLEVBQUUsQ0FBQyxJQUFJLENBQUMsRUFDYixHQUFHLE1BQU0sS0FBSyxDQUFDLEtBQUssQ0FBQztRQUNwQixNQUFNLEVBQUUsTUFBTTtRQUNkLE9BQU8sRUFBRTtZQUNQLEVBQUUsRUFBRSxHQUFHLENBQUMsTUFBTSxDQUFDLEVBQUU7U0FDbEI7UUFDRCxNQUFNLEVBQUUsR0FBRyxDQUFDLFdBQVcsQ0FBQyxNQUFNO0tBQy9CLENBQUMsQ0FBQTtJQUVGLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFBO0FBQ3BCLENBQUMsQ0FBQTtBQTNCWSxRQUFBLElBQUksUUEyQmhCO0FBRU0sTUFBTSxNQUFNLEdBQUcsS0FBSyxFQUN6QixHQUFzRCxFQUN0RCxHQUFtQixFQUNuQixFQUFFO0lBQ0YsTUFBTSxLQUFLLEdBQUcsR0FBRyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsaUNBQXlCLENBQUMsS0FBSyxDQUFDLENBQUE7SUFFaEUsTUFBTSw2Q0FBaUMsQ0FBQyxHQUFHLENBQUM7UUFDMUMsU0FBUyxFQUFFLEdBQUcsQ0FBQyxLQUFLO1FBQ3BCLEtBQUssRUFBRSxHQUFHLENBQUMsYUFBYTtLQUN6QixDQUFDLENBQUE7SUFFRixNQUFNLEVBQ0osSUFBSSxFQUFFLENBQUMsSUFBSSxDQUFDLEVBQ2IsR0FBRyxNQUFNLEtBQUssQ0FBQyxLQUFLLENBQUM7UUFDcEIsTUFBTSxFQUFFLE1BQU07UUFDZCxPQUFPLEVBQUU7WUFDUCxFQUFFLEVBQUUsR0FBRyxDQUFDLE1BQU0sQ0FBQyxFQUFFO1NBQ2xCO1FBQ0QsTUFBTSxFQUFFLEdBQUcsQ0FBQyxXQUFXLENBQUMsTUFBTTtLQUMvQixDQUFDLENBQUE7SUFFRixHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQTtBQUNwQixDQUFDLENBQUE7QUF0QlksUUFBQSxNQUFNLFVBc0JsQiJ9