"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.listAttributeValueQueryConfig = exports.retrieveAttributeValueQueryConfig = exports.defaultAdminAttributeValueFields = exports.listAttributeQueryConfig = exports.retrieveAttributeQueryConfig = exports.defaultAdminAttributeFields = void 0;
exports.defaultAdminAttributeFields = [
    'id',
    'name',
    'description',
    'handle',
    'is_filterable',
    'is_required',
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
exports.defaultAdminAttributeValueFields = [
    'id',
    'value',
    'rank',
    'metadata'
];
exports.retrieveAttributeValueQueryConfig = {
    defaults: exports.defaultAdminAttributeValueFields,
    isList: false
};
exports.listAttributeValueQueryConfig = {
    ...exports.retrieveAttributeValueQueryConfig,
    isList: true,
    defaultLimit: 50
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicXVlcnktY29uZmlnLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2FwaS9hZG1pbi9hdHRyaWJ1dGVzL3F1ZXJ5LWNvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBYSxRQUFBLDJCQUEyQixHQUFHO0lBQ3pDLElBQUk7SUFDSixNQUFNO0lBQ04sYUFBYTtJQUNiLFFBQVE7SUFDUixlQUFlO0lBQ2YsYUFBYTtJQUNiLGNBQWM7SUFDZCxVQUFVO0lBQ1Ysa0JBQWtCO0lBQ2xCLHVCQUF1QjtJQUN2Qix5QkFBeUI7Q0FDMUIsQ0FBQTtBQUVZLFFBQUEsNEJBQTRCLEdBQUc7SUFDMUMsUUFBUSxFQUFFLG1DQUEyQjtJQUNyQyxNQUFNLEVBQUUsS0FBSztDQUNkLENBQUE7QUFFWSxRQUFBLHdCQUF3QixHQUFHO0lBQ3RDLEdBQUcsb0NBQTRCO0lBQy9CLFlBQVksRUFBRSxFQUFFO0lBQ2hCLE1BQU0sRUFBRSxJQUFJO0NBQ2IsQ0FBQTtBQUVZLFFBQUEsZ0NBQWdDLEdBQUc7SUFDOUMsSUFBSTtJQUNKLE9BQU87SUFDUCxNQUFNO0lBQ04sVUFBVTtDQUNYLENBQUE7QUFFWSxRQUFBLGlDQUFpQyxHQUFHO0lBQy9DLFFBQVEsRUFBRSx3Q0FBZ0M7SUFDMUMsTUFBTSxFQUFFLEtBQUs7Q0FDZCxDQUFBO0FBRVksUUFBQSw2QkFBNkIsR0FBRztJQUMzQyxHQUFHLHlDQUFpQztJQUNwQyxNQUFNLEVBQUUsSUFBSTtJQUNaLFlBQVksRUFBRSxFQUFFO0NBQ2pCLENBQUEifQ==