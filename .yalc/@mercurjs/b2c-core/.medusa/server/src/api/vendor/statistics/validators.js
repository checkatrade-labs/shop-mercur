"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VendorGetStatisticsParams = void 0;
const zod_1 = require("zod");
const DAY_MS = 1000 * 60 * 60 * 24;
exports.VendorGetStatisticsParams = zod_1.z
    .object({
    time_from: zod_1.z.coerce.date(),
    time_to: zod_1.z.coerce.date()
})
    .refine(({ time_from, time_to }) => {
    return time_from <= time_to;
}, 'Invalid time range!')
    .refine(({ time_from, time_to }) => {
    return (time_to.getTime() - time_from.getTime()) / DAY_MS <= 30;
}, 'Time range too long (max 30 days)!');
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsaWRhdG9ycy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hcGkvdmVuZG9yL3N0YXRpc3RpY3MvdmFsaWRhdG9ycy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSw2QkFBdUI7QUFFdkIsTUFBTSxNQUFNLEdBQUcsSUFBSSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxDQUFBO0FBSXJCLFFBQUEseUJBQXlCLEdBQUcsT0FBQztLQUN2QyxNQUFNLENBQUM7SUFDTixTQUFTLEVBQUUsT0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUU7SUFDMUIsT0FBTyxFQUFFLE9BQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFO0NBQ3pCLENBQUM7S0FDRCxNQUFNLENBQUMsQ0FBQyxFQUFFLFNBQVMsRUFBRSxPQUFPLEVBQUUsRUFBRSxFQUFFO0lBQ2pDLE9BQU8sU0FBUyxJQUFJLE9BQU8sQ0FBQTtBQUM3QixDQUFDLEVBQUUscUJBQXFCLENBQUM7S0FDeEIsTUFBTSxDQUFDLENBQUMsRUFBRSxTQUFTLEVBQUUsT0FBTyxFQUFFLEVBQUUsRUFBRTtJQUNqQyxPQUFPLENBQUMsT0FBTyxDQUFDLE9BQU8sRUFBRSxHQUFHLFNBQVMsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxHQUFHLE1BQU0sSUFBSSxFQUFFLENBQUE7QUFDakUsQ0FBQyxFQUFFLG9DQUFvQyxDQUFDLENBQUEifQ==