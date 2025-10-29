import { z } from 'zod';
export type VendorGetStatisticsParamsType = z.infer<typeof VendorGetStatisticsParams>;
export declare const VendorGetStatisticsParams: z.ZodEffects<z.ZodEffects<z.ZodObject<{
    time_from: z.ZodDate;
    time_to: z.ZodDate;
}, "strip", z.ZodTypeAny, {
    time_from: Date;
    time_to: Date;
}, {
    time_from: Date;
    time_to: Date;
}>, {
    time_from: Date;
    time_to: Date;
}, {
    time_from: Date;
    time_to: Date;
}>, {
    time_from: Date;
    time_to: Date;
}, {
    time_from: Date;
    time_to: Date;
}>;
