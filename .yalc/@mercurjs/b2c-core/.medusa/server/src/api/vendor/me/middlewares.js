"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.vendorMeMiddlewares = void 0;
const framework_1 = require("@medusajs/framework");
const query_config_1 = require("../members/query-config");
const validators_1 = require("../members/validators");
exports.vendorMeMiddlewares = [
    {
        method: ['GET'],
        matcher: '/vendor/me',
        middlewares: [
            (0, framework_1.validateAndTransformQuery)(validators_1.VendorGetMemberParams, query_config_1.vendorMemberQueryConfig.retrieve)
        ]
    }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWlkZGxld2FyZXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvYXBpL3ZlbmRvci9tZS9taWRkbGV3YXJlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxtREFBK0Q7QUFHL0QsMERBQWlFO0FBQ2pFLHNEQUE2RDtBQUVoRCxRQUFBLG1CQUFtQixHQUFzQjtJQUNwRDtRQUNFLE1BQU0sRUFBRSxDQUFDLEtBQUssQ0FBQztRQUNmLE9BQU8sRUFBRSxZQUFZO1FBQ3JCLFdBQVcsRUFBRTtZQUNYLElBQUEscUNBQXlCLEVBQ3ZCLGtDQUFxQixFQUNyQixzQ0FBdUIsQ0FBQyxRQUFRLENBQ2pDO1NBQ0Y7S0FDRjtDQUNGLENBQUEifQ==