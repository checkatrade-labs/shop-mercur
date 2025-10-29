"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.vendorMemberQueryConfig = exports.vendorMemberFields = void 0;
exports.vendorMemberFields = [
    'id',
    'email',
    'role',
    'name',
    'bio',
    'phone',
    'photo',
    '*seller'
];
exports.vendorMemberQueryConfig = {
    list: {
        defaults: exports.vendorMemberFields,
        isList: true
    },
    retrieve: {
        defaults: exports.vendorMemberFields,
        isList: false
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicXVlcnktY29uZmlnLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2FwaS92ZW5kb3IvbWVtYmVycy9xdWVyeS1jb25maWcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQWEsUUFBQSxrQkFBa0IsR0FBRztJQUNoQyxJQUFJO0lBQ0osT0FBTztJQUNQLE1BQU07SUFDTixNQUFNO0lBQ04sS0FBSztJQUNMLE9BQU87SUFDUCxPQUFPO0lBQ1AsU0FBUztDQUNWLENBQUE7QUFFWSxRQUFBLHVCQUF1QixHQUFHO0lBQ3JDLElBQUksRUFBRTtRQUNKLFFBQVEsRUFBRSwwQkFBa0I7UUFDNUIsTUFBTSxFQUFFLElBQUk7S0FDYjtJQUNELFFBQVEsRUFBRTtRQUNSLFFBQVEsRUFBRSwwQkFBa0I7UUFDNUIsTUFBTSxFQUFFLEtBQUs7S0FDZDtDQUNGLENBQUEifQ==