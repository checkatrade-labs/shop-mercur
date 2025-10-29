import { z } from 'zod';
export type VendorGetPayoutAccountParamsType = z.infer<typeof VendorGetPayoutAccountParams>;
export declare const VendorGetPayoutAccountParams: z.ZodObject<{
    fields: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    fields?: string | undefined;
}, {
    fields?: string | undefined;
}>;
export type VendorCreatePayoutAccountType = z.infer<typeof VendorCreatePayoutAccount>;
/**
 * @schema VendorCreatePayoutAccount
 * type: object
 * properties:
 *   context:
 *     type: object
 *     description: Additional data needed by the payment provider to create a payment account.
 *     nullable: true
 */
export declare const VendorCreatePayoutAccount: z.ZodObject<{
    context: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
}, "strict", z.ZodTypeAny, {
    context?: Record<string, unknown> | undefined;
}, {
    context?: Record<string, unknown> | undefined;
}>;
export type VendorCreateOnboardingType = z.infer<typeof VendorCreateOnboarding>;
/**
 * @schema VendorCreateOnboarding
 * type: object
 * properties:
 *   context:
 *     type: object
 *     description: Additional data needed by the payment provider to create onboarding.
 *     nullable: true
 */
export declare const VendorCreateOnboarding: z.ZodObject<{
    context: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
}, "strict", z.ZodTypeAny, {
    context?: Record<string, unknown> | undefined;
}, {
    context?: Record<string, unknown> | undefined;
}>;
