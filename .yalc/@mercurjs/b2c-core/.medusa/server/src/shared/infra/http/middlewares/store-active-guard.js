"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.storeActiveGuard = void 0;
const framework_1 = require("@mercurjs/framework");
const seller_1 = require("../utils/seller");
/**
 * Middleware that checks store status and request method to determine access.
 * - Allows all operations if store status is ACTIVE
 * - Allows GET operations for any store status
 * - Blocks all other operations with 403 Forbidden
 */
const storeActiveGuard = async (req, res, next) => {
    const seller = await (0, seller_1.fetchSellerByAuthActorId)(req.auth_context.actor_id, req.scope, ['store_status']);
    const isActiveStore = seller.store_status === framework_1.StoreStatus.ACTIVE;
    const isGetRequest = req.method === 'GET';
    if (isActiveStore || isGetRequest) {
        return next();
    }
    return res.status(403).json({
        message: 'Operation not allowed for current store status'
    });
};
exports.storeActiveGuard = storeActiveGuard;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RvcmUtYWN0aXZlLWd1YXJkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL3NoYXJlZC9pbmZyYS9odHRwL21pZGRsZXdhcmVzL3N0b3JlLWFjdGl2ZS1ndWFyZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFJQSxtREFBaUQ7QUFFakQsNENBQTBEO0FBRTFEOzs7OztHQUtHO0FBQ0ksTUFBTSxnQkFBZ0IsR0FBRyxLQUFLLEVBQ25DLEdBQStCLEVBQy9CLEdBQW1CLEVBQ25CLElBQWtCLEVBQ2xCLEVBQUU7SUFDRixNQUFNLE1BQU0sR0FBRyxNQUFNLElBQUEsaUNBQXdCLEVBQzNDLEdBQUcsQ0FBQyxZQUFZLENBQUMsUUFBUSxFQUN6QixHQUFHLENBQUMsS0FBSyxFQUNULENBQUMsY0FBYyxDQUFDLENBQ2pCLENBQUE7SUFFRCxNQUFNLGFBQWEsR0FBRyxNQUFNLENBQUMsWUFBWSxLQUFLLHVCQUFXLENBQUMsTUFBTSxDQUFBO0lBQ2hFLE1BQU0sWUFBWSxHQUFHLEdBQUcsQ0FBQyxNQUFNLEtBQUssS0FBSyxDQUFBO0lBRXpDLElBQUksYUFBYSxJQUFJLFlBQVksRUFBRSxDQUFDO1FBQ2xDLE9BQU8sSUFBSSxFQUFFLENBQUE7SUFDZixDQUFDO0lBRUQsT0FBTyxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQztRQUMxQixPQUFPLEVBQUUsZ0RBQWdEO0tBQzFELENBQUMsQ0FBQTtBQUNKLENBQUMsQ0FBQTtBQXJCWSxRQUFBLGdCQUFnQixvQkFxQjVCIn0=