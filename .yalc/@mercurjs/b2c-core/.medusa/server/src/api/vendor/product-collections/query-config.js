"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.vendorProductCollectionsProductsQueryConfig = exports.vendorProductCollectionsProductsFields = exports.vendorProductCollectionQueryConfig = exports.vendorProductCollectionFields = void 0;
exports.vendorProductCollectionFields = [
    'id',
    'title',
    'handle',
    'created_at',
    'updated_at',
    'metadata'
];
exports.vendorProductCollectionQueryConfig = {
    list: {
        defaults: exports.vendorProductCollectionFields,
        isList: true
    },
    retrieve: {
        defaults: exports.vendorProductCollectionFields,
        isList: false
    }
};
exports.vendorProductCollectionsProductsFields = [
    'id',
    'title',
    'status',
    'thumbnail',
    'handle',
    'collection.id',
    'collection.title',
    'variants.id'
];
exports.vendorProductCollectionsProductsQueryConfig = {
    list: {
        defaults: exports.vendorProductCollectionsProductsFields,
        isList: true
    },
    retrieve: {
        defaults: exports.vendorProductCollectionsProductsFields,
        isList: false
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicXVlcnktY29uZmlnLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2FwaS92ZW5kb3IvcHJvZHVjdC1jb2xsZWN0aW9ucy9xdWVyeS1jb25maWcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQWEsUUFBQSw2QkFBNkIsR0FBRztJQUMzQyxJQUFJO0lBQ0osT0FBTztJQUNQLFFBQVE7SUFDUixZQUFZO0lBQ1osWUFBWTtJQUNaLFVBQVU7Q0FDWCxDQUFBO0FBRVksUUFBQSxrQ0FBa0MsR0FBRztJQUNoRCxJQUFJLEVBQUU7UUFDSixRQUFRLEVBQUUscUNBQTZCO1FBQ3ZDLE1BQU0sRUFBRSxJQUFJO0tBQ2I7SUFDRCxRQUFRLEVBQUU7UUFDUixRQUFRLEVBQUUscUNBQTZCO1FBQ3ZDLE1BQU0sRUFBRSxLQUFLO0tBQ2Q7Q0FDRixDQUFBO0FBRVksUUFBQSxzQ0FBc0MsR0FBRztJQUNwRCxJQUFJO0lBQ0osT0FBTztJQUNQLFFBQVE7SUFDUixXQUFXO0lBQ1gsUUFBUTtJQUNSLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsYUFBYTtDQUNkLENBQUE7QUFDWSxRQUFBLDJDQUEyQyxHQUFHO0lBQ3pELElBQUksRUFBRTtRQUNKLFFBQVEsRUFBRSw4Q0FBc0M7UUFDaEQsTUFBTSxFQUFFLElBQUk7S0FDYjtJQUNELFFBQVEsRUFBRTtRQUNSLFFBQVEsRUFBRSw4Q0FBc0M7UUFDaEQsTUFBTSxFQUFFLEtBQUs7S0FDZDtDQUNGLENBQUEifQ==