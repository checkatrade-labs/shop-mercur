"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AttributeModuleService = exports.ATTRIBUTE_MODULE = void 0;
const utils_1 = require("@medusajs/framework/utils");
const service_1 = __importDefault(require("./service"));
exports.AttributeModuleService = service_1.default;
exports.ATTRIBUTE_MODULE = "attribute";
exports.default = (0, utils_1.Module)(exports.ATTRIBUTE_MODULE, {
    service: service_1.default,
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvbW9kdWxlcy9hdHRyaWJ1dGUvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEscURBQW1EO0FBRW5ELHdEQUErQztBQUd0QyxpQ0FIRixpQkFBc0IsQ0FHRTtBQURsQixRQUFBLGdCQUFnQixHQUFHLFdBQVcsQ0FBQztBQUc1QyxrQkFBZSxJQUFBLGNBQU0sRUFBQyx3QkFBZ0IsRUFBRTtJQUN0QyxPQUFPLEVBQUUsaUJBQXNCO0NBQ2hDLENBQUMsQ0FBQyJ9