"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.vendorNotificationMiddlewares = void 0;
const framework_1 = require("@medusajs/framework");
const query_config_1 = require("./query-config");
const validators_1 = require("./validators");
exports.vendorNotificationMiddlewares = [
    {
        method: ['GET'],
        matcher: '/vendor/notifications',
        middlewares: [
            (0, framework_1.validateAndTransformQuery)(validators_1.VendorGetNotificationParams, query_config_1.vendorNotificationQueryConfig.list)
        ]
    }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWlkZGxld2FyZXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvYXBpL3ZlbmRvci9ub3RpZmljYXRpb25zL21pZGRsZXdhcmVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLG1EQUErRDtBQUcvRCxpREFBOEQ7QUFDOUQsNkNBQTBEO0FBRTdDLFFBQUEsNkJBQTZCLEdBQXNCO0lBQzlEO1FBQ0UsTUFBTSxFQUFFLENBQUMsS0FBSyxDQUFDO1FBQ2YsT0FBTyxFQUFFLHVCQUF1QjtRQUNoQyxXQUFXLEVBQUU7WUFDWCxJQUFBLHFDQUF5QixFQUN2Qix3Q0FBMkIsRUFDM0IsNENBQTZCLENBQUMsSUFBSSxDQUNuQztTQUNGO0tBQ0Y7Q0FDRixDQUFBIn0=