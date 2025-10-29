import { z } from 'zod';
export type VendorGetStoresParamsType = z.infer<typeof VendorGetStoresParams>;
export declare const VendorGetStoresParams: z.ZodObject<{
    fields: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    fields?: string | undefined;
}, {
    fields?: string | undefined;
}>;
