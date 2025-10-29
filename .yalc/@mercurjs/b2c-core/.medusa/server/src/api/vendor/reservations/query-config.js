"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.vendorReservationQueryConfig = exports.vendorReservationFields = void 0;
const query_config_1 = require("../inventory-items/query-config");
exports.vendorReservationFields = [
    'id',
    'location_id',
    'inventory_item_id',
    'quantity',
    'line_item_id',
    'description',
    'created_at',
    'updated_at',
    ...query_config_1.vendorInventoryItemFields.map((f) => `inventory_item.${f}`)
];
exports.vendorReservationQueryConfig = {
    list: {
        defaults: exports.vendorReservationFields,
        isList: true
    },
    retrieve: {
        defaults: exports.vendorReservationFields,
        isList: false
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicXVlcnktY29uZmlnLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2FwaS92ZW5kb3IvcmVzZXJ2YXRpb25zL3F1ZXJ5LWNvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxrRUFBMkU7QUFFOUQsUUFBQSx1QkFBdUIsR0FBRztJQUNyQyxJQUFJO0lBQ0osYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixVQUFVO0lBQ1YsY0FBYztJQUNkLGFBQWE7SUFDYixZQUFZO0lBQ1osWUFBWTtJQUNaLEdBQUcsd0NBQXlCLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxrQkFBa0IsQ0FBQyxFQUFFLENBQUM7Q0FDL0QsQ0FBQTtBQUVZLFFBQUEsNEJBQTRCLEdBQUc7SUFDMUMsSUFBSSxFQUFFO1FBQ0osUUFBUSxFQUFFLCtCQUF1QjtRQUNqQyxNQUFNLEVBQUUsSUFBSTtLQUNiO0lBQ0QsUUFBUSxFQUFFO1FBQ1IsUUFBUSxFQUFFLCtCQUF1QjtRQUNqQyxNQUFNLEVBQUUsS0FBSztLQUNkO0NBQ0YsQ0FBQSJ9