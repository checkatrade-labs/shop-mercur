"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AlgoliaReviewValidator = void 0;
const zod_1 = require("zod");
exports.AlgoliaReviewValidator = zod_1.z.object({
    id: zod_1.z.string(),
    reference: zod_1.z.string(),
    reference_id: zod_1.z.string(),
    rating: zod_1.z.coerce.number(),
    customer_note: zod_1.z.string().nullable(),
    seller_note: zod_1.z.string().nullable()
});
//# sourceMappingURL=algolia-review.js.map