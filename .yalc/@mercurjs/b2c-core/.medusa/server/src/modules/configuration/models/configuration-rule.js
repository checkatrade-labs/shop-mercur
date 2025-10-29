"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConfigurationRule = void 0;
const utils_1 = require("@medusajs/framework/utils");
exports.ConfigurationRule = utils_1.model.define("configuration_rule", {
    id: utils_1.model.id({ prefix: "conf" }).primaryKey(),
    rule_type: utils_1.model
        .enum([
        "global_product_catalog",
        "require_product_approval",
        "product_request_enabled",
        "product_import_enabled",
    ])
        .unique(),
    is_enabled: utils_1.model.boolean(),
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlndXJhdGlvbi1ydWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vc3JjL21vZHVsZXMvY29uZmlndXJhdGlvbi9tb2RlbHMvY29uZmlndXJhdGlvbi1ydWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLHFEQUFrRDtBQUVyQyxRQUFBLGlCQUFpQixHQUFHLGFBQUssQ0FBQyxNQUFNLENBQUMsb0JBQW9CLEVBQUU7SUFDbEUsRUFBRSxFQUFFLGFBQUssQ0FBQyxFQUFFLENBQUMsRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLENBQUMsQ0FBQyxVQUFVLEVBQUU7SUFDN0MsU0FBUyxFQUFFLGFBQUs7U0FDYixJQUFJLENBQUM7UUFDSix3QkFBd0I7UUFDeEIsMEJBQTBCO1FBQzFCLHlCQUF5QjtRQUN6Qix3QkFBd0I7S0FDekIsQ0FBQztTQUNELE1BQU0sRUFBRTtJQUNYLFVBQVUsRUFBRSxhQUFLLENBQUMsT0FBTyxFQUFFO0NBQzVCLENBQUMsQ0FBQyJ9