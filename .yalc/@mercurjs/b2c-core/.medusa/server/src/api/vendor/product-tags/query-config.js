"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.vendorProductTagsQueryConfig = exports.vendorProductTagFields = void 0;
exports.vendorProductTagFields = [
    'id',
    'value',
    'metadata',
    'created_at',
    'updated_at'
];
exports.vendorProductTagsQueryConfig = {
    list: {
        defaults: exports.vendorProductTagFields,
        isList: true
    },
    retrieve: {
        defaults: exports.vendorProductTagFields,
        isList: false
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicXVlcnktY29uZmlnLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2FwaS92ZW5kb3IvcHJvZHVjdC10YWdzL3F1ZXJ5LWNvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBYSxRQUFBLHNCQUFzQixHQUFHO0lBQ3BDLElBQUk7SUFDSixPQUFPO0lBQ1AsVUFBVTtJQUNWLFlBQVk7SUFDWixZQUFZO0NBQ2IsQ0FBQTtBQUVZLFFBQUEsNEJBQTRCLEdBQUc7SUFDMUMsSUFBSSxFQUFFO1FBQ0osUUFBUSxFQUFFLDhCQUFzQjtRQUNoQyxNQUFNLEVBQUUsSUFBSTtLQUNiO0lBQ0QsUUFBUSxFQUFFO1FBQ1IsUUFBUSxFQUFFLDhCQUFzQjtRQUNoQyxNQUFNLEVBQUUsS0FBSztLQUNkO0NBQ0YsQ0FBQSJ9