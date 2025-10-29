"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminUpdateRule = exports.AdminCreateRule = exports.AdminGetRulesParams = void 0;
const zod_1 = require("zod");
const validators_1 = require("@medusajs/medusa/api/utils/validators");
const framework_1 = require("@mercurjs/framework");
exports.AdminGetRulesParams = (0, validators_1.createFindParams)({
    offset: 0,
    limit: 50
});
exports.AdminCreateRule = zod_1.z.object({
    rule_type: zod_1.z.nativeEnum(framework_1.ConfigurationRuleType),
    is_enabled: zod_1.z.boolean()
});
exports.AdminUpdateRule = zod_1.z.object({
    is_enabled: zod_1.z.boolean()
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsaWRhdG9ycy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hcGkvYWRtaW4vY29uZmlndXJhdGlvbi92YWxpZGF0b3JzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLDZCQUF1QjtBQUV2QixzRUFBd0U7QUFFeEUsbURBQTJEO0FBRzlDLFFBQUEsbUJBQW1CLEdBQUcsSUFBQSw2QkFBZ0IsRUFBQztJQUNsRCxNQUFNLEVBQUUsQ0FBQztJQUNULEtBQUssRUFBRSxFQUFFO0NBQ1YsQ0FBQyxDQUFBO0FBY1csUUFBQSxlQUFlLEdBQUcsT0FBQyxDQUFDLE1BQU0sQ0FBQztJQUN0QyxTQUFTLEVBQUUsT0FBQyxDQUFDLFVBQVUsQ0FBQyxpQ0FBcUIsQ0FBQztJQUM5QyxVQUFVLEVBQUUsT0FBQyxDQUFDLE9BQU8sRUFBRTtDQUN4QixDQUFDLENBQUE7QUFVVyxRQUFBLGVBQWUsR0FBRyxPQUFDLENBQUMsTUFBTSxDQUFDO0lBQ3RDLFVBQVUsRUFBRSxPQUFDLENBQUMsT0FBTyxFQUFFO0NBQ3hCLENBQUMsQ0FBQSJ9