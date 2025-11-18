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
//# sourceMappingURL=check-customer-ownership.js.map