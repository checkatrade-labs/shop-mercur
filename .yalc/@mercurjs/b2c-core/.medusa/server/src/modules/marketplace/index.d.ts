import MarketplaceModuleService from "./service";
export declare const MARKETPLACE_MODULE = "marketplace";
export { MarketplaceModuleService };
declare const _default: import("@medusajs/types").ModuleExports<typeof MarketplaceModuleService> & {
    linkable: {
        readonly orderSet: {
            id: {
                serviceName: "marketplace";
                field: "orderSet";
                linkable: "order_set_id";
                primaryKey: "id";
            };
            toJSON: () => {
                serviceName: "marketplace";
                field: "orderSet";
                linkable: "order_set_id";
                primaryKey: "id";
            };
        };
    };
};
export default _default;
