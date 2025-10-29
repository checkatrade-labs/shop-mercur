"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PayoutModuleService = exports.PAYOUT_MODULE = void 0;
const utils_1 = require("@medusajs/framework/utils");
const service_1 = __importDefault(require("./service"));
exports.PayoutModuleService = service_1.default;
exports.PAYOUT_MODULE = "payout";
exports.default = (0, utils_1.Module)(exports.PAYOUT_MODULE, {
    service: service_1.default,
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvbW9kdWxlcy9wYXlvdXQvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEscURBQW1EO0FBRW5ELHdEQUE0QztBQUduQyw4QkFIRixpQkFBbUIsQ0FHRTtBQURmLFFBQUEsYUFBYSxHQUFHLFFBQVEsQ0FBQztBQUd0QyxrQkFBZSxJQUFBLGNBQU0sRUFBQyxxQkFBYSxFQUFFO0lBQ25DLE9BQU8sRUFBRSxpQkFBbUI7Q0FDN0IsQ0FBQyxDQUFDIn0=