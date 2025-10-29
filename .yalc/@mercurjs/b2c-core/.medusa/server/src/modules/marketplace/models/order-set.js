"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderSet = void 0;
const utils_1 = require("@medusajs/framework/utils");
exports.OrderSet = utils_1.model.define('order_set', {
    id: utils_1.model.id({ prefix: 'ordset' }).primaryKey(),
    display_id: utils_1.model.number().nullable(),
    sales_channel_id: utils_1.model.text(),
    cart_id: utils_1.model.text(),
    customer_id: utils_1.model.text().nullable(),
    payment_collection_id: utils_1.model.text()
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3JkZXItc2V0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vc3JjL21vZHVsZXMvbWFya2V0cGxhY2UvbW9kZWxzL29yZGVyLXNldC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxxREFBaUQ7QUFFcEMsUUFBQSxRQUFRLEdBQUcsYUFBSyxDQUFDLE1BQU0sQ0FBQyxXQUFXLEVBQUU7SUFDaEQsRUFBRSxFQUFFLGFBQUssQ0FBQyxFQUFFLENBQUMsRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLENBQUMsQ0FBQyxVQUFVLEVBQUU7SUFDL0MsVUFBVSxFQUFFLGFBQUssQ0FBQyxNQUFNLEVBQUUsQ0FBQyxRQUFRLEVBQUU7SUFDckMsZ0JBQWdCLEVBQUUsYUFBSyxDQUFDLElBQUksRUFBRTtJQUM5QixPQUFPLEVBQUUsYUFBSyxDQUFDLElBQUksRUFBRTtJQUNyQixXQUFXLEVBQUUsYUFBSyxDQUFDLElBQUksRUFBRSxDQUFDLFFBQVEsRUFBRTtJQUNwQyxxQkFBcUIsRUFBRSxhQUFLLENBQUMsSUFBSSxFQUFFO0NBQ3BDLENBQUMsQ0FBQSJ9