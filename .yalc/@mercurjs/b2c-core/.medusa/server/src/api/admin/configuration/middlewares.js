"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.configurationMiddleware = void 0;
const framework_1 = require("@medusajs/framework");
const validators_1 = require("./validators");
exports.configurationMiddleware = [
    {
        method: ["GET"],
        matcher: "/admin/configuration",
        middlewares: [(0, framework_1.validateAndTransformQuery)(validators_1.AdminGetRulesParams, {})],
    },
    {
        method: ["POST"],
        matcher: "/admin/configuration",
        middlewares: [(0, framework_1.validateAndTransformBody)(validators_1.AdminCreateRule)],
    },
    {
        method: ["POST"],
        matcher: "/admin/configuration/:id",
        middlewares: [(0, framework_1.validateAndTransformBody)(validators_1.AdminUpdateRule)],
    },
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWlkZGxld2FyZXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvYXBpL2FkbWluL2NvbmZpZ3VyYXRpb24vbWlkZGxld2FyZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsbURBSTZCO0FBRTdCLDZDQUlzQjtBQUVULFFBQUEsdUJBQXVCLEdBQXNCO0lBQ3hEO1FBQ0UsTUFBTSxFQUFFLENBQUMsS0FBSyxDQUFDO1FBQ2YsT0FBTyxFQUFFLHNCQUFzQjtRQUMvQixXQUFXLEVBQUUsQ0FBQyxJQUFBLHFDQUF5QixFQUFDLGdDQUFtQixFQUFFLEVBQUUsQ0FBQyxDQUFDO0tBQ2xFO0lBQ0Q7UUFDRSxNQUFNLEVBQUUsQ0FBQyxNQUFNLENBQUM7UUFDaEIsT0FBTyxFQUFFLHNCQUFzQjtRQUMvQixXQUFXLEVBQUUsQ0FBQyxJQUFBLG9DQUF3QixFQUFDLDRCQUFlLENBQUMsQ0FBQztLQUN6RDtJQUNEO1FBQ0UsTUFBTSxFQUFFLENBQUMsTUFBTSxDQUFDO1FBQ2hCLE9BQU8sRUFBRSwwQkFBMEI7UUFDbkMsV0FBVyxFQUFFLENBQUMsSUFBQSxvQ0FBd0IsRUFBQyw0QkFBZSxDQUFDLENBQUM7S0FDekQ7Q0FDRixDQUFDIn0=