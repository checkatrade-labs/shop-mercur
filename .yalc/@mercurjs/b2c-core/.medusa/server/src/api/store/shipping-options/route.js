"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GET = void 0;
const workflows_1 = require("../../../workflows/cart/workflows");
const GET = async (req, res) => {
    const { cart_id, is_return } = req.filterableFields;
    const { result: shipping_options } = await workflows_1.listSellerShippingOptionsForCartWorkflow.run({
        container: req.scope,
        input: { cart_id, is_return: !!is_return }
    });
    res.json({ shipping_options });
};
exports.GET = GET;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvYXBpL3N0b3JlL3NoaXBwaW5nLW9wdGlvbnMvcm91dGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBRUEsaUVBQTRGO0FBRXJGLE1BQU0sR0FBRyxHQUFHLEtBQUssRUFBRSxHQUFrQixFQUFFLEdBQW1CLEVBQUUsRUFBRTtJQUNuRSxNQUFNLEVBQUUsT0FBTyxFQUFFLFNBQVMsRUFBRSxHQUFHLEdBQUcsQ0FBQyxnQkFHbEMsQ0FBQTtJQUVELE1BQU0sRUFBRSxNQUFNLEVBQUUsZ0JBQWdCLEVBQUUsR0FDaEMsTUFBTSxvREFBd0MsQ0FBQyxHQUFHLENBQUM7UUFDakQsU0FBUyxFQUFFLEdBQUcsQ0FBQyxLQUFLO1FBQ3BCLEtBQUssRUFBRSxFQUFFLE9BQU8sRUFBRSxTQUFTLEVBQUUsQ0FBQyxDQUFDLFNBQVMsRUFBRTtLQUMzQyxDQUFDLENBQUE7SUFFSixHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUUsZ0JBQWdCLEVBQUUsQ0FBQyxDQUFBO0FBQ2hDLENBQUMsQ0FBQTtBQWJZLFFBQUEsR0FBRyxPQWFmIn0=