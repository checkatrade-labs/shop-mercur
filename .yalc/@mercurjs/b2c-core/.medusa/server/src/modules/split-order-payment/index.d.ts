import SplitOrderPaymentModuleService from "./service";
export declare const SPLIT_ORDER_PAYMENT_MODULE = "split_order_payment";
export { SplitOrderPaymentModuleService };
declare const _default: import("@medusajs/types").ModuleExports<typeof SplitOrderPaymentModuleService> & {
    linkable: {
        readonly splitOrderPayment: {
            id: {
                serviceName: "split_order_payment";
                field: "splitOrderPayment";
                linkable: "split_order_payment_id";
                primaryKey: "id";
            };
            toJSON: () => {
                serviceName: "split_order_payment";
                field: "splitOrderPayment";
                linkable: "split_order_payment_id";
                primaryKey: "id";
            };
        };
    };
};
export default _default;
