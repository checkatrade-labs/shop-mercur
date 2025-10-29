"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.listAttributeQueryConfig = exports.retrieveAttributeQueryConfig = exports.defaultAdminAttributeFields = void 0;
exports.defaultAdminAttributeFields = [
    'id',
    'name',
    'description',
    'handle',
    'ui_component',
    'metadata',
    '*possible_values',
    'product_categories.id',
    'product_categories.name'
];
exports.retrieveAttributeQueryConfig = {
    defaults: exports.defaultAdminAttributeFields,
    isList: false
};
exports.listAttributeQueryConfig = {
    ...exports.retrieveAttributeQueryConfig,
    defaultLimit: 50,
    isList: true
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicXVlcnktY29uZmlnLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2FwaS9hZG1pbi9wcm9kdWN0cy9xdWVyeS1jb25maWcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQWEsUUFBQSwyQkFBMkIsR0FBRztJQUN6QyxJQUFJO0lBQ0osTUFBTTtJQUNOLGFBQWE7SUFDYixRQUFRO0lBQ1IsY0FBYztJQUNkLFVBQVU7SUFDVixrQkFBa0I7SUFDbEIsdUJBQXVCO0lBQ3ZCLHlCQUF5QjtDQUMxQixDQUFBO0FBRVksUUFBQSw0QkFBNEIsR0FBRztJQUMxQyxRQUFRLEVBQUUsbUNBQTJCO0lBQ3JDLE1BQU0sRUFBRSxLQUFLO0NBQ2QsQ0FBQTtBQUVZLFFBQUEsd0JBQXdCLEdBQUc7SUFDdEMsR0FBRyxvQ0FBNEI7SUFDL0IsWUFBWSxFQUFFLEVBQUU7SUFDaEIsTUFBTSxFQUFFLElBQUk7Q0FDYixDQUFBIn0=