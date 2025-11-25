import { z } from 'zod';
export type AlgoliaReview = z.infer<typeof AlgoliaReviewValidator>;
export declare const AlgoliaReviewValidator: z.ZodObject<{
    id: z.ZodString;
    reference: z.ZodString;
    reference_id: z.ZodString;
    rating: z.ZodNumber;
    customer_note: z.ZodNullable<z.ZodString>;
    seller_note: z.ZodNullable<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    id: string;
    reference_id: string;
    reference: string;
    rating: number;
    customer_note: string | null;
    seller_note: string | null;
}, {
    id: string;
    reference_id: string;
    reference: string;
    rating: number;
    customer_note: string | null;
    seller_note: string | null;
}>;
//# sourceMappingURL=algolia-review.d.ts.map