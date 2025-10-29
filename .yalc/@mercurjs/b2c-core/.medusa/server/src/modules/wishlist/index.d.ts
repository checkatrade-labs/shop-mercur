import WishlistModuleService from "./service";
export declare const WISHLIST_MODULE = "wishlist";
export { WishlistModuleService };
export * from "./utils";
declare const _default: import("@medusajs/types").ModuleExports<typeof WishlistModuleService> & {
    linkable: {
        readonly wishlist: {
            id: {
                serviceName: "wishlist";
                field: "wishlist";
                linkable: "wishlist_id";
                primaryKey: "id";
            };
            toJSON: () => {
                serviceName: "wishlist";
                field: "wishlist";
                linkable: "wishlist_id";
                primaryKey: "id";
            };
        };
    };
};
export default _default;
