"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.vendorCors = void 0;
const cors_1 = __importDefault(require("cors"));
const utils_1 = require("@medusajs/framework/utils");
const vendorCors = (req, res, next) => {
    const configModule = req.scope.resolve('configModule');
    return (0, cors_1.default)({
        // @ts-expect-error: vendorCors is not a valid config
        origin: (0, utils_1.parseCorsOrigins)(configModule.projectConfig.http.vendorCors),
        credentials: true
    })(req, res, next);
};
exports.vendorCors = vendorCors;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29ycy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9hcGkvdmVuZG9yL2NvcnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsZ0RBQXVCO0FBUXZCLHFEQUE0RDtBQUVyRCxNQUFNLFVBQVUsR0FBRyxDQUN4QixHQUFrQixFQUNsQixHQUFtQixFQUNuQixJQUF3QixFQUN4QixFQUFFO0lBQ0YsTUFBTSxZQUFZLEdBQWlCLEdBQUcsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLGNBQWMsQ0FBQyxDQUFBO0lBRXBFLE9BQU8sSUFBQSxjQUFJLEVBQUM7UUFDVixxREFBcUQ7UUFDckQsTUFBTSxFQUFFLElBQUEsd0JBQWdCLEVBQUMsWUFBWSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDO1FBQ3BFLFdBQVcsRUFBRSxJQUFJO0tBQ2xCLENBQUMsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLElBQUksQ0FBQyxDQUFBO0FBQ3BCLENBQUMsQ0FBQTtBQVpZLFFBQUEsVUFBVSxjQVl0QiJ9