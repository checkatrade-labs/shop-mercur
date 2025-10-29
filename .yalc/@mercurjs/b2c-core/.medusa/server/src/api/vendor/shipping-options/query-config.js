"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.vendorShippingOptionQueryConfig = exports.vendorShippingOptionFields = void 0;
exports.vendorShippingOptionFields = [
    'id',
    'name',
    'price_type',
    'data',
    'provider_id',
    'metadata',
    'created_at',
    'updated_at',
    '*type',
    '*prices',
    '*service_zone',
    '*shipping_profile',
    '*provider'
];
exports.vendorShippingOptionQueryConfig = {
    list: {
        defaults: exports.vendorShippingOptionFields,
        isList: true
    },
    retrieve: {
        defaults: exports.vendorShippingOptionFields,
        isList: false
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicXVlcnktY29uZmlnLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2FwaS92ZW5kb3Ivc2hpcHBpbmctb3B0aW9ucy9xdWVyeS1jb25maWcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQWEsUUFBQSwwQkFBMEIsR0FBRztJQUN4QyxJQUFJO0lBQ0osTUFBTTtJQUNOLFlBQVk7SUFDWixNQUFNO0lBQ04sYUFBYTtJQUNiLFVBQVU7SUFDVixZQUFZO0lBQ1osWUFBWTtJQUNaLE9BQU87SUFDUCxTQUFTO0lBQ1QsZUFBZTtJQUNmLG1CQUFtQjtJQUNuQixXQUFXO0NBQ1osQ0FBQTtBQUVZLFFBQUEsK0JBQStCLEdBQUc7SUFDN0MsSUFBSSxFQUFFO1FBQ0osUUFBUSxFQUFFLGtDQUEwQjtRQUNwQyxNQUFNLEVBQUUsSUFBSTtLQUNiO0lBQ0QsUUFBUSxFQUFFO1FBQ1IsUUFBUSxFQUFFLGtDQUEwQjtRQUNwQyxNQUFNLEVBQUUsS0FBSztLQUNkO0NBQ0YsQ0FBQSJ9