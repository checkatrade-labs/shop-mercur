"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.vendorOnboardingQueryConfig = exports.vendorOnboardingFields = exports.vendorSellerQueryConfig = exports.vendorSellerFields = void 0;
exports.vendorSellerFields = [
    "id",
    "store_status",
    "name",
    "handle",
    "description",
    "photo",
    "address_line",
    "city",
    "postal_code",
    "country_code",
    "tax_id",
];
exports.vendorSellerQueryConfig = {
    list: {
        defaults: exports.vendorSellerFields,
        isList: true,
    },
    retrieve: {
        defaults: exports.vendorSellerFields,
        isList: false,
    },
};
exports.vendorOnboardingFields = [
    "id",
    "seller_id",
    "store_information",
    "stripe_connection",
    "locations_shipping",
    "products",
    "created_at",
    "updated_at",
];
exports.vendorOnboardingQueryConfig = {
    retrieve: {
        defaults: exports.vendorOnboardingFields,
        isList: false,
    },
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicXVlcnktY29uZmlnLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2FwaS92ZW5kb3Ivc2VsbGVycy9xdWVyeS1jb25maWcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQWEsUUFBQSxrQkFBa0IsR0FBRztJQUNoQyxJQUFJO0lBQ0osY0FBYztJQUNkLE1BQU07SUFDTixRQUFRO0lBQ1IsYUFBYTtJQUNiLE9BQU87SUFDUCxjQUFjO0lBQ2QsTUFBTTtJQUNOLGFBQWE7SUFDYixjQUFjO0lBQ2QsUUFBUTtDQUNULENBQUM7QUFFVyxRQUFBLHVCQUF1QixHQUFHO0lBQ3JDLElBQUksRUFBRTtRQUNKLFFBQVEsRUFBRSwwQkFBa0I7UUFDNUIsTUFBTSxFQUFFLElBQUk7S0FDYjtJQUNELFFBQVEsRUFBRTtRQUNSLFFBQVEsRUFBRSwwQkFBa0I7UUFDNUIsTUFBTSxFQUFFLEtBQUs7S0FDZDtDQUNGLENBQUM7QUFFVyxRQUFBLHNCQUFzQixHQUFHO0lBQ3BDLElBQUk7SUFDSixXQUFXO0lBQ1gsbUJBQW1CO0lBQ25CLG1CQUFtQjtJQUNuQixvQkFBb0I7SUFDcEIsVUFBVTtJQUNWLFlBQVk7SUFDWixZQUFZO0NBQ2IsQ0FBQztBQUVXLFFBQUEsMkJBQTJCLEdBQUc7SUFDekMsUUFBUSxFQUFFO1FBQ1IsUUFBUSxFQUFFLDhCQUFzQjtRQUNoQyxNQUFNLEVBQUUsS0FBSztLQUNkO0NBQ0YsQ0FBQyJ9