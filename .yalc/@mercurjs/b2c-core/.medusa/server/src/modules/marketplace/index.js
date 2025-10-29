"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MarketplaceModuleService = exports.MARKETPLACE_MODULE = void 0;
const utils_1 = require("@medusajs/framework/utils");
const service_1 = __importDefault(require("./service"));
exports.MarketplaceModuleService = service_1.default;
exports.MARKETPLACE_MODULE = "marketplace";
exports.default = (0, utils_1.Module)(exports.MARKETPLACE_MODULE, {
    service: service_1.default,
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvbW9kdWxlcy9tYXJrZXRwbGFjZS9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxxREFBbUQ7QUFFbkQsd0RBQWlEO0FBR3hDLG1DQUhGLGlCQUF3QixDQUdFO0FBRHBCLFFBQUEsa0JBQWtCLEdBQUcsYUFBYSxDQUFDO0FBR2hELGtCQUFlLElBQUEsY0FBTSxFQUFDLDBCQUFrQixFQUFFO0lBQ3hDLE9BQU8sRUFBRSxpQkFBd0I7Q0FDbEMsQ0FBQyxDQUFDIn0=