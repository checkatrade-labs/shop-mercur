"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConfigurationRuleDefaults = exports.ConfigurationModuleService = exports.CONFIGURATION_MODULE = void 0;
const utils_1 = require("@medusajs/framework/utils");
const service_1 = __importDefault(require("./service"));
exports.ConfigurationModuleService = service_1.default;
const framework_1 = require("@mercurjs/framework");
Object.defineProperty(exports, "ConfigurationRuleDefaults", { enumerable: true, get: function () { return framework_1.ConfigurationRuleDefaults; } });
exports.CONFIGURATION_MODULE = "configuration";
exports.default = (0, utils_1.Module)(exports.CONFIGURATION_MODULE, {
    service: service_1.default,
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvbW9kdWxlcy9jb25maWd1cmF0aW9uL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLHFEQUFtRDtBQUVuRCx3REFBbUQ7QUFJMUMscUNBSkYsaUJBQTBCLENBSUU7QUFIbkMsbURBQWdFO0FBRzNCLDBHQUg1QixxQ0FBeUIsT0FHNEI7QUFEakQsUUFBQSxvQkFBb0IsR0FBRyxlQUFlLENBQUM7QUFHcEQsa0JBQWUsSUFBQSxjQUFNLEVBQUMsNEJBQW9CLEVBQUU7SUFDMUMsT0FBTyxFQUFFLGlCQUEwQjtDQUNwQyxDQUFDLENBQUMifQ==