"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SplitOrderPaymentModuleService = exports.SPLIT_ORDER_PAYMENT_MODULE = void 0;
const utils_1 = require("@medusajs/framework/utils");
const service_1 = __importDefault(require("./service"));
exports.SplitOrderPaymentModuleService = service_1.default;
exports.SPLIT_ORDER_PAYMENT_MODULE = "split_order_payment";
exports.default = (0, utils_1.Module)(exports.SPLIT_ORDER_PAYMENT_MODULE, {
    service: service_1.default,
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvbW9kdWxlcy9zcGxpdC1vcmRlci1wYXltZW50L2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLHFEQUFtRDtBQUVuRCx3REFBdUQ7QUFHOUMseUNBSEYsaUJBQThCLENBR0U7QUFEMUIsUUFBQSwwQkFBMEIsR0FBRyxxQkFBcUIsQ0FBQztBQUdoRSxrQkFBZSxJQUFBLGNBQU0sRUFBQyxrQ0FBMEIsRUFBRTtJQUNoRCxPQUFPLEVBQUUsaUJBQThCO0NBQ3hDLENBQUMsQ0FBQyJ9