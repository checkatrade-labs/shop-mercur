"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.POST = void 0;
const utils_1 = require("../../../../shared/infra/http/utils");
const workflows_1 = require("../../../../workflows/seller/workflows");
const POST = async (req, res) => {
    const seller = await (0, utils_1.fetchSellerByAuthActorId)(req.auth_context.actor_id, req.scope);
    const { result: fileData } = await workflows_1.exportSellerProductsWorkflow.run({
        container: req.scope,
        input: seller.id
    });
    res.json({
        url: fileData.url
    });
};
exports.POST = POST;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvYXBpL3ZlbmRvci9wcm9kdWN0cy9leHBvcnQvcm91dGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBRUEsK0RBQThFO0FBQzlFLHNFQUFxRjtBQUU5RSxNQUFNLElBQUksR0FBRyxLQUFLLEVBQ3ZCLEdBQStCLEVBQy9CLEdBQW1CLEVBQ25CLEVBQUU7SUFDRixNQUFNLE1BQU0sR0FBRyxNQUFNLElBQUEsZ0NBQXdCLEVBQzNDLEdBQUcsQ0FBQyxZQUFZLENBQUMsUUFBUSxFQUN6QixHQUFHLENBQUMsS0FBSyxDQUNWLENBQUE7SUFFRCxNQUFNLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxHQUFHLE1BQU0sd0NBQTRCLENBQUMsR0FBRyxDQUFDO1FBQ2xFLFNBQVMsRUFBRSxHQUFHLENBQUMsS0FBSztRQUNwQixLQUFLLEVBQUUsTUFBTSxDQUFDLEVBQUU7S0FDakIsQ0FBQyxDQUFBO0lBRUYsR0FBRyxDQUFDLElBQUksQ0FBQztRQUNQLEdBQUcsRUFBRSxRQUFRLENBQUMsR0FBRztLQUNsQixDQUFDLENBQUE7QUFDSixDQUFDLENBQUE7QUFqQlksUUFBQSxJQUFJLFFBaUJoQiJ9