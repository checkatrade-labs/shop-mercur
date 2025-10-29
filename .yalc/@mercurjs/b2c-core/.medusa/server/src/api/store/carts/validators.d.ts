import { z } from 'zod';
export type StoreDeleteCartShippingMethodsType = z.infer<typeof StoreDeleteCartShippingMethods>;
export declare const StoreDeleteCartShippingMethods: z.ZodObject<{
    shipping_method_ids: z.ZodArray<z.ZodString, "many">;
}, "strip", z.ZodTypeAny, {
    shipping_method_ids: string[];
}, {
    shipping_method_ids: string[];
}>;
