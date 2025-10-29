"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.listAttributeValueQueryConfig = exports.retrieveAttributeValueQueryConfig = exports.defaultVendorAttributeValueFields = exports.listAttributeQueryConfig = exports.retrieveAttributeQueryConfig = exports.defaultVendorAttributeFields = void 0;
exports.defaultVendorAttributeFields = [
    'id',
    'name',
    'description',
    'handle',
    'is_filterable',
    'ui_component',
    'metadata',
    '*possible_values',
    'product_categories.id',
    'product_categories.name'
];
exports.retrieveAttributeQueryConfig = {
    defaults: exports.defaultVendorAttributeFields,
    isList: false
};
exports.listAttributeQueryConfig = {
    ...exports.retrieveAttributeQueryConfig,
    defaultLimit: 50,
    isList: true
};
exports.defaultVendorAttributeValueFields = [
    'id',
    'value',
    'rank',
    'metadata'
];
exports.retrieveAttributeValueQueryConfig = {
    defaults: exports.defaultVendorAttributeValueFields,
    isList: false
};
exports.listAttributeValueQueryConfig = {
    ...exports.retrieveAttributeValueQueryConfig,
    isList: true,
    defaultLimit: 50
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicXVlcnktY29uZmlnLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2FwaS92ZW5kb3IvYXR0cmlidXRlcy9xdWVyeS1jb25maWcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQWEsUUFBQSw0QkFBNEIsR0FBRztJQUMxQyxJQUFJO0lBQ0osTUFBTTtJQUNOLGFBQWE7SUFDYixRQUFRO0lBQ1IsZUFBZTtJQUNmLGNBQWM7SUFDZCxVQUFVO0lBQ1Ysa0JBQWtCO0lBQ2xCLHVCQUF1QjtJQUN2Qix5QkFBeUI7Q0FDMUIsQ0FBQTtBQUVZLFFBQUEsNEJBQTRCLEdBQUc7SUFDMUMsUUFBUSxFQUFFLG9DQUE0QjtJQUN0QyxNQUFNLEVBQUUsS0FBSztDQUNkLENBQUE7QUFFWSxRQUFBLHdCQUF3QixHQUFHO0lBQ3RDLEdBQUcsb0NBQTRCO0lBQy9CLFlBQVksRUFBRSxFQUFFO0lBQ2hCLE1BQU0sRUFBRSxJQUFJO0NBQ2IsQ0FBQTtBQUVZLFFBQUEsaUNBQWlDLEdBQUc7SUFDL0MsSUFBSTtJQUNKLE9BQU87SUFDUCxNQUFNO0lBQ04sVUFBVTtDQUNYLENBQUE7QUFFWSxRQUFBLGlDQUFpQyxHQUFHO0lBQy9DLFFBQVEsRUFBRSx5Q0FBaUM7SUFDM0MsTUFBTSxFQUFFLEtBQUs7Q0FDZCxDQUFBO0FBRVksUUFBQSw2QkFBNkIsR0FBRztJQUMzQyxHQUFHLHlDQUFpQztJQUNwQyxNQUFNLEVBQUUsSUFBSTtJQUNaLFlBQVksRUFBRSxFQUFFO0NBQ2pCLENBQUEifQ==