"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.shippingProfilesQueryConfig = exports.defaultVendorShippingProfileFields = void 0;
exports.defaultVendorShippingProfileFields = [
    'id',
    'name',
    'type',
    'metadata',
    'created_at',
    'updated_at'
];
exports.shippingProfilesQueryConfig = {
    list: {
        defaults: exports.defaultVendorShippingProfileFields,
        isList: true
    },
    retrieve: {
        defaults: exports.defaultVendorShippingProfileFields,
        isList: false
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicXVlcnktY29uZmlnLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2FwaS92ZW5kb3Ivc2hpcHBpbmctcHJvZmlsZXMvcXVlcnktY29uZmlnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFhLFFBQUEsa0NBQWtDLEdBQUc7SUFDaEQsSUFBSTtJQUNKLE1BQU07SUFDTixNQUFNO0lBQ04sVUFBVTtJQUNWLFlBQVk7SUFDWixZQUFZO0NBQ2IsQ0FBQTtBQUVZLFFBQUEsMkJBQTJCLEdBQUc7SUFDekMsSUFBSSxFQUFFO1FBQ0osUUFBUSxFQUFFLDBDQUFrQztRQUM1QyxNQUFNLEVBQUUsSUFBSTtLQUNiO0lBQ0QsUUFBUSxFQUFFO1FBQ1IsUUFBUSxFQUFFLDBDQUFrQztRQUM1QyxNQUFNLEVBQUUsS0FBSztLQUNkO0NBQ0YsQ0FBQSJ9