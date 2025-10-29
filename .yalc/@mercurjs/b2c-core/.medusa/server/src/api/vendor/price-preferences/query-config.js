"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.listPricePreferenceQueryConfig = exports.retrivePricePreferenceQueryConfig = exports.vendorPricePreferenceRemoteQueryFields = void 0;
exports.vendorPricePreferenceRemoteQueryFields = [
    'id',
    'attribute',
    'value',
    'is_tax_inclusive',
    'created_at',
    'deleted_at',
    'updated_at'
];
exports.retrivePricePreferenceQueryConfig = {
    defaults: exports.vendorPricePreferenceRemoteQueryFields,
    isList: false
};
exports.listPricePreferenceQueryConfig = {
    ...exports.retrivePricePreferenceQueryConfig,
    isList: true
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicXVlcnktY29uZmlnLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2FwaS92ZW5kb3IvcHJpY2UtcHJlZmVyZW5jZXMvcXVlcnktY29uZmlnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFhLFFBQUEsc0NBQXNDLEdBQUc7SUFDcEQsSUFBSTtJQUNKLFdBQVc7SUFDWCxPQUFPO0lBQ1Asa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixZQUFZO0lBQ1osWUFBWTtDQUNiLENBQUE7QUFFWSxRQUFBLGlDQUFpQyxHQUFHO0lBQy9DLFFBQVEsRUFBRSw4Q0FBc0M7SUFDaEQsTUFBTSxFQUFFLEtBQUs7Q0FDZCxDQUFBO0FBRVksUUFBQSw4QkFBOEIsR0FBRztJQUM1QyxHQUFHLHlDQUFpQztJQUNwQyxNQUFNLEVBQUUsSUFBSTtDQUNiLENBQUEifQ==