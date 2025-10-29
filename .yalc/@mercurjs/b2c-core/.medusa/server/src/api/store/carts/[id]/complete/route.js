"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.POST = void 0;
const workflows_1 = require("../../../../../workflows/cart/workflows");
const workflows_2 = require("../../../../../workflows/order-set/workflows");
const POST = async (req, res) => {
    const cart_id = req.params.id;
    const { result } = await (0, workflows_1.splitAndCompleteCartWorkflow)(req.scope).run({
        input: { id: cart_id },
        context: { transactionId: cart_id }
    });
    const { result: { data } } = await (0, workflows_2.getFormattedOrderSetListWorkflow)(req.scope).run({
        input: { filters: { id: result.id } }
    });
    res.json({
        order_set: data[0]
    });
};
exports.POST = POST;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvYXBpL3N0b3JlL2NhcnRzL1tpZF0vY29tcGxldGUvcm91dGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBRUEsdUVBQXNGO0FBQ3RGLDRFQUErRjtBQUV4RixNQUFNLElBQUksR0FBRyxLQUFLLEVBQUUsR0FBa0IsRUFBRSxHQUFtQixFQUFFLEVBQUU7SUFDcEUsTUFBTSxPQUFPLEdBQUcsR0FBRyxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUE7SUFFN0IsTUFBTSxFQUFFLE1BQU0sRUFBRSxHQUFHLE1BQU0sSUFBQSx3Q0FBNEIsRUFBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDO1FBQ25FLEtBQUssRUFBRSxFQUFFLEVBQUUsRUFBRSxPQUFPLEVBQUU7UUFDdEIsT0FBTyxFQUFFLEVBQUUsYUFBYSxFQUFFLE9BQU8sRUFBRTtLQUNwQyxDQUFDLENBQUE7SUFFRixNQUFNLEVBQ0osTUFBTSxFQUFFLEVBQUUsSUFBSSxFQUFFLEVBQ2pCLEdBQUcsTUFBTSxJQUFBLDRDQUFnQyxFQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUM7UUFDeEQsS0FBSyxFQUFFLEVBQUUsT0FBTyxFQUFFLEVBQUUsRUFBRSxFQUFFLE1BQU0sQ0FBQyxFQUFFLEVBQUUsRUFBRTtLQUN0QyxDQUFDLENBQUE7SUFFRixHQUFHLENBQUMsSUFBSSxDQUFDO1FBQ1AsU0FBUyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUM7S0FDbkIsQ0FBQyxDQUFBO0FBQ0osQ0FBQyxDQUFBO0FBakJZLFFBQUEsSUFBSSxRQWlCaEIifQ==