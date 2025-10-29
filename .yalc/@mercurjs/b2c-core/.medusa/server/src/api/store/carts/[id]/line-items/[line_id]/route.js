"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DELETE = void 0;
const workflows_1 = require("../../../../../../workflows/cart/workflows");
const DELETE = async (req, res) => {
    const id = req.params.line_id;
    await (0, workflows_1.deleteSellerLineItemWorkflow)(req.scope).run({
        input: { cart_id: req.params.id, id }
    });
    res.status(200).json({
        id: id,
        object: 'line-item',
        deleted: true
    });
};
exports.DELETE = DELETE;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvYXBpL3N0b3JlL2NhcnRzL1tpZF0vbGluZS1pdGVtcy9bbGluZV9pZF0vcm91dGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBR0EsMEVBQXlGO0FBRWxGLE1BQU0sTUFBTSxHQUFHLEtBQUssRUFBRSxHQUFrQixFQUFFLEdBQW1CLEVBQUUsRUFBRTtJQUN0RSxNQUFNLEVBQUUsR0FBRyxHQUFHLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQTtJQUU3QixNQUFNLElBQUEsd0NBQTRCLEVBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQztRQUNoRCxLQUFLLEVBQUUsRUFBRSxPQUFPLEVBQUUsR0FBRyxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFO0tBQ3RDLENBQUMsQ0FBQTtJQUVGLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDO1FBQ25CLEVBQUUsRUFBRSxFQUFFO1FBQ04sTUFBTSxFQUFFLFdBQVc7UUFDbkIsT0FBTyxFQUFFLElBQUk7S0FDZCxDQUFDLENBQUE7QUFDSixDQUFDLENBQUE7QUFaWSxRQUFBLE1BQU0sVUFZbEIifQ==