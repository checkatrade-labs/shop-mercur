type ValidateCartShippingOptionsInput = {
    cart_id: string;
    option_ids: string[];
};
export declare const validateCartShippingOptionsStep: import("@medusajs/framework/workflows-sdk").StepFunction<ValidateCartShippingOptionsInput, {
    sellerProducts: any[];
    sellerShippingOptions: any[];
}>;
export {};
