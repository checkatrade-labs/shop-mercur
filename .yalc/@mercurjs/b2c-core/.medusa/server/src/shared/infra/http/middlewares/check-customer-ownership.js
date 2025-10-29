"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkCustomerResourceOwnershipByResourceId = void 0;
const utils_1 = require("@medusajs/framework/utils");
const checkCustomerResourceOwnershipByResourceId = ({ entryPoint, filterField = 'id', resourceId = (req) => req.params.id }) => {
    return async (req, res, next) => {
        const query = req.scope.resolve(utils_1.ContainerRegistrationKeys.QUERY);
        const id = resourceId(req);
        const { data: [resource] } = await query.graph({
            entity: entryPoint,
            fields: ['customer_id'],
            filters: {
                [filterField]: id
            }
        });
        if (!resource) {
            res.status(404).json({
                message: `${entryPoint} with ${filterField}: ${id} not found`,
                type: utils_1.MedusaError.Types.NOT_FOUND
            });
            return;
        }
        if (req.auth_context.actor_id !== resource.customer_id) {
            res.status(403).json({
                message: 'You are not allowed to perform this action',
                type: utils_1.MedusaError.Types.NOT_ALLOWED
            });
            return;
        }
        next();
    };
};
exports.checkCustomerResourceOwnershipByResourceId = checkCustomerResourceOwnershipByResourceId;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2stY3VzdG9tZXItb3duZXJzaGlwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL3NoYXJlZC9pbmZyYS9odHRwL21pZGRsZXdhcmVzL2NoZWNrLWN1c3RvbWVyLW93bmVyc2hpcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFHQSxxREFHa0M7QUFRM0IsTUFBTSwwQ0FBMEMsR0FBRyxDQUFPLEVBQy9ELFVBQVUsRUFDVixXQUFXLEdBQUcsSUFBSSxFQUNsQixVQUFVLEdBQUcsQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUNhLEVBQUUsRUFBRTtJQUNwRCxPQUFPLEtBQUssRUFDVixHQUFxQyxFQUNyQyxHQUFtQixFQUNuQixJQUFrQixFQUNsQixFQUFFO1FBQ0YsTUFBTSxLQUFLLEdBQUcsR0FBRyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsaUNBQXlCLENBQUMsS0FBSyxDQUFDLENBQUE7UUFFaEUsTUFBTSxFQUFFLEdBQUcsVUFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFBO1FBRTFCLE1BQU0sRUFDSixJQUFJLEVBQUUsQ0FBQyxRQUFRLENBQUMsRUFDakIsR0FBRyxNQUFNLEtBQUssQ0FBQyxLQUFLLENBQUM7WUFDcEIsTUFBTSxFQUFFLFVBQVU7WUFDbEIsTUFBTSxFQUFFLENBQUMsYUFBYSxDQUFDO1lBQ3ZCLE9BQU8sRUFBRTtnQkFDUCxDQUFDLFdBQVcsQ0FBQyxFQUFFLEVBQUU7YUFDbEI7U0FDRixDQUFDLENBQUE7UUFFRixJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7WUFDZCxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQztnQkFDbkIsT0FBTyxFQUFFLEdBQUcsVUFBVSxTQUFTLFdBQVcsS0FBSyxFQUFFLFlBQVk7Z0JBQzdELElBQUksRUFBRSxtQkFBVyxDQUFDLEtBQUssQ0FBQyxTQUFTO2FBQ2xDLENBQUMsQ0FBQTtZQUNGLE9BQU07UUFDUixDQUFDO1FBRUQsSUFBSSxHQUFHLENBQUMsWUFBWSxDQUFDLFFBQVEsS0FBSyxRQUFRLENBQUMsV0FBVyxFQUFFLENBQUM7WUFDdkQsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUM7Z0JBQ25CLE9BQU8sRUFBRSw0Q0FBNEM7Z0JBQ3JELElBQUksRUFBRSxtQkFBVyxDQUFDLEtBQUssQ0FBQyxXQUFXO2FBQ3BDLENBQUMsQ0FBQTtZQUNGLE9BQU07UUFDUixDQUFDO1FBRUQsSUFBSSxFQUFFLENBQUE7SUFDUixDQUFDLENBQUE7QUFDSCxDQUFDLENBQUE7QUExQ1ksUUFBQSwwQ0FBMEMsOENBMEN0RCJ9