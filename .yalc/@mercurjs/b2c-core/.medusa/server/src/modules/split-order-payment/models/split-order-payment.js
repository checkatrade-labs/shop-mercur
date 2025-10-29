"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SplitOrderPayment = void 0;
const utils_1 = require("@medusajs/framework/utils");
exports.SplitOrderPayment = utils_1.model.define('split_order_payment', {
    id: utils_1.model.id({ prefix: 'sp_ord_pay' }).primaryKey(),
    status: utils_1.model.text(),
    currency_code: utils_1.model.text(),
    authorized_amount: utils_1.model.bigNumber(),
    captured_amount: utils_1.model.bigNumber().default(0),
    refunded_amount: utils_1.model.bigNumber().default(0),
    payment_collection_id: utils_1.model.text()
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3BsaXQtb3JkZXItcGF5bWVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9tb2R1bGVzL3NwbGl0LW9yZGVyLXBheW1lbnQvbW9kZWxzL3NwbGl0LW9yZGVyLXBheW1lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEscURBQWlEO0FBRXBDLFFBQUEsaUJBQWlCLEdBQUcsYUFBSyxDQUFDLE1BQU0sQ0FBQyxxQkFBcUIsRUFBRTtJQUNuRSxFQUFFLEVBQUUsYUFBSyxDQUFDLEVBQUUsQ0FBQyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsQ0FBQyxDQUFDLFVBQVUsRUFBRTtJQUNuRCxNQUFNLEVBQUUsYUFBSyxDQUFDLElBQUksRUFBRTtJQUNwQixhQUFhLEVBQUUsYUFBSyxDQUFDLElBQUksRUFBRTtJQUMzQixpQkFBaUIsRUFBRSxhQUFLLENBQUMsU0FBUyxFQUFFO0lBQ3BDLGVBQWUsRUFBRSxhQUFLLENBQUMsU0FBUyxFQUFFLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztJQUM3QyxlQUFlLEVBQUUsYUFBSyxDQUFDLFNBQVMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7SUFDN0MscUJBQXFCLEVBQUUsYUFBSyxDQUFDLElBQUksRUFBRTtDQUNwQyxDQUFDLENBQUEifQ==