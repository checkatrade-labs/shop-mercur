"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchSellerByAuthActorId = void 0;
const utils_1 = require("@medusajs/framework/utils");
const fetchSellerByAuthActorId = async (authActorId, scope, fields = ['id']) => {
    const query = scope.resolve(utils_1.ContainerRegistrationKeys.QUERY);
    const { data: [seller] } = await query.graph({
        entity: 'seller',
        filters: {
            members: {
                id: authActorId
            }
        },
        fields
    });
    return seller;
};
exports.fetchSellerByAuthActorId = fetchSellerByAuthActorId;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsbGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL3NoYXJlZC9pbmZyYS9odHRwL3V0aWxzL3NlbGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFDQSxxREFBcUU7QUFJOUQsTUFBTSx3QkFBd0IsR0FBRyxLQUFLLEVBQzNDLFdBQW1CLEVBQ25CLEtBQXNCLEVBQ3RCLFNBQW1CLENBQUMsSUFBSSxDQUFDLEVBQ0wsRUFBRTtJQUN0QixNQUFNLEtBQUssR0FBRyxLQUFLLENBQUMsT0FBTyxDQUFDLGlDQUF5QixDQUFDLEtBQUssQ0FBQyxDQUFBO0lBRTVELE1BQU0sRUFDSixJQUFJLEVBQUUsQ0FBQyxNQUFNLENBQUMsRUFDZixHQUFHLE1BQU0sS0FBSyxDQUFDLEtBQUssQ0FBQztRQUNwQixNQUFNLEVBQUUsUUFBUTtRQUNoQixPQUFPLEVBQUU7WUFDUCxPQUFPLEVBQUU7Z0JBQ1AsRUFBRSxFQUFFLFdBQVc7YUFDaEI7U0FDRjtRQUNELE1BQU07S0FDUCxDQUFDLENBQUE7SUFDRixPQUFPLE1BQU0sQ0FBQTtBQUNmLENBQUMsQ0FBQTtBQW5CWSxRQUFBLHdCQUF3Qiw0QkFtQnBDIn0=