type AddSellerShippingMethodToCartWorkflowInput = {
    cart_id: string;
    option: {
        id: string;
        data?: Record<string, any>;
    };
};
export declare const addSellerShippingMethodToCartWorkflow: import("@medusajs/framework/workflows-sdk").ReturnWorkflow<AddSellerShippingMethodToCartWorkflowInput, unknown, any[]>;
export {};
