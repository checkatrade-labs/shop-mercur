"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GET = void 0;
const core_flows_1 = require("@medusajs/core-flows");
const GET = async (req, res) => {
    const workflow = (0, core_flows_1.getOrderDetailWorkflow)(req.scope);
    const { result } = await workflow.run({
        input: {
            fields: req.queryConfig.fields,
            order_id: req.params.id,
            version: req.validatedQuery.version
        }
    });
    if (result.summary) {
        result.summary.pending_difference = '0';
    }
    res.status(200).json({ order: result });
};
exports.GET = GET;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvYXBpL2FkbWluL29yZGVycy9baWRdL3JvdXRlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLHFEQUE2RDtBQVF0RCxNQUFNLEdBQUcsR0FBRyxLQUFLLEVBQ3RCLEdBQThELEVBQzlELEdBQWlELEVBQ2pELEVBQUU7SUFDRixNQUFNLFFBQVEsR0FBRyxJQUFBLG1DQUFzQixFQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQTtJQUNsRCxNQUFNLEVBQUUsTUFBTSxFQUFFLEdBQUcsTUFBTSxRQUFRLENBQUMsR0FBRyxDQUFDO1FBQ3BDLEtBQUssRUFBRTtZQUNMLE1BQU0sRUFBRSxHQUFHLENBQUMsV0FBVyxDQUFDLE1BQU07WUFDOUIsUUFBUSxFQUFFLEdBQUcsQ0FBQyxNQUFNLENBQUMsRUFBRTtZQUN2QixPQUFPLEVBQUUsR0FBRyxDQUFDLGNBQWMsQ0FBQyxPQUFpQjtTQUM5QztLQUNGLENBQUMsQ0FBQTtJQUVGLElBQUksTUFBTSxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQ25CLE1BQU0sQ0FBQyxPQUFPLENBQUMsa0JBQWtCLEdBQUcsR0FBRyxDQUFBO0lBQ3pDLENBQUM7SUFFRCxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLEtBQUssRUFBRSxNQUE4QixFQUFFLENBQUMsQ0FBQTtBQUNqRSxDQUFDLENBQUE7QUFsQlksUUFBQSxHQUFHLE9Ba0JmIn0=