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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRtaW4uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvc2hhcmVkL2luZnJhL2h0dHAvdXRpbHMvYWRtaW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQ0EscURBQXFFO0FBRTlELE1BQU0sZ0JBQWdCLEdBQUcsS0FBSyxFQUNuQyxLQUFzQixFQUNILEVBQUU7SUFDckIsTUFBTSxLQUFLLEdBQUcsS0FBSyxDQUFDLE9BQU8sQ0FBQyxpQ0FBeUIsQ0FBQyxLQUFLLENBQUMsQ0FBQTtJQUU1RCxNQUFNLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxHQUFHLE1BQU0sS0FBSyxDQUFDLEtBQUssQ0FBQztRQUN6QyxNQUFNLEVBQUUsTUFBTTtRQUNkLE1BQU0sRUFBRSxDQUFDLE9BQU8sQ0FBQztLQUNsQixDQUFDLENBQUE7SUFFRixPQUFPLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQTtBQUMzQyxDQUFDLENBQUE7QUFYWSxRQUFBLGdCQUFnQixvQkFXNUIifQ==