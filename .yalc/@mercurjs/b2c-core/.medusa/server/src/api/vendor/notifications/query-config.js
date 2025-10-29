"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.vendorNotificationQueryConfig = exports.defaultVendorNotificationFields = void 0;
exports.defaultVendorNotificationFields = [
    'id',
    'to',
    'channel',
    'template',
    'data',
    'created_at',
    'updated_at'
];
exports.vendorNotificationQueryConfig = {
    list: {
        defaults: exports.defaultVendorNotificationFields,
        isList: true
    },
    retrieve: {
        defaults: exports.defaultVendorNotificationFields,
        isList: false
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicXVlcnktY29uZmlnLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2FwaS92ZW5kb3Ivbm90aWZpY2F0aW9ucy9xdWVyeS1jb25maWcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQWEsUUFBQSwrQkFBK0IsR0FBRztJQUM3QyxJQUFJO0lBQ0osSUFBSTtJQUNKLFNBQVM7SUFDVCxVQUFVO0lBQ1YsTUFBTTtJQUNOLFlBQVk7SUFDWixZQUFZO0NBQ2IsQ0FBQTtBQUVZLFFBQUEsNkJBQTZCLEdBQUc7SUFDM0MsSUFBSSxFQUFFO1FBQ0osUUFBUSxFQUFFLHVDQUErQjtRQUN6QyxNQUFNLEVBQUUsSUFBSTtLQUNiO0lBQ0QsUUFBUSxFQUFFO1FBQ1IsUUFBUSxFQUFFLHVDQUErQjtRQUN6QyxNQUFNLEVBQUUsS0FBSztLQUNkO0NBQ0YsQ0FBQSJ9