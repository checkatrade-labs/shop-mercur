"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getRuleValue = getRuleValue;
exports.checkConfigurationRule = checkConfigurationRule;
const utils_1 = require("@medusajs/framework/utils");
const configuration_1 = require("../../../../modules/configuration");
function getRuleValue(container, rule_type) {
    const configurationService = container.resolve(configuration_1.CONFIGURATION_MODULE);
    return configurationService.isRuleEnabled(rule_type);
}
function checkConfigurationRule(rule_type, expected_value) {
    return async (req, res, next) => {
        if ((await getRuleValue(req.scope, rule_type)) !== expected_value) {
            res.status(403).json({
                message: `This feature is disabled!`,
                type: utils_1.MedusaError.Types.NOT_FOUND,
            });
            return;
        }
        return next();
    };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2stY29uZmlndXJhdGlvbi1ydWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL3NoYXJlZC9pbmZyYS9odHRwL21pZGRsZXdhcmVzL2NoZWNrLWNvbmZpZ3VyYXRpb24tcnVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQWVBLG9DQU9DO0FBRUQsd0RBbUJDO0FBcENELHFEQUF3RDtBQUd4RCxxRUFHMkM7QUFFM0MsU0FBZ0IsWUFBWSxDQUMxQixTQUEwQixFQUMxQixTQUFnQztJQUVoQyxNQUFNLG9CQUFvQixHQUN4QixTQUFTLENBQUMsT0FBTyxDQUE2QixvQ0FBb0IsQ0FBQyxDQUFDO0lBQ3RFLE9BQU8sb0JBQW9CLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0FBQ3ZELENBQUM7QUFFRCxTQUFnQixzQkFBc0IsQ0FDcEMsU0FBZ0MsRUFDaEMsY0FBdUI7SUFFdkIsT0FBTyxLQUFLLEVBQ1YsR0FBa0IsRUFDbEIsR0FBbUIsRUFDbkIsSUFBa0IsRUFDbEIsRUFBRTtRQUNGLElBQUksQ0FBQyxNQUFNLFlBQVksQ0FBQyxHQUFHLENBQUMsS0FBSyxFQUFFLFNBQVMsQ0FBQyxDQUFDLEtBQUssY0FBYyxFQUFFLENBQUM7WUFDbEUsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUM7Z0JBQ25CLE9BQU8sRUFBRSwyQkFBMkI7Z0JBQ3BDLElBQUksRUFBRSxtQkFBVyxDQUFDLEtBQUssQ0FBQyxTQUFTO2FBQ2xDLENBQUMsQ0FBQztZQUNILE9BQU87UUFDVCxDQUFDO1FBRUQsT0FBTyxJQUFJLEVBQUUsQ0FBQztJQUNoQixDQUFDLENBQUM7QUFDSixDQUFDIn0=