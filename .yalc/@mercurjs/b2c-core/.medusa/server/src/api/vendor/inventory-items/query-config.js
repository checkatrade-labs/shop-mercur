"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.vendorInventoryLevelQueryConfig = exports.vendorInventoryLevelFields = exports.vendorInventoryItemQueryConfig = exports.vendorInventoryItemFields = void 0;
exports.vendorInventoryItemFields = [
    'id',
    'title',
    'description',
    'sku',
    'hs_code',
    'origin_country',
    'mid_code',
    'material',
    'weight',
    'length',
    'height',
    'width',
    'requires_shipping',
    'thumbnail',
    'metadata'
];
exports.vendorInventoryItemQueryConfig = {
    list: {
        defaults: exports.vendorInventoryItemFields,
        isList: true
    },
    retrieve: {
        defaults: exports.vendorInventoryItemFields,
        isList: false
    }
};
exports.vendorInventoryLevelFields = [
    'id',
    'inventory_item_id',
    'location_id',
    'available_quantity',
    'stocked_quantity',
    'reserved_quantity',
    'incoming_quantity',
    '*stock_locations',
    '*stock_locations.address'
];
exports.vendorInventoryLevelQueryConfig = {
    list: {
        defaults: exports.vendorInventoryLevelFields,
        isList: true
    },
    retrieve: {
        defaults: exports.vendorInventoryLevelFields,
        isList: false
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicXVlcnktY29uZmlnLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2FwaS92ZW5kb3IvaW52ZW50b3J5LWl0ZW1zL3F1ZXJ5LWNvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBYSxRQUFBLHlCQUF5QixHQUFHO0lBQ3ZDLElBQUk7SUFDSixPQUFPO0lBQ1AsYUFBYTtJQUNiLEtBQUs7SUFDTCxTQUFTO0lBQ1QsZ0JBQWdCO0lBQ2hCLFVBQVU7SUFDVixVQUFVO0lBQ1YsUUFBUTtJQUNSLFFBQVE7SUFDUixRQUFRO0lBQ1IsT0FBTztJQUNQLG1CQUFtQjtJQUNuQixXQUFXO0lBQ1gsVUFBVTtDQUNYLENBQUE7QUFFWSxRQUFBLDhCQUE4QixHQUFHO0lBQzVDLElBQUksRUFBRTtRQUNKLFFBQVEsRUFBRSxpQ0FBeUI7UUFDbkMsTUFBTSxFQUFFLElBQUk7S0FDYjtJQUNELFFBQVEsRUFBRTtRQUNSLFFBQVEsRUFBRSxpQ0FBeUI7UUFDbkMsTUFBTSxFQUFFLEtBQUs7S0FDZDtDQUNGLENBQUE7QUFFWSxRQUFBLDBCQUEwQixHQUFHO0lBQ3hDLElBQUk7SUFDSixtQkFBbUI7SUFDbkIsYUFBYTtJQUNiLG9CQUFvQjtJQUNwQixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsMEJBQTBCO0NBQzNCLENBQUE7QUFFWSxRQUFBLCtCQUErQixHQUFHO0lBQzdDLElBQUksRUFBRTtRQUNKLFFBQVEsRUFBRSxrQ0FBMEI7UUFDcEMsTUFBTSxFQUFFLElBQUk7S0FDYjtJQUNELFFBQVEsRUFBRTtRQUNSLFFBQVEsRUFBRSxrQ0FBMEI7UUFDcEMsTUFBTSxFQUFFLEtBQUs7S0FDZDtDQUNGLENBQUEifQ==