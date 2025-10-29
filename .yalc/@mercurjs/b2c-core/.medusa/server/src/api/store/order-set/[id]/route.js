"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GET = GET;
const workflows_1 = require("../../../../workflows/order-set/workflows");
const query_config_1 = require("../query-config");
async function GET(req, res) {
    const { id } = req.params;
    const { result: { data } } = await (0, workflows_1.getFormattedOrderSetListWorkflow)(req.scope).run({
        input: { filters: { id }, fields: query_config_1.defaultStoreRetrieveOrderSetFields }
    });
    res.json({
        order_set: data[0]
    });
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvYXBpL3N0b3JlL29yZGVyLXNldC9baWRdL3JvdXRlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBS0Esa0JBZUM7QUFsQkQseUVBQTRGO0FBQzVGLGtEQUFvRTtBQUU3RCxLQUFLLFVBQVUsR0FBRyxDQUN2QixHQUFrQixFQUNsQixHQUFtQjtJQUVuQixNQUFNLEVBQUUsRUFBRSxFQUFFLEdBQUcsR0FBRyxDQUFDLE1BQU0sQ0FBQTtJQUV6QixNQUFNLEVBQ0osTUFBTSxFQUFFLEVBQUUsSUFBSSxFQUFFLEVBQ2pCLEdBQUcsTUFBTSxJQUFBLDRDQUFnQyxFQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUM7UUFDeEQsS0FBSyxFQUFFLEVBQUUsT0FBTyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsTUFBTSxFQUFFLGlEQUFrQyxFQUFFO0tBQ3ZFLENBQUMsQ0FBQTtJQUVGLEdBQUcsQ0FBQyxJQUFJLENBQUM7UUFDUCxTQUFTLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQztLQUNuQixDQUFDLENBQUE7QUFDSixDQUFDIn0=