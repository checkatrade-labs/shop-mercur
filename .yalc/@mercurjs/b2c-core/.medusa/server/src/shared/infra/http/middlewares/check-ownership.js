"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkResourceOwnershipByResourceId = void 0;
const utils_1 = require("@medusajs/framework/utils");
/**
 * Middleware that verifies if the authenticated member owns/has access to the requested resource.
 * This is done by checking if the member's seller ID matches the resource's seller ID.
 *
 * @param options - Configuration options for the ownership check
 * @param options.entryPoint - The entity type to verify ownership of (e.g. 'seller_product', 'service_zone')
 * @param options.filterField - Field used to filter/lookup the resource (defaults to 'id')
 * @param options.paramIdField - Request parameter containing the resource ID (defaults to 'id')
 *
 * @throws {MedusaError} If the member does not own the resource
 *
 * @example
 * // Basic usage - check ownership of vendor product
 * app.use(checkResourceOwnershipByParamId({
 *   entryPoint: 'seller_product'
 * }))
 *
 * @example
 * // Custom field usage - check ownership of service zone
 * app.use(checkResourceOwnershipByParamId({
 *   entryPoint: 'service_zone',
 *   filterField: 'service_zone_id',
 *   resourceId: (req) => req.params.zone_id
 * }))
 */
const checkResourceOwnershipByResourceId = ({ entryPoint, filterField = 'id', resourceId = (req) => req.params.id }) => {
    return async (req, res, next) => {
        const query = req.scope.resolve(utils_1.ContainerRegistrationKeys.QUERY);
        const { data: [member] } = await query.graph({
            entity: 'member',
            fields: ['seller.id'],
            filters: {
                id: req.auth_context.actor_id
            }
        }, { throwIfKeyNotFound: true });
        const id = resourceId(req);
        const { data: [resource] } = await query.graph({
            entity: entryPoint,
            fields: ['seller_id'],
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
        if (member.seller.id !== resource.seller_id) {
            res.status(403).json({
                message: 'You are not allowed to perform this action',
                type: utils_1.MedusaError.Types.NOT_ALLOWED
            });
            return;
        }
        next();
    };
};
exports.checkResourceOwnershipByResourceId = checkResourceOwnershipByResourceId;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2stb3duZXJzaGlwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL3NoYXJlZC9pbmZyYS9odHRwL21pZGRsZXdhcmVzL2NoZWNrLW93bmVyc2hpcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFHQSxxREFHa0M7QUFRbEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQXdCRztBQUNJLE1BQU0sa0NBQWtDLEdBQUcsQ0FBTyxFQUN2RCxVQUFVLEVBQ1YsV0FBVyxHQUFHLElBQUksRUFDbEIsVUFBVSxHQUFHLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFDYSxFQUFFLEVBQUU7SUFDcEQsT0FBTyxLQUFLLEVBQ1YsR0FBcUMsRUFDckMsR0FBbUIsRUFDbkIsSUFBa0IsRUFDbEIsRUFBRTtRQUNGLE1BQU0sS0FBSyxHQUFHLEdBQUcsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLGlDQUF5QixDQUFDLEtBQUssQ0FBQyxDQUFBO1FBRWhFLE1BQU0sRUFDSixJQUFJLEVBQUUsQ0FBQyxNQUFNLENBQUMsRUFDZixHQUFHLE1BQU0sS0FBSyxDQUFDLEtBQUssQ0FDbkI7WUFDRSxNQUFNLEVBQUUsUUFBUTtZQUNoQixNQUFNLEVBQUUsQ0FBQyxXQUFXLENBQUM7WUFDckIsT0FBTyxFQUFFO2dCQUNQLEVBQUUsRUFBRSxHQUFHLENBQUMsWUFBWSxDQUFDLFFBQVE7YUFDOUI7U0FDRixFQUNELEVBQUUsa0JBQWtCLEVBQUUsSUFBSSxFQUFFLENBQzdCLENBQUE7UUFFRCxNQUFNLEVBQUUsR0FBRyxVQUFVLENBQUMsR0FBRyxDQUFDLENBQUE7UUFFMUIsTUFBTSxFQUNKLElBQUksRUFBRSxDQUFDLFFBQVEsQ0FBQyxFQUNqQixHQUFHLE1BQU0sS0FBSyxDQUFDLEtBQUssQ0FBQztZQUNwQixNQUFNLEVBQUUsVUFBVTtZQUNsQixNQUFNLEVBQUUsQ0FBQyxXQUFXLENBQUM7WUFDckIsT0FBTyxFQUFFO2dCQUNQLENBQUMsV0FBVyxDQUFDLEVBQUUsRUFBRTthQUNsQjtTQUNGLENBQUMsQ0FBQTtRQUVGLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztZQUNkLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDO2dCQUNuQixPQUFPLEVBQUUsR0FBRyxVQUFVLFNBQVMsV0FBVyxLQUFLLEVBQUUsWUFBWTtnQkFDN0QsSUFBSSxFQUFFLG1CQUFXLENBQUMsS0FBSyxDQUFDLFNBQVM7YUFDbEMsQ0FBQyxDQUFBO1lBQ0YsT0FBTTtRQUNSLENBQUM7UUFFRCxJQUFJLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRSxLQUFLLFFBQVEsQ0FBQyxTQUFTLEVBQUUsQ0FBQztZQUM1QyxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQztnQkFDbkIsT0FBTyxFQUFFLDRDQUE0QztnQkFDckQsSUFBSSxFQUFFLG1CQUFXLENBQUMsS0FBSyxDQUFDLFdBQVc7YUFDcEMsQ0FBQyxDQUFBO1lBQ0YsT0FBTTtRQUNSLENBQUM7UUFFRCxJQUFJLEVBQUUsQ0FBQTtJQUNSLENBQUMsQ0FBQTtBQUNILENBQUMsQ0FBQTtBQXZEWSxRQUFBLGtDQUFrQyxzQ0F1RDlDIn0=