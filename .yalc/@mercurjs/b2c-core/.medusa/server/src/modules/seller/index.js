"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SellerModuleService = exports.SELLER_MODULE = void 0;
const utils_1 = require("@medusajs/framework/utils");
const service_1 = __importDefault(require("./service"));
exports.SellerModuleService = service_1.default;
exports.SELLER_MODULE = "seller";
__exportStar(require("./utils"), exports);
exports.default = (0, utils_1.Module)(exports.SELLER_MODULE, { service: service_1.default });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvbW9kdWxlcy9zZWxsZXIvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxxREFBbUQ7QUFFbkQsd0RBQTRDO0FBR25DLDhCQUhGLGlCQUFtQixDQUdFO0FBRGYsUUFBQSxhQUFhLEdBQUcsUUFBUSxDQUFDO0FBRXRDLDBDQUF3QjtBQUV4QixrQkFBZSxJQUFBLGNBQU0sRUFBQyxxQkFBYSxFQUFFLEVBQUUsT0FBTyxFQUFFLGlCQUFtQixFQUFFLENBQUMsQ0FBQyJ9