import SellerModuleService from "./service";
export declare const SELLER_MODULE = "seller";
export { SellerModuleService };
export * from "./utils";
declare const _default: import("@medusajs/types").ModuleExports<typeof SellerModuleService> & {
    linkable: {
        readonly memberInvite: {
            id: {
                serviceName: "seller";
                field: "memberInvite";
                linkable: "member_invite_id";
                primaryKey: "id";
            };
            toJSON: () => {
                serviceName: "seller";
                field: "memberInvite";
                linkable: "member_invite_id";
                primaryKey: "id";
            };
        };
        readonly member: {
            id: {
                serviceName: "seller";
                field: "member";
                linkable: "member_id";
                primaryKey: "id";
            };
            toJSON: () => {
                serviceName: "seller";
                field: "member";
                linkable: "member_id";
                primaryKey: "id";
            };
        };
        readonly seller: {
            id: {
                serviceName: "seller";
                field: "seller";
                linkable: "seller_id";
                primaryKey: "id";
            };
            toJSON: () => {
                serviceName: "seller";
                field: "seller";
                linkable: "seller_id";
                primaryKey: "id";
            };
        };
        readonly sellerOnboarding: {
            id: {
                serviceName: "seller";
                field: "sellerOnboarding";
                linkable: "seller_onboarding_id";
                primaryKey: "id";
            };
            toJSON: () => {
                serviceName: "seller";
                field: "sellerOnboarding";
                linkable: "seller_onboarding_id";
                primaryKey: "id";
            };
        };
    };
};
export default _default;
