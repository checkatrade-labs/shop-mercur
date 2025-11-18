"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchAdminEmails = void 0;
const utils_1 = require("@medusajs/framework/utils");
const fetchAdminEmails = async (scope) => {
    const query = scope.resolve(utils_1.ContainerRegistrationKeys.QUERY);
    const { data: admins } = await query.graph({
        entity: 'user',
        fields: ['email']
    });
    return admins.map((admin) => admin.email);
};
exports.fetchAdminEmails = fetchAdminEmails;
//# sourceMappingURL=admin.js.map