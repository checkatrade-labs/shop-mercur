import { z } from 'zod';
export type VendorGetSalesChannelParamsType = z.infer<typeof VendorGetSalesChannelParams>;
export declare const VendorGetSalesChannelParams: z.ZodObject<{
    fields: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    fields?: string | undefined;
}, {
    fields?: string | undefined;
}>;
