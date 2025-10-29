"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getLastFulfillmentStatus = void 0;
const utils_1 = require("@medusajs/framework/utils");
const getLastFulfillmentStatus = (order) => {
    const FulfillmentStatus = {
        NOT_FULFILLED: 'not_fulfilled',
        PARTIALLY_FULFILLED: 'partially_fulfilled',
        FULFILLED: 'fulfilled',
        PARTIALLY_SHIPPED: 'partially_shipped',
        SHIPPED: 'shipped',
        DELIVERED: 'delivered',
        PARTIALLY_DELIVERED: 'partially_delivered',
        CANCELED: 'canceled'
    };
    const fulfillmentStatus = {};
    for (const status in FulfillmentStatus) {
        fulfillmentStatus[FulfillmentStatus[status]] = 0;
    }
    const statusMap = {
        canceled_at: FulfillmentStatus.CANCELED,
        delivered_at: FulfillmentStatus.DELIVERED,
        shipped_at: FulfillmentStatus.SHIPPED,
        packed_at: FulfillmentStatus.FULFILLED
    };
    for (const fulfillmentCollection of order.fulfillments) {
        for (const key in statusMap) {
            if (fulfillmentCollection[key]) {
                fulfillmentStatus[statusMap[key]] += 1;
                break;
            }
        }
    }
    const totalFulfillments = order.fulfillments.length;
    const totalFulfillmentsExceptCanceled = totalFulfillments - fulfillmentStatus[FulfillmentStatus.CANCELED];
    const hasUnfulfilledItems = (order.items || [])?.filter((i) => (0, utils_1.isDefined)(i?.detail?.raw_fulfilled_quantity) &&
        utils_1.MathBN.lt(i.detail.raw_fulfilled_quantity, i.raw_quantity)).length > 0;
    if (fulfillmentStatus[FulfillmentStatus.DELIVERED] > 0) {
        if (fulfillmentStatus[FulfillmentStatus.DELIVERED] ===
            totalFulfillmentsExceptCanceled &&
            !hasUnfulfilledItems) {
            return FulfillmentStatus.DELIVERED;
        }
        return FulfillmentStatus.PARTIALLY_DELIVERED;
    }
    if (fulfillmentStatus[FulfillmentStatus.SHIPPED] > 0) {
        if (fulfillmentStatus[FulfillmentStatus.SHIPPED] ===
            totalFulfillmentsExceptCanceled &&
            !hasUnfulfilledItems) {
            return FulfillmentStatus.SHIPPED;
        }
        return FulfillmentStatus.PARTIALLY_SHIPPED;
    }
    if (fulfillmentStatus[FulfillmentStatus.FULFILLED] > 0) {
        if (fulfillmentStatus[FulfillmentStatus.FULFILLED] ===
            totalFulfillmentsExceptCanceled &&
            !hasUnfulfilledItems) {
            return FulfillmentStatus.FULFILLED;
        }
        return FulfillmentStatus.PARTIALLY_FULFILLED;
    }
    if (fulfillmentStatus[FulfillmentStatus.CANCELED] > 0 &&
        fulfillmentStatus[FulfillmentStatus.CANCELED] === totalFulfillments) {
        return FulfillmentStatus.CANCELED;
    }
    return FulfillmentStatus.NOT_FULFILLED;
};
exports.getLastFulfillmentStatus = getLastFulfillmentStatus;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWdncmVnYXRlLXN0YXR1cy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy93b3JrZmxvd3Mvb3JkZXIvdXRpbHMvYWdncmVnYXRlLXN0YXR1cy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFDQSxxREFBNkQ7QUFFdEQsTUFBTSx3QkFBd0IsR0FBRyxDQUFDLEtBQXFCLEVBQUUsRUFBRTtJQUNoRSxNQUFNLGlCQUFpQixHQUFHO1FBQ3hCLGFBQWEsRUFBRSxlQUFlO1FBQzlCLG1CQUFtQixFQUFFLHFCQUFxQjtRQUMxQyxTQUFTLEVBQUUsV0FBVztRQUN0QixpQkFBaUIsRUFBRSxtQkFBbUI7UUFDdEMsT0FBTyxFQUFFLFNBQVM7UUFDbEIsU0FBUyxFQUFFLFdBQVc7UUFDdEIsbUJBQW1CLEVBQUUscUJBQXFCO1FBQzFDLFFBQVEsRUFBRSxVQUFVO0tBQ3JCLENBQUE7SUFFRCxNQUFNLGlCQUFpQixHQUFHLEVBQUUsQ0FBQTtJQUU1QixLQUFLLE1BQU0sTUFBTSxJQUFJLGlCQUFpQixFQUFFLENBQUM7UUFDdkMsaUJBQWlCLENBQUMsaUJBQWlCLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUE7SUFDbEQsQ0FBQztJQUVELE1BQU0sU0FBUyxHQUFHO1FBQ2hCLFdBQVcsRUFBRSxpQkFBaUIsQ0FBQyxRQUFRO1FBQ3ZDLFlBQVksRUFBRSxpQkFBaUIsQ0FBQyxTQUFTO1FBQ3pDLFVBQVUsRUFBRSxpQkFBaUIsQ0FBQyxPQUFPO1FBQ3JDLFNBQVMsRUFBRSxpQkFBaUIsQ0FBQyxTQUFTO0tBQ3ZDLENBQUE7SUFFRCxLQUFLLE1BQU0scUJBQXFCLElBQUksS0FBSyxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3ZELEtBQUssTUFBTSxHQUFHLElBQUksU0FBUyxFQUFFLENBQUM7WUFDNUIsSUFBSSxxQkFBcUIsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDO2dCQUMvQixpQkFBaUIsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUE7Z0JBQ3RDLE1BQUs7WUFDUCxDQUFDO1FBQ0gsQ0FBQztJQUNILENBQUM7SUFFRCxNQUFNLGlCQUFpQixHQUFHLEtBQUssQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFBO0lBQ25ELE1BQU0sK0JBQStCLEdBQ25DLGlCQUFpQixHQUFHLGlCQUFpQixDQUFDLGlCQUFpQixDQUFDLFFBQVEsQ0FBQyxDQUFBO0lBRW5FLE1BQU0sbUJBQW1CLEdBQ3ZCLENBQUMsS0FBSyxDQUFDLEtBQUssSUFBSSxFQUFFLENBQUMsRUFBRSxNQUFNLENBQ3pCLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FDSixJQUFBLGlCQUFTLEVBQUMsQ0FBQyxFQUFFLE1BQU0sRUFBRSxzQkFBc0IsQ0FBQztRQUM1QyxjQUFNLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsc0JBQXNCLEVBQUUsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUM3RCxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUE7SUFFZCxJQUFJLGlCQUFpQixDQUFDLGlCQUFpQixDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDO1FBQ3ZELElBQ0UsaUJBQWlCLENBQUMsaUJBQWlCLENBQUMsU0FBUyxDQUFDO1lBQzVDLCtCQUErQjtZQUNqQyxDQUFDLG1CQUFtQixFQUNwQixDQUFDO1lBQ0QsT0FBTyxpQkFBaUIsQ0FBQyxTQUFTLENBQUE7UUFDcEMsQ0FBQztRQUVELE9BQU8saUJBQWlCLENBQUMsbUJBQW1CLENBQUE7SUFDOUMsQ0FBQztJQUVELElBQUksaUJBQWlCLENBQUMsaUJBQWlCLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUM7UUFDckQsSUFDRSxpQkFBaUIsQ0FBQyxpQkFBaUIsQ0FBQyxPQUFPLENBQUM7WUFDMUMsK0JBQStCO1lBQ2pDLENBQUMsbUJBQW1CLEVBQ3BCLENBQUM7WUFDRCxPQUFPLGlCQUFpQixDQUFDLE9BQU8sQ0FBQTtRQUNsQyxDQUFDO1FBRUQsT0FBTyxpQkFBaUIsQ0FBQyxpQkFBaUIsQ0FBQTtJQUM1QyxDQUFDO0lBRUQsSUFBSSxpQkFBaUIsQ0FBQyxpQkFBaUIsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQztRQUN2RCxJQUNFLGlCQUFpQixDQUFDLGlCQUFpQixDQUFDLFNBQVMsQ0FBQztZQUM1QywrQkFBK0I7WUFDakMsQ0FBQyxtQkFBbUIsRUFDcEIsQ0FBQztZQUNELE9BQU8saUJBQWlCLENBQUMsU0FBUyxDQUFBO1FBQ3BDLENBQUM7UUFFRCxPQUFPLGlCQUFpQixDQUFDLG1CQUFtQixDQUFBO0lBQzlDLENBQUM7SUFFRCxJQUNFLGlCQUFpQixDQUFDLGlCQUFpQixDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUM7UUFDakQsaUJBQWlCLENBQUMsaUJBQWlCLENBQUMsUUFBUSxDQUFDLEtBQUssaUJBQWlCLEVBQ25FLENBQUM7UUFDRCxPQUFPLGlCQUFpQixDQUFDLFFBQVEsQ0FBQTtJQUNuQyxDQUFDO0lBRUQsT0FBTyxpQkFBaUIsQ0FBQyxhQUFhLENBQUE7QUFDeEMsQ0FBQyxDQUFBO0FBekZZLFFBQUEsd0JBQXdCLDRCQXlGcEMifQ==