"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.adminProductsMiddlewares = void 0;
const framework_1 = require("@medusajs/framework");
const query_config_1 = require("./query-config");
const validators_1 = require("./validators");
exports.adminProductsMiddlewares = [
    {
        method: ['GET'],
        matcher: '/admin/products/:id/applicable-attributes',
        middlewares: [
            (0, framework_1.validateAndTransformQuery)(validators_1.AdminGetAttributesParams, query_config_1.retrieveAttributeQueryConfig)
        ]
    }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWlkZGxld2FyZXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvYXBpL2FkbWluL3Byb2R1Y3RzL21pZGRsZXdhcmVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLG1EQUErRDtBQUcvRCxpREFBNkQ7QUFDN0QsNkNBQXVEO0FBRTFDLFFBQUEsd0JBQXdCLEdBQXNCO0lBQ3pEO1FBQ0UsTUFBTSxFQUFFLENBQUMsS0FBSyxDQUFDO1FBQ2YsT0FBTyxFQUFFLDJDQUEyQztRQUNwRCxXQUFXLEVBQUU7WUFDWCxJQUFBLHFDQUF5QixFQUN2QixxQ0FBd0IsRUFDeEIsMkNBQTRCLENBQzdCO1NBQ0Y7S0FDRjtDQUNGLENBQUEifQ==