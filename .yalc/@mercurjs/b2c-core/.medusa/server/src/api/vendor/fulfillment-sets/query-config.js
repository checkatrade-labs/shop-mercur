"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.vendorFulfillmentSetQueryConfig = exports.vendorFulfillmentSetFields = void 0;
exports.vendorFulfillmentSetFields = [
    'id',
    'name',
    'type',
    'created_at',
    'updated_at',
    'deleted_at',
    '*service_zones',
    '*service_zones.geo_zones'
];
exports.vendorFulfillmentSetQueryConfig = {
    list: {
        defaults: exports.vendorFulfillmentSetFields,
        isList: true
    },
    retrieve: {
        defaults: exports.vendorFulfillmentSetFields,
        isList: false
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicXVlcnktY29uZmlnLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2FwaS92ZW5kb3IvZnVsZmlsbG1lbnQtc2V0cy9xdWVyeS1jb25maWcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQWEsUUFBQSwwQkFBMEIsR0FBRztJQUN4QyxJQUFJO0lBQ0osTUFBTTtJQUNOLE1BQU07SUFDTixZQUFZO0lBQ1osWUFBWTtJQUNaLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsMEJBQTBCO0NBQzNCLENBQUE7QUFFWSxRQUFBLCtCQUErQixHQUFHO0lBQzdDLElBQUksRUFBRTtRQUNKLFFBQVEsRUFBRSxrQ0FBMEI7UUFDcEMsTUFBTSxFQUFFLElBQUk7S0FDYjtJQUNELFFBQVEsRUFBRTtRQUNSLFFBQVEsRUFBRSxrQ0FBMEI7UUFDcEMsTUFBTSxFQUFFLEtBQUs7S0FDZDtDQUNGLENBQUEifQ==