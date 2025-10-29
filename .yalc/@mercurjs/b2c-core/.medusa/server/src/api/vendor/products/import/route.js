"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.POST = void 0;
const utils_1 = require("@medusajs/framework/utils");
const utils_2 = require("../../../../shared/infra/http/utils");
const workflows_1 = require("../../../../workflows/seller/workflows");
const POST = async (req, res) => {
    const input = req.file;
    if (!input) {
        throw new utils_1.MedusaError(utils_1.MedusaError.Types.INVALID_DATA, 'No file was uploaded for importing');
    }
    const seller = await (0, utils_2.fetchSellerByAuthActorId)(req.auth_context.actor_id, req.scope);
    const { result: products } = await workflows_1.importSellerProductsWorkflow.run({
        container: req.scope,
        input: {
            file_content: input.buffer.toString('utf-8'),
            seller_id: seller.id,
            submitter_id: req.auth_context.actor_id
        }
    });
    res.status(201).json({ products });
};
exports.POST = POST;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvYXBpL3ZlbmRvci9wcm9kdWN0cy9pbXBvcnQvcm91dGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQ0EscURBQXVEO0FBRXZELCtEQUE4RTtBQUM5RSxzRUFBcUY7QUFFOUUsTUFBTSxJQUFJLEdBQUcsS0FBSyxFQUN2QixHQUErQixFQUMvQixHQUFtQixFQUNuQixFQUFFO0lBQ0YsTUFBTSxLQUFLLEdBQUksR0FBVyxDQUFDLElBQUksQ0FBQTtJQUUvQixJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDWCxNQUFNLElBQUksbUJBQVcsQ0FDbkIsbUJBQVcsQ0FBQyxLQUFLLENBQUMsWUFBWSxFQUM5QixvQ0FBb0MsQ0FDckMsQ0FBQTtJQUNILENBQUM7SUFFRCxNQUFNLE1BQU0sR0FBRyxNQUFNLElBQUEsZ0NBQXdCLEVBQzNDLEdBQUcsQ0FBQyxZQUFZLENBQUMsUUFBUSxFQUN6QixHQUFHLENBQUMsS0FBSyxDQUNWLENBQUE7SUFFRCxNQUFNLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxHQUFHLE1BQU0sd0NBQTRCLENBQUMsR0FBRyxDQUFDO1FBQ2xFLFNBQVMsRUFBRSxHQUFHLENBQUMsS0FBSztRQUNwQixLQUFLLEVBQUU7WUFDTCxZQUFZLEVBQUUsS0FBSyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDO1lBQzVDLFNBQVMsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNwQixZQUFZLEVBQUUsR0FBRyxDQUFDLFlBQVksQ0FBQyxRQUFRO1NBQ3hDO0tBQ0YsQ0FBQyxDQUFBO0lBRUYsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxRQUFRLEVBQUUsQ0FBQyxDQUFBO0FBQ3BDLENBQUMsQ0FBQTtBQTVCWSxRQUFBLElBQUksUUE0QmhCIn0=